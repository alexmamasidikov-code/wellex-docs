# 13 · LEGAL FRAMEWORK

> MiCA (EU) · VARA (Dubai) · SEC considerations · MLM Compliance · Card On-Ramp KYC · GDPR + LGPD · Запрещённые юрисдикции
> Версия: 6.1 | 12.03.2026 | Confidential

---

## 1. Корпоративная структура

| Юридическое лицо | Юрисдикция | Назначение |
|-----------------|-----------|-----------|
| **Wellex Foundation** | Кипр / Нидерланды | IP-холдинг, governance, treasury |
| **Wellex Labs Ltd** | Кипр / Estonia | Операционная компания — разработка, сервисы |
| **Wellex Insurance Services Ltd** | Кипр | Страховые операции (Страховой Фонд) |

**Выбор юрисдикций:**
- **Кипр:** EU-регуляция (MiCA, IDD), низкая корпоративная налоговая ставка (12.5%), статус VASP-ready
- **Нидерланды:** Альтернатива для IP-холдинга при необходимости EU-присутствия
- **Dubai (VARA):** Для операционного хаба MENA, регуляторно-дружественная среда для крипто

---

## 2. MiCA (EU) — Markets in Crypto-Assets Regulation

### 2.1 Применимость к Wellex

| Аспект Wellex | Квалификация по MiCA | Требование |
|-------------|---------------------|-----------|
| Депозиты USDC/USDT | E-money token (EMT) — stablecoin | CASP authorisation |
| Yield distribution | Crypto-asset service (custody + management) | CASP authorisation |
| Card on-ramp (fiat → USDC) | Payment services / VASP | MiCA CASP / VASP |
| Партнёрская программа (USDC выплаты) | Crypto-asset distribution | CASP authorisation |
| NFT-бейджи (non-fungible) | Вероятно вне MiCA scope | Мониторинг |

### 2.2 Путь к CASP Authorization

| Этап | Срок | Регулятор | Статус |
|------|:----:|-----------|:------:|
| Pre-application meeting | Q1 2026 | CySEC (Кипр) | В работе |
| Application filing | Q2 2026 | CySEC | Планируется |
| Assessment period | 3–6 мес | CySEC | — |
| CASP Authorization | Q4 2026 | CySEC → ESMA passport | — |

### 2.3 Stablecoin yield — ключевое регуляторное разъяснение

**Позиция Wellex:** yield пользователей генерируется исключительно из реального DeFi (Aave, Compound, Curve, RWA). Это **не процентный платёж** от Wellex, а передача доходности от внешних DeFi-протоколов.

**Юридическое позиционирование:** Wellex действует как **DeFi yield aggregator + custodian**, а не как bank deposit provider. Дисклеймер обязателен везде:
> *"Фактический yield зависит от рыночных условий DeFi. Wellex не гарантирует фиксированную доходность."*

### 2.4 White-label юридические заключения

| Документ | Юрфирма | Срок |
|----------|---------|:----:|
| MiCA qualification opinion | MME Legal + Partners | Q1 2026 |
| Stablecoin yield legal memo | Al Tamimi & Company | Q1 2026 |
| MLM regulatory opinion | Dechert LLP | Q2 2026 |

---

## 3. VARA (Dubai) — Virtual Assets Regulatory Authority

### 3.1 Обязательства

| Обязательство | Срок | Статус |
|-------------|:----:|:------:|
| VARA VASP registration | Q2 2026 | Планируется |
| Initial Disclosure | Q1 2026 | В разработке |
| AML/CFT Programme | Q1 2026 | В разработке |
| Qualified Investor requirements (если применимо) | Q2 2026 | — |

### 3.2 Операции в Dubai

- Wellex Hub Dubai — маркетинг и партнёрства (не финансовые операции)
- Депозиты EU-пользователей → через Wellex Labs Ltd (Кипр, MiCA)
- Депозиты MENA-пользователей → через VARA-лицензированное лицо (Q2 2026+)

---

## 4. SEC Considerations (США)

### 4.1 Yield + MLM — Howey Test анализ

**Yield Protocol:**
- Wellex не позиционирует yield как "guaranteed return"
- Yield зависит от усилий пользователя (WVI) — индивидуальный вклад присутствует
- Потенциальная квалификация: utility token with yield features
- **Решение:** Geo-blocking США на старте; рассмотрение SEC-совместимого предложения для accredited investors (Y3)

**MLM:**
- FTC compliance обязателен (см. раздел 6)
- 70% Rule: не менее 70% оборота от конечных потребителей (не дистрибьюторов)
- Income Disclosure Statement обязателен

### 4.2 Geo-blocking (US + Sanctioned)

| Юрисдикция | Статус | Причина |
|-----------|:------:|---------|
| USA | 🔴 Заблокировано | SEC yield/MLM regulations |
| China | 🔴 Заблокировано | Crypto ban |
| Iran, DPRK, Russia (OFAC) | 🔴 Заблокировано | Sanctions |
| Cuba, Venezuela, Syria | 🔴 Заблокировано | OFAC sanctions |

