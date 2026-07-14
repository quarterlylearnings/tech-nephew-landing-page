
[![Netlify Status](https://api.netlify.com/api/v1/badges/0c754537-7a3a-4b4e-bf9b-1b9833d8e4b6/deploy-status?branch=main)](https://app.netlify.com/projects/tech-nephew-landing/deploys)

Next.js (App Router, static export) + Tailwind CSS + TypeScript, deployed to Netlify as plain static HTML.

- Copy lives in `lib/content.ts` — edit that file for text changes, no JSX/HTML editing needed.
- `npm run dev` — local dev server
- `npm run build` — builds the static site to `out/` (what Netlify deploys, per `netlify.toml`)
