export default function (c) {
  const { t, icons, cfg, esc, mailto, phoneHref, address, mapsUrl } = c;
  const hoursZh = '星期一至五 10:00–18:00（香港時間）';
  const topics = [
    ['General enquiry', t('General enquiry', '一般查詢')],
    ['New project', t('New project: apps, research, analytics or marketing', '新項目：應用程式、研究、數據分析或營銷')],
    ['App support', t('App support', '應用程式支援')],
    ['Partnership / media', t('Partnership or media', '合作或傳媒')],
  ];

  const form = cfg.web3formsKey
    ? `<form class="contact-form card" action="https://api.web3forms.com/submit" method="POST"
        data-sending="${t('Sending…', '傳送中…')}"
        data-success="${t('Thank you! Your message has been sent. We will get back to you within two business days.', '多謝你的訊息！我們已收到，並會在兩個工作天內回覆。')}"
        data-error="${esc(t(`Sorry, something went wrong. Please try again or email us at ${cfg.email || ''}.`, `抱歉，傳送失敗。請再試一次，或電郵至 ${cfg.email || ''}。`))}">
      <input type="hidden" name="access_key" value="${esc(cfg.web3formsKey)}">
      <input type="hidden" name="subject" value="New website enquiry: artconsultinglimited.com">
      <input type="hidden" name="from_name" value="${esc(cfg.shortName)} website">
      <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="field-row">
        <label class="field"><span>${t('Name', '姓名')} *</span><input type="text" name="name" autocomplete="name" required maxlength="120"></label>
        <label class="field"><span>${t('Email', '電郵')} *</span><input type="email" name="email" autocomplete="email" required maxlength="200"></label>
      </div>
      <div class="field-row">
        <label class="field"><span>${t('Company', '公司')} <em>${t('(optional)', '（選填）')}</em></span><input type="text" name="company" autocomplete="organization" maxlength="160"></label>
        <label class="field"><span>${t('Topic', '查詢類別')}</span><select name="topic">${topics.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select></label>
      </div>
      <label class="field"><span>${t('Message', '訊息')} *</span><textarea name="message" rows="6" required maxlength="5000"></textarea></label>
      <p class="form-note">${t(
        `By sending this form you agree that we may use your details to reply to you, as described in our <a href="privacy.html">Privacy Policy</a>.`,
        `提交此表格即表示你同意我們按<a href="privacy.html">私隱政策</a>所述，使用你的資料回覆你。`
      )}</p>
      <button class="btn btn-primary" type="submit">${t('Send message', '傳送訊息')} ${icons.arrow}</button>
      <p class="form-status" role="status" aria-live="polite"></p>
    </form>`
    : '';

  return {
    title: t('Contact', '聯絡我們'),
    description: t(
      `Contact ${cfg.legalName}: send us a message or email ${cfg.email || ''}. Office in Prince Edward, Kowloon, Hong Kong.`,
      `聯絡 ${cfg.legalName}：傳送訊息或電郵至 ${cfg.email || ''}。辦事處位於香港九龍太子。`
    ),
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${t('Contact', '聯絡我們')}</span>
    <h1>${t('Get in touch', '與我們聯絡')}</h1>
    <p class="lead">${t(
      'We are happy to hear from clients, partners and app users. Send us a message and we will reply within two business days.',
      '我們歡迎客戶、合作夥伴及應用程式用戶與我們聯絡。請留下訊息，我們會在兩個工作天內回覆。'
    )}</p>
  </div>
</section>

<section class="section-tight">
  <div class="container contact-grid">
    ${form}
    <ul class="contact-list">
      ${cfg.email ? `<li><div class="icon">${icons.mail}</div><div><strong>${t('Email', '電郵')}</strong><a href="${mailto()}">${esc(cfg.email)}</a></div></li>` : ''}
      ${phoneHref ? `<li><div class="icon">${icons.phone}</div><div><strong>${t('Phone', '電話')}</strong><a href="${phoneHref}">${esc(cfg.phone)}</a></div></li>` : ''}
      <li><div class="icon">${icons.pin}</div><div><strong>${t('Office', '辦事處')}</strong><address>${address()}</address><a href="${mapsUrl}" rel="noopener" style="font-weight:500;font-size:.93rem;color:var(--accent-ink);text-decoration:underline">${t('View on map', '在地圖上查看')}</a></div></li>
      <li><div class="icon">${icons.clock}</div><div><strong>${t('Business hours', '辦公時間')}</strong>${t(esc(cfg.hours), hoursZh)}<br><span style="color:var(--muted);font-size:.93rem">${t('Closed on Hong Kong public holidays', '香港公眾假期休息')}</span></div></li>
    </ul>
  </div>
</section>
`,
  };
}
