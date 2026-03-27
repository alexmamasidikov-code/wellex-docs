# 15 · РИСКИ И МИТИГАЦИЯ

> Системные риски · DeFi · Smart Contract · MLM · Биометрия · Stablecoin · Bridge · Card On-Ramp · Regulatory
> Версия: 6.1 | 12.03.2026 | Confidential

---

## 1. Матрица рисков — сводная

| # | Риск | Вероятность | Импакт | Категория | Митигация |
|:-:|------|:-----------:|:------:|:---------:|-----------|
| 1 | Yield sustainability (DeFi market risk) | 🟡 Средняя | 🔴 Критический | DeFi | Dynamic Yield Cap + Insurance Fund |
| 2 | Smart contract exploit | 🟢 Низкая | 🔴 Критический | Tech | Двойной аудит + Bug Bounty $250K + Forta monitoring |
| 3 | Stablecoin depeg (USDC/USDT) | 🟢 Низкая | 🔴 Критический | DeFi | Диверсификация USDC + USDT + Insurance Fund |
| 4 | Cross-chain bridge exploit | 🟡 Средняя | 🔴 Критический | Tech | Amount limits + dual validation + emergency pause |
| 5 | MLM regulatory risk | 🟡 Средняя | 🟡 Высокий | Legal | FTC 70% Rule + Income Disclosure + no buy-in |
| 6 | Biometric data privacy breach | 🟢 Низкая | 🟡 Высокий | Privacy | On-device first + E2E encryption + GDPR compliance |
| 7 | Card on-ramp provider failure | 🟢 Низкая | 🟡 Средний | Operational | 3 провайдера (MoonPay, Transak, Ramp) + fallback logic |
| 8 | Regulatory changes (MiCA, VARA, SEC) | 🟡 Средняя | 🟡 Высокий | Legal | Multi-jurisdiction + proactive compliance |
| 9 | Bank run / mass withdrawal | 🟢 Низкая | 🔴 Критический | Financial | Rate limits + withdrawal queue + circuit breaker |
| 10 | Hardware supply chain disruption | 🟡 Средняя | 🟡 Средний | Operational | Dual-source + 6-week buffer stock |
| 11 | Biometric data manipulation / fraud | 🟢 Низкая | 🟡 Высокий | Security | TEE + ML anomaly detection + HRV fingerprint |
| 12 | Oracle manipulation | 🟢 Низкая | 🟡 Высокий | Tech | Chainlink + backup oracles + circuit breaker |
| 13 | Competitor launch (BixPay/Bitl) | 🟡 Средняя | 🟡 Средний | Market | Уникальное УТП (wellness + yield + Multi-EVM) |
| 14 | Slow user adoption | 🟡 Средняя | 🟡 Высокий | Market | Бесплатный браслет + aggressive KOL marketing |
| 15 | Key person risk | 🟡 Средняя | 🟡 Средний | Operational | Документирование + multisig + team expansion |

---

## 2. DeFi Market Risk (Yield Sustainability)

### 2.1 Описание

Доходность WellexVault зависит от рыночных ставок DeFi-протоколов (Aave, Compound, Curve, RWA). При снижении общих DeFi-ставок фактический yield может упасть ниже обещанных WVI-уровней.

### 2.2 Исторический контекст

| Период | Aave USDC rate | Compound USDC | Ondo USDY | Комментарий |
|--------|:--------------:|:-------------:|:---------:|-------------|
| Q1 2024 | 3.5% | 3.2% | 5.1% | Bear market recovery |
| Q3 2024 | 7.8% | 6.5% | 5.3% | Bull market |
| Q1 2025 | 4.2% | 3.8% | 5.0% | Стабилизация |
| Q4 2025 | 5.8% | 5.1% | 4.8% | US Treasuries effect |

### 2.3 Митигация

