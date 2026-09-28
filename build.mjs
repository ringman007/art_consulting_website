// Static site generator for artconsulting website.
// Usage: node build.mjs  → writes the site to ./dist
// No dependencies; edit site.config.json for contact details and domain.

import { readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { icons } from './src/icons.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');
const cfg = JSON.parse(readFileSync(join(root, 'site.config.json'), 'utf8'));

const LANGS = {
  en: { code: 'en', htmlLang: 'en', dir: '', label: 'English', ogLocale: 'en_HK' },
  zh: { code: 'zh', htmlLang: 'zh-Hant', dir: 'zh', label: '繁體中文', ogLocale: 'zh_HK' },
};

// Page order is also the sitemap order.
const PAGES = ['index', 'about', 'services', 'apps', 'contact', 'company', 'privacy', 'terms'];
const NAV = ['index', 'about', 'services', 'apps', 'contact'];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function makeCtx(lang, page) {
  const L = LANGS[lang];
  const prefix = L.dir ? '../' : '';
  const t = (en, zh) => (lang === 'zh' ? zh : en);
  const href = (p) => (p === 'index' ? './' : `${p}.html`);
  const asset = (p) => `${prefix}assets/${p}`;
  const phoneHref = cfg.phone ? `tel:${cfg.phone.replace(/[^+\d]/g, '')}` : null;
  const mailto = (subject) =>
    cfg.email ? `mailto:${cfg.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}` : null;
  const absUrl = (lng, p) => {
    if (!cfg.domain) return null;
    const d = LANGS[lng].dir ? `${LANGS[lng].dir}/` : '';
    return `https://${cfg.domain}/${d}${p === 'index' ? '' : `${p}.html`}`;
  };
  const address = (sep = '<br>') =>
    lang === 'zh'
      ? esc(cfg.address.zh)
      : [cfg.address.line1, cfg.address.line2, cfg.address.district, cfg.address.region].map(esc).join(sep);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `Office Plus, ${cfg.address.line2}, ${cfg.address.district}, Hong Kong`
  )}`;
  const incorporated = t('22 July 2024', '2024年7月22日');
  return { lang, L, page, prefix, t, href, asset, cfg, esc, icons, phoneHref, mailto, absUrl, address, mapsUrl, incorporated };
}

function layout(ctx, { title, description, body }) {
  const { L, t, href, asset, cfg, page, prefix, lang, phoneHref, mailto } = ctx;
  const other = lang === 'en' ? 'zh' : 'en';
  const switchHref = lang === 'en' ? `zh/${page === 'index' ? '' : `${page}.html`}` : `../${page === 'index' ? '' : `${page}.html`}`;
  const navLabel = {
    index: t('Home', '首頁'),
    about: t('About', '關於我們'),
    services: t('Services', '服務'),
    apps: t('Apps', '應用程式'),
    contact: t('Contact', '聯絡我們'),
  };
  const canonical = ctx.absUrl(lang, page);
  const fullTitle = page === 'index' ? title : `${title} | ${cfg.legalName}`;
  const mail = mailto();

  const orgLd = page === 'index' ? `
