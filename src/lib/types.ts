// Shapes for a restaurant's settings and per-language content.
// A new restaurant is a new folder under src/restaurants that fills these in.

export type ThemeId = 'flu-burger' | 'retro-diner';

export type SectionId =
  | 'hero'
  | 'menu'
  | 'infoStrip'
  | 'categories'
  | 'order'
  | 'franchise'
  | 'contact';

export interface Settings {
  name: string;
  theme: ThemeId;
  /** Language codes, e.g. ['tr', 'en']. */
  languages: string[];
  /** Served at `/`; the others under `/<code>`. */
  defaultLanguage: string;
  logo: { src: string; width: number; height: number };
  /** Which sections show, in page order. */
  sections: Record<SectionId, boolean>;
  /** Google Maps embed URL for the "come eat here" panel. */
  mapEmbedUrl?: string;
}

export interface Content {
  /** The language's own name, shown in the switcher's accessible label. */
  languageName: string;
  meta: { title: string; description: string };
  /** Header link labels. Sections without a label stay out of the menu. */
  nav: Partial<Record<SectionId, string>>;
  ui: { openMenu: string; closeMenu: string; switchLanguage: string };
  hero: {
    /** One string per line; wrap a word in *asterisks* to highlight it. */
    headline: string[];
    paragraphs: string[];
    /** Cut-out photo. Without one, a drawn placeholder shows. */
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export interface Restaurant {
  settings: Settings;
  content: Record<string, Content>;
}
