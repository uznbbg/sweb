# CDA Sigorta

Production-ready corporate website for **CDA Sigorta**, designed with Apple's
marketing-site language: restraint, typographic precision, generous whitespace.

Built with Next.js 15 (App Router), TypeScript strict mode, Tailwind v3,
Framer Motion, and a small set of Radix-based UI primitives.

---

## Quick start

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

> **Node version.** This project targets Node ≥ 20. If you use `nvm`, run
> `nvm use 20` first. Node 22+ also works.

### Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint (Next + TS rules, flat config) |
| `node scripts/generate-placeholders.mjs` | Regenerate solid-color `.webp` placeholders and `lib/image-meta.ts` |

---

## Project layout

```
app/
  layout.tsx                # root layout, metadata, OG, fonts
  page.tsx                  # homepage (10-section composition)
  bireysel/saglik/page.tsx  # example product detail page
  globals.css               # Tailwind directives + base layer
components/
  nav/         TopNav, MobileMenu, Footer, Wordmark, LanguageSelector
  sections/    Hero, ProductGrid, ProductTile, FeatureSpotlight,
               Highlights, QuoteTeaser, Testimonial, Stats, CTABanner,
               ProductHero, PlanTiles, FAQ
  motion/      FadeIn, StaggerWords
  ui/          button, input, sheet, accordion (Radix + restyled)
lib/
  utils.ts          cn() helper
  fonts.ts          next/font configuration (SF Pro + Inter)
  nav-data.ts       primary nav + footer column data
  products.ts       homepage product tile data
  image-meta.ts     AUTO-GENERATED image dimensions + blurDataURLs
  blur.ts           (removed — see image-meta.ts)
public/
  images/      placeholder .webp files (replace with real assets)
  fonts/       drop SF Pro Display .woff2 files here (see below)
scripts/
  generate-placeholders.mjs
```

---

## Design system

All tokens live in `tailwind.config.ts` and a few utilities in `app/globals.css`:

- **Colors** — `apple-{white,offwhite,lightgray,midgray,darkgray,black,blue,blue-hover}` only. No other colors are used in the project.
- **Typography** — `font-display` uses `var(--font-sf-pro) → var(--font-inter) → -apple-system → BlinkMacSystemFont → sans-serif`.
- **Radii** — `rounded-apple-card` 18px, `rounded-apple-tile` 22px, `rounded-apple-pill` 980px.
- **Container widths** — `max-w-apple` 980px, `max-w-apple-wide` 1440px.
- **Easing** — `ease-apple` = `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Hover shadow** — `shadow-[0_4px_24px_rgba(0,0,0,0.08)]` (the only shadow used; matches the spec).

### Motion

All scroll-in motion goes through `components/motion/FadeIn.tsx` (single
reusable wrapper, respects `prefers-reduced-motion`). The hero h1 uses a
per-word stagger via `components/motion/StaggerWords.tsx`.

---

## Fonts (SF Pro Display)

SF Pro is Apple's proprietary typeface and is **not** redistributed in this
repo. The site renders with **Inter** as the fallback (via `next/font/google`)
out of the box. To enable SF Pro Display:

1. Drop these three files into `public/fonts/`:
   - `SF-Pro-Display-Regular.woff2`
   - `SF-Pro-Display-Medium.woff2`
   - `SF-Pro-Display-Semibold.woff2`
2. In `lib/fonts.ts`, uncomment the `sfPro` export block.
3. In `app/layout.tsx`, add `sfPro.variable` to the `<html>` `className`:

   ```tsx
   <html lang="tr" className={`${sfPro.variable} ${inter.variable} h-full`}>
   ```

---

## Placeholder images

All site imagery is shipped as **solid Apple-palette `.webp` placeholders**.
This keeps the layout dimensions correct and avoids using stock photography.

To regenerate them at any time:

```bash
node scripts/generate-placeholders.mjs
```

This also rewrites `lib/image-meta.ts` with up-to-date `width`, `height`, and
`blurDataURL` constants per image — these are consumed automatically by every
`<Image>` in the project.

### Where to drop real images

| Section | Path | Aspect | Notes |
| --- | --- | --- | --- |
| Homepage hero | `public/images/hero.webp` | 12:7 | `priority`, `sizes="100vw"` |
| Product tiles | `public/images/{saglik,kasko,konut,hayat}.webp` | 1:1 | `sizes="(max-width: 768px) 100vw, 50vw"` |
| Spotlight B | `public/images/spotlight-b.webp` | 4:5 | Product mockup recommended |
| OpenGraph | `public/images/og.webp` | 1200×630 | Social share preview |
| Sağlık hero | `public/images/saglik-hero.webp` | 12:7 | Product detail page |
| Sağlık feature | `public/images/saglik-feature.webp` | 4:5 | Two-column feature |

After replacing any placeholder, run the script above to update its blur
preview, or just rely on Next.js' built-in image optimization at request
time. Decorative images use `alt=""`; content images need descriptive
Turkish alt text — update each `<Image>` site at the same time you replace
the file.

---

## Section inventory

The homepage composes ten sections, in order:

1. `TopNav` — sticky 44px, blur, primary links, blue pill CTA
2. `Hero` — 80/96px h1 with staggered word reveal
3. `ProductGrid` — 2×2 white tiles, hover lift
4. `FeatureSpotlight` — three alternating full-bleed panels
5. `Highlights` — three columns with thin lucide icons
6. `QuoteTeaser` — pill input with inline blue submit
7. `Testimonial` — single 32px italic quote, no card
8. `Stats` — four-number row
9. `CTABanner` — closing call-to-action
10. `Footer` — five columns, language selector, copyright

The example product page at `/bireysel/saglik` composes:
`ProductHero → feature → Highlights → PlanTiles → FAQ → CTABanner`.

---

## Accessibility & performance

- All sections are Server Components except the few that need state
  (`FadeIn`, `StaggerWords`, `MobileMenu`, `LanguageSelector`,
  `QuoteTeaserForm`, `ProductTile`, `FAQ`).
- Visible focus rings via `:focus-visible` only.
- Skip-link to `#main` lives in `app/layout.tsx`.
- `prefers-reduced-motion` short-circuits all motion in `FadeIn` and
  `StaggerWords`.
- Every `<Image>` has explicit dimensions (or a properly-sized `fill`
  container) and uses `placeholder="blur"`.

---

## Constraints respected

No emojis, no gradients (except a whisper-soft radial vignette behind the
hero), no drop shadows other than the spec's `0 4px 24px rgba(0,0,0,0.08)`
on hovered cards, no stock illustrations, no 3D/isometric graphics, no
carousels, no popups, no chat bubbles, no cookie banners, no colors
outside the Apple palette.
