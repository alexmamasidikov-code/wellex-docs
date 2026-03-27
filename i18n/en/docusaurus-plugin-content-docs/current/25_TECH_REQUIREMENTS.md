---
id: 25_TECH_REQUIREMENTS
title: "25 · TECHNICAL REQUIREMENTS"
sidebar_position: 25
description: "Wellex v6.0 · 05.03.2026"
---

# 25 · TECHNICAL REQUIREMENTS

**Version:** 6.0
**Date:** 05.03.2026
**Status:** Canonical
**Key update:** Dual authentication (Email + Web3 Wallet); APP / WEB separation

> ⚠️ Technical specs describe infrastructure for yield distribution. Target Yield is not a guarantee — actual yield depends on DeFi market conditions.

---

## Contents

1. [Registration & Authentication](#1-registration--authentication)
2. [Authorisation & Session Management](#2-authorisation--session-management)
3. [Wallet & Payments](#3-wallet--payments)
4. [Staking (WEB only)](#4-staking-web-only)
5. [MLM Network (WEB only)](#5-mlm-network-web-only)
6. [Bracelet & Health Data Pipeline](#6-bracelet--health-data-pipeline)
7. [Subscription](#7-subscription)
8. [KYC/AML](#8-kycaml)
9. [Dashboard: APP vs WEB](#9-dashboard-app-vs-web)
11. [Security & Privacy](#11-security--privacy)
12. [Community (APP only)](#12-community-app-only)
13. [Notifications](#13-notifications)
14. [Localisation](#14-localisation--multi-language-support)
15. [API Architecture](#15-api-architecture)

---

## 1. Registration & Authentication

### 1.1 Dual Login Model

The platform supports two independent registration paths: **Email-first** (primary for APP) and **Web3-first** (for crypto users).

#### Path 1: Email-first (primary for APP)

| # | Requirement |
|---|------------|
| 1.1.1 | Registration via Email + password |
| 1.1.2 | Social login: Apple ID (Sign in with Apple), Google (OAuth 2.0) |
| 1.1.3 | On registration, a Web3 wallet is **automatically** created (ERC-4337 Account Abstraction) |
| 1.1.4 | Blockchain is completely hidden from the user |
| 1.1.5 | Web3 wallet is used for transactions on the WEB platform |
| 1.1.6 | Gasless transactions via paymaster (Polygon) |

#### Path 2: Web3 Wallet-first (for crypto users)

| # | Requirement |
|---|------------|
| 1.2.1 | "Connect Wallet" button on WEB platform |
| 1.2.2 | WalletConnect v2 integration: MetaMask, Trust Wallet, Coinbase Wallet, etc. |
| 1.2.3 | Verification via **EIP-4361** message signature (Sign-In with Ethereum) |
| 1.2.4 | After wallet connection — **mandatory email entry** to create account |
| 1.2.5 | Email used for access recovery, notifications, and APP linking |
| 1.2.6 | If email already registered — offer to link wallet to existing account |

#### Single Account

| # | Requirement |
|---|------------|
| 1.3.1 | Both registration paths lead to a **single account** in the system |
| 1.3.2 | One account = one email + one or more Web3 wallets |
| 1.3.3 | User can use APP, WEB, or both platforms simultaneously |
| 1.3.4 | Maximum 3 external Web3 wallets per account |

### 1.2 Required Registration Fields

| # | Field | Email-first | Web3-first |
|---|-------|:-----------:|:----------:|
| 1 | Email | ✅ | ✅ (after wallet connection) |
| 2 | Password | ✅ | ❌ (login via wallet signature) |
| 3 | First name | ✅ | ✅ |
| 4 | Last name | ✅ | ✅ |
| 5 | Date of birth | ✅ | ✅ |
| 6 | Country/region | ✅ | ✅ |
| 7 | Wallet address | ❌ (auto-created) | ✅ (from connected wallet) |
| 8 | Referral code | Optional | Optional |
| 9 | Terms of Service | ✅ | ✅ |
| 10 | GDPR consent | ✅ | ✅ |

### 1.3 Email Confirmation

OTP: 6 digits · Valid 15 minutes · Maximum 3 attempts

### 1.4 Two-Factor Authentication (2FA)

Supported methods: TOTP, SMS, backup codes

### 1.5 Social Login

| # | Requirement |
|---|------------|
| 1.5.1 | Providers: Google (OAuth 2.0), Apple ID (Sign in with Apple) |
| 1.5.2 | **Available in APP only** (not WEB) |
| 1.5.3 | On first login — automatic account + Web3 wallet creation |
| 1.5.4 | Additional prompt: date of birth and country |

### 1.6 Rate Limiting

Standard request limits for brute-force protection

### Acceptance Criteria — Registration

- [ ] AC-1.1: Email registration creates account + Web3 wallet automatically
- [ ] AC-1.2: Web3 Wallet connects via WalletConnect; EIP-4361 signature verifies ownership
- [ ] AC-1.3: After Web3 connection, email entry is mandatory
- [ ] AC-1.4: Single account works in both APP and WEB
- [ ] AC-1.5: Social login via Apple/Google in APP creates a full account

---

## 2. Authorisation & Session Management

### 2.1 Login Methods

| Method | Platform | Process |
|--------|----------|---------|
| **Email + password** | APP + WEB | Standard form + 2FA |
| **Social login** | APP | Apple ID / Google → auto-login |
| **Web3 wallet** | WEB | Connect wallet → EIP-4361 signature → auto-login |

### 2.2 Session Management

- JWT: Access Token — 15 minutes, Refresh Token — 30 days
- Token rotation on refresh
- Automatic session compromise detection

### 2.3 Device Management

List of authorised devices, remote session revocation

### 2.4 Biometric Login (APP)

Face ID / Touch ID / Fingerprint

---

## 3. Wallet & Payments

### 3.1 Dual Wallet Model

| Type | Creation | Management |
|------|----------|-----------|
| **Auto-created (MPC)** | On Email registration | Hidden from user; gasless transactions |
| **External (connected)** | On Web3 login | User manages independently |

| # | Requirement |
|---|------------|
| 3.1.1 | Auto-created: MPC wallet (Fireblocks/Dfns), 2-of-3 key share scheme |
| 3.1.2 | External: WalletConnect v2, EIP-4361 verification |
| 3.1.3 | Maximum 3 external wallets per account |
| 3.1.4 | All transactions gasless for auto-created (ERC-2771 + Relayer) |
| 3.1.5 | External wallet: gas paid by user (or Wellex subsidises) |

### 3.2 Card On-Ramp (Multi-provider)

| # | Requirement |
|---|------------|
| 3.2.1 | Integration: Provider A SDK (Primary), Provider B SDK (Secondary), Provider C SDK (Tertiary) |
| 3.2.2 | Supported methods: Visa/MC, Apple Pay, Google Pay, SEPA, PIX |
| 3.2.3 | Auto-routing: aggregator selects provider by best rate in region |
| 3.2.4 | KYC tiers: Tier 1 ($500/month, minimal KYC), Tier 2 ($5K/month, full KYC), Tier 3 ($5K+, EDD) |
| 3.2.5 | USDC credited to user's Safe{Wallet} automatically |
| 3.2.6 | Optional auto-deposit to WellexVault after on-ramp |
| 3.2.7 | Fallback: if Provider A unavailable → Provider B → Provider C |

### 3.3 Multi-EVM Support

| # | Requirement |
|---|------------|
| 3.3.1 | Supported networks: ETH, Polygon, BSC, Arbitrum, Optimism, Base, Avalanche + Tron + Solana |
| 3.3.2 | Cross-chain bridge: LayerZero (primary), Across (secondary) |
| 3.3.3 | DEX swap: 1inch Fusion API (primary), 0x Swap API (fallback), ParaSwap (tertiary) |
| 3.3.4 | Unified aggregated balance across all networks in UI |

### 3.4–3.7

Recovery Flow, transaction history — per standard specification

---

## 4. Staking (WEB only)

> **Critical restriction:** staking is completely excluded from APP. Available exclusively via the WEB platform.

### 4.1 APP: User Display

| # | Requirement |
|---|------------|
| 4.1.1 | APP displays **only Monthly Yield as a percentage** (for users with staking) |
| 4.1.2 | APP displays **"—"** (for users without staking) |
| 4.1.3 | On tap of "—" → popup "Learn More" → deep link to WEB |
| 4.1.4 | **APP excludes:** $ amounts, balance, deposit/withdraw, income calculator |

### 4.2 WEB: Full Staking Functionality

WellexVault (single ERC-4626), Lock-up by amount ($0–999 → 0d, $1K–9,999 → 30d, $10K+ → 90d), Auto-compound ($129) — per standard specification [06_YIELD_PROTOCOL.md]

---

## 5. MLM Network (WEB only)

> **Critical restriction:** MLM structure is completely excluded from APP.

| # | Requirement |
|---|------------|
| 5.1 | APP **does not display** MLM tree, partner bonuses, or referral links |
| 5.2 | All partner features — **WEB only** |
| 5.3 | WVI from APP affects WVI Performance Bonus in WEB (the only integration point) |

Remaining MLM mechanics (ranks, bonuses, compression) — per standard specification

---

## 6. Bracelet & Health Data Pipeline

Per standard specification (no changes)

---

## 7. Subscription

$19/month, billing, grace period — per standard specification

---

## 8. KYC/AML

Sumsub SDK, 3 verification levels — per standard specification

---

## 9. Dashboard: APP vs WEB

### APP — Screens

| # | Screen | Content |
|---|--------|---------|
| 1 | 🏠 Home | WVI (0–100), Monthly Yield %, streak, AI recommendation, mini chart |
| 2 | 📊 Metrics | 3 WVI components, charts, trends, AI insights |
| 3 | 👥 Community | Groups, challenges, leaderboards, social feed, friends |
| 4 | 🤖 AI Assistant | AI Coach (video/audio/text), forecasts, reports |
| 5 | ⚙️ Settings | Profile, bracelet, subscription, "→ WEB version" button |

> **APP excludes:** staking, wallet, MLM, finance, $ amounts.

### WEB — Modules

| # | Module | Content |
|---|--------|---------|
| 1 | 💰 Wallet | Balance, yield, deposit/withdraw, history |
| 2 | 📈 Staking | WellexVault (single), Monthly Yield in $, lock-up, calculator |
| 3 | 🌐 Network | MLM tree, bonuses, ranks, promo materials |
| 4 | 🤖 AI Agents | Wallet Agent, Growth Agent, Analytics |
| 5 | 📊 Analytics | WVI + yield history, forecasts, export |
| 6 | 🏥 WVI Widget | Mini WVI + link to APP |
| 7 | 🛡️ Admin | Admin panel (staff only) |

---

## 11. Security & Privacy

Encryption, GDPR, TEE, audits — per standard specification

---

## 12. Community (APP only)

> **Functionality available exclusively in APP.**

| # | Requirement |
|---|------------|
| 12.1 | Wellness Groups: create, join, up to 500 members |
| 12.2 | Team Challenges: team WVI competitions |
| 12.3 | 1v1 Duels: 7-day WVI duels |
| 12.4 | Leaderboards: Global, Regional, Friends, Group |
| 12.5 | Social Feed: achievements, milestones, reactions |
| 12.6 | Discovery: AI group recommendations by interests and geolocation |
| 12.7 | Privacy: granular opt-in for each feature |
| 12.8 | Moderation: ML spam filter + manual moderation + "Report" button |
| 12.9 | Community **not available** in WEB |

### Acceptance Criteria — Community

- [ ] AC-12.1: User creates a group and invites members
- [ ] AC-12.2: Team challenge tracks the team's average WVI
- [ ] AC-12.3: 1v1 duel lasts 7 days and determines a winner
- [ ] AC-12.4: Leaderboards update in real time
- [ ] AC-12.5: Social feed displays friends' achievements
- [ ] AC-12.6: Discovery recommends relevant groups

---

## 13. Notifications

### APP Push / In-app

| # | Event | Push | In-app |
|---|-------|:----:|:------:|
| 1 | WVI update | ✅ | ✅ |
| 2 | AI recommendation | ✅ | ✅ |
| 3 | Challenge update | ✅ | ✅ |
| 4 | Friend achievement | — | ✅ |
| 5 | Streak reminder | ✅ | ✅ |
| 6 | Monthly Yield change (for stakers) | ✅ | ✅ |
| 7 | Bracelet battery | ✅ | ✅ |
| 8 | Security alert | ✅ | ✅ |

### WEB Email / In-app

| # | Event | Email | In-app |
|---|-------|:-----:|:------:|
| 1 | Staking reward credited | — | ✅ |
| 2 | MLM bonus | — | ✅ |
| 3 | New referral | ✅ | ✅ |
| 4 | Rank upgrade | ✅ | ✅ |
| 5 | Subscription billing | ✅ | ✅ |
| 6 | Withdrawal processed | ✅ | ✅ |

---

## 14. Localisation & Multi-Language Support

### Supported Languages (Launch + Roadmap)

| Language | Code | Region | Priority | Timeline |
|----------|------|--------|----------|----------|
| English | EN | Global (default) | 🔴 Launch | Day 1 |
| Russian | RU | CIS, MENA | 🔴 Launch | Day 1 |
| Spanish | ES | LATAM | 🔴 Launch | Day 1 |
| Portuguese | PT | Brazil, Portugal | 🔴 Launch | Day 1 |
| Indonesian | ID | SEA | 🟡 Month 2 | M2 |
| Arabic | AR | MENA | 🟡 Month 2 | M2 |
| Turkish | TR | Turkey, MENA | 🟡 Month 3 | M3 |
| Vietnamese | VI | SEA | 🟢 Phase 2 | Q3 2026 |
| Thai | TH | SEA | 🟢 Phase 2 | Q3 2026 |
| Uzbek | UZ | CIS | 🟢 Phase 2 | Q3 2026 |

### Localisation Architecture

▸ i18n framework: i18next (React/WEB) + React Native i18n (APP)
▸ Strings stored in JSON files by language: `/locales/{lang}/translation.json`
▸ Auto-detect language by IP + browser locale → fallback EN
▸ User can switch manually (Settings → Language)
▸ RTL support: Arabic → automatic layout flip
▸ Numbers and currency: formatted by locale (Intl.NumberFormat)
▸ Dates: ISO 8601 on server → local format on client

### What Gets Localised

▸ All UI (buttons, labels, error messages)
▸ Push notifications
▸ Email notifications (onboarding, yield alerts, community)
▸ AI Coach recommendations (GPT-4o with system prompt in target language)
▸ Partner Academy materials (5 languages: RU, EN, ES, PT, ID)
▸ Legal disclaimers (adapted to user's jurisdiction)

### What Is NOT Localised (remains EN)

▸ Blockchain hashes and technical identifiers
▸ Error codes (for tech support)
▸ Admin panel (EN only)

---

## 15. API Architecture

### APP API Endpoints

| Group | Endpoints |
|-------|----------|
| Auth | `POST /auth/register` · `POST /auth/login` · `POST /auth/refresh` |
| Health | `POST /health/sync` · `GET /health/metrics` · `GET /health/wvi` · `GET /health/emotions` |
| Community | `GET /community/groups` · `POST /community/groups` · `GET /community/challenges` · `POST /community/duels` |
| Leaderboards | `GET /leaderboards/{type}` |
| AI | `POST /ai/chat` · `GET /ai/recommendations` |
| User | `GET /users/me` · `PATCH /users/me` |
| Notifications | `GET /notifications` · `PATCH /notifications/settings` |

### WEB API Endpoints

| Group | Endpoints |
|-------|----------|
| Auth | `POST /auth/wallet-connect` · `POST /auth/wallet-verify` |
| Wallet | `GET /wallet` · `GET /wallet/transactions` · `POST /wallet/withdraw` |
| Staking | `POST /staking/stake` · `POST /staking/unstake` · `GET /staking/positions` · `GET /staking/rewards` |
| MLM | `GET /network/tree` · `GET /network/stats` · `GET /network/bonuses` |
| Subscription | `POST /subscription/create` · `DELETE /subscription/cancel` |
| KYC | `POST /kyc/start` · `GET /kyc/status` |

### Shared Endpoints

| Group | Endpoints |
|-------|----------|
| WVI | `GET /wvi/current` · `GET /wvi/history` · `GET /wvi/monthly-rate` |
| Export | `GET /export/csv?from=&to=` · `GET /export/pdf?from=&to=` · `GET /export/json` |

---

## 16. Webhooks & Developer API

### 16.1 Webhooks — Real-time Events

Wellex sends webhook notifications to a partner's URL on key events:

| Event | Payload | When |
|-------|---------|------|
| `yield.credited` | amount, wvi, rate, tx_hash, timestamp | On yield credit |
| `deposit.confirmed` | amount, network, tx_hash, lock_until | After deposit confirmation |
| `withdrawal.completed` | amount, network, tx_hash, timestamp | After withdrawal |
| `partner.referred` | partner_id, rank, timestamp | New partner in structure |
| `partner.rank_upgrade` | partner_id, old_rank, new_rank | Partner rank upgrade |
| `partner.inactive` | partner_id, days_inactive | Partner inactive >14 days |
| `wvi.threshold` | old_wvi, new_wvi, new_rate | WVI threshold crossed |
| `bracelet.disconnected` | device_id, last_sync | Bracelet not synced >24h |

### 16.2 Webhook Security

▸ Signature on every event: `X-Wellex-Signature: HMAC-SHA256(secret, payload)`
▸ Retry logic: 3 attempts with exponential backoff (1m, 5m, 30m)
▸ Timeout: 10 seconds for response
▸ Expected response: HTTP 200. Otherwise — retry.
▸ Webhook logs: 30-day history in WEB Dashboard → Settings → Webhooks

### 16.3 Webhook Registration

```
POST /webhooks
{
  "url": "https://your-app.com/wellex-hook",
  "events": ["yield.credited", "partner.rank_upgrade"],
  "secret": "your_signing_secret"
}
```

### 16.4 Developer API — Public Endpoints

For B2B integrations (corporate wellness, partner platforms):

| Endpoint | Method | Purpose | Auth |
|----------|--------|---------|------|
| `/v1/wvi/{user_id}` | GET | User's current WVI | API Key |
| `/v1/yield/rate?wvi=72` | GET | Yield rate for WVI | API Key |
| `/v1/partner/tree/{partner_id}` | GET | Structure tree (3 levels) | API Key + OAuth |
| `/v1/partner/stats/{partner_id}` | GET | Partner statistics | API Key + OAuth |
| `/v1/health/check` | GET | Platform status | Public |

### 16.5 API Authentication

```
Authorization: Bearer {api_key}
X-Wellex-Version: 2026-03-01
Content-Type: application/json
```

API Keys created in WEB Dashboard → Settings → Developer → API Keys.
Rate limit: 1,000 req/min per API Key. Exceeded → HTTP 429.

### 16.6 SDKs

| Platform | Package | Status |
|----------|---------|--------|
| JavaScript / Node.js | `npm install @wellex/sdk` | Launch |
| Python | `pip install wellex-sdk` | Launch |
| iOS (Swift) | Swift Package Manager | Launch |
| Android (Kotlin) | Gradle dependency | Launch |
| React Native | `npm install @wellex/react-native` | Month 2 |

Documentation: `developers.wellex.ai` (internal, opens after launch)

---

## Appendix: Tech Stack

| Layer | Technology |
|-------|-----------|
| Mobile (APP) | SwiftUI (iOS) + Kotlin / Jetpack Compose (Android) |
| Web (WEB) | React 18 + TypeScript + Vite |
| Backend | FastAPI (Python 3.12) |
| Database | PostgreSQL + Redis + TimescaleDB |
| Blockchain | Multi-EVM (ETH, Polygon, BSC, Arbitrum, Optimism, Base, Avalanche) + Tron + Solana, Solidity 0.8.x, ERC-4626, ERC-4337 |
| Wallet | Safe{Wallet} + Safe Protocol Kit |
| Auth | JWT + OAuth 2.0 + EIP-4361 (SIWE) |
| KYC | Sumsub SDK |
| Push | FCM + APNs |
| Email | SendGrid |
| Monitoring | Grafana + Prometheus + Sentry |
| CI/CD | GitHub Actions + Docker + Kubernetes |

---

*© 2026 Wellex. Confidential.*
