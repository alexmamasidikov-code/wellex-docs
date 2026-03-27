---
id: 17_TECH_ARCHITECTURE
title: "17 · Техническая архитектура"
sidebar_position: 17
description: "Wellex v6.1 · 27.03.2026"
---

# 17 · TECHNICAL ARCHITECTURE
> **Версия:** 6.1 | **Дата:** 27.03.2026 | **Статус:** Public


> Multi-EVM · Microservices · AWS Cloud · Card On-Ramp · Single Vault · Bridges · DEX Aggregator · Safe{Wallet} · CI/CD · Monitoring
> Масштабируемость до 10M пользователей
>
> ⚠️ Architecture supports yield distribution infrastructure. Target Yield is not a guarantee — actual yield depends on DeFi market conditions.

---

## 1. Архитектурный обзор

```
┌──────────────────────────────────────────────────────────────────┐
│ CLIENT LAYER                                                      │
│ ┌────────────────┐ ┌──────────────────┐ ┌───────────────┐       │
│ │ Mobile App     │ │ Web Dashboard    │ │ Admin Panel   │       │
│ │ (RN / Swift /  │ │ (React 18 + TS)  │ │ (React 18)    │       │
│ │ Kotlin)        │ │                  │ │               │       │
│ └───────┬────────┘ └────────┬─────────┘ └───────┬───────┘       │
│         └───────────────────┬┴───────────────────┘               │
│                             │ HTTPS / WSS                        │
├─────────────────────────────┼────────────────────────────────────┤
│                             ▼                                     │
│              API GATEWAY (Kong)                                   │
│    Rate limiting · Auth · Routing                                 │
├──────────────────────────────────────────────────────────────────┤
│ MICROSERVICES LAYER                                               │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│ │ Auth     │◄─gRPC─►│ WVI      │◄─gRPC─►│ Yield    │◄─gRPC─►│ Partner  │
│ │ Service  │ │ Service  │ │ Service  │ │ Service  │            │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘            │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│ │ AI       │ │ Notif.   │ │Bracelet  │ │ Bridge   │            │
│ │ Service  │ │ Service  │ │ Service  │ │ Service  │            │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘            │
│ ┌──────────┐ ┌──────────┐                                       │
│ │ On-Ramp  │ │ Content  │                                       │
│ │ Service  │ │ Service  │                                       │
│ └──────────┘ └──────────┘                                       │
│  *** Все inter-service вызовы — gRPC/Protobuf ***                │
│  *** REST/JSON — только на уровне API Gateway ***                │
├──────────────────────────────────────────────────────────────────┤
│ BLOCKCHAIN LAYER (MULTI-EVM)                                      │
│ EVM: Ethereum · Polygon · BSC · Arbitrum · Optimism · Base · Av.│
│ + Tron (TRC-20 USDT/USDC) + Solana (SPL USDC)                   │
│ Safe{Wallet} + ERC-4337 · WellexVault (ERC-4626) · Chainlink    │
│ LayerZero / Across (bridges) · 1inch / 0x / ParaSwap (DEX agg.) │
├──────────────────────────────────────────────────────────────────┤
│ ON-RAMP / OFF-RAMP LAYER                                          │
│ Fiat on-ramp (bank card, local methods) → USDC/USDT              │
│ Off-ramp / Payout to card (local methods by region)              │
├──────────────────────────────────────────────────────────────────┤
│ AI LAYER                                                          │
│ AI Coach (on-device + cloud) · Wallet Agent · Insurance Agent     │
├──────────────────────────────────────────────────────────────────┤
│ DATA LAYER                                                        │
│ PostgreSQL · Redis · S3 · IPFS · TimescaleDB                      │
└──────────────────────────────────────────────────────────────────┘
```

---

## 2. Multi-EVM Blockchain Architecture

### 2.1 Поддерживаемые сети

| Сеть | Chain ID | Приоритет | Назначение |
|------|----------|-----------|-----------|
| **Ethereum** | 1 | 🔴 Primary | Основной vault, максимальная ликвидность DeFi |
| **Polygon PoS** | 137 | 🔴 Primary | Низкие газ-комиссии, массовые транзакции |
| **Arbitrum One** | 42161 | 🟡 Secondary | L2 с высокой DeFi-ликвидностью |
| **Optimism** | 10 | 🟡 Secondary | L2, экосистема Superchain |
| **Base** | 8453 | 🟡 Secondary | Coinbase L2, fiat on-ramp |
| **BSC** | 56 | 🟡 Secondary | Азиатские рынки, низкий газ |
| **Avalanche C-Chain** | 43114 | 🟢 Tertiary | DeFi ecosystem, институциональные инструменты |
| **Tron** | — | 🟡 Secondary | TRC-20 USDT/USDC, широкое использование в Азии |
| **Solana** | — | 🟡 Secondary | SPL USDC, низкие комиссии, быстрые транзакции |

