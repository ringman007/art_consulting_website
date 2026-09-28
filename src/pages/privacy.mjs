export default function (c) {
  const { t, cfg, esc, address, phoneHref, mailto, lang } = c;
  const mail = mailto('Privacy request');
  const contactHtml = `${esc(cfg.legalName)}<br>${address()}${phoneHref ? `<br>${t('Phone', '電話')}: <a href="${phoneHref}">${esc(cfg.phone)}</a>` : ''}${
    mail ? `<br>${t('Email', '電郵')}: <a href="${mail}">${esc(cfg.email)}</a>` : ''
  }`;

  const en = `
<p class="updated">Effective date: 28 September 2026</p>
<p>This Privacy Policy explains how ${esc(cfg.legalName)} ("<b>ART Consulting</b>", "<b>we</b>", "<b>us</b>") collects, uses and protects personal data when you visit this website, contact us, or use any mobile application we publish (our "<b>Apps</b>"). We are committed to complying with the Personal Data (Privacy) Ordinance (Cap. 486) of Hong Kong and other applicable data-protection laws.</p>

<h2>1. Who we are</h2>
<p>${esc(cfg.legalName)} is a company incorporated in Hong Kong (Company No. ${esc(cfg.companyNumber)}) and is responsible for the personal data described in this policy. Our contact details are set out in section 12.</p>

<h2>2. This website</h2>
<p>This website does not use cookies, advertising trackers or third-party analytics, and it does not ask you to create an account.</p>
<p>Like all websites, our hosting provider automatically processes technical information such as your IP address, browser type and the pages requested, in order to deliver the site and protect it against abuse. This information is held by the hosting provider for a limited period and is not used by us to identify you.</p>

<h2>3. When you contact us</h2>
<p>If you use our contact form or email us, we receive the information you choose to share, such as your name, email address, company and the content of your message. Contact-form submissions are transmitted securely by our form-processing provider, Web3Forms, and delivered to our company mailbox; they are not used for any other purpose. We use it only to respond to you, provide the support or services you asked for, and keep a record of our correspondence.</p>

<h2>4. Our Apps</h2>
<p>Our Apps are designed to collect as little personal data as possible. Unless an App's own privacy notice or App Store privacy label states otherwise:</p>
<ul>
  <li><b>Data you enter stays with you.</b> Information you enter into an App, such as meals and nutrition logs or income, expense and budget entries, is stored on your device. If you enable iCloud, it may be synchronised through your own private iCloud account, which is operated by Apple. We cannot access it.</li>
  <li><b>No advertising tracking.</b> We do not track you across other companies' apps or websites, and we do not sell personal data.</li>
  <li><b>Diagnostics.</b> If you choose to share crash reports and usage statistics with app developers in your device settings, Apple may provide us with aggregated, de-identified diagnostic data that we use only to fix bugs and improve performance.</li>
  <li><b>Purchases.</b> Payments, subscriptions and refunds are handled by Apple. We do not receive your payment card details.</li>
  <li><b>Permissions.</b> An App will only ask for device permissions (for example, the camera to scan a barcode, or Apple Health access) when a feature needs them. You can withdraw a permission at any time in your device settings.</li>
</ul>
<p>Each App's App Store listing includes a privacy label that summarises its data practices. Where an App processes additional data, for example if it offers an optional online account, the App will explain this and ask for your consent before any such data is collected.</p>

<h3>Health and financial information</h3>
<p>Nutrition and body-related information and personal finance information can be sensitive. We never use this information for advertising, never sell it, and never share it with third parties except as described in this policy or with your explicit consent. Our Apps are not medical devices and do not provide medical, investment, tax or financial advice.</p>

<h2>5. How we use personal data</h2>
<ul>
  <li>To respond to enquiries and provide customer support;</li>
  <li>To provide, maintain and improve our website, Apps and services;</li>
  <li>To perform contracts with business clients;</li>
  <li>To comply with legal, accounting and regulatory obligations; and</li>
  <li>To protect the security and integrity of our services.</li>
</ul>
<p>We will not use your personal data for direct marketing without your consent.</p>

<h2>6. Sharing personal data</h2>
<p>We do not sell or rent personal data. We share it only with service providers who help us operate our business (such as hosting, email, form-processing and accounting providers), under obligations of confidentiality; with professional advisers; or where required by law, court order or a competent authority.</p>

<h2>7. International transfers</h2>
<p>Some of our service providers may store or process data outside Hong Kong. Where this happens, we take reasonable steps to ensure the data receives a level of protection comparable to that required in Hong Kong.</p>

<h2>8. Retention</h2>
<p>We keep personal data only for as long as necessary for the purposes above, or as required by law (for example, business records that must be kept for seven years under Hong Kong law), after which it is securely deleted.</p>

<h2>9. Security</h2>
<p>We use appropriate technical and organisational measures to protect personal data against unauthorised access, loss or misuse, including encrypted connections (HTTPS) and access controls. No method of transmission or storage is completely secure, but we work to protect your information.</p>

<h2>10. Your rights</h2>
<p>Under the Personal Data (Privacy) Ordinance you have the right to request access to, and correction of, personal data we hold about you. You may also ask us to delete your data or stop contacting you. To make a request, contact us using the details below. We will respond within 40 days, as required by law. You can delete data stored locally by an App at any time by deleting the App from your device.</p>

<h2>11. Children</h2>
<p>Our website and Apps are not directed at children under 13, and we do not knowingly collect personal data from them. If you believe a child has provided us with personal data, please contact us and we will delete it.</p>

<h2>12. Contact us</h2>
<p>For any privacy question or request, please contact:</p>
<p>${contactHtml}</p>

<h2>13. Changes to this policy</h2>
<p>We may update this policy from time to time. The latest version will always be published on this page with its effective date. If we make significant changes, we will highlight them on this website or within our Apps.</p>
`;

  const zh = `
<p class="updated">生效日期：2026年9月28日</p>
<p>本私隱政策說明 ${esc(cfg.legalName)}（「<b>ART Consulting</b>」或「<b>我們</b>」）在你瀏覽本網站、與我們聯絡或使用我們發佈的任何流動應用程式（「<b>應用程式</b>」）時，如何收集、使用及保護個人資料。我們致力遵守香港《個人資料（私隱）條例》（第486章）及其他適用的資料保障法例。</p>

<h2>1. 我們是誰</h2>
<p>${esc(cfg.legalName)} 是一家在香港註冊成立的公司（公司編號 ${esc(cfg.companyNumber)}），負責本政策所述的個人資料。我們的聯絡資料載於第12節。</p>

<h2>2. 本網站</h2>
<p>本網站不使用 Cookies、廣告追蹤器或第三方分析工具，亦不要求你建立帳戶。</p>
<p>與所有網站一樣，我們的網站寄存服務供應商會自動處理技術資料，例如你的 IP 地址、瀏覽器類型及所瀏覽的頁面，以提供網站服務及防止濫用。有關資料由寄存服務供應商保存一段有限時間，我們不會用以識別你的身份。</p>

<h2>3. 當你聯絡我們</h2>
<p>如你透過聯絡表格或電郵聯絡我們，我們會收到你選擇提供的資料，例如姓名、電郵地址、公司名稱及訊息內容。聯絡表格的內容經由表格處理服務供應商 Web3Forms 安全傳送至本公司郵箱，不會用作其他用途。我們只會使用這些資料回覆你、提供你所要求的支援或服務，以及保存通訊紀錄。</p>

<h2>4. 我們的應用程式</h2>
<p>我們的應用程式在設計上盡量減少收集個人資料。除非個別應用程式的私隱聲明或 App Store 私隱標籤另有說明，否則：</p>
<ul>
  <li><b>你輸入的資料由你掌握。</b>你在應用程式中輸入的資料（例如餐飲及營養紀錄，或收入、開支及預算）會儲存在你的裝置上。如你啟用 iCloud，資料或會透過由 Apple 營運的個人 iCloud 帳戶同步。我們無法存取這些資料。</li>
  <li><b>不作廣告追蹤。</b>我們不會在其他公司的應用程式或網站上追蹤你，亦不會出售個人資料。</li>
  <li><b>診斷資料。</b>如你在裝置設定中選擇與開發者分享當機報告及使用統計，Apple 可能向我們提供經彙整及去識別化的診斷資料，我們只會用以修正錯誤及提升效能。</li>
  <li><b>購買。</b>付款、訂閱及退款均由 Apple 處理，我們不會收到你的付款卡資料。</li>
  <li><b>權限。</b>應用程式只會在功能需要時要求裝置權限（例如使用相機掃描條碼，或存取 Apple「健康」資料）。你可隨時在裝置設定中撤回權限。</li>
</ul>
<p>每款應用程式的 App Store 頁面均附有私隱標籤，概述其資料處理方式。如應用程式需處理額外資料（例如提供可選的網上帳戶），會在收集任何資料前加以說明並徵求你的同意。</p>

<h3>健康及財務資料</h3>
<p>營養、身體相關資料及個人財務資料可能屬敏感資料。我們絕不會將此類資料用於廣告或出售，亦不會與第三方分享，除非本政策另有說明或已獲你明確同意。我們的應用程式並非醫療器材，亦不提供醫療、投資、稅務或財務建議。</p>

<h2>5. 我們如何使用個人資料</h2>
<ul>
  <li>回覆查詢及提供客戶支援；</li>
  <li>提供、維護及改善我們的網站、應用程式及服務；</li>
  <li>履行與企業客戶的合約；</li>
  <li>遵守法律、會計及監管責任；及</li>
  <li>保障我們服務的安全及完整性。</li>
</ul>
<p>未經你同意，我們不會將你的個人資料用於直接促銷。</p>

<h2>6. 分享個人資料</h2>
<p>我們不會出售或出租個人資料。我們只會在保密責任下，與協助我們營運業務的服務供應商（例如網站寄存、電郵、表格處理及會計服務供應商）、專業顧問分享資料，或在法律、法庭命令或主管當局要求下披露。</p>

<h2>7. 跨境轉移</h2>
<p>部分服務供應商可能在香港以外地方儲存或處理資料。在此情況下，我們會採取合理措施，確保資料獲得與香港法例要求相若的保障。</p>

<h2>8. 資料保留</h2>
<p>我們只會在達致上述目的所需的期間內，或按法律規定（例如香港法例要求業務紀錄須保存七年）保留個人資料，其後會安全地刪除。</p>

<h2>9. 資料保安</h2>
<p>我們採取適當的技術及管理措施，保護個人資料免受未經授權的存取、遺失或濫用，包括加密連線（HTTPS）及存取控制。雖然沒有任何傳輸或儲存方式絕對安全，我們會盡力保護你的資料。</p>

<h2>10. 你的權利</h2>
<p>根據《個人資料（私隱）條例》，你有權要求查閱及更正我們所持有關於你的個人資料。你亦可要求我們刪除你的資料或停止與你聯絡。如欲提出要求，請按以下資料聯絡我們。我們會按法例規定在40日內回覆。你可隨時從裝置刪除應用程式，以刪除其儲存在本機的資料。</p>

<h2>11. 兒童</h2>
<p>我們的網站及應用程式並非以13歲以下兒童為對象，我們亦不會在知情的情況下收集兒童的個人資料。如你相信有兒童向我們提供了個人資料，請與我們聯絡，我們會將其刪除。</p>

<h2>12. 聯絡我們</h2>
<p>如有任何私隱問題或要求，請聯絡：</p>
<p>${contactHtml}</p>

<h2>13. 政策修訂</h2>
<p>我們可能不時更新本政策。最新版本將連同生效日期刊登於本頁。如有重大修訂，我們會在本網站或應用程式內特別提示。</p>
<p class="notice">本政策以英文及中文發佈。如兩個版本有任何歧義，概以英文版本為準。</p>
`;

  return {
    title: t('Privacy Policy', '私隱政策'),
    description: t(
      `How ${cfg.legalName} collects, uses and protects personal data on its website and mobile apps.`,
      `${cfg.legalName} 如何在其網站及流動應用程式中收集、使用及保護個人資料。`
    ),
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${t('Legal', '法律資訊')}</span>
    <h1>${t('Privacy Policy', '私隱政策')}</h1>
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
