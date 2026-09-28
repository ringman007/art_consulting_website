import { services, products } from '../data.mjs';
import { appIcons } from '../icons.mjs';

const heroArt = `<svg class="hero-art" viewBox="0 0 440 440" aria-hidden="true">
  <circle cx="250" cy="200" r="170" fill="#f6e4df"/>
  <circle cx="250" cy="200" r="120" fill="none" stroke="#c2412b" stroke-opacity=".25" stroke-dasharray="4 8"/>
  <g transform="translate(120 40)">
    <rect width="190" height="370" rx="34" fill="#0f1a2a"/>
    <rect x="10" y="10" width="170" height="350" rx="26" fill="#faf8f3"/>
    <rect x="70" y="20" width="50" height="12" rx="6" fill="#0f1a2a"/>
    <rect x="26" y="54" width="90" height="10" rx="5" fill="#0f1a2a"/>
    <rect x="26" y="72" width="60" height="8" rx="4" fill="#9aa4b5"/>
    <rect x="26" y="98" width="138" height="96" rx="14" fill="#fff" stroke="#e2e0d9"/>
    <path d="M40 170 70 148 96 158 124 128 150 136" fill="none" stroke="#c2412b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="124" cy="128" r="5" fill="#c2412b"/>
    <rect x="26" y="208" width="64" height="64" rx="14" fill="#1f8f5c"/>
    <rect x="100" y="208" width="64" height="64" rx="14" fill="#1c3fa8"/>
    <rect x="26" y="282" width="64" height="64" rx="14" fill="#33415a"/>
    <rect x="100" y="282" width="64" height="64" rx="14" fill="#fff" stroke="#e2e0d9"/>
    <path d="M122 314h20M132 304v20" stroke="#c2412b" stroke-width="4" stroke-linecap="round"/>
  </g>
  <g transform="translate(40 250)">
    <rect width="120" height="120" rx="18" fill="#c2412b"/>
    <rect x="9" y="9" width="102" height="102" rx="12" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="2"/>
    <path fill="#fff" fill-rule="evenodd" d="M60 24 92 96H76l-6-14H50l-6 14H28Zm0 24-7 19h14Z"/>
  </g>
</svg>`;

