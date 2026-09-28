export default function (c) {
  const { t, icons, cfg, esc, mailto, phoneHref, address, mapsUrl } = c;
  const hoursZh = '星期一至五 10:00–18:00（香港時間）';
  const topics = [
    [t('General enquiries', '一般查詢'), t('Questions about the company or our work', '有關公司或我們工作的問題'), 'General enquiry'],
    [t('Start a project', '開展項目'), t('App development, research, analytics or marketing', '應用程式開發、研究、數據分析或營銷'), 'New project enquiry'],
    [t('App support', '應用程式支援'), t('Help with one of our apps', '應用程式使用協助'), 'App support'],
    [t('Partnerships & media', '合作及傳媒'), t('Collaboration, press and speaking requests', '合作、傳媒及演講邀請'), 'Partnership / media enquiry'],
  ];
  return {
    title: t('Contact', '聯絡我們'),
    description: t(
      `Contact ${cfg.legalName}: office in Prince Edward, Kowloon, Hong Kong. Phone ${cfg.phone}.`,
      `聯絡 ${cfg.legalName}：辦事處位於香港九龍太子。電話 ${cfg.phone}。`
    ),
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${t('Contact', '聯絡我們')}</span>
    <h1>${t('Get in touch', '與我們聯絡')}</h1>
    <p class="lead">${t(
      'We are happy to hear from clients, partners and app users. We reply to every message within two business days.',
      '我們歡迎客戶、合作夥伴及應用程式用戶與我們聯絡，並會在兩個工作天內回覆每一則訊息。'
    )}</p>
  </div>
</section>

<section class="section-tight">
  <div class="container split">
    <ul class="contact-list">
      ${cfg.email ? `<li><div class="icon">${icons.mail}</div><div><strong>${t('Email', '電郵')}</strong><a href="${mailto()}">${esc(cfg.email)}</a></div></li>` : ''}
      <li><div class="icon">${icons.phone}</div><div><strong>${t('Phone', '電話')}</strong><a href="${phoneHref}">${esc(cfg.phone)}</a></div></li>
      <li><div class="icon">${icons.pin}</div><div><strong>${t('Office', '辦事處')}</strong><address>${address()}</address><a href="${mapsUrl}" rel="noopener" style="font-weight:500;font-size:.93rem;color:var(--accent-ink);text-decoration:underline">${t('View on map', '在地圖上查看')}</a></div></li>
      <li><div class="icon">${icons.clock}</div><div><strong>${t('Business hours', '辦公時間')}</strong>${t(esc(cfg.hours), hoursZh)}<br><span style="color:var(--muted);font-size:.93rem">${t('Closed on Hong Kong public holidays', '香港公眾假期休息')}</span></div></li>
    </ul>
    <div>
      <h2 style="font-size:1.5rem">${t('How can we help?', '我們可以如何協助你？')}</h2>
      ${
        cfg.email
          ? `<p style="color:var(--ink-2)">${t('Choose a topic to open a pre-addressed email.', '選擇查詢類別，即可開啟已預填收件人的電郵。')}</p>
      <div class="mail-options">
        ${topics.map(([h, d, subj]) => `<a class="mail-option" href="${mailto(subj)}"><div><b>${h}</b><span>${d}</span></div>${icons.arrow}</a>`).join('\n        ')}
      </div>`
          : `<p style="color:var(--ink-2)">${t('Call us during business hours and we will be glad to help with any of the following:', '歡迎於辦公時間致電，我們樂意協助以下各類查詢：')}</p>
      <div class="mail-options">
        ${topics.map(([h, d]) => `<a class="mail-option" href="${phoneHref}"><div><b>${h}</b><span>${d}</span></div>${icons.arrow}</a>`).join('\n        ')}
      </div>`
      }
    </div>
  </div>
</section>
`,
  };
}
