// === Calendar init (unified UX and locale sync) ===
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('fc-calendar');
    if (!el) return;

    // Prevent double initialization if this script runs multiple times in dev.
    if (el.dataset.fcInit === '1') return;
    el.dataset.fcInit = '1';

    // Locale helper – read from <html lang>, normalize to 'en'|'hr'
    const getLocale = () => {
      const htmlLang = (document.documentElement.lang || 'en').toLowerCase();
      if (htmlLang.startsWith('hr')) return 'hr';
      return 'en';
    };


    // Create calendar
    const calendar = new FullCalendar.Calendar(el, {
      initialView: 'dayGridMonth',
      height: 'auto',
      contentHeight: 'auto',
      expandRows: true,
      stickyHeaderDates: true,
      nowIndicator: true,
      firstDay: 1, // Monday as first day (EU convention)
      locale: getLocale(),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      },
      // Single source of truth for title — do not touch DOM
      titleFormat: { year: 'numeric', month: 'long' },
      views: {
        dayGridMonth: {
          titleFormat: { year: 'numeric', month: 'long' },
        },
        timeGridWeek: {
          titleFormat: { day: 'numeric', month: 'short', year: 'numeric' },
        },
        listWeek: {
          titleFormat: { day: 'numeric', month: 'short', year: 'numeric' },
        },
      },
      dayHeaderContent(arg) {
        const locale = (document.documentElement.lang || 'en').toLowerCase().startsWith('hr') ? 'hr' : 'en';
        const d = arg.date;
        const dow = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(d).replace(/\.$/, '');
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        return { html: `${dow} ${day}.${month}` };
      },
      // Remove trailing dot from day numbers (Croatian locale adds a period)
      dayCellContent(arg) {
        // Always use plain numeric day without locale-added punctuation
        return { html: String(arg.date.getDate()) };
      },
      dayMaxEventRows: 3,
      navLinks: true,
      eventDisplay: 'block',
      eventTimeFormat: { hour: '2-digit', minute: '2-digit', hour12: false },

      // Example: enable iCal feed if configured; keep commented until available.
      eventSources: [
        { 
          url: 'https://calendar.google.com/calendar/ical/byteroad.pro%40gmail.com/public/basic.ics',
          format: 'ics'
        }
      ],

      eventClick(info) {
        // Respect accessibility; avoid full navigation unless requested.
        info.jsEvent.preventDefault();
        if (info.event.url) window.open(info.event.url, '_blank', 'noopener');
      }
    });

    calendar.render();

    // Re-apply locale when language changes via the site's Language Switcher.
    document.addEventListener('languageChanged', () => {
      calendar.setOption('locale', getLocale());
    });
  });
})();
