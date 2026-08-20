# Motion & Mend — deployment checklist

## Local verification

```powershell
npm install
npm run lint
npm run build
npm run start
```

## Before a real clinic launch

- Replace the demo clinic content with verified practitioner, address, phone, email and booking details.
- Connect the enquiry form to the clinic's approved email/CRM/booking workflow.
- Replace externally hosted Pexels imagery/video with licensed, optimized assets in `/public` or an image CDN.
- Confirm the canonical domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`.
- Add a real Google Business Profile / map destination if applicable.
- Run Lighthouse on the production deployment at mobile and desktop widths.
- Test every service, article, CTA and form on a real phone.

The build is intentionally free of fabricated reviews, patient counts, ratings, awards and outcome statistics.
