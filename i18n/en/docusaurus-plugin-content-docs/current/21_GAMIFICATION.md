---
id: 21_GAMIFICATION
title: "21 · GAMIFICATION"
sidebar_position: 21
description: "Wellex v6.0 · 05.03.2026"
---

# 21 · GAMIFICATION

> **Version:** 6.0 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Product
> **SSOT for:** Achievement system, gamification mechanics, Living NFT
> **Dependencies:** 04_APP_UX (display), 26_COMMUNITY (community layer), 03_WELLNESS_SCORE (WVI)

> Achievements · Leaderboards · Streaks · Challenges · Seasons · NFT Rewards · Community Gamification
> All rewards in USDC · No fungible token · Integrated with Community (APP) and Yield (WEB)
>
> ⚠️ Yield-linked rewards are based on Target Yield — not guaranteed returns. Actual yield depends on DeFi market conditions.

---

## TL;DR

- 26 achievements across 6 categories · soulbound NFT badges · no trading value
- First 24h Achievement Chain: 6 badges in first 24h = dopamine loop = retention +40%
- Living NFT changes appearance in real time based on WVI

---

## Architectural Split

| Element | APP | WEB |
|---------|:---:|:---:|
| Achievements & Badges | ✅ Display | ✅ Yield impact |
| Streaks | ✅ | ✅ |
| Challenges (wellness) | ✅ | ❌ |
| Community challenges | ✅ | ❌ |
| Leaderboards | ✅ | ✅ (widget) |
| NFT Gallery | ✅ | ✅ |
| Yield boost from achievements | ❌ (% only) | ✅ (in $) |
| Seasons | ✅ | ✅ |

---

## Executive Summary

The Wellex gamification system is an engagement engine that increases DAU/MAU by 60%, retention by 63%, and average bracelet wearing time by 44%. Integrated with the Community section of the APP.

**Principle:** Wellex has no proprietary fungible token. All rewards are paid in USDC/USDT. NFTs = soulbound (ERC-5192) achievement badges (non-transferable, no tradeable value).

---

## 1. Achievements (26 Total)

### Categories

| Category | Count | Description |
|----------|:-----:|-------------|
| 🏃 Activity | 5 | Steps, workouts, calories |
| 😴 Sleep | 4 | Sleep quality and duration |
| 🧠 Mindfulness | 4 | HRV, stress, meditation (Emotional Mining) |
| 🔥 Streaks | 4 | Consecutive wearing days |
| 👥 Community | 5 | Groups, challenges, duels |
| 🏆 Prestige | 4 | Leaderboards, seasons |

### Full List

| # | Name | Category | Condition | Yield Bonus |
|---|------|:--------:|-----------|:-----------:|
| 1 | First Steps | 🏃 | 10,000 steps in 1 day | — |
| 2 | Marathon Week | 🏃 | 70,000 steps in a week | — |
| 3 | Million Miler | 🏃 | 1,000,000 total steps | +0.5% |
| 4 | Iron Will | 🏃 | 30 workouts in a month | +0.5% |
| 5 | Cardio King | 🏃 | 100 workouts of 30+ min | +0.5% |
| 6 | Dream Weaver | 😴 | 7 days of 7+ hours sleep | — |
| 7 | Sleep Master | 😴 | 30 days of 7+ hours | +0.5% |
| 8 | Deep Sleeper | 😴 | 25%+ deep sleep, 14 days | — |
| 9 | Year of Rest | 😴 | 365 nights of healthy sleep | +0.5% |
| 10 | Zen Mind | 🧠 | HRV ≥60, 7 consecutive days | — |
| 11 | Stress Slayer | 🧠 | Stress <30, 14 days | +0.5% |
| 12 | Inner Peace | 🧠 | HRV ≥70 + stress <20, 30 days | +0.5% |
| 13 | Emotional Miner | 🧠 | Predominantly positive emotions 30 days | +0.5% |
| 14 | Week Warrior | 🔥 | 7-day streak (WVI ≥50) | — |
| 15 | Monthly Champion | 🔥 | 30-day streak | Badge |
| 16 | Century Club | 🔥 | 100-day streak | NFT + yield +0.5% |
| 17 | Year-Long Legend | 🔥 | 365-day streak | NFT + yield +0.5% |
| 18 | Social Butterfly | 👥 | Join 5 groups | — |
| 19 | Team Player | 👥 | Participate in 5 team challenges | +0.5% |
| 20 | Duel Master | 👥 | Win 10 duels | — |
| 21 | Community Leader | 👥 | Create a group with 50+ members | NFT |
| 22 | Challenge King | 👥 | Complete 20 challenges | +0.5% |
| 23 | Leaderboard Star | 🏆 | Top 10 in any leaderboard | +0.5% |
| 24 | Season Champion | 🏆 | Top 3 in a season | +1.0% |
| 25 | Emotional Pioneer | 🏆 | WVI ≥90, 30 days | +1.0% |
| 26 | Founding Miner | 🏆 | First 1,000 users | +1.0% (lifetime) |

