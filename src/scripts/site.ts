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
const ids = new Set([...navLinks].map((link) => link.hash.slice(1)).filter(Boolean));
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

// Open / closed badges. Times are read in the restaurant's time zone, whatever the visitor's.
const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const WEEK = 7 * 1440;

const toMinutes = (time: string) => {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
};
const toTime = (minutes: number) => {
  const m = ((minutes % 1440) + 1440) % 1440;
  return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
};

/** Minutes since Monday 00:00 in the given time zone. */
function weekMinute(timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)!.value;
  const day = DAYS.indexOf(get('weekday').slice(0, 3).toLowerCase());
  return day * 1440 + Number(get('hour')) * 60 + Number(get('minute'));
}

function updateOpenStatus() {
  document.querySelectorAll<HTMLElement>('[data-open-status]').forEach((badge) => {
    const hours: { days: string[]; open: string; close: string }[] = JSON.parse(badge.dataset.hours!);
    const labels = JSON.parse(badge.dataset.labels!);
    const now = weekMinute(badge.dataset.tz!);

    // Each opening as a [start, end) span of the week; a close before the open runs past midnight.
    const spans = hours.flatMap(({ days, open, close }) =>
      days.map((day) => {
        const start = DAYS.indexOf(day) * 1440 + toMinutes(open);
        let end = DAYS.indexOf(day) * 1440 + toMinutes(close);
        if (end <= start) end += 1440;
        return [start, end];
      }),
    );

    // Check this week and the spans that spill over from last Sunday night.
    const current = spans.find(([start, end]) => (now >= start && now < end) || (now + WEEK >= start && now + WEEK < end));
    let text: string;
    if (current) {
      text = `${labels.open} · ${labels.closes} ${toTime(current[1])}`;
    } else {
      const next = Math.min(...spans.map(([start]) => (start > now ? start : start + WEEK)));
      const daysAhead = Math.floor(next / 1440) - Math.floor(now / 1440);
      let when = '';
      if (daysAhead === 1) when = `${labels.tomorrow} `;
      else if (daysAhead > 1) {
        // 2024-01-01 was a Monday.
        const date = new Date(Date.UTC(2024, 0, 1 + (Math.floor(next / 1440) % 7)));
        when = `${date.toLocaleDateString(badge.dataset.lang, { weekday: 'long', timeZone: 'UTC' })} `;
      }
      text = `${labels.closed} · ${labels.opens} ${when}${toTime(next)}`;
    }

    if (badge.dataset.compact !== undefined) text = current ? labels.open : labels.closed;
    badge.querySelector('[data-status-text]')!.textContent = text;
    badge.querySelector<HTMLElement>('[data-status-dot]')!.style.color = current ? '#2fbf71' : '';
    badge.dataset.state = current ? 'open' : 'closed';
    badge.hidden = false;
  });
}

if (document.querySelector('[data-open-status]')) {
  updateOpenStatus();
  setInterval(updateOpenStatus, 60_000);
}

// Maps load only when asked for, so Google sets no cookies before then. The choice is
// remembered in this browser so returning visitors see the map straight away.
const MAP_CHOICE = 'map-allowed';

function loadMap(box: HTMLElement) {
  const frame = document.createElement('iframe');
  frame.src = box.dataset.map!;
  frame.title = box.dataset.mapTitle ?? '';
  frame.loading = 'lazy';
  frame.referrerPolicy = 'no-referrer-when-downgrade';
  frame.allowFullscreen = true;
  frame.className = 'absolute inset-0 size-full';
  box.querySelector('[data-map-placeholder]')?.remove();
  box.append(frame);
}

document.querySelectorAll<HTMLElement>('[data-map]').forEach((box) => {
  let allowed = false;
  try {
    allowed = localStorage.getItem(MAP_CHOICE) === 'yes';
  } catch {
    // Storage can be blocked; the button still works.
  }
  if (allowed) {
    loadMap(box);
    return;
  }
  box.querySelector('[data-map-load]')?.addEventListener('click', () => {
    try {
      localStorage.setItem(MAP_CHOICE, 'yes');
    } catch {
      // Not remembered, but the map still loads.
    }
    loadMap(box);
  });
});
