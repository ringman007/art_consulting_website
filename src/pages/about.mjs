export default function (c) {
  const { t, href, cfg, address, incorporated, icons } = c;
  const values = [
    [t('Privacy by default', '私隱為先'), t('We collect only what a product genuinely needs, and we never sell personal data.', '只收集產品真正需要的資料，絕不出售個人資料。')],
    [t('Clarity over complexity', '簡潔勝於繁複'), t('Good software does one job well. We cut features that do not earn their place.', '好的軟件專注做好一件事。我們會刪去不必要的功能。')],
    [t('Honest advice', '坦誠建議'), t('We tell clients what the evidence says, even when it is not what they hoped to hear.', '即使結果未如預期，我們亦會如實告知數據所反映的情況。')],
    [t('Built to last', '持久耐用'), t('We maintain what we ship, with regular updates long after launch day.', '產品推出後，我們仍會持續維護及定期更新。')],
  ];
  return {
    title: t('About us', '關於我們'),
    description: t(
      'Learn about ART Consulting Limited, a Hong Kong technology company incorporated in 2024 that builds mobile apps and provides digital consulting.',
      '認識 ART Consulting Limited：於2024年在香港成立的科技公司，專注流動應用程式開發及數碼顧問服務。'
    ),
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${t('About us', '關於我們')}</span>
    <h1>${t('A small studio with a practical mindset', '務實的小型科技工作室')}</h1>
    <p class="lead">${t(
      'We make software that people actually use, and we help other businesses do the same.',
      '我們開發真正實用的軟件，並協助其他企業做到同樣的事。'
    )}</p>
  </div>
</section>

<section class="section-tight">
  <div class="container split">
    <div>
      <h2>${t('Our story', '我們的故事')}</h2>
      <p>${t(
        `${cfg.legalName} was incorporated in Hong Kong on ${incorporated}. The company began as a consultancy offering marketing, market research and data analytics with a particular focus on the fast-moving fintech and blockchain sectors.`,
        `${cfg.legalName} 於${incorporated}在香港註冊成立。公司最初提供市場推廣、市場研究及數據分析顧問服務，尤其專注於發展迅速的金融科技及區塊鏈領域。`
      )}</p>
      <p>${t(
        'Working closely with product teams showed us how much value a well-made, focused app can create. Today we do both: we develop and publish our own mobile applications, and we bring that hands-on experience to clients who need help planning, launching or growing a digital product.',
        '與產品團隊緊密合作的經驗，讓我們體會到一個專注而精良的應用程式能創造多大價值。今天，我們雙線並行：開發並發佈自家流動應用程式，同時把實戰經驗帶給需要規劃、推出或發展數碼產品的客戶。'
      )}</p>
      <p>${t(
        'We are deliberately lean. We keep a small core and bring in independent specialists when a project calls for it, which keeps us fast, focused and cost-effective for our clients.',
        '我們刻意保持精簡：維持小型核心團隊，並按項目需要與獨立專家合作，讓我們能夠快速、專注，並為客戶控制成本。'
      )}</p>
    </div>
    <div>
      <div class="card">
        <span class="eyebrow">${t('Our mission', '我們的使命')}</span>
        <p style="font-family:var(--font-serif);font-size:1.45rem;line-height:1.45;color:var(--ink)">${t(
          'To build simple, trustworthy software that makes everyday life a little easier, and to help other businesses do the same.',
          '開發簡單、值得信賴的軟件，讓日常生活更輕鬆，並協助其他企業實現同樣目標。'
        )}</p>
      </div>
    </div>
  </div>
</section>

<section class="section-alt">
  <div class="container split">
    <div>
      <span class="eyebrow">${t('What we value', '我們的價值觀')}</span>
      <h2>${t('How we work', '我們的工作方式')}</h2>
      <p>${t('Four principles guide every product we build and every project we take on.', '四項原則貫穿我們開發的每一款產品及承接的每一個項目。')}</p>
    </div>
    <ul class="values">
      ${values.map(([h, p]) => `<li><h3>${h}</h3><p>${p}</p></li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">${t('At a glance', '公司概覽')}</span>
      <h2>${t('Company overview', '公司資料一覽')}</h2>
    </div>
    <table class="info-table">
      <tr><th scope="row">${t('Legal name', '法定名稱')}</th><td>${cfg.legalName}</td></tr>
      <tr><th scope="row">${t('Incorporated', '成立')}</th><td>${t(`${incorporated}, Hong Kong SAR`, `${incorporated}，香港特別行政區`)}</td></tr>
      <tr><th scope="row">${t('Company No.', '公司編號')}</th><td>${cfg.companyNumber}</td></tr>
      <tr><th scope="row">${t('Office', '辦事處')}</th><td>${address()}</td></tr>
      <tr><th scope="row">${t('Business', '業務')}</th><td>${t('Mobile app development; digital product consulting, research and analytics', '流動應用程式開發；數碼產品顧問、研究及數據分析')}</td></tr>
    </table>
    <p style="margin-top:20px"><a href="${href('company')}">${t('Full company information', '完整公司資料')} →</a></p>
  </div>
</section>

<div class="container">
  <div class="cta-band">
    <div>
      <h2>${t("Let's talk", '一起傾談')}</h2>
      <p>${t('Whether you have a finished brief or just an idea, we are happy to help you think it through.', '無論你已有完整需求，還是只有初步構思，我們都樂意與你一同探討。')}</p>
    </div>
    <a class="btn btn-light" href="${href('contact')}">${t('Get in touch', '聯絡我們')} ${icons.arrow}</a>
  </div>
</div>
`,
  };
}