**Maximum yield boost from achievements: +5.0%**

---

## 2. Streaks

**Streak** = consecutive series of days with WVI ≥ 50. Displayed on the APP home screen.

| Streak | Reward |
|:------:|--------|
| 7 days | "Week Warrior" badge 🔥 |
| 14 days | Badge |
| 30 days | "Monthly Champion" NFT |
| 100 days | "Century Club" NFT + yield +0.5% |
| 365 days | "Year-Long Legend" NFT + yield +0.5% |

**Streak Protection:** 1 freeze/month (illness, travel).

---

## 3. Challenges

*(Integrated with Community — see [26_COMMUNITY.md](26_COMMUNITY.md))*

### Wellness Challenges (Individual)

| Challenge | Condition | Reward |
|-----------|-----------|--------|
| 💤 Sleep Marathon | 7 days of 7+ hours | Badge |
| 🚶 10K Every Day | 10,000 steps × 7 days | Badge |
| 🧘 Zen Week | HRV ≥60 every day | Badge |
| 🔥 Cardio Blast | 5 workouts ≥30 min | Badge |
| 🧠 Emotional Week | Predominantly positive emotions 7 days | Badge |

### Community Challenges (Team)

Managed through the APP Community section:
- Team WVI Challenge
- Group Step Challenge
- 1v1 Duels
- Seasonal Tournaments

---

## 4. Seasons (3 Months Each)

| Season | Period | Theme | Main Challenge | Prize Pool |
|--------|--------|-------|---------------|:----------:|
| **S1** | Apr–Jun 2026 | ☀️ "Solar Energy" | 300 hours of activity | $15,000 USDT |
| **S2** | Jul–Sep 2026 | 🧠 "Inner Balance" | Avg WVI ≥70 (Emotional Mining focus) | $20,000 USDT |
| **S3** | Oct–Dec 2026 | ❄️ "Steel Will" | 0 missed days + WVI ≥60 | $25,000 USDT |
| **S4** | Jan–Mar 2027 | 🌸 "Rebirth" | Improve WVI by 20+ from start | $20,000 USDT |

**Season 2 — "Inner Balance":** the first season entirely dedicated to Emotional Mining. Focus on the emotional component of WVI.

---

## 5. NFT Rewards (Soulbound)

All NFTs are **soulbound (ERC-5192)**: non-transferable, bound to the wallet.

| Category | Examples | Yield Bonus |
|----------|---------|:-----------:|
| Achievement NFT | Century Club, Community Leader | +0.5% each |
| Season NFT | S1 Gold, S2 Silver | +0.5–1.0% per season |
| Special NFT | Founding Miner, Emotional Pioneer | +1.0% (lifetime) |

### NFT Gallery (in APP profile)

```
🏅 Collection: 12 of 26
🏃 Activity: ███░░ 3/5
😴 Sleep: ██░░ 2/4
🧠 Mind: ██░░ 2/4
🔥 Streaks: ██░░ 2/4
👥 Community: █░░░░ 1/5
🏆 Prestige: ██░░ 2/4

Total yield boost: +3.5%
```

---

## 6. Leaderboards

*(Integrated with Community — see [26_COMMUNITY.md](26_COMMUNITY.md))*

| Leaderboard | Period | Access |
|-------------|--------|--------|
| 🌍 Global | Monthly | APP + WEB |
| 📍 Regional | Monthly | APP |
| 📈 Improvement | Monthly | APP |
| 👥 Team | Monthly | APP |
| 🔥 Streak | Ongoing | APP |
| 👫 Friends | Ongoing | APP |
| 🧘 Group | Per group | APP |

