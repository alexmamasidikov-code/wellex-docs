---
id: 26_COMMUNITY
title: "26 · COMMUNITY"
sidebar_position: 26
description: "Wellex v5.0 · 05.03.2026"
---

# 26 · COMMUNITY

> Full specification of the Community section in APP · WHOOP Teams + Strava Clubs + Oura model · Social Wellness
> Version: 5.0 | 05.03.2026 | Confidential
>
> ⚠️ Community features may reference WVI tiers linked to Target Yield. Yield is not guaranteed — depends on DeFi market conditions.

---

## 1. Vision

Wellex Community is the social layer of the wellness ecosystem, accessible **only through the APP**. No financial transactions, no MLM. A pure wellness community with gamification and social incentives.

> **Analogues:** WHOOP Teams (team metrics) + Strava Clubs (challenges) + Duolingo Leagues (competitions) + Peloton Community (live events)

### Core Principles

| # | Principle | Implementation |
|---|-----------|---------------|
| 1 | **Wellness-first** | All interactions are designed to improve health, not for financial motivation |
| 2 | **Privacy by design** | WVI and sub-scores are visible only with consent. Biometrics are never public |
| 3 | **Positive-only** | No negative comparisons. "You're better than yesterday" > "You're worse than someone else" |
| 4 | **No finance in APP** | Balance, yield, deposits — only in WEB. Community = pure wellness |
| 5 | **AI-moderated** | Automatic toxicity moderation. AI Coach helps with social goals |

---

## 2. Community Structure

### 2.1 Teams

```
TEAM STRUCTURE
├── Open teams (5–10 people) — free entry
├── Private teams — invite-only
├── Corporate teams (B2B) — created via Enterprise
└── Geo-location teams — by city/region
```

| Parameter | Value |
|-----------|-------|
| Team size | 5–10 people |
| Creation | Any user (Level 4+) |
| Types | Open, Private, Corporate, Geo |
| Team WVI | Average WVI of all members |
| Team leaderboard | Regional and global |

### Team Roles

| Role | Who | Capabilities |
|------|-----|-------------|
| **Captain** | Team creator / vote | Invite, remove, choose challenges |
| **Member** | Everyone else | Participate in challenges, chat, leaderboard |
| **MVP of the Week** | Highest WVI | Badge + bonus XP |

### Team Screen (APP)

```
┌─────────────────────────────────┐
│ ← Team "Vitamins" ⚙️            │
│─────────────────────────────────│
│                                 │
│  🏆 Team WVI: 74               │
│  📊 Leaderboard position: #127 │
│                                 │
│  👤 Maria     WVI: 82 🥇 MVP   │
│  👤 Alex      WVI: 78 🥈       │
│  👤 James     WVI: 75 🥉       │
│  👤 Olivia    WVI: 71          │
│  👤 Andrew    WVI: 69          │
│  👤 Charlotte WVI: 68          │
│                                 │
│─────────────────────────────────│
│  🎯 Active Challenge            │
│  "50K steps in a week"          │
│  ████████████████░░░░░ 78%      │
│  Remaining: 2 days              │
│                                 │
│  💬 Team Chat (12 new)          │
│                                 │
│  ┌─────────────────────────┐    │
│  │ 📣 Invite to Team       │    │
│  └─────────────────────────┘    │
└─────────────────────────────────┘
```

---

## 3. Challenges

### 3.1 Challenge Types

| Type | Description | Frequency | Participants |
|------|-------------|-----------|-------------|
| **Daily Quests** | 5 mini-tasks (steps, breathing, mood check-in) | Daily | Individual |
| **Weekly Themed** | Focus on one area (sleep, meditation, walking) | Weekly | Individual / team |
| **Team vs Team** | Team vs team by cumulative WVI | Weekly | Team 5–10 |
| **Duo Challenges** | 1v1 between friends | On request | 2 people |
| **Seasonal Marathons** | Monthly events with prize pool | Monthly | All |
| **Corporate Challenges** | B2B — between company departments | On request | Corporate |

