---
id: 30_SMART_CONTRACT_INSURANCE
title: "30 · Страхование смарт-контрактов"
sidebar_position: 30
description: "Wellex v5.0 · 05.03.2026"
---

# 30 · SMART CONTRACT INSURANCE

> **Version:** 5.0 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Product / Risk
> **SSOT for:** Smart contract coverage strategy, DeFi insurance architecture
> **Dependencies:** 06_YIELD_PROTOCOL (WellexVault), 15_RISKS, 22_INSURANCE_FUND

---

## TL;DR

- Smart contract insurance — обязательный элемент trust stack для DeFi-платформы
- Двухуровневая защита: platform-level coverage + optional user-level coverage
- Провайдеры: Nexus Mutual, InsurAce, UnoRe — decentralized; Evertas, Coincover — custodial bridge
- Оплата из Insurance Fund (8–12% TVL) — без дополнительных сборов с пользователей

---

## 1. Зачем это нужно

DeFi экосистема — высокорисковая среда. С 2020 по 2025 год смарт-контрактные эксплойты унесли $6.8B+ из различных протоколов. Wellex управляет пользовательскими депозитами в USDC/USDT — без страховки смарт-контрактов это неприемлемый риск для любого серьёзного участника экосистемы.

**Ключевое требование институциональных игроков:**
> «Есть ли у вас смарт-контрактная страховка?»

Без положительного ответа переговоры о B2B интеграциях, партнёрствах с корпорациями и фитнес-сетями заходят в тупик на стадии due diligence.

---

## 2. Архитектура защиты

### 2.1 Уровни страхования

```
Уровень 1 — Platform Coverage (активен по умолчанию для всех)
  └─ Покрывает: WellexVault, yield-стратегии, мост LayerZero
  └─ Провайдер: Nexus Mutual + InsurAce (dual cover)
  └─ Финансирование: Insurance Fund (8–12% TVL)

Уровень 2 — User Deposit Opt-In (дополнительно, по выбору пользователя)
  └─ Покрывает: индивидуальный депозит пользователя
  └─ Провайдер: InsurAce (pay-per-deposit)
  └─ Стоимость: 0.5–1.2% от суммы депозита/год (оплачивается из yield)
  └─ Активация: WEB Dashboard → Settings → Insurance
```

---

### 2.2 Что покрывается

| Риск | Покрытие | Провайдер |
|------|----------|-----------|
| Уязвимость смарт-контракта (эксплойт) | ✅ | Nexus Mutual |
| Rug pull / admin key compromise | ✅ (с ограничениями) | InsurAce |
| Oracle manipulation (Chainlink PoR) | ✅ | Nexus Mutual |
| Stablecoin de-peg (USDC/USDT >10%) | ✅ до 80% потерь | InsurAce |
| Bridge exploit (LayerZero) | ✅ | UnoRe |
| Centralized exchange insolvency | ❌ | — |
| Рыночные потери (yield < 0) | ❌ | — |
| User private key loss | ❌ | — |

> **Важно:** страховка покрывает технические сбои и эксплойты смарт-контрактов — не рыночные риски и не потери из-за действий пользователя.

---

## 3. Провайдеры страхования

### 3.1 Nexus Mutual — Platform Primary

| Параметр | Значение |
|----------|----------|
| Тип | Decentralized mutual, on-chain claims voting |
| Покрытие | Smart contract exploit, re-entrancy, logic bugs |
| TVL покрытие | До $20M на контракт |
| Premium | ~2.6% от покрываемой суммы/год |
| Выплата | On-chain в ETH/DAI, <72 часов после governance vote |
| Сеть | Ethereum mainnet + L2 |
| Статус Wellex | Target: Phase 1 (получить cover в M1) |

**Почему Nexus Mutual:** крупнейший DeFi insurance protocol, $500M+ выплат, доверяют Aave, Compound, Maker. Для пользователей и партнёров — наиболее узнаваемый бренд страхования в DeFi.

---

### 3.2 InsurAce — User Opt-In + Stablecoin De-peg

| Параметр | Значение |
|----------|----------|
| Тип | Decentralized, cross-chain |
| Покрытие | Smart contract + custodian risk + stablecoin de-peg |
| Cети | Arbitrum, Polygon, Ethereum, BNB |
| Premium | 0.5–1.2% от депозита/год |
| Минимум | $100 покрытие |
| Выплата | В USDC, 14 дней после approved claim |
| Статус Wellex | Target: Phase 1, опциональный уровень для пользователей |

**User flow:**
1. Пользователь вносит депозит на WEB-платформе
2. При активации опции «Insurance Cover» — InsurAce рассчитывает premium (отображается в интерфейсе)
3. Premium вычитается из первого yield-начисления
4. Пользователь получает on-chain insurance certificate (NFT)
5. При наступлении страхового случая — подаёт claim через wellex.ai или InsurAce dashboard

---

### 3.3 UnoRe — Bridge Protection