### 2.2 Единый WellexVault на каждой сети

На каждой поддерживаемой EVM-сети разворачивается **один WellexVault (ERC-4626)**. Никаких трёх траншей (Conservative/Balanced/Aggressive) — единый vault с WVI-based yield.

```
User Deposit (USDC/USDT)
 │
 ├── [On-Ramp] → Fiat → USDC on target chain
 ├── [DEX Swap] → 1inch/0x/ParaSwap → USDC (if other token)
 └── [Direct] → USDC/USDT transfer
      │
      ▼
 ┌─────────────────────────┐
 │ WellexVault (ERC-4626)  │  ← один vault на каждой сети
 │ Deposit → shares (wUSDC)│
 │ WVI → Monthly Yield     │
 └───────────┬─────────────┘
             │
   ┌─────────┴─────────┐
   ▼                   ▼
 DeFi Strategies    Cross-chain
 (Aave, Compound,   Liquidity
  Curve, Ondo)      (LayerZero/Across)
```

### 2.3 Smart Contract Architecture

| Контракт | Стандарт | Назначение | Деплой |
|----------|----------|-----------|--------|
| `WellexVault` | ERC-4626 + UUPS Proxy | Единый vault — депозит, shares, yield | Каждая сеть |
| `StrategyManager` | Ownable2Step | Управление DeFi-аллокациями, timelock 6ч | Каждая сеть |
| `YieldDistributor` | Custom | Еженедельное распределение yield по WVI | Каждая сеть |
| `WellnessOracle` | Chainlink-style | WVI on-chain (месячный) | Каждая сеть |
| `ProtectionReserve` | Custom | Страховой пул | Ethereum (primary) |
| `WithdrawalQueue` | Custom | Очередь при низкой ликвидности | Каждая сеть |
| `BridgeRouter` | Custom | Маршрутизация кросс-чейн | Каждая сеть |

### 2.4 Safe{Wallet} + ERC-4337 (Account Abstraction)

Каждый пользователь получает **Smart Account** на базе Safe{Wallet} с поддержкой ERC-4337:

| Компонент | Технология | Назначение |
|-----------|-----------|-----------|
| Smart Account | Safe{Wallet} (ERC-4337) | Пользовательский кошелёк, gasless tx |
| Paymaster | Wellex Paymaster | Оплата газа за пользователя (USDC) |
| Recovery | Safe Social Recovery Module | Восстановление через email + guardian |

**Преимущества:**
- Пользователь не видит blockchain — gasless, no seed phrase
- Батчинг транзакций (deposit + stake = 1 UserOp)
- Social recovery (email + guardian) вместо seed phrase
- Multi-chain: один Safe на каждой сети, единый UI

---

## 3. On-Ramp / Off-Ramp Architecture

### 3.1 Провайдеры (Internal — не раскрывать публично)

> ⚠️ Провайдеры — внутренняя информация. В публичных материалах использовать только «on-ramp», «off-ramp».

| Провайдер | Регионы | Методы | Комиссия | Приоритет |
|-----------|---------|--------|----------|-----------|
| Провайдер A | 160+ стран | Карта, Apple Pay, SEPA, PIX | 1–3.5% | Primary |
| Провайдер B | 170+ стран | Карта, Apple Pay, SEPA, банк. перевод | 1–5% | Secondary |
| Провайдер C | EU, UK, US | Карта, Apple Pay, Open Banking | 0.5–2.9% | Tertiary |

### 3.2 On-Ramp Flow

```
1. Пользователь нажимает «Пополнить» в WEB Dashboard
2. Выбирает метод: 💳 Карта / 🍎 Apple Pay / 🏦 SEPA / 📱 PIX
3. Агрегатор выбирает лучшего провайдера (цена + доступность по региону)
4. KYC проверка (если нужна):
   - Tier 1: до $500/мес — без KYC (или минимальный)
   - Tier 2: до $5K/мес — полный KYC (ID + selfie)
   - Tier 3: $5K+ — enhanced due diligence
5. On-ramp провайдер конвертирует fiat → USDC на выбранной сети
6. USDC поступает на Safe{Wallet} пользователя
7. Auto-deposit в WellexVault (если включен)
```

### 3.3 Fallback Logic

```
if (provider_A.available && provider_A.fee < threshold):
  use provider_A
elif (provider_B.available):
  use provider_B
else:
  use provider_C
```

Агрегация: best-rate routing между провайдерами в зависимости от региона, валюты и суммы.

---

## 4. DEX Aggregator Integration

### 4.1 Провайдеры

