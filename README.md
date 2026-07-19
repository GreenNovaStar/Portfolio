# brianyip.dev

Personal portfolio — React + Vite + Tailwind, deployed to GitHub Pages via Actions on every push to `main`.

## Develop

```sh
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build
```

## Editing

- All copy (hero, projects, experience, contact) lives in `src/content.ts` — no component changes needed for text edits.
- Theme tokens (colors, fonts, both light/dark palettes) are in `src/styles/global.css`.
- Photo and résumé PDF go in `public/`.

Sister site: [terminal.brianyip.dev](https://terminal.brianyip.dev)
