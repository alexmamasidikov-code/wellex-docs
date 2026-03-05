import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wellexSidebar: [

    // ─── 📋 Индекс ─────────────────────────────────────────────
    '00_INDEX',

    // ─── 📖 Введение ───────────────────────────────────────────
    {
      type: 'category',
      label: '📖 Введение',
      collapsed: false,
      link: { type: 'doc', id: '00_INTRO' },
      items: [
        '00_INTRO',
        '01_EXECUTIVE_SUMMARY',
        '02_PRODUCT_VISION',
      ],
    },

    // ─── 📄 Whitepaper ─────────────────────────────────────────
    {
      type: 'category',
      label: '📄 Whitepaper',
      collapsed: false,
      items: [
        '19_WHITEPAPER_v3',
      ],
    },

    // ─── 💎 Продукт ────────────────────────────────────────────
    {
      type: 'category',
      label: '💎 Продукт',
      collapsed: false,
      items: [
        '03_WELLNESS_SCORE',
        '04_APP_UX',
        '05_DASHBOARD',
        '08_HARDWARE',
        '21_GAMIFICATION',
        '27_EMOTIONAL_MINING',
        '32_DAY_IN_THE_LIFE',
      ],
    },

    // ─── 💰 Доходность ─────────────────────────────────────────
    {
      type: 'category',
      label: '💰 Доходность',
      collapsed: true,
      items: [
        '06_YIELD_PROTOCOL',
        '22_INSURANCE_FUND',
        '30_SMART_CONTRACT_INSURANCE',
      ],
    },

    // ─── 🤝 Партнёрам & B2B ────────────────────────────────────
    {
      type: 'category',
      label: '🤝 Партнёрам & B2B',
      collapsed: true,
      items: [
        '09_PARTNER_PROGRAM',
        '28_MLM_MARKETING_PLAN',
        '23_SALES_PROGRAM',
        '31_B2B_PLAYBOOK',
        '26_COMMUNITY',
        '35_INSURANCE_PARTNERSHIP_LOI',
      ],
    },

    // ─── 🔬 Технологии ─────────────────────────────────────────
    {
      type: 'category',
      label: '🔬 Технологии',
      collapsed: true,
      items: [
        '07_AI_SYSTEM',
        '17_TECH_ARCHITECTURE',
        '25_TECH_REQUIREMENTS',
      ],
    },

    // ─── 📈 Стратегия & Рост ───────────────────────────────────
    {
      type: 'category',
      label: '📈 Стратегия & Рост',
      collapsed: true,
      items: [
        '11_GO_TO_MARKET',
        '12_ROADMAP',
        '20_GROWTH_IDEAS',
        '29_TAGLINE_AND_MESSAGING',
        '33_APP_STORE_STRATEGY',
        '34_K_FACTOR_MATH',
      ],
    },

    // ─── 🛡️ Соответствие & Риски ───────────────────────────────
    {
      type: 'category',
      label: '🛡️ Compliance & Риски',
      collapsed: true,
      items: [
        '15_RISKS',
      ],
    },

    // ─── 🔮 Будущее ────────────────────────────────────────────
    {
      type: 'category',
      label: '🔮 Будущее',
      collapsed: true,
      items: [
        '18_FUTURE_FEATURES',
      ],
    },

  ],
};

export default sidebars;
