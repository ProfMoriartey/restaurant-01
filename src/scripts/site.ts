// Entrance animations, phone menu and the active header link.

const root = document.documentElement;

// Reveal each [data-reveal] block once, the first time it scrolls into view.
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

// Phone menu.
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
const closers = document.querySelectorAll<HTMLElement>('[data-menu-close]');

function setMenu(open: boolean) {
  if (!toggle || !panel) return;
  root.dataset.menu = open ? 'open' : 'closed';
  toggle.setAttribute('aria-expanded', String(open));
  panel.inert = !open;
  if (open) panel.querySelector<HTMLElement>('a, button')?.focus();
  else toggle.focus({ preventScroll: true });
}

if (toggle && panel) {
  panel.inert = true;
  toggle.addEventListener('click', () => setMenu(root.dataset.menu !== 'open'));
  closers.forEach((el) => el.addEventListener('click', () => setMenu(false)));
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.dataset.menu === 'open') setMenu(false);
  });
  window.matchMedia('(min-width: 64rem)').addEventListener('change', (e) => {
    if (e.matches && root.dataset.menu === 'open') setMenu(false);
  });
}

// Underline the header link of the section in view.
const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach((link) =>
        link.setAttribute('aria-current', String(link.hash === `#${entry.target.id}`)),
      );
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
);
const ids = new Set([...navLinks].map((link) => link.hash.slice(1)));
ids.forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});
