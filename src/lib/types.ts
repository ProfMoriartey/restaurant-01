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

export type IconName = 'clock' | 'delivery' | 'star' | 'pin' | 'phone' | 'mail' | 'cup' | 'cutlery';

export type SocialPlatform = 'instagram' | 'facebook' | 'tiktok' | 'x' | 'youtube' | 'whatsapp';

/** Drawn stand-ins used until real photos arrive. */
export type FoodArt = 'burger' | 'hotdog' | 'fries' | 'drink';

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

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
  /** Google Maps embed URL for the "come eat here" panel. Leave out to hide the panel. */
  mapEmbedUrl?: string;
  /** Where the franchise form posts, e.g. a Formspree endpoint. */
  franchiseFormAction?: string;
  social: { platform: SocialPlatform; url: string }[];
}

export interface Location {
  name: string;
  phone: string;
  email: string;
  address: string;
  hours: string[];
  /** Link for this location's menu button in the menu card. */
  menuLink?: string;
  /** Opens directions in a maps app. */
  directionsUrl?: string;
  deliveryApps: { name: string; url: string }[];
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
    image?: Image;
  };
  menu: {
    title: string;
    tagline: string;
    image?: Image;
  };
  infoStrip: { icon: IconName; line1: string; line2: string }[];
  categories: {
    title: string;
    items: {
      name: string;
      description: string;
      href: string;
      image?: Image;
      art?: FoodArt;
    }[];
  };
  order: {
    title: string;
    /** Shown when no delivery apps are listed. */
    noApps: string;
  };
  visit: {
    title: string;
    text: string;
    directions: string;
    mapTitle: string;
  };
  franchise: {
    title: string;
    intro: string;
    fields: {
      name: string;
      label: string;
      type: 'text' | 'email' | 'tel' | 'textarea';
      required?: boolean;
      /** Spans both columns. */
      wide?: boolean;
    }[];
    submit: string;
  };
  contact: {
    title: string;
    subtitle: string;
    labels: { phone: string; email: string; address: string; hours: string };
    rights: string;
  };
  locations: Location[];
}

export interface Restaurant {
  settings: Settings;
  content: Record<string, Content>;
}
