---
id: 17_TECH_ARCHITECTURE
title: "17 · TECHNICAL ARCHITECTURE"
sidebar_position: 17
description: "Wellex v6.0 · 05.03.2026"
---

# 17 · TECHNICAL ARCHITECTURE

> **Version:** 6.0 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Protocol

> Multi-EVM · Microservices · AWS Cloud · Card On-Ramp · Single Vault · Bridges · DEX Aggregator · Safe{Wallet} · CI/CD · Monitoring
> Scalable to 10M users
>
> ⚠️ Architecture supports yield distribution infrastructure. Target Yield is not a guarantee — actual yield depends on DeFi market conditions.

---

## 1. Architecture Overview

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
│  *** All inter-service calls — gRPC/Protobuf ***                 │
│  *** REST/JSON — only at the API Gateway level ***               │
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

### 2.1 Supported Networks

| Network | Chain ID | Priority | Purpose |
|---------|----------|----------|---------|
| **Ethereum** | 1 | 🔴 Primary | Main vault, maximum DeFi liquidity |
| **Polygon PoS** | 137 | 🔴 Primary | Low gas fees, mass transactions |
| **Arbitrum One** | 42161 | 🟡 Secondary | L2 with high DeFi liquidity |
| **Optimism** | 10 | 🟡 Secondary | L2, Superchain ecosystem |
| **Base** | 8453 | 🟡 Secondary | Coinbase L2, fiat on-ramp |
| **BSC** | 56 | 🟡 Secondary | Asian markets, low gas |
| **Avalanche C-Chain** | 43114 | 🟢 Tertiary | DeFi ecosystem, institutional instruments |
| **Tron** | — | 🟡 Secondary | TRC-20 USDT/USDC, widely used in Asia |
| **Solana** | — | 🟡 Secondary | SPL USDC, low fees, fast transactions |

### 2.2 Single WellexVault per Network

Each supported EVM network has **one WellexVault (ERC-4626)** deployed. No three-tranche model (Conservative/Balanced/Aggressive) — a single vault with WVI-based yield.

```
User Deposit (USDC/USDT)
 │
 ├── [On-Ramp] → Fiat → USDC on target chain
 ├── [DEX Swap] → 1inch/0x/ParaSwap → USDC (if other token)
 └── [Direct] → USDC/USDT transfer
      │
      ▼
 ┌─────────────────────────┐
 │ WellexVault (ERC-4626)  │  ← one vault per network
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

| Contract | Standard | Purpose | Deployment |
|----------|----------|---------|------------|
| `WellexVault` | ERC-4626 + UUPS Proxy | Single vault — deposit, shares, yield | Every network |
| `StrategyManager` | Ownable2Step | DeFi allocation management, 6h timelock | Every network |
| `YieldDistributor` | Custom | Weekly yield distribution by WVI | Every network |
| `WellnessOracle` | Chainlink-style | WVI on-chain (monthly) | Every network |
| `ProtectionReserve` | Custom | Insurance pool | Ethereum (primary) |
| `WithdrawalQueue` | Custom | Queue during low liquidity | Every network |
| `BridgeRouter` | Custom | Cross-chain routing | Every network |

### 2.4 Safe{Wallet} + ERC-4337 (Account Abstraction)

Every user receives a **Smart Account** based on Safe{Wallet} with ERC-4337 support:

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Smart Account | Safe{Wallet} (ERC-4337) | User wallet, gasless transactions |
| Paymaster | Wellex Paymaster | Gas payment on behalf of user (USDC) |
| Recovery | Safe Social Recovery Module | Recovery via email + guardian |

**Benefits:**
- User never sees blockchain — gasless, no seed phrase
- Transaction batching (deposit + stake = 1 UserOp)
- Social recovery (email + guardian) instead of seed phrase
- Multi-chain: one Safe per network, unified UI

---

## 3. On-Ramp / Off-Ramp Architecture

### 3.1 Providers (Internal — not disclosed publicly)

> ⚠️ Providers are internal information. Public materials should only use "on-ramp", "off-ramp".

| Provider | Regions | Methods | Fee | Priority |
|----------|---------|---------|-----|----------|
| Provider A | 160+ countries | Card, Apple Pay, SEPA, PIX | 1–3.5% | Primary |
| Provider B | 170+ countries | Card, Apple Pay, SEPA, bank transfer | 1–5% | Secondary |
| Provider C | EU, UK, US | Card, Apple Pay, Open Banking | 0.5–2.9% | Tertiary |

### 3.2 On-Ramp Flow

```
1. User clicks "Deposit" in WEB Dashboard
2. Selects method: 💳 Card / 🍎 Apple Pay / 🏦 SEPA / 📱 PIX
3. Aggregator selects best provider (price + regional availability)
4. KYC check (if required):
   - Tier 1: up to $500/month — no KYC (or minimal)
   - Tier 2: up to $5K/month — full KYC (ID + selfie)
   - Tier 3: $5K+ — enhanced due diligence
