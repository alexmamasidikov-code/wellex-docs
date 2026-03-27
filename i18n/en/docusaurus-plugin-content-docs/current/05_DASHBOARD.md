---
id: 05_DASHBOARD
title: "05 · WEB DASHBOARD"
sidebar_position: 5
description: "Wellex v6.1 · 05.03.2026"
---

# 05 · WEB DASHBOARD
> **Version:** 6.1 | **Date:** 05.03.2026 | **Status:** Public


> Wellex web platform: staking management, partner network, AI agents, analytics
>
> ⚠️ The Wellex App (iOS/Android) is not a crypto wallet — it is a wellness application. All financial operations (staking, deposits, withdrawals, MLM) are performed exclusively in the WEB version.

---

## 1. Overview

The Web Dashboard (Wellex web app) is the control centre for finances and the partner network. The mobile app covers wellness and community; **WEB** handles all financial operations.

### Architectural Split: APP ↔ WEB

| Aspect | APP (iOS/Android) | WEB Platform |
|--------|-------------------|--------------|
| Focus | Wellness, Community | Finance, Partnership |
| WVI | ✅ Full | ✅ Widget |
| Monthly Yield | % only | Full breakdown in $ |
| Staking | ❌ | ✅ |
| Deposit / Withdrawal | ❌ | ✅ |
| MLM / Partner | ❌ | ✅ |
| AI Coach | ✅ | ❌ |
| Community | ✅ | ❌ |

### WEB Dashboard Modules

`💰 Wallet · 📈 Staking · 🌐 Partner Network · 🤖 AI Agents · 📊 Analytics · 🛡️ Admin Panel`

---

## 2. Registration / Login to WEB

### Method 1: Email Login (from APP or directly)

1. Email + password → login
2. If arriving from APP — account already exists, WEB3 wallet created automatically
3. Full access to financial features

### Method 2: WEB3 Wallet

1. Click "Connect Wallet" → WalletConnect / MetaMask / Trust Wallet
2. Sign message (EIP-4361 — Sign-In with Ethereum)
3. Enter email to create / link Wellex account
4. Full access to financial features

**Single account:** one account works in both APP and WEB.

---

## 3. Module: Wallet (💰 Wallet)

### 3.1 Widgets

| Widget | Description | Update |
|--------|-------------|--------|
| **Total Balance** | Deposit + accumulated yield + reinvestment — total balance in $ | Real-time |
| **Yield Dashboard** | WVI → Monthly Yield → yield per day / week / month / all time | Daily |
| **Monthly Yield Gauge** | Visual gauge for Monthly Yield with breakdown (base + wellness boost) | Real-time |
| **WellexVault** | Single vault status: amount, WVI, current yield, lock-up | Real-time |
| **Transaction History** | Table: date, type, amount, status, hash, network | Real-time |
| **Income Forecast** | AI yield forecast for 3 / 6 / 12 months | Daily |

### 3.2 Functions

| Function | Description |
|----------|-------------|
| **Deposit (Crypto)** | Any cryptocurrency from any network (EVM + Tron + Solana) → auto-converted to USDT/USDC |
| **On-Ramp** | Fiat top-up (bank card, local payment methods) → auto-converted to USDC/USDT |
| **Withdrawal (Crypto)** | USDC / USDT to external wallet on any supported network |
| **Off-Ramp (Card)** | Payout to bank card / local payment methods |
| **Reinvest** | Auto-reinvest yield (activated for $129) |
| **AI Auto-Optimize** | WellexVault managed by AI agent automatically — manual strategy changes unavailable |
| **Data Export** | CSV / PDF: transactions, yield history, tax report |
| **Private Key Export** | Settings → Security → Export Private Key. Non-custodial wallet belongs to the user — full private key export for transfer to any compatible app (MetaMask, Trust Wallet, etc.) |

> **Non-custodial wallet:** every user who registers via email automatically receives a non-custodial wallet. Private keys are available for export only to the user. The user retains full control regardless of the platform. → *[04_APP_UX.md §8.1 Onboarding]*

### 3.3 Multi-Chain Wallet UI

