---
id: 04_APP_UX
title: "04 · WELLNESS APP (iOS / Android)"
sidebar_position: 4
description: "Wellex v5.0 · 05.03.2026"
---

# 04 · WELLNESS APP (iOS / Android)
> **Version:** 5.0 | **Date:** 05.03.2026 | **Status:** Public


> Wellex mobile app: pure wellness, WHOOP-model community, Monthly Yield display. No staking, no MLM, no financial operations.
>
> ⚠️ Wellex App is **not a crypto wallet.** It is a wellness application. All financial operations are performed exclusively in the WEB version.
> ⚠️ Target Yield is not a guarantee. APP displays yield % only — no dollar amounts. Actual yield depends on DeFi market conditions.

---

## 1. UX Philosophy

### Core Principle: APP = Wellness + Community

**The app does not (and will not) have:**
- Staking or any staking interface
- Deposits, withdrawals, financial transactions
- MLM structure or partner tree
- Dollar amount display
- Wallets or balances
- Any financial operations

> **Important:** Wellex App **is not a crypto wallet.** Users using only the bracelet without staking see WVI statistics and yield potential. To activate staking and begin earning — transition to the WEB version.

**The app has:**
- WVI (Wellex Vitality Index) — unified health scale 0–100
- Biometrics: emotions, sleep, activity
- AI coach (video / audio / text)
- WHOOP-model community: owner discovery, groups, challenges, leaderboards
- Monthly Yield display (% only, no amounts)
- Button to transition to WEB version

### Monthly Yield — Display Rules

| User Status | Display in APP | Action on Tap |
|-------------|---------------|---------------|
| **With active staking** | Current Monthly Yield as percentage (e.g. "15.8%"). Green accent, large font. No $ amount. | Information block |
| **Without staking** | Dash "—". Small text "Learn More →" | Popup: "Learn More about Yield" → deep link to WEB version |

### Lazy Factor

> **Open app → see the scale → get a recommendation → close. Average session time: 30 seconds.**

### Design Principles

| Principle | Implementation |
|-----------|---------------|
| **Glanceable** | WVI + Monthly Yield visible without scrolling |
| **Zero-config** | Bracelet connects automatically |
| **Proactive** | AI push notifications at the right moment |
| **Community-first** | Community is a full section, not an add-on (WHOOP model) |
| **Inclusive** | WCAG 2.1 AA; VoiceOver / TalkBack |
| **Offline-first** | Full functionality without internet; syncs on connection |
| **No Finance** | No financial elements whatsoever. Pure wellness. |

---

## 2. Navigation (Bottom Tab Bar)

5 main screens:

`Home · Metrics · Community · Assistant · Settings`

---

## 3. Screen 1: Home

### Wireframe

```
┌─────────────────────────────────┐
│ Status Bar                      │
│ Good morning                    │
│ Streak: 14 days                 │
│                                 │
│ ┌──────────┐                    │
│ │   72     │ ← WVI              │
│ │  /100    │   circular         │
│ │  ↑ +5    │   diagram          │
│ └──────────┘                    │
│                                 │
│ Monthly Yield: 15.8%            │
│ ─────────── or ──────────────   │
│ Monthly Yield: — [Learn More]   │
│                                 │
│ Emotions: 62  Sleep: 78  Phys: 75│
│                                 │
│ AI Recommendation               │
│ "Evening walk 20 min            │
│  will raise WVI to 78"          │
│ [Watch 1:30]                    │
│                                 │
│ Mini WVI Chart (7 days)         │
│                                 │
│ Home · Metrics ·                │
│ Community · Assistant ·         │
│ Settings                        │
└─────────────────────────────────┘
```

### Screen Elements

| Block | Description | Update |
|-------|-------------|--------|
| **WVI scale** | Circular diagram 0–100, colour: red → yellow → green | Every 15 min |
| **WVI trend** | Up/down arrow + weekly delta | Daily |
| **Monthly Yield Display** | % for stakers, "—" + "Learn More" for others | Real-time |
| **AI recommendation** | Card with advice (video / audio / text) | Every 4 hours |
| **Quick metrics** | 3 WVI components in mini cards | Every 15 min |
| **Streak** | Consecutive days of bracelet wear | Daily |
| **Mini chart** | WVI sparkline for 7 days | Daily |

