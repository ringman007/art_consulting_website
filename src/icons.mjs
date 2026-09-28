// Inline SVG icons (stroke icons use currentColor).
const s = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const icons = {
  menu: s('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  phoneApp: s('<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 18.5h3"/><path d="m10 9-2 2 2 2M14 9l2 2-2 2"/>'),
  compass: s('<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>'),
  chart: s('<path d="M4 20V4M4 20h16"/><path d="m7 15 4-4 3 3 5-6"/>'),
  megaphone: s('<path d="M3 10v4a1 1 0 0 0 1 1h2l5 4V5L6 9H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'),
  mail: s('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/>'),
  phone: s('<path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z"/>'),
  pin: s('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  clock: s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  shield: s('<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2 2 4-4"/>'),
  building: s('<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10.5 21v-3h3v3"/>'),
  arrow: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};

// App icons — rounded-square artwork for the product cards.
export const appIcons = {
  nutrition: `<svg class="app-icon" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="gn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5ecb8a"/><stop offset="1" stop-color="#1f8f5c"/></linearGradient></defs><rect width="64" height="64" rx="15" fill="url(#gn)"/><circle cx="32" cy="34" r="15" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="5"/><path d="M32 19a15 15 0 0 1 13.6 21.3" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M32 27c-3 2.6-4.5 5.2-3.2 8a3.6 3.6 0 0 0 6.4 0c1.3-2.8-.2-5.4-3.2-8z" fill="#fff"/></svg>`,
  finance: `<svg class="app-icon" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="gf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f7cf0"/><stop offset="1" stop-color="#1c3fa8"/></linearGradient></defs><rect width="64" height="64" rx="15" fill="url(#gf)"/><rect x="16" y="34" width="7" height="14" rx="2" fill="#fff" fill-opacity=".55"/><rect x="28.5" y="27" width="7" height="21" rx="2" fill="#fff" fill-opacity=".75"/><rect x="41" y="18" width="7" height="30" rx="2" fill="#fff"/><path d="m15 28 12-8 8 4 12-9" fill="none" stroke="#ffd166" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  utilities: `<svg class="app-icon" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="gu" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#33415a"/><stop offset="1" stop-color="#0f1a2a"/></linearGradient></defs><rect width="64" height="64" rx="15" fill="url(#gu)"/><rect x="15" y="15" width="14" height="14" rx="4" fill="#fff"/><rect x="35" y="15" width="14" height="14" rx="4" fill="#fff" fill-opacity=".6"/><rect x="15" y="35" width="14" height="14" rx="4" fill="#fff" fill-opacity=".6"/><rect x="35" y="35" width="14" height="14" rx="7" fill="#c2412b"/></svg>`,
};