The wallet displays balances across all supported networks. The user sees a single aggregated balance and can switch the view by network:

```
🌐 Network: [All Networks ▾]
  ┌──────────────┬──────────────┬──────────────┐
  │ Ethereum     │ Polygon      │ BSC          │
  │ $4,200.00    │ $3,100.00    │ $1,800.00    │
  ├──────────────┼──────────────┼──────────────┤
  │ Arbitrum     │ Optimism     │ Base         │
  │ $1,200.00    │ $900.00      │ $750.00      │
  ├──────────────┴──────────────┴──────────────┤
  │ Avalanche                  │ $500.00       │
  ├──────────────┬──────────────┬──────────────┤
  │ Tron         │ Solana       │              │
  │ $350.00      │ $450.00      │              │
  └──────────────┴──────────────┴──────────────┘

💰 Aggregate Balance: $12,450.00
```

### 3.4 On-Ramp / Off-Ramp UI

**On-Ramp** (fiat top-up) — `[+ Deposit]`:

```
┌─────────────────────────────────────────────┐
│  💳 On-Ramp                                 │
│                                             │
│  Amount: [$500]  [USD ▾]                    │
│  Method: [Bank Card ▾]                      │
│  Local payment methods available by region  │
│                                             │
│  Conversion: USD → USDC                     │
│  You receive: ≈ $487.50 USDC                │
│  Fee: ~2.5%                                 │
│                                             │
│  [Continue →]                               │
└─────────────────────────────────────────────┘
```

**Off-Ramp** (payout to card) — `[Withdraw to Card]`:
```
┌─────────────────────────────────────────────┐
│  💳 Off-Ramp — Card Payout                  │
│                                             │
│  Amount: [$200]  USDC                       │
│  Card: **** **** **** 4242                  │
│  Local method: [select ▾]                   │
│                                             │
│  You receive: ≈ $194 USD                    │
│  Fee: ~3%                                   │
│                                             │
│  [Confirm →]                                │
└─────────────────────────────────────────────┘
```

After on-ramp, USDC is automatically credited to WellexVault.

### 3.5 Example Contents

```
💰 Total Balance: $12,450.00
 Deposit (WellexVault): $10,000.00
 Accumulated yield: $1,950.00
 Reinvested: $500.00

📈 Yield Dashboard
 WVI: 72 → Monthly Yield: 12% (Target)
 Yield/month: ~$1,200 (on $10K deposit)

🏦 WellexVault · AI Auto-Optimize ✅
 Lock-up: 30 days (amount $10,000)
 Insurance: 100% coverage

[💸 Withdraw] [🔄 Reinvest] [➕ Deposit] [📥 Export]
```

---

## 4. Module: Staking (📈 Staking)

### 4.1 WellexVault — Single Vault

Wellex uses **one unified vault — WellexVault**. The Wellex ecosystem has **no separate packages or subscription tiers** — a single staking format for all participants. The AI agent automatically allocates funds across DeFi protocols to maximise yield based on the user's WVI.

| Parameter | Value |
|-----------|-------|
| **Vault** | WellexVault (single for all) |
| **Packages / tiers** | **None** — single staking format |
| **Management** | AI Auto-Optimize (manual strategy changes unavailable) |
| **Insurance coverage** | 100% |
| **Minimum amount** | $50 (Micro-Starter) |

### 4.2 Yield Based on WVI

User yield is determined by their **Wellex Vitality Index (WVI)**:

| WVI | Monthly Yield | Annual |
|-----|:-------------:|-------:|
| 0–39 | 0% | 0% |
| 40–49 | 2% | ~24% |
| 50–59 | 5% | ~60% |
| 60–69 | 8% | ~96% |
| 70–79 | 12% | ~144% |
| 80–89 | 16% | ~192% |
| 90–100 | 20% | ~240% |

> ⚠️ **Disclaimer:** Actual yield depends on DeFi market conditions and is distributed proportionally by WVI from the shared Yield Pool. Figures represent theoretical maximum under favourable conditions.

### 4.3 Lock-up by Deposit Amount

