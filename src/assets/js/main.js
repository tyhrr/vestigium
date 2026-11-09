/**
 * Vestigium: header menu and current-section highlight.
 * Smooth scrolling and the header offset for anchors are plain CSS (main.css).
 */

'use strict';

// Keep in sync with the 1024px breakpoint in navigation-advanced.css
const desktop = window.matchMedia('(min-width: 1024px)');

function initNavigation() {
  const toggle = document.querySelector('.navigation__toggle');
  const menu = document.querySelector('.navigation__menu');
  if (!toggle || !menu) return;

  const isOpen = () => menu.classList.contains('navigation__menu--open');

  const closeSubmenus = () => {
    menu.querySelectorAll('.navigation__submenu--open').forEach((submenu) => {
      submenu.classList.remove('navigation__submenu--open');
      submenu.previousElementSibling.setAttribute('aria-expanded', 'false');
    });
  };

  const setOpen = (open) => {
    menu.classList.toggle('navigation__menu--open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (!open) closeSubmenus();
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  menu.addEventListener('click', (event) => {
    const link = event.target.closest('.navigation__link');
    if (!link) return;

    // From 1024px dropdowns open on hover/focus and every link navigates.
    // Dropping focus lets the dropdown close after a click.
    if (desktop.matches) {
      link.blur();
      return;
    }

    if (link.classList.contains('navigation__link--has-submenu')) {
      event.preventDefault();
      const wasExpanded = link.getAttribute('aria-expanded') === 'true';
      closeSubmenus();
      link.setAttribute('aria-expanded', String(!wasExpanded));
      link.nextElementSibling.classList.toggle('navigation__submenu--open', !wasExpanded);
      return;
    }

    setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (isOpen() && !menu.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  desktop.addEventListener('change', () => setOpen(false));
}

function initActiveLink() {
  // Links to other pages (Gallery) keep the aria-current set in their HTML
  const links = document.querySelectorAll('.navigation__link[href^="#"]');
  const sections = [...document.querySelectorAll('section[id]')];
  if (!links.length || !sections.length) return;

  let scheduled = false;

  const update = () => {
    scheduled = false;
    const position = window.scrollY + 100;
    const current = sections.find(
      (section) => position >= section.offsetTop && position < section.offsetTop + section.offsetHeight
    );

    links.forEach((link) => {
      if (current && link.getAttribute('href') === `#${current.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }, { passive: true });

  update();
}

initNavigation();
initActiveLink();
