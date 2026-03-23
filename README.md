# GDPR Compliance Documentation

Static documentation site for UseGalaxy.eu's GDPR compliance, built with [Astro](https://astro.build).

## Prerequisites

- Node.js 20+

## Local development

```sh
make dev      # Install deps and start dev server at http://localhost:4321/gdpr/
make build    # Install deps and build static site to dist/
make preview  # Install deps and preview the built site locally
```

Or directly with npm:

```sh
npm install
npm run dev      # Start dev server
npm run build    # Build site
npm run preview  # Preview built site
```

## CI notes

The GitHub Actions deploy workflow checks out the full git history (`fetch-depth: 0`). This is required for the git history panel on legal pages to display accurate author, revision count, and date information.

## Deployment

The site deploys to GitHub Pages via the `deploy.yml` workflow on push to `main`. The Pages source must be set to **GitHub Actions** (not "Deploy from a branch") in the repository settings.
