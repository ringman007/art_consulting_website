// Shared bilingual content used on more than one page.

export const services = [
  {
    id: 'app-development',
    icon: 'phoneApp',
    name: { en: 'App Development', zh: '應用程式開發' },
    summary: {
      en: 'Native iOS apps designed and engineered in-house, from first prototype to App Store release and ongoing updates.',
      zh: '由內部團隊設計及開發原生 iOS 應用程式，涵蓋原型設計、App Store 上架以至持續更新。',
    },
    items: {
      en: ['iOS app design & development (Swift, SwiftUI)', 'UX / UI design and interactive prototypes', 'App Store submission & release management', 'Backend integration and APIs', 'In-app analytics set-up', 'Maintenance, updates & performance tuning'],
      zh: ['iOS 應用程式設計及開發（Swift、SwiftUI）', 'UX／UI 設計及互動原型', 'App Store 提交及發佈管理', '後端整合及 API', '應用程式內數據分析設定', '維護、更新及效能優化'],
    },
  },
  {
    id: 'strategy-research',
    icon: 'compass',
    name: { en: 'Product Strategy & Research', zh: '產品策略及研究' },
    summary: {
      en: 'Market, competitor and user research that turns an idea into a clear, validated product plan.',
      zh: '透過市場、競爭對手及用戶研究，將構思轉化為清晰並經驗證的產品計劃。',
    },
    items: {
      en: ['Market & opportunity research', 'Competitor analysis', 'User interviews and surveys', 'Consumer behaviour analysis', 'MVP scoping and product roadmaps', 'Industry trend reports'],
      zh: ['市場及商機研究', '競爭對手分析', '用戶訪談及問卷調查', '消費者行為分析', 'MVP 範圍界定及產品路線圖', '行業趨勢報告'],
    },
  },
  {
    id: 'data-analytics',
    icon: 'chart',
    name: { en: 'Data & Analytics', zh: '數據及分析' },
    summary: {
      en: 'Dashboards, KPI frameworks and performance analysis, so decisions rest on evidence rather than guesswork.',
      zh: '建立儀表板、KPI 框架及成效分析，讓決策以數據為本，而非憑空猜測。',
    },
    items: {
      en: ['KPI and metrics frameworks', 'Dashboards and reporting', 'Performance & ROI analysis', 'Cohort and retention analysis', 'Forecasting and predictive models', 'Blockchain / on-chain data dashboards'],
      zh: ['KPI 及指標框架', '儀表板及報告', '成效及投資回報分析', '用戶群組及留存分析', '預測及預測模型', '區塊鏈／鏈上數據儀表板'],
    },
  },
  {
    id: 'digital-marketing',
    icon: 'megaphone',
    name: { en: 'Digital Marketing', zh: '數碼營銷' },
    summary: {
      en: 'Positioning, content and launch campaigns that help new products find their audience and keep it.',
      zh: '品牌定位、內容及推廣活動，助新產品接觸並留住目標用戶。',
    },
    items: {
      en: ['Brand positioning & messaging', 'Content strategy and copywriting', 'Social media marketing', 'App Store optimisation (ASO)', 'Product launch campaigns', 'Creator & KOL outreach'],
      zh: ['品牌定位及訊息策略', '內容策略及文案撰寫', '社交媒體營銷', 'App Store 優化（ASO）', '產品推出活動', '創作者及 KOL 合作'],
    },
  },
];

export const products = [
  {
    id: 'nutrition',
    name: { en: 'Calorie & Nutrition Tracker', zh: '卡路里及營養追蹤' },
    category: { en: 'Health & Fitness', zh: '健康及健身' },
    summary: {
      en: 'A simple, fast way to log meals, track calories and macronutrients, and build healthier habits without the clutter.',
      zh: '簡單快捷地記錄餐飲、追蹤卡路里及宏量營養素，輕鬆建立健康習慣。',
    },
    features: {
      en: ['Quick meal and food logging', 'Daily calorie and macronutrient goals', 'Progress history and trends', 'Clean design with no ads in the core experience'],
      zh: ['快速記錄餐飲及食物', '每日卡路里及宏量營養素目標', '進度紀錄及趨勢', '簡潔設計，核心功能不設廣告'],
    },
    note: {
      en: 'For general wellness purposes only. The app is not a medical device and does not provide medical or dietary advice.',
      zh: '僅供一般健康用途。本應用程式並非醫療器材，亦不提供醫療或飲食建議。',
    },
  },
  {
    id: 'finance',
    name: { en: 'Personal Finance Helper', zh: '個人理財助手' },
    category: { en: 'Finance', zh: '財務' },
    summary: {
      en: 'Budgeting and expense tracking that shows where your money goes and helps you plan ahead with confidence.',
      zh: '預算及開支追蹤工具，讓你清楚了解金錢去向，更有信心地規劃未來。',
    },
    features: {
      en: ['Expense and income tracking', 'Budgets by category', 'Monthly overviews and insights', 'Your data is never sold'],
      zh: ['記錄開支及收入', '按類別設定預算', '每月概覽及分析', '絕不出售你的資料'],
    },
    note: {
      en: 'A personal organisation tool only. It does not provide investment, tax or financial advice and does not hold or transfer money.',
      zh: '僅為個人理財整理工具，不提供投資、稅務或財務建議，亦不持有或轉移任何資金。',
    },
  },
  {
    id: 'utilities',
    name: { en: 'Everyday Utilities', zh: '日常實用工具' },
    category: { en: 'Productivity', zh: '生產力' },
    summary: {
      en: 'A growing collection of small, well-made tools that each solve one everyday problem quickly and reliably.',
      zh: '一系列持續增加的小型實用工具，每款專注解決一個日常問題，快捷可靠。',
    },
    features: {
      en: ['Lightweight and fast', 'Only the permissions each tool needs', 'Native iOS design', 'Regular updates'],
      zh: ['輕巧快速', '只要求必要的權限', '原生 iOS 設計', '定期更新'],
    },
    note: null,
  },
];
