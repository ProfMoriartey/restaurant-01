# Restaurant website template

A one-page restaurant and cafe website built with Astro and Tailwind CSS. Each restaurant brings its own theme, content, sections and languages; the layout code stays the same.

The first restaurant on it is **Flu Burger** (Bursa).

## Run it

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | Where |
| --- | --- |
| Which restaurant this build is for | `src/site.config.ts` |
| A restaurant's settings: theme, languages, logo, section switches, map | `src/restaurants/<name>/settings.ts` |
| A restaurant's text, one file per language | `src/restaurants/<name>/<language>.ts` |
| Logos and photos | `public/restaurants/<name>/` |
| Themes (colors, fonts, title shadow, textures) | `src/themes/` |
| Sections | `src/components/` |

## Sections

Each one is switched on or off in the restaurant's `settings.ts`. They show in the order listed there; the contact footer always closes the page.

| Section | What it shows |
| --- | --- |
| `hero` | Headline with a highlighted word, intro text, cut-out photo |
| `menu` | Split card with a menu button per location |
| `infoStrip` | Four icons with two short lines each |
| `categories` | Category tiles; the name and a short line fade in on hover |
| `order` | Delivery app buttons per location, and a map panel when `mapEmbedUrl` is set |
| `franchise` | Enquiry form; set `franchiseFormAction` to a form service endpoint |
| `contact` | Social links and each location's phone, email, address and hours |

## Add a restaurant

1. Copy `src/restaurants/flu-burger` to a new folder and edit its settings and text.
2. Put its logo and photos in `public/restaurants/<name>/`.
3. Point `src/site.config.ts` at the new folder.

## Themes

- `flu-burger`: clean red, black and white with a geometric sans-serif.
- `retro-diner`: burgundy, brick, mustard and slate with Roboto Slab and paper textures.

To add one, copy a file in `src/themes/`, change the `data-theme` name and values, import it in `src/styles/global.css` and add its name to `ThemeId` in `src/lib/types.ts`.

## Languages

The default language is served at `/`, the others at `/<code>` (for Flu Burger: Turkish at `/`, English at `/en`). The page language is set on every page, so uppercase Turkish text shows the dotted capital İ correctly.
