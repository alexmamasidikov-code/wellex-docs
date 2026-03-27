---
id: 34_K_FACTOR_MATH
title: "34 · K-FACTOR MATHEMATICS"
sidebar_position: 34
description: "Wellex v6.1 · 05.03.2026"
---

# 34 · K-FACTOR MATHEMATICS

> **Version:** 6.1 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Growth
> **SSOT for:** Viral coefficient math, growth loops modeling, referral economics
> **Dependencies:** 09_PARTNER_PROGRAM, 20_GROWTH_IDEAS, 11_GO_TO_MARKET

---

## TL;DR

- K-factor = number of new users brought in by 1 existing user
- K > 1 = viral growth (exponential). K = 0.3–0.5 = healthy supplement to paid traffic
- Wellex has 4 independent viral loops with different K values. Combined K target: 0.6–0.8 by M6
- Math shows: K 0.6 with CAC $30 → effective CAC drops to $12

---

## 1. K-Factor: Core Mathematics

### The Formula

```
K = i × c

where:
  i = number of invitations sent by 1 user per period
  c = conversion of invitation into registration (%)
```

### What K-Factor Means

| K-factor | Growth type | Interpretation |
|:--------:|------------|---------------|
| K < 0 | Churn | Users leave faster than they join |
| K = 0 | Linear | Growth only through paid traffic |
| 0 < K < 1 | Sub-viral | Each user brings <1 new user. Adds to CAC efficiency |
| K = 1 | Critical mass | Each user brings exactly 1 new user. Stable doubling |
| K > 1 | Viral growth | Exponential growth without paid traffic |

### Impact on CAC

```
Effective CAC = Paid CAC / (1 / (1 - K))

At K = 0.3: Effective CAC = $30 / 1.43 = $21.0
At K = 0.5: Effective CAC = $30 / 2.0 = $15.0
At K = 0.6: Effective CAC = $30 / 2.5 = $12.0
At K = 0.8: Effective CAC = $30 / 5.0 = $6.0
```

**At target K = 0.6 with Paid CAC $30 → Effective CAC = $12. That's a 2.5× reduction in acquisition cost.**

---

## 2. Four Wellex Viral Loops

### Loop 1: Referral Program (direct referral)

**Mechanics:** User invites a friend → both get a bonus.

| Parameter | Value |
|-----------|-------|
| Invitations from 1 user (i) | 0.8/month (avg, from beta user base) |
| Invitation conversion (c) | 22% |
| **This loop's K** | **0.8 × 0.22 = 0.176** |

**Invitation conversion breakdown:**
```
100 invitations sent
  → 65 opened the link (65% open rate)
  → 34 reached registration page (52% CTR on link)
  → 22 registered (65% completion)
→ c = 22%
```

**Optimizing this loop:**
- Increase i: push at milestone moments (streak 7 days, first yield, rank-up)
- Increase c: shorter onboarding (target <3 min), referral landing page A/B tested
- Target i by M6: 1.2/month (from 0.8)
- Target c by M6: 28% (from 22%)
- **Target K1 by M6: 0.34** (from 0.176)

---

### Loop 2: WVI Social Share (organic viral)

**Mechanics:** User shares WVI score / achievement on social media → followers click link.

| Parameter | Value |
|-----------|-------|
| % users who share (s) | 8% per month (beta observation) |
| Average reach per post | 340 followers |
| Clicks on Wellex link from post | 4.2% |
| Clicks → registration conversion | 18% |
| **This loop's K** | **0.08 × 340 × 0.042 × 0.18 = 0.206** |

**Triggers that drive sharing:**
- Streak milestone (7, 14, 30, 60, 90 days)
- WVI personal record
- Rank-up (e.g., Builder → Achiever)
- Yield credited (Month 1 especially)
- WVI Duel challenge won

**Share card design:**
```
┌─────────────────────────────────┐
│  🏆  WVI Today: 89              │
│  ████████████████░ 89/100       │
│                                 │
│  Sleep: 91  Activity: 87        │
│  Emotions: 85  Streak: 41 days  │
│                                 │
│  Top 12% globally this week     │
│  wellex.ai #EmotionalMining     │
└─────────────────────────────────┘
```

**Optimizing this loop:**
- In-app share button on every WVI screen (1 tap)
- Pre-filled caption with hashtag and link
- Target share rate by M6: 14% (from 8%)
- **Target K2 by M6: 0.36**

---

### Loop 3: Income Reveal (conversation trigger)

**Mechanics:** User mentions/shows Wellex income in conversation → listener registers.

| Parameter | Value |
|-----------|-------|
| Conversations per user/month (i) | 1.4 |
| Conversion of conversation → registration (c) | 19% |
| **This loop's K** | **1.4 × 0.19 = 0.266** |

**Income reveal moment:**
The most powerful acquisition trigger in field data:
> "Wait, you earned $240 just from wearing that bracelet?" → registration rate from conversation: 19%

**vs. ad click → registration:** 3.2%
**Income reveal is 6× more effective than paid ad.**

**Enabling income reveals:**
- In-app "Income Card" (shareable): "I earned $X this month with Wellex"
- Push notification at yield credit: "Your $X just arrived. Share the moment?"
- WEB dashboard: "Tell a friend — you just earned together"

**Optimizing this loop:**
- Yield credit timing: first month is key (first impression)
- Make the number concrete: "$187.50" not "18.2% yield"
- **Target K3 by M6: 0.32** (conversations increase as income grows)

