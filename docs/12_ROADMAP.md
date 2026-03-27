---
id: 12_ROADMAP
title: "12 · Roadmap 2026–2029"
sidebar_position: 12
description: "Wellex v6.1 · 27.03.2026"
---

# 12 · ROADMAP 2026–2029
> **Версия:** 6.1 | **Дата:** 27.03.2026 | **Статус:** Public


> Стратегический план развития · Старт 15 марта 2026 · Квартальная детализация
> Формат: Milestone-based · Dependencies · Risk Flags · Success Metrics
>
> ⚠️ Revenue and yield projections are targets — not guarantees. Actual results depend on market conditions.

---

## Стратегическое видение

| Горизонт | Фокус | Целевой результат |
|----------|-------|-------------------|
| **2026** | Запуск, Product-Market Fit, масштабирование | TVL $15M (base) / $50M (target) · 30K–100K пользователей · Multi-EVM + Card On-Ramp |
| **2027** | Multi-chain expansion, B2B, региональная экспансия | TVL $150M · 250K пользователей · DEX + on-ramp партнёрства |
| **2028** | Институциональный DeFi, корпоративный wellness | TVL $500M · 500K пользователей · B2B-выручка $10M+ |
| **2029** | Глобальный протокол, data marketplace | TVL $1B+ · 1M пользователей · IPO-ready |

---

## 2026 · ГОД ЗАПУСКА

### Q1 2026 (15 марта — 30 июня): MVP → Mainnet → Scale

#### Месяц 1: MVP Sprint (15 марта — 14 апреля)

| Неделя | Milestone | Deliverables | Зависимости | Риск |
|--------|-----------|-------------|-------------|------|
| W1 | Фундамент | Brand Kit, домены (wellex.ai), соцсети, первый контракт WellexRouter | — | 🟢 Низкий |
| W2 | Контракты + Дизайн | WellexVault (единый ERC-4626) на testnet, StrategyManager, Figma UI (5 экранов), лендинг live | W1: бренд | 🟡 Средний: задержки дизайна |
| W3 | App + AI | App alpha (React Native), AI Wallet MVP, контракт ProtectionReserve, интеграция 8 DeFi yield streams на testnet, AI Yield Agent (800+ strategies) | W2: контракты | 🟡 Средний: BLE-интеграция |
| W4 | **MVP READY** | E2E-тестирование, Pitch Deck (15 слайдов), whitelist ≥1 000 адресов | W1–W3 | 🔴 Высокий: сжатые сроки |

**Критерии успеха:** MVP функционален на testnet · Pitch Deck утверждён · Whitelist ≥1 000

---

#### Месяц 2: Аудит + Community (15 апреля — 14 мая)

| Неделя | Milestone | Deliverables | Зависимости | Риск |
|--------|-----------|-------------|-------------|------|
| W5 | Аудит запущен | Подача в Trail of Bits / OpenZeppelin, оптимизация gas −30%, AI Wallet Agent MVP | MVP ready | 🟡 Очередь аудиторов |
| W6 | Community launch | Discord + Telegram 1 000+, 5 KOL подписаны, Bug Bounty на Immunefi | Бренд готов | 🟢 Низкий |
| W7 | Pre-Mainnet | Аудит завершён (0 critical findings), beta-тест 100 участников, whitelist 3 000+ | Аудит | 🔴 Задержка аудита |
| W8 | **MAINNET** | Деплой WellexVault на Ethereum + Polygon, мониторинг Forta 24/7 | Аудит пройден | 🔴 Critical path |

**Критерии успеха:** 0 critical findings · Mainnet live · Сообщество ≥2 500

---

#### Месяц 3: Scale + TVL (15 мая — 14 июня)

| Неделя | Milestone | Deliverables | Зависимости | Риск |
|--------|-----------|-------------|-------------|------|
| W9 | TVL старт | WellexVault депозиты открыты, Card on-ramp live, TVL $500K+ | Mainnet live | 🟡 Средний: первичный спрос |
| W10 | TVL Growth | TVL $2M+, 5 KOL-обзоров (охват 500K+), AI Wallet в публичном доступе | W9 | 🟡 Средний |
| W11 | Acceleration | TVL $3,5M+, B2B-пилот (1–2 компании), BLE-интеграция браслета | Производство | 🟡 B2B-цикл |
| W12 | **$5M TVL** | TVL >$5M, 5 000+ подписчиков в соцсетях, сообщество 5 000+, первые браслеты доставлены | W9–W11 | 🟡 Достижение TVL |