<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: cfg.legalName,
    legalName: cfg.legalName,
    ...(cfg.domain ? { url: `https://${cfg.domain}/`, logo: `https://${cfg.domain}/assets/logo.svg` } : {}),
    foundingDate: cfg.incorporated,
    duns: cfg.duns,
    ...(cfg.phone ? { telephone: cfg.phone } : {}),
    ...(cfg.email ? { email: cfg.email } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${cfg.address.line1}, ${cfg.address.line2}`,
      addressLocality: cfg.address.district,
      addressRegion: 'Kowloon',
      addressCountry: 'HK',
    },
  })}</script>` : '';

  return `<!doctype html>
<html lang="${L.htmlLang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<meta name="theme-color" content="#0f1a2a">
${canonical ? `<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="en" href="${ctx.absUrl('en', page)}">
<link rel="alternate" hreflang="zh-Hant" href="${ctx.absUrl('zh', page)}">
<link rel="alternate" hreflang="x-default" href="${ctx.absUrl('en', page)}">` : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(cfg.legalName)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:locale" content="${L.ogLocale}">
${canonical ? `<meta property="og:url" content="${canonical}">
<meta property="og:image" content="https://${cfg.domain}/assets/og-image.png">` : ''}
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${asset('logo.svg')}" type="image/svg+xml">
<link rel="apple-touch-icon" href="${asset('apple-touch-icon.png')}">
<link rel="stylesheet" href="${asset('styles.css')}">${orgLd}
</head>
<body>
<a class="skip-link" href="#main">${t('Skip to content', '跳至內容')}</a>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="${href('index')}" aria-label="${esc(cfg.legalName)} — ${t('home', '首頁')}">
      <img class="brand-mark" src="${asset('logo.svg')}" alt="" width="36" height="36">
      <span class="brand-text"><span class="brand-name">ART</span><span class="brand-sub">Consulting Ltd</span></span>
    </a>
    <button class="nav-toggle" aria-controls="site-nav" aria-expanded="false" aria-label="${t('Menu', '選單')}">${icons.menu}</button>
    <nav class="nav" id="site-nav" aria-label="${t('Main', '主選單')}">
      ${NAV.map((p) => `<a href="${href(p)}"${p === page ? ' aria-current="page"' : ''}>${navLabel[p]}</a>`).join('\n      ')}
      <a class="lang" href="${switchHref}" hreflang="${LANGS[other].htmlLang}" lang="${LANGS[other].htmlLang}">${LANGS[other].label}</a>
    </nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          <img class="brand-mark" src="${asset('logo.svg')}" alt="" width="36" height="36">
          <span class="brand-text"><span class="brand-name">ART</span><span class="brand-sub">Consulting Ltd</span></span>
        </div>
        <p>${t(
          'A Hong Kong technology company building mobile apps and helping businesses grow digital products.',
          '一家香港科技公司，開發流動應用程式，並協助企業發展數碼產品。'
        )}</p>
      </div>
      <div>
        <h4>${t('Company', '公司')}</h4>
        <ul>
          <li><a href="${href('about')}">${navLabel.about}</a></li>
          <li><a href="${href('services')}">${navLabel.services}</a></li>
          <li><a href="${href('apps')}">${navLabel.apps}</a></li>
          <li><a href="${href('contact')}">${navLabel.contact}</a></li>
        </ul>
      </div>
      <div>
        <h4>${t('Legal', '法律資訊')}</h4>
        <ul>
          <li><a href="${href('company')}">${t('Company information', '公司資料')}</a></li>
          <li><a href="${href('privacy')}">${t('Privacy Policy', '私隱政策')}</a></li>
          <li><a href="${href('terms')}">${t('Terms of Use', '使用條款')}</a></li>
        </ul>
      </div>
      <div>
        <h4>${t('Contact', '聯絡')}</h4>
        <address>
          ${ctx.address()}<br><br>
          ${[phoneHref && `<a href="${phoneHref}">${esc(cfg.phone)}</a>`, mail && `<a href="${mail}">${esc(cfg.email)}</a>`].filter(Boolean).join('<br>')}
        </address>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${esc(cfg.legalName)}. ${t('All rights reserved.', '版權所有。')}</span>
      <span>${t('Incorporated in Hong Kong', '於香港註冊成立')} · ${t('Company No.', '公司編號')} ${esc(cfg.companyNumber)}</span>
    </div>
  </div>
</footer>
<script src="${asset('site.js')}" defer></script>
</body>
</html>
`;
}

// ---------- Build ----------
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, 'src/assets'), join(out, 'assets'), { recursive: true });

const pageModules = {};
for (const p of PAGES) pageModules[p] = (await import(`./src/pages/${p}.mjs`)).default;

let count = 0;
for (const lang of Object.keys(LANGS)) {
  const dir = join(out, LANGS[lang].dir);
  mkdirSync(dir, { recursive: true });
  for (const p of PAGES) {
    const ctx = makeCtx(lang, p);
    writeFileSync(join(dir, `${p}.html`), layout(ctx, pageModules[p](ctx)));
    count++;
  }
}

// 404 page (served at the site root by GitHub Pages / Netlify / Cloudflare)
{
  const ctx = makeCtx('en', '404');
  ctx.href = (p) => (p === 'index' ? '/' : `/${p}.html`);
  ctx.asset = (p) => `/assets/${p}`;
  const html = layout(ctx, (await import('./src/pages/404.mjs')).default(ctx)).replace(
    /href="zh\/404\.html"/,
    'href="/zh/"'
  );
  writeFileSync(join(out, '404.html'), html);
}

if (cfg.domain) {
  writeFileSync(join(out, 'CNAME'), `${cfg.domain}\n`);
  const today = new Date().toISOString().slice(0, 10);
  const urls = Object.keys(LANGS)
    .flatMap((l) => PAGES.map((p) => makeCtx(l, p).absUrl(l, p)))
    .map((u) => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n');
  writeFileSync(
    join(out, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: https://${cfg.domain}/sitemap.xml\n`);
} else {
  writeFileSync(join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');
}
writeFileSync(join(out, '.nojekyll'), '');

console.log(`Built ${count} pages + 404 into dist/`);
if (!cfg.domain) console.warn('⚠  site.config.json: "domain" is not set — canonical URLs, CNAME and sitemap were skipped.');
if (!cfg.email) console.warn('⚠  site.config.json: "email" is not set — email links are hidden.');
