# Abdelhadi Djafer — Portfolio

**Agentic AI Engineer & Fullstack Developer**

> Next.js · TypeScript · Tailwind CSS · Framer Motion

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 + React + TypeScript |
| Styling | Tailwind CSS + custom design tokens |
| Animation | Framer Motion (scroll-triggered) |
| Fonts | Bricolage Grotesque + DM Sans + JetBrains Mono (Google Fonts CDN) |
| Deployment | GitHub Pages / Vercel / Netlify |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Deployment

### Vercel (recommended — 1 click)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select the repo → Deploy
4. Done. Vercel auto-detects Next.js.

No config changes needed. Vercel handles everything.

---

### GitHub Pages

1. In `next.config.mjs`, set your repo name:

```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/your-repo-name',         // ← add this
  assetPrefix: '/your-repo-name/',     // ← add this
}
```

2. Build the static export:

```bash
npm run build
```

3. The `out/` folder contains all static files.

4. Push `out/` to your `gh-pages` branch:

```bash
# Using gh-pages package
npx gh-pages -d out

# Or manually
git subtree push --prefix out origin gh-pages
```

5. In GitHub repo Settings → Pages → Source: `gh-pages` branch

---

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Done.

---

## Project Screenshots

The Language Master app screenshots live in `public/screenshots/`.

Copy them there if missing:
- `lm-onboarding.png`
- `lm-auth.png`
- `lm-languages.png`
- `lm-home.png`
- `lm-lessons.png`
- `lm-ai-teacher.png`

---

## Customisation

### Update portfolio GitHub link

In `components/Projects.tsx`, find the Portfolio card and update:
```tsx
// Replace "to be added" with your actual repo URL
href="https://github.com/iamabdelhadi02/YOUR-PORTFOLIO-REPO"
```

### Add your own photo

Drop a `photo.jpg` into `public/` and add an `<Image>` tag in `components/About.tsx`.

### Change accent colour

In `tailwind.config.ts` and `app/globals.css`, replace `#38bdf8` (sky blue) with any colour.

---

## Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata + Google Fonts
│   ├── page.tsx         # Assembles all sections
│   └── globals.css      # Design tokens, glass effects, animations
├── components/
│   ├── Nav.tsx          # Fixed navbar with scroll detection + mobile menu
│   ├── Hero.tsx         # Animated agent terminal + hero copy
│   ├── Projects.tsx     # Wegether + Language Master + Portfolio cards
│   ├── Skills.tsx       # Grouped skill tags + certifications
│   ├── Experience.tsx   # Vertical timeline + education sidebar
│   ├── About.tsx        # Bio + focus areas + stats
│   ├── Contact.tsx      # Email CTA + social links + footer
│   └── FadeIn.tsx       # Reusable scroll-triggered animation wrappers
├── public/
│   └── screenshots/     # Language Master app screenshots
├── next.config.mjs      # Static export config
├── tailwind.config.ts   # Custom colour tokens + fonts
└── postcss.config.mjs
```

---

## After Deployment

1. Update the Portfolio project card with the live GitHub repo link
2. Optionally add your photo to the About section
3. Share it 🚀