**Критерии успеха:** TVL ≥$5M · 5 000+ активных подписчиков · Первые браслеты у пользователей

---

### Q3 2026 (июль — сентябрь): Growth & Multi-Chain

| Milestone | Deliverables | Метрики успеха | Риск |
|-----------|-------------|----------------|------|
| Multi-chain expansion | WellexVault на Arbitrum + Optimism, LayerZero bridge, кросс-чейн депозиты | ≥20% TVL на L2 | 🟡 Безопасность bridge |
| Card on-ramp expand | Расширить регионы on-ramp (TRY, SEPA), Apple Pay | on-ramp volume >$500K/мес | 🟡 Провайдеры |
| AI Wallet Mature | Auto-compound публично, backtesting-дашборд, кросс-чейн ребалансировка | ≥60% пользователей на Auto AI | 🟢 Низкий |
| Браслет v1: массовая поставка | 10 000+ единиц отгружено, QC-процесс, логистика | Дефект-рейт <2% | 🟡 Supply chain |
| Запуск страхования | Лицензированный страховой агент (Кипр), NFT-полисы live | Opt-in rate ≥30% | 🔴 Лицензирование |

**KPI квартала:** TVL $15M (base scenario) · 25 000 пользователей · Выручка run-rate $2M/год

---

### Q4 2026 (октябрь — декабрь): Multi-chain + B2B

| Milestone | Deliverables | Метрики успеха | Риск |
|-----------|-------------|----------------|------|
| Multi-chain v1 | Деплой на Arbitrum, мост LayerZero | ≥20% TVL на Arbitrum | 🟡 Безопасность моста |
| B2B-пилоты | 3–5 корпоративных клиентов, enterprise-дашборд | B2B MRR >$20K | 🟡 Длинный sales-цикл |
| Браслет v2 (расширенный) | Улучшенный ECG, батарея до 14 дней, сертификация IP68 | Предзаказы 5 000+ | 🟡 R&D-сроки |
| Protocol governance | Off-chain Snapshot голосования для параметров протокола (без токена) | 500+ участников | 🟢 Низкий |
| AI Coach v2 | Видео-рекомендации, персонализированные планы питания | NPS >70 | 🟢 Низкий |


---

## 2027 · ГОД ЭКСПАНСИИ

### Q1 2027: DEX Partnerships + Юго-Восточная Азия

| Milestone | Deliverables | Метрики успеха | Риск |
|-----------|-------------|----------------|------|
| DEX партнёрства | Интеграция с Uniswap/1inch frontend, on-ramp via Base (Coinbase) | DEX volume >$5M/мес | 🟡 Переговоры |
| Экспансия ЮВА | Индонезия, Филиппины: локализация, KOL, fiat on-ramp (GoPay, GCash) | 20 000+ пользователей ЮВА | 🟡 Регуляторика |
| Base + BSC deployment | Multi-chain: Base (Coinbase L2) + BSC | ≥15% TVL на Base | 🟢 Низкий |
| Institutional deposits | Доступ для фондов, расширенная отчётность, enhanced KYC | $10M+ институционального TVL | 🟡 Compliance |

**KPI квартала:** TVL $80M · 150 000 пользователей · 1 Tier-1 CEX

---

### Q2 2027: LATAM + Data Marketplace

| Milestone | Deliverables | Метрики успеха | Риск |
|-----------|-------------|----------------|------|
| Запуск LATAM | Бразилия, Мексика: локализация, партнёрства | 15 000+ пользователей LATAM | 🟡 Fiat rails |
| Data Marketplace v1 | Анонимизированные wellness-данные для исследований (opt-in) | Выручка $100K+ | 🔴 Privacy compliance |
| Браслет v3 | Обновлённый дизайн, улучшенные сенсоры, сертификации CE/FCC | 50 000 предзаказов | 🟡 R&D |
| Advanced AI | On-device ML inference, предиктивные health-алерты | Accuracy >85% | 🟡 ML performance |

**KPI квартала:** TVL $120M · 200 000 пользователей

---

### Q3–Q4 2027: Зрелость