| Агрегатор | API | Назначение |
|-----------|-----|-----------|
| **1inch** | Fusion API v2 | Основной swap router — лучшие маршруты |
| **0x** | Swap API v2 | Fallback + RFQ ликвидность |
| **ParaSwap** | Augustus v6 | Tertiary, multi-path routing |

### 4.2 Swap Flow

Если пользователь вносит токен, отличный от USDC/USDT:

```
User deposits ETH/WBTC/DAI/etc.
 → DEX Aggregator (1inch → 0x → ParaSwap fallback)
 → Auto-swap to USDC
 → Deposit to WellexVault
```

Slippage protection: max 0.5% для стейблкоинов, max 1% для волатильных.

---

## 5. Cross-Chain Bridge Architecture

### 5.1 Провайдеры мостов

| Мост | Модель | Скорость | Безопасность |
|------|--------|----------|-------------|
| **LayerZero** | Message passing (OApp v2) | 1–10 мин | ULN + DVN validation |
| **Across** | Optimistic + Relayer | 2–15 мин | UMA optimistic oracle |

### 5.2 Cross-Chain Deposit Flow

```
User has USDC on Arbitrum
 → wants to deposit to Ethereum WellexVault
 → BridgeRouter selects best route:
   - LayerZero: if amount < $50K (faster)
   - Across: if amount ≥ $50K (deeper liquidity)
 → USDC arrives on Ethereum
 → Auto-deposit to WellexVault
```

### 5.3 Cross-Chain Liquidity Rebalancing

AI Wallet Agent может перемещать ликвидность между сетями для оптимизации yield:

```
If Ethereum Aave yield > Polygon Aave yield by >2%:
  → Move X% of Polygon TVL to Ethereum via LayerZero
  → Rebalance daily (batch, gas-optimized)
```

---

## 6. Microservices Architecture

### 6.1 Каталог сервисов

| Сервис | Язык | Framework | Ответственность | Replicas |
|--------|------|-----------|----------------|----------|
| **auth-service** | Python 3.12 | FastAPI | Регистрация, JWT, OAuth, 2FA, Safe{Wallet} | 3 |
| **wvi-service** | Python 3.12 | FastAPI | WVI calculation, history, forecast | 5 |
| **yield-service** | Python 3.12 | FastAPI | Deposit, withdraw, yield distribution | 3 |
| **partner-service** | Python 3.12 | FastAPI | Referrals, tree, earnings, levels | 3 |
| **ai-service** | Python 3.12 | FastAPI + TorchServe | ML inference, recommendations | 4 (GPU) |
| **notification-service** | Node.js 20 | NestJS | Push (Firebase), email, in-app | 2 |
| **bracelet-service** | Python 3.12 | FastAPI | BLE sync, firmware OTA, data ingestion | 3 |
| **blockchain-service** | TypeScript | NestJS + Ethers.js v6 | Multi-chain operations, vault mgmt | 3 |
| **bridge-service** | TypeScript | NestJS | LayerZero/Across bridge operations | 2 |
| **onramp-service** | Python 3.12 | FastAPI | On-ramp/off-ramp provider aggregation | 2 |
| **content-service** | Python 3.12 | FastAPI | AI content gen, promo materials | 2 |
| **admin-service** | Python 3.12 | FastAPI | User mgmt, stats, fraud, config | 2 |

### 6.2 Принцип межсервисной коммуникации

Все внутренние вызовы — **gRPC с Protocol Buffers**. REST/JSON — **только** на уровне API Gateway для внешних клиентов.

```
 EXTERNAL CLIENTS
 Mobile App · Web Dashboard · Admin Panel
         │            │            │
         └────────────┼────────────┘
                      │ REST/JSON + WebSocket (HTTPS/WSS)
                      ▼
            ┌──────────────────┐
            │ API Gateway      │ ← единственная точка REST
            │ (Kong)           │
            └────────┬─────────┘
                     │ gRPC (Protobuf)
         ┌───────────┼──────────────┐
         ▼           ▼              ▼
    ┌────────┐  ┌────────┐   ┌────────┐
    │ Auth   │  │ WVI    │   │ Yield  │  ...
    │Service │◄─gRPC──►│Service │◄─gRPC──►│Service │
    └────────┘  └────────┘   └────────┘
```

---

## 7. Data Layer

### 7.1 Хранилища

| Хранилище | Назначение | Масштабирование |
|-----------|-----------|----------------|
| **PostgreSQL 16** | Users, accounts, subscriptions, partner tree | Read replicas + pgBouncer |
| **TimescaleDB** | Биометрия, WVI time series, yield history | Hypertables, compression |
| **Redis 7** | Sessions, cache, feature store, rate limiting | Cluster mode |
| **S3** | Медиа, AI-модели, backups | CDN + lifecycle |
| **IPFS** | NFT metadata, insurance policies | Pinning service |