| Механизм | Описание |
|----------|----------|
| **Dynamic Yield Cap** | При SR (Sustainability Ratio) < 1.0 → линейное снижение всех yield уровней коэффициентом λ = SR/1.0 |
| **Диверсификация источников** | 6 категорий DeFi (Lending, AMM, RWA, Incentives, Basis, Structured) — не зависит от одного протокола |
| **RWA allocation** | 10–25% в Ondo USDY / Mountain USDM — привязка к US Treasuries (4.5–5.2% APY, стабильно) |
| **Insurance Fund** | 8–12% от TVL — покрывает smart contract и depeg риски |
| **Platform Yield Subsidy** | Временный (Year 1) — из операционных средств при низком TVL на старте |
| **Прозрачность** | Real-time dashboard с SR, TVL, yield sources — пользователь видит всё |

### 2.4 Worst-case сценарий

**Условие:** все DeFi-ставки падают до 1–2% годовых (глубокий bear market).
**Результат:** Dynamic Yield Cap срабатывает → Monthly Yield для WVI 90+ = ~3–5% (не 20%). Пользователь видит реальную ситуацию.
**Последствие:** репутационный риск, но модель остаётся устойчивой (нет Понци-коллапса).

---

## 3. Smart Contract Risk

### 3.1 Описание

Уязвимости в WellexVault, StrategyManager, BridgeRouter могут привести к потере пользовательских средств.

### 3.2 Митигация

| Уровень | Механизм |
|---------|----------|
| **Перед деплоем** | Двойной аудит: Trail of Bits + OpenZeppelin |
| **После деплоя** | Bug Bounty на Immunefi — $250K max payout |
| **Real-time** | Forta Agent Network — мониторинг аномальных транзакций 24/7 |
| **Upgrade safety** | UUPS Proxy + multisig 3-of-5 + timelock 48ч |
| **Circuit breaker** | Auto-pause при TVL drop >20% за 24ч |
| **Rate limits** | Max withdrawal: 5% TVL/ч, 15%/день, 40%/неделю |
| **Simulation** | Tenderly simulation каждой транзакции перед исполнением |
| **Insurance** | Insurance Fund покрывает smart contract exploit (100%) |

### 3.3 Исторические прецеденты

| Инцидент | Потери | Причина | Wellex-защита |
|----------|:------:|---------|--------------|
| Euler Finance (2023) | $197M | Reentrancy | Аудит + Forta + circuit breaker |
| Curve Finance (2023) | $73M | Vyper compiler bug | Solidity 0.8.x + аудит |
| Wormhole (2022) | $320M | Bridge exploit | LayerZero ULN + amount limits + dual validation |

---

## 4. Multi-Chain Bridge Risk

### 4.1 Описание

Кросс-чейн мосты (LayerZero, Across) — исторически наиболее уязвимый компонент DeFi. Эксплойт моста может привести к потере средств при кросс-чейн transfers.

### 4.2 Митигация

| Механизм | Описание |
|----------|----------|
| **Amount limits** | Max $100K per bridge tx, daily cap per user |
| **Dual validation** | LayerZero DVN (Decentralized Verifier Network) + internal verification |
| **Monitoring** | Real-time bridge monitoring (Forta + custom alerts) |
| **Emergency pause** | Bridge pause multisig (2-of-3, instant) |
| **Fallback** | Across Protocol как backup при LayerZero issues |
| **Insurance** | Insurance Fund покрывает bridge exploit |

### 4.3 Residual risk

Даже при всех мерах, кросс-чейн мосты остаются одним из самых высокорискованных компонентов. **Рекомендация:** основной TVL держать на 1–2 primary chains (Ethereum + Polygon), не распределять >30% TVL на secondary chains.

---

## 5. MLM Regulatory Risk

### 5.1 Описание

MLM-модель (10 рангов, 10 уровней глубины) подвергается регуляторному scrutiny в большинстве юрисдикций. FTC, SEC и EU-регуляторы классифицируют некоторые MLM как pyramid schemes.

### 5.2 Митигация

| Механизм | Описание |
|----------|----------|
| **70% Rule (FTC)** | ≥70% оборота от конечных потребителей (не дистрибьюторов) |
| **No buy-in** | $0 стоимость входа в партнёрскую программу |
| **No inventory loading** | Партнёр не обязан покупать браслеты |
| **Income Disclosure** | Публичный ежегодный отчёт с медианным/средним доходом |
| **Real product** | Основной продукт — подписка $19/мес + браслет |
| **Legal opinion** | Юридическое заключение Dechert LLP (Q2 2026) |
| **Monitoring** | Automated ratio tracking: retail vs. distributor revenue |