**Технические меры:** IP geoblocking + VPN detection + KYC nationality check + wallet screening (Chainalysis).

---

## 5. Card On-Ramp KYC / AML

### 5.1 KYC-тиры (on-ramp)

| Тир | Лимит | KYC требования | Срок верификации |
|-----|:-----:|----------------|:----------------:|
| **Tier 1** | До $500/мес | Email + телефон | Мгновенно |
| **Tier 2** | До $5 000/мес | Паспорт / ID + selfie (Sumsub) | 1–5 мин |
| **Tier 3** | $5 000+/мес | Enhanced Due Diligence + источник средств | 1–3 дня |

### 5.2 Провайдеры KYC

- **Sumsub** — основной KYC/AML провайдер (документы, биометрия, liveness check)
- **Chainalysis** — blockchain transaction monitoring, sanctions screening
- **Notabene** — Travel Rule compliance для crypto transfers >$1 000

### 5.3 AML/CTF Programme

| Элемент | Описание |
|---------|----------|
| Customer Due Diligence | Standard + Enhanced для высокорисковых клиентов |
| Transaction Monitoring | Real-time, threshold alerts ($1K, $5K, $10K) |
| Sanctions Screening | OFAC, EU, UN lists — real-time |
| Travel Rule | FATF recommendation 16, Notabene integration |
| Suspicious Activity Reports | MLRO responsibility, 24ч reporting |
| Record Keeping | 5 лет (EU AMLD requirement) |

---

## 6. MLM Compliance (FTC Guidelines)

### 6.1 Принципы

| Принцип FTC | Реализация Wellex |
|------------|------------------|
| **70% Rule** | ≥70% оборота → конечные потребители подписки/депозита |
| **No inventory loading** | Партнёр не обязан покупать браслеты |
| **Retail sales requirement** | Основной продукт — подписка $19/мес (retail) |
| **Income Disclosure Statement** | Публикуется ежегодно с медианным/средним/максимальным доходом |
| **No buy-in requirement** | Вход в партнёрскую программу = $0 |
| **Documented retail sales** | Система трекинга retail vs. distributor purchases |

### 6.2 Запрещённые практики

- ❌ "Guaranteed income" в маркетинге
- ❌ Требование покупки запасов браслетов
- ❌ Обязательные тренинги/конференции за деньги
- ❌ Доход только от рекрутинга (без реальных продаж)
- ❌ Агрессивное давление на рефералов

### 6.3 Income Disclosure Statement (обязателен)

Публикуется: ежегодно, на сайте, ссылка из всех промоматериалов.
Включает: % активных партнёров на каждом ранге, медианный/средний/максимальный доход, % партнёров без дохода.

---

## 7. GDPR + LGPD (биометрические данные)

### 7.1 Применимость

| Регуляция | Регион | Статус |
|-----------|:------:|:------:|
| **GDPR** (EU) | EU + EEA пользователи | Обязательно с Day 1 |
| **LGPD** (Бразилия) | Бразильские пользователи | Phase 3 (LATAM) |
| **PDPA** (Таиланд) | Тайские пользователи | Phase 3 (SEA) |

### 7.2 Биометрические данные — GDPR Art. 9

Биометрические данные (HRV, EDA) = **special category data** по GDPR.

| Требование | Реализация |
|-----------|-----------|
| Explicit consent | Отдельный opt-in при регистрации (не в ToS) |
| Purpose limitation | Только для WVI расчёта — нельзя продавать |
| Data minimization | Сервер получает WVI score, не raw биометрику |
| Right to erasure (Art. 17) | Полное удаление в течение 30 дней по запросу |
| Data portability (Art. 20) | Экспорт в JSON/CSV (в приложении) |
| DPO (Data Protection Officer) | Обязателен для EU-операций (назначение Q1 2026) |
| DPIA | Data Protection Impact Assessment — до запуска |
| Cross-border transfers | Standard Contractual Clauses (SCCs) для non-EU поставщиков |

### 7.3 On-device first

**Архитектурный принцип:** raw биометрика остаётся на устройстве. На серверы передаётся только WVI score + агрегированные признаки. Это снижает GDPR-риск и упрощает compliance.

---

## 8. Страховые операции (Wellex Insurance Services Ltd)

| Требование | Описание |
|-----------|----------|
| Лицензия | Insurance Intermediary (Кипр), Insurance Distribution Directive (IDD) — Q1 2026 |
| Regulated entity | Wellex Insurance Services Ltd — отдельное от Labs юрлицо |
| Надзор | Insurance Cyprus Supervisory Authority (ICSA) |
| Capital requirements | Минимальный уставной капитал per IDD |
| Claims handling | Прозрачная процедура, 30-дневный срок выплаты |

---

## 9. Smart Contract — юридические аспекты

| Аспект | Подход |
|--------|--------|
| Аудит | Trail of Bits + OpenZeppelin перед каждым деплоем и upgrade |
| Bug Bounty | Immunefi — $250K+ max, публично открыт |
| Timelock | 48ч на upgrades (multisig 3-of-5) |
| Governance | Off-chain Snapshot (без on-chain token) |
| Jurisdiction | Смарт-контракты не являются "securities" (юридическое заключение) |
| Terms of Use | Governing law: Кипр · Arbitration: ICC Rules · Waiver of class action |

