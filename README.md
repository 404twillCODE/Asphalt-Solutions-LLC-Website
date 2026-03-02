# Asphalt Solutions LLC – Website

Professional one-page site for Asphalt Solutions LLC (CNY sealcoating & repairs) with Facebook feed embed.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Deploy with GitHub Pages

1. Create a new repository on GitHub (e.g. `asphalt-solutions-website`).
2. Add the remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
4. Each push to `main` will build and deploy. The site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

## Contents

- **Tech:** Vite, React, Tailwind CSS
- **Sections:** Hero (logo + CTA), Services, Contact, Facebook feed (Page Plugin), Footer
- **Logo:** `public/Logo.jpg` (already copied from project root)
- **Links:** Facebook, Instagram, phone (315) 795-5214