5. On-ramp provider converts fiat → USDC on selected network
6. USDC credited to user's Safe{Wallet}
7. Auto-deposit to WellexVault (if enabled)
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

Aggregation: best-rate routing across providers depending on region, currency, and amount.

---

## 4. DEX Aggregator Integration

### 4.1 Providers

| Aggregator | API | Purpose |
|-----------|-----|---------|
| **1inch** | Fusion API v2 | Primary swap router — best routes |
| **0x** | Swap API v2 | Fallback + RFQ liquidity |
| **ParaSwap** | Augustus v6 | Tertiary, multi-path routing |

### 4.2 Swap Flow

When a user deposits a token other than USDC/USDT:

```
User deposits ETH/WBTC/DAI/etc.
 → DEX Aggregator (1inch → 0x → ParaSwap fallback)
 → Auto-swap to USDC
 → Deposit to WellexVault
```

Slippage protection: max 0.5% for stablecoins, max 1% for volatile assets.

---

## 5. Cross-Chain Bridge Architecture

### 5.1 Bridge Providers

| Bridge | Model | Speed | Security |
|--------|-------|-------|----------|
| **LayerZero** | Message passing (OApp v2) | 1–10 min | ULN + DVN validation |
| **Across** | Optimistic + Relayer | 2–15 min | UMA optimistic oracle |

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

AI Wallet Agent can move liquidity between networks to optimise yield:

```
If Ethereum Aave yield > Polygon Aave yield by >2%:
  → Move X% of Polygon TVL to Ethereum via LayerZero
  → Rebalance daily (batch, gas-optimised)
```

---

## 6. Microservices Architecture

### 6.1 Service Catalogue

| Service | Language | Framework | Responsibility | Replicas |
|---------|---------|-----------|---------------|----------|
| **auth-service** | Python 3.12 | FastAPI | Registration, JWT, OAuth, 2FA, Safe{Wallet} | 3 |
| **wvi-service** | Python 3.12 | FastAPI | WVI calculation, history, forecast | 5 |
| **yield-service** | Python 3.12 | FastAPI | Deposit, withdraw, yield distribution | 3 |
| **partner-service** | Python 3.12 | FastAPI | Referrals, tree, earnings, levels | 3 |
| **ai-service** | Python 3.12 | FastAPI + TorchServe | ML inference, recommendations | 4 (GPU) |
| **notification-service** | Node.js 20 | NestJS | Push (Firebase), email, in-app | 2 |
| **bracelet-service** | Python 3.12 | FastAPI | BLE sync, firmware OTA, data ingestion | 3 |
| **blockchain-service** | TypeScript | NestJS + Ethers.js v6 | Multi-chain operations, vault management | 3 |
| **bridge-service** | TypeScript | NestJS | LayerZero/Across bridge operations | 2 |
| **onramp-service** | Python 3.12 | FastAPI | On-ramp/off-ramp provider aggregation | 2 |
| **content-service** | Python 3.12 | FastAPI | AI content generation, promo materials | 2 |
| **admin-service** | Python 3.12 | FastAPI | User management, stats, fraud, config | 2 |

### 6.2 Inter-Service Communication Principle

All internal calls use **gRPC with Protocol Buffers**. REST/JSON is used **only** at the API Gateway level for external clients.

