import { services } from '../data.mjs';

export default function (c) {
  const { t, href, icons, lang } = c;
  const industries = [
    [t('Consumer apps', '消費者應用程式'), t('Mobile products for everyday life, from habit trackers to personal tools.', '日常生活流動產品，由習慣追蹤到個人工具。')],
    [t('Health & wellness', '健康及保健'), t('Nutrition, fitness and wellbeing products with privacy at their core.', '以私隱為核心的營養、健身及身心健康產品。')],
    [t('Fintech & blockchain', '金融科技及區塊鏈'), t('Research, analytics and go-to-market support for digital-finance teams.', '為數碼金融團隊提供研究、數據分析及市場推廣支援。')],
    [t('Startups & SMEs', '初創及中小企'), t('Lean, practical help for small teams launching their first digital product.', '為推出首個數碼產品的小型團隊提供精簡實用的協助。')],
  ];
  const models = [
    [t('Project-based', '按項目'), t('A fixed scope, timeline and price, agreed up front. Ideal for a new app, a research study or a launch campaign.', '預先協定範圍、時間表及價格。適合開發新應用程式、研究項目或推廣活動。')],
    [t('Monthly retainer', '月費合約'), t('Ongoing development, analytics or marketing support with a set number of hours each month.', '每月固定時數，提供持續開發、數據分析或營銷支援。')],
    [t('Advisory sessions', '顧問諮詢'), t('Focused working sessions to review a product, a plan or a dataset and agree next steps.', '針對產品、計劃或數據進行專題討論，並訂立下一步行動。')],
  ];
  return {
    title: t('Services', '服務'),
    description: t(
      'App development, product strategy and research, data analytics and digital marketing services from ART Consulting Limited, Hong Kong.',
      'ART Consulting Limited 提供應用程式開發、產品策略及研究、數據分析及數碼營銷服務。'
    ),
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${t('Services', '服務')}</span>
    <h1>${t('From idea to App Store, and beyond', '由構思到 App Store，以至更遠')}</h1>
    <p class="lead">${t(
      'We combine hands-on product building with research and analytics. Engage us for a single piece of work or for the whole journey.',
      '我們結合實際產品開發經驗與研究及數據分析能力。你可以委託我們處理單一項目，或由始至終全程參與。'
    )}</p>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    ${services
      .map(
        (s) => `<div class="service" id="${s.id}">
      <div><div class="icon">${icons[s.icon]}</div><h2>${s.name[lang]}</h2></div>
      <div>
        <p class="lead" style="font-size:1.1rem">${s.summary[lang]}</p>
        <ul>${s.items[lang].map((i) => `<li>${i}</li>`).join('')}</ul>
      </div>
    </div>`
      )
      .join('\n    ')}
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">${t('Industries', '行業')}</span>
      <h2>${t('Where we can help most', '我們最能發揮所長的領域')}</h2>
    </div>
    <div class="grid grid-4">
      ${industries.map(([h, p]) => `<div class="card"><h3 style="margin-top:0">${h}</h3><p>${p}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">${t('Working together', '合作模式')}</span>
      <h2>${t('Flexible engagement models', '靈活的合作模式')}</h2>
      <p>${t('Every engagement starts with a free introductory call and a written proposal.', '每個項目均以免費初步通話及書面建議書開始。')}</p>
    </div>
    <div class="grid grid-3">
      ${models.map(([h, p]) => `<div class="card"><h3 style="margin-top:0">${h}</h3><p>${p}</p></div>`).join('\n      ')}
    </div>
    <p class="notice" style="margin-top:36px">${t(
      'Please note: ART Consulting Limited does not provide investment advice, asset management, custody or other regulated financial services. Our analytics and research are for business-planning purposes only.',
      '請注意：ART Consulting Limited 不提供投資建議、資產管理、託管或其他受規管的金融服務。我們的數據分析及研究僅供業務規劃用途。'
    )}</p>
  </div>
</section>

<div class="container">
  <div class="cta-band">
    <div>
      <h2>${t('Tell us about your project', '告訴我們你的項目')}</h2>
      <p>${t('Share a few lines about what you need and we will come back with next steps within two business days.', '簡單描述你的需要，我們會在兩個工作天內回覆並提出下一步建議。')}</p>
    </div>
    <a class="btn btn-light" href="${href('contact')}">${t('Start a conversation', '開始傾談')} ${icons.arrow}</a>
  </div>
</div>
`,
  };
}
