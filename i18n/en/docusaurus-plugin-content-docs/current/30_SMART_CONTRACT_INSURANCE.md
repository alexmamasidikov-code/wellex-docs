---
id: 30_SMART_CONTRACT_INSURANCE
title: "30 · SMART CONTRACT INSURANCE"
sidebar_position: 30
description: "Wellex v6.0 · 05.03.2026"
---

# 30 · SMART CONTRACT INSURANCE

> **Version:** 6.0 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Product / Risk
> **SSOT for:** Smart contract coverage strategy, DeFi insurance architecture
> **Dependencies:** 06_YIELD_PROTOCOL (WellexVault), 15_RISKS, 22_INSURANCE_FUND

---

## TL;DR

- Smart contract insurance is a mandatory element of the trust stack for any DeFi platform
- Two-tier protection: platform-level coverage + optional user-level coverage
- Providers: Nexus Mutual, InsurAce, UnoRe — decentralized; Coincover — custodial bridge
- Funded from Insurance Fund (8–12% TVL) — no additional fees from users

---

## 1. Why This Matters

The DeFi ecosystem is a high-risk environment. From 2020 to 2025, smart contract exploits drained $6.8B+ from various protocols. Wellex manages user deposits in USDC/USDT — without smart contract insurance this represents an unacceptable risk for any serious ecosystem participant.

**The critical question from institutional players:**
> "Do you have smart contract insurance?"

Without a positive answer, B2B integration discussions, corporate partnerships, and fitness network deals stall at the due diligence stage.

---

## 2. Protection Architecture

### 2.1 Insurance Tiers

```
Tier 1 — Platform Coverage (active by default for all users)
  └─ Covers: WellexVault, yield strategies, LayerZero bridge
  └─ Provider: Nexus Mutual + InsurAce (dual cover)
  └─ Funded from: Insurance Fund (8–12% TVL)

Tier 2 — User Deposit Opt-In (additional, user's choice)
  └─ Covers: individual user deposit
  └─ Provider: InsurAce (pay-per-deposit)
  └─ Cost: 0.5–1.2% of deposit amount/year (paid from yield)
  └─ Activation: WEB Dashboard → Settings → Insurance
```

---

### 2.2 Coverage Scope

| Risk | Coverage | Provider |
|------|----------|---------|
| Smart contract vulnerability (exploit) | ✅ | Nexus Mutual |
| Rug pull / admin key compromise | ✅ (with limits) | InsurAce |
| Oracle manipulation (Chainlink PoR) | ✅ | Nexus Mutual |
| Stablecoin de-peg (USDC/USDT >10%) | ✅ up to 80% loss | InsurAce |
| Bridge exploit (LayerZero) | ✅ | UnoRe |
| Centralized exchange insolvency | ❌ | — |
| Market losses (yield < 0) | ❌ | — |
| User private key loss | ❌ | — |

> **Important:** insurance covers technical failures and smart contract exploits — not market risks or losses due to user actions.

---

## 3. Insurance Providers

### 3.1 Nexus Mutual — Platform Primary

| Parameter | Value |
|-----------|-------|
| Type | Decentralized mutual, on-chain claims voting |
| Coverage | Smart contract exploit, re-entrancy, logic bugs |
| TVL coverage | Up to $20M per contract |
| Premium | ~2.6% of covered amount/year |
| Payout | On-chain in ETH/DAI, <72 hours after governance vote |
| Network | Ethereum mainnet + L2 |
| Wellex status | Target: Phase 1 (get cover in M1) |

**Why Nexus Mutual:** largest DeFi insurance protocol, $500M+ paid out, trusted by Aave, Compound, Maker. For users and partners — the most recognized brand in DeFi insurance.

---

### 3.2 InsurAce — User Opt-In + Stablecoin De-peg

| Parameter | Value |
|-----------|-------|
| Type | Decentralized, cross-chain |
| Coverage | Smart contract + custodian risk + stablecoin de-peg |
| Networks | Arbitrum, Polygon, Ethereum, BNB |
| Premium | 0.5–1.2% of deposit/year |
| Minimum | $100 coverage |
| Payout | In USDC, 14 days after approved claim |
| Wellex status | Target: Phase 1, optional tier for users |

**User flow:**
1. User deposits funds on the WEB platform
2. On activating "Insurance Cover" — InsurAce calculates premium (displayed in UI)
3. Premium deducted from first yield payment
4. User receives on-chain insurance certificate (NFT)
5. If event occurs — user submits claim via wellex.ai or InsurAce dashboard

