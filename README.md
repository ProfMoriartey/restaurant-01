# Restaurant website template

A one-page restaurant and cafe website built with Astro and Tailwind CSS. Each restaurant brings its own theme, content, sections and languages; the layout code stays the same.

The first restaurant on it is **Flu Burger** (Bursa).

## Run it

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static site in dist/
```


## Publish it

- **GitHub Pages:** `.github/workflows/deploy-pages.yml` builds and publishes the site on every push to `main`. Turn it on once under the repo's Settings → Pages → Source: **GitHub Actions**. The site is served from a folder (`https://<user>.github.io/<repo>/`); the workflow passes that folder to the build, so all links and files follow it.
- **Vercel / Netlify / Cloudflare Pages:** import the repo with the Astro preset; build command `npm run build`, output folder `dist`, Node 22.22 or newer.
- **Own domain:** set `siteUrl` in the restaurant's `settings.ts`.
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
| `order` | Delivery app buttons per location, and a dish photo that turns as the page scrolls |
| `franchise` | Enquiry form; set `franchiseFormAction` to a form service endpoint |
| `contact` | Social links, each location's phone, email, address and hours, and a map when `mapEmbedUrl` is set |

## Other settings

| Setting | What it does |
| --- | --- |
| `quickActions` | Buttons in the bar fixed to the bottom of phone and tablet screens: `menu`, `call`, `directions`, `order`, `whatsapp`. Empty hides the bar. |
| `menuUrl` | Where the Menu button goes, e.g. a separate menu website. Each category tile has its own `href` in the text files. Links to other websites open in a new tab. |
| `timeZone` | Time zone of the opening hours, e.g. `Europe/Istanbul`. |
| `openingHours` (per location) | Days and times behind the "Open now / Closed" badge. A close time before the open time runs past midnight. |
| `siteUrl` | The live address, e.g. `https://fluburger.com`. Until it is set, Vercel's production address is used (Vercel exposes it during the build). Needed for the sitemap, canonical and language links, and full link-preview addresses. |
| `seo`, `postalAddress` (per location) | Cuisine, price range and the address in parts, for the business details Google reads. |
| `meta.shareImage` (per language) | The 1200 × 630 image shown when the link is shared on WhatsApp, Instagram or Facebook. |

## Privacy

- The map in the contact footer loads only after the visitor presses "Show map", so Google sets no cookies before then. The choice is remembered in that browser.
- The site sets no cookies of its own, so it needs no cookie banner. Adding analytics or other embeds would change that.
- Each language has a privacy notice page (KVKK aydınlatma metni) built from `privacy` in the text files, linked from the footer. The Flu Burger text is a draft: fill in the details in square brackets, have a lawyer check it, then remove `draftNote`.
- When the franchise form is on, it has a required consent checkbox linking to that page.

## Add a restaurant

1. Copy `src/restaurants/flu-burger` to a new folder and edit its settings and text.
2. Put its logo and photos in `public/restaurants/<name>/`.
3. Point `src/site.config.ts` at the new folder.

## Themes

- `flu-burger`: clean red, black and white with a geometric sans-serif.
- `retro-diner`: burgundy, brick, mustard and slate with Roboto Slab and paper textures.

Every section's background is a colour plus a texture layer (`--theme-<section>-image`), with light bands between sections (`--theme-band`). The textures (grunge, paper grain, ribs, halftone dots, tile stripes) live in `src/styles/textures.css` and work over any colour.

To add one, copy a file in `src/themes/`, change the `data-theme` name and values, import it in `src/styles/global.css` and add its name to `ThemeId` in `src/lib/types.ts`.

## Languages

The default language is served at `/`, the others at `/<code>` (for Flu Burger: Turkish at `/`, English at `/en`). The page language is set on every page, so uppercase Turkish text shows the dotted capital İ correctly.
