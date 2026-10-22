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

// Turn [data-scroll-rotate] elements as the page scrolls: 100° anticlockwise over the
// time each one crosses the screen. Desktop and tablet only, and never with reduced motion.
const rotators = document.querySelectorAll<HTMLElement>('[data-scroll-rotate]');
const rotateQuery = window.matchMedia('(min-width: 48rem) and (prefers-reduced-motion: no-preference)');
let rotateFrame = 0;

function updateRotation() {
  rotateFrame = 0;
  const vh = window.innerHeight;
  rotators.forEach((el) => {
    if (!rotateQuery.matches) {
      el.style.transform = '';
      return;
    }
    const rect = el.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));
    el.style.transform = `rotate(${50 - progress * 100}deg)`;
  });
}

function queueRotation() {
  if (!rotateFrame) rotateFrame = requestAnimationFrame(updateRotation);
}

if (rotators.length) {
  window.addEventListener('scroll', queueRotation, { passive: true });
  window.addEventListener('resize', queueRotation);
  rotateQuery.addEventListener('change', queueRotation);
  updateRotation();
}
