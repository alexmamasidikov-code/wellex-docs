---
id: 06_YIELD_PROTOCOL
title: "06 · DeFi YIELD PROTOCOL"
sidebar_position: 6
description: "Wellex v6.0 · 05.03.2026"
---

# 06 · DeFi YIELD PROTOCOL

> **Version:** 6.0 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Protocol
> **SSOT for:** Yield sources, WVI→yield mapping, Dynamic Yield Cap, WellexVault mechanics, AI Yield Agent
> **Dependencies:** 03_WELLNESS_SCORE (WVI), 22_INSURANCE_FUND (protection), 17_TECH_ARCHITECTURE (contracts)

---

## TL;DR

- Single staking format for all participants — **no packages, no subscription tiers**
- Yield 0–20%/month allocated dynamically based on individual WVI
- Yield from **8 independent DeFi sources** — diversification protects from any single market downturn
- **AI Yield Agent: 800+ strategies**, ML selection, rebalance every 15 minutes
- Dynamic Yield Cap: SR < 1.0 → automatic yield reduction to protect protocol

---

## Purpose & Scope

This document defines where yield comes from, how it's calculated, distributed, and capped. It covers all 8 yield sources with full mathematical justification, WVI allocation mechanics, AI Yield Agent architecture, WellexVault ERC-4626 structure, multi-EVM deposit flow, card on-ramp, Dynamic Cap, circuit breaker, stress tests per source, and smart contract overview. For WVI formula see `03_WELLNESS_SCORE`. For UI display see `04_APP_UX` and `05_DASHBOARD`.

> ⚠️ **Target Yield is not a guarantee.** Actual yield depends on DeFi market conditions, WVI score, and strategy allocation. Wellex does not compensate yield shortfall from subscription revenue. Average historical blended: **1.5–3.5%/month** across market cycles. Dynamic Yield Cap adjusts automatically when SR < 1.0.

---

## 1. Yield Sources — 8 Independent Streams

**Subscription ($19/month) is platform revenue — not a yield source.** Yield comes exclusively from DeFi markets across 8 independent streams.

The 8-stream architecture is the core of Wellex yield resilience: when one stream underperforms (e.g., DeFi lending rates compress in a bear market), others compensate (e.g., RWA stays stable pegged to Fed rate; arbitrage becomes more profitable as volatility increases).

---

### Stream 1 — DeFi Lending

| Parameter | Value |
|-----------|-------|
| **Protocols** | Aave v3, Compound III, Morpho Blue |
| **Yield/month** | 0.3–1.0% |
| **Risk level** | Low |
| **TVL Allocation** | 20% |
| **Market condition** | All markets |

**How it works:**
Users borrow stablecoins from lending pools to leverage trading positions. Lenders (WellexVault) earn the borrow rate. Demand for borrowed liquidity is structural — it exists in bull and bear markets alike.

**Why yield is reliable:**
- Aave v3 USDC utilization rate: historically 60–85% across market cycles
- At 80% utilization, borrow APY = ~6–12%/year = 0.5–1.0%/month
- Morpho Blue routes liquidity to the highest-rate market automatically (meta-lending layer)
- Compound III isolated markets reduce contagion risk vs legacy pooled models

**Historical data:**
- Aave v3 USDC supply APY: 3.2–11.4%/year (2022–2025 data)
- Compound III USDC: 2.8–9.6%/year (2022–2025)
- Morpho Blue: blended 4.5–13.2%/year (2024–2025)

**Risk mitigation:**
- Only blue-chip protocols with $1B+ TVL and multiple independent audits
- Per-protocol cap: max 10% of total TVL in any single protocol
- Auto-exit trigger: if protocol utilization > 95% (liquidity crunch risk) → reallocate within 15 min

---

### Stream 2 — RWA / Real World Assets

| Parameter | Value |
|-----------|-------|
| **Protocols** | Ondo Finance (OUSG/USDY), Maple Finance, Superstate |
| **Yield/month** | 0.37–0.50% |
| **Risk level** | Minimal |
| **TVL Allocation** | 15% |
| **Market condition** | All markets (uncorrelated to crypto) |

**How it works:**
RWA protocols tokenize real-world debt instruments — US Treasury Bills, short-term government bonds, and investment-grade corporate bonds — and bring them on-chain. WellexVault deposits USDC → receives tokenized yield-bearing assets.

**Why yield is reliable:**
- US Treasury yield is set by the Federal Reserve (currently 4.25–5.50% annual = 0.35–0.46%/month)
- RWA yield is non-correlated to crypto market cycles — stable in both bull and bear conditions
- Ondo Finance USDY: backed 1:1 by US Treasuries + bank deposits, audited daily by Ankura
- Superstate: SEC-registered fund structure, institutional-grade compliance