---

## 10. Запрещённые юрисдикции — полный список

| Категория | Юрисдикции |
|-----------|-----------|
| **OFAC Sanctions** | Iran, DPRK, Cuba, Syria, Russia (OFAC-listed), Venezuela (по ситуации), Belarus |
| **Crypto restrictions** | China, Egypt, Algeria |
| **Regulatory geo-block** | USA, Canada (pending regulatory clarity) |
| **FATF Black/Grey list** | Мониторинг и блокировка по ситуации |

**Мониторинг:** обновление geo-block списка ежеквартально + при изменении OFAC/FATF листов.

---

## 11. Terms of Service — ключевые положения

| Положение | Описание |
|-----------|----------|
| **No Investment Advice** | Wellex не является финансовым советником |
| **Yield Disclaimer** | Yield не гарантирован, зависит от рынка |
| **Risk Acknowledgment** | Пользователь осознаёт DeFi-риски |
| **Age Restriction** | 18+ (21+ в некоторых юрисдикциях) |
| **Governing Law** | Кипр |
| **Arbitration** | ICC International Arbitration (Paris) |
| **Class Action Waiver** | Обязателен |
| **IP Rights** | Wellex владеет всем IP |

---

## 12. Roadmap Legal

| Задача | Срок | Ответственный |
|--------|:----:|:------------:|
| DPO назначен | Q1 2026 | Legal Officer |
| DPIA завершён | До запуска | DPO |
| MiCA pre-application meeting | Q1 2026 | Legal Officer |
| VARA registration | Q2 2026 | Legal Officer |
| IDD Insurance license | Q1 2026 | Wellex Insurance Services |
| Income Disclosure Statement v1 | Q2 2026 | Compliance |
| MLM legal opinion (Dechert) | Q2 2026 | Legal Officer |
| Privacy Policy + ToS public | До запуска | Legal Officer |
| Chainalysis integration | До запуска | Tech + Compliance |

---

---

## IP Protection Plan — защита интеллектуальной собственности

**"Emotional Mining" — это бренд Wellex. Защищаем агрессивно.**

| Актив | Действие | Юрисдикция | Срок | Стоимость |
|-------|----------|-----------|:----:|:---------:|
| Trademark "Emotional Mining" | Регистрация товарного знака | EU, US, UAE | Q1 2026 | $8K |
| Trademark "WVI" / "Wellex Vitality Index" | Регистрация | EU, US, UAE | Q1 2026 | $6K |
| Provisional Patent — WVI Algorithm | Provisional patent (12 мес защита) | US (USPTO) | Q1 2026 | $3K |
| Domain emotionalmining.com | Регистрация + redirect | Global | Немедленно | $15/год |
| Domain wellexvitality.com | Регистрация | Global | Немедленно | $15/год |
| Copyright — Whitepaper v4.0 | Автоматический copyright | Global | Готово | — |
| Trade Secrets — AI Engine 888+ стратегий | NDA для всех сотрудников и партнёров | Global | До найма | — |

---

## LGPD Prep Plan — Бразилия (Phase 3 GTM)

LGPD (Lei Geral de Proteção de Dados) — бразильский аналог GDPR. Wellex готовится с Day 1.

| Шаг | Действие | Срок |
|:-:|----------|:----:|
| 1 | Назначить LGPD Data Protection Officer (внешний консультант $5K/мес) | Q1 2026 |
| 2 | Адаптировать Privacy Policy для LGPD специфики (включая право на удаление биометрии) | Q2 2026 |
| 3 | Data architecture: segregate Brazilian user data to LGPD-compliant storage | До Phase 3 |
| 4 | Consent flows: explicit double-opt-in для биометрических данных (ст. 11 LGPD) | До Phase 3 |
| 5 | Incident response plan для LGPD (72h notification) | Q2 2026 |
| 6 | Партнёр в Бразилии с LGPD-экспертизой (local law firm) | До Phase 3 |

---

## Regulatory Sandbox Strategy

Участие в регуляторных sandbox = credibility + early-mover advantage.

| Sandbox | Юрисдикция | Преимущество | Срок подачи |
|---------|-----------|-------------|:-----------:|
| **FCA Innovation Hub** | UK | Глобальный benchmark. Даже скрининг = "Wellex прошёл FCA review" | Q3 2026 |
| **MAS Fintech Regulatory Sandbox** | Singapore | Ключ к ЮВА. MAS — самый уважаемый регулятор в Азии | Q3 2026 |
| **ADGM RegLab** | Abu Dhabi | Соседний эмират — страхование, расширение UAE присутствия | Q2 2026 |
| **AIFC Fintech Hub** | Kazakhstan | Крипто-sandbox, СНГ gateway | Q2 2026 |

---

*→ Смежные документы: [15_RISKS.md](15_RISKS.md) · [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) · [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md)*

*Wellex © 2026 · Confidential · Не является юридическим заключением. Проконсультируйтесь с юристом.*
