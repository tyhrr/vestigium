/**
 * Footer visitor counter.
 * GitHub Pages has no server, so the shared count lives in Abacus
 * (abacus.jasoncameron.dev), a free counter API that needs no account.
 * Each browser counts once every 24 hours. The counter stays hidden if the
 * service does not answer.
 */

'use strict';

(function () {
  const COUNTER_URL = 'https://abacus.jasoncameron.dev';
  const COUNTER_PATH = 'tyhrr-vestigium/visits';
  const PREVIOUS_VISITS = 9302; // Total shown before this shared counter existed
  const LAST_COUNTED_KEY = 'vestigium-last-counted';
  const ONE_DAY = 24 * 60 * 60 * 1000;

  // Opening the site locally must not add visits
  const isLocal = ['localhost', '127.0.0.1', ''].includes(location.hostname);

  function countedToday() {
    try {
      return Date.now() - Number(localStorage.getItem(LAST_COUNTED_KEY)) < ONE_DAY;
    } catch {
      return false;
    }
  }

  function rememberCounted() {
    try {
      localStorage.setItem(LAST_COUNTED_KEY, String(Date.now()));
    } catch {
      // Private browsing can block storage; the visit is still counted
    }
  }

  async function showVisits() {
    const counter = document.querySelector('.visitor-counter');
    if (!counter) return;

    const addVisit = !isLocal && !countedToday();

    try {
      const response = await fetch(`${COUNTER_URL}/${addVisit ? 'hit' : 'get'}/${COUNTER_PATH}`, {
        signal: AbortSignal.timeout(5000)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const { value } = await response.json();
      if (!Number.isFinite(value)) throw new Error('Unexpected response');

      if (addVisit) rememberCounted();
      counter.querySelector('.visitor-counter__count').textContent = (PREVIOUS_VISITS + value).toLocaleString();
      counter.hidden = false;
    } catch (error) {
      console.warn('Visitor counter unavailable:', error);
    }
  }

  showVisits();
})();
