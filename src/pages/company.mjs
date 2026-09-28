export default function (c) {
  const { t, cfg, address, incorporated, esc, phoneHref, mailto } = c;
  const mail = mailto();
  return {
    title: t('Company information', '公司資料'),
    description: t(
      `Legal and registration details of ${cfg.legalName}, a private company limited by shares incorporated in Hong Kong (Company No. ${cfg.companyNumber}).`,
      `${cfg.legalName} 的法律及註冊資料：於香港註冊成立的私人股份有限公司（公司編號 ${cfg.companyNumber}）。`
    ),
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${t('Legal', '法律資訊')}</span>
    <h1>${t('Company information', '公司資料')}</h1>
    <p class="lead">${t('Official registration and contact details for ART Consulting Limited.', 'ART Consulting Limited 的官方註冊及聯絡資料。')}</p>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <table class="info-table">
      <tr><th scope="row">${t('Registered name', '註冊名稱')}</th><td>${esc(cfg.legalName.toUpperCase())}</td></tr>
      <tr><th scope="row">${t('Trading name', '營業名稱')}</th><td>${esc(cfg.shortName)}</td></tr>
      <tr><th scope="row">${t('Legal form', '公司類別')}</th><td>${t(cfg.companyType, '私人股份有限公司')}</td></tr>
      <tr><th scope="row">${t('Place of incorporation', '註冊地點')}</th><td>${t('Hong Kong SAR, under the Companies Ordinance (Cap. 622)', '香港特別行政區，根據《公司條例》（第622章）')}</td></tr>
      <tr><th scope="row">${t('Date of incorporation', '成立日期')}</th><td>${incorporated}</td></tr>
      <tr><th scope="row">${t('Company number (CR No.)', '公司編號（CR No.）')}</th><td>${esc(cfg.companyNumber)}</td></tr>
      <tr><th scope="row">${t('Business registration', '商業登記')}</th><td>${t('Registered with the Inland Revenue Department under the Business Registration Ordinance (Cap. 310)', '已根據《商業登記條例》（第310章）向稅務局登記')}</td></tr>
      <tr><th scope="row">D-U-N-S® ${t('Number', '編號')}</th><td>${esc(cfg.duns)}</td></tr>
      <tr><th scope="row">${t('Registered office', '註冊辦事處')}</th><td>${address()}</td></tr>
      <tr><th scope="row">${t('Telephone', '電話')}</th><td><a href="${phoneHref}">${esc(cfg.phone)}</a></td></tr>
      ${mail ? `<tr><th scope="row">${t('Email', '電郵')}</th><td><a href="${mail}">${esc(cfg.email)}</a></td></tr>` : ''}
      <tr><th scope="row">${t('Principal activities', '主要業務')}</th><td>${t(
        'Development and publication of mobile software applications; digital product consulting, market research, data analytics and marketing services',
        '開發及發佈流動軟件應用程式；數碼產品顧問、市場研究、數據分析及營銷服務'
      )}</td></tr>
    </table>
    <div class="prose" style="margin-top:36px">
      <p>${t(
        'Company details can be verified through the Hong Kong Companies Registry at <a href="https://www.cr.gov.hk/" rel="noopener">www.cr.gov.hk</a>.',
        '公司資料可於香港公司註冊處網站 <a href="https://www.cr.gov.hk/" rel="noopener">www.cr.gov.hk</a> 查核。'
      )}</p>
      <p>${t(
        'ART Consulting Limited is not licensed by the Securities and Futures Commission and does not carry on any regulated activity. Nothing on this website constitutes investment, legal, tax or financial advice.',
        'ART Consulting Limited 並非證券及期貨事務監察委員會持牌機構，亦不從事任何受規管活動。本網站內容概不構成投資、法律、稅務或財務建議。'
      )}</p>
    </div>
  </div>
</section>
`,
  };
}