### 3.2 Weekly Themed Challenges

| Week | Theme | Condition | Reward |
|:----:|-------|-----------|--------|
| 1 | 🧘 "Week of Calm" | 7 days × 2 min breathing | +100 XP, badge |
| 2 | 🏃 "Step Walker" | 70K steps per week | +100 XP, badge |
| 3 | 😴 "Sleep Master" | 7 days with sleep >7h | +100 XP, badge |
| 4 | 🧠 "Emotional IQ" | 7 mood check-ins + avg Emotional >75 | +100 XP, badge |

### 3.3 Duo Challenges (1v1)

**Mechanics:**
1. User taps "Challenge to a Duel" → selects a friend
2. Friend receives push: "🎯 Alex challenges you! WVI duel for 7 days"
3. 7 days of competition by average WVI
4. Winner: "Duelist" badge + micro-reward (1–5 Wellex Points)
5. Sharing: "I won a WVI duel! wellex.ai 🏆"

**Viral potential:**
- Messenger integration (Telegram, WhatsApp invite links)
- Shareable result (WVI Story card)
- "I challenge you to a WVI duel!" — unique engagement mechanic

---

## 4. Leaderboard

### 4.1 Leaderboard Types

| Leaderboard | Metric | Update | Visibility |
|-------------|--------|:------:|-----------|
| **Global** | WVI | Daily | All (nicknames) |
| **Team** | Team WVI | Daily | All |
| **Streaks** | Streak length | Real-time | All |
| **By Level** | XP | Real-time | All |
| **Regional** | WVI by city/country | Daily | Geo-filtered |
| **Friends** | WVI among friends | Daily | Private |

### 4.2 Leagues (Duolingo Model)

```
🏆 Diamond League (Top 1%)
    ↑
💎 Ruby League (Top 5%)
    ↑
🥇 Gold League (Top 15%)
    ↑
🥈 Silver League (Top 30%)
    ↑
🥉 Bronze League (Top 50%)
    ↑
🔰 Starter League (All newcomers)
```

- Every week: top 10 from each league → promotion. Bottom 10 → demotion
- Rewards by league: XP bonus, exclusive badges
- Diamond League: exclusive Living NFT glow effect

---

## 5. Social Features

### 5.1 Friends

| Feature | Description |
|---------|-------------|
| Adding | By QR code, nickname, phone number (opt-in) |
| Friend profile | WVI (if permitted), streak, level, badges |
| Activities | Like achievements, comment on streaks |
| Privacy | Each user decides what to show (WVI, sub-scores, streak) |

### 5.2 WVI Story (Social Sharing)

**Mechanics:**
- Generate a beautiful card with WVI for the day/week/month
- Format: Instagram Story / Telegram post / WhatsApp
- Includes: WVI number, trend arrow, streak, Living NFT preview, rank
- Watermark: "wellex.ai" (viral marketing)
- "Share" button on Home Dashboard and in weekly report

**Example card:**
```
┌───────────────────────┐
│  🌿 WELLEX             │
│                       │
│     WVI: 78 🟢        │
│     ↑ +3 this week    │
│                       │
│  🔥 Streak: 12 days   │
│  🏅 Level: 7          │
│  💰 Yield: 14.2%/mo   │
│                       │
│  wellex.ai            │
└───────────────────────┘
```

### 5.3 Living NFT in Community

- Soulbound NFT, visible in user profile
- Visualization changes based on WVI in real time:
  - WVI 90+: golden glow ✨
  - WVI 70–89: green glow
  - WVI 50–69: normal
  - WVI <50: dimmed
- Viral content: "Look how my NFT glows!"
- Diamond League: exclusive diamond glow effect

### 5.4 Activity Feed

Personal activity feed of friends and team:

| Event | Example |
|-------|---------|
| Friend reached milestone | "🏅 Maria: 30-day streak!" |
| Team victory | "🏆 Team 'Vitamins' won!" |
| New badge | "⭐ James earned 'Athlete' badge" |
| WVI record | "📈 Olivia: WVI 92 — new record!" |
| Challenge completed | "✅ Andrew completed 'Week of Calm'" |

