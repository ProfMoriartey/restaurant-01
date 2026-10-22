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

export type QuickAction = 'menu' | 'call' | 'directions' | 'order' | 'whatsapp';

export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

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
  /** Browser tab icon (32px PNG) and phone home-screen icon (180px PNG). */
  icons: { favicon: string; appleTouch: string };
  /** The live address, e.g. 'https://fluburger.com'. On Vercel it defaults to the project's production domain. */
  siteUrl?: string;
  /** For Google's business details. */
  seo: { cuisine: string[]; priceRange?: string };
  /** Which sections show, in page order. */
  sections: Record<SectionId, boolean>;
  /** Google Maps embed URL shown in the contact footer. Leave out to hide the map. */
  mapEmbedUrl?: string;
  /** Where the franchise form posts, e.g. a Formspree endpoint. */
  franchiseFormAction?: string;
  social: { platform: SocialPlatform; url: string }[];
  /** IANA time zone the opening hours are in, e.g. 'Europe/Istanbul'. */
  timeZone: string;
  /** The full menu, e.g. a separate menu website. */
  menuUrl?: string;
  /** WhatsApp number in international format without +, e.g. '902240000000'. */
  whatsapp?: string;
  /** Buttons in the bar fixed to the bottom of phone and tablet screens, in order. Empty hides it. */
  quickActions: QuickAction[];
}

export interface Location {
  name: string;
  phone: string;
  email: string;
  address: string;
  /** The address in parts, for Google's business details. */
  postalAddress: { street?: string; district?: string; city: string; postalCode?: string; country: string };
  geo?: { lat: number; lng: number };
  /** Opening hours as people read them. */
  hours: string[];
  /** The same hours for the open / closed badge. A close time before the open time runs past midnight. */
  openingHours: { days: Weekday[]; open: string; close: string }[];
  /** Link for this location's menu button in the menu card. */
  menuLink?: string;
  /** Opens directions in a maps app. */
  directionsUrl?: string;
  deliveryApps: { name: string; url: string }[];
}

export interface Content {
  /** The language's own name, shown in the switcher's accessible label. */
  languageName: string;
  /** Page title, description and the image shown when the link is shared (1200 × 630). */
  meta: { title: string; description: string; locale: string; shareImage: Image };
  /** Header link labels. Sections without a label stay out of the menu. */
  nav: Partial<Record<SectionId, string>>;
  ui: {
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    quickActions: Record<QuickAction, string>;
    /** Open / closed badge, e.g. "Open now · Closes 23:00". */
    status: { open: string; closed: string; closes: string; opens: string; tomorrow: string };
  };
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
  /** Set showStatus on the opening-hours item to add the open / closed badge. */
  infoStrip: { icon: IconName; line1: string; line2: string; showStatus?: boolean }[];
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
    /** Curved text around the plate. */
    badge: string;
    /** Overhead dish photo, cropped to a circle. Without one, a drawn plate shows. */
    image?: Image;
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
    directions: string;
    mapTitle: string;
    rights: string;
  };
  locations: Location[];
}

export interface Restaurant {
  settings: Settings;
  content: Record<string, Content>;
}
