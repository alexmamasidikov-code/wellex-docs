---
id: 22_INSURANCE_FUND
title: "22 · INSURANCE FUND & AI INSURANCE AGENT"
sidebar_position: 22
description: "Wellex v6.0 · 05.03.2026"
---

# 22 · INSURANCE FUND & AI INSURANCE AGENT

> **Version:** 6.0 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Protocol
> **SSOT for:** Insurance Fund mechanics, coverage terms, AI Insurance Agent
> **Dependencies:** 06_YIELD_PROTOCOL (Dynamic Cap trigger), 17_TECH_ARCHITECTURE (smart contracts)

> Insurance Fund (EU-regulated, Cyprus) · AI Insurance Agent · NFT policies · 100% deposit coverage · 5-year term
>
> ⚠️ Insurance Fund covers deposited principal — not yield. Target Yield is not guaranteed and depends on DeFi market conditions.

---

## TL;DR

- Two-tier Insurance Fund: Platform Fund (8–12% TVL) + User Premiums
- Coverage: 100% of deposit minus earned yield — same for all deposit sizes
- Public Claims Dashboard: all claims verifiable on-chain at `claims.wellex.ai`

---

## Philosophy

Wellex protects deposits through a **two-tier system**: an **Insurance Fund** (Cyprus, EU-regulated) and an **AI Insurance Agent** — an automated bot for instant claims processing, risk assessment, and policy management.

All deposits in **WellexVault** receive **unified 100% insurance coverage** — with no tier differentiation. Each insured user receives an **NFT certificate** — a digital policy verifiable on-chain.

**Target fund size: 8–12% of platform TVL.**

> **Disclaimer:** Actual yield depends on DeFi market conditions and is distributed proportionally to WVI from the overall Yield Pool. Figures represent the theoretical maximum under favorable conditions.

---

## 1. Insurance Structure

### 1.1 Two-Tier Architecture

- USER
- Policy purchase in 1 click
- ↓
- AI Insurance ← Instant risk assessment
- Agent (Bot) ← Scoring, pricing, NFT issuance
- ← 24/7 claims processing
- ↓
- Wellex Insurance Services Ltd
- Licensed insurance agent
- EU Insurance Distribution Directive (IDD)
- Cyprus Insurance Companies Control Service

### 1.2 Key Parameters

| Parameter | Value |
|-----------|-------|
| **Insurer** | Wellex Insurance Services Ltd, Insurance Fund, Cyprus (EU-regulated) |
| **AI Agent** | Wellex AI Insurance Bot — automated underwriting, pricing, claims |
| **Subject of insurance** | Deposits in WellexVault (unified ERC-4626 vault) |
| **Coverage** | **100% of deposit** (minus earned income) |
| **Policy format** | NFT certificate (Soulbound, on-chain, verifiable) |
| **Policy term** | 5 years from issuance |

---

## 2. Unified Insurance Product

### 2.1 WellexVault Insurance — Single Policy

Unlike multi-tier schemes, Wellex offers **one universal insurance product** for all deposits in WellexVault:

| Parameter | Value |
|-----------|-------|
| **Coverage** | 100% of deposit − earned income |
| **Term** | 5 years |
| **Premium** | 15% of deposit amount (flat rate) |
| **AI discounts** | Loyalty + Volume discount (see section 3.3) |
| **Min premium** | 8% (with discounts applied) |
| **Max premium** | 20% (with elevated risk score) |

### 2.2 Covered Events

| Event | Coverage | Description |
|-------|:--------:|-----------|
| Protocol failure (full shutdown) | ✅ | Wellex ceases operations |
| Yield cessation >90 days | ✅ | Protocol operates but yield is not distributed |
| Smart contract exploit | ✅ | Hack resulting in deposit loss |
| Oracle manipulation | ✅ | Price oracle manipulation |
| Wellex entity liquidation | ✅ | Bankruptcy / forced liquidation |
| Stablecoin depeg (up to 10%) | ✅ | USDC/USDT peg loss |

### 2.3 Payout Formula

```
Insurance Payout = Deposit Amount − Total Earned Income
```

- If earned income ≥ deposit → payout = $0 (deposit fully recovered)
- If earned income < deposit → payout = difference
- Max payout = deposit amount at the time of policy issuance

### 2.4 Examples

| Scenario | Deposit | Premium (15%) | Income over 2 years | Insured event | Payout |
|----------|---------|:------------:|:-------------------:|--------------|--------|
| Partial income | $10,000 | $1,500 | $3,200 | Protocol failure | **$6,800** |
| High income | $10,000 | $1,500 | $12,000 | Protocol failure | **$0** (recovered) |
| Depeg | $50,000 | $7,500 | $8,000 | USDC depeg 5% | **$42,000** |
| Exploit, small deposit | $3,000 | $450 | $500 | Smart contract hack | **$2,500** |
| Large, early | $100,000 | $15,000 | $1,200 | Protocol failure | **$98,800** |

### 2.5 Exclusions

