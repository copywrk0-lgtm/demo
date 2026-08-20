# Motion & Mend Physiotherapy

Production-ready Next.js App Router website for Motion & Mend Physiotherapy, Koramangala, Bengaluru.

## Stack
- Next.js App Router + TypeScript
- React
- CSS modules via global stylesheet (no runtime UI dependency)
- Responsive mobile navigation
- IntersectionObserver scroll reveal animations
- Static service and insight routes generated from typed data
- SEO metadata, robots and sitemap
- WhatsApp enquiry form

## Run locally
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm start
```

The project is suitable for Vercel or any Node-compatible Next.js host.

Before client launch, replace the placeholder clinic contact details and verify practitioner/business claims.


## Homepage hero video
The homepage hero uses a muted, looping Pexels physiotherapy stock clip (video 6111095). The video is used only on the homepage; other pages remain photo-based.


## Visual direction
The UI uses a restrained three-font system: Playfair Display for editorial headings, Manrope for body/UI copy, and IBM Plex Mono for small labels and metadata. The visual layer adds subtle glass navigation, editorial typography, image hover depth, tactile cards, soft section dividers, and a more premium CTA treatment while keeping the mobile-first layout.


## Build verification
The project includes TypeScript React types, ESLint, a valid FAQ component import, and an ESLint flat config for Next.js 15. Run `npm install` followed by `npm run build` from this folder before deployment.