| Milestone | Deliverables | Метрики успеха | Риск |
|-----------|-------------|----------------|------|
| Governance mature | Off-chain Snapshot + protocol parameter DAO, treasury >$5M | 2 000+ участников | 🟢 |
| B2B масштаб | 20+ корпоративных клиентов, white-label решение | B2B MRR $200K+ | 🟡 |
| EU regulatory | Полное соответствие MiCA, регистрация VASP | Лицензия получена | 🔴 |
| Premium hardware | Wellex Pro Ring (кольцо) — R&D начат | Прототип готов | 🟡 |


---

## 2028 · ГОД ИНСТИТУЦИОНАЛИЗАЦИИ

### Q1–Q2 2028

| Milestone | Метрики успеха | Риск |
|-----------|----------------|------|
| Institutional DeFi platform | $100M+ институционального TVL | 🔴 Regulatory |
| Wellex Card (дебетовая) | 50 000+ карт выпущено | 🟡 Банковские партнёры |
| AI Health Predictions | Путь к сертификации FDA/CE для медицинских алертов | 🔴 Сертификация |

### Q3–Q4 2028

| Milestone | Метрики успеха | Риск |
|-----------|----------------|------|
| Data marketplace scale | Ежегодная выручка $2M+ | 🟡 |
| Унифицированный cross-chain | 5+ сетей, унифицированная ликвидность | 🟡 |
| B2B Enterprise | 50+ корпоративных клиентов | 🟢 |
| Запуск Wellex Ring | 100 000+ продаж | 🟡 |


---

## 2029 · ГОД ГЛОБАЛЬНОГО ПРОТОКОЛА

### Целевые milestone'ы

| Milestone | Метрики успеха |
|-----------|----------------|
| TVL $1B+ | Топ-20 DeFi-протокол по TVL |
| 1M+ пользователей | Присутствие в 50+ странах мира |
| Готовность к IPO | Аудит Big 4, подготовка S-1 |
| Wellex Health OS | Платформа для сторонних health-приложений |
| Governance autonomy | Off-chain Snapshot + protocol-owned liquidity, самодостаточная экосистема |

**KPI 2029:** TVL $1B · 1M пользователей · Выручка $100M+ · IPO-ready

---

## KPI Dashboard — Сводная таблица

| Метрика | Q2 2026 | Q4 2026 | Q4 2027 | Q4 2028 | Q4 2029 |
|---------|---------|---------|---------|---------|---------|
| TVL | $5M | $50M | $150M | $500M | $1B |
| Пользователи | 5 000 | 100 000 | 250 000 | 500 000 | 1 000 000 |
| Выручка (год) | — | $5,65M | $19,5M | $44,5M | $100M+ |
| DEX/on-ramp партнёры | 3 | 8+ | 15+ | 20+ | 30+ |
| Сети (chains) | 2 | 4 | 5 | 7 | 7+ |
| Браслетов отгружено | 5 000 | 25 000 | 100 000 | 250 000 | 500 000 |
| B2B клиентов | 0 | 3 | 20 | 50 | 100+ |

---

## Карта зависимостей (Critical Path)

```
Brand Kit (W1)
 → Контракты (W2)
 → MVP (W4)
 → Аудит (W5–W7)
 → MAINNET (W8)
 → TVL Growth (W9–W12)
 → Multi-chain expansion (Q3 2026)
 → DEX партнёрства + ЮВА expansion (Q1 2027)

Hardware R&D
 → Прототип
 → Производство
 → Отгрузка (W10–W12)
 → Браслет v2 (Q4 2026)
 → Браслет v3 (Q2 2027)

Insurance License (Кипр)
 → NFT-полисы (Q3 2026)
 → Full coverage (Q4 2026)

ЮВА + LATAM (2027)
 → Институциональный DeFi (2028)
 → IPO-ready (2029)
```


---

## Управление рисками Roadmap

| Риск | Вероятность | Импакт | Митигация | Contingency |
|------|-------------|--------|-----------|-------------|
| Задержка аудита | Средняя | Критический | Подача в 2 компании параллельно | Перенос mainnet +2 недели |
| Медленный рост TVL | Средняя | Высокий | Агрессивный KOL-маркетинг | Снижение targets на 30% |
| Отказ CEX в листинге | Средняя | Средний | 5+ заявок параллельно | Фокус на DEX volume |
| Задержки hardware | Средняя | Средний | Буфер 4 недели в timeline | Soft-launch без браслета |
| Регуляторные изменения | Низкая | Высокий | Multi-jurisdiction стратегия | Смена юрисдикции |

---


*Wellex © 2026 · Confidential*