| Параметр | Значение |
|----------|----------|
| Тип | Специализированный bridge insurance |
| Покрытие | LayerZero cross-chain bridge exploits |
| Сети | Multi-EVM (7 chains) |
| Premium | ~1.5% от bridged volume/год |
| Статус Wellex | Target: Phase 1 (одновременно с Multi-EVM launch) |

---

### 3.4 Coincover — Custodial Safety Net (B2B)

| Параметр | Значение |
|----------|----------|
| Тип | Centralized insurance (UK FCA регулятор) |
| Покрытие | Theft, unauthorized access, business continuity |
| Аудитория | Корпоративные клиенты (B2B), HNW-депозиты |
| Лимит | До $1M на корпоративный аккаунт |
| Стоимость | Договорная, ~0.5–1%/год |
| Статус Wellex | Target: Phase 2 (B2B launch) |

---

## 4. Insurance Fund

Insurance Fund финансирует platform-level coverage. Механика:

```
Каждая транзакция через WellexVault:
  → 2% от yield fee направляется в Insurance Fund
  → Insurance Fund поддерживает 8–12% от общего TVL

При TVL $15M → Insurance Fund = $1.2M–$1.8M
При TVL $100M → Insurance Fund = $8M–$12M
```

**Состав Insurance Fund:**
- 50% в USDC (немедленная ликвидность)
- 30% в Nexus Mutual cover (smart contract)
- 20% в InsurAce platform cover

**Публичность:** остаток Insurance Fund отображается в реальном времени на wellex.ai/transparency

---

## 5. Bug Bounty Programme

Параллельная линия защиты — выявление уязвимостей до эксплойта.

| Тир | Severity | Вознаграждение | Срок выплаты |
|-----|----------|:--------------:|:------------:|
| Critical | Remote code execution, loss of funds | $50,000 USDC | 48 часов |
| High | Significant fund risk, privilege escalation | $15,000 USDC | 72 часов |
| Medium | Limited fund risk, DoS | $5,000 USDC | 7 дней |
| Low | Minor bugs, UX issues | $500 USDC | 14 дней |

**Платформа:** Immunefi (крупнейший DeFi bug bounty, $250K total pool)
**Scope:** WellexVault, YieldRouter, WVI Oracle, Partner contracts
**Статус:** Target запуск — M1 (одновременно с публичным launch)

---

## 6. Прозрачность для пользователей

### Публичная страница wellex.ai/insurance

Содержит:
- Список активных insurance providers + суммы покрытия
- Остаток Insurance Fund (on-chain)
- История claim'ов (0 claims — лучший показатель)
- Ссылки на сертификаты страхования
- Bug Bounty leaderboard (публичные хакеры с разрешения)

### WEB Dashboard — Insurance Widget

```
┌─────────────────────────────────────┐
│  🛡️ Ваш депозит защищён             │
│                                     │
│  Platform Coverage   ✅ Active      │
│  Nexus Mutual · $15M pool           │
│                                     │
│  Your Deposit Cover  ○ Optional     │
│  InsurAce · +0.8%/yr from yield     │
│  [Activate]                         │
│                                     │
│  Insurance Fund      $1.47M        │
│  wellex.ai/insurance                │
└─────────────────────────────────────┘
```

---

## 7. Коммуникация — как говорить о страховке

### В публичных материалах

> «WellexVault защищён двойным покрытием смарт-контрактов через Nexus Mutual и InsurAce. Дополнительное покрытие индивидуального депозита доступно по желанию. Insurance Fund поддерживается на уровне 8–12% TVL. Подробности: wellex.ai/insurance»

### В партнёрских разговорах

> «Помимо DeFi-доходности, Wellex единственный wellness-протокол с профессиональным страховым покрытием смарт-контрактов. Nexus Mutual, InsurAce, Bug Bounty на Immunefi — три уровня защиты.»

### В B2B переговорах

> «Для корпоративных клиентов доступно дополнительное покрытие через Coincover (FCA regulated) — до $1M на корпоративный аккаунт. Это уровень, который редко встречается даже у крупных DeFi протоколов.»

---

## 8. Roadmap внедрения

| Этап | Срок | Задача |
|------|------|--------|
| M1 (март 2026) | Launch | Nexus Mutual cover активирован, Immunefi bug bounty запущен |
| M1 (март 2026) | Launch | InsurAce user opt-in доступен в WEB Dashboard |
| M1 (март 2026) | Launch | wellex.ai/insurance страница публична |
| M2 (апрель 2026) | Growth | UnoRe bridge protection активирована |
| M6 (авг 2026) | B2B | Coincover для корпоративных клиентов |
| M12 (март 2027) | Scale | Insurance Fund достигает $3M+ (TVL $25M+) |

---

## Changelog

▸ v1.0 (02.03.2026) — создан Opus 4.6. Двухуровневая архитектура, 4 провайдера, Insurance Fund, Bug Bounty, UX Widget.

---

*→ Related: [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) · [15_RISKS.md](15_RISKS.md) · [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md)*

*Wellex © 2026 · wellex.ai*
