# Sean Roennau-Wergen — Personal Portfolio

Personal portfolio built with Next.js to showcase my profile, projects, experience, and skills. Fully responsive with i18n support (EN/FR), SEO optimisations, and a working contact form with email notifications.

**Live site**: [srw-dev.vercel.app](https://srw-dev.vercel.app)

---

## Features

- **Bilingual (EN/FR)** — full i18n via locale JSON files and a custom `TranslationContext`
- **Animated hero** — typed role cycling with `react-typed`
- **Experience timeline** — vertical timeline with modal detail views per role
- **Projects showcase** — filterable project cards with live and GitHub links
- **Skills grid** — categorised skill tags
- **Contact form** — functional form with email delivery via Resend
- **Responsive design** — mobile-first layout with Tailwind CSS
- **Accessibility** — WCAG/RGAA compliant with proper ARIA attributes throughout
- **Performance** — lazy loading, memoisation, optimised fonts via `next/font`
- **Legal notice** — GDPR-compliant modal with French legal mentions

---

## Tech Stack

| Layer | Stack |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Typed text | react-typed |
| Timeline | react-vertical-timeline-component |
| Email | Resend |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Resend](https://resend.com) account for the contact form

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/seanrw93/Personal-Portfolio-Page.git
   cd Personal-Portfolio-Page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file at the root:
   ```
   RESEND_API_KEY=your_resend_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Internationalisation

The site supports English and French. Locale is detected automatically via `middleware.ts` and routed under `/en` and `/fr`.

All translatable strings live in `locales/en.json` and `locales/fr.json` and are consumed via `TranslationContext`. To add a new language, add a new locale file and extend the middleware config.

---

## Deployment

The site is deployed on Vercel with automatic deployments on push to `main`. To deploy your own instance:

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add your `RESEND_API_KEY` environment variable in the Vercel dashboard
4. Deploy

---

## About

Built as part of my **M2 Expert en développement logiciel (RNCP 7)** at OpenClassrooms. I'm currently seeking an **alternance (contrat d'apprentissage)** in full-stack JavaScript development.

- [LinkedIn](https://www.linkedin.com/in/sean-roennau-wergen)
- [GitHub](https://github.com/seanrw93)

---

## License

© 2026 Sean Roennau-Wergen. All rights reserved.