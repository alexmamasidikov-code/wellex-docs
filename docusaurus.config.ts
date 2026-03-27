import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// @ts-expect-error — no types for this plugin
import searchLocal from '@easyops-cn/docusaurus-search-local';

const config: Config = {
  title: 'Wellex',
  tagline: 'Web3 Wellness Protocol — Emotional Mining',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://buffer.terymarius.com',
  baseUrl: '/wellex-docs/',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    localeConfigs: {
      ru: { label: '🇷🇺 Русский', htmlLang: 'ru' },
      en: { label: '🇬🇧 English', htmlLang: 'en' },
    },
  },

  plugins: [
    [
      searchLocal,
      {
        hashed: true,
        language: ['ru', 'en'],
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        searchResultContextMaxLength: 50,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
          breadcrumbs: true,
          showLastUpdateTime: false,

        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'robots', content: 'noindex, nofollow'},
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Wellex',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 120,
        height: 32,
      },
      hideOnScroll: false,
      style: 'dark',
      items: [
        // ─── Левая часть: основные ссылки ───────────────────────
        { to: '/00_INDEX',           label: 'Документы',  position: 'left' },
        { to: '/19_WHITEPAPER_v3',   label: 'Вайтпейпер', position: 'left' },
        { to: '/12_ROADMAP',         label: 'Роадмап',    position: 'left' },
        // ─── Правая часть: язык ────────────────────────────────
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            { label: 'Введение', to: '/00_INTRO' },
            { label: 'Вайтпейпер', to: '/19_WHITEPAPER_v3' },
            { label: 'Дорожная карта', to: '/12_ROADMAP' },
          ],
        },
        {
          title: 'Продукт',
          items: [
            { label: 'Браслет Wellex', to: '/08_HARDWARE' },
            { label: 'Протокол доходности', to: '/06_YIELD_PROTOCOL' },
            { label: 'AI-система', to: '/07_AI_SYSTEM' },
          ],
        },
        {
          title: 'Партнёрам',
          items: [
            { label: 'Партнёрская программа', to: '/09_PARTNER_PROGRAM' },
            { label: 'B2B Playbook', to: '/31_B2B_PLAYBOOK' },
            { label: 'Программа продаж', to: '/23_SALES_PROGRAM' },
          ],
        },
      ],
      copyright: `Wellex © ${new Date().getFullYear()} · Web3 Wellness Protocol · v6.0`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