export default function (c) {
  const { t, href, icons, lang, cfg, incorporated } = c;
  return {
    title: t('ART Consulting Limited: Apps & Digital Consulting, Hong Kong', 'ART Consulting Limited｜香港應用程式開發及數碼顧問'),
    description: t(
      'ART Consulting Limited is a Hong Kong technology company that builds mobile apps and provides app development, product research, data analytics and digital marketing services.',
      'ART Consulting Limited 是一家香港科技公司，開發流動應用程式，並提供應用程式開發、產品研究、數據分析及數碼營銷服務。'
    ),
    body: `
<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="eyebrow">${t('Hong Kong · Est. 2024', '香港 · 2024年成立')}</span>
      <h1>${t('We build useful apps and <em>better digital products.</em>', '我們開發實用的應用程式，<em>打造更好的數碼產品。</em>')}</h1>
      <p class="lead">${t(
        'ART Consulting Limited is a Hong Kong technology company. We design, build and publish our own mobile apps, and we help businesses plan, launch and grow digital products through research, analytics and strategy.',
        'ART Consulting Limited 是一家香港科技公司。我們設計、開發並發佈自家流動應用程式，同時透過研究、數據分析及策略，協助企業規劃、推出及發展數碼產品。'
      )}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${href('apps')}">${t('Explore our apps', '瀏覽我們的應用程式')} ${icons.arrow}</a>
        <a class="btn btn-ghost" href="${href('contact')}">${t('Work with us', '與我們合作')}</a>
      </div>
    </div>
    ${heroArt}
  </div>
</section>

<section class="section-tight" aria-label="${t('Company facts', '公司概況')}">
  <div class="container">
    <dl class="facts">
      <div class="fact"><dt>${t('Incorporated', '成立日期')}</dt><dd>${incorporated}</dd></div>
      <div class="fact"><dt>${t('Headquarters', '總部')}</dt><dd>${t('Kowloon, Hong Kong', '香港九龍')}</dd></div>
      <div class="fact"><dt>${t('Company No.', '公司編號')}</dt><dd>${cfg.companyNumber}</dd></div>
      <div class="fact"><dt>${t('Focus', '專注範疇')}</dt><dd>${t('iOS apps · Data · Strategy', 'iOS 應用 · 數據 · 策略')}</dd></div>
    </dl>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">${t('What we do', '業務範疇')}</span>
      <h2>${t('Two sides of one studio', '一間工作室，兩大業務')}</h2>
      <p>${t(
        'Building our own products keeps our consulting grounded in real shipping experience, and our client work keeps our products sharp.',
        '開發自家產品令我們的顧問服務建基於實際經驗；而客戶項目則讓我們的產品精益求精。'
      )}</p>
    </div>
    <div class="grid grid-4">
      ${services
        .map(
          (s) => `<article class="card">
        <div class="icon">${icons[s.icon]}</div>
        <h3>${s.name[lang]}</h3>
        <p>${s.summary[lang]}</p>
      </article>`
        )
        .join('\n      ')}
    </div>
    <p style="margin-top:28px"><a href="${href('services')}">${t('View all services', '查看所有服務')} →</a></p>
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">${t('Our apps', '我們的應用程式')}</span>
      <h2>${t('Everyday tools, built with care', '用心打造的日常工具')}</h2>
      <p>${t(
        'We are building a portfolio of focused, privacy-respecting apps for iPhone.',
        '我們正在為 iPhone 開發一系列專注、尊重私隱的應用程式。'
      )}</p>
    </div>
    <div class="grid grid-3">
      ${products
        .map(
          (p) => `<article class="card product">
        <div class="product-top">${appIcons[p.id]}<div><h3>${p.name[lang]}</h3><span class="badge">${p.category[lang]}</span></div></div>
        <p style="margin-top:16px">${p.summary[lang]}</p>
      </article>`
        )
        .join('\n      ')}
    </div>
    <p style="margin-top:28px"><a href="${href('apps')}">${t('More about our apps', '了解更多應用程式')} →</a></p>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">${t('How we work', '工作流程')}</span>
      <h2>${t('A clear process, from idea to launch', '由構思到推出，流程清晰')}</h2>
    </div>
    <div class="grid grid-4 steps">
      <div class="step"><h3>${t('Discover', '探索')}</h3><p>${t('We research the market, the users and the problem before writing a line of code.', '在編寫任何程式碼之前，先研究市場、用戶及問題所在。')}</p></div>
      <div class="step"><h3>${t('Design', '設計')}</h3><p>${t('We turn findings into flows, prototypes and a scoped plan with clear milestones.', '將研究結果轉化為使用流程、原型及具明確里程碑的計劃。')}</p></div>
      <div class="step"><h3>${t('Build', '開發')}</h3><p>${t('We develop in short iterations with regular demos, so there are no surprises.', '以短週期迭代開發並定期展示進度，確保一切在掌握之中。')}</p></div>
      <div class="step"><h3>${t('Launch & improve', '推出及優化')}</h3><p>${t('We release, measure what happens, and keep improving based on real data.', '產品推出後持續追蹤成效，並根據真實數據不斷改進。')}</p></div>
    </div>
  </div>
</section>

<div class="container">
  <div class="cta-band">
    <div>
      <h2>${t('Have a project in mind?', '有項目想傾談？')}</h2>
      <p>${t('Tell us what you are building. We reply to every enquiry within two business days.', '告訴我們你的構思，我們會在兩個工作天內回覆所有查詢。')}</p>
    </div>
    <a class="btn btn-light" href="${href('contact')}">${t('Contact us', '聯絡我們')} ${icons.arrow}</a>
  </div>
</div>
`,
  };
}