---

## 4. Screen 2: Metrics

### Wireframe

```
┌─────────────────────────────────┐
│ Metrics                [7d][30d][90d]│
│                                 │
│ Emotional — 62/100              │
│ ████████████░░░░░░░░            │
│ Line chart (7 days)             │
│ HRV: 48 ms · Stress: 42        │
│ Current emotion: Calm           │
│ Tip: Breathe 5 min → +8        │
│                                 │
│ Recovery — 78/100               │
│ ██████████████████░░            │
│ Sleep: 7h 20m · Deep: 22%      │
│ Recovery: 74 · REM: 24%        │
│ Tip: Bed before 11pm            │
│                                 │
│ Physical — 75/100               │
│ █████████████████░░░            │
│ Steps: 9,240 · Cal: 420        │
│ MVPA: 35 min · Int: 68%        │
│ Tip: +2,000 steps today         │
│                                 │
│ Tab Bar                         │
└─────────────────────────────────┘
```

### Charts and Trends

| Period | Chart Type | Data |
|--------|-----------|------|
| 7 days | Line chart | Daily sub-scores |
| 30 days | Line chart + trend line | Average + forecast |
| 90 days | Bar chart (grouped) | Weekly averages |

### Drill-down on Component Tap

Each component expands to full-screen view with:
- Detailed metrics
- Day-by-day histograms
- AI insights
- Personalised recommendations

---

## 5. Screen 3: Community (WHOOP Model)

> Full community section inspired by WHOOP Teams + Strava Clubs + Oura Community. The centrepiece is **discovery of bracelet owners** and connection by wellness goals, including emotional wellbeing.

### Wireframe

```
┌─────────────────────────────────┐
│ Community                       │
│                                 │
│ [Search groups and people]      │
│                                 │
│ Wellex Users Nearby             │
│ ┌─────────────────────────┐     │
│ │ @sofia · WVI 85 · 1.2 km│     │
│ │ @ethan_fit · WVI 78 · 3km│    │
│ │ [Find More →]           │     │
│ └─────────────────────────┘     │
│                                 │
│ My Groups                       │
│ ┌─────────────────────────┐     │
│ │ Morning Yoga (23)       │     │
│ │ Avg WVI: 71 · You: 72   │     │
│ └─────────────────────────┘     │
│ ┌─────────────────────────┐     │
│ │ London Runners (156)    │     │
│ │ Avg WVI: 68 · You: 72   │     │
│ └─────────────────────────┘     │
│ [+ Create Group]                │
│                                 │
│ Active Challenges               │
│ ┌─────────────────────────┐     │
│ │ Team WVI ≥ 70           │     │
│ │ 5 days · 68/70          │     │
│ │ ████████████████░░      │     │
│ └─────────────────────────┘     │
│                                 │
│ Leaderboards                    │
│ 1. @health_pro WVI: 94         │
│ 2. @yoga_daily WVI: 91         │
│ 3. @run_master WVI: 89         │
│ ...47. @you WVI: 72            │
│ [All Leaderboards →]            │
│                                 │
│ Social Feed                     │
│ @sofia reached WVI 85!          │
│ @ethan_fit: 100-day streak      │
│ Team "London Runners" — top 3   │
│                                 │
│ Tab Bar                         │
└─────────────────────────────────┘
```

### Community Features (WHOOP Model)

| Block | Description |
|-------|-------------|
| **Discovery: People Nearby** | Find Wellex bracelet owners by geolocation and interests. Cards: avatar, WVI, distance, interests. Option to add as friend. Filters: radius, WVI level, interests. |
| **Wellness Groups** | Interest-based groups: yoga, running, meditation, biohacking, breathwork, stress management, emotional wellness. Open and closed. Up to 500 members. |
| **Team Challenges** | Team competitions: "Team WVI ≥ 70 for a week", "100K steps as a team in 3 days", "7 days of meditation". Rewards: badges, NFT achievements. |
| **Leaderboards** | Global, regional, among friends, within group — ranked by WVI. |
| **Social Feed** | Member achievements, records, milestones. Reactions: encouragement, motivation. |
| **Friend Challenges** | 1-on-1 WVI duels over 7 days. |
| **Wellness Teams** | Teams of 5–50 people with shared WVI and joint goals. |