### 5.3 Residual risk

Отдельные юрисдикции (USA, China) могут классифицировать Wellex Partner Network как scheme. **Ответ:** geo-blocking этих юрисдикций до получения regulatory clarity.

---

## 6. Biometric Data Privacy Risk

### 6.1 Описание

Wellex обрабатывает биометрические данные (HRV, EDA, sleep patterns) — special category data по GDPR Art. 9. Утечка или неправомерное использование этих данных несёт серьёзные регуляторные и репутационные риски.

### 6.2 Митигация

| Механизм | Описание |
|----------|----------|
| **On-device processing** | Raw биометрика обрабатывается на устройстве; на сервер передаётся только WVI score |
| **E2E encryption** | AES-256 шифрование всех биометрических данных перед передачей |
| **Federated learning** | ML-модели улучшаются без передачи raw data на сервер |
| **GDPR compliance** | DPO, DPIA, explicit consent, right to erasure (30 дней) |
| **Data minimization** | Минимальный объём данных на сервере |
| **TEE (Wellex Band v2)** | Secure Element — криптографическая подпись данных на чипе |

---

## 7. Stablecoin Depeg Risk

### 7.1 Описание

WellexVault работает исключительно с USDC и USDT. Depeg любого из этих стейблкоинов может привести к значительным потерям TVL.

### 7.2 Исторический прецедент

- **USDC depeg (март 2023):** $0.87 на 3 дня → причина: SVB collapse → восстановление 100%
- **USDT flash depeg:** краткосрочные просадки до $0.97 → восстановление <24ч

### 7.3 Митигация

| Механизм | Описание |
|----------|----------|
| **Диверсификация** | USDC + USDT (не 100% в одном стейблкоине) |
| **Auto-rebalance** | AI переводит средства в stable стейблкоин при depeg >1% |
| **Insurance Fund** | Покрывает depeg потери до 80% |
| **Circuit breaker** | Пауза депозитов/выводов при depeg >5% |
| **RWA allocation** | 10–25% в Ondo USDY / Mountain USDM (backing US Treasuries) |

---

## 8. Card On-Ramp Provider Risk

### 8.1 Описание

Зависимость от провайдеров on-ramp (MoonPay, Transak, Ramp Network). Отказ провайдера, изменение условий или рост комиссий.

### 8.2 Митигация

| Механизм | Описание |
|----------|----------|
| **3 провайдера** | Fallback chain: MoonPay → Transak → Ramp Network |
| **Best-rate routing** | Автоматический выбор лучшего провайдера по регион + сумме |
| **Contract terms** | SLA с провайдерами, volume discounts |
| **Direct crypto deposit** | Всегда доступен (не зависит от on-ramp провайдеров) |

---

## 9. Bank Run / Mass Withdrawal

### 9.1 Описание

Массовый вывод средств (FUD, market crash, competitor allegations) может создать ликвидный кризис.

### 9.2 Митигация

| Механизм | Описание |
|----------|----------|
| **Rate limits** | Max withdrawal: 5% TVL/ч, 15%/день, 40%/неделю |
| **Withdrawal queue** | FIFO при достижении лимитов |
| **Liquidity buffer** | 5–15% TVL в liquid stables (не задействованы в DeFi) |
| **Circuit breaker** | Пауза при TVL drop >20% за 24ч |
| **Emergency governance** | Multisig 3-of-5 → пауза 72ч |
| **Transparency** | Real-time ликвидность, queue status, health factor на дашборде |
| **Insurance Fund** | Дополнительная подушка для обеспечения выплат |

---

## 10. Hardware Supply Chain Risk

### 10.1 Описание

Задержки в производстве Wellex Band, проблемы с компонентами, качество.

### 10.2 Митигация

| Механизм | Описание |
|----------|----------|
| **Dual-source manufacturing** | 2+ контрактных производителя |
| **Buffer stock** | 6-недельный запас готовой продукции |
| **QC процесс** | Приёмочный контроль: дефект-рейт target <2% |
| **Soft-launch without band** | App/WEB запускаются без браслета (manual WVI input), браслет — параллельно |

---

## 11. Regulatory Change Risk

### 11.1 Описание

