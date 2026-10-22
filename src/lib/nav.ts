import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Content, SectionId, Settings } from './types';

/** Header links for the sections that are switched on and have a label. */
export function navLinks(settings: Settings, content: Content) {
  return (Object.keys(settings.sections) as SectionId[])
    .filter((id) => settings.sections[id] && content.nav[id])
    .map((id) => ({ id, label: content.nav[id]! }));
}

/** Splits "best *word* here" into plain and highlighted parts. */
export function highlightParts(line: string) {
  return line
    .split(/(\*[^*]+\*)/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith('*') && part.endsWith('*')
        ? { text: part.slice(1, -1), highlight: true }
        : { text: part, highlight: false },
    );
}

/** Links to another website open in a new tab. */
export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

/** The privacy notice page in a given language, e.g. /gizlilik or /en/privacy. */
export function privacyHref(lang: string, slug: string) {
  return getRelativeLocaleUrl(lang, slug);
}