| Deposit Amount | Lock-up Period |
|----------------|----------------|
| $0 – $999 | 0 days (no lock) |
| $1,000 – $9,999 | 30 days |
| $10,000+ | 90 days |

Lock-up applies to each deposit individually from the time it is made.

### 4.4 Interface

```
📈 WellexVault

┌──────────────────────────────────────────────┐
│  🏦 WellexVault                              │
│  Your deposit: $10,000.00                    │
│  Current WVI: 72 → Monthly Yield: 12%        │
│  Annual forecast: ~$14,400                   │
│  Lock-up: 30 days (expires 31.03.2026)       │
│  Insurance: ✅ 100% coverage                 │
│  Management: 🤖 AI Auto-Optimize             │
│                                              │
│  [➕ Add Funds] [💸 Withdraw after lock-up]  │
└──────────────────────────────────────────────┘

📊 WVI Impact on Monthly Yield
 Current WVI: 72 → Monthly Yield: 12%
 If WVI = 80 → Monthly Yield: 16% (+4%)
 If WVI = 60 → Monthly Yield: 8%  (−4%)

📋 Calculator
 Amount: [$10,000] Lock: [90 days] WVI: [72]
 → Forecast: $1,200/month · ~$14,400/year
```

---

## 5. Module: Partner Network (🌐 Network)

### 5.1 Widgets

| Widget | Description |
|--------|-------------|
| **Team Tree** | Interactive tree (D3.js): WVI, status, rank of each member |
| **KPI Cards** | Referrals, active members, income/month |
| **Income Breakdown** | Personal sales, team bonuses, matching |
| **Rank Progress** | Progress bar to next rank |
| **Funnel** | Invitations → Registrations → Active → Paying |
| **Promo Materials** | Banners, videos, post templates |

### 5.1a Partner Profile (popup on click)

**Required data when tapping/clicking any partner in the tree:**

```
┌─────────────────────────────────────────────┐
│  👤 @partner_name  🔷 Manager                │
│  WVI: 74  ×1.15 bonus multiplier            │
│─────────────────────────────────────────────│
│  💰 Personal staking:      $5,000.00        │
│  📊 Structure volume:      $127,400/month   │
│  👥 Active partners:       23               │
│─────────────────────────────────────────────│
│  ⬆️  To next rank (Director):                 │
│  Need $72,600 more in volume                │
│  Progress: ████████░░░░  64%               │
│─────────────────────────────────────────────│
│  [📩 Message]  [📊 Detailed Analytics]      │
└─────────────────────────────────────────────┘
```

**Four mandatory fields (CANONICAL — from spec document):**

| # | Field | Description | Data Source |
|---|-------|-------------|-------------|
| 1 | **Personal staking amount** | Partner's deposit in WellexVault in $ | WellexVault on-chain |
| 2 | **Aggregate partner volume** | Total PV of entire structure over 30 days | Partner Service |
| 3 | **Number of active partners** | Partners with staking or activity in last 30 days | Partner Service |
| 4 | **To next rank** | Missing PV for transition to next rank | Rank Engine |

**"Active partner" logic:** a partner is considered active with personal staking ≥ $50 OR ≥1 referral in the last 30 days.

---

### 5.1b D3.js Network Tree — Visual Indicators (CANONICAL)

The interactive partner network tree is implemented in **D3.js** with a full set of visual indicators. This is a key competitive advantage of Wellex — real-time on-chain data in a visual UI.

#### A. Node Colour Coding

| Node Colour | Condition | Business Meaning |
|-------------|-----------|-----------------|
| 🟢 **Green** `#4CAF50` | Active staking ≥$50 + login within last 7 days | Partner fully active |
| 🟡 **Yellow** `#FFC107` | Registered, no active staking | Partner needs activation |
| 🔴 **Red** `#F44336` | Last login >30 days ago | Partner at churn risk |
| ⚪ **Grey** `#9E9E9E` | Registered, no activity >60 days | Inactive partner |

#### B. Special Outline Indicators (overlaid on colour)