---

### Loop 4: Partner Network (structured MLM viral)

**Mechanics:** Partners actively recruit and build teams for commission income.

| Parameter | Value |
|-----------|-------|
| Active partners (recruiting) | 15% of users by M6 |
| Avg referrals per active partner/month | 3.8 |
| Registration conversion from partner outreach | 31% |
| **Per active partner K contribution** | **3.8 × 0.31 = 1.18** |
| **Weighted by % active partners (15%)** | **0.15 × 1.18 = 0.177** |

**Why this loop is the growth engine:**
Partners are motivated financially. Their CAC is their time investment. Wellex's CAC for partner-acquired users = commission paid.

Commission structure (partner referral):
- $5 USDC on referral registration
- 10% of referral's first subscription
- Ongoing team commissions (Levels 2–10)

**Optimizing this loop:**
- Lower activation threshold: first $100 commission milestone celebrated in-app
- Wellex Academy: train partners to recruit → higher active partner %
- **Target K4 by M6: 0.22** (from 0.177 as partner base grows)

---

## 3. Combined K Projections

### K Composition by Period

| Loop | M1 | M3 | M6 | M12 |
|------|:--:|:--:|:--:|:---:|
| L1 — Referral | 0.18 | 0.24 | 0.34 | 0.40 |
| L2 — Social Share | 0.21 | 0.27 | 0.36 | 0.42 |
| L3 — Income Reveal | 0.27 | 0.29 | 0.32 | 0.36 |
| L4 — Partner Network | 0.10 | 0.15 | 0.22 | 0.28 |
| **Combined K** | **0.41** | **0.55** | **0.68** | **0.80** |

> **Note:** Loops are not perfectly additive (some overlap). Actual combined K will be 85–90% of sum. Target M6: K ≈ 0.65 (conservative) to 0.75 (optimistic).

### Growth Model at K = 0.65

Starting from 1,000 paid acquired users/month:

```
Month 1: 1,000 paid + 650 organic = 1,650 new users
Month 2: 1,000 + 1,073 = 2,073 (organic from growing base)
Month 3: 1,000 + 1,348 = 2,348
Month 6: 1,000 + 2,460 = 3,460
Month 12: 1,000 + 5,380 = 6,380
```

**Total users (cumulative, M12):** ~42,000
**Of which organic (K-driven):** ~23,000 (55%)

---

## 4. CAC Efficiency Model

### Standard Model vs Wellex K-Model

| Metric | No viral (K=0) | K=0.4 | K=0.65 | K=0.8 |
|--------|:--------------:|:-----:|:------:|:-----:|
| Paid CAC | $30 | $30 | $30 | $30 |
| Effective CAC | $30 | $20 | $12.9 | $8.6 |
| Cost per 1,000 users | $30,000 | $20,000 | $12,900 | $8,600 |
| Saving vs no-viral | — | 33% | 57% | 71% |

**At M6 target K = 0.65 and 10,000 paid-acquired users:**
- Without viral: $300,000 CAC
- With K = 0.65: $129,000 CAC
- **Saved: $171,000 in M6 alone**

---

## 5. Viral Cycle Time

K-factor alone is incomplete. Time between invitation and registration matters.

**Wellex viral cycle time (avg):**
- L1 Referral: 4.2 days
- L2 Social share: 1.8 days (same-day click typically)
- L3 Income reveal: 6.1 days (slower — conversation-based)
- L4 Partner: 8.4 days (sales cycle)

**Weighted avg cycle time: ~4.5 days**

**Implications:**
- Fast viral cycle → faster compounding effect
- In 30 days: 6.7 cycles complete (30 / 4.5)
- At K = 0.65: effective monthly compounding ≈ 1 + (0.65 ^ 6.7) ≈ not exponential yet, but meaningful

---

## 6. North Star Metric

**For viral growth:** Monthly K-factor (measured, not modeled)

```
Measured K = (New organic users this month) / (Total users last month)
```

**Target tracking:**
| Month | Measured K target |
|-------|:----------------:|
| M1 | 0.35 |
| M3 | 0.50 |
| M6 | 0.65 |
| M12 | 0.80 |

**Dashboard widget** (Growth team view):
```
K-Factor This Month: 0.58 ↑ (was 0.49)
Top Loop: Income Reveal (K contribution 0.24)
New organic users: 1,847
Paid users this month: 3,188
Organic %: 37% ↑
```

---

## 7. Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|:-----------:|:------:|-----------|
| Income reveal loses punch as market saturates | Medium | High | Continuously increase yield credibility (on-chain proof) |
| Share rate declines (content fatigue) | Medium | Medium | New share card formats every quarter, streak NFT shareable |
| Partner loop slows if early partners underperform | Medium | High | Wellex Academy training, active partner incentives |
| Apple/Google restrict share mechanics | Low | High | Compliance review of all share prompts |

---

## Changelog

▸ v5.0 (04.03.2026) — EN translation by Tery Marius. Full expansion with projections.
▸ v1.0 (02.03.2026) — created by Opus 4.6.

---

*→ Related: [09_PARTNER_PROGRAM.md](09_PARTNER_PROGRAM.md) · [20_GROWTH_IDEAS.md](20_GROWTH_IDEAS.md) · [11_GO_TO_MARKET.md](11_GO_TO_MARKET.md)*

*Wellex © 2026 · wellex.ai*
