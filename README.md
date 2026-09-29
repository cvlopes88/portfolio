# cvmendes.com

Personal portfolio of Luis Mendes, Network Engineer. Static site, deployed on Vercel from `main`.

## Layout
- `site/` — everything that is published (`index.html`, compiled `styles.css`, icons, `og-image.png`, `robots.txt`, `sitemap.xml`).
- `vercel.json` — static deploy (no build step, output = `site/`) plus security/cache headers.
- `tools/` — sources for generated files. Not published.

## Editing
Edit `site/index.html`. If you add or change Tailwind classes, rebuild the CSS:

```bash
npx tailwindcss@3.4.17 -c tools/tailwind/tailwind.config.js -i tools/tailwind/input.css -o site/styles.css --minify
```

Theme colors/fonts live in `tools/tailwind/tw-theme.js`.

## Regenerating images
`tools/images/*.svg` are the sources for `og-image.png`, `favicon-32.png` and `apple-touch-icon.png`.
Rendering needs Inter (400, 800) and JetBrains Mono (500, 700) TTFs in `tools/images/fonts/` (from Fontsource, OFL):

```bash
cd tools/images && mkdir -p fonts
for f in inter@latest/latin-400-normal inter@latest/latin-800-normal jetbrains-mono@latest/latin-500-normal jetbrains-mono@latest/latin-700-normal; do
  curl -sfL "https://cdn.jsdelivr.net/fontsource/fonts/$f.ttf" -o "fonts/$(echo $f | tr '/@' '__').ttf"; done
npm i --no-save @resvg/resvg-js@2 && node render.js
```

## Résumé
The hero "Download résumé" button is commented out in `index.html` until `site/resume.pdf` is added.