---

### 3.3 UnoRe — Bridge Protection

| Parameter | Value |
|-----------|-------|
| Type | Specialized bridge insurance |
| Coverage | LayerZero cross-chain bridge exploits |
| Networks | Multi-EVM (7 chains) |
| Premium | ~1.5% of bridged volume/year |
| Wellex status | Target: Phase 1 (alongside Multi-EVM launch) |

---

### 3.4 Coincover — Custodial Safety Net (B2B)

| Parameter | Value |
|-----------|-------|
| Type | Centralized insurance (UK FCA regulated) |
| Coverage | Theft, unauthorized access, business continuity |
| Audience | Corporate clients (B2B), HNW deposits |
| Limit | Up to $1M per corporate account |
| Cost | Negotiated, ~0.5–1%/year |
| Wellex status | Target: Phase 2 (B2B launch) |

---

## 4. Insurance Fund

The Insurance Fund finances platform-level coverage. Mechanics:

```
Every transaction through WellexVault:
  → 2% of yield fee directed to Insurance Fund
  → Insurance Fund maintained at 8–12% of total TVL

At TVL $15M → Insurance Fund = $1.2M–$1.8M
At TVL $100M → Insurance Fund = $8M–$12M
```

**Insurance Fund composition:**
- 50% in USDC (immediate liquidity)
- 30% in Nexus Mutual cover (smart contract)
- 20% in InsurAce platform cover

**Transparency:** Insurance Fund balance displayed in real-time at wellex.ai/transparency

---

## 5. Bug Bounty Programme

A parallel line of defense — identifying vulnerabilities before they can be exploited.

| Tier | Severity | Reward | Payout timeline |
|------|----------|:------:|:--------------:|
| Critical | Remote code execution, loss of funds | $50,000 USDC | 48 hours |
| High | Significant fund risk, privilege escalation | $15,000 USDC | 72 hours |
| Medium | Limited fund risk, DoS | $5,000 USDC | 7 days |
| Low | Minor bugs, UX issues | $500 USDC | 14 days |

**Platform:** Immunefi (largest DeFi bug bounty, $250K total pool)
**Scope:** WellexVault, YieldRouter, WVI Oracle, Partner contracts
**Status:** Target launch — M1 (simultaneous with public launch)

---

## 6. Transparency for Users

### Public page wellex.ai/insurance

Contains:
- List of active insurance providers + coverage amounts
- Insurance Fund balance (on-chain)
- Claims history (0 claims — the best indicator)
- Links to insurance certificates
- Bug Bounty leaderboard (public hackers with permission)

### WEB Dashboard — Insurance Widget

```
┌─────────────────────────────────────┐
│  🛡️ Your deposit is protected        │
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

## 7. Communication — How to Talk About Insurance

### In public materials

> "WellexVault is protected by dual smart contract coverage through Nexus Mutual and InsurAce. Optional individual deposit coverage is available. The Insurance Fund is maintained at 8–12% of TVL. Details: wellex.ai/insurance"

### In partner conversations

> "Beyond DeFi returns, Wellex is the only wellness protocol with professional smart contract insurance coverage. Nexus Mutual, InsurAce, Bug Bounty on Immunefi — three layers of protection."

### In B2B negotiations

> "For corporate clients, additional coverage via Coincover (FCA regulated) is available — up to $1M per corporate account. This is a level rarely seen even among large DeFi protocols."

---

## 8. Implementation Roadmap

| Stage | Timeline | Task |
|-------|----------|------|
| M1 (March 2026) | Launch | Nexus Mutual cover activated, Immunefi bug bounty launched |
| M1 (March 2026) | Launch | InsurAce user opt-in available in WEB Dashboard |
| M1 (March 2026) | Launch | wellex.ai/insurance page public |
| M2 (April 2026) | Growth | UnoRe bridge protection activated |
| M6 (Aug 2026) | B2B | Coincover for corporate clients |
| M12 (March 2027) | Scale | Insurance Fund reaches $3M+ (TVL $25M+) |

---

## Changelog

▸ v5.0 (04.03.2026) — EN translation by Tery Marius. Aligned with v5.0 canon.
▸ v1.0 (02.03.2026) — created by Opus 4.6.

---

*→ Related: [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) · [15_RISKS.md](15_RISKS.md) · [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md)*

*Wellex © 2026 · wellex.ai*
