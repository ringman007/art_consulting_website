# ART Consulting Limited — company website

Bilingual (English / 繁體中文) static website for ART Consulting Limited, Hong Kong.

## Update contact details / domain

Everything company-specific lives in **`site.config.json`**:

| Field    | What it does                                                            |
|----------|-------------------------------------------------------------------------|
| `domain` | e.g. `"artconsulting.hk"` — enables canonical URLs, sitemap and `CNAME` |
| `email`  | e.g. `"hello@artconsulting.hk"` — shows email links and mailto buttons  |
| `phone`  | Public phone number                                                     |

## Build & preview locally

Requires Node 18+ (no dependencies).

```sh
node build.mjs          # outputs the site to dist/
npx serve dist          # optional local preview
```

## Structure

```
build.mjs            static site generator (layout, header, footer, SEO tags)
site.config.json     company details
src/data.mjs         services & apps content (EN + ZH)
src/pages/*.mjs      one file per page; t('English', '中文') holds both languages
src/assets/          CSS, logo, icons, JS
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
In the repository settings: **Settings → Pages → Source: GitHub Actions**, then add the custom domain.

**Never commit company documents** (certificates, ID numbers, bank letters, recovery codes) to this repo.
