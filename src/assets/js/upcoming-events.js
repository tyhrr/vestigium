/* =============================================================================
   UPCOMING EVENTS + CALENDAR EMBED
   - "Coming up" cards: the next 3 events from src/data/upcoming-events.json,
     which .github/workflows/update-events.yml refreshes from the public
     Google Calendars every few hours (Google's feeds cannot be read from the
     browser: no CORS).
   - Calendar embed: month view on wide screens, agenda on narrow ones, in the
     site's current language.
   ============================================================================= */
(function () {
  'use strict';

  const DATA_URL = './src/data/upcoming-events.json';
  const TIME_ZONE = 'Europe/Zagreb';
  const COUNT = 3;
  const LOCALES = { en: 'en-GB', hr: 'hr-HR' };
  const narrow = window.matchMedia('(max-width: 767px)');

  let events = [];

  const switcher = () => window.vestigiumLanguageSwitcher;
  const lang = () => (switcher() && switcher().currentLanguage) || (document.documentElement.lang || 'en').slice(0, 2);
  const locale = () => LOCALES[lang()] || 'en-GB';
  const t = (key, fallback) => {
    const value = switcher() && switcher().t(key);
    return value && value !== key ? value : fallback;
  };

  const fmt = (options) => new Intl.DateTimeFormat(locale(), { timeZone: TIME_ZONE, ...options });

  // Today's date in Zagreb as YYYY-MM-DD, to compare with all-day dates
  const todayInZagreb = () => new Intl.DateTimeFormat('en-CA', { timeZone: TIME_ZONE }).format(new Date());

  function upcoming(now = new Date()) {
    const today = todayInZagreb();
    return events
      .filter((e) => (e.allDay ? e.start >= today : new Date(e.start) >= now))
      .slice(0, COUNT);
  }

  function dateOf(e) {
    // All-day dates are calendar days; anchor them at noon so no zone shifts the day
    return e.allDay ? new Date(`${e.start}T12:00:00Z`) : new Date(e.start);
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function card(e) {
    const start = dateOf(e);
    const li = el('li', `event-card event-card--${e.place.toLowerCase()}`);

    const date = el('time', 'event-card__date');
    date.dateTime = e.start;
    date.append(
      el('span', 'event-card__day', fmt({ day: 'numeric' }).format(start)),
      el('span', 'event-card__month', fmt({ month: 'short' }).format(start).replace('.', ''))
    );

    const weekday = fmt({ weekday: 'long' }).format(start);
    let when = weekday.charAt(0).toUpperCase() + weekday.slice(1);
    if (e.allDay) {
      when += ` · ${t('upcoming.allDay', 'All day')}`;
    } else {
      const time = fmt({ hour: '2-digit', minute: '2-digit', hour12: false });
      when += ` · ${time.format(start)}`;
      if (e.end && e.end !== e.start) when += `–${time.format(new Date(e.end))}`;
    }

    const body = el('div', 'event-card__body');
    body.append(
      el('p', 'event-card__when', when),
      el('h3', 'event-card__title', e.title),
      el('p', 'event-card__place', [e.place, e.location || e.address].filter(Boolean).join(' · '))
    );

    li.append(date, body);
    return li;
  }

  function render() {
    const section = document.getElementById('coming-up');
    const list = section && section.querySelector('.coming-up__list');
    if (!list) return;

    const next = upcoming();
    list.replaceChildren(...next.map(card));
    section.hidden = next.length === 0;
  }

  async function load() {
    try {
      const res = await fetch(DATA_URL, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      events = Array.isArray(data.events) ? data.events : [];
    } catch (error) {
      // Opened from file:// or data missing: keep the section hidden
      events = [];
    }
    render();
  }

  function updateCalendarEmbed() {
    const frame = document.querySelector('.calendar__embed');
    if (!frame) return;
    const url = new URL(frame.src);
    url.searchParams.set('mode', narrow.matches ? 'AGENDA' : 'MONTH');
    url.searchParams.set('hl', lang());
    if (url.toString() !== frame.src) frame.src = url.toString();
  }

  function init() {
    load();
    updateCalendarEmbed();
    document.addEventListener('languageChanged', () => {
      render();
      updateCalendarEmbed();
    });
    narrow.addEventListener('change', updateCalendarEmbed);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
