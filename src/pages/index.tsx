import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';
import {
  BarChart3,
  Coins,
  TrendingUp,
  Target,
  Handshake,
  Brain,
  LineChart,
  Scale,
  ShieldCheck,
  ClipboardList,
  Award,
  Lock,
  Globe,
  Calendar,
  Monitor,
  BookOpen,
  Rocket,
  ArrowRight,
  HeartPulse,
  Zap,
  Network,
} from 'lucide-react';

const ICON_SIZE = 22;
const ICON_STYLE = {color: 'rgba(255,255,255,0.55)', strokeWidth: 1.5};
const CAT_ICON_SIZE = 24;
const CAT_ICON_STYLE = {color: 'rgba(255,255,255,0.5)', strokeWidth: 1.5};

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  const QUICK_LINKS = [
    {
      label: translate({id: 'home.quick.summary.label', message: 'Резюме'}),
      href: '/01_EXECUTIVE_SUMMARY',
      desc: translate({id: 'home.quick.summary.desc', message: 'Ключевые тезисы платформы Wellex'}),
      icon: <BarChart3 size={ICON_SIZE} style={ICON_STYLE} />,
    },
    {
      label: translate({id: 'home.quick.whitepaper.label', message: 'Вайтпейпер v5.0'}),
      href: '/19_WHITEPAPER_v3',
      desc: translate({id: 'home.quick.whitepaper.desc', message: 'Полная техническая документация'}),
      icon: <BookOpen size={ICON_SIZE} style={ICON_STYLE} />,
    },
    {
      label: translate({id: 'home.quick.yield.label', message: 'Протокол доходности'}),
      href: '/06_YIELD_PROTOCOL',
      desc: translate({id: 'home.quick.yield.desc', message: 'Target Yield 0–20%/мес по WVI-шкале'}),
      icon: <TrendingUp size={ICON_SIZE} style={ICON_STYLE} />,
    },
    {
      label: translate({id: 'home.quick.partner.label', message: 'Партнёрская программа'}),
      href: '/09_PARTNER_PROGRAM',
      desc: translate({id: 'home.quick.partner.desc', message: '10 рангов, 8 потоков дохода'}),
      icon: <Handshake size={ICON_SIZE} style={ICON_STYLE} />,
    },
    {
      label: translate({id: 'home.quick.platform.label', message: 'Платформа v5.0'}),
      href: '/05_DASHBOARD',
      desc: translate({id: 'home.quick.platform.desc', message: 'Dashboard, Admin Panel, API-контракты'}),
      icon: <Monitor size={ICON_SIZE} style={ICON_STYLE} />,
    },
    {
      label: translate({id: 'home.quick.roadmap.label', message: 'Дорожная карта 2026–2029'}),
      href: '/12_ROADMAP',
      desc: translate({id: 'home.quick.roadmap.desc', message: 'Стратегический план развития'}),
      icon: <Rocket size={ICON_SIZE} style={ICON_STYLE} />,
    },
  ];

  const CATEGORIES = [
    {icon: <BookOpen    size={CAT_ICON_SIZE} style={CAT_ICON_STYLE} />, label: translate({id:'home.cat.intro',     message:'Введение'}),        count: 3, href: '/01_EXECUTIVE_SUMMARY'},
    {icon: <Target      size={CAT_ICON_SIZE} style={CAT_ICON_STYLE} />, label: translate({id:'home.cat.product',   message:'Продукт'}),          count: 7, href: '/03_WELLNESS_SCORE'},
    {icon: <Coins       size={CAT_ICON_SIZE} style={CAT_ICON_STYLE} />, label: translate({id:'home.cat.yield',     message:'Доходность'}),       count: 3, href: '/06_YIELD_PROTOCOL'},
    {icon: <Handshake   size={CAT_ICON_SIZE} style={CAT_ICON_STYLE} />, label: translate({id:'home.cat.partners',  message:'Партнёры & B2B'}),   count: 6, href: '/09_PARTNER_PROGRAM'},
    {icon: <Brain       size={CAT_ICON_SIZE} style={CAT_ICON_STYLE} />, label: translate({id:'home.cat.tech',      message:'Технологии'}),       count: 3, href: '/07_AI_SYSTEM'},
    {icon: <LineChart   size={CAT_ICON_SIZE} style={CAT_ICON_STYLE} />, label: translate({id:'home.cat.strategy',  message:'Стратегия & Рост'}), count: 6, href: '/11_GO_TO_MARKET'},
    {icon: <ShieldCheck size={CAT_ICON_SIZE} style={CAT_ICON_STYLE} />, label: translate({id:'home.cat.compliance',message:'Соответствие'}),     count: 1, href: '/15_RISKS'},
    {icon: <Scale       size={CAT_ICON_SIZE} style={CAT_ICON_STYLE} />, label: translate({id:'home.cat.future',    message:'Будущее'}),          count: 1, href: '/18_FUTURE_FEATURES'},
  ];

  return (
    <Layout
      title={siteConfig.title}
      description={translate({id:'home.meta.desc', message:'Публичная документация Wellex v5.0 — Web3 Wellness Protocol'})}
    >
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            <Translate id="home.hero.badge">Документация · v5.0 · Запуск март 2026</Translate>
          </div>

          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleAccent}>WELLEX</span>
          </h1>

          <p className={styles.heroSubtitle}>
            <Translate id="home.hero.subtitle">
              Web3 Wellness Protocol — смарт-браслет, DeFi yield, партнёрская сеть
            </Translate>
            {' · '}<em>Emotional Mining™</em>
          </p>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>35</span>
              <span className={styles.statLabel}>
                <Translate id="home.stats.documents">документов</Translate>
              </span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>8</span>
              <span className={styles.statLabel}>
                <Translate id="home.stats.categories">разделов</Translate>
              </span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>v5.0</span>
              <span className={styles.statLabel}>
                <Translate id="home.stats.version">canon</Translate>
              </span>
            </div>
          </div>

          <div className={styles.heroButtons}>
            <Link className={styles.btnPrimary} to="/00_INDEX">
              <Translate id="home.btn.contents">📋 Содержание</Translate>
              <ArrowRight size={15} />
            </Link>
            <Link className={styles.btnSecondary} to="/01_EXECUTIVE_SUMMARY">
              <Translate id="home.btn.summary">Резюме</Translate>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── Metrics Strip ── */}
      <div className={styles.metricsStrip}>
        <div className={styles.metricItem}>
          <span className={styles.metricNum}>0–20%</span>
          <span className={styles.metricLabel}>
            <Translate id="home.metric.yield">доход / мес</Translate>
          </span>
        </div>
        <div className={styles.metricDivider} />
        <div className={styles.metricItem}>
          <span className={styles.metricNum}>10</span>
          <span className={styles.metricLabel}>
            <Translate id="home.metric.ranks">рангов партнёров</Translate>
          </span>
        </div>
        <div className={styles.metricDivider} />
        <div className={styles.metricItem}>
          <span className={styles.metricNum}>8</span>
          <span className={styles.metricLabel}>
            <Translate id="home.metric.streams">потоков дохода</Translate>
          </span>
        </div>
        <div className={styles.metricDivider} />
        <div className={styles.metricItem}>
          <span className={styles.metricNum}>DeFi + AI</span>
          <span className={styles.metricLabel}>+ Hardware</span>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.divider} />

        {/* ── Feature Highlights ── */}
        <section className={styles.featureSection}>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><HeartPulse size={38} style={{color:'#4ade80', strokeWidth:1.6}} /></div>
              <div className={styles.featureTitle}>Emotional Mining™</div>
              <div className={styles.featureDesc}>
                <Translate id="home.feature.mining">
                  Торговая марка Wellex. Доход за заботу о своём здоровье — первый в мире протокол wellness-to-earn
                </Translate>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Zap size={38} style={{color:'#facc15', strokeWidth:1.6}} /></div>
              <div className={styles.featureTitle}>DeFi Yield Protocol</div>
              <div className={styles.featureDesc}>
                <Translate id="home.feature.defi">
                  0–20% / мес на основе WVI-индекса. AI Yield Agent управляет 800+ стратегиями автоматически
                </Translate>
              </div>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}><Network size={38} style={{color:'#60a5fa', strokeWidth:1.6}} /></div>
              <div className={styles.featureTitle}>
                <Translate id="home.feature.network.title">Партнёрская сеть</Translate>
              </div>
              <div className={styles.featureDesc}>
                <Translate id="home.feature.network">
                  10 рангов, 8 потоков дохода, глобальная партнёрская сеть с автоматическими выплатами on-chain
                </Translate>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <Translate id="home.sections.keyDocsLabel">Ключевые разделы</Translate>
          </div>
          <h2 className={styles.sectionTitle}>
            <Translate id="home.sections.keyDocs">Документация</Translate>
          </h2>
          <div className={styles.quickGrid}>
            {QUICK_LINKS.map((item) => (
              <Link key={item.href} to={item.href} className={styles.quickCard}>
                <span className={styles.quickIconWrap}>{item.icon}</span>
                <div>
                  <div className={styles.quickLabel}>{item.label}</div>
                  <div className={styles.quickDesc}>{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className={styles.section}>
          <div className={styles.sectionLabel}>
            <Translate id="home.sections.docSectionsLabel">Разделы</Translate>
          </div>
          <h2 className={styles.sectionTitle}>
            <Translate id="home.sections.docSections">Все материалы</Translate>
          </h2>
          <div className={styles.catGrid}>
            {CATEGORIES.map((cat) => (
              <Link key={cat.href} to={cat.href} className={styles.catCard}>
                <span className={styles.catIconWrap}>{cat.icon}</span>
                <span className={styles.catLabel}>{cat.label}</span>
                <span className={styles.catCount}>{cat.count} doc</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className={styles.ctaBanner}>
          <div className={styles.ctaBannerInner}>
            <div className={styles.ctaTitle}>
              <Translate id="home.cta.title">Готов присоединиться?</Translate>
            </div>
            <div className={styles.ctaSubtitle}>
              <Translate id="home.cta.subtitle">
                Изучи полную документацию Wellex v5.0 — от вайтпейпера до B2B Playbook
              </Translate>
            </div>
            <div className={styles.ctaButtons}>
              <Link className={styles.ctaBtnPrimary} to="/19_WHITEPAPER_v3">
                <BookOpen size={16} /> <Translate id="home.cta.btn.whitepaper">Вайтпейпер</Translate>
              </Link>
              <Link className={styles.ctaBtnSecondary} to="/01_EXECUTIVE_SUMMARY">
                <BarChart3 size={16} /> <Translate id="home.cta.btn.summary">Резюме для руководства</Translate>
              </Link>
              <Link className={styles.ctaBtnSecondary} to="/09_PARTNER_PROGRAM">
                <Handshake size={16} /> <Translate id="home.cta.btn.partner">Партнёрская программа</Translate>
              </Link>
            </div>
          </div>
        </section>

        {/* Badge strip */}
        <div className={styles.badgeStrip}>
          <span className={styles.badge}><ClipboardList size={13} style={{color:'rgba(255,255,255,0.4)',strokeWidth:1.5}} /> SSOT v5.0</span>
          <span className={styles.badge}><Award size={13} style={{color:'rgba(255,255,255,0.4)',strokeWidth:1.5}} /> Web3 Wellness Protocol</span>
          <span className={styles.badge}><Lock size={13} style={{color:'rgba(255,255,255,0.4)',strokeWidth:1.5}} /> <Translate id="home.badge.public">Публичный корпус</Translate></span>
          <span className={styles.badge}><Globe size={13} style={{color:'rgba(255,255,255,0.4)',strokeWidth:1.5}} /> RU / EN</span>
          <span className={styles.badge}><Calendar size={13} style={{color:'rgba(255,255,255,0.4)',strokeWidth:1.5}} /> 🚀 <Translate id="home.badge.launch">Запуск март 2026</Translate></span>
        </div>
      </main>
    </Layout>
  );
}