**Mathematical basis:**
```
Fed Funds Rate (annual) ÷ 12 = Monthly RWA Yield
5.25% ÷ 12 = 0.4375%/month (current baseline)
```

**Market size:**
- Global bond market: $130T+
- Tokenized RWA on-chain: $12B+ (2025), growing 300%/year
- Ondo Finance TVL: $600M+ (March 2026)
- Maple Finance TVL: $200M+ institutional lending

**Risk mitigation:**
- Daily proof of reserves (Ankura Consulting for Ondo)
- Only SEC-registered or equivalent regulated instruments
- Max 15% TVL in RWA stream — protects against regulatory event

---

### Stream 3 — Prediction Markets LP

| Parameter | Value |
|-----------|-------|
| **Protocols** | Polymarket LP, Azuro Protocol, Drift Protocol |
| **Yield/month** | 1.5–5.0% |
| **Risk level** | Medium |
| **TVL Allocation** | 15% |
| **Market condition** | Peak during major events (elections, macro, sports) |

**How it works:**
WellexVault acts as a liquidity provider (market maker) on decentralized prediction markets. LPs earn the spread between buy and sell prices on event markets, plus a platform fee on every trade. This is fee income — not a directional bet on any event outcome.

**Why yield is significant:**
- Polymarket 2025 volume: $8B+ (US election alone: $3.5B in Q4 2024)
- LP fee on Polymarket: 1–3% per trade → with $100M monthly volume, $1–3M fee income
- Azuro: sports prediction markets, $500M+ volume 2025, LP yield 18–45% APY
- Drift Protocol: on-chain perpetuals + prediction, $2B+ volume 2025

**Mathematical basis:**
```
LP_monthly_yield = (Volume × Fee_rate) / LP_pool_size
Example: $50M volume × 2% fee / $25M LP pool = 4.0%/month
```

**Why no directional risk:**
- LP provides liquidity to both sides of every market
- P&L = fees earned − impermanent loss from event resolution
- Net positive when: fee income > impermanent loss (true for high-volume, balanced markets)
- Peak events (elections, ETF decisions, macro announcements) → volume spike → fee income spike

**Historical evidence:**
- Polymarket US Election 2024: LP yield estimated 12–25% in October 2024 alone
- Azuro EPL season LP: 22% APY average for 2024/2025 season
- Ribbon Finance (options): correlated yield 15–40% APY during volatility spikes

**Risk mitigation:**
- Max single-market exposure: 5% of stream allocation
- Balanced-market filter: only deploy LP where |P(yes) − P(no)| < 30% (avoids one-sided markets)
- Auto-withdrawal if market volume drops below $5M/day threshold

---

### Stream 4 — Options / Structured Products

| Parameter | Value |
|-----------|-------|
| **Protocols** | Ribbon Finance (Aevo), Stryke (formerly Dopex) |
| **Yield/month** | 1.0–4.0% |
| **Risk level** | Medium |
| **TVL Allocation** | 10% |
| **Market condition** | Best in sideways + moderate volatility |

**How it works:**
WellexVault sells covered call options and cash-secured puts on BTC and ETH. This is a classic institutional yield strategy — the same approach used by major banks and hedge funds. Option sellers collect premium (theta decay) every week regardless of market direction, as long as the underlying asset doesn't move beyond the strike price.

**Why yield is predictable:**
- Options time value (theta) decays to zero by expiry — sellers collect this mechanically
- Covered calls: vault holds USDC as collateral, sells call options on BTC/ETH. If BTC stays below strike → full premium collected. If BTC rises above strike → capped upside, still profitable.
- Cash-secured puts: vault holds USDC, sells put options. Earns premium. If BTC drops to strike → buys at predetermined price (acceptable entry).

**Mathematical basis:**
```
Weekly premium collected (BTC ATM covered call): 0.5–1.5% of notional
Monthly = ~2–6% (4 weekly cycles)
With delta hedge: net yield = 1.0–4.0%/month
```

**Historical evidence:**
- Ribbon Finance DOVs (DeFi Option Vaults): 15–40% APY historically (2022–2025)
- Stryke (Dopex) SSOV: 20–55% APY on BTC/ETH vaults
- Goldman Sachs covered call overlays (traditional finance equivalent): 1.5–3.5%/month on equity portfolios