### Community vs WHOOP / Oura / Strava

| Feature | Wellex | WHOOP Teams | Oura | Strava |
|---------|--------|-------------|------|--------|
| Owner discovery | Geolocation + interests | — | — | — |
| Interest-based groups | Wellness + emotional | Teams only | — | Clubs |
| Team challenges | By WVI | By Strain | — | By activity |
| Leaderboards | WVI (health + emotions) | Strain | Readiness | Activity |
| Social feed | Yes | — | — | Yes |
| 1v1 challenges | Yes | — | — | Partially |
| Emotional wellness focus | Central | — | — | — |

**Wellex Community unique advantage:** members are connected not only by physical activity but also by **emotional wellbeing** — meditation groups, stress management, emotional wellness. The first wellness community where mental health is central.

---

## 6. Screen 4: AI Assistant

### Wireframe

```
┌─────────────────────────────────┐
│ AI Assistant                    │
│                                 │
│ ┌─────────────────────────┐     │
│ │ Morning Recommendation  │     │
│ │ HRV dropped 15%.        │     │
│ │ 4-7-8 breathing 5 min.  │     │
│ │ [Video 1:30] [Audio]    │     │
│ │ [Text]                  │     │
│ └─────────────────────────┘     │
│                                 │
│ ┌─────────────────────────┐     │
│ │ Evening Plan            │     │
│ │ 1. Walk 20 min          │     │
│ │ 2. No screens after 10pm│     │
│ │ 3. Bed before 11pm      │     │
│ │ Forecast: WVI +5 tomorrow│    │
│ └─────────────────────────┘     │
│                                 │
│ ┌─────────────────────────┐     │
│ │ Weekly Report           │     │
│ │ Sleep +12%, stress +8%  │     │
│ │ [Watch report 3:00]     │     │
│ └─────────────────────────┘     │
│                                 │
│ Ask AI...                       │
│                                 │
│ Tab Bar                         │
└─────────────────────────────────┘
```

### Content Formats

| Format | Description | Duration | When |
|--------|-------------|----------|------|
| Video | Short instructions (breathing, warm-up, stretching) | 1–3 min | Morning, evening |
| Audio | Voice recommendations, meditations | 1–5 min | Anytime |
| Text | Checklists, plans, tips | — | Always |
| Report | Weekly / monthly analytics | 2–5 min | Weekly |

### Recommendation Types

| Type | Example | Trigger |
|------|---------|---------|
| Preventive | "Stress rising — breathe 5 min" | HRV drop > 15% |
| Corrective | "Little sleep yesterday — bed earlier tonight" | Sleep < 6h |
| Motivational | "Only +8 WVI to Monthly Yield 18%!" | WVI near tier threshold |
| Educational | "How Emotional Mining works" | First week |
| Congratulatory | "30-day streak!" | Milestone |

---

## 7. Screen 5: Settings

### Features

| Block | Details |
|-------|---------|
| **Bracelet** | BLE connect / disconnect, battery status, OTA update |
| **Subscription** | $19/month subscription status, management |
| **Profile** | Account, notifications, language, theme (dark / light) |
| **Privacy** | Data management, export, account deletion (GDPR) |
| **WEB Version** | "Go to WELLEX WEB" button → deep link to web app |

### Go to WEB Button

Prominent button in settings and on the home screen (on tap of Monthly Yield "—"):

```
┌─────────────────────────────────┐
│ Go to WELLEX WEB Version        │
│ Staking · Income · Partners     │
│ [Open →]                        │
└─────────────────────────────────┘
```

---

## 8. User Flows

### 8.1 Onboarding (New User)

1. Download app → Splash screen
2. **Registration:** Email / Apple ID / Google (1 tap)
3. **Non-custodial wallet:** on email registration the system automatically generates a non-custodial wallet. Private keys **belong to the user** and can be exported to any compatible external app. The user retains full wallet control regardless of platform.
   - On registration via external Web3 wallet (WalletConnect / MetaMask) — user's own wallet is used.
