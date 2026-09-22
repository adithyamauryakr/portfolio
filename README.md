# portfolio

[![CI](https://github.com/adithyamauryakr/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/adithyamauryakr/portfolio/actions/workflows/ci.yml)
[![Deploy](https://github.com/adithyamauryakr/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/adithyamauryakr/portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-23ce6b.svg)](LICENSE)

Personal site of Adithya Maurya K R — live at
**[adithyamauryakr.github.io/portfolio](https://adithyamauryakr.github.io/portfolio/)**.

A minimal, single-page React site: hero, research experience, publications, skills, CV, and contact.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons
- GitHub Actions for CI and deployment to GitHub Pages

## Project structure

```
src/
├── components/   # UI building blocks, one section per file
├── data/         # site content (profile, experience, publications, skills)
├── hooks/        # useTheme (light/dark mode)
├── App.tsx       # page composition
└── main.tsx      # entry point
```

Content lives in [src/data/profile.ts](src/data/profile.ts) — update it to change what the site says
without touching any components.

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the local dev server           |
| `npm run build`        | Type-check and build for production  |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint                           |
| `npm run typecheck`    | Run the TypeScript compiler          |
| `npm run format`       | Format the codebase with Prettier    |
| `npm run format:check` | Check formatting without writing     |
| `npm run deploy`       | Manual deploy to `gh-pages` branch   |

## Deployment

Every push to `main` runs CI (lint, typecheck, build) and then deploys the built site to the
`gh-pages` branch via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). GitHub Pages
is configured to serve from that branch. A manual deploy is also available with `npm run deploy`.

## Color palette

| Name        | Hex       |                    |
| ----------- | --------- | ------------------ |
| Jet Black   | `#272d2d` | ink / dark surface |
| Lilac Ash   | `#a39ba8` | muted text         |
| Powder Blue | `#b8c5d6` | borders            |
| Alice Blue  | `#edf5fc` | light surface      |
| Emerald     | `#23ce6b` | accent             |

## License

[MIT](LICENSE)