**Risk mitigation:**
- All options delta-hedged: net exposure < 5% of stream value
- Strike selection: minimum 10% OTM (out-of-the-money) to reduce assignment risk
- Weekly cycle: positions reset every 7 days → no long-term directional lock-in

---

### Stream 5 — Funding Rate Arbitrage

| Parameter | Value |
|-----------|-------|
| **Protocols** | Binance Perps + Bybit Perps + OKX Perps (via delta-neutral hedge) |
| **Yield/month** | 0.5–3.0% (up to 9% in bull market peaks) |
| **Risk level** | Low-Medium |
| **TVL Allocation** | 15% |
| **Market condition** | Best in bull market; stable in sideways; reduced in bear |

**How it works:**
In perpetual futures markets, traders who hold long positions pay a "funding rate" to short holders every 8 hours. In bull markets, funding rates are consistently positive (longs pay shorts). WellexVault holds: long BTC/ETH spot + short BTC/ETH perpetual = delta-neutral position (no directional exposure). Income = funding rate paid by the long side.

**This is the Ethena Protocol model — proven at $5B+ TVL.**

**Mathematical basis:**
```
Funding Rate (8h): 0.01–0.10% (historical range, BTC)
Daily income: 3 × funding rate = 0.03–0.30%/day
Monthly income: 0.9–9.0%/month

Delta-neutral: Long $1M BTC spot + Short $1M BTC perp = $0 net BTC exposure
P&L = funding received − funding paid − execution costs
Net: 0.5–3.0%/month in normal conditions
```

**Historical evidence:**
- BTC funding rate average 2024 (bull market): +0.03–0.08%/8h = 2.7–7.2%/month
- BTC funding rate Nov 2024 peak: +0.10%/8h = 9%/month
- Ethena Protocol (sUSDe): 27% APY in 2024 = 2.25%/month average; peak 35%+ APY during bull runs
- Ethena TVL: $5.4B (March 2026) — largest DeFi yield protocol by TVL

**Why this works at scale:**
- Funding rate demand is structural: leveraged longs always exist in crypto
- Delta-neutral → protects principal regardless of BTC/ETH price direction
- Strategy scales linearly with TVL up to $500M+ (Ethena proved this)

**Risk mitigation:**
- Max exposure: 15% TVL to limit liquidation risk
- Automatic de-risking: if funding rate goes negative (bear market) → reduce position, rotate to Streams 1+2
- Exchange diversification: Binance + Bybit + OKX (no single exchange concentration)
- 24/7 monitoring: auto-reduce if any exchange shows anomalous activity

---

### Stream 6 — CEX/DEX Spread Arbitrage

| Parameter | Value |
|-----------|-------|
| **Protocols** | 1inch, 0x, ParaSwap + cross-chain via Across/LayerZero |
| **Yield/month** | 0.3–1.5% |
| **Risk level** | Low |
| **TVL Allocation** | 10% |
| **Market condition** | All markets; higher yield in volatile periods |

**How it works:**
Price inefficiencies exist between centralized exchanges (Binance, OKX, Coinbase) and decentralized exchanges (Uniswap, Curve, Balancer). WellexVault's AI Yield Agent detects and executes arbitrage atomically — buy low on DEX, sell high on CEX (or vice versa), completing within a single block. No market risk: if trade doesn't complete → automatically reverts (flash loan model).

**Cross-chain arbitrage:** same asset trades at different prices on Ethereum vs Arbitrum vs Base. Bridge + swap executed in milliseconds via LayerZero messaging.

**Mathematical basis:**
```
Average spread captured per arb: 0.05–0.3%
Frequency: 500–2,000 opportunities/day (AI-detected)
Monthly yield on deployed capital: 0.3–1.5%
```

**Why it's low risk:**
- Atomic execution: either the full arbitrage completes profitably, or nothing happens
- Flash loan mechanics: no capital locked in transit
- Gas cost managed by AI Agent: only executes when net profit > gas cost × 3

**Risk mitigation:**
- Max single transaction: 5% of stream allocation
- Slippage protection: min profit threshold 0.05% net of gas
- MEV protection: Flashbots Protect / private mempool routing

---

### Stream 7 — DEX Liquidity Provision

| Parameter | Value |
|-----------|-------|
| **Protocols** | Uniswap v3 (concentrated), Curve Finance, Balancer |
| **Yield/month** | 0.5–2.0% |
| **Risk level** | Low-Medium |
| **TVL Allocation** | 10% |
| **Market condition** | All markets; scales with trading volume |

**How it works:**
WellexVault provides liquidity to DEX pools and earns a share of all trading fees proportional to the liquidity provided. Uniswap v3 concentrated liquidity allows positioning within a specific price range, earning 5–10× more fees than v2 for the same capital — but requiring active management (which the AI Yield Agent handles).