| Event | Reason for denial |
|-------|------------------|
| Decrease in **monthly yield** (yield continues to be paid) | Yield volatility — expected market risk |
| Voluntary withdrawal of funds | User's decision |
| Loss of wallet access | User's responsibility (key management) |
| Regulatory restrictions in user's country | Country risk |
| Depeg >10% | Systemic risk (catastrophic scenario) |
| War, natural disasters | Force majeure |
| User fraud | Fraud exclusion |

---

## 3. AI Insurance Agent

### 3.1 AI Agent Functions

| Function | Description | Speed |
|----------|-----------|-------|
| **Risk Scoring** | Deposit risk assessment: size, term, lock-up tier, WVI history | <1 sec |
| **Dynamic Pricing** | Personalized premium based on risk score | <1 sec |
| **Automated Underwriting** | Automatic policy approval (up to $100K) | <5 sec |
| **NFT Minting** | Issuance of NFT certificate to user's wallet | <30 sec |
| **Claims Detection** | Automatic detection of insured events on-chain | Real-time |
| **Claims Processing** | On-chain data verification, payout calculation | <1 hour |
| **Fraud Detection** | ML model for detecting fraudulent claims | Real-time |
| **Reporting** | Automated reports for the regulator | Weekly |

### 3.2 Risk Scoring Model

| Factor | Weight | Description |
|--------|:------:|-----------|
| Deposit size | 25% | Larger = higher premium (concentration risk) |
| Lock-up tier | 20% | $10K+/90d = lower risk, $0–999/0d = higher risk |
| WVI stability | 20% | Stable WVI = lower risk (predictable yield demand) |
| Time in protocol | 15% | Longer = lower premium (loyalty discount) |
| Total platform TVL | 10% | Higher TVL = lower systemic risk |
| Market conditions | 10% | Volatility, DeFi market health |

### 3.3 Dynamic Pricing

```
Base Premium = 15%
Risk Multiplier = AI Risk Score (0.8 – 1.3)
Loyalty Discount = min(months_in_protocol × 0.5%, 5%)
Volume Discount = min(deposit / 100K × 1%, 3%)

Final Premium = Base Premium × Risk Multiplier − Loyalty Discount − Volume Discount
Min Premium = 8% | Max Premium = 20%
```

---

## 4. NFT Certificate

### 4.1 Metadata

| Field | Description |
|-------|-----------|
| `policyId` | Unique policy number |
| `insured` | Insured wallet address |
| `depositAmount` | Insured deposit amount |
| `lockupTier` | Lock-up tier ($0–999 / $1K–9999 / $10K+) |
| `premiumPaid` | Insurance premium paid |
| `riskScore` | AI Risk Score at the time of issuance |
| `issueDate` | Policy issuance date |
| `expiryDate` | Expiration date (issue + 5 years) |
| `insurerLicense` | Insurance agent license number (Cyprus) |
| `coverageTerms` | Hash of coverage terms (IPFS) |
| `totalYieldReceived` | Automatically updated on-chain |

### 4.2 Properties

- **Soulbound (Non-transferable)** — bound to the wallet, cannot be sold
- **On-chain verification** — anyone can verify authenticity
- **Metadata on IPFS** — full terms stored in a decentralized manner
- **Auto-update** — real-time tracking of earned income
- **One-per-deposit** — one policy bound to one deposit in WellexVault

---

## 5. Claims Flow (Payout Process)

### 5.1 Automatic Process (AI Agent)

| Stage | Description | Timeframe | Responsible |
|-------|-----------|:---------:|------------|
| **1. Detection** | AI Agent detects an insured event on-chain | Automatic | AI Agent |
| **2. Notification** | Push notification to all affected users | <1 hour | AI Agent |
| **3. Auto-claim** | Automatic claim creation for all NFT policies | <1 hour | AI Agent |
| **4. Verification** | AI verifies on-chain data: deposit, income, NFT validity | <24 hours | AI Agent |
| **5. Calculation** | Payout calculation: deposit − earned income | Automatic | AI Agent |
| **6. Human Review** | Claims >$50K — manual review by Compliance Officer | 7 days | Compliance |
| **7. Approval** | Payout approval (AI <$50K, Manual >$50K) | 1–14 days | AI + Human |
| **8. Payout** | Payout to wallet (USDC) or bank account | <30 days | Treasury |

### 5.2 Manual Process (User-Initiated)

| Stage | Description | Timeframe |
|-------|-----------|:---------:|
| 1. Claim submission | Via dApp or email to insurance service | User |
| 2. AI Pre-screening | Automatic eligibility check | <1 hour |
| 3. Document collection | Additional documents (if required) | 7 days |
| 4. Review | AI + Human review | 14 days |
| 5. Decision | Approve / Deny with justification | 14 days |
| 6. Payout / Appeal | Payout or appeal to Financial Ombudsman | 30 days |

**Max time from event to payout:** 45 days.

---

## 6. Partnership Model

### 6.1 Partnership Structure