```
 EXTERNAL CLIENTS
 Mobile App · Web Dashboard · Admin Panel
         │            │            │
         └────────────┼────────────┘
                      │ REST/JSON + WebSocket (HTTPS/WSS)
                      ▼
            ┌──────────────────┐
            │ API Gateway      │ ← only REST endpoint
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

### 7.1 Storage

| Storage | Purpose | Scaling |
|---------|---------|---------|
| **PostgreSQL 16** | Users, accounts, subscriptions, partner tree | Read replicas + pgBouncer |
| **TimescaleDB** | Biometrics, WVI time series, yield history | Hypertables, compression |
| **Redis 7** | Sessions, cache, feature store, rate limiting | Cluster mode |
| **S3** | Media, AI models, backups | CDN + lifecycle |
| **IPFS** | NFT metadata, insurance policies | Pinning service |

### 7.2 Blockchain Data Indexing

| Network | Indexer | Data |
|---------|--------|------|
| All EVM chains | **The Graph** (subgraphs) | Deposits, withdrawals, vault shares, yield events |
| All EVM chains | **Custom indexer** (Rust) | Real-time TVL, user balances, bridge events |

---

## 8. Security Architecture

### 8.1 Smart Contract Security

| Layer | Mechanism |
|-------|----------|
| **Audit** | Trail of Bits + OpenZeppelin (before launch + every upgrade) |
| **Bug Bounty** | Immunefi — $250K+ max payout |
| **Monitoring** | Forta Agent Network (real-time) |
| **Multisig** | Safe 3-of-5 for upgrades + 48h timelock |
| **Circuit Breaker** | Auto-pause on TVL drop >20% in 24h |
| **Rate Limits** | Max 5% TVL/hour, 15%/day, 40%/week withdrawals |

### 8.2 Bridge Security

| Mechanism | Description |
|----------|-------------|
| **Amount limits** | Max $100K per bridge tx, daily cap per user |
| **Dual validation** | LayerZero DVN + internal verification |
| **Monitoring** | Real-time bridge monitoring (Forta + custom) |
| **Emergency pause** | Bridge pause multisig (2-of-3, instant) |

### 8.3 On-Ramp Security

| Mechanism | Description |
|----------|-------------|
| **Provider KYC** | On-ramp provider performs KYC |
| **Fraud detection** | Provider + internal fraud scoring |
| **Transaction limits** | Tier-based limits ($500 / $5K / custom) |
| **Chargeback protection** | 7-day hold for card payments >$1K |

---

## 9. Infrastructure & DevOps

### 9.1 Cloud Architecture (AWS)

| Component | Service | Region |
|-----------|---------|--------|
| Compute | EKS (Kubernetes) | eu-west-1 + me-south-1 |
| Database | RDS PostgreSQL + ElastiCache Redis | Multi-AZ |
| Storage | S3 + CloudFront | Global CDN |
| Monitoring | CloudWatch + Grafana + Prometheus | Central |
| CI/CD | GitHub Actions → ECR → EKS | Automated |

### 9.2 Multi-Region

| Region | Purpose |
|--------|---------|
| **eu-west-1** (Ireland) | Primary — EU users, MiCA compliance |
| **me-south-1** (Bahrain) | Secondary — MENA, Dubai users |
| **ap-southeast-1** (Singapore) | Phase 2 — SEA expansion |

---

## 10. Monitoring & Observability

| Tool | Purpose |
|------|---------|
| **Grafana + Prometheus** | Service metrics, SLA dashboards |
| **Forta** | On-chain monitoring (vault, bridge, exploit detection) |
| **Sentry** | Error tracking (frontend + backend) |
| **PagerDuty** | Alerting + incident management |
| **Tenderly** | Transaction simulation + debugging |
| **Dune Analytics** | Public on-chain dashboards |

---

## 11. Technology Stack — Summary

| Component | Technology |
|-----------|-----------|
| Mobile (APP) | SwiftUI (iOS) + Kotlin/Jetpack Compose (Android) |
| Web (WEB) | React 18 + TypeScript + Vite |
| Backend | FastAPI (Python 3.12) + NestJS (TypeScript) |
| Database | PostgreSQL 16 + TimescaleDB + Redis 7 |
| Blockchain | Solidity 0.8.x, Ethers.js v6, ERC-4626, ERC-4337 |
| Smart Wallet | Safe{Wallet} + Safe Protocol Kit |
| DEX Aggregator | 1inch Fusion API + 0x Swap API + ParaSwap Augustus |
| Bridges | LayerZero OApp v2 + Across Bridge SDK |
| On-Ramp/Off-Ramp | Provider SDK (aggregator, internal detail) |
| Keeper | Gelato Web3 Functions (auto-compound, rebalance) |
| Oracle | Chainlink (price feeds, PoR) + custom WVI Oracle |
| Auth | JWT + OAuth 2.0 + EIP-4361 (SIWE) + ERC-4337 |
| KYC | Sumsub SDK |
| Push | FCM + APNs |
| Email | SendGrid |
| CI/CD | GitHub Actions + Docker + Kubernetes (EKS) |
| Monitoring | Grafana + Prometheus + Forta + Sentry + Tenderly |

---

*→ Related documents: [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) (vault mechanics) · [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md) (insurance) · [25_TECH_REQUIREMENTS.md](25_TECH_REQUIREMENTS.md) (specifications)*

*Wellex © 2026 · Confidential*