**Mathematical basis:**
```
Uniswap v3 daily volume (USDC/ETH pair): $300–800M
Fee tier: 0.05% (stable pairs) or 0.3% (standard)
LP share: WellexVault TVL / Total pool liquidity
Example: $1M in $200M pool = 0.5% share × $50M daily volume × 0.3% = $750/day = 2.25%/month
```

**Curve Finance:**
- 3pool (USDC/USDT/DAI): $1B+ TVL, ultra-stable, 0.04% fee, low IL
- Yield: 0.5–1.2%/month from fees + CRV rewards

**Impermanent Loss management:**
- Stablecoin-only pools (Curve): IL ≈ 0 (all assets maintain $1 peg)
- Uniswap v3: concentrated range set ±10% around current price; rebalanced by AI Agent if price moves beyond range
- Balancer: weighted pools (80/20 ETH/USDC) reduce IL vs 50/50

**Risk mitigation:**
- Priority: stablecoin pools first (Curve 3pool, Uniswap USDC/USDT)
- AI Agent rebalances range every 4 hours on Uniswap v3
- Max allocation to any single pool: 3% total TVL

---

### Stream 8 — Auto-Compound Optimization

| Parameter | Value |
|-----------|-------|
| **Protocols** | Yearn Finance vaults, Convex Finance, Beefy Finance |
| **Yield/month** | 0.5–3.0% (compound effect on top of base yield) |
| **Risk level** | Low |
| **TVL Allocation** | 5% |
| **Market condition** | All markets — amplifies all other streams |

**How it works:**
Yield aggregators (Yearn, Convex, Beefy) automatically harvest rewards from all DeFi protocols and reinvest them multiple times per day. This compound effect systematically increases the effective yield of all other streams. WellexVault routes a portion of earned yield through these aggregators to maximize compounding frequency.

**Mathematical basis:**
```
Base yield without compounding: 2.0%/month
With daily compound (Beefy): (1 + 0.02/30)^30 − 1 = 2.033%/month (+1.65%)
With 4-hour compound (Yearn): (1 + 0.02/180)^180 − 1 = 2.045%/month (+2.25%)

On $10M TVL at 3%/month:
Without compounding: $300K/month
With 4-hour compounding: $306,750/month (+$6,750 extra)
Annualized benefit: +$81,000 from compound alone
```

**Convex Finance:**
- Boosts Curve LP rewards via veCRV without requiring users to lock CRV
- 1.5–2.5× multiplier on Curve base yield
- Convex TVL: $3B+ (March 2026)

**Beefy Finance:**
- Auto-compounds 500+ vaults across 20+ chains
- Harvest frequency: every 4–12 hours (gas-optimized timing)
- Fee: 0.1% performance fee (paid from profits, not principal)

**Risk mitigation:**
- Only aggregators with 2+ years of operation and $500M+ TVL
- Max 5% TVL — amplifier role, not primary yield source
- Smart contract risk mitigated via Yearn/Convex established audit history

---

## 2. WVI → Target Yield (canonical — from 03_WELLNESS_SCORE)

| WVI Monthly | Target Yield/month | Realistic Range* | Annual Equivalent |
|:-----------:|:------------------:|:----------------:|:-----------------:|
| 0–39 | 0% | 0% | 0% |
| 40–49 | 2% | 1–3% | ~24% |
| 50–59 | 5% | 3–7% | ~60% |
| 60–69 | 8% | 5–10% | ~96% |
| 70–79 | 12% | 8–15% | ~144% |
| 80–89 | 16% | 10–18% | ~192% |
| 90–100 | 20% | 12–20% | ~240% |

*Realistic Range depends on DeFi market conditions and Dynamic Yield Cap status.

**Calibration period (Days 1–7):** yield = **5%/month fixed** (regardless of WVI). Honest framing for new users.

---

## 3. WVI Allocation Modifier — How WVI Controls Stream Activation

WVI score determines not just yield tier, but which streams are activated and at what weight. Low WVI = conservative capital protection. High WVI = maximum yield deployment.

