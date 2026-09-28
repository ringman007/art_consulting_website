export default function (c) {
  const { t, cfg, esc, href, lang } = c;

  const en = `
<p class="updated">Effective date: 28 September 2026</p>
<p>These Terms of Use govern your use of this website, which is operated by ${esc(cfg.legalName)}, a company incorporated in Hong Kong (Company No. ${esc(cfg.companyNumber)}) ("<b>we</b>", "<b>us</b>"). By using this website you agree to these terms. If you do not agree, please do not use the website.</p>

<h2>1. Use of the website</h2>
<p>You may browse this website and print or download extracts for your personal or internal business reference. You must not use the website in any way that is unlawful, that could damage or impair it, or that interferes with anyone else's use of it.</p>

<h2>2. Intellectual property</h2>
<p>Unless stated otherwise, all content on this website, including text, graphics, logos, icons and the ART Consulting name and mark, is owned by or licensed to ${esc(cfg.legalName)} and is protected by copyright and other intellectual-property laws. You may not reproduce, distribute or create derivative works from it without our prior written permission. Apple, iPhone, iCloud and App Store are trademarks of Apple Inc.</p>

<h2>3. Information only; no professional advice</h2>
<p>Content on this website is provided for general information. It does not constitute investment, financial, legal, tax, medical or other professional advice, and you should not rely on it as such. Any engagement for consulting services is governed by a separate written agreement.</p>

<h2>4. Our apps</h2>
<p>Apps we publish on the App Store are licensed to you under Apple's <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noopener">Licensed Application End User License Agreement</a>, together with any additional terms presented within the relevant app. Our <a href="${href('privacy')}">Privacy Policy</a> explains how our apps handle personal data.</p>

<h2>5. Accuracy and availability</h2>
<p>We aim to keep this website accurate and up to date, but we make no warranty that its content is complete, current or error-free, and it is provided "as is". We may change, suspend or withdraw the website, or any part of it, at any time without notice.</p>

<h2>6. Third-party links</h2>
<p>This website may link to websites operated by third parties. We have no control over those websites and are not responsible for their content or privacy practices.</p>

<h2>7. Limitation of liability</h2>
<p>To the fullest extent permitted by law, ${esc(cfg.legalName)} shall not be liable for any indirect, incidental or consequential loss or damage arising from your use of, or inability to use, this website or reliance on its content. Nothing in these terms excludes liability that cannot be excluded under the laws of Hong Kong.</p>

<h2>8. Changes to these terms</h2>
<p>We may revise these terms from time to time by updating this page. The revised terms apply from the effective date shown above.</p>

<h2>9. Governing law</h2>
<p>These terms are governed by the laws of the Hong Kong Special Administrative Region, and the courts of Hong Kong have non-exclusive jurisdiction over any dispute arising from them.</p>

<h2>10. Contact</h2>
<p>Questions about these terms can be sent to us using the details on our <a href="${href('contact')}">Contact</a> page.</p>
`;

  const zh = `
<p class="updated">生效日期：2026年9月28日</p>
<p>本使用條款適用於你使用本網站。本網站由在香港註冊成立的 ${esc(cfg.legalName)}（公司編號 ${esc(cfg.companyNumber)}）（「<b>我們</b>」）營運。使用本網站即表示你同意本條款。如你不同意，請勿使用本網站。</p>

<h2>1. 網站使用</h2>
<p>你可瀏覽本網站，並列印或下載部分內容作個人或公司內部參考之用。你不得以任何違法、可能損害網站或妨礙他人使用網站的方式使用本網站。</p>

<h2>2. 知識產權</h2>
<p>除另有說明外，本網站所有內容（包括文字、圖像、標誌、圖示及 ART Consulting 名稱及標記）均由 ${esc(cfg.legalName)} 擁有或獲授權使用，並受版權及其他知識產權法例保護。未經我們事先書面許可，你不得複製、分發或改編有關內容。Apple、iPhone、iCloud 及 App Store 為 Apple Inc. 的商標。</p>

<h2>3. 僅供參考，不構成專業建議</h2>
<p>本網站內容僅供一般參考，並不構成投資、財務、法律、稅務、醫療或其他專業建議，你不應據此作出任何決定。任何顧問服務均受另行訂立的書面協議規管。</p>

<h2>4. 我們的應用程式</h2>
<p>我們在 App Store 發佈的應用程式，按照 Apple 的<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noopener">授權應用程式最終用戶授權協議</a>及相關應用程式內列明的任何附加條款授權予你使用。我們的<a href="${href('privacy')}">私隱政策</a>說明應用程式如何處理個人資料。</p>

<h2>5. 準確性及可用性</h2>
<p>我們致力保持本網站內容準確及最新，但不保證內容完整、最新或無誤，本網站按「現狀」提供。我們可隨時更改、暫停或撤回本網站或其任何部分，而毋須另行通知。</p>

<h2>6. 第三方連結</h2>
<p>本網站可能載有第三方網站的連結。我們無法控制該等網站，亦不對其內容或私隱做法負責。</p>

<h2>7. 責任限制</h2>
<p>在法律允許的最大範圍內，${esc(cfg.legalName)} 對於因使用或無法使用本網站，或依賴其內容而引致的任何間接、附帶或相應損失或損害概不負責。本條款並不排除根據香港法律不能排除的責任。</p>

<h2>8. 條款修訂</h2>
<p>我們可不時更新本頁以修訂本條款。修訂後的條款自上述生效日期起適用。</p>

<h2>9. 適用法律</h2>
<p>本條款受香港特別行政區法律管轄，香港法院對由此產生的任何爭議具有非專屬司法管轄權。</p>

<h2>10. 聯絡</h2>
<p>如對本條款有任何疑問，請透過<a href="${href('contact')}">聯絡我們</a>頁面的資料與我們聯絡。</p>
<p class="notice">本條款以英文及中文發佈。如兩個版本有任何歧義，概以英文版本為準。</p>
`;

  return {
    title: t('Terms of Use', '使用條款'),
    description: t(`Terms of use for the ${cfg.legalName} website.`, `${cfg.legalName} 網站使用條款。`),
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${t('Legal', '法律資訊')}</span>
    <h1>${t('Terms of Use', '使用條款')}</h1>
  </div>
</section>
<section class="section-tight" style="padding-top:0">
  <div class="container prose">
${lang === 'zh' ? zh : en}
  </div>
</section>
`,
  };
}