| Outline | Condition | Visual |
|---------|-----------|--------|
| 💎 **Diamond** (electric blue `#00B8FF`, 3px) | Partner WVI > 80 | Diamond outline — wellness elite |
| 🔥 **Gold glow** (`#FFD700`, pulse) | Partner in rank upgrade process (≥80% to next rank) | Golden glow — on track for promotion |
| ⚠️ **Orange dashed** (`#FF6F00`, 2px dash) | WVI < 40 (below Partner WVI Lite floor) | Requires coach attention |

#### C. Node Size — Proportional to PV

```
Node radius = clamp(16, 48, base_radius × (PV_partner / PV_max_in_tree))
```

| Partner PV | Node Radius |
|------------|-------------|
| 0 – $999 | 16px (min) |
| $1K – $9,999 | 20–28px |
| $10K – $49,999 | 28–36px |
| $50K – $199,999 | 36–44px |
| $200K+ | 48px (max) |

**Goal:** large partners visually dominate the tree without scrolling.

#### D. Tooltip on Hover (no click required)

When hovering over any node — tooltip appears instantly (delay: 0ms):

```
┌──────────────────────────────────┐
│  @ethan_wells   🔷 Manager        │
│  WVI: 74 · ×1.15 multiplier      │
│  PV/month: $127,400              │
│  Active partners: 23             │
│  Last login: 2 days ago          │
└──────────────────────────────────┘
```

**Tooltip fields (fixed):** name + rank + WVI + PV (volume/month) + days since last login.
Tooltip **requires no click** — maximum tree navigation speed.

#### E. Click on Node → Partner Profile Popup

Full-screen popup with 4 mandatory fields (see §5.1a). Tooltip remains visible under popup.

#### F. Animations

| Animation | Condition | Effect |
|-----------|-----------|--------|
| 🫀 **Pulse** (scale 1→1.08→1, 2s loop) | Partner inactive >14 days | Red node pulses — AI alert |
| ✨ **Shine sweep** (CSS gradient pass, 3s loop) | Gold outline — rank upgrade in progress | Shimmer passes over gold outline |
| 🔵 **Entry bounce** | New partner appeared in tree (WebSocket push) | Node appears with bounce animation |
| 📍 **Zoom-to-node** | Click on partner from AI Alert | D3 smoothly scales tree, centring selected node |

#### G. AI Alerts Panel — Tree Integration

A vertical AI alerts panel to the left of the tree. Each alert is clickable → zoom-to-node in D3:

```
┌─────────────────────────────────┐
│  🤖 AI Network Alerts           │
├─────────────────────────────────┤
│  🔴 @ethan_k — 22 days offline  │
│  Churn risk · [Message]         │
│─────────────────────────────────│
│  🔥 @sofia_r — 82% to Director     │
│  Support → upgrade in 8 days    │
│─────────────────────────────────│
│  🟡 @james_w — no staking       │
│  Potential $3,200/month · [Script]│
│─────────────────────────────────│
│  💎 @charlotte — WVI 88, top    │
│  Invite to Leadership Pool      │
└─────────────────────────────────┘
```

**Alert logic (AI-generated):**

| Alert Type | Trigger | Recommended Action |
|------------|---------|-------------------|
| 🔴 Churn risk | No login >14 days | Send personalised message (AI prepares script) |
| 🔥 Rank upgrade | ≥80% PV for next rank | Message with motivation + specific goal |
| 🟡 No staking | Registered >7 days, $0 staking | Onboarding script + income calculator |
| 💎 WVI elite | Partner WVI >80 | Offer Leadership Pool + mentorship |
| ⚠️ WVI drop | Partner WVI dropped >10 in a week | Wellness support through APP |

---

### 5.1c Drill-Down Navigation

The tree supports **unlimited depth** with lazy loading:

```
Root (You)
 └── Level 1 (all loaded)
      └── Level 2 (loaded when Level 1 expanded)
           └── Level 3+ (lazy load — on click of parent node)
```

| Parameter | Value |
|-----------|-------|
| Initial depth | 3 levels (displayed immediately) |
| Maximum depth | 10 levels (full plan) |
| Lazy load | Levels 4–10 load on demand |
| API contract | `GET /partner/tree?depth=3&expand=nodeId` |
| WebSocket | Real-time node status updates without page reload |

