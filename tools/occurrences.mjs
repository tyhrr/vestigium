// Turns one parsed calendar event into its dated occurrences between now and horizon.

export function occurrences(ev, now, horizon) {
  const start = ev.start;
  const end = ev.end ?? start;
  const duration = end - start;
  const allDay = ev.datetype === 'date';

  if (!ev.rrule) return [{ start, end, allDay, ev }];

  const exdates = new Set(Object.values(ev.exdate ?? {}).map((d) => new Date(d).toISOString()));
  // Look back one duration so an occurrence already in progress is included
  const from = new Date(now.getTime() - Math.max(duration, 0));
  return ev.rrule.between(from, horizon, true).flatMap((date) => {
    const iso = date.toISOString();
    if (exdates.has(iso)) return [];
    const override = ev.recurrences?.[iso.slice(0, 10)] ?? ev.recurrences?.[iso];
    if (override) {
      if (override.status === 'CANCELLED') return [];
      return [{ start: override.start, end: override.end ?? override.start, allDay, ev: override }];
    }
    return [{ start: date, end: new Date(date.getTime() + duration), allDay, ev }];
  });
}