Изменения в MiCA, VARA, SEC, FATF могут потребовать перестройки модели или geo-blocking новых юрисдикций.

### 11.2 Митигация

| Механизм | Описание |
|----------|----------|
| **Multi-jurisdiction** | Wellex Foundation (Кипр) + VARA (Dubai) — диверсификация |
| **Proactive compliance** | Legal team мониторит regulatory developments еженедельно |
| **Modular architecture** | Yield module, MLM module, on-ramp module — можно отключить по юрисдикции |
| **Legal counsel** | MME (Zurich), Al Tamimi (Dubai), Dechert (US) |

---

## 12. Сводка: Residual Risk после митигации

| # | Риск | Residual risk |
|:-:|------|:------------:|
| 1 | Yield sustainability | 🟡 Средний — Dynamic Yield Cap снижает, не устраняет |
| 2 | Smart contract exploit | 🟢 Низкий — после двойного аудита + monitoring |
| 3 | Stablecoin depeg | 🟢 Низкий — диверсификация + Insurance Fund |
| 4 | Bridge exploit | 🟡 Средний — ограничения помогают, но мосты остаются рискованными |
| 5 | MLM regulatory | 🟡 Средний — compliance measures + geo-blocking |
| 6 | Privacy breach | 🟢 Низкий — on-device first + encryption |
| 7 | On-ramp provider | 🟢 Низкий — 3 провайдера + direct crypto |
| 8 | Bank run | 🟢 Низкий — rate limits + circuit breaker |

---

---

## 13. Crisis Response Playbook — War Room Protocol

Для каждого критического сценария — чёткий протокол с временными рамками, ответственным и последовательностью действий.

| Сценарий | Response Time | Lead | Шаги |
|----------|:------------:|------|------|
| **Smart contract exploit** | < 1 час | CTO | 1. Pause contracts (multisig) → 2. Оценка ущерба → 3. Insurance Fund активация → 4. Public statement → 5. On-chain отчёт |
| **Stablecoin depeg >2%** | < 30 мин | Head of DeFi | 1. AI Yield Engine auto-exit → 2. Ребалансировка в USDC → 3. Уведомление пользователей → 4. SR пересчёт |
| **Регуляторное действие (блокировка юрисдикции)** | < 24 часа | Legal | 1. Оценка масштаба → 2. Geo-block при необходимости → 3. Уведомление затронутых пользователей → 4. Публичный statement |
| **PR-кризис / FUD в медиа** | < 2 часа | CMO | 1. Fact-check → 2. Statement на официальных каналах → 3. Community AMA → 4. Live Yield Dashboard как доказательство |
| **Bank run (вывод >10% TVL за 24ч)** | < 1 час | CTO + CEO | 1. Circuit breaker активация → 2. Withdrawal queue включение → 3. Transparency Report → 4. Emergency AMA → 5. SR мониторинг |
| **Data breach (биометрия/финансы)** | < 4 часа | CTO + DPO | 1. Изоляция → 2. Оценка масштаба → 3. GDPR 72h notification регулятору → 4. Уведомление пользователей → 5. Forensic анализ |

**War Room состав:** CEO + CTO + Head of DeFi + CMO + Legal. Multisig 3/5 для экстренных on-chain действий.

---

## 14. Key Person Risk — mitigation plan

**Текущее состояние:** solo founder = Single Point of Failure (SPOF).

**Митигация:**
- CTO: найм Day 1 после funding (co-lead всех технических решений)
- CMO: найм Month 2 (полная независимость маркетинга)
- Head of DeFi: найм Month 1 (yield стратегия независима от CEO)
- Все стратегические решения: multisig 3/5 (CEO + CTO + Head of DeFi + Legal + Senior Advisor)
- Документирование: КАЖДОЕ ключевое решение → Notion с обоснованием и альтернативами
- Key Person Insurance: $5M на CEO (полис активируется с Month 2)
- Succession Plan: прописан для каждой ключевой роли, обновляется ежеквартально

---

*→ Смежные документы: [13_LEGAL.md](13_LEGAL.md) · [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) · [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md) · [17_TECH_ARCHITECTURE.md](17_TECH_ARCHITECTURE.md)*

*Wellex © 2026 · Confidential*