---

## 7. Gamification Economics

### Monthly Budget (at 10K users)

| Item | Amount/month |
|------|:------------:|
| Challenge rewards | $10,000 |
| Leaderboards | $5,000 |
| Team competitions | $5,000 |
| Streak rewards | $3,000 |
| NFT minting (gas) | $500 |
| **Total/month** | **$23,500** |

### ROI

| Metric | Without Gamification | With Gamification | Improvement |
|--------|:--------------------:|:-----------------:|:-----------:|
| DAU/MAU | 45% | 72% | +60% |
| Wearing time | 18 days/month | 26 days/month | +44% |
| Retention (6 months) | 40% | 65% | +63% |
| NPS | 35 | 58 | +66% |

---

## 8. First 24h Achievement Chain — Critical Retention Mechanic

Research shows: 80% of long-term retention forms in the first 24 hours. Wellex turns the first day into a series of dopamine loops.

| # | Time | Achievement | Trigger | Reward |
|:-:|------|-----------|---------|--------|
| 1 | Registration | 🎉 **"Welcome to Wellex"** | Account creation | Badge + CEO Welcome Video |
| 2 | ~5 min | 📱 **"Band Connected"** | First BLE bracelet connection | Badge + animation + push celebration |
| 3 | ~2 hours | 👣 **"First Steps"** | First 1,000 steps | Badge + first WVI snapshot |
| 4 | Next morning | 🌙 **"First Night"** | First recorded night of sleep | Badge + sleep insight ("Your first night: 6.8h") |
| 5 | Day 1–2 | ✨ **"Awakening"** | First WVI > 30 | Badge + WVI explanation |
| 6 | Day 1–2 | 🤝 **"Social Start"** | Add 1 friend / join a group | Badge + community access |

**6 badges within ≤48 hours = powerful dopamine loop = retention +40% based on comparable products (WHOOP, Strava).**

---

## 9. Living NFT — Viral Social Asset

**Concept:** A user's soulbound NFT whose visual appearance changes in real time based on WVI.

| WVI | Visual | State |
|:---:|--------|-------|
| 90–100 | 🔥 Golden glow, pulsing ornament | "Apex Wellness" |
| 70–89 | 💎 Blue glow, active animation | "High Performance" |
| 50–69 | 🌿 Green, calm animation | "Balanced" |
| 30–49 | ⚪ Silver, minimal animation | "Building" |
| 0–29 | 🌑 Dimmed, static | "Rest Mode" |

**Key properties:**
- Soulbound (non-transferable) — cannot be sold or transferred
- Updates automatically when WVI changes
- Visible in APP profile, WEB wallet, and as a public link
- Social media format: generates animated PNG/GIF for stories

**Viral mechanic:** "Look, my NFT is glowing gold today — I'm at WVI 94!" → organic content → awareness growth.

---

## 10. WVI Story — Sharing Biometrics on Social Media

**What it is:** An automatically generated visual card with personal WVI data.

**Formats:** Instagram Story (9:16), Telegram post (4:3), Twitter/X card (16:9).

**Card content:**
- WVI for day / week / month (large, visual)
- Streak (🔥 Day 47)
- Partner programme rank
- Living NFT (minimal animation)
- Watermark: wellex.ai

**Mechanic:** APP button "Share WVI" → select format → export → repost. Watermark creates organic marketing.

---

## 11. Duo Challenges — Social Competition

**Concept:** 1v1 competitions between APP users based on WVI.

**Mechanic:**
- User A challenges User B: "Who gets the higher WVI over 7 days?"
- Invitation via APP, Telegram, WhatsApp (deep link)
- Both agree → starts at midnight → real-time tracking
- Winner (higher WVI on Day 7) receives: badge + USDC micro-reward $1–$5 (from Gamification Budget)
- Loser receives: consolation badge + motivational message from AI Coach

**Virality:** "I challenge you to a WVI duel! 🤺" + link → built-in referral mechanic.

---

*→ Related: [26_COMMUNITY.md](26_COMMUNITY.md) (Community) · [03_WELLNESS_SCORE.md](03_WELLNESS_SCORE.md) (WVI) · [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) (yield boost)*

*Wellex © 2026 · Confidential*
