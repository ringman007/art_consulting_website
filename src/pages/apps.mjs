import { products } from '../data.mjs';
import { appIcons } from '../icons.mjs';

export default function (c) {
  const { t, href, lang, icons, cfg, mailto, phoneHref, esc } = c;
  const supportMail = mailto(t('App support', '應用程式支援'));
  return {
    title: t('Our apps', '我們的應用程式'),
    description: t(
      'Mobile apps for iPhone by ART Consulting Limited: a calorie and nutrition tracker, a personal finance helper and everyday utilities. App support and privacy information.',
      'ART Consulting Limited 的 iPhone 應用程式：卡路里及營養追蹤、個人理財助手及日常實用工具。應用程式支援及私隱資訊。'
    ),
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${t('Our apps', '我們的應用程式')}</span>
    <h1>${t('Focused apps that respect your privacy', '專注實用、尊重私隱的應用程式')}</h1>
    <p class="lead">${t(
      `Every app we publish is designed to do one job well. All our apps are published on the App Store under the developer name ${cfg.legalName}.`,
      `我們發佈的每款應用程式都專注做好一件事。所有應用程式均以開發者名稱「${cfg.legalName}」在 App Store 發佈。`
    )}</p>
  </div>
</section>

<section class="section-tight">
  <div class="container">
    <div class="grid grid-3">
      ${products
        .map(
          (p) => `<article class="card product" id="${p.id}">
        <div class="product-top">${appIcons[p.id]}<div><h3>${p.name[lang]}</h3><span class="badge">${p.category[lang]}</span></div></div>
        <p style="margin-top:16px">${p.summary[lang]}</p>
        <ul class="features">${p.features[lang].map((f) => `<li>${f}</li>`).join('')}</ul>
        <p style="margin-top:18px"><span class="badge badge-accent">${t('iOS · In development', 'iOS · 開發中')}</span></p>
        ${p.note ? `<p class="note">${p.note[lang]}</p>` : ''}
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section-alt" id="support">
  <div class="container split">
    <div>
      <span class="eyebrow">${t('App support', '應用程式支援')}</span>
      <h2>${t('Need help with one of our apps?', '使用我們的應用程式時需要協助？')}</h2>
      <p>${t(
        'Contact our support team and we will aim to reply within two business days. To help us resolve your issue quickly, please include:',
        '請聯絡我們的支援團隊，我們會盡量在兩個工作天內回覆。為了更快解決你的問題，請提供：'
      )}</p>
      <ul>
        <li>${t('The name of the app and its version', '應用程式名稱及版本')}</li>
        <li>${t('Your device model and iOS version', '你的裝置型號及 iOS 版本')}</li>
        <li>${t('A short description of the problem (screenshots help)', '問題的簡單描述（附上截圖更佳）')}</li>
      </ul>
      <p>${t(
        'Subscriptions and in-app purchases are processed by Apple. For refunds, please visit <a href="https://reportaproblem.apple.com" rel="noopener">reportaproblem.apple.com</a>.',
        '訂閱及應用程式內購買均由 Apple 處理。如需退款，請瀏覽 <a href="https://reportaproblem.apple.com" rel="noopener">reportaproblem.apple.com</a>。'
      )}</p>
    </div>
    <div class="mail-options">
      ${supportMail ? `<a class="mail-option" href="${supportMail}"><div><b>${t('Email support', '電郵支援')}</b><span>${esc(cfg.email)}</span></div>${icons.arrow}</a>` : ''}
      <a class="mail-option" href="${phoneHref}"><div><b>${t('Call us', '致電我們')}</b><span>${esc(cfg.phone)} · ${t(cfg.hours, '星期一至五 10:00–18:00（香港時間）')}</span></div>${icons.arrow}</a>
      <a class="mail-option" href="${href('privacy')}"><div><b>${t('Privacy Policy', '私隱政策')}</b><span>${t('How our apps handle your data', '我們的應用程式如何處理你的資料')}</span></div>${icons.arrow}</a>
      <a class="mail-option" href="${href('terms')}"><div><b>${t('Terms of Use', '使用條款')}</b><span>${t('The terms that apply to our website and apps', '適用於本網站及應用程式的條款')}</span></div>${icons.arrow}</a>
    </div>
  </div>
</section>
`,
  };
}
