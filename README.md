# Vestigium

A bilingual website (English/Croatian) for **Vestigium**, an ecological-creative association in Zagreb. Built with plain HTML, CSS and vanilla JavaScript: no framework and no build step.

Live site: https://tyhrr.github.io/vestigium (GitHub Pages, published from `main`)

## What's in it

- **Language switcher**: toggles English and Croatian, remembers the choice in `localStorage` and translates text and attributes through `data-i18n` keys.
- **Responsive header**: sticks to the top. The whole menu sits in one row from 1024px; below that it collapses into a hamburger.
- **"About" carousel**: slides every 4s, with previous/next buttons, a photo count, swipe and keyboard arrows. It stays still for visitors who ask for reduced motion.
- **"Coming up"**: the next events, read from two Google Calendars.
- **Gallery page**: photos, filters, lightbox and the association's Facebook feed.
- **Facebook and Instagram links**: icons in the header from 1024px, in the footer below that.
- **Visitor counter** in the footer.

## Running locally

```bash
git clone https://github.com/tyhrr/vestigium.git
cd vestigium
python3 -m http.server 8000 --bind 127.0.0.1
# open http://127.0.0.1:8000
```

Opening `index.html` directly also works, but "Coming up" and the gallery photos need a local server to load their JSON.

## Project layout

```
vestigium/
├── index.html
├── manifest.json
├── src/
│   ├── assets/
│   │   ├── css/    # main.css, navigation-advanced.css (header and menu)
│   │   ├── js/     # main.js (menu), language-switcher.js, about-carousel.js,
│   │   │           # upcoming-events.js, gallery.js, visitor-counter.js
│   │   ├── fonts/  icons/
│   │   └── images/
│   ├── data/       # upcoming-events.json, gallery.json
│   └── pages/      # gallery.html
├── tools/          # calendar script and its test, add-icon.sh
├── DESIGN.md       # colours, type and components
└── PRODUCT.md      # who the site is for
```

## Checks

GitHub Actions (`.github/workflows/ui-quality.yml`) runs these on every push to `main`:

```bash
for f in src/assets/js/*.js; do node --check "$f"; done
node --test tools/occurrences.test.mjs
npx html-validate@9.4.0 index.html "src/pages/*.html"
```

It also runs Lighthouse on both pages.

## Visitor counter

GitHub Pages has no server, so the shared total is kept by [Abacus](https://abacus.jasoncameron.dev), a free counter API that needs no account. `src/assets/js/visitor-counter.js` adds one visit per browser every 24 hours and shows that total plus the 9302 visits recorded before it existed.

Visits from `localhost` are read but not counted. If Abacus does not answer, the counter stays hidden. Every visitor's browser connects to that service, so it can see their IP address.

## Upcoming events

- `tools/fetch-events.mjs` reads both iCal feeds, expands repeating events and writes `src/data/upcoming-events.json`. If either calendar fails, it keeps the existing file.
- `.github/workflows/update-events.yml` runs it every 3 hours (or on demand from the Actions tab) and commits the JSON only when the events change.
- `src/assets/js/upcoming-events.js` renders the cards in the current language and hides the section if the file is missing.

To run it locally:

```bash
npm ci --ignore-scripts --prefix tools
node tools/fetch-events.mjs
```

## Gallery

`src/pages/gallery.html` shows four story cards, 172 optimised photos and the Facebook Page Plugin for facebook.com/udrugavestigium.

To add a photo, save a WebP pair (`NNN-theme.webp` and `NNN-theme-thumb.webp`) in `src/assets/images/gallery/` and add an entry to `src/data/gallery.json` with `category` (market, workshops, community, outdoors, people) and `alt.en` / `alt.hr`.

## Adding a translation

1. Add the key to both `en` and `hr` in `TRANSLATIONS`, in `src/assets/js/language-switcher.js`.
2. Put it on the element: `data-i18n="hero.title"` for text, or `data-i18n-attr="aria-label:carousel.next"` for an attribute.

## Adding carousel images

1. Save the image as `src/assets/images/activities/about-usN.jpg`, continuing the numbering.
2. Raise `length` in `this.images` in `src/assets/js/about-carousel.js`.
3. Add `carousel.photoN` in both languages in `TRANSLATIONS`.

## Troubleshooting

- **Language selector missing or text not changing**: look for errors in the browser console, and check the keys exist in `TRANSLATIONS`.
- **Carousel broken**: confirm `about-carousel.js` is included and the images are in `src/assets/images/activities/`.
- **Changes not showing after a push**: reload with Ctrl+Shift+R; GitHub Pages and the browser cache files for a few minutes.

---

Built for Vestigium. If something's off, open an issue.