### 7.2 Blockchain Data Indexing

| Сеть | Индексатор | Данные |
|------|-----------|--------|
| All EVM chains | **The Graph** (subgraphs) | Deposits, withdrawals, vault shares, yield events |
| All EVM chains | **Custom indexer** (Rust) | Real-time TVL, user balances, bridge events |

---

## 8. Security Architecture

### 8.1 Smart Contract Security

| Уровень | Механизм |
|---------|----------|
| **Аудит** | Trail of Bits + OpenZeppelin (перед запуском + каждый upgrade) |
| **Bug Bounty** | Immunefi — $250K+ max payout |
| **Monitoring** | Forta Agent Network (real-time) |
| **Multisig** | Safe 3-of-5 для upgrades + timelock 48ч |
| **Circuit Breaker** | Auto-pause при TVL drop >20% за 24ч |
| **Rate Limits** | Max 5% TVL/ч, 15%/день, 40%/неделя withdrawals |

### 8.2 Bridge Security

| Механизм | Описание |
|----------|----------|
| **Amount limits** | Max $100K per bridge tx, daily cap per user |
| **Dual validation** | LayerZero DVN + internal verification |
| **Monitoring** | Real-time bridge monitoring (Forta + custom) |
| **Emergency pause** | Bridge pause multisig (2-of-3, instant) |

### 8.3 On-Ramp Security

| Механизм | Описание |
|----------|----------|
| **Provider KYC** | On-ramp провайдер выполняет KYC |
| **Fraud detection** | Провайдеры + internal fraud scoring |
| **Transaction limits** | Tier-based limits ($500 / $5K / custom) |
| **Chargeback protection** | 7-day hold для card payments >$1K |

---

## 9. Infrastructure & DevOps

### 9.1 Cloud Architecture (AWS)

| Компонент | Сервис | Регион |
|-----------|--------|--------|
| Compute | EKS (Kubernetes) | eu-west-1 + me-south-1 |
| Database | RDS PostgreSQL + ElastiCache Redis | Multi-AZ |
| Storage | S3 + CloudFront | Global CDN |
| Monitoring | CloudWatch + Grafana + Prometheus | Central |
| CI/CD | GitHub Actions → ECR → EKS | Automated |

### 9.2 Multi-Region

| Регион | Назначение |
|--------|-----------|
| **eu-west-1** (Ireland) | Primary — EU users, MiCA compliance |
| **me-south-1** (Bahrain) | Secondary — MENA, Dubai users |
| **ap-southeast-1** (Singapore) | Phase 2 — SEA expansion |

---

## 10. Monitoring & Observability

| Инструмент | Назначение |
|-----------|-----------|
| **Grafana + Prometheus** | Метрики сервисов, SLA dashboards |
| **Forta** | On-chain monitoring (vault, bridge, exploit detection) |
| **Sentry** | Error tracking (frontend + backend) |
| **PagerDuty** | Alerting + incident management |
| **Tenderly** | Transaction simulation + debugging |
| **Dune Analytics** | Public on-chain dashboards |

---

## 11. Технологический стек — сводная

| Компонент | Технология |
|-----------|-----------|
| Mobile (APP) | SwiftUI (iOS) + Kotlin/Jetpack Compose (Android) |
| Web (WEB) | React 18 + TypeScript + Vite |
| Backend | FastAPI (Python 3.12) + NestJS (TypeScript) |
| Database | PostgreSQL 16 + TimescaleDB + Redis 7 |
| Blockchain | Solidity 0.8.x, Ethers.js v6, ERC-4626, ERC-4337 |
| Smart Wallet | Safe{Wallet} + Safe Protocol Kit |
| DEX Aggregator | 1inch Fusion API + 0x Swap API + ParaSwap Augustus |
| Bridges | LayerZero OApp v2 + Across Bridge SDK |
| On-Ramp/Off-Ramp | Provider SDK (агрегатор, внутренняя деталь) |
| Keeper | Gelato Web3 Functions (auto-compound, rebalance) |
| Oracle | Chainlink (price feeds, PoR) + custom WVI Oracle |
| Auth | JWT + OAuth 2.0 + EIP-4361 (SIWE) + ERC-4337 |
| KYC | Sumsub SDK |
| Push | FCM + APNs |
| Email | SendGrid |
| CI/CD | GitHub Actions + Docker + Kubernetes (EKS) |
| Monitoring | Grafana + Prometheus + Forta + Sentry + Tenderly |

---

*→ Смежные документы: [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) (механика vault) · [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md) (страхование) · [25_TECH_REQUIREMENTS.md](25_TECH_REQUIREMENTS.md) (спецификация)*

*Wellex © 2026 · Confidential*
