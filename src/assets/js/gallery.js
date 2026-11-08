/* =============================================================================
   GALLERY PAGE
   Photos come from src/data/gallery.json (exported from the association's
   "WEB VESTIGIUM" Drive folder, optimised to WebP in src/assets/images/gallery).
   Filters by theme, lazy grid, and a <dialog> lightbox with keyboard and
   swipe navigation. Captions follow the site language (EN/HR).
   ============================================================================= */
(function () {
  'use strict';

  const DATA_URL = '../data/gallery.json';
  const IMG_DIR = '../assets/images/gallery/';
  const PAGE = 24; // photos rendered per "Show more"

  let photos = [];
  let filter = 'all';
  let shown = PAGE;
  let current = -1;

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const switcher = () => window.vestigiumLanguageSwitcher;
  const lang = () => (switcher() && switcher().currentLanguage) || 'en';
  const t = (key, fallback) => {
    const v = switcher() && switcher().t(key);
    return v && v !== key ? v : fallback;
  };
  const alt = (p) => (p.alt && (p.alt[lang()] || p.alt.en)) || '';

  const visible = () => (filter === 'all' ? photos : photos.filter((p) => p.category === filter));

  function render() {
    const grid = $('.gallery-grid');
    if (!grid) return;
    const list = visible();
    const items = list.slice(0, shown).map((p, i) => {
      const li = document.createElement('li');
      li.className = 'gallery-grid__item';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'gallery-grid__button';
      btn.dataset.index = String(i);
      const img = document.createElement('img');
      img.src = IMG_DIR + p.thumb;
      img.alt = alt(p);
      img.width = p.w;
      img.height = p.h;
      img.loading = 'lazy';
      img.decoding = 'async';
      btn.append(img);
      li.append(btn);
      return li;
    });
    grid.replaceChildren(...items);

    const count = $('.gallery-photos__count');
    if (count) count.textContent = `${list.length} ${t('gallery.photos.count', 'photos')}`;

    let more = $('.gallery-more');
    if (list.length > shown) {
      if (!more) {
        more = document.createElement('button');
        more.type = 'button';
        more.className = 'button button--secondary gallery-more';
        more.addEventListener('click', () => {
          shown += PAGE;
          render();
        });
        grid.after(more);
      }
      more.textContent = t('gallery.photos.more', 'Show more photos');
      more.hidden = false;
    } else if (more) {
      more.hidden = true;
    }
  }

  function setFilter(next, scroll) {
    filter = next;
    shown = PAGE;
    $$('.gallery-filter').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === next)));
    render();
    if (scroll) $('#photos').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ---------- Lightbox ---------- */
  const dialog = () => $('.lightbox');

  function show(i) {
    const list = visible();
    if (!list.length) return;
    current = (i + list.length) % list.length;
    const p = list[current];
    const img = $('.lightbox__image');
    img.src = IMG_DIR + p.src;
    img.alt = alt(p);
    $('.lightbox__caption').textContent = `${alt(p)} · ${current + 1} / ${list.length}`;
  }

  function open(i) {
    const d = dialog();
    if (!d || typeof d.showModal !== 'function') return;
    show(i);
    d.showModal();
  }

  function bindLightbox() {
    const d = dialog();
    if (!d) return;
    d.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      const action = target ? target.dataset.action : null;
      if (action === 'close' || e.target === d) d.close();
      if (action === 'prev') show(current - 1);
      if (action === 'next') show(current + 1);
    });
    d.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(current - 1);
      if (e.key === 'ArrowRight') show(current + 1);
    });
    let x0 = null;
    d.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    d.addEventListener('touchend', (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  }

  async function init() {
    $$('.gallery-filter').forEach((b) => b.addEventListener('click', () => setFilter(b.dataset.filter, false)));
    $$('.story-card__link').forEach((b) => b.addEventListener('click', () => setFilter(b.dataset.filter, true)));
    const grid = $('.gallery-grid');
    if (grid) {
      grid.addEventListener('click', (e) => {
        const btn = e.target.closest('.gallery-grid__button');
        if (btn) open(Number(btn.dataset.index));
      });
    }
    bindLightbox();
    document.addEventListener('languageChanged', render);

    try {
      const res = await fetch(DATA_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      photos = (await res.json()).photos || [];
    } catch (err) {
      photos = [];
    }
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