4. Screen: "Connect Wellex Band" → NFC tap or BLE scan → pairing (15 sec)
5. Brief tour (3 swipe screens): WVI · Community · AI coach
6. Calibration begins (7 days, WVI = 50)
7. Push: "Wear the bracelet 24/7 for accurate calibration"
8. Home screen

> **Non-custodial wallet:** created automatically on email registration. Hidden in APP — full functionality in WEB. Key export available via WEB → Settings → Security → Export Private Key.

### 8.2 Daily Cycle (Active User)

```
07:00 Push: "Good morning! Recovery 82. Great day for a workout"
 → Action: read (5 sec)
12:00 Push: "WVI today 74. Walk 20 min → +5"
 → Action: optional
19:00 Push: "Your WVI today: 76 (+3 from yesterday)"
 → Action: nothing
22:00 Push: "Sleep plan: bed before 11pm, no screens"
 → Action: nothing or follow
```

**Total: 0–2 actions per day, 30 seconds in the app.**

### 8.3 Transition to WEB (Financial Operations)

**Scenario A: user with bracelet only (no staking)**

Users who only use Wellex Band and have no staking funds see:
- WVI statistics and three components (emotions, recovery, physical activity)
- Monthly Yield: "—" with hint "Learn about yield"
- Income potential at their current WVI: "Your WVI 72 → potential 12%/month"

Mechanism to motivate transition:
1. Home screen — Monthly Yield "—", small text "Learn More →"
2. Tap → **Motivational popup:**
   ```
   ┌─────────────────────────────────┐
   │ 💰 Your WVI 72 = 12%/month     │
   │                                 │
   │ At your health level you can    │
   │ earn up to 12% per month        │
   │ on your funds.                  │
   │                                 │
   │ [Activate Yield →]              │
   │ Open Wellex WEB version         │
   └─────────────────────────────────┘
   ```
3. "Activate Yield" button → deep link to WEB
4. In WEB: authorisation (same account) → directly to Staking screen
5. Full financial functionality: deposit, staking, partner programme

**Scenario B: Active staker**
1. User sees Monthly Yield "15.8%" on home screen
2. Tap → information block with breakdown and link to WEB for management

### 8.4 Discovery: Find Nearby Bracelet Owners

1. Community → "Wellex Users Nearby"
2. Map / list of owners with WVI, distance, interests
3. Tap on profile → shared groups, WVI chart, interests
4. [Add Friend] → invitation to team or challenge

### 8.5 Joining a Community Group

1. Community → Search → "Yoga"
2. List of groups with description, member count, avg WVI
3. Tap on group → Preview → [Join]
4. Group added to "My Groups" → challenges and group feed available

### 8.6 Participating in a Team Challenge

1. Community → Active Challenges → "Team WVI ≥ 70"
2. View details: rules, deadline, participants, progress
3. [Join] → select team or create own
4. Daily progress + push notifications → final result

---

## 9. Dark / Light Theme

| Element | Light | Dark |
|---------|-------|------|
| Background | #FFFFFF | #0D0D0D |
| Surface (cards) | #F5F5F5 | #1A1A2E |
| Primary accent | #4CAF50 (green) | #66BB6A |
| Text primary | #1A1A1A | #F0F0F0 |
| Text secondary | #666666 | #AAAAAA |
| WVI ring | Gradient green → yellow → red | Same, +10% brightness |

**Auto mode:** follows the system theme.

---

## 10. Accessibility (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|---------------|
| VoiceOver / TalkBack | All elements with accessibility labels |
| Contrast | Minimum 4.5:1 for body text |
| Dynamic Type | System font scaling supported |
| Motion sensitivity | "Reduce Motion" → disables animations |
| Touch targets | Minimum 44×44 pt |
| Screen reader order | WVI → Monthly Yield → recommendation → metrics |

---

## 11. Offline Mode

| Function | Offline | Sync |
|----------|---------|------|
| Bracelet data collection | Yes | On connection |
| WVI calculation (approximate) | On-device | Server-side recalculation |
| AI recommendations | Cached | Updated on connection |
| History and charts | Local DB | Delta sync |
| Community / Leaderboard | Requires internet | — |