| Component | Wellex Role | Insurance Partner Role |
|-----------|-----------|----------------------|
| **Technology** | AI Agent, NFT, smart contracts, on-chain data | — |
| **Underwriting** | AI risk scoring, dynamic pricing | Actuarial oversight, capital requirements |
| **Licensing** | Technology partner | Insurance Fund |
| **Claims** | AI processing, on-chain verification | Final approval (>$50K), regulatory reports |
| **Capital** | Premium pool management | Solvency reserves |
| **Regulator** | Technical documentation | Reporting to Cyprus Insurance Control Service |

### 6.2 Revenue Split

| Source | Wellex | Insurance Partner |
|--------|:------:|:-----------------:|
| Premium income | 40% | 60% |
| Investment income (reserves) | 30% | 70% |
| Technology fee | 100% | — |

### 6.3 Reinsurance

At TVL >$100M — mandatory reinsurance through Lloyd's of London or Swiss Re to cover catastrophic scenarios.

---

## 7. Actuarial Notes

### 7.1 Key Assumptions

| Parameter | Value | Justification |
|-----------|-------|-------------|
| Expected loss ratio | <5% | Audited smart contracts, diversified DeFi |
| Average claim severity | 40% of deposit | Partial income already received |
| Claim frequency | 2–5% of policies over 5 years | Historical DeFi exploit data |
| Expense ratio | 15–20% | AI automation reduces operational costs |
| Combined ratio | <70% | Highly profitable |
| Reserve adequacy | 120% of expected claims | Conservative buffer |

### 7.2 Loss Scenarios

| Scenario | Probability | Potential loss (TVL $50M) | Coverage |
|----------|:----------:|:-------------------------:|---------|
| Minor exploit (<5% TVL) | 5%/year | $2.5M | Premium pool |
| Major exploit (5–20% TVL) | 1%/year | $10M | Premium pool + reserves |
| Protocol failure (100%) | 0.5%/year | $50M | Reinsurance + Foundation |
| Stablecoin depeg (5%) | 2%/year | $2.5M | Premium pool |
| Catastrophic (depeg + exploit) | 0.1%/year | $60M+ | Reinsurance |
| Cross-chain bridge exploit | 1%/year | $5M | Premium pool + bridge insurance |

### 7.3 Solvency Model

```
Required Capital = max(Premium × 3, Expected Claims × 1.5, Regulatory Minimum)
```

At TVL $50M:
- Premium pool: $3.75M (collected)
- Reserve target: $2.0M (120% of expected claims)
- Reinsurance: $10M coverage (at TVL >$100M)
- Solvency ratio: >150% (regulatory requirement: 100%)

---

## 8. Financial Model

### 8.1 Scale

| TVL | Insured (50% opt-in) | Collected premiums | Claims reserve (5%) | Net profit (insurance) |
|:---:|:--------------------:|:-----------------:|:-------------------:|:---------------------:|
| $5M | 500 | $375K | $100K | $150K |
| $25M | 2,500 | $1.87M | $500K | $750K |
| $50M | 5,000 | $3.75M | $1M | $1.5M |
| $100M | 10,000 | $7.5M | $2M | $3M |
| $500M | 50,000 | $37.5M | $10M | $15M |

### 8.2 Unit Economics (average policy)

| Metric | Value |
|--------|-------|
| Average deposit | $5,000 |
| Average premium (15%) | $750 |
| Expected claim cost | $37.50 (5% × 40% × $5K / 5 years = $7.50/year) |
| AI processing cost | $2/policy |
| Regulatory cost | $5/policy |
| **Net margin per policy** | **$705 (94%)** |

---

## 9. Key Metrics

| Metric | Target | Tracking |
|--------|:------:|---------|
| Opt-in rate (% insured) | >50% | Dashboard |
| Average premium | $750 | On-chain |
| Claim ratio | <5% | Actuarial report |
| Claims processing time | <45 days | AI Agent metrics |
| AI auto-approval rate | >80% (claims <$50K) | AI Agent |
| Customer NPS (insurance) | >70 | Surveys |
| Solvency ratio | >150% | Quarterly report |
| Combined ratio | <70% | Annual actuarial |

---

## 10. Legal Structure

| Aspect | Details |
|--------|---------|
| **Jurisdiction** | Cyprus (EU) |
| **Entity** | Wellex Insurance Services Ltd |
| **Regulator** | Cyprus Insurance Companies Control Service |
| **License type** | Insurance Agent / Insurance Intermediary |
| **Applicable law** | EU Insurance Distribution Directive (IDD) 2016/97 |
| **GDPR** | Full compliance (EU data processor) |
| **Dispute resolution** | Financial Ombudsman (Cyprus) → LCIA Arbitration (London) |
| **Audit** | Annual financial audit + actuarial review |
| **Reporting** | Quarterly — to regulator, monthly — internal |

---

*→ Related: [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) (yield architecture, WellexVault) · [15_RISKS.md](15_RISKS.md) (risk management)*

*Wellex © 2026 · Confidential*