**Reactions:** Like (❤️), Fire (🔥), Applause (👏), Inspiring (💪)

---

## 6. Wellex Events (Live Community)

### 6.1 In-App Events

| Format | Frequency | Description |
|--------|-----------|-------------|
| **Wellness Wednesdays** | Weekly | Live guided meditation (AI Coach, 15 min) |
| **Sunday WVI Review** | Weekly | Weekly report + community highlights |
| **Monthly Challenge Kick-off** | Monthly | Seasonal challenge launch |
| **AMA with CEO** | Monthly | Q&A, roadmap update, community recognition |

### 6.2 Offline Events (Year 2+)

| Format | Frequency | Cities |
|--------|-----------|--------|
| **Wellex Meetup** | Monthly | Dubai, Istanbul, Moscow, Berlin, São Paulo |
| **Wellex Run** | Quarterly | Group run with WVI tracking |
| **Wellex Summit** | 2×/year | Keynote, awards, networking |

---

## 7. Moderation & Safety

### 7.1 AI Moderation

| Level | Mechanism | Action |
|-------|-----------|--------|
| **Auto-filter** | NLP toxicity, spam, phishing | Block + notification |
| **Reporting** | User reports content | Review queue (<4h) |
| **Human review** | Complex cases | Community Manager (<24h) |
| **Escalation** | Threats, illegal content | Block + law enforcement |

### 7.2 Community Guidelines

1. **Respect** — no toxicity, bullying, discrimination
2. **Privacy** — do not share others' health data
3. **No financial advice** — no financial discussions in APP
4. **No MLM recruiting in chats** — partner features only in WEB
5. **Positive environment** — support > criticism

### 7.3 Privacy Controls

| Setting | Options | Default |
|---------|---------|:-------:|
| WVI visible to | Everyone / Friends / Nobody | Friends |
| Sub-scores visible | Everyone / Friends / Nobody | Nobody |
| Streak visible | Everyone / Friends / Nobody | Everyone |
| Badges visible | Everyone / Friends / Nobody | Everyone |
| City/region | Show / Hide | Show |
| Profile in search | Yes / No | Yes |

---

## 8. Referral Mechanics (in Community)

**Important:** the referral LINK and financial bonuses are WEB-only. In the APP:

| APP Feature | Description |
|-------------|-------------|
| "Invite a Friend" | Generates an invite link (not an MLM referral link) |
| "Ambassador" badge | For 3+ active friends |
| Social proof | "Join 12,847 people" |
| Team invite | Invite to a team via messenger |

Financial results of referral actions are visible only in the WEB platform.

---

## 9. Community Metrics

### KPI Dashboard

| Metric | Target M3 | Target M6 | Target M12 |
|--------|:---------:|:---------:|:----------:|
| Total teams | 200 | 1,000 | 5,000 |
| Members in teams | 1,500 | 8,000 | 40,000 |
| DAU Community (chat/feed) | 500 | 3,000 | 15,000 |
| Challenges completed/week | 1,000 | 10,000 | 80,000 |
| Duo Challenges/week | 100 | 1,000 | 8,000 |
| WVI Stories shared/week | 200 | 2,000 | 15,000 |
| Average NPS Community | 50+ | 60+ | 70+ |

---

## 10. Community Roadmap

| Phase | Month | Features |
|-------|:-----:|---------|
| **MVP** | M1 | Teams, simple leaderboard, daily quests |
| **V1.1** | M2 | Duo Challenges, WVI Story, Activity Feed |
| **V1.2** | M3 | Leagues, Living NFT in profile, in-app events |
| **V2.0** | M6 | Geo-location teams, offline events integration |
| **V3.0** | M12 | Corporate teams (B2B), advanced analytics, Wellex SDK social features |

---

*Wellex © 2026 · Confidential*
