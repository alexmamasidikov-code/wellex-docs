---
id: 25_TECH_REQUIREMENTS
title: "25 · Технические требования"
sidebar_position: 25
description: "Wellex v5.0 · 05.03.2026"
---

# 25 · TECHNICAL REQUIREMENTS

**Версия:** 5.0
**Дата:** 05.03.2026
**Статус:** Canonical
**Ключевые обновления v5.0:**
- AI Yield Engine: 800+ стратегий, 8 потоков, 1M+ параметрических комбинаций
- WellexVault: единый ERC-4626, Multi-EVM 7 сетей + Tron + Solana
- Ранги v5.0: Explorer → Builder → Achiever → Manager → Director → Leader → Ambassador → Master → Champion → Legend
- Iron Rules: no provider names, один тариф $19/мес, no tokens
- Card On-Ramp: провайдеры скрыты от пользователя, auto-routing за сценой

> ⚠️ Technical specs describe infrastructure for yield distribution. Target Yield is not a guarantee — actual yield depends on DeFi market conditions.

---

## Содержание

1. [Регистрация и аутентификация](#1-регистрация-и-аутентификация)
2. [Авторизация и управление сессиями](#2-авторизация-и-управление-сессиями)
3. [Кошелёк и платежи](#3-кошелёк-и-платежи)
4. [AI Yield Engine & WellexVault](#4-ai-yield-engine--wellexvault)
5. [Стейкинг (только WEB)](#5-стейкинг-только-web)
6. [Сеть MLM (только WEB)](#6-сеть-mlm-только-web)
7. [Браслет и Health Data Pipeline](#7-браслет-и-health-data-pipeline)
8. [Подписка](#8-подписка)
9. [KYC/AML](#9-kycaml)
10. [Дашборд: APP vs WEB](#10-дашборд-app-vs-web)
11. [Безопасность и конфиденциальность](#11-безопасность-и-конфиденциальность)
12. [Community (только APP)](#12-community-только-app)
13. [Уведомления](#13-уведомления)
14. [Локализация](#14-локализация--multi-language-support)
15. [API Architecture](#15-api-architecture)
16. [Webhooks & Developer API](#16-webhooks--developer-api)

---

## 1. Регистрация и аутентификация

### 1.1 Двойная модель входа

Платформа поддерживает два независимых пути регистрации: **Email-first** (основной для APP) и **Web3-first** (для крипто-пользователей).

#### Путь 1: Email-first (основной для APP)

| # | Требование |
|---|-----------|
| 1.1.1 | Регистрация через Email + пароль |
| 1.1.2 | Social login: Apple ID (Sign in with Apple), Google (OAuth 2.0) |
| 1.1.3 | При регистрации **автоматически** создаётся Web3-кошелёк (ERC-4337 Account Abstraction) |
| 1.1.4 | Blockchain полностью скрыт от пользователя |
| 1.1.5 | Web3-кошелёк используется для транзакций на WEB-платформе |
| 1.1.6 | Gasless-транзакции через paymaster (Polygon) |

#### Путь 2: Web3 Wallet-first (для крипто-пользователей)

| # | Требование |
|---|-----------|
| 1.2.1 | Кнопка «Подключить кошелёк» на WEB-платформе |
| 1.2.2 | Интеграция WalletConnect v2: MetaMask, Trust Wallet, Coinbase Wallet и др. |
| 1.2.3 | Верификация через подпись сообщения **EIP-4361** (Sign-In with Ethereum) |
| 1.2.4 | После подключения кошелька — **обязательный ввод email** для создания аккаунта |
| 1.2.5 | Email используется для восстановления доступа, уведомлений и привязки к APP |
| 1.2.6 | Если email уже зарегистрирован — предложение привязать кошелёк к существующему аккаунту |

#### Единый аккаунт

| # | Требование |
|---|-----------|
| 1.3.1 | Оба пути регистрации ведут к **единому аккаунту** в системе |
| 1.3.2 | Один аккаунт = один email + один или несколько Web3-кошельков |
| 1.3.3 | Пользователь может использовать APP, WEB или обе платформы одновременно |
| 1.3.4 | Максимум 3 внешних Web3-кошелька на аккаунт |

### 1.2 Обязательные поля при регистрации

| # | Поле | Email-first | Web3-first |
|---|------|:-----------:|:----------:|
| 1 | Email | ✅ | ✅ (после подключения wallet) |
| 2 | Пароль | ✅ | ❌ (вход через wallet signature) |
| 3 | Имя | ✅ | ✅ |
| 4 | Фамилия | ✅ | ✅ |
| 5 | Дата рождения | ✅ | ✅ |
| 6 | Страна/регион | ✅ | ✅ |
| 7 | Wallet address | ❌ (создаётся автоматически) | ✅ (из подключённого кошелька) |
| 8 | Реферальный код | Опционально | Опционально |
| 9 | Terms of Service | ✅ | ✅ |
| 10 | GDPR consent | ✅ | ✅ |

### 1.3 Подтверждение Email

OTP: 6 цифр · Действителен 15 минут · Максимум 3 попытки

### 1.4 Двухфакторная аутентификация (2FA)

Поддерживаемые методы: TOTP, SMS, резервные коды

### 1.5 Social Login

| # | Требование |
|---|-----------|
| 1.5.1 | Провайдеры: Google (OAuth 2.0), Apple ID (Sign in with Apple) |
| 1.5.2 | **Доступен только в APP** (не в WEB) |
| 1.5.3 | При первом входе — автоматическое создание аккаунта + Web3-кошелька |
| 1.5.4 | Дополнительный запрос: дата рождения и страна |

### 1.6 Rate Limiting

Стандартные ограничения на количество запросов для защиты от брутфорса

### Критерии приёмки — Регистрация

- [ ] AC-1.1: Email-регистрация создаёт аккаунт + Web3-кошелёк автоматически
- [ ] AC-1.2: Web3 Wallet подключается через WalletConnect; EIP-4361 подпись верифицирует владение
- [ ] AC-1.3: После Web3-подключения обязателен ввод email
- [ ] AC-1.4: Единый аккаунт работает и в APP, и в WEB
- [ ] AC-1.5: Social login через Apple/Google в APP создаёт полный аккаунт

---

## 2. Авторизация и управление сессиями

### 2.1 Способы входа

| Способ | Платформа | Процесс |
|--------|-----------|---------|
| **Email + пароль** | APP + WEB | Стандартная форма + 2FA |
| **Social login** | APP | Apple ID / Google → автовход |
| **Web3 wallet** | WEB | Подключение кошелька → EIP-4361 подпись → автовход |

### 2.2 Управление сессиями

- JWT: Access Token — 15 минут, Refresh Token — 30 дней
- Ротация токенов при обновлении
- Автоматическое обнаружение компрометации сессии

### 2.3 Управление устройствами

Список авторизованных устройств, отзыв сессий удалённо

### 2.4 Биометрический вход (APP)

Face ID / Touch ID / Fingerprint

---

## 3. Кошелёк и платежи

### 3.1 Двойная модель кошелька

| Тип | Создание | Управление |
|-----|----------|-----------|
| **Auto-created (MPC)** | При Email-регистрации | Скрыт от пользователя; gasless-транзакции |
| **External (connected)** | При Web3-входе | Пользователь управляет самостоятельно |

| # | Требование |
|---|-----------|
| 3.1.1 | Auto-created: MPC wallet (Fireblocks/Dfns), схема 2-of-3 key shares |
| 3.1.2 | External: WalletConnect v2, верификация EIP-4361 |
| 3.1.3 | Максимум 3 external wallet на аккаунт |
| 3.1.4 | Все операции gasless для auto-created (ERC-2771 + Relayer) |
| 3.1.5 | External wallet: gas оплачивает пользователь (либо Wellex субсидирует) |

### 3.2 Card On-Ramp (Multi-provider, скрытый от пользователя)

> ⛔ **Iron Rule 5:** в UI и любых публичных материалах **запрещено упоминать** названия on-ramp провайдеров. Пользователь видит только: «банковская карта», «локальные методы», «on-ramp». Провайдеры — внутренняя реализация.

| # | Требование |
|---|-----------|
| 3.2.1 | Интеграция нескольких on-ramp провайдеров через агрегатор (Primary, Secondary, Tertiary) — внутренняя конфигурация, не отображается пользователю |
| 3.2.2 | Поддерживаемые методы: банковские карты (Visa/MC), Apple Pay, Google Pay, SEPA, PIX, локальные методы по региону |
| 3.2.3 | Auto-routing: агрегатор выбирает провайдера по best-rate в регионе автоматически |
| 3.2.4 | KYC тиры: Tier 1 ($500/мес, минимальный KYC), Tier 2 ($5K/мес, полный KYC), Tier 3 ($5K+, EDD) |
| 3.2.5 | USDC зачисляется на Safe{Wallet} пользователя автоматически |
| 3.2.6 | Опциональный auto-deposit в WellexVault после on-ramp |
| 3.2.7 | Fallback между провайдерами — автоматический, без участия пользователя |
| 3.2.8 | В UI: только «Пополнить картой» / «Локальные методы» — без брендинга провайдера |

### 3.3 Multi-EVM Support

| # | Требование |
|---|-----------|
| 3.3.1 | Поддерживаемые сети: ETH, Polygon, BSC, Arbitrum, Optimism, Base, Avalanche |
| 3.3.2 | Кросс-чейн bridge: LayerZero (primary), Across (secondary) |
| 3.3.3 | DEX swap: 1inch Fusion API (primary), 0x Swap API (fallback), ParaSwap (tertiary) |
| 3.3.4 | Единый агрегированный баланс по всем сетям в UI |

### 3.4–3.7

Recovery Flow, история транзакций — согласно стандартной спецификации

---

## 4. AI Yield Engine & WellexVault

> **SSOT:** [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) · [07_AI_SYSTEM.md](07_AI_SYSTEM.md)
> ⚠️ Target Yield (0–20%/мес) — не гарантия. Фактическая доходность зависит от условий DeFi-рынка.

### 4.1 WellexVault — единый vault (ERC-4626)

| # | Требование |
|---|-----------|
| 4.1.1 | Единый vault `WellexVault` (ERC-4626 + UUPS Proxy) на каждой EVM-сети |
| 4.1.2 | Никаких Risk Tranches (Conservative/Balanced/Aggressive) — один vault для всех |
| 4.1.3 | Lock-up по сумме: $0–999 → 0д, $1K–9999 → 30д, $10K+ → 90д |
| 4.1.4 | 100% страховое покрытие (единый уровень, без тиров) |
| 4.1.5 | Поддерживаемые активы: USDC / USDT |
| 4.1.6 | Multi-EVM: ETH, Polygon, BSC, Arbitrum, Optimism, Base, Avalanche |
| 4.1.7 | Минимальный депозит: $100 |
| 4.1.8 | Auto-compound ($129 единовременная активация) |

### 4.2 AI Yield Engine — 800+ стратегий

| # | Требование |
|---|-----------|
| 4.2.1 | AI Yield Engine обрабатывает **800+ атомарных стратегий** из 8 категорий DeFi |
| 4.2.2 | ML-оптимизация на 1M+ параметрических комбинациях (gradient boosting + backtesting 36 мес) |
| 4.2.3 | Пересчёт оптимального портфеля каждые **15 минут** |
| 4.2.4 | Decision latency: **< 500ms** |
| 4.2.5 | Источники данных: 50+ on-chain протоколов + 12 off-chain сигналов |
| 4.2.6 | Встроен в каждый ERC-4337 Smart Wallet пользователя |
| 4.2.7 | Аварийный вывод (emergency exit): **< 60 секунд** |

### 4.3 8 категорий DeFi-источников

| # | Категория | Протоколы (примеры) | Аллокация |
|---|-----------|---------------------|-----------|
| 1 | DeFi Lending | Aave v3, Compound III, Morpho Blue | 30% |
| 2 | RWA / Real World Assets | Ondo USDY, Maple Finance, Superstate | 25% |
| 3 | Prediction Markets + Structured | Polymarket LP, Ribbon, Stryke | 25% |
| 4 | Arbitrage | Funding rate arb, CEX/DEX spread, cross-chain | 20% |
| 5 | AMM fees | Uniswap v3, Curve | dynamic |
| 6 | Liquidity incentives | CRV/CVX incentives, LM programs | dynamic |
| 7 | Rate / basis arbitrage | Funding/basis, cross-protocol spreads | dynamic |
| 8 | Structured strategies | Delta-neutral, protected LP, covered calls | dynamic |

> Категории 1–4 — основная аллокация (100%). Категории 5–8 — динамические надстройки в рамках тиров.

### 4.4 WVI-модификатор аллокации

| WVI | Активных стратегий | Аллокация | Target Yield/мес |
|:---:|:-----------------:|-----------|:----------------:|
| 0–39 | 142 | 80% DeFi+RWA · 20% Arb | 0% |
| 40–69 | 340 | 60% DeFi+RWA · 30% Arb · 10% Prediction | 2–5% |
| 70–89 | 581 | 40% DeFi+RWA · 30% Arb · 30% Prediction | 8–12% |
| 90–100 | 307 | 30% DeFi+RWA · 20% Arb · 50% Prediction | 16–20% |

### 4.5 Smart Contract Architecture

| Контракт | Стандарт | Назначение | Деплой |
|----------|----------|-----------|--------|
| `WellexVault` | ERC-4626 + UUPS Proxy | Единый vault | Каждая EVM-сеть |
| `StrategyManager` | Ownable2Step | Управление аллокациями, timelock 6ч | Каждая EVM-сеть |
| `YieldDistributor` | Custom | Еженедельное распределение по WVI | Каждая EVM-сеть |
| `WellnessOracle` | Chainlink-style | WVI on-chain (месячный) | Каждая EVM-сеть |
| `InsuranceFund` | Custom | Страховой пул | Ethereum (primary) |
| `WithdrawalQueue` | Custom | Очередь при низкой ликвидности | Каждая EVM-сеть |
| `BridgeRouter` | Custom | Cross-chain маршрутизация | Каждая EVM-сеть |

### 4.6 Rate Limits (Bank Run Protection)

| Период | Max вывод (% TVL) |
|--------|:-----------------:|
| 1 час | 5% |
| 24 часа | 15% |
| 7 дней | 40% |

### 4.7 Insurance Fund

| Параметр | Значение |
|----------|---------|
| Источники | 10% от yield выплат + early withdrawal penalties + 5% protocol revenue + seed $500K |
| Целевой размер | 8–12% от TVL |
| Размещение | 60% Aave USDC, 30% Ondo USDY, 10% multisig |
| Покрывает | Smart contract exploit (100%), stablecoin depeg (80%), oracle manipulation (100%) |

### Критерии приёмки — AI Yield Engine

- [ ] AC-4.1: WellexVault (ERC-4626) задеплоен на всех 7 EVM-сетях
- [ ] AC-4.2: AI Engine пересчитывает аллокацию каждые 15 мин, latency < 500ms
- [ ] AC-4.3: WVI пользователя корректно определяет тир стратегий
- [ ] AC-4.4: Emergency exit исполняется за < 60 сек
- [ ] AC-4.5: Rate limits на вывод активны (5%/час, 15%/день, 40%/неделю)
- [ ] AC-4.6: Insurance Fund получает 10% от yield-выплат автоматически
- [ ] AC-4.7: Все контракты прошли внешний аудит (Trail of Bits + OpenZeppelin)

---

## 5. Стейкинг (только WEB)

> **Критическое ограничение:** стейкинг полностью исключён из APP. Доступен исключительно через WEB-платформу.

### 5.1 APP: отображение для пользователя

| # | Требование |
|---|-----------|
| 5.1.1 | APP отображает **только Monthly Yield в процентах** (для пользователей со стейкингом) |
| 5.1.2 | APP отображает **«—»** (для пользователей без стейкинга) |
| 5.1.3 | При нажатии на «—» → popup «Узнать больше» → deep link на WEB |
| 5.1.4 | **В APP отсутствуют:** суммы в $, баланс, deposit/withdraw, калькулятор дохода |

### 5.2 WEB: полный функционал стейкинга

WellexVault (единый ERC-4626), Lock-up по сумме ($0–999 → 0д, $1K–9999 → 30д, $10K+ → 90д), Auto-compound ($129) — подробнее: [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) и секция 4 настоящего документа.

### 5.3 Критерии приёмки — Стейкинг

- [ ] AC-5.1: APP показывает только Monthly Yield % (без $ сумм)
- [ ] AC-5.2: Кнопка «Deposit» отсутствует в APP — только в WEB
- [ ] AC-5.3: Lock-up корректно считается по каждому депозиту отдельно
- [ ] AC-5.4: Auto-compound активируется за $129, реинвест происходит автоматически

---

## 6. Сеть MLM (только WEB)

> **Критическое ограничение:** MLM-структура полностью исключена из APP.
> **SSOT:** [09_PARTNER_PROGRAM.md](09_PARTNER_PROGRAM.md) · [28_MLM_MARKETING_PLAN.md](28_MLM_MARKETING_PLAN.md)

### 6.1 Ранги v5.0 (10 рангов, каноническая цепочка)

| # | Ранг | Мин. рефералов | Мин. PV | Уровней глубины |
|---|------|:--------------:|:-------:|:---------------:|
| 1 | Explorer 🧭 | 1 | $100 | 1 |
| 2 | Builder 🔧 | 3 | $500 | 2 |
| 3 | Achiever 🏅 | 10 | $3,000 | 3 |
| 4 | Manager 📊 | 25 | $15,000 | 4 |
| 5 | Director 💎 | 50 | $50,000 | 5 |
| 6 | Leader 🛡️ | 100 | $200,000 | 6 |
| 7 | Ambassador 🌐 | 200 | $500,000 | 7 |
| 8 | Master 👁️ | 350 | $1,000,000 | 8 |
| 9 | Champion 👑 | 500 | $3,000,000 | 9 |
| 10 | Legend 🔱 | 1,000 | $10,000,000 | 10 |

### 6.2 Требования к MLM-модулю

| # | Требование |
|---|-----------|
| 6.2.1 | APP **не отображает** MLM-дерево, партнёрские бонусы и реферальную ссылку |
| 6.2.2 | Все партнёрские функции — **только WEB** |
| 6.2.3 | WVI из APP влияет на WVI Performance Bonus в WEB (единственная точка связки) |
| 6.2.4 | 8 потоков дохода: Прямые рефералы, Командные, Matching, Ранговый, WVI Performance, Leadership Pool, Fast Start Pool, Infinity Bonus (Champion+) |
| 6.2.5 | Глубина: каждый ранг открывает следующий уровень (Explorer=1, Legend=10) |
| 6.2.6 | Все выплаты on-chain в USDC, задержка < 5 минут |
| 6.2.7 | Реферальный код формируется автоматически при регистрации |

### 6.3 Критерии приёмки — MLM

- [ ] AC-6.1: MLM-дерево недоступно в APP (ни один элемент)
- [ ] AC-6.2: Все 10 рангов корректно рассчитываются по PV и числу рефералов
- [ ] AC-6.3: 8 потоков дохода начисляются по правильным формулам
- [ ] AC-6.4: Выплаты on-chain < 5 минут после начисления
- [ ] AC-6.5: Реферальная ссылка `wellex.ai/join/{nickname}` работает корректно

Остальная MLM-механика — [09_PARTNER_PROGRAM.md](09_PARTNER_PROGRAM.md)

---

## 7. Браслет и Health Data Pipeline

> **SSOT:** [08_HARDWARE.md](08_HARDWARE.md) · [03_WELLNESS_SCORE.md](03_WELLNESS_SCORE.md)

| # | Требование |
|---|-----------|
| 7.1 | Wellex Band v1: PPG (HR/HRV/SpO2), ECG, акселерометр, гироскоп, термометр, EDA |
| 7.2 | Подключение через BLE 5.0+; sync каждые 15 минут |
| 7.3 | Offline buffer: 48 часов без телефона |
| 7.4 | OTA firmware updates |
| 7.5 | Data pipeline: Sensor → BLE → APP → Wellex Oracle → On-chain WVI |
| 7.6 | Anti-manipulation: ML anomaly detection, HRV fingerprint, circadian cross-validation |
| 7.7 | TEE Secure Element (Wellex Band v2, Q2 2027) |
| 7.8 | Калибровка: 7 дней; в период калибровки WVI = фиксированный 50, yield = 2%/мес |
| 7.9 | Grace Days: 3 дня/мес (WVI = среднее за последние 7 активных дней) |
| 7.10 | WVI Floor для стейкеров: минимальный WVI = 25 (не 0) при активном стейкинге |

---

## 8. Подписка

| # | Требование |
|---|-----------|
| 8.1 | Единый тариф: **$19/мес** — нет других тарифов, нет годовой цены |
| 8.2 | Минимальный период: 3 месяца |
| 8.3 | Оплата: USDC / USDT / банковская карта / локальные методы (без брендинга провайдера) |
| 8.4 | Включено: Wellex Band + WVI + Yield + AI Coach + Partner Program |
| 8.5 | Биллинг рекуррентный, автоматический |
| 8.6 | Grace Period при неудачном списании: 7 дней |
| 8.7 | При отмене: доступ до конца оплаченного периода, браслет остаётся у пользователя |
| 8.8 | Auto-compound ($129 one-time) — отдельная опция, не часть подписки |

---

## 9. KYC/AML

| # | Требование |
|---|-----------|
| 9.1 | Провайдер: Sumsub SDK |
| 9.2 | KYC Tier 0: Email подтверждён → лимит вывода $1,000/мес |
| 9.3 | KYC Tier 1: Паспорт/ID → лимит $10,000/мес |
| 9.4 | KYC Tier 2: Паспорт + Proof of Address → без лимита |
| 9.5 | AML: Chainalysis KYT (primary) + Elliptic (secondary) |
| 9.6 | Sanctions screening: OFAC SDN, EU, UN, HMT (daily sync) |
| 9.7 | Travel Rule: Notabene для TX > $1,000 |
| 9.8 | Fraud Detection: Isolation Forest ML (47 фичей) + rule-based engine |
| 9.9 | Fraud Score 0–100; порог блокировки ≥ 70; авто-SAR при ≥ 85 |

---

## 10. Дашборд: APP vs WEB

### APP — экраны

| # | Экран | Содержание |
|---|-------|-----------|
| 1 | 🏠 Home | WVI (0–100), Monthly Yield %, streak, AI-рекомендация, мини-график |
| 2 | 📊 Metrics | 3 компонента WVI, графики, тренды, AI-инсайты |
| 3 | 👥 Community | Группы, челленджи, лидерборды, social feed, друзья |
| 4 | 🤖 AI Assistant | AI Coach (видео/аудио/текст), прогнозы, отчёты |
| 5 | ⚙️ Settings | Профиль, браслет, подписка, кнопка «→ WEB-версия» |

> **В APP отсутствуют:** стейкинг, кошелёк, MLM, финансы, суммы в $.

### WEB — модули

| # | Модуль | Содержание |
|---|--------|-----------|
| 1 | 💰 Wallet | Баланс, yield, deposit/withdraw, история |
| 2 | 📈 Staking | WellexVault (единый), Monthly Yield в $, lock-up, калькулятор |
| 3 | 🌐 Network | MLM-дерево, бонусы, ранги, промоматериалы |
| 4 | 🤖 AI Agents | Wallet Agent, Growth Agent, Analytics |
| 5 | 📊 Analytics | История WVI + yield, прогнозы, экспорт |
| 6 | 🏥 WVI Widget | Мини-WVI + ссылка на APP |
| 7 | 🛡️ Admin | Административная панель (только для staff) |

---



---

## 11. Безопасность и конфиденциальность

Шифрование, GDPR, TEE, аудиты — согласно стандартной спецификации

---

## 12. Community (только APP)

> **Функционал доступен исключительно в APP.**

| # | Требование |
|---|-----------|
| 12.1 | Wellness Groups: создание, вступление, до 500 участников |
| 12.2 | Team Challenges: командные соревнования по WVI |
| 12.3 | 1v1 Duels: 7-дневные дуэли по WVI |
| 12.4 | Leaderboards: Global, Regional, Friends, Group |
| 12.5 | Social Feed: достижения, milestone'ы, реакции |
| 12.6 | Discovery: AI-рекомендации групп по интересам и геолокации |
| 12.7 | Privacy: гранулярный opt-in для каждой функции |
| 12.8 | Moderation: ML spam filter + ручная модерация + кнопка «Пожаловаться» |
| 12.9 | Community **недоступен** в WEB |

### Критерии приёмки — Community

- [ ] AC-12.1: Пользователь создаёт группу и приглашает участников
- [ ] AC-12.2: Командный челлендж отслеживает средний WVI команды
- [ ] AC-12.3: 1v1 дуэль длится 7 дней и определяет победителя
- [ ] AC-12.4: Лидерборды обновляются в реальном времени
- [ ] AC-12.5: Social feed отображает достижения друзей
- [ ] AC-12.6: Discovery рекомендует релевантные группы

---

## 13. Уведомления

### APP Push / In-app

| # | Событие | Push | In-app |
|---|---------|:----:|:------:|
| 1 | Обновление WVI | ✅ | ✅ |
| 2 | Рекомендация AI | ✅ | ✅ |
| 3 | Обновление челленджа | ✅ | ✅ |
| 4 | Достижение друга | — | ✅ |
| 5 | Напоминание о streak | ✅ | ✅ |
| 6 | Изменение Monthly Yield (для стейкеров) | ✅ | ✅ |
| 7 | Заряд браслета | ✅ | ✅ |
| 8 | Оповещение безопасности | ✅ | ✅ |

### WEB Email / In-app

| # | Событие | Email | In-app |
|---|---------|:-----:|:------:|
| 1 | Начисление стейкинг-вознаграждения | — | ✅ |
| 2 | MLM-бонус | — | ✅ |
| 3 | Новый реферал | ✅ | ✅ |
| 4 | Повышение ранга | ✅ | ✅ |
| 5 | Биллинг подписки | ✅ | ✅ |
| 6 | Вывод средств обработан | ✅ | ✅ |

---

## 14. Локализация & Multi-Language Support

### Поддерживаемые языки (Launch + Roadmap)

| Язык | Код | Регион | Приоритет | Срок |
|------|-----|--------|-----------|------|
| English | EN | Global (default) | 🔴 Launch | Day 1 |
| Russian | RU | CIS, MENA | 🔴 Launch | Day 1 |
| Spanish | ES | LATAM | 🔴 Launch | Day 1 |
| Portuguese | PT | Brazil, Portugal | 🔴 Launch | Day 1 |
| Indonesian | ID | SEA | 🟡 Month 2 | M2 |
| Arabic | AR | MENA | 🟡 Month 2 | M2 |
| Turkish | TR | Turkey, MENA | 🟡 Month 3 | M3 |
| Vietnamese | VI | SEA | 🟢 Phase 2 | Q3 2026 |
| Thai | TH | SEA | 🟢 Phase 2 | Q3 2026 |
| Uzbek | UZ | CIS | 🟢 Phase 2 | Q3 2026 |

### Архитектура локализации

▸ i18n framework: i18next (React/WEB) + React Native i18n (APP)
▸ Строки хранятся в JSON-файлах по языкам: `/locales/{lang}/translation.json`
▸ Автодетект языка по IP + browser locale → fallback EN
▸ Пользователь может переключить вручную (Settings → Language)
▸ RTL поддержка: Arabic → автоматический flip layout
▸ Числа и валюта: форматируются по локали (Intl.NumberFormat)
▸ Даты: ISO 8601 на сервере → локальный формат на клиенте

### Что локализуется

▸ Весь UI (кнопки, метки, сообщения об ошибках)
▸ Push-уведомления
▸ Email-уведомления (onboarding, yield alerts, community)
▸ AI Coach рекомендации (GPT-4o с system prompt на целевом языке)
▸ Partner Academy материалы (5 языков: RU, EN, ES, PT, ID)
▸ Legal disclaimers (адаптированы к юрисдикции пользователя)

### Что НЕ локализуется (остаётся EN)

▸ Blockchain хэши и технические идентификаторы
▸ Коды ошибок (для техподдержки)
▸ Admin panel (EN only)

---

## 15. API Architecture

### APP API Endpoints

| Группа | Endpoints |
|--------|----------|
| Auth | `POST /auth/register` · `POST /auth/login` · `POST /auth/refresh` |
| Health | `POST /health/sync` · `GET /health/metrics` · `GET /health/wvi` · `GET /health/emotions` |
| Community | `GET /community/groups` · `POST /community/groups` · `GET /community/challenges` · `POST /community/duels` |
| Leaderboards | `GET /leaderboards/{type}` |
| AI | `POST /ai/chat` · `GET /ai/recommendations` |
| User | `GET /users/me` · `PATCH /users/me` |
| Notifications | `GET /notifications` · `PATCH /notifications/settings` |

### WEB API Endpoints

| Группа | Endpoints |
|--------|----------|
| Auth | `POST /auth/wallet-connect` · `POST /auth/wallet-verify` |
| Wallet | `GET /wallet` · `GET /wallet/transactions` · `POST /wallet/withdraw` |
| Staking | `POST /staking/stake` · `POST /staking/unstake` · `GET /staking/positions` · `GET /staking/rewards` |
| MLM | `GET /network/tree` · `GET /network/stats` · `GET /network/bonuses` |
| Subscription | `POST /subscription/create` · `DELETE /subscription/cancel` |
| KYC | `POST /kyc/start` · `GET /kyc/status` |

### Shared Endpoints

| Группа | Endpoints |
|--------|----------|
| WVI | `GET /wvi/current` · `GET /wvi/history` · `GET /wvi/monthly-rate` |
| Export | `GET /export/csv?from=&to=` · `GET /export/pdf?from=&to=` · `GET /export/json` |

---

## 16. Webhooks & Developer API

### 16.1 Webhooks — события реального времени

Wellex отправляет webhook-уведомления на URL партнёра при ключевых событиях:

| Событие | Payload | Когда |
|---------|---------|-------|
| `yield.credited` | amount, wvi, rate, tx_hash, timestamp | При начислении yield |
| `deposit.confirmed` | amount, network, tx_hash, lock_until | После подтверждения депозита |
| `withdrawal.completed` | amount, network, tx_hash, timestamp | После вывода |
| `partner.referred` | partner_id, rank, timestamp | Новый партнёр в структуре |
| `partner.rank_upgrade` | partner_id, old_rank, new_rank | Повышение ранга партнёра |
| `partner.inactive` | partner_id, days_inactive | Партнёр неактивен >14 дней |
| `wvi.threshold` | old_wvi, new_wvi, new_rate | Пересечение порога WVI |
| `bracelet.disconnected` | device_id, last_sync | Браслет не синхронизировался >24ч |

### 16.2 Webhook Security

▸ Подпись каждого события: `X-Wellex-Signature: HMAC-SHA256(secret, payload)`
▸ Retry logic: 3 попытки с exponential backoff (1m, 5m, 30m)
▸ Timeout: 10 секунд на ответ
▸ Ожидаемый ответ: HTTP 200. Иначе — retry.
▸ Webhook logs: 30 дней истории в WEB Dashboard → Settings → Webhooks

### 16.3 Webhook Registration

```
POST /webhooks
{
  "url": "https://your-app.com/wellex-hook",
  "events": ["yield.credited", "partner.rank_upgrade"],
  "secret": "your_signing_secret"
}
```

### 16.4 Developer API — Public Endpoints

Для B2B интеграций (corporate wellness, партнёрские платформы):

| Endpoint | Метод | Назначение | Auth |
|----------|-------|-----------|------|
| `/v1/wvi/{user_id}` | GET | Текущий WVI пользователя | API Key |
| `/v1/yield/rate?wvi=72` | GET | Ставка yield для WVI | API Key |
| `/v1/partner/tree/{partner_id}` | GET | Дерево структуры (3 уровня) | API Key + OAuth |
| `/v1/partner/stats/{partner_id}` | GET | Статистика партнёра | API Key + OAuth |
| `/v1/health/check` | GET | Статус платформы | Public |

### 16.5 API Authentication

```
Authorization: Bearer {api_key}
X-Wellex-Version: 2026-03-01
Content-Type: application/json
```

API Keys создаются в WEB Dashboard → Settings → Developer → API Keys.
Rate limit: 1000 req/min per API Key. Превышение → HTTP 429.

### 16.6 SDK

| Платформа | Пакет | Статус |
|-----------|-------|--------|
| JavaScript / Node.js | `npm install @wellex/sdk` | Launch |
| Python | `pip install wellex-sdk` | Launch |
| iOS (Swift) | Swift Package Manager | Launch |
| Android (Kotlin) | Gradle dependency | Launch |
| React Native | `npm install @wellex/react-native` | Month 2 |

Документация: `developers.wellex.ai` (внутренняя, открывается после launch)

---

## Приложение: Tech Stack

| Слой | Технология |
|------|-----------|
| Mobile (APP) | SwiftUI (iOS) + Kotlin / Jetpack Compose (Android) |
| Web (WEB) | React 18 + TypeScript + Vite |
| Backend | FastAPI (Python 3.12) |
| Database | PostgreSQL + Redis + TimescaleDB |
| Blockchain | Multi-EVM (ETH, Polygon, BSC, Arbitrum, Optimism, Base, Avalanche), Solidity 0.8.x, ERC-4626, ERC-4337 |
| Wallet | Fireblocks / Dfns (MPC) + WalletConnect v2 |
| Auth | JWT + OAuth 2.0 + EIP-4361 (SIWE) |
| KYC | Sumsub SDK |
| Push | FCM + APNs |
| Email | SendGrid |
| Monitoring | Grafana + Prometheus + Sentry |
| CI/CD | GitHub Actions + Docker + Kubernetes |

---

*© 2026 Wellex. Confidential.*
