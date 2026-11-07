# Vestigium 2.0

A small multilingual website (English/Croatian) for **Vestigium**, a community-focused association. Built with plain HTML, CSS and vanilla JavaScript — no frameworks, no build step. You can open `index.html` in a browser and it just works.

Live site: https://tyhrr.github.io/Vestigium-2.0 (GitHub Pages)

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
git clone https://github.com/tyhrr/Vestigium-2.0.git
cd Vestigium-2.0
# open index.html in your browser
```

For development, the test pages live in `tests/language-switcher/` and there's a small debug helper at `tests/scripts/verify-language-switcher.js` (exposes `testEN()`, `testHR()`, `debugLS()` in the console).

## Project layout

```
Vestigium-2.0/
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