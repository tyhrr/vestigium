#!/usr/bin/env node
// Builds src/data/upcoming-events.json from the association's public Google
// Calendars, so the static site can show the next events without an API key.
// Google's iCal feeds send no CORS headers, so this runs server-side (GitHub
// Action, see .github/workflows/update-events.yml), not in the browser.
//
// Usage: node tools/fetch-events.mjs [--out path] [--days 60] [--limit 30]
// Needs: npm ci --prefix tools (the workflow does this).

import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ical from 'node-ical';
import { occurrences } from './occurrences.mjs';

// Repeating events with no time zone expand from the machine's zone. The feeds
// are read as UTC, so a run on any machine must match the one on GitHub.
process.env.TZ = 'UTC';

const CALENDARS = [
  { id: 'udruga.vestigium@gmail.com', place: 'Vrbani', address: 'Rudeška 142' },
  { id: 'zadruga.zelenica@gmail.com', place: 'Brezovica', address: 'Grančarska 2a' },
];

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(root, arg('out', 'src/data/upcoming-events.json'));
const DAYS = Number(arg('days', 60));
const LIMIT = Number(arg('limit', 30));

const now = new Date();
const horizon = new Date(now.getTime() + DAYS * 864e5);

// node-ical builds all-day dates at local midnight of the machine running it
const localDate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const clean = (s) => (typeof s === 'string' ? s : s?.val ?? '').replace(/\s+/g, ' ').trim();

async function readCalendar(cal) {
  const url = `https://calendar.google.com/calendar/ical/${encodeURIComponent(cal.id)}/public/basic.ics`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${cal.id}: HTTP ${res.status}`);
  const data = ical.sync.parseICS(await res.text());

  return Object.values(data)
    .filter((ev) => ev.type === 'VEVENT' && ev.status !== 'CANCELLED')
    .flatMap((ev) => occurrences(ev, now, horizon))
    .filter(({ start, end }) => end > now && start < horizon)
    .map(({ start, end, allDay, ev }) => ({
      title: clean(ev.summary) || 'Event',
      // All-day events carry a calendar date, not an instant
      start: allDay ? localDate(start) : start.toISOString(),
      end: allDay ? localDate(end) : end.toISOString(),
      allDay,
      place: cal.place,
      address: cal.address,
      location: clean(ev.location) || null,
    }));
}

const results = await Promise.allSettled(CALENDARS.map(readCalendar));
const failed = results.filter((r) => r.status === 'rejected');
failed.forEach((r) => console.error('warning:', r.reason.message));
// Writing a partial result would remove that calendar's events from the site
if (failed.length) {
  console.error('A calendar failed; keeping the existing file.');
  process.exit(1);
}

// All-day dates sort as the start of that day in Zagreb
const toUtc = (e) => (e.allDay ? new Date(`${e.start}T00:00:00+01:00`).toISOString() : e.start);

const seen = new Set();
const events = results
  .flatMap((r) => r.value)
  .sort((a, b) => toUtc(a).localeCompare(toUtc(b)))
  .filter((e) => {
    const key = `${e.start}|${e.title}|${e.place}`;
    return seen.has(key) ? false : seen.add(key);
  })
  .slice(0, LIMIT);

// Only rewrite when the events changed, so the scheduled workflow does not
// commit (and redeploy Pages) on every run just because generatedAt moved.
const previous = await readFile(OUT, 'utf8').then(JSON.parse).catch(() => null);
if (previous && JSON.stringify(previous.events) === JSON.stringify(events)) {
  console.log('No changes in upcoming events.');
  process.exit(0);
}

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify({ generatedAt: now.toISOString(), timeZone: 'Europe/Zagreb', events }, null, 2) + '\n');
console.log(`Wrote ${events.length} events to ${OUT}`);