---

### 5.1d Competitive Benchmark: Network Tree

| Feature | Wellex | Herbalife | USANA | PM International |
|---------|:------:|:---------:|:-----:|:----------------:|
| Real-time data (WebSocket) | ✅ | ❌ (monthly) | ❌ (monthly) | ❌ (bi-weekly) |
| On-chain staking in popup | ✅ | ❌ | ❌ | ❌ |
| AI partner alerts | ✅ AI Agent | ❌ | ❌ | ❌ |
| Drill-down depth | ✅ 10 levels | limited | 3 levels | 2 levels |
| Partner WVI visible | ✅ | N/A | N/A | N/A |
| Status colour coding | ✅ 4 colours | ❌ | ❌ | ❌ |
| Node animations | ✅ (pulse, glow) | ❌ | ❌ | ❌ |
| Tooltip without click | ✅ | ❌ | ❌ | ❌ |
| Node size ∝ volume | ✅ (PV-proportional) | ❌ | ❌ | ❌ |

**BigFour-level conclusion:** Wellex is the only MLM platform with on-chain real-time network intelligence, integrated partner-level wellness analytics, and AI-driven proactive alerts. Competitors operate on monthly batch data and static trees.

---

### 5.2 AI Content Generator

Built-in tool for creating partner content:
- Prompt → AI generates post / script / story
- Buttons: [📋 Copy] [🔄 Alternative] [🌐 Translate]

---

## 6. Module: Webinar Rooms (🎥 Webinar Rooms) — v2.0

> Team webinars + external participants without accounts + live conversion funnel

### 6.1 Room Types

| Type | Audience | Access |
|------|----------|--------|
| **Team** | Partner's entire structure (all levels) | Auto-invite |
| **Open** | Internal + external via public link | No Wellex account needed |
| **Invite-only** | By personal invitation | Required |
| **Paid** | Anyone who purchased access | Paid |

### 6.2 Team Webinar

- "Team Webinar" button → auto-broadcast to entire structure (filters: rank / activity / region)
- Push / email / in-app notifications: 24h + 1h + 5 min before
- Members with accounts → login without separate registration
- Afterwards: list of "who didn't attend" → AI generates recap message

### 6.3 External Participants (without Wellex account)

- Public page: `wellex.ai/webinar/{username}/{slug}`
- Registration: name + email → pre-account (TTL 30 days) → host's referral automatically assigned
- UTM tracking by source (Telegram / Instagram / WhatsApp / direct)

### 6.4 Live Conversion Tools

Host presses `[Show CTA]` → all participants see:

```
┌──────────────────────────────────────────────┐
│  🚀 Want the same results?                   │
│  Join Wellex — bracelet free                 │
│  with $19/month subscription · Yield from WVI│
│                                              │
│  [🎯 Sign Up — Free]                         │
│  Already have an account? [Log In]           │
└──────────────────────────────────────────────┘
```

**6 CTA types:** Join / Staking / Coaching 1:1 / Download Materials / Ask a Question / Subscribe to Channel

**Conversion counter (host only):** clicked / registered / already partners — in real time

### 6.5 Host Live Interface

```
🔴 LIVE  "March Results"  Participants: 35 + 12 external
─────────────────────────────────────────────────────────
[Host video]              │ 💬 Chat [All / Team]
                          │ @alex_k: 🔥
[Screen share]            │ Guest12: when staking?
                          │ 🤖 AI: [suggest reply]
──────────────────────────────────────────────────────────
[🎯 CTA] [🗳 Poll] [📁 Materials] [👥 Participants] [⏹]
```

**Participants panel:** "Team" (rank + WVI) | "External" (name + conversion status)

### 6.6 Webinar Monetisation

| Model | Platform Fee |
|-------|:-----------:|
| Free (lead magnet) | 0% |
| Paid ticket | 10% |
| Replay access | 10% |
| Coaching 1:1 | 15% |

### 6.7 Follow-up Funnel (auto, 15 min after)

