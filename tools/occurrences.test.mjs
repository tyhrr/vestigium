import test from 'node:test';
import assert from 'node:assert/strict';
import { occurrences } from './occurrences.mjs';

const now = new Date('2026-03-02T12:00:00Z');
const horizon = new Date('2026-03-31T00:00:00Z');
const at = (iso) => new Date(iso);

// Stand-in for rrule: returns the given dates that fall inside the window
const weekly = (...dates) => ({
  between: (from, to) => dates.map(at).filter((d) => d >= from && d <= to),
});

const twoHours = {
  start: at('2026-01-05T09:00:00Z'),
  end: at('2026-01-05T11:00:00Z'),
};

test('a single event is returned as it is', () => {
  const ev = { start: at('2026-03-10T09:00:00Z'), end: at('2026-03-10T10:00:00Z') };
  assert.deepEqual(occurrences(ev, now, horizon), [{ start: ev.start, end: ev.end, allDay: false, ev }]);
});

test('an event with no end ends when it starts', () => {
  const ev = { start: at('2026-03-10T09:00:00Z') };
  assert.equal(occurrences(ev, now, horizon)[0].end, ev.start);
});

test('date-only events are all-day', () => {
  const ev = { start: at('2026-03-10T00:00:00Z'), datetype: 'date' };
  assert.equal(occurrences(ev, now, horizon)[0].allDay, true);
});

test('each repetition keeps the original duration', () => {
  const ev = { ...twoHours, rrule: weekly('2026-03-09T09:00:00Z', '2026-03-16T09:00:00Z') };
  const result = occurrences(ev, now, horizon);
  assert.deepEqual(result.map((o) => o.start.toISOString()), ['2026-03-09T09:00:00.000Z', '2026-03-16T09:00:00.000Z']);
  assert.equal(result[0].end.toISOString(), '2026-03-09T11:00:00.000Z');
});

test('an occurrence already in progress is included', () => {
  const ev = { ...twoHours, rrule: weekly('2026-03-02T11:00:00Z') };
  assert.equal(occurrences(ev, now, horizon).length, 1);
});

test('an occurrence that ended before now is left out', () => {
  const ev = { ...twoHours, rrule: weekly('2026-03-02T09:00:00Z') };
  assert.equal(occurrences(ev, now, horizon).length, 0);
});

test('excluded dates are skipped', () => {
  const ev = {
    ...twoHours,
    rrule: weekly('2026-03-09T09:00:00Z', '2026-03-16T09:00:00Z'),
    exdate: { '2026-03-09': at('2026-03-09T09:00:00Z') },
  };
  assert.deepEqual(occurrences(ev, now, horizon).map((o) => o.start.toISOString()), ['2026-03-16T09:00:00.000Z']);
});

test('a moved occurrence uses its new time and details', () => {
  const moved = { start: at('2026-03-09T15:00:00Z'), end: at('2026-03-09T16:00:00Z'), summary: 'Moved' };
  const ev = { ...twoHours, rrule: weekly('2026-03-09T09:00:00Z'), recurrences: { '2026-03-09': moved } };
  assert.deepEqual(occurrences(ev, now, horizon), [{ start: moved.start, end: moved.end, allDay: false, ev: moved }]);
});

test('a cancelled occurrence is removed', () => {
  const cancelled = { status: 'CANCELLED', start: at('2026-03-09T09:00:00Z') };
  const ev = { ...twoHours, rrule: weekly('2026-03-09T09:00:00Z'), recurrences: { '2026-03-09': cancelled } };
  assert.equal(occurrences(ev, now, horizon).length, 0);
});