---

## 12. Push Notifications

| Category | Frequency | Example | Disableable |
|----------|-----------|---------|------------|
| Health (AI) | 2–4/day | "HRV dropped — breathe 5 min" | Yes |
| WVI progress | 1/day | "WVI today: 76 (+3)" | Yes |
| Community | 1–2/day | "Your team is in 2nd place!" | Yes |
| Motivation (streaks) | 1/day | "14 days in a row!" | Yes |
| Bracelet | On event | "Battery 10%" | No |
| Security | On event | "New account login" | No |

**Smart scheduling:** notifications are not sent during night hours; timezone is accounted for automatically.

---

## 13. Technical Requirements

| Parameter | iOS | Android |
|-----------|-----|---------|
| Minimum version | iOS 16+ | Android 11+ |
| BLE | 5.3 | 5.3 |
| App size | ~85 MB | ~65 MB |
| Framework | SwiftUI | Kotlin / Jetpack Compose |
| Auth | Email, Apple ID, Google | Email, Google, Apple ID |
| Web3 | Hidden (ERC-4337) | Hidden (ERC-4337) |
| Local DB | Core Data / SQLite | Room / SQLite |
| Analytics | Mixpanel | Mixpanel |
| Crash reporting | Sentry | Sentry |

---

## 14. Summary Table: APP vs WEB

| Feature | APP | WEB |
|---------|:---:|:---:|
| WVI (0–100) | ✅ | ✅ |
| Biometrics (3 components) | ✅ | Widget |
| AI coach | ✅ | — |
| Community (WHOOP model) | ✅ | — |
| Owner discovery | ✅ | — |
| Monthly Yield % display | ✅ | ✅ |
| Monthly Yield $ amounts | — | ✅ |
| Staking / Deposit / Withdrawal | — | ✅ |
| MLM / Partner network | — | ✅ |
| Wallet | — | ✅ |
| Promo materials | — | ✅ |
| Bracelet connection | ✅ | — |
| Push notifications | ✅ | — |

---

## 15. Help Center & Support

### 15.1 In-App Support Flow

Users get help without leaving the app:

| Channel | Description | Response Time |
|---------|-------------|--------------|
| AI Help Bot | First line — answers 80%+ of requests instantly | < 5 sec |
| In-App Chat | Live support agent (text) | < 2 hours |
| Email | support@wellex.ai — for complex cases | < 24 hours |
| FAQ | Built-in knowledge base with search | Instant |

### 15.2 Help Center — Categories

▸ Bracelet — connection, sync, battery, OTA, returns
▸ WVI — how it's calculated, why it dropped, calibration
▸ Yield — how it accrues, when it pays out, why % changed
▸ Staking — deposit, withdrawal, lock-up periods (in WEB)
▸ Account — password, 2FA, deletion, GDPR
▸ Wallet — key export, multi-chain, transactions
▸ Partner programme — ranks, bonuses, payouts
▸ Community — groups, challenges, moderation

### 15.3 Escalation Path

```
User → AI Help Bot (auto, instant)
 ↓ if unresolved (< 5% of cases)
In-App Chat → Live Agent
 ↓ if technical question
Tier 2 Support (blockchain, wallet)
 ↓ if critical (loss of funds)
War Room Protocol → CTO + Head of Support
```

### 15.4 Proactive Support (AI-driven)

▸ WVI dropped >15 in a day → automatic AI Coach tip
▸ Bracelet not synced >24 hours → push notification with instructions
▸ Yield not accruing → proactive notification + reason explanation
▸ Lock-up expiring in 3 days → reminder with options (withdraw / reinvest)

---

*→ Related documents: [03_WELLNESS_SCORE.md](03_WELLNESS_SCORE.md) (WVI) · [05_DASHBOARD.md](05_DASHBOARD.md) (WEB Dashboard) · [26_COMMUNITY.md](26_COMMUNITY.md) (Community spec) · [07_AI_SYSTEM.md](07_AI_SYSTEM.md) (AI assistant)*

*Wellex © 2026 · Confidential*