- Team: recording + chat link
- External (not registered): email with CTA "Join Wellex"
- External (registered): Welcome Pack → staking calculator → team chat

**Conversion analytics:** registrations → live → >80% view → CTA click → account → staking

---

## 7. Module: Partner Ecosystem Hub (💰 Ecosystem)

> Partner command centre. Three questions answered: how much am I earning → what's blocking me → what to do right now.

### 7.1 Income Dashboard (real-time)

- Total income/month + AI forecast to end of month
- **8 live income streams:** direct referrals / team bonuses / matching / rank bonus / WVI Performance / Leadership Pool / Fast Start / Webinar
- Click on stream → detailed breakdown (from whom / when / for what)
- **Income Unlock Panel:** AI shows inactive streams and how much money is being missed

### 7.2 AI Income Advisor (GPT-4o)

**Daily briefing (08:00 by TZ):**
```
🤖 Good morning, @sofia_r!
📊 Yesterday: PV +$2,340 · New: 2 · Active: 23/31
💡 3 priorities today:
  1. @ethan_k — 22 days offline → [Write Script]
  2. To Director: $8,200 PV in 11 days → [Plan]
  3. Webinar tomorrow 18:00 — 47 registered → [Prepare]
→ Forecast: +$1,100 by month end
```

**Modes:** "What to do" / "Grow ×2" (30/60/90-day plan) / "Crisis" (income dropped >20%) / "Simulation" / "Scripts"

### 7.3 Partner Development Tools

- **AI Onboarding:** new referral → auto 7-day activation plan
- **Activation Campaigns:** AI generates 5–7 messages → broadcast to team
- **Partner Milestone Tracker:** progress of each direct referral (first staking / $1K PV / first webinar)

### 7.4 Ecosystem Leaderboard

- Top 10 by income / network growth / webinar audience
- Own position + delta
- "Overtake the next one" button → AI plan of specific actions

---

## 8. Module: Community & Chat (💬 Community)

> Built-in messenger ecosystem. Team chats, groups, monetisable communities.

### 8.1 Space Types

| Type | Who Creates | Access |
|------|-------------|--------|
| Team chat | Auto at Manager rank | Entire structure |
| Public channel | Anyone (broadcast) | Everyone |
| Private group | Manager+ | By invitation |
| Paid group | Manager+ | $5–$500/month |
| 1:1 messages | Anyone → within their network | Direct |
| Webinar chat | Linked to webinar room | Participants |

### 8.2 Team Chat (auto)

- Created upon reaching Manager rank
- Referrals added automatically upon registration
- AI weekly team digest (every Monday)
- Milestone notifications: "🎉 @john_d made their first stake!"

### 8.3 Chat Functionality

**Messages:** text / photo / video / voice (Whisper transcription) / documents / referral link (one click)

**AI in chat:**
- `/ai summarize` — summary of last 50 messages
- `/ai script @user` — personalised script for a member
- Smart Reply: 3 response options for incoming messages

**Compliance filter:** auto-hides messages with income guarantees / MLM violations

### 8.4 API

```
GET/POST /api/v1/community/spaces
GET/POST /api/v1/community/spaces/{id}/messages
WebSocket: ws://wellex.ai/ws/community/{space_id}
```

---

## 9. Module: AI Agents (🤖 AI Agents)

| Agent | Function | Access |
|-------|----------|--------|
| **AI Wallet Agent** | Auto-optimise WellexVault, rebalancing, compounding — fully automatic | All users |
| **Growth Agent** | Promotion recommendations, target audience | All partners |
| **Analytics Agent** | Funnel, income forecast, cohort analysis | Advanced users |
| **Content Agent** | Post generation, video scripts | All partners |

---

## 10. Module: Analytics (📊 Analytics)

| Widget | Chart Type | Data |
|--------|-----------|------|
| WVI History | Line chart | WVI daily / weekly / monthly |
| Monthly Yield Trend | Area chart | Monthly Yield over 12 months |
| Yield Cumulative | Stacked area | Yield from WellexVault |
| WVI Components | Radar chart | Emotions / Recovery / Physical activity |
| Correlations | Scatter plot | WVI vs. yield |

