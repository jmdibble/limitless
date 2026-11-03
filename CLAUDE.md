# Limitless Gym MK - Website

One-pager marketing website for Limitless Gym MK, a weights, cardio and functional gym near Milton Keynes (Paulerspury, Northants). The gym moved to a different unit at the same address; the site was redesigned alongside (branch `feat/update`).

## Tech Stack
- Next.js 16 (App Router) with TypeScript, React 19
- Tailwind CSS v4 (config via `@theme inline` in globals.css) + hand-written component classes in the same file
- Google Fonts: Oswald (headings), Kumbh Sans (body)
- Vercel hosting with Speed Insights + Analytics

## Styling
`src/app/globals.css` has two layers that share one palette:
1. **`:root` CSS variables** (source of truth): `--brand-red` (#d91f2b), `--brand-red-dark`, `--brand-red-text` (lighter red for text on dark, passes contrast), `--page-bg`, `--section-bg`, `--surface`, `--line`, `--copy`, `--copy-muted`, `--copy-dim`.
2. **`@theme inline`** aliases them as Tailwind tokens: `primary`, `primary-dark`, `primary-text`, `neutral`, `tertiary`, `copy`, `copy-muted`, plus `secondary` (#424242). So `bg-primary`, `text-primary-text`, `text-copy-muted` etc. work.

Page sections use the hand-written classes (`.hero-*`, `.price-card`, `.contact-card`, `.button`, `.button-primary` ...). Older/simple pieces (CookieBanner, Lightbox, OpenStatus, `/privacy`) use Tailwind utilities.

**Gotcha:** unlayered CSS beats Tailwind v4 utilities. Global element rules (`body`, `a`) live in `@layer base` so utilities can override them. Keep new global element rules in `@layer base`.

Fonts: `font-heading` (Oswald, uppercase with tracking for headings/nav/buttons), `font-body` (Kumbh Sans).

## Business data: `src/lib/site.ts`
Single source of truth. Edit here, not in components:
- `SITE_URL`, `SITE_NAME`, `SITE_TITLE`, `SITE_DESCRIPTION`, `JOIN_URL` (Clubwise signup), `PHONE`, `SOCIAL`
- `ADDRESS`, `GEO` (lat/lng) -> drive Details, privacy page, JSON-LD, `MAP_EMBED_URL`, `DIRECTIONS_URL`
- `NAV_LINKS` (section anchors for Navbar and Footer; add new sections here)
- `HOURS` (days use JS `getDay()` numbering) -> drive Details, Footer, OpenStatus, JSON-LD (Hero's "Early till late" fact is hand-written, so keep it true if hours change)

## Architecture
- **Static one-pager** (`src/app/page.tsx`): Navbar, Hero, About, Welcome, Inside, Gallery, Memberships, FAQ, Details, Footer. Plus `/privacy`.
- **Welcome** (`#welcome`): comfort/amenities (air con, changing rooms/lockers/toilets, manned reception, upstairs floor) with 3 photos. **Inside** (`#inside`): one compact photo-alternating card per zone (Weights, Cardio, Functional) with equipment bullets. Both carry PLACEHOLDER copy pending the copy pass; equipment bullets are drafted from the photos.
- **Client components:** Navbar (mobile menu; fixed header that fades to translucent black once the hero is scrolled past, via `useSyncExternalStore` on scroll; pages with no `#hero` such as `/privacy` always use the solid style), FAQ (single-open accordion; height animates via grid `0fr`→`1fr`), Gallery + Lightbox (lightbox), About + FadeInUp (scroll animation), OpenStatus (live open/closed, `useSyncExternalStore`), CookieBanner (`useSyncExternalStore` over localStorage). Everything else is a server component.
- **Utility components:** `Icon` (shared line icons, incl. the button arrows, which nudge on `.button:hover svg`), FadeInUp, OpenStatus, Lightbox, CookieBanner.
- **SEO:** metadata + JSON-LD (Gym schema) in `src/app/layout.tsx`, built from `site.ts`; `robots.ts`, `sitemap.ts`, `manifest.ts`. Title/description/name come from `SITE_TITLE`, `SITE_DESCRIPTION`, `SITE_NAME` in `site.ts` and feed metadata, Open Graph, Twitter, JSON-LD and the manifest, so edit them there. Keep the description to claims the page makes. Manifest colours mirror `--page-bg` / `--brand-red`.
- **Navigation:** section links are `/#id` (via `next/link`) so they also work from `/privacy`. Smooth scroll is CSS `scroll-behavior: smooth`.
- **Map:** keyless Google Maps `output=embed` iframe in Details, positioned by `GEO`, loaded eagerly. Light-only, so `.map-embed iframe` has a CSS filter to darken it.

## Design Principles
- Dark theme throughout, red accents
- Rounded corners are used (6px buttons, 8-12px cards)
- Oswald uppercase for headings; Kumbh Sans for body
- Keep components simple and flat, no unnecessary abstractions
- Subtle scroll-triggered fade-in-up animations on key sections

## Editing Content
Copy lives in the component files unless it's business data (see `site.ts`):
- Hero: `src/components/Hero.tsx`
- Welcome and Inside (placeholder copy): `src/components/Welcome.tsx`, `src/components/Inside.tsx`
- About text & features: `src/components/About.tsx`
- Gallery images & captions: `src/components/Gallery.tsx`
- Memberships and prices: `src/components/Memberships.tsx`
- FAQ: `src/components/FAQ.tsx`
- Privacy policy: `src/app/privacy/page.tsx`

Photos are in `public/` as `new_*.jpeg` (hero is `new_hero.png`). `new_functional_1/2` are the upstairs functional area (cable machine, kettlebells, mats); `new_cardio_3` is the 3 spin bikes; `new_general_1` is the stairs, `new_general_2` the reception/lounge. Unused so far: `new_general_3`, `logo_no_bg.png`.

## External Links
- Join Now (Clubwise signup): `JOIN_URL`, used in Hero, Navbar, Memberships, Footer
- Instagram: @limitless_gym_mk; Facebook: /korecovery

## Dev server
`npm run dev` normally. If it stops picking up edits: stop it, then `npm run dev:clean` (wipes `.next`). Still flaky: `npm run dev:webpack` (different bundler/watcher). Don't run `npm run build` while the dev server is running; Turbopack's persistent dev cache is disabled in `next.config.ts` on purpose.

## Checks
`npm run lint`, `npx tsc --noEmit`, `npm run build` should all pass.

## Production Checklist
- [x] `metadataBase`, canonical, JSON-LD url, `robots.ts`, `sitemap.ts`, `manifest.ts`
- [x] Custom domain on Vercel (limitless-gym-mk.com, apex redirects to www)
- [x] OG image checked on the old premises
- [x] New unit (Unit 8): `ADDRESS` and `GEO` updated in `src/lib/site.ts`; map pin checked on the A5 units
- [ ] Re-test OG image (https://developers.facebook.com/tools/debug/) with the new `og-image.png`
- [x] Place new photos (changing rooms, reception, stairs now in Welcome; `new_general_3` still unused)
- [ ] Update copy (hero, about, Welcome, Inside, FAQ) for the new premises, and verify every Inside bullet
- [x] Privacy policy: restyled, covers the embedded Google Map, address and date updated (re-bump `lastUpdated` on any wording change)
- [ ] Claim / update Google Business Profile with the new unit (biggest local-SEO lever)
- [ ] Audit alt text and heading outline across section components
