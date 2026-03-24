# Limitless Gym MK - Website

One-pager marketing website for Limitless Gym MK, a weights and bodybuilding gym near Milton Keynes (Paulerspury, Northants).

## Tech Stack
- Next.js (App Router) with TypeScript
- Tailwind CSS v4 (config via `@theme inline` in globals.css)
- Google Fonts: Oswald (headings), Archivo (body)
- Vercel hosting with Speed Insights + Analytics

## Color Palette
Defined in `src/app/globals.css` via CSS custom properties:
- `primary` (#D32F2F) - Red, used for CTAs, accents, hover states
- `primary-dark` (#B71C1C) - Darker red for hover on primary buttons
- `secondary` (#424242) - Dark grey, borders, card backgrounds
- `tertiary` (#9E9E9E) - Mid grey, muted text
- `neutral` (#0A0A0A) - Near black, page background

## Fonts
- `font-heading` (Oswald) - All headings, nav links, buttons. Always uppercase with wide tracking.
- `font-body` (Archivo) - Body text, descriptions.

## Architecture
- **Static one-pager** - most components are server components; client components: Navbar (mobile menu state), Gallery (lightbox), About (FadeInUp), OpenStatus (live open/closed)
- **8 section components** in `src/components/`: Navbar, Hero, About, Gallery, Memberships, Details, Footer
- **Utility components**: FadeInUp (scroll-triggered animation), OpenStatus (live open/closed indicator), Lightbox (fullscreen image viewer)
- **SEO metadata** defined in `src/app/layout.tsx` using Next.js Metadata API + JSON-LD structured data (Gym schema)
- **Smooth scroll** via CSS `scroll-behavior: smooth` + section IDs + `scroll-mt-20` offset for sticky nav
- **Custom animation** `fade-in-up` defined via `@utility` in globals.css, triggered on scroll via IntersectionObserver in FadeInUp component

## Design Principles
- Dark theme throughout, red accents
- Sharp corners (no rounded) for industrial aesthetic
- Oswald uppercase for all headings and interactive text
- Keep components simple and flat — no unnecessary abstractions
- Subtle scroll-triggered fade-in-up animations on key sections

## Editing Content
All text lives directly in the component files:
- Hero tagline: `src/components/Hero.tsx`
- About text & features: `src/components/About.tsx`
- Gallery images & captions: `src/components/Gallery.tsx`
- Membership options: `src/components/Memberships.tsx`
- Hours & contact info: `src/components/Details.tsx`
- Social media links: `src/components/Details.tsx`

## External Links
- Join Now (Clubwise signup): linked in Hero, Navbar, and Memberships
- Google Maps: linked in Details via short URL
- Instagram: @limitless_gym_mk
- Facebook: /korecovery

## Production Checklist
Things to update when moving to the final domain:
- [ ] Update `metadataBase` in `src/app/layout.tsx` (currently set to Vercel test URL)
- [ ] Update `url` in JSON-LD structured data in `src/app/layout.tsx`
- [ ] Verify OG image loads correctly on the new domain (test with https://developers.facebook.com/tools/debug/)
- [ ] Verify geo coordinates in JSON-LD are accurate for the exact unit location
- [ ] Set up custom domain on Vercel and configure DNS