### Data Export

| Format | Purpose | Fields |
|--------|---------|--------|
| **CSV** | Data analysis, accounting | date, type, amount_usdc, network, tx_hash, wvi_at_time, yield_rate |
| **PDF** | Tax document, partner report | All transactions + totals + yield summary + Wellex signature |
| **JSON** | API integration, developers | Full structure: wallet, transactions, yield_history, partner_tree |
| **Health Export** | Apple Health / Google Fit | wvi_daily, hrv, sleep_score, activity_score, emotion_score |

### CSV — Field Structure

```
date,type,amount_usdc,network,tx_hash,fee_usdc,wvi,yield_rate,status
2026-03-01,DEPOSIT,1000.00,polygon,0xabc123,0.50,72,12.0%,confirmed
2026-03-01,YIELD,40.00,polygon,0xdef456,0.10,72,12.0%,confirmed
2026-03-15,WITHDRAWAL,500.00,arbitrum,0xghi789,0.30,74,12.0%,confirmed
```

### PDF — Tax Report Sections

▸ Period: [from date] — [to date]
▸ Summary: total deposit, total yield, total withdrawn
▸ Transaction table with on-chain links
▸ Yield breakdown by month
▸ Average WVI for the period
▸ Partner bonuses (if applicable)
▸ Disclaimer: "This is not tax advice. Consult a tax adviser."
▸ Verification: QR code for document authenticity check

---

## 11. WVI Widget in WEB

Although the APP is the primary wellness platform, WEB displays a **WVI widget** for context:

```
┌──────────────────────┐
│ 🏥 Wellex Vitality   │
│ Index                │
│                      │
│ ┌────┐               │
│ │ 72 │ /100          │
│ └────┘               │
│ 🧠 62  😴 78  🏃 75  │
│                      │
│ Monthly Yield: 12%   │
│ Download APP for     │
│ full wellness →      │
└──────────────────────┘
```

---

## 12. Module: Admin Panel (🛡️ Admin)

> Available to administrators only

| Function | Description |
|----------|-------------|
| Users | Search, profile, balance, transaction history, fraud score |
| Real-time Metrics | DAU, MAU, TVL, revenue, retention |
| Alerts | Fraud events, TVL anomalies, system incidents |
| Configuration | Feature flags, Monthly Yield parameters, Yield Pool |
| Audit Log | Full log of administrator actions |

---

## 13. Responsive Design

| Breakpoint | Layout |
|-----------|--------|
| Mobile (< 768px) | Stack, 1 col |
| Tablet (768–1024px) | 2 col |
| Desktop (1024–1440px) | Sidebar + content |
| Wide (> 1440px) | Sidebar + 3 col |

---

## 14. Technology Stack

| Component | Technology |
|-----------|-----------|
| Frontend | React 18 + TypeScript + Vite |
| UI | Tailwind CSS + glass-morphism |
| State management | TanStack Query v5 |
| Charts | Recharts + D3.js |
| Backend API | FastAPI (Python 3.12) |
| Auth | JWT + OAuth 2.0 + WalletConnect (EIP-4361) |
| Real-time | WebSocket + SSE fallback |
| Blockchain | Ethers.js v6 + ERC-4337 (multi-chain) |
| On-Ramp / Off-Ramp | Built-in provider (card, local methods) |
| Supported networks | EVM: ETH · Polygon · BSC · Arbitrum · Optimism · Base · Avalanche + Tron + Solana |
| Cross-chain | LayerZero / Across bridges · 1inch / 0x / ParaSwap (DEX aggregation) |

---

> **Deposit protection:** all yield operations are protected by Dynamic Yield Cap and AI Wallet Agent. Single WellexVault coverage — **100%**. *→ [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md)*

*→ Related documents: [04_APP_UX.md](04_APP_UX.md) (APP) · [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) (yield) · [09_PARTNER_PROGRAM.md](09_PARTNER_PROGRAM.md) (partner program)*

*Wellex © 2026 · Confidential*
