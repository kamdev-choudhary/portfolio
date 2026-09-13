# Portfolio — Kamdev Choudhary

Personal portfolio built with a terminal-inspired design.
Previous Vite + MUI version lives on the [`legacy`](../../tree/legacy) branch.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components) |
| UI | React 19, Tailwind CSS v4, shadcn/ui (Radix) |
| Icons | Lucide (interface) + react-icons (brand marks) |
| Fonts | JetBrains Mono + Geist, self-hosted via `next/font` |
| PDF | jsPDF — real text runs, so the resume stays selectable and ATS-readable |
| Hosting | Vercel |

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
npx tsc --noEmit # type-check
```

## Editing content

**All site content lives in [`src/content/profile.ts`](src/content/profile.ts).**
Experience, projects, skills, education, certificates, volunteering, hobbies and
contact details are typed objects — edit that one file and every section, the
resume page, the PDF and the JSON-LD structured data update together.

A few things are derived rather than duplicated:

- `profile.location` is parsed into the JSON-LD postal address in `src/app/page.tsx`.
- `experience[0].company` becomes the `worksFor` field, so keep the timeline newest-first.
- The nav and command palette are driven by the `navigation` array.

## Environment variables

Both are optional — the site builds and runs without them.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, Open Graph and JSON-LD |
| `RESEND_API_KEY` | Enables the contact form to send mail directly |
| `CONTACT_FROM` / `CONTACT_TO` | Sender and recipient for contact-form mail |

Without `RESEND_API_KEY`, `/api/contact` returns 503 and the form gracefully
falls back to opening the visitor's email client with the message pre-filled.

## Features

- Dark-first terminal theme with a light mode, respecting system preference
- Command palette (<kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd>) for navigation and links
- Responsive from 320px up; verified for horizontal overflow at every breakpoint
- `/resume` route — print stylesheet plus a jsPDF download with selectable text
- JSON-LD `Person` schema, Open Graph and Twitter metadata
- `prefers-reduced-motion` honoured (the hero typing effect falls back to static)

## Deploying

Pushed to `main` and hosted on Vercel. Set the environment variables in
**Project → Settings → Environment Variables**, then redeploy.
