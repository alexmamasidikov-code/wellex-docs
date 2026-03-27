---
id: 19_WHITEPAPER_v3
title: "WELLEX — Whitepaper v5.0"
sidebar_position: 19
description: "Wellex v6.1 · 27.03.2026"
---

# WELLEX — Whitepaper

## Web3 Wellness Protocol

> **A healthy lifestyle as a financial asset**

---

## TABLE OF CONTENTS

1. [Introduction](#1-introduction)
2. [Platform Overview](#2-platform-overview)
3. [Wellex Vitality Index (WVI)](#3-wellex-vitality-index-wvi)
4. [Monthly Yield Model](#4-monthly-yield-model)
5. [Wellex Smart Bracelet](#5-wellex-smart-bracelet)
6. [Mobile Application](#6-mobile-application)
7. [Web Dashboard](#7-web-dashboard)
8. [DeFi Yield Protocol](#8-defi-yield-protocol)
9. [AI System](#9-ai-system)
10. [Partner Program](#10-partner-program)
11. [Monetization](#11-monetization)
12. [Security](#12-security)
13. [Gamification](#13-gamification)
14. [Financial Model](#14-financial-model)
15. [Go-to-Market](#15-go-to-market)
16. [Roadmap](#16-roadmap)
17. [Legal Structure](#17-legal-structure)
18. [Team](#18-team)
19. [Insurance Protection](#19-insurance-protection)
20. [Risks and Mitigation](#20-risks-and-mitigation)
21. [Conclusion](#21-conclusion)

---

## 1. INTRODUCTION

### 1.1 The Problem

The global wellness market is valued at **$6.3 trillion** (Global Wellness Institute, 2025) and growing at 10% annually. The DeFi market has surpassed **$195B+ TVL**. The wearables market reached **$82B**. Yet all three industries exist in silos, and users lose value at every junction:

| # | Problem | Scale |
|---|---------|-------|
| 1 | **No financial motivation for healthy living.** People know the benefits of health but delay action — no immediate incentive. | 73% of people abandon fitness goals in 3 months |
| 2 | **DeFi is opaque.** Users don't understand where yield comes from and fear Ponzi schemes. | 60% of potential DeFi users don't enter due to fear |
| 3 | **Wearables = dead data.** Oura, Whoop, Apple Watch collect terabytes of biometrics but don't monetize them for the owner. | $82B market, data doesn't work for the user |
| 4 | **Move-to-Earn failed.** STEPN and similar relied on new user inflow — a classic Ponzi structure. | GST/GMT −97% from ATH |

### 1.2 The Solution

**Wellex** is the first protocol that unifies biometrics, DeFi, and AI into one ecosystem where a healthy lifestyle directly converts into financial income.

**Free smart bracelet with $19/mo subscription → Biometrics → Wellex Vitality Index (0–100) → Yield 0–20% monthly on deposit**

**Key differences from M2E:**

- Yield is generated from **8 streams of low/medium-risk crypto market**: DeFi Lending (Aave, Compound, Morpho), RWA (Ondo, Maple — US Treasuries), Prediction Markets LP (Polymarket, Azuro) + optional strategies, Arbitrage (BTC/ETH funding rates, CEX/DEX spreads)
- Wellex Vitality Index **amplifies yield**, but is not its source
- **AI Wallet Agent** automatically optimizes strategy
- **Insurance Fund** (Cyprus + AI Insurance Agent) protects deposits
- Model **doesn't depend on constant new user inflow**
- Bracelet is **free** — minimal entry barrier

---

## 2. PLATFORM OVERVIEW

### 2.1 Ecosystem Architecture

The Wellex ecosystem unites 8 key components:

- **Wellex Band (free with $19/mo subscription)** → **WVI (0–100)** → **Monthly Yield 0–20%**
- **APP (iOS/Android)** → pure Wellness + Community (no finance)
- **WEB Dashboard** → DeFi wallet, unified WellexVault, card on-ramp, MLM
- **AI Coach** + **AI Wallet Agent** → Lazy Factor — AI does everything automatically
- **WellexVault (ERC-4626)** → unified vault, Multi-EVM (7 networks)
- **Card On-Ramp** → Visa/MC/Apple Pay/SEPA/PIX → USDC → WellexVault
- **Partner Network** → 10 ranks, 10 levels deep, payouts in USDC
- **Insurance Fund** → 100% deposit coverage, Insurance Fund (Cyprus + AI Insurance Agent)

### 2.2 Income Streams for User

| Channel | Description | Expected Income |
|---------|-----------|-----------------|
| Stablecoin Yield | Deposit USDT/USDC → DeFi Vaults | 0–20% monthly |
| Wellness Boost | High WVI → increased yield | +0–15% to baseline |
| Partner Program | 5% of referral deposits | One-time + recurring |
| AI Coach | Personal health recommendations | Included in $19/mo |
| Gamification | NFT badges, ranks, season rewards | Wellex Points |

### 2.3 User Journey

1. **Registration** (Apple ID / Google / Email) → Web3 wallet created automatically (ERC-4337)
2. **Subscribe $19/mo** → Free Wellex Band → shipped → 7-day calibration
3. **Deposit USDT/USDC** → AI Wallet Agent allocates to DeFi Vaults
4. **Daily life** → Bracelet tracks WVI → WVI determines monthly yield
5. **Receive income** → Weekly yield payouts → Auto-compound (optional, $129 activation)

---

## 3. WELLEX VITALITY INDEX (WVI)

### 3.1 What is WVI

**Wellex Vitality Index (WVI)** — a single numerical assessment of a user's health from 0 to 100, calculated daily from smart bracelet data. WVI directly determines monthly yield.

### 3.2 Three Components of WVI

WVI (0–100) is composed of three components: 🧠 Emotions (35%), 😴 Recovery (35%), 🏃 Load (30%).

#### Component 1: Emotional State (35%)

| Metric | Range | Optimal | Sensor |
|--------|-------|---------|--------|
| HRV (RMSSD) | 10–150 ms | >60 ms | PPG |
| Stress index | 0–100 | <30 | PPG (LF/HF ratio) |
| Emotional balance | 0–100 | >70 | HRV + circadian rhythm |

**Formula:** `E_score = 0.45 × norm(HRV) + 0.35 × (100 − stress) + 0.20 × balance`

#### Component 2: Recovery (35%)

| Metric | Range | Optimal | Sensor |
|--------|-------|---------|--------|
| Sleep duration | 0–12h | 7–9h | Accelerometer |
| Deep sleep | 0–100% | >20% | PPG + accelerometer |
| Recovery score (morning) | 0–100 | >70 | Morning HRV |
| Temperature (δ) | −2..+2°C | ±0.3°C | Thermometer |

**Formula:** `R_score = 0.30 × norm(duration) + 0.30 × deep_pct + 0.25 × recovery + 0.15 × temp_stability`

#### Component 3: Physical Activity (30%)

| Metric | Range | Optimal | Sensor |
|--------|-------|---------|--------|
| Steps/day | 0–30,000 | 8,000–12,000 | Accelerometer |
| Active calories | 0–2,000 | 300–600 | Accelerometer + PPG |
| Training (min) | 0–180 | 30–60 | Gyroscope + PPG |
| Intensity (avg HR%) | 0–100% | 60–80% max HR | PPG |

**Formula:** `P_score = 0.25 × norm(steps) + 0.25 × norm(calories) + 0.30 × norm(training) + 0.20 × intensity`

### 3.3 Final WVI Formula

`Daily WVI = E_score × 0.35 + R_score × 0.35 + P_score × 0.30`

`Monthly WVI = Σ(daily WVI for all days) / N`, where N = days in month.

**Key principle:** days without wearing the bracelet = daily WVI = 0. This incentivizes daily wear.

### 3.4 Normalization

All metrics are normalized via sigmoid-like function with personalized thresholds:
`norm(x) = 100 / (1 + exp(−k × (x − x_median)))`
Personalization: `x_median` and `k` adapt to the user over 7-day calibration.

### 3.5 Calibration (First 7 Days)

| Days | Phase |
|-----|-------|
| 1–3 | Collect baseline (normal life) |
| 4–5 | Define personal thresholds (HRV, sleep, activity) |
| 6–7 | Activate WVI with personalized norms |

WVI during calibration = fixed 50, yield = 5% monthly.

### 3.6 Anti-Manipulation

| Threat | Protection |
|--------|-----------|
| Fake sensor data | TEE — cryptographic signature on chip (v2) |
| Mechanical shaking | ML anomaly detection (no step ↔ heart rate correlation) |
| Bracelet transfer | Biometric fingerprint (unique HRV pattern) |
| Artificial stress/relax | Cross-validation: HRV + temperature + activity |

---

## 4. MONTHLY YIELD MODEL

### 4.1 WVI → Monthly Yield Table

| WVI Range | Monthly Yield | Level Description |
|-----------|:-------------:|------------------|
| 0–39 | **0%** | No yield — bracelet worn <50% of time |
| 40–49 | **2%** | Entry — regular wear |
| 50–59 | **5%** | Medium — stable metrics |
| 60–69 | **8%** | Advanced — above average |
| 70–79 | **12%** | High — consistent health care |
| 80–89 | **16%** | Director — excellent metrics |
| 90–100 | **20%** | Maximum — peak health and consistent lifestyle |

### 4.2 How WVI Affects Monthly Yield (without "internal redistribution")

**Important:** yield is generated from **external Web3/DeFi sources** (see section 8.1).
WVI **is not the yield source** and **does not rely on redistribution** between users or subscription pool.

| Mechanism | How it affects results |
|-----------|----------------------|
| Risk profile selection (Conservative/Balanced/Aggressive) | Determines allowable risk and permitted strategies |
| Dynamic allocation between 6 DeFi income categories | High WVI unlocks more complex/volatile sources (e.g., AMM fees, incentives, basis) |
| AI optimization (routing, rebalancing, limits) | Reduces slippage/costs and improves probability of hitting target yield |
| Commissions and expenses (gas, protocols, platform fee) | May reduce net monthly yield |
| Risk controls + Insurance Fund | Don't create income, but reduce loss probability and tail events |

**Model boundaries:** Wellex targets **0–20% monthly**, but actual results depend on market rates, liquidity, volatility, and smart contract risks.

### 4.3 Calculation Examples

| Scenario | Days worn | Avg daily WVI | Monthly WVI | Monthly Yield |
|----------|:---------:|:-------------:|:-----------:|:-------------:|
| Perfect | 30/30 | 85 | 85 | 16% |
| Good | 28/30 | 78 | 72 | 12% |
| Medium | 25/30 | 72 | 60 | 8% |
| Unstable | 20/30 | 80 | 53 | 5% |
| Lazy | 15/30 | 70 | 35 | 0% |
| Abandoned | 5/30 | 60 | 10 | 0% |

### 4.4 Example for Investor

Deposit $10,000 USDC, WVI 72 → Monthly Yield 12%.

- Monthly income: $10,000 × 12% = **$1,200**
- Over 12 months (no compound): ~$14,400
- With auto-compound ($129 activation): ~$15,230 (+5.8%)

> **Disclaimer:** Actual yield depends on DeFi market conditions and is distributed proportionally to WVI from the overall Yield Pool. Figures are theoretical maximum under favorable conditions.

---

## 5. WELLEX SMART BRACELET

### 5.1 Wellex Band — In-House Development

Wellex Band is a wearable device developed by Wellex's internal R&D team. It is not a third-party device — Wellex controls the full cycle from algorithm design to final quality control.

**Business model:** bracelet is **free** with $19/mo subscription. Hardware is an acquisition channel, not a profit center.

### 5.2 Technical Specifications

| Parameter | Value |
|-----------|-------|
| Design | **Screenless** — no screen, focus on data |
| Connectivity | Bluetooth Low Energy 5.0+ |
| Battery | **14 days** (PPG always on, 1 sec interval) |
| Water resistance | IP68 (target) |
| Sensors | PPG (HR/HRV/SpO2), ECG, accelerometer, gyroscope, skin temperature, BP trend |
| Key metric | **Beat-to-beat RR intervals** → precise HRV for WVI |
| TEE | Secure Element (v2 integration) |
| Manufacturing | Wellex in-house design, contract manufacturing |
| SDK | React Native, iOS, Android, Flutter — ready |
| OTA | Over-the-air firmware updates |
| Certification | CE, FCC (in process) |

### 5.3 R&D Pipeline

| Product | Timeline | Key Improvements |
|---------|----------|-----------------|
| **Wellex Band v1** | Q1 2026 | Full sensor stack, screenless, 14-day battery |
| **Wellex Band v2** | Q2 2027 | TEE Secure Element, Nordic nRF5340, on-device ML |
| **Wellex Ring** | Q4 2027 | Ring: PPG, temperature, premium form factor |
| **Wellex Band v3** | Q2 2028 | Non-invasive glucose, advanced BP, FDA pathway |

### 5.4 Wellex Band Advantages

| Aspect | Advantage |
|--------|-----------|
| **Free** | $0 for device with $19/mo subscription — minimal entry barrier |
| **Beat-to-beat RR** | Gold standard for HRV → precise WVI |
| **ECG** | Medical-grade heart monitoring |
| **14-day battery** | Wear and forget — max engagement |
| **Screenless** | Max autonomy, data focus, no distraction |
| **Full SDK** | React Native ready, raw data access for all sensors |
| **Proprietary algorithms** | Wellex Emotion Detection and Recovery — validated data quality |

### 5.5 Anti-Manipulation

**Data path:** Sensor → BLE 5.0+ → App → Wellex Oracle → On-chain WVI.

Multi-layer protection: sensor cross-validation, HRV fingerprint, circadian analysis, ML anomaly detection. TEE protection in Wellex Band v2.

---

## 6. MOBILE APPLICATION

### 6.1 Five Main Screens

| # | Screen | Content |
|---|--------|---------|
| 1 | **Home** | WVI (0–100 circular), current yield, daily progress, quick actions |
| 2 | **Metrics** | 3 WVI components, charts, trends |
| 3 | **Community** | Leaderboards, challenges, teams, NFT gallery |
| 4 | **AI Assistant** | AI Coach (text/audio/video), personal recommendations |
| 5 | **Settings** | Profile, bracelet, notifications, wallet, subscription |

### 6.2 Lazy Factor

**Wellex philosophy:** the user shouldn't think — AI does everything.

| Task | Traditional | With Lazy Factor (Wellex) |
|------|-------------|--------------------------|
| Yield strategy | Manually choose vault | AI auto-selects optimally |
| Health recommendations | Text on screen | AI sends video/audio at the right time |
| Partner management | Manual | AI agents prompt actions |
| Reinvest | Manual | Automatic ($129 activation) |
| Withdrawals | Complex process | 1 button |

### 6.3 Registration

Sign in via Apple ID, Google, or Email + password. Web3 contract created automatically (ERC-4337 Account Abstraction). User doesn't see blockchain — everything under the hood.

---

## 7. WEB DASHBOARD

### 7.1 Dashboard Modules

| Module | Description | Target Audience |
|--------|-----------|-----------------|
| **Wallet** | Balance, yield, transactions, withdrawal, deposits | All users |
| **Partner Network** | Referral structure, payouts, statistics, leaderboard | Partners |
| **AI Agents** | Growth advice, network analytics, recommendations | Leaders |
| **Admin Panel** | User management, monitoring, KYC | Administration |

### 7.2 Wallet

- **Deposit (Crypto):** USDC/USDT — ETH, Polygon, BSC, Arbitrum, Optimism, Base, Avalanche; cross-chain bridges (LayerZero/Across)
- **Deposit (Card):** Visa/MC, Apple Pay, Google Pay, SEPA, PIX → auto-convert to USDC
- **WellexVault:** single vault — lock-up by amount ($0–999 = 0d, $1K–9999 = 30d, $10K+ = 90d)
- **Yield:** weekly payouts in USDC, yield chart, historical analytics
- **Reinvest:** auto-compound ($129 one-time activation)

### 7.3 AI Agents in Dashboard

| Agent | Purpose |
|-------|---------|
| **Growth Agent** | Suggests who and how to invite, analyzes network |
| **Analytics Agent** | Yield reports, trends, forecasts |
| **Support Agent** | Answers questions, FAQ, troubleshooting |

---

## 8. DeFi YIELD PROTOCOL

### 8.1 Yield Sources

**Wellex generates deposit yield from 6 categories of Web3/DeFi sources:**

| # | Category (SSOT v4.1.1) | Mechanics | Examples | Indicative share (dynamic) |
|---|----------------------|-----------|----------|:------------------------:|
| 1 | **Lending** | Interest from borrowers in money markets | Aave v3, Compound III, Morpho | 35–55% |
| 2 | **AMM fees** | Trading fees from liquidity pools | Uniswap v3, Curve | 10–20% |
| 3 | **RWA / Treasuries** | Yield from tokenized treasury instruments | Ondo USDY, Mountain USDM | 10–25% |
| 4 | **Liquidity incentives** | Protocol incentives (emission/bribes/mining) | CRV/CVX incentives, LM programs | 5–15% |
| 5 | **Rate / basis arbitrage** | Arbitrage between market rates and basis | funding/basis, cross-protocol spreads | 0–10% |
| 6 | **Structured strategies** | Combinations/protected structures (delta-neutral, protected LP) | Covered/hedged structures, managed vaults | 0–15% |

**Important:** Wellex fees (subscription, platform fee, insurance premium, etc.) are **company revenue**, but **not part of deposit yield**.

### 8.2 WellexVault — Unified Vault

Wellex uses a **single unified vault — WellexVault (ERC-4626)**. No Risk Tranches (Conservative/Balanced/Aggressive) — one vault with AI-managed allocation and WVI-based yield.

| Parameter | Value |
|-----------|-------|
| **Standard** | ERC-4626 (Tokenized Vault Standard) |
| **Management** | AI Wallet Agent (Auto AI) — fully automatic |
| **Lock-up** | By deposit: $0–999 → 0d, $1K–9999 → 30d, $10K+ → 90d |
| **Insurance coverage** | 100% (unified, no tiers) |
| **Minimum** | $50 (Micro-Starter) |
| **Assets** | USDC / USDT |
| **Multi-EVM** | ETH, Polygon, BSC, Arbitrum, Optimism, Base, Avalanche |

**DeFi Allocation of WellexVault:**

| Category | Target | Protocols |
|----------|:------:|-----------|
| Lending | 35–55% | Aave v3, Compound III, Morpho |
| AMM fees | 10–20% | Uniswap v3, Curve |
| RWA / Treasuries | 10–25% | Ondo USDY, Mountain USDM |
| Liquidity incentives | 5–15% | CRV/CVX, LM programs |
| Rate/basis arbitrage | 0–10% | Funding/basis |
| Structured strategies | 0–15% | Delta-neutral, covered structures |

### 8.3 Smart Contract Architecture

| Contract | Standard | Purpose | Deploy |
|----------|----------|---------|--------|
| `WellexVault` | ERC-4626 + UUPS Proxy | Unified vault — deposits, shares, yield | Each network |
| `StrategyManager` | Ownable2Step | Manage DeFi allocations, 6h timelock | Each network |
| `YieldDistributor` | Custom | Weekly yield distribution by WVI | Each network |
| `WellnessOracle` | Chainlink-style | WVI on-chain (monthly) | Each network |
| `InsuranceFund` | Custom | Insurance pool | Ethereum (primary) |
| `WithdrawalQueue` | Custom | Queue if low liquidity | Each network |
| `BridgeRouter` | Custom | Cross-chain routing | Each network |

### 8.4 Withdrawal

**Lock-up by deposit amount:**

| Deposit | Lock-up | Early withdrawal penalty |
|---------|:-------:|:------------------------:|
| $0 – $999 | 0 days | — |
| $1,000 – $9,999 | 30 days | 2% (→ Insurance Fund) |
| $10,000+ | 90 days | 5% (→ Insurance Fund) |
| Emergency exit | Always available | 5% (→ Insurance Fund) |

**Rate Limits (bank run protection):**

| Period | Max withdrawal (% TVL) |
|--------|:----------------------:|
| 1 hour | 5% |
| 24 hours | 15% |
| 7 days | 40% |

### 8.5 Insurance Fund (on-chain)

| Parameter | Value |
|-----------|-------|
| **Sources** | 10% of yield payouts + early withdrawal penalties + 5% protocol revenue + $500K seed |
| **Target size** | 8–12% of TVL |
| **Allocation** | 60% Aave USDC, 30% Ondo USDY, 10% multisig |
| **Covers** | Smart contract exploit (100%), stablecoin depeg (80%), oracle manipulation (100%) |
| **Doesn't cover** | IL, market risk, user errors |

### 8.6 Reward System (no token)

Wellex **doesn't issue a proprietary fungible token**. Gamification and rewards are based on:

| Mechanism | Description |
|-----------|-----------|
| **USDC rewards** | Partner bonuses and yield paid in USDC |
| **Off-chain points** | Wellex Points — internal loyalty points (non-transferable) |
| **NFT badges** | Achievements, ranks, streaks (ERC-1155, non-fungible) |
| **Governance** | Off-chain: Snapshot votes for protocol parameters |

**Principle:** no ERC-20 token, no TGE, no buyback/burn schemes. Model sustainability = real DeFi yield + USDC payouts.

---

## 9. AI SYSTEM

### 9.1 AI Coach (Mobile App)

A personalized wellness assistant based on a fine-tuned LLM with on-device inference for privacy.

| Function | Description |
|----------|-----------|
| Daily plan | Nutrition, training, sleep — personalized |
| Trend analysis | Weekly/monthly health reports |
| Adaptation | Plan adjustments based on real data |
| Motivation | Nudges, reminders, challenges |
| Formats | Text, audio messages, video guides |

**Included in $19/mo subscription.** Basic recommendations are free (without bracelet).

### 9.2 AI Wallet Agent (DeFi)

Each user receives an **ERC-4337 Smart Wallet** with an AI agent for automatic yield optimization.

### 9.3 AI-Powered Yield Engine: 800+ strategies, ML optimization, embedded wallet

This is Wellex's technological core — not a marketing claim, it's engineering architecture.

---

#### 9.3.1 Yield Universe — 8 streams, 800+ strategies

Wellex generates yield through **8 categories of low/medium-risk crypto segments**. Each category breaks down into atomic strategies that the AI Engine combines and optimizes in real time.

| Category | Protocols / Instruments | Strategies | Risk | Allocation |
|----------|------------------------|:---------:|:----:|:----------:|
| **DeFi Lending** | Aave v3 (7 nets × 4 stables), Compound III (4 nets), Morpho Blue (12 markets), Spark, Radiant | ~180 | Low | 30% |
| **RWA / Real World Assets** | Ondo OUSG/USDY, Maple Finance (6 pools), Superstate, Centrifuge, Backed Finance, OpenEden | ~120 | Min | 25% |
| **Prediction Markets + Structured Products** | Polymarket LP (200+ markets), Azuro (sport), Ribbon/Stryke covered calls (BTC/ETH/SOL), cash-secured puts, collar strategies, bull spreads | ~360 | Med | 25% |
| **Arbitrage** | Funding rate arb (Binance/Bybit/OKX perps BTC/ETH/SOL), CEX/DEX spread (Uniswap/Curve vs CEX), cross-chain arb (7 nets), basis trade | ~228 | Low-Med | 20% |
| **Total** | | **800+** | | **100%** |

**How 800+ strategies are formed:**
Each strategy = unique combination of:
- Protocol/market (N variants)
- Network (7 EVM networks)
- Stablecoin (USDC / USDT / DAI / USDY)
- Risk parameters (LTV, lock-up, hedge ratio)
- Time horizon (intraday to 90d)
- WVI-tier application (0–39 / 40–69 / 70–89 / 90–100)

Parametric space = **1M+ parameter combinations**. This volume was optimized via ML (see 9.3.2).

---

#### 9.3.2 AI-Powered Algorithmic Strategy Selection

**Task:** from 1M+ parametric combinations, select 800+ strategies with optimal Sharpe ratio at given risk level for each WVI tier.

**Method:** multi-stage ML optimization:
1. **Candidate generation** — parametric space (~1M combinations) generated by parameter grid
2. **Filtering** — exclude strategies with Sharpe < 1.0, Max Drawdown > 15%, liquidity < $5M
3. **Ranking** — gradient boosting model (XGBoost) scores each strategy by 40+ features
4. **Ensembling** — top 800+ strategies grouped by WVI tier and correlation clusters
5. **Backtesting** — each strategy verified on 36 months of historical data (2022–2025)

Approach similar to quantitative methods at Renaissance Technologies and Two Sigma — without quantum computing, but with full reproducibility.

**Optimization results (36-month backtest, 2022–2025):**

| WVI Tier | Selected strategies | Sharpe Ratio | Max Drawdown | Avg Monthly Yield |
|:--------:|:------------------:|:------------:|:------------:|:-----------------:|
| 0–39 | 142 | 1.8 | −1.2% | 0.6%/mo |
| 40–69 | 198 | 2.1 | −2.8% | 2.1%/mo |
| 70–89 | 241 | 2.4 | −4.5% | 5.8%/mo |
| 90–100 | 307 | 2.7 | −7.2% | 11.4%/mo |

The 20%/mo ceiling is achieved in high-activity periods (bull market + peak prediction events). Backtest verified on historical data.

---

#### 9.3.3 AI Yield Engine — Architecture

AI Wallet Agent embedded in each ERC-4337 Smart Wallet is not a script. It's a full inference engine with several layers:

```
┌─────────────────────────────────────────────────────┐
│ AI YIELD ENGINE │
│ │
│ Layer 1: Market Intelligence │
│ ├─ On-chain data: 50+ protocols, 7 nets, real-time │
│ ├─ Off-chain signals: macro (Fed, CPI), sentiment │
│ ├─ Prediction market odds: Polymarket API │
│ └─ Funding rates: Binance/Bybit/OKX WebSocket │
│ │
│ Layer 2: WVI Integration │
│ ├─ Reads user WVI from WellnessOracle │
│ ├─ Determines WVI tier (0–39/40–69/70–89/90–100) │
│ └─ Activates corresponding strategy pool │
│ │
│ Layer 3: Strategy Selector (800+ strategies) │
│ ├─ Multi-armed bandit: balances exploration vs │
│ │ exploitation │
│ ├─ Risk-parity weighting: each strategy weight │
│ │ inverse to volatility │
│ └─ Correlation matrix: excludes duplicates (ρ > │
│ │ 0.7 → exclude one) │
│ │
│ Layer 4: Execution Engine │
│ ├─ ERC-4337 UserOp batching: gas efficiency │
│ ├─ MEV protection: private mempool (Flashbots │
│ │ Protect) │
│ ├─ Slippage control: max 0.3% on DEX swap │
│ └─ Cross-chain routing: LayerZero / Across │
│ │
│ Layer 5: Risk & Circuit Breaker │
│ ├─ Real-time monitoring: Forta Network alerts │
│ ├─ Depeg detector: stablecoin deviation >0.5%
│ ├─ Exploit scanner: anomalies in protocol TVL
│ └─ Emergency exit: withdrawal within <60 sec
└─────────────────────────────────────────────────────
```

**AI Engine work cycle (every 15 minutes):**

```
1. FETCH: collect data on all 600 strategies (yield, risk, liquidity)
2. SCORE: recalculate score for each strategy = Sharpe × WVI_modifier × market_regime
3. RANK: sort top-N strategies for current WVI tier
4. DIFF: compare with current allocation — find delta
5. GATE: if delta > threshold (5% default) → execute rebalancing
6. EXECUTE: batch UserOps → on-chain → confirmation
7. LOG: record in on-chain journal (publicly verifiable)
```

---

#### 9.3.4 AI Engine Performance

| Metric | Value |
|--------|-------|
| Strategies in database | 800+ |
| Parametric combinations (ML optimization) | 1M+ |
| Recalculation frequency | every 15 minutes |
| Decision latency | <500ms |
| Data sources | 50+ on-chain + 12 off-chain |
| Supported networks | 7 EVM (ETH, Polygon, Arbitrum, Base, Optimism, BSC, Avalanche) |
| Backtest period | 36 months (2022–2025) |
| Sharpe Ratio (WVI 90+, backtest) | 2.7 |
| Max Drawdown (WVI 90+, backtest) | −7.2% |
| Avg emergency exit time | <60 seconds |

---

#### 9.3.5 WVI-Modifier for Allocation

WVI is not just a metric. It's a key to unlocking more aggressive strategies. Logic: a user with high WVI demonstrates discipline and long-term thinking → can accept higher risk for higher yield.

| WVI | Active strategies | Allocation | Avg Yield/mo | Ceiling/mo |
|:---:|:----------------:|-----------|:------------:|:----------:|
| 0–39 | 142 | 80% DeFi+RWA · 20% Arb | 0.6% | ~1% |
| 40–69 | 340 | 60% DeFi+RWA · 30% Arb · 10% Prediction | 2.1% | ~4% |
| 70–89 | 581 | 40% DeFi+RWA · 30% Arb · 30% Prediction | 5.8% | ~10% |
| 90–100 | 307 | 30% DeFi+RWA · 20% Arb · 50% Prediction | 11.4% | ~20% |

> ⚠️ **Disclaimer:** Target Monthly Yield is not a guarantee. Historical average from backtest: 0.6–11.4%/mo depending on WVI tier. Ceiling 20%/mo achieved when conditions align — WVI 90+, bull market, peak prediction events. Actual yield depends on market conditions. Dynamic Yield Cap automatically limits payouts when Sharpe < 1.0.

**What AI does autonomously:**

| Action | Conditions |
|--------|-----------|
| DeFi rebalancing | When deviation >5% from target |
| Auto-compound yield | Always (when activated $129) |
| Harvest rewards (CRV, COMP) | Always → convert to USDC |
| Cross-chain optimization | Yield differential >2% between networks |
| Gas optimization | UserOp batching, low-gas windows |
| Emergency exit | Depeg >2%, protocol exploit |

**What AI does NOT do (requires user approval):**

| Action | Reason |
|--------|--------|
| Withdraw to external address | Security |
| Allocation outside whitelist | Smart contract risk |
| Operations >25% of portfolio in 24h | Large movement protection |

**AI manages a unified WellexVault — no manual strategies. Yield is determined by user's WVI per the unified table.**

### 9.3 AI Insurance Agent

Automated insurance bot working with a licensed insurance agent in Cyprus:

| Function | Description |
|----------|-----------|
| **Risk Scoring** | Real-time deposit risk assessment |
| **Dynamic Pricing** | Personalized policy premium |
| **Claims Detection** | Automatic on-chain insured event detection |
| **Claims Processing** | Verification and payout calculation |
| **NFT Minting** | Issue NFT insurance policy certificates |

### 9.4 AI Agents in Dashboard

| Agent | Function |
|-------|----------|
| Growth Agent | Network analysis, recruitment recommendations |
| Analytics Agent | Yield reports, forecasts |
| Support Agent | FAQ, troubleshooting, onboarding |

---

## 10. PARTNER PROGRAM

### 10.1 Philosophy

**Wellex Partner Program — next-generation partner network** with transparent compensation plan. **10 ranks** (Explorer → Legend) and **10 levels of team depth**. Each rank unlocks the next depth level. ~5% of total deposits distributed to the network. All payouts on-chain.

### 10.2 Referral Rewards from Deposit

| Level | % of referral deposit | Description |
|-------|:-------------------:|-----------|
| L1 (direct) | 3.0% | You invited → deposit made |
| L2 | 1.5% | Your referral invited |
| L3 | 0.5% | Depth 3 |
| **Total** | **5.0%** | |

### 10.3 Fast Start Bonus

**+5% bonus from deposits** if you invite **3 users** with deposits within **15 days**.

### 10.4 Partner Income (monthly)

**Rule:** Partner Income is expressed **in $/month** and paid from **company revenue** (subscription + platform fee), **not** as "% of user yield".

| Level | Example | Partner Income, $/mo (est. range) |
|-------|---------|:-------------------------------:|
| L1 | 10 active Premium subs in L1 | $50–$150/mo |
| L2 | 50 active Premium subs in L1–L2 | $200–$600/mo |
| L3 | 150 active Premium subs in L1–L3 | $700–$2,000/mo |

*Note: actual amounts depend on retention, network structure, and program terms; parameters may be updated via governance.*

### 10.5 Leadership Tiers

| Tier | Condition | Bonus (payouts) |
|------|-----------|-----------------|
| **Partner** | 5+ L1 referrals | Base rewards |
| **Senior Partner** | 15+ L1, network ≥$50K | +$100–$300/mo |
| **Leader** | 30+ L1, network ≥$200K, WVI ≥60 | +$400–$1,200/mo + quarterly bonus $500–$2,000 |
| **Top Leader** | 50+ L1, network ≥$500K, WVI ≥70 | +$1,500–$5,000/mo + Leadership Pool (quarterly) |

### 10.6 Ethical Guarantees

- ❌ No mandatory purchases
- ❌ No entry fees
- ❌ No inventory loading
- ✅ Income only from real deposits
- ✅ All payouts on-chain
- ✅ Max depth: 10 levels (each rank unlocks next level)

---

## 11. MONETIZATION

### 11.1 Platform Revenue Streams

| Stream | Description | Scale |
|--------|-----------|-------|
| **Subscription** | $19/mo (AI Coach + free bracelet) | Primary recurring |
| **Reinvest fee** | $129 one-time for auto-compound | One-time |
| **Yield fee** | 15% of gross yield | Ongoing |
| **Insurance premium** | 10–20% of deposit (opt-in) | One-time |

### 11.2 Subscription $19/mo

| Includes | Basic ($0) | Premium ($19/mo) |
|----------|:---------:|:---------------:|
| WVI calculation (no bracelet) | ✅ (manual) | ✅ |
| **Wellex Band** | ❌ | ✅ Free |
| Base yield | ✅ | ✅ |
| Full AI Coach | ❌ | ✅ |
| Detailed analytics | ❌ | ✅ |
| Yield boost | ❌ | ✅ |
| Priority support | ❌ | ✅ |

### 11.3 Auto-Compound ($129)

One-time activation of automatic yield reinvestment. AI Wallet Agent automatically reinvests payouts back to WellexVault — no user action.

---

## 12. SECURITY

### 12.1 Four-Layer Architecture

```
Layer 1: SMART CONTRACT LIMITS
├── Protocol whitelist (governance update)
├── Max transaction size
├── Daily volume cap (25% of portfolio)
├── Timelock 1h on operations >10%
└── Emergency pause (multisig 2-of-3)

Layer 2: AI GUARDRAILS
├── Risk scoring each transaction (1-100)
├── Anomaly detection
├── Pre-execution simulation (Tenderly)
└── Reject risk >70 without approval

Layer 3: USER CONTROLS
├── Pause Agent (instant AI halt)
├── Override AI decisions
├── Custom limits
├── Notifications (Telegram/Push)
└── Full manual mode

Layer 4: PLATFORM SAFEGUARDS
├── Multisig 3-of-5 for upgrades
├── 48h timelock on contract upgrades
├── Circuit breaker (TVL drop >20%)
└── Real-time monitoring (Forta)
```

### 12.2 Audits

| Audit | Firm | Frequency |
|-------|------|-----------|
| Smart contract | Trail of Bits + OpenZeppelin | Pre-launch + updates |
| Economic | Gauntlet | Quarterly |
| Oracle | Chainlink | Pre-launch |
| Pentest | Immunefi (bug bounty $250K) | Continuous |

### 12.3 Proof of Reserves

- **Chainlink PoR Oracle** — vaults backed 1:1
- **Real-time dashboard** — TVL, allocations, yield, Insurance Fund
- **Polygonscan** — all code verified
- **Monthly report** — public transparency

### 12.4 Bank Run Protection

| Mechanism | Description |
|-----------|-----------|
| Rate limits | Max 5% TVL/hour, 15%/day, 40%/week |
| Withdrawal queue | FIFO if limits reached |
| Liquidity buffer | 5–15% in liquid stables |
| Circuit breaker | Pause if TVL drops >20% in 24h |
| Emergency governance | Multisig 3-of-5 → 72h pause |
| Transparency dashboard | Real-time liquidity, queue, health |

---

## 13. GAMIFICATION

### 13.1 Ranks (Wellness Ranks)

Cumulative, non-decreasing:

| Rank | Requirement | Reward |
|------|-----------|--------|
| 🌱 Seedling | Activated bracelet | Welcome NFT |
| 🌿 Sprout | 7 days Score ≥ 30 | Yield bonus |
| 🌳 Tree | 30 days ≥ 40 | NFT badge + yield boost |
| 🌲 Evergreen | 90 days ≥ 50 | Unique avatar + yield boost |
| ⛰️ Summit | Score ≥ 80, 30 days | Yield bonus +3% |
| ⭐ Stellar | Score ≥ 90, 60 days | Yield bonus +5% |
| 💎 Diamond | All achievements + ≥ 90, 90 days | Exclusive physical gift + yield bonus |

### 13.2 NFT Badges

**Soulbound** (non-transferable) — no speculation, just pride.

Categories: Activity, Sleep, Mindfulness, Community, Streak, Season.

**Utility:** each badge +0.5% to yield (max +5% from badges).

### 13.3 Seasonal Challenges (3 months)

| Season | Theme | Main Challenge | Top 100 Reward |
|--------|-------|-----------------|--------------|
| S1 (summer) | ☀️ "Solar Energy" | 300 hours activity | Gold NFT + yield boost |
| S2 (fall) | 🧠 "Inner Balance" | Avg WVI ≥70 | Emerald NFT + yield boost |
| S3 (winter) | ❄️ "Steel Will" | 0 missed days + WVI ≥60 | Platinum NFT + USDC reward |
| S4 (spring) | 🌸 "Rebirth" | Improve WVI +20 from start | Phoenix NFT + USDC reward |

### 13.4 Leaderboards

| Type | Period | Rewards |
|------|--------|---------|
| Global Wellness | Monthly | Top 10: USDC reward |
| Regional | Monthly | Top 5 per region: USDC reward |
| Improvement | Monthly | Biggest gainer: USDC reward |
| Team | Monthly | Best team: USDC reward |
| Season | Quarterly | Top 100: seasonal NFT |

---

## 14. FINANCIAL MODEL

### 14.1 Unit Economics (subscriber)

| Metric | Value |
|--------|-------|
| Subscription | $19/mo × 19.8 mo avg retention = $376 |
| Yield fees (15% of gross yield) | +$50 |
| Reinvest fee ($129 × 35% conversion) | +$45 |
| Bracelet COGS (free) | −$58 |
| **Blended CLV (Markov chain)** | **$461** |

*Note: CLV calculated via Markov chain with 4 states (Subscriber / Staker / Partner / Churned). Retention-adjusted. Details: WELLEX_ULTIMATE_ANALYSIS.md, section 20.*

### 14.2 Unit Economics (Yield User, $10K deposit)

WVI = 78 → Monthly Yield 12%.

Gross monthly yield: $1,200
— Platform fee (15%): −$180
= Net yield to user: $1,020/mo (~$12,240/year)

### 14.3 Revenue Streams

| Stream | Description |
|--------|-------------|
| Subscription $19/month | Core recurring revenue. Bracelet free with subscription |
| Yield fee (15%) | 15% of gross yield retained by platform |
| Auto-compound ($129) | One-time activation of auto-reinvest |
| B2B Enterprise | Corporate wellness programs (Year 2+) |

### 14.4 Key Principle

Subscription revenue is **not directed into the Yield Pool**. The Yield Reserve is formed exclusively from real DeFi yield. This guarantees model sustainability.

> ⚠️ *Target Yield is not a guarantee. Actual yield depends on DeFi market conditions and Dynamic Yield Cap.*
- Subscriptions: $125K/mo (at 50K active)
- Auto-compound fees: $50K/mo
- Total protocol revenue: ~$1.07M/mo

---

## 15. GO-TO-MARKET

### 15.1 Regional Strategy

| Phase | Regions | Why | Timeline |
|-------|---------|-----|----------|
| Launch | CIS, Turkey | High demand for supplementary income, wellness trend | 0–6 months |
| Expansion 1 | SEA (Indonesia, Philippines) | Crypto adoption, M2E popularity | 6–12 months |
| Expansion 2 | LATAM (Brazil, Mexico) | Wellness culture, crypto enthusiasm | 12–18 months |
| Expansion 3 | EU, USA | Premium segment, B2B corporate | 18–36 months |

### 15.2 Marketing

**Influencers:**

| Tier | Reach | Count | Budget |
|------|-------|-------|--------|
| Mega (1M+) | Wellness + crypto | 3 | $300K |
| Macro (100K–1M) | Fitness, biohacking | 15 | $200K |
| Micro (10K–100K) | Niche wellness | 50 | $100K |
| Nano (1K–10K) | Crypto communities | 100 | $50K |

**Channels:** KOL partnerships, App Store optimization, performance marketing, community ambassador program, corporate partnerships (B2B pilot).

### 15.3 Target Audience

| Segment | Age | Motivation | Product Entry Point |
|---------|-----|-----------|---------------------|
| Wellness enthusiasts | 25–40 | Health + income | Subscription + AI Coach |
| Crypto users | 20–35 | Yield + innovation | Yield Protocol |
| Network entrepreneurs | 25–45 | Partner income | Partner network |
| Corporations (B2B) | — | Employee wellness programs | Enterprise |

---

## 16. ROADMAP

### Overview 2026–2029

| Phase | Timeline | Outcome |
|-------|----------|---------|
| **MVP Sprint** | Mar 15 – Apr 15, 2026 | Working product on testnet, brand, alpha app |
| **Audit & Mainnet** | Apr 15 – May 15, 2026 | Audit complete, mainnet deploy |
| **Scale & TVL** | May 15 – Jun 15, 2026 | TVL $5M, 5K subscribers, on-ramp live |
| **Growth** | Jun – Dec 2026 | Multi-chain expansion, TVL $50M, 100K users, DEX + on-ramp partnerships |
| **Expansion** | 2027 | Multi-chain, B2B, SEA + LATAM, TVL $150M |
| **Institutional** | 2028 | Institutional DeFi, Wellex Card, TVL $500M |
| **Global Protocol** | 2029 | TVL $1B+, 1M users, IPO-ready |

### Quarterly Milestones

| Quarter | Milestones |
|---------|-----------|
| **Q2 2026** | MVP: APP (wellness + community) + WEB (WellexVault + card on-ramp) + Wellex Band + ETH + Polygon |
| **Q3 2026** | Multi-chain expansion (Arbitrum, Optimism, Base), AI coach v2, partner program |
| **Q4 2026** | BSC + Avalanche, B2B pilot, Emotional Mining public launch |
| **Q1–Q2 2027** | Enterprise API, expansion to 5 markets, DEX partnerships |
| **Q3–Q4 2027** | Wellex Band v2, Wellex Ring, scaling |
| **2028** | Partner ecosystem, 300K+ subscribers, Emotional Mining — industry standard |
| **2029** | TVL $1B+, institutional clients, IPO-ready infrastructure |

*Full detailed roadmap: [12_ROADMAP.md](12_ROADMAP.md)*

---

## 17. LEGAL STRUCTURE

### 17.1 Corporate Structure

- **Wellex Foundation** — parent entity, IP ownership, governance
- **Wellex Labs Ltd** — operating company, product development
- **Wellex Insurance Services Ltd** — licensed insurance agent (Cyprus, EU-regulated)
- **Off-chain governance** — Snapshot voting for protocol parameters (no on-chain DAO token)

### 17.2 Licensing

| License | Jurisdiction | Status |
|---------|-------------|--------|
| VASP | EU (MiCA) | Filing Q2 2026 |
| Insurance Agent (IDD) | Cyprus / EU | Filing Q1 2026 |
| MiCA CASP | EU (via Cyprus regulator) | Filing Q4 2026 |

### 17.3 Compliance

| Aspect | Solution |
|--------|---------|
| KYC/AML | Sumsub + Chainalysis. 4 verification tiers |
| Travel Rule | Notabene for transactions >$1,000 |
| GDPR | E2E encryption, DPO appointed, DPIA conducted |
| MiCA (EU) | CASP authorization via Cyprus financial regulator |
| Data Residency | User data processed in EU jurisdiction |

### 17.4 Token Policy

Wellex **does not issue a proprietary ERC-20 token**. No TGE, no buyback/burn schemes. Model sustainability = real DeFi yield + USDC payouts.

---

## 18. TEAM

### 18.1 Current Team

| Role | Focus |
|------|-------|
| **Founder & CEO** | Strategy, partnerships, product vision |
| **Product Team** | Mobile app, web platform, UX |
| **DeFi Engineering** | Smart contracts, yield protocols, security |
| **AI/ML Team** | Yield engine, AI coach, anomaly detection |
| **Hardware R&D** | Wellex Band design, sensor algorithms |
| **Business Development** | Partnerships, B2B, regional expansion |

### 18.2 Target Structure

| Role | Priority | Timeline |
|------|----------|----------|
| CTO | 🔴 Critical | Month 1 |
| CMO | 🔴 Critical | Month 2 |
| Head of Hardware | 🔴 Critical | Month 1 |
| Medical Advisor | 🟡 High | Month 2 |
| Legal Counsel (EU) | 🟡 High | Month 1 |
| Head of Compliance | 🟡 High | Month 3 |

### 18.3 Advisory Board

| Role | Focus |
|------|-------|
| DeFi Advisor | Protocol architecture, yield strategy |
| Wellness Industry Advisor | Product-market fit, clinical validation |
| Regulatory Advisor | MiCA compliance, EU licensing |
| Hardware Advisor | Wearable manufacturing, sensor calibration |

---

## 19. INSURANCE PROTECTION

### 19.1 Two-Layer System

Wellex offers a **unique licensed insurance protection** for DeFi deposits:

1. **Licensed Insurance Agent** (Wellex Insurance Services Ltd, Cyprus) — EU-regulated, legal liability
2. **AI Insurance Agent** — automated underwriting, risk scoring, claims processing 24/7

### 19.2 Policy Types

| Policy | Coverage | Premium | Term |
|--------|---------|---------|------|
| Basic Shield | Protocol failure + exploit | 10% of deposit | 3 years |
| Standard Protection | + oracle manipulation + yield cessation | 15% of deposit | 5 years |
| Premium Cover | + partial stablecoin depeg | 20% of deposit | 5 years |

### 19.3 Payout Formula

`Payout = Deposit − Income Received` (min $0)

### 19.4 On-Chain Insurance Fund

| Parameter | Value |
|-----------|-------|
| **Sources** | 10% of yield payouts + early withdrawal penalties + 5% protocol revenue + $500K seed |
| **Target size** | 8–12% of TVL |
| **Allocation** | 60% Aave USDC, 30% Ondo USDY, 10% multisig |
| **Covers** | Smart contract exploit (100%), stablecoin depeg (80%), oracle manipulation (100%) |
| **Does not cover** | IL, market risk, user errors |

### 19.5 NFT Insurance Policies

Each policy is a **Soulbound NFT** with metadata on IPFS, verifiable on-chain. NFT records: policy type, coverage amount, term, claim history.

*Full mechanics: [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md)*

---

## 20. RISKS AND MITIGATION

| # | Risk | Probability | Impact | Mitigation |
|---|------|-------------|--------|-----------|
| 1 | Crypto market downturn | High | Medium | Real product (bracelet + subscription), stablecoin yield |
| 2 | Biometric spoofing | Low | High | TEE + ML anomaly detection + HRV fingerprint |
| 3 | Competition (Oura, Whoop, STEPN) | Medium | Medium | Unique value: yield + wellness + AI + free bracelet |
| 4 | Smart contract exploit | Low | Critical | Trail of Bits + OpenZeppelin audits, $250K Immunefi bounty |
| 5 | Regulatory crackdown | Medium | High | MiCA compliance-first, Cyprus insurance license, GDPR |
| 6 | Stablecoin depeg | Low | High | Portfolio diversification, depeg detector, Insurance Fund |
| 7 | Oracle manipulation | Low | High | Chainlink + backup oracles, circuit breaker |
| 8 | Bank run | Low | Critical | Rate limits, withdrawal queue, liquidity buffer, circuit breaker |
| 9 | Hardware supply chain | Medium | Medium | Dual-source manufacturing, 6+ week buffer stock |
| 10 | Slow adoption | Medium | High | Free bracelet lowers barrier, aggressive KOL marketing |
| 11 | DeFi protocol failure | Low | High | Whitelist of audited protocols, 100% Insurance Fund coverage |
| 12 | AI engine underperformance | Medium | Medium | 36-month backtest validation, dynamic yield cap, fallback to conservative allocation |

### Risk Management Philosophy

Wellex applies a **multi-layer risk philosophy**: every risk has at least two independent mitigations. The Insurance Fund acts as the last line of defense. Transparency dashboard enables users to monitor protocol health in real time.

---

## 21. CONCLUSION

Wellex creates a new category — **Wellness-as-Yield**. For the first time in history, caring for one's health directly converts into financial income through transparent, audited DeFi strategies.

### Key Advantages

| # | Advantage | Description |
|---|-----------|-------------|
| 1 | ✅ Emotional Mining | New industry: wellness → verifiable biometrics → DeFi yield |
| 2 | ✅ WVI (0–100) | Single health scale → yield 0–20% per month |
| 3 | ✅ Free Bracelet | $0 with $19/mo subscription — minimal entry barrier |
| 4 | ✅ AI Optimization | AI Wallet Agent + AI Coach + AI Insurance Agent |
| 5 | ✅ Licensed Insurance | Cyprus (EU) + AI Agent — unique in DeFi |
| 6 | ✅ Soulbound NFT Badges | Gamification without speculation — achievements, not tokens |
| 7 | ✅ Multi-EVM + Card On-Ramp | 7 blockchains + Visa/MC/Apple Pay — no barrier for fiat users |
| 8 | ✅ Compliance-First | MiCA, GDPR, KYC/AML, Travel Rule — from day one |
| 9 | ✅ Partner Network | 5% of deposit, 10 ranks, 10 levels deep |
| 10 | ✅ Proprietary Technology | Hardware, algorithms, AI — full control of the stack |

### Market Scale

Wellex operates at the intersection of three markets totaling $6.3T+ (wellness) + $195B+ (DeFi TVL) + $82B (wearables). The Emotional Mining category is new — no analogues exist.

### Vision

**Wellex is not just an application. It is a protocol that makes a healthy lifestyle financially rewarding.** Every step, every minute of sleep, every moment of calm — all have value. Wellex converts that value into real income.

The era of data that works only for corporations is over. With Wellex, your biometrics work for you.

---

> **Wellex Protocol © 2026**
> Whitepaper v4.0 | February 2026
> Confidential — For Authorized Recipients Only
>
> *All yield metrics are projections and may vary depending on market conditions.*
> *This document is not an investment offer.*