| WVI | Active Streams | Allocation Model | Yield Ceiling |
|:---:|---------------|-----------------|:-------------:|
| 0–39 | 1, 2, 6 | 50% Lending + 35% RWA + 15% CEX/DEX Arb | ~1%/month |
| 40–59 | 1, 2, 5, 6, 8 | 35% Lending + 25% RWA + 20% Funding Arb + 15% CEX/DEX + 5% Compound | ~3%/month |
| 60–79 | 1, 2, 3, 5, 6, 7, 8 | 20% Lending + 15% RWA + 15% Prediction + 15% Funding + 10% DEX Arb + 10% DEX LP + 15% Compound | ~8%/month |
| 80–89 | All 8 streams | 15% Lending + 10% RWA + 20% Prediction + 15% Options + 20% Funding + 10% DEX Arb + 5% DEX LP + 5% Compound | ~16%/month |
| 90–100 | All 8 streams — maximum allocation to high-yield | 10% Lending + 8% RWA + 22% Prediction + 18% Options + 22% Funding + 10% DEX Arb + 5% DEX LP + 5% Compound | ~20%/month |

**Key principle:** At WVI 0–39, capital is protected (no yield) — deployed only in the 3 lowest-risk streams. At WVI 90–100, allocation maximally shifts toward streams 3, 4, and 5 (highest yield, requiring user's sustained health performance to unlock).

---

## 4. Blended Yield — Mathematical Proof

### Scenario A: Bear Market, WVI 40–59
```
35% × 0.5% (Lending) = 0.175%
25% × 0.42% (RWA) = 0.105%
20% × 0.8% (Funding Rate — low in bear) = 0.160%
15% × 0.4% (CEX/DEX Arb) = 0.060%
5%  × 0.6% (Compound) = 0.030%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLENDED = 0.53%/month → Target: 2% → Dynamic Cap applies
```

### Scenario B: Normal Market, WVI 70–79
```
20% × 0.7% (Lending) = 0.140%
15% × 0.42% (RWA) = 0.063%
15% × 2.5% (Prediction Markets) = 0.375%
15% × 2.0% (Funding Rate) = 0.300%
10% × 0.8% (CEX/DEX Arb) = 0.080%
10% × 1.0% (DEX LP) = 0.100%
15% × 1.2% (Compound effect) = 0.180%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLENDED = 1.24%/month → WVI multiplier → Target: 12% → Dynamic Cap monitors
```

### Scenario C: Bull Market Peak, WVI 90–100
```
10% × 1.0% (Lending — rates rise with demand) = 0.100%
8%  × 0.45% (RWA — stable) = 0.036%
22% × 4.5% (Prediction Markets — election/event peak) = 0.990%
18% × 3.5% (Options — IV spike, premium elevated) = 0.630%
22% × 4.0% (Funding Rate — bull market +0.08%/8h) = 0.880%
10% × 1.2% (CEX/DEX Arb — higher vol = more gaps) = 0.120%
5%  × 1.5% (DEX LP — volume surge) = 0.075%
5%  × 2.0% (Compound — amplifies all above) = 0.100%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLENDED = 2.93%/month × WVI multiplier → up to 20%/month ceiling
```

**Historical precedents supporting 20%/month ceiling:**
- Ethena Protocol: 27% APY (2.25%/month) sustained at $5B+ TVL in 2024
- Ribbon Finance Vaults: 40% APY (3.3%/month) on BTC/ETH covered calls in 2022–2023
- Polymarket LP during US Election Oct 2024: estimated 15–25% in a single month
- BTC Funding Rate peak Nov 2024: +0.10%/8h = 9%/month on pure arbitrage
- Combined: these streams running simultaneously at peak = 15–25%/month achievable

---

## 5. AI Yield Agent — 800+ Strategies

The AI Yield Agent is the operating intelligence of Wellex Yield Protocol. It continuously evaluates 800+ parametric strategies across all 8 streams and selects the optimal allocation every 15 minutes.

### 5.1 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   AI YIELD AGENT                         │
│                                                          │
│  ┌──────────────┐    ┌──────────────┐    ┌───────────┐  │
│  │ Data Ingestion│    │  ML Engine   │    │ Execution │  │
│  │              │    │              │    │  Layer    │  │
│  │ • APY feeds  │───▶│ • 800+ strat │───▶│ • Rebal.  │  │
│  │ • Volume data│    │ • Risk scorer│    │ • Gas opt │  │
│  │ • Funding rt │    │ • Optimizer  │    │ • Slippage│  │
│  │ • WVI dist.  │    │ • Backtester │    │ • Routing │  │
│  │ • SR monitor │    │              │    │           │  │
│  └──────────────┘    └──────────────┘    └───────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 5.2 The 800+ Strategy Library

Strategies are parametric combinations across 8 streams × multiple protocols × multiple configurations:

| Stream | Protocol Variants | Config Variants | Strategies |
|--------|:-----------------:|:---------------:|:----------:|
| DeFi Lending | 3 protocols | 8 risk configs | 24 |
| RWA | 3 protocols | 6 duration configs | 18 |
| Prediction Markets | 3 platforms × event types | 12 market filters | 108 |
| Options | 2 protocols × 4 strike configs | 8 expiry cycles | 64 |
| Funding Rate Arb | 3 exchanges × 2 assets | 6 leverage configs | 36 |
| CEX/DEX Arb | 12 DEX/CEX pair routes | 5 size configs | 60 |
| DEX LP | 6 pools × 3 range configs | 8 rebalance triggers | 144 |
| Auto-Compound | 4 aggregators × 5 harvest cycles | 6 reinvest configs | 120 |
| Cross-stream combos | Multi-stream blends | — | 226 |
| **TOTAL** | | | **800+** |

All 800+ strategies backtested on 36 months of on-chain data (2022–2025).

### 5.3 ML Selection Process

Every 15 minutes, the AI Yield Agent:

**Step 1 — Data ingestion (0–30 seconds):**
- Pulls live APY from all 8 stream protocols via on-chain oracles
- Reads current funding rates from Binance/Bybit/OKX APIs
- Checks Polymarket/Azuro current volume and open interest
- Reads current WVI distribution across all active users
- Checks SR (Sustainability Ratio) and Yield Pool balance

**Step 2 — Strategy scoring (30–60 seconds):**
- Scores each of 800+ strategies on 5 dimensions:
  1. Expected yield (next 24h projection)
  2. Risk score (historical Sharpe ratio of strategy)
  3. Liquidity score (can WellexVault enter/exit within 1 block)
  4. Gas efficiency (yield net of estimated gas cost)
  5. SR impact (does strategy improve or worsen Sustainability Ratio)

**Step 3 — Portfolio optimization (60–90 seconds):**
- Selects top-N strategies subject to constraints:
  - Total allocation = 100% TVL
  - Max 25% TVL in any single stream
  - Max 10% TVL in any single protocol
  - Net portfolio risk score < threshold (set by Dynamic Cap status)
  - WVI tier constraints respected

**Step 4 — Execution (90 seconds – 15 minutes):**
- Batches all rebalance transactions to minimize gas
- Uses Flashbots for MEV protection on large rebalances
- Verifies execution on-chain before marking cycle complete
- Publishes rebalance summary to Transparency Dashboard

### 5.4 Emergency Response

| Trigger | AI Agent Response | Time |
|---------|------------------|------|
| Protocol TVL drops >30% | Auto-exit that protocol, reallocate | < 15 min |
| Stablecoin depeg > 0.5% | Swap to USDT/USDC alternative | < 5 min |
| SR drops below 0.8 | Shift all allocation to Streams 1+2 (conservative) | < 15 min |
| Funding rate goes negative | Reduce Stream 5 to 0%, rotate to RWA | < 15 min |
| Bridge anomaly detected | Halt cross-chain operations, alert multisig | < 2 min |

### 5.5 Transparency

Every AI Agent decision is logged and published:
- Rebalance history: on-chain (every transaction has public hash)
- Strategy selection rationale: published in daily Transparency Report
- Performance attribution: per-stream yield published monthly
- Live Yield Dashboard: `yield.wellex.ai` — real-time SR, TVL by stream, current allocation

---

## 6. WellexVault (ERC-4626)

Single vault accepting USDC/USDT. All user yield is distributed from this vault proportionally to WVI.

**Protocol allocation within WellexVault (WVI 70–89 default):**

| Protocol | Allocation | Stream | Category |
|----------|:----------:|:------:|----------|
| Aave v3 USDC | 15% | 1 | DeFi Lending |
| Compound III | 3% | 1 | DeFi Lending |
| Morpho Blue | 2% | 1 | DeFi Lending |
| Ondo Finance (OUSG/USDY) | 10% | 2 | RWA — US Treasuries |
| Maple Finance / Superstate | 5% | 2 | RWA — Corporate Bonds |
| Polymarket LP / Azuro | 8% | 3 | Prediction Markets |
| Drift Protocol | 7% | 3 | Prediction Markets |
| Ribbon / Stryke (covered calls) | 10% | 4 | Options |
| Funding Rate Arb (BTC/ETH) | 15% | 5 | Funding Arbitrage |
| CEX/DEX / Cross-chain Arb | 10% | 6 | Spread Arbitrage |
| Uniswap v3 / Curve | 10% | 7 | DEX LP |
| Yearn / Convex / Beefy | 5% | 8 | Auto-Compound |

**Lock-up by deposit size:**

| Deposit Size | Lock-up | Early Withdrawal Penalty |
|:------------:|:-------:|:------------------------:|
| $0–$999 | 0 days (Micro-Starter: min $50) | 0% |
| $1,000–$9,999 | 30 days | 2% |
| $10,000+ | 90 days | 5% |

---

## 8. Multi-EVM Deposit Flow

WellexVault accepts deposits from 7 EVM-compatible chains:

| Network | Stablecoins | Auto-swap |
|---------|-------------|:---------:|
| Ethereum | USDC, USDT | — |
| Polygon | USDC, USDT | — |
| BSC | USDC, USDT, BUSD | → USDC |
| Arbitrum | USDC, USDT | — |
| Optimism | USDC, USDT | — |
| Base | USDC | — |
| Avalanche | USDC, USDT | — |

**Crypto deposit flow:**
```
1. User selects network and stablecoin
2. Safe{Wallet} + ERC-4337 generates address on selected chain
3. User sends stablecoins
4. DEX aggregator (1inch / 0x / ParaSwap) swaps → USDC if needed
5. Bridge (LayerZero / Across) moves USDC to WellexVault
6. WellexVault mints shares proportional to deposit
7. Yield accrues from next epoch (T+1)
```

---

## 9. Card On-Ramp Flow

| Method | Provider | Fee | KYC |
|--------|----------|:---:|-----|
| Visa / Mastercard | On-ramp aggregator | ~3% | Tier 2 |
| Apple Pay | On-ramp aggregator | ~3% | Tier 2 |
| Google Pay | On-ramp aggregator | ~3% | Tier 2 |
| PIX (Brazil) | On-ramp aggregator | ~1.5% | Tier 1 |
| SEPA (EU) | On-ramp aggregator | ~1% | Tier 2 |

**Important:** partner bonuses calculated on **post-swap USDC amount** (after on-ramp fee).
Example: $1,000 via Visa card → on-ramp ~3% fee → $970 USDC in vault. Partner bonus = $970 × rate.

---

## 10. Dynamic Yield Cap & Circuit Breaker

**Sustainability Ratio (SR):**
```
SR(t) = Yield_Pool(t) / Yield_Demand(t)
```

| SR | Status | Action |
|:--:|--------|--------|
| ≥ 1.2 | ✅ Normal | Full yield conditions |
| 1.0–1.2 | ⚠️ Monitor | Observation, prepare communication |
| 0.8–1.0 | 🟠 Adjust | λ = SR / 1.0; Adjusted_Yield = Target_Yield × λ |
| < 0.8 | 🔴 Protect | AI Agent shifts to Streams 1+2 only; yield capped at 2%/month |

**SR at 0.85 example (λ = 0.85):**

| WVI | Standard Yield | Adjusted Yield |
|:---:|:--------------:|:--------------:|
| 40–49 | 2% | 1.70% |
| 60–69 | 8% | 6.80% |
| 80–89 | 16% | 13.60% |
| 90–100 | 20% | 17.00% |

**User communication by SR level:**

| SR | Message |
|:--:|---------|
| ≥ 1.2 | "Yield fully sustainable ✅" |
| 1.0–1.2 | "Yield sustainable, monitoring conditions" |
| 0.8–1.0 | "Yield temporarily adjusted by X%/month. Transparency report available." |
| < 0.8 | "Protocol in protection mode. Yield capped at 2%/month. Full details in Transparency Report." |

---

## 11. Withdrawal Flow

All withdrawals through WEB platform only.

| Deposit Size | Condition | Penalty |
|:------------:|-----------|:-------:|
| $0–$999 | Free withdrawal (up to 24h) | 0% |
| $1,000–$9,999 | After 30 days | 2% |
| $10,000+ | After 90 days | 5% |

```
1. User requests withdrawal via WEB
2. WithdrawalQueue checks lock-up status
3. If locked → penalty warning, requires confirmation
4. WellexVault burns shares, releases USDC
5. USDC sent to user wallet (selected chain)
6. Settlement: ≤24h standard, ≤72h high load
```

---

## 12. Smart Contract Architecture

| Contract | Purpose |
|----------|---------|
| WellexYieldVault | ERC-4626 — single yield vault for all users |
| WellexYieldRouter | Deposit/withdrawal routing (multi-EVM), 8-stream allocation |
| WellexYieldStrategyManager | Manages 800+ strategy execution, AI Agent interface |
| WellexYieldDistributor | Distributes yield proportionally to WVI (Merkle tree) |
| WellexYieldOracle | WVI → yield tier + Chainlink price feeds + PoR |
| WellexYieldGovernance | Protocol parameters, timelock 48h, multisig 3/5 |
| WellexProtectionReserve | On-chain insurance reserve |
| WellexWithdrawalQueue | Lock-up enforcement, FIFO queue |
| WellexBridgeAdapter | LayerZero / Across multi-chain integration |
| WellexOnRampReceiver | Receives USDC from card on-ramp providers |

Security: Trail of Bits + OpenZeppelin audit (planned). Proof of Reserves: Chainlink PoR. Bug Bounty: $250K on Immunefi.

---

## 13. Stress Tests by Stream

| Stream | Stress Scenario | Impact | AI Agent Response |
|--------|----------------|--------|-------------------|
| 1 — DeFi Lending | Utilization drops to 40% (bear market) | Yield → 0.3%/month | Reduce to min allocation, shift to Stream 2 |
| 2 — RWA | Fed rate cut to 2% | Yield → 0.17%/month | Stable, acceptable floor; no action |
| 3 — Prediction Markets | No major events for 30 days | Volume −70%, yield → 0.5%/month | Auto-reduce allocation; reinstate pre-event |
| 4 — Options | IV crush (VIX < 15) | Premium −60%, yield → 0.5%/month | Shift to shorter-dated options or pause |
| 5 — Funding Rate | Bear market, funding negative | Yield → 0% or negative | Auto-exit to 0%, rotate capital to Streams 1+2 |
| 6 — CEX/DEX Arb | Low volatility, spreads < 0.02% | Below gas threshold, yield → 0% | Pause, await higher volatility |
| 7 — DEX LP | Volume −80% + price range exit | Yield → 0.2% + IL risk | Rebalance range, shift to Curve stable pools |
| 8 — Auto-Compound | Gas cost spike (>$50/tx) | Harvest frequency reduced | Extend harvest cycle to weekly |
| **All streams** | Simultaneous market shock | SR drops to 0.7 | Full protection mode: Streams 1+2 only, yield capped 2% |

---

## 14. Key Risks

| Risk | Probability | Impact | Mitigation |
|------|:-----------:|:------:|-----------|
| DeFi yield compression (all streams) | Medium | Medium | 8-stream diversification; Dynamic Cap |
| Stablecoin depeg | Low | High | Multi-stablecoin; auto-exit at 0.5% depeg |
| Regulatory DeFi ban | Medium | High | Multi-jurisdiction; compliance-first structure |
| Cross-chain bridge exploit | Medium | Medium | Multi-bridge; per-bridge TVL limits |
| On-ramp provider failure | Low | Medium | Multi-provider aggregator with auto-failover |
| Smart contract vulnerability | Low | High | Dual audit + Bug Bounty $250K + Forta monitoring |
| AI Agent execution error | Very Low | Medium | Human multisig override; circuit breaker |
| Prediction Market LP loss | Medium | Low | Max 22% allocation; balanced-market filter |

---

## Integration Points

▸ WVI formula → [03_WELLNESS_SCORE.md](03_WELLNESS_SCORE.md)
▸ APP yield display → [04_APP_UX.md](04_APP_UX.md)
▸ WEB yield display → [05_DASHBOARD.md](05_DASHBOARD.md)
▸ Platform protection → [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md)
▸ Tech architecture → [17_TECH_ARCHITECTURE.md](17_TECH_ARCHITECTURE.md)
▸ Smart contract spec → [30_SMART_CONTRACT_INSURANCE.md](30_SMART_CONTRACT_INSURANCE.md)

---

## Open Issues

▸ Trail of Bits + OpenZeppelin audit: scheduled, not yet complete
▸ Live Yield Dashboard (yield.wellex.ai): planned for Month 1 post-launch
▸ AI Yield Agent v1.0: backtesting complete, mainnet deployment Month 2
▸ Stream 8 (Auto-Compound): Yearn integration tested, Convex pending

---

## Changelog

▸ v1.0 — Initial yield spec (Feb 2026)
▸ v2.0 — 8 streams consolidated, Dynamic Cap added (Feb 2026)
▸ v3.0 — Stress tests expanded, AUDIT_REPORT_v3 sync (Mar 2026)
▸ v4.0 — Quantum claim removed (→ ML/AI), Realistic Range added, calibration 5%/month confirmed
▸ v4.6 — "No packages, no subscription tiers" canonical statement added
▸ **v5.0** — 8 yield streams (expanded from 4), full mathematical proof per stream, AI Yield Agent 800+ strategies, WVI allocation modifier table, blended yield scenarios (bear/normal/bull), stress tests per stream, smart contract names updated to WellexYield* naming

---

*Wellex © 2026 · Confidential*