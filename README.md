# Vestigium 2.0

A small multilingual website (English/Croatian) for **Vestigium**, a community-focused association. Built with plain HTML, CSS and vanilla JavaScript — no frameworks, no build step. You can open `index.html` in a browser and it just works.

Live site: https://tyhrr.github.io/vestigium (GitHub Pages)

## What's in it

- **Language switcher** — toggles between English and Croatian, saves the choice in `localStorage`, and translates text, meta tags and attributes via `data-i18n` keys.
- **Image carousel** in the "About" section — auto-slides every 4s, with prev/next buttons, dots, keyboard arrows and pause-on-hover.
- **Visitor counter** in the footer, persisted in `localStorage`.
- **Responsive navigation** with a hamburger menu for mobile and multi-level dropdowns.
- SEO bits: dynamic meta tags, `manifest.json`, `robots.txt`, `sitemap.xml`.

The palette is green/white/gray and the layout is mobile-first.

## Running locally

No install needed.

```bash
git clone https://github.com/tyhrr/vestigium.git
cd vestigium
# open index.html in your browser
```

For development, the test pages live in `tests/language-switcher/` and there's a small debug helper at `tests/scripts/verify-language-switcher.js` (exposes `testEN()`, `testHR()`, `debugLS()` in the console).

## Project layout

```
vestigium/
├── index.html
├── manifest.json, robots.txt, sitemap.xml
├── src/
│   ├── assets/
│   │   ├── css/        # main.css, navigation-advanced.css
│   │   ├── js/         # language-switcher.js, about-carousel.js, visitor-counter.js, main.js
│   │   └── images/     # activities/, favicon/, logo/, erasmus/
│   └── pages/
└── tests/
    ├── language-switcher/
    └── scripts/
```

## Upcoming events ("Coming up")

The homepage shows the next 3 events from the two public Google Calendars (Vrbani and Brezovica).

- `tools/fetch-events.mjs` reads both iCal feeds, expands recurring events and writes `src/data/upcoming-events.json`.
- `.github/workflows/update-events.yml` runs it every 3 hours (and on demand from the Actions tab) and commits the JSON only when the events change.
- `src/assets/js/upcoming-events.js` renders the cards in the current language and hides the section if the file is missing (e.g. when opening `index.html` from disk).

Run it locally with `npm install --no-save node-ical@0.20.1 && node tools/fetch-events.mjs`.

## Gallery page

`src/pages/gallery.html` (linked from the Gallery button in the navbar) shows:

- Four story cards about what happens at Vestigium (EKO PLAC, workshops, community life, Zelenica).
- 172 photos from the association's "WEB VESTIGIUM" Google Drive folder, optimised to WebP (640px thumbnails + 1600px full size) in `src/assets/images/gallery/`, with bilingual alt text and a theme in `src/data/gallery.json`. Filters, "Show more" and a lightbox are in `src/assets/js/gallery.js`.
- The official Facebook Page Plugin for facebook.com/udrugavestigium, which shows the latest posts with their reactions, comments and shares.

To add photos: save a WebP pair (`NNN-theme.webp` and `NNN-theme-thumb.webp`) in `src/assets/images/gallery/` and add an entry to `src/data/gallery.json` with `category` (market, workshops, community, outdoors, people) and `alt.en` / `alt.hr`.

## Adding a translation

1. Open `src/assets/js/language-switcher.js`.
2. Add a key to the `TRANSLATIONS` object in both `en` and `hr` (it's nested, e.g. `hero.title`).
3. Put `data-i18n="hero.title"` on the element in `index.html`.

```js
// in TRANSLATIONS
en: { hero: { title: 'Building Sustainable Communities' } },
hr: { hero: { title: 'Izgradnja održivih zajednica' } }
```

## Adding carousel images

Drop images into `src/assets/images/activities/` and register them:

```js
window.vestigiumCarousel.addImage({
    src: 'src/assets/images/activities/new-image.jpg',
    alt: 'Description',
    title: 'Image title'
});
```

You can also tweak the auto-slide delay with `window.vestigiumCarousel.updateSettings({ autoSlideDelay: 6000 })`.

## Troubleshooting

- **Language selector missing** — check that `language-switcher.js` loaded and look at the browser console. `tests/language-switcher/debug-final.html` is the quickest way to diagnose.
- **Translations not changing** — make sure elements have `data-i18n` and the keys exist in `TRANSLATIONS`.
- **Carousel broken** — confirm `about-carousel.js` is included, the container exists in the HTML, and the images are in `src/assets/images/activities/`.

## Notes

- Address on the site: Grančarska 2a, Brezovica (updated from the old Vrbana Area, Zagreb).
- The original (v1) Vestigium site lives in a separate repo.

---

Built for Vestigium. If something's off, open an issue.