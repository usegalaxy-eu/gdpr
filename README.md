# GDPR Compliance Documentation

Static documentation site for UseGalaxy.eu's GDPR compliance, built with [Astro](https://astro.build).

## Prerequisites

- Node.js 20+

## Local development

```sh
npm install        # Install dependencies
npm run dev        # Start local dev server at http://localhost:4321/gdpr/
npm run build      # Build static site to dist/
npm run preview    # Preview the built site locally
```

## CI notes

The GitHub Actions deploy workflow checks out the full git history (`fetch-depth: 0`). This is required for the git history panel on legal pages to display accurate author, revision count, and date information.

## Deployment

The site deploys to GitHub Pages via the `deploy.yml` workflow on push to `main`. The Pages source must be set to **GitHub Actions** (not "Deploy from a branch") in the repository settings.
