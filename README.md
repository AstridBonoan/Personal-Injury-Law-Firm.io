# Hartwell & Pierce Law — Personal Injury Demo Website

A production-quality **frontend-only** demo website for a fictional personal injury law firm, including a mock client portal. Built as a portfolio example of modern legal marketing UX and client experience software.

**Live site (GitHub Pages):** https://astridbonoan.github.io/Personal-Injury-Law-Firm.io/

> **Important:** Hartwell & Pierce Law is fictional. All attorneys, case results, testimonials, statistics, and legal information are for demonstration only. This site does not provide legal advice and does not create an attorney-client relationship.

---

## Tech Stack

- React (Vite)
- Tailwind CSS v4
- React Router
- Framer Motion
- React Icons
- ESLint + Prettier
- Vitest + React Testing Library

## Features

### Public website

- Home, About, Attorneys (with profiles), Practice Areas (with detail pages)
- Case Results (clearly labeled fictional), How It Works (interactive timeline)
- Resources (search + category filter), FAQ accordion, Contact consultation form
- Dark mode toggle, floating consultation CTA, scroll progress indicator
- “Find Your Practice Area” interactive questionnaire
- Accessibility-minded markup, SEO meta tags, structured data, `robots.txt` set to noindex

### Client portal (`/client-portal`)

- Mock login (no real auth / no password storage)
- Dashboard, case progress timeline, documents, appointments, messages, tasks
- Notification center, collapsible mobile sidebar
- Local task completion state for the demo

**Demo portal credentials**

| Field    | Value                      |
| -------- | -------------------------- |
| Email    | `alex.rivera@demo.client`  |
| Password | `demo`                     |

---

## Project Structure

```text
src/
  assets/
  components/
    layout/
    home/
    attorneys/
    practiceAreas/
    testimonials/
    portal/
    common/
  pages/
  hooks/
  data/
  utils/
  styles/   (global styles live in index.css via Tailwind)
  test/
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173/Personal-Injury-Law-Firm.io/`).

> The Vite `base` is set to `/Personal-Injury-Law-Firm.io/` for GitHub Pages subdirectory hosting. Local routes use that basename as well.

### Lint & format

```bash
npm run lint
npm run format
```

### Test

```bash
npm run test
npm run test:watch
npm run test:coverage
```

### Build & preview

```bash
npm run build
npm run preview
```

---

## GitHub Pages Deployment

### Configuration

- `vite.config.js` sets `base: '/Personal-Injury-Law-Firm.io/'` (repo name)
- React Router uses `basename="/Personal-Injury-Law-Firm.io"`
- `public/404.html` implements the SPA redirect strategy for direct client-side routes
- `index.html` restores the redirected path on load
- `.nojekyll` is written during CI so underscore assets are served correctly

### Automatic deploy (GitHub Actions)

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

On every push to `main` / `master` (or manual `workflow_dispatch`):

1. Install dependencies
2. Lint
3. Run tests
4. Build
5. Deploy `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`

### Enable Pages in GitHub

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **`gh-pages`** / `/ (root)`
4. Save

After the first successful workflow run, the site will be available at:

`https://astridbonoan.github.io/Personal-Injury-Law-Firm.io/`

### Manual deploy notes

If you need to publish without Actions:

```bash
npm run build
# publish the contents of dist/ to the gh-pages branch
```

---

## Security & Demo Boundaries

- No real authentication
- No password storage
- No server-side collection of personal information
- Consultation form validates client-side and does not persist data remotely
- Portal documents/messages are fictional placeholders
- Do not upload or enter real sensitive client data

---

## Branding

| Token       | Value                          |
| ----------- | ------------------------------ |
| Firm        | Hartwell & Pierce Law          |
| Tagline     | Fighting for the People Who Need Us Most. |
| Primary     | `#17243A` Deep Navy            |
| Secondary   | `#303640` Charcoal             |
| Accent      | `#C7A65A` Muted Gold           |
| Supporting  | `#596A82` Slate Blue           |
| Background  | `#FAFAF7` Warm White           |
| Text        | `#252A31` Dark Charcoal        |
| Headings    | Cormorant Garamond             |
| Body        | Inter                          |

---

## License

Demo portfolio project. Placeholder photography via Unsplash. Fictional content only.
