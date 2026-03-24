# Limitless Gym MK - Website

One-pager marketing website for Limitless Gym MK, a weights gym in Milton Keynes.

## Tech Stack
- Next.js (App Router) with TypeScript
- Tailwind CSS v4 (config via `@theme inline` in globals.css)
- Google Fonts: Oswald (headings), Inter (body)

## Color Palette
Defined in `src/app/globals.css` via CSS custom properties:
- `primary` (#D32F2F) - Red, used for CTAs, accents, hover states
- `primary-dark` (#B71C1C) - Darker red for hover on primary buttons
- `secondary` (#424242) - Dark grey, borders, card backgrounds
- `tertiary` (#9E9E9E) - Mid grey, muted text
- `neutral` (#0A0A0A) - Near black, page background

## Fonts
- `font-heading` (Oswald) - All headings, nav links, buttons. Always uppercase with wide tracking.
- `font-body` (Inter) - Body text, descriptions.

## Architecture
- **Static one-pager** - all components are server components except Navbar (needs mobile menu state)
- **5 section components** in `src/components/`: Navbar, Hero, About, Details, Footer
- **SEO metadata** defined in `src/app/layout.tsx` using Next.js Metadata API
- **Smooth scroll** via CSS `scroll-behavior: smooth` + section IDs + `scroll-mt-20` offset for sticky nav
- **No external dependencies** beyond what create-next-app provides

## Design Principles
- Dark theme throughout, red accents
- Sharp corners (no rounded) for industrial aesthetic
- Oswald uppercase for all headings and interactive text
- Keep components simple and flat — no unnecessary abstractions
- All placeholder copy is co-located in component files for easy editing

## Editing Content
All placeholder text (address, phone, hours, descriptions) lives directly in the component files:
- Hero tagline: `src/components/Hero.tsx`
- About text & features: `src/components/About.tsx`
- Hours & contact info: `src/components/Details.tsx`
- Social media links: `src/components/Details.tsx`
