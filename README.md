# Pizzeria Website Template

A one-page restaurant website template for a wood-fired pizzeria, built with
Next.js 15, React 19, Tailwind CSS v4 and Framer Motion.

**Live demo → [pizzeria-website-template.vercel.app](https://pizzeria-website-template.vercel.app)**

Everything on the page is placeholder content. The brand is called `PIZZERIA`,
the contact details say "coming soon", and the photography is stock — swap all
of it for your own.

## What's in it

- **Hero** with an arched, parallaxed photograph
- **Marquee** band of brand words
- **Menu** rendered from a single data file, with a sticky category rail on
  desktop, scroll-spy, scrollable category pills on mobile, dot leaders and a
  hover photo reveal for items that have an image
- **Showcase** of three featured pizzas, falling back to hand-drawn SVG
  illustrations for pizzas without photography
- **Story** section with parallax and handwritten margin notes
- **Process** — a scroll-pinned sequence where a flat SVG pizza is built up
  layer by layer and then dissolves into the real photograph
- **Gallery** masonry wall mixing photographs with decorative brand tiles
- **Social** polaroids and **Contact** with a map placeholder
- Custom cursor, reveal-on-scroll animations, `prefers-reduced-motion` support
  throughout (the pinned process section degrades to a plain list), and
  `Restaurant` structured data

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Deploying

The demo runs on [Vercel](https://vercel.com). Import the repository, accept the
detected Next.js preset, and deploy — there is nothing to configure and no
environment variables to set.

## Making it yours

Four places, in order of how often you'll touch them:

| File | What it controls |
| --- | --- |
| `data/site.ts` | Brand name, tagline, description, city, Instagram, contact details, marquee words |
| `data/menu.ts` | Categories, items, descriptions, prices, currency, which pizzas are featured |
| `public/images/` | Photography — see the sizes below |
| `public/logo.png` | The wordmark in the navbar and footer |

Then work through the copy in `components/` — the headings and the handwritten
notes are deliberately generic and are meant to be rewritten.

### Photography

| File | Size | Used by |
| --- | --- | --- |
| `pizza-margherita.jpg` | 1600 × 1600 | Hero, showcase, process, gallery, social |
| `bruschetta.jpg` | 1600 × 1600 | Story, menu hover, gallery, social |
| `table-setting.jpg` | 1600 × 1600 | Gallery, social |

Square originals crop cleanly into every frame on the page. Adding a photo to a
menu item is just an `image` field in `data/menu.ts`; adding one to the gallery
wall is one more entry in the `entries` array in `components/Gallery.tsx`.

### The wordmark

`public/logo.png` is a transparent PNG, 1039 × 212. If you replace it with a
different aspect ratio, update the `width` and `height` props in
`components/Navbar.tsx` and `components/Footer.tsx` to match — the rendered
height is set in CSS, so those numbers only need to describe the ratio.

### Things left as placeholders on purpose

- The map in `components/Contact.tsx` is an empty dashed box — paste in an
  embed.
- Instagram links point at `#` until you set `instagram.url` in `data/site.ts`.
- The structured data in `app/layout.tsx` has no phone or opening hours yet.
- There is no `LICENSE` file — add one before you share this publicly.

## Credits

Photography from [Pexels](https://www.pexels.com), free for commercial use with
no attribution required:

- [Margherita pizza](https://www.pexels.com/photo/photo-of-margherita-pizza-14590497/)
- [Bruschetta on a board](https://www.pexels.com/photo/bruschetta-with-tomatoes-on-wooden-board-5639423/)
- [Table setting](https://www.pexels.com/photo/delicious-pizza-on-wooden-dining-table-8471702/)

Typefaces: [Fraunces](https://fonts.google.com/specimen/Fraunces),
[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and
[Caveat](https://fonts.google.com/specimen/Caveat), all under the SIL Open Font
License and loaded through `next/font`.
