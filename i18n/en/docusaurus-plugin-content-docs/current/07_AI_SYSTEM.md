---
id: 07_AI_SYSTEM
title: "07 · AI SYSTEM"
sidebar_position: 7
description: "Wellex v6.0 · 05.03.2026"
---

# 07 · AI SYSTEM
> **Version:** 6.0 | **Date:** 05.03.2026 | **Status:** Public


> ML architecture · Training pipeline · AI Coach · AI Wallet Agent · AI Insurance Agent · Predictive analytics
>
> ⚠️ AI Yield Engine optimizes allocation but does not guarantee returns. Target Yield depends on DeFi market conditions.

---

## 1. Overview

Wellex's AI system consists of five interconnected components unified by the principle of **Lazy Factor**: user does the minimum — AI handles everything else.

| # | Component | Purpose | Deployment |
|---|-----------|---------|-----------|
| 1 | **AI Coach** | Wellness recommendations (video / audio / text) | On-device + Cloud |
| 2 | **AI Wallet Agent** | Auto-compound, rebalancing, risk management | Cloud (server-side) |
| 3 | **AI Insurance Agent** | Risk assessment, personalized insurance recommendations | Cloud |
| 4 | **AI Dashboard Agents** | Growth, content, analytics, mentoring | Cloud |
| 5 | **Predictive Analytics Engine** | Health forecasting, churn, revenue prediction | Cloud |

---

## 2. AI Coach

### 2.1 Pipeline Architecture

```
Wellex Band → BLE → Raw Biometrics
    ↓
Feature Engine (on-device)
  HRV, sleep stages, activity, emotions, stress index
    ↓
Context Builder
  WVI, 7-day trend, weak spots, time of day,
  user profile, recommendation history
    ↓
Fine-tuned LLM
  Llama 3.1 8B (on-device) / GPT-4o (cloud, complex queries)
    ↓
Output: 🎥 Video · 🎧 Audio · 📝 Text + Personalized action plan
```

### 2.2 ML Models

| Model | Architecture | Input | Output | Accuracy |
|-------|-------------|-------|--------|----------|
| Emotion Classifier | XGBoost ensemble | HRV + EDA (12 features) | 11 emotions + confidence | 78.2% (11-class) |
| Sleep Staging | 1D-CNN + BiLSTM | PPG + Accel (30s epochs) | Wake / N1 / N2 / N3 / REM | κ = 0.72 |
| Activity Classifier | LightGBM | Accel + Gyro + HR | 12 workout types | 91.3% |
| Stress Predictor | LSTM (seq2seq) | HRV time series (5 min) | Stress score + 1h forecast | MAE = 6.2 |
| Recommendation LLM | Fine-tuned Llama 3.1 8B | Context vector + user profile | Text recommendation | Human eval: 4.3/5 |
| Content Generator | GPT-4o (API) | Recommendation + format | Video script / audio text | Human eval: 4.5/5 |

### 2.3 Training Pipeline

```
1. Data Collection
    ├── WESAD (PPG + EDA, N = 15)
    ├── AMIGOS (multimodal, N = 40)
    ├── Sleep-EDF (PSG-verified, N = 197)
    ├── Wellex proprietary (N = 3,200+)
    └── Continuous collection from users (opt-in)

2. Preprocessing
    ├── Artifact removal (PPG motion artifacts)
    ├── Band-pass filtering (0.5–40 Hz for PPG)
    ├── RR interval extraction (Pan-Tompkins)
    ├── Feature extraction (time + frequency domain)
    └── Normalization (per-user z-score)

3. Training
    ├── 80/10/10 split (train / val / test)
    ├── 5-fold cross-validation
    ├── Hyperparameter tuning (Optuna)
    ├── Class balancing (SMOTE + class weights)
    └── Early stopping (patience = 10)

4. Validation
    ├── Hold-out test set
    ├── Cross-dataset validation
    ├── A/B testing of recommendations
    └── Expert review (clinical advisory board)

5. Deployment
    ├── ONNX export → CoreML / TFLite
    ├── On-device inference (< 50 ms)
    ├── Cloud fallback for complex queries
    ├── Model versioning (MLflow)
    └── Gradual rollout (5% → 25% → 100%)

6. Continuous Learning
    ├── Federated learning (no raw data transmission)
    ├── Monthly retraining
    ├── Drift detection (PSI > 0.2 → retrain)
    └── User feedback loop
```

### 2.4 Personalized Recommendations

| Type | Trigger | Example | Format |
|------|---------|---------|--------|
| Morning | Every morning | "Recovery 74. Good day for moderate intensity." | Push + Text |
| Preventive | HRV drop > 15% | "Stress rising — try 4-7-8 breathing for 5 min" | Push + Video |
| Sleep correction | Sleep < 6h | "Yesterday 5h 20min — go to bed by 22:30" | Push + Text |
| Motivation | WVI near yield threshold | "8 WVI points to next Monthly Yield level! A walk helps." | Push + Audio |
| Evening | 21:00–22:00 | "Skip caffeine and screens after 22:00, sleep by 23:00" | Push + Text |
| Weekly | Sunday | Video report: trends, achievements, week plan | Video (3 min) |
| Milestone | Streak / level up | "30-day streak! +0.5% Monthly Yield bonus" | Push + Animation |

**Personalization factors:** age, gender, fitness level, chronotype, recommendation history (no repeats), past advice effectiveness (CTR, follow-through rate), preferred format (video / text).

### 2.5 AI Coach Tiers

| Tier | Cost | Features |
|------|------|----------|
| Basic | $0/mo | Basic text recommendations, WVI display |
| **Wellex Subscription** | **$19/mo** | **Full AI Coach: video / audio, detailed analytics, free bracelet** |

---

## 3. AI Wallet Agent

### 3.1 Architecture

```
Data Sources
├── The Graph (protocol TVL, Monthly Yield)
├── DeFiLlama API (cross-protocol)
├── Chainlink (price feeds)
└── Internal analytics (user behavior)
    ↓
  Gauntlet-style simulation · 10,000 scenarios per decision
    ↓
Decision Engine (PPO agent)
  State: market conditions + portfolio
  Action: rebalancing / compound
  Reward: risk-adjusted return
    ↓
TX Builder
  Ethers.js + Tenderly Simulation → Gelato Keeper execution
```

### 3.2 Autonomous AI Actions

| Action | Condition | Example |
|--------|-----------|---------|
| Auto-compound yield | When activated ($129) | Reinvest yield → WellexVault |
| Harvest rewards | Always | CRV, COMP → convert to USDC → vault |
| DeFi rebalancing | Deviation > 5% from target | Lending/AMM/RWA → rebalance to optimal |
| Cross-chain movement | Yield differential > 2% | Move USDC from BSC to Ethereum via LayerZero |
| Gas optimization | Always | UserOps batching, low-gas windows |
| Emergency withdrawal | Depeg > 2%, exploit detected | Instant withdrawal to stablecoins |

### 3.3 Actions Requiring User Confirmation

| Action | Reason |
|--------|--------|
| Withdraw to external address | Security |
| Change strategy | Risk profile change |
| Deploy outside whitelist | Smart contract risk |
| Operations > 25% portfolio in 24h | Large movement protection |

### 3.4 AI Wallet Agent Allocation (Single WellexVault)

AI Wallet Agent manages a single **WellexVault (ERC-4626)**. Manual user strategy selection is unavailable — AI automatically optimizes DeFi allocations based on market conditions and user's WVI.

| DeFi category | Target allocation | Protocols |
|---------------|:-----------------:|-----------|
| Lending | 35–55% | Aave v3, Compound III, Morpho |
| AMM fees / LP | 10–20% | Uniswap v3, Curve |
| RWA / Treasuries | 10–25% | Ondo USDY, Mountain USDM |
| Liquidity incentives | 5–15% | CRV/CVX incentives, LM programs |
| Rate/basis arbitrage | 0–10% | Funding/basis, cross-protocol spreads |
| Structured strategies | 0–15% | Delta-neutral, covered/hedged structures |
| **Cash buffer** | **5–10%** | **USDC — for gas and rebalancing** |

**Auto AI Principles:**
- Allocation reviewed daily (reacts to market conditions)
- High WVI (≥70) → AI permits more complex strategies (higher expected yield)
- Low WVI (<40) → AI reduces incentives/structured share → conservative allocation
- Tenderly simulation before every transaction execution

**Expected Monthly Yield** (from WellexVault) is strictly determined by user's WVI per the unified table in REBUILD_PLAN.md. Actual yield depends on DeFi market conditions.

### 3.5 AI Yield Agent — 800+ Strategies

The AI Yield Agent operates a library of **800+ strategies** across 8 DeFi yield streams:

| # | Stream | Example strategies |
|---|--------|-------------------|
| 1 | DeFi Lending | Aave v3 supply optimization, Morpho rate arbitrage |
| 2 | RWA (Real World Assets) | Ondo USDY, Mountain USDM, tokenized treasuries |
| 3 | Liquidity Mining | CRV/CVX boosting, concentrated LP positions |
| 4 | Options Strategies | Covered calls, protective puts via DeFi options vaults |
| 5 | Basis Trading | Futures vs spot basis capture, funding rate arbitrage |
| 6 | Delta-Neutral | Market-neutral hedged positions, basis + hedge combos |
| 7 | Cross-Chain Arbitrage | Multi-chain rate differentials via LayerZero |
| 8 | Emerging Protocols | New vetted protocols with boosted incentives |

**Strategy selection:** ML-driven, rebalanced every 15 minutes based on market conditions, TVL shifts, and risk parameters.

---

## 4. AI Insurance Agent

### 4.1 Concept

AI Insurance Agent analyzes biometric data and financial profile to generate personalized insurance recommendations.

### 4.2 Architecture

```
Input data:
├── WVI history (30 / 90 / 365 days)
├── Biometric trends (HRV, sleep, activity)
├── Age, gender, BMI, lifestyle factors
├── Deposit history and yield
└── Regional factors (medical costs)
    ↓
Risk Scoring Engine
  Actuarial model + ML (Gradient Boosting / XGBoost)
  Trained on insurance datasets
    ↓
Results:
├── Personal Health Risk Score (0–100)
├── Recommended coverage type and amount
├── Premium calculation (insurance partners)
├── Preventive recommendations (lower premium)
└── "Saved $X thanks to your WVI"
```

### 4.3 Functions

| Function | Description |
|----------|------------|
| Health Risk Score | ML-based risk assessment from 90+ days of biometrics |
| Coverage Recommendations | Coverage type and amount by user profile |
| Premium Optimization | "Your WVI 80 → 15% discount with partner X" |
| Preventive Actions | "Add 1h sleep → risk score drops 8%" |
| Claims Assistant | AI help with insurance claim filing |
| Partner Marketplace | Offers from insurance company partners |

### 4.4 Monetization

| Source | Rate |
|--------|------|
| Insurance partner commission | 5–15% of premium |
| Lead generation | $20–50 per qualified lead |
| Detailed Health Risk Report | Included in $19/mo subscription |

---

## 5. AI Dashboard Agents

### 5.1 Growth Agent

| Function | Description |
|----------|------------|
| Reactivation | Detect inactive partners → personalized re-engagement scripts |
| Audience analysis | Partner profile → channel recommendations |
| Forecasting | "+3 referrals/mo → rank Master in 6 months, ~$1,700 income" |
| Weekly plan | Step-by-step action plan with priorities |

### 5.2 Content Agent

| Function | Description |
|----------|------------|
| Post generation | Instagram, Telegram, Facebook — by prompt or automatically |
| Video scripts | Scenarios for Reels, TikTok, YouTube Shorts |
| Stories | Ready visuals + text |
| Prompt training | Help writing effective content prompts |

### 5.3 Analytics Agent (Guardian+)

| Function | Description |
|----------|------------|
| Funnel | Invites → Registrations → Active → Paying |
| Bottlenecks | "80% drop at bracelet setup — help the team" |
| Cohort analysis | Retention by onboarding month |

### 5.4 Mentoring Agent (Master+)

| Function | Description |
|----------|------------|
| Team training | Webinar templates, call scripts |
| Delegation | "@user1 ready for Guardian rank — help close 3 referrals" |
| Team WVI | Recommendations to grow avg team WVI |

---

## 6. Predictive Analytics Engine

### 6.1 Models

| Model | Task | Architecture | Horizon | Metric |
|-------|------|-------------|---------|--------|
| WVI Forecast | Predict WVI 7/30 days | LSTM (seq2seq) | 7–30 days | MAE = 4.1 |
| Churn Predictor | Probability of churn | Gradient Boosting | 30 days | AUC = 0.87 |
| Monthly Yield Optimizer | Optimal strategy | RL (PPO) | Real-time | Sharpe > 1.8 |
| Health Alert | Early warning system | Anomaly detection (Isolation Forest) | 24–72h | Precision = 0.82 |
| Revenue Forecast | MRR / ARR forecast | Prophet + XGBoost | 3–12 months | MAPE = 8% |
| Network Growth | Partner network growth | Graph Neural Network | 1–6 months | MAE = 12% |

### 6.2 Predictive Insight Examples

**For users:**

- "HRV dropping 3 days in a row. 72% probability WVI falls below 60 tomorrow. Recommendation: walk + sleep by 22:00"
- "At current pace, March Monthly Yield = 14.2%. To reach 16% need +4 to avg WVI"

**For admin:**

- "February cohort: 30d retention = 78%, 90d forecast = 62%. Bottleneck: 23% didn't connect bracelet"
- "TVL forecast Q2: $8.2M (+95% current). Risk if market corrects: $5.1M"

---

## 7. Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| On-device LLM | Llama 3.1 8B (ONNX → CoreML / TFLite) | Wellness recommendations (< 50 ms) |
| Cloud LLM | GPT-4o / Claude API | Complex queries, content generation |
| ML Framework | PyTorch 2.x + Lightning | Model training |
| ML Serving | ONNX Runtime (device), TorchServe (cloud) | Inference |
| Experiment Tracking | MLflow + Weights & Biases | Metrics, artifacts |
| Hyperparameter Tuning | Optuna | Automated HPO |
| Feature Store | Feast (on Redis) | Real-time + batch features |
| Data Pipeline | Apache Airflow | ETL, retraining schedules |
| Vector DB | Qdrant | Similarity search for recommendations |
| RL Environment | Gymnasium + Stable Baselines3 | Wallet Agent training |
| Market Data | The Graph + DeFiLlama API | Monthly Yield, TVL, utilization |
| TX Builder | Ethers.js + Tenderly Simulation | Build and verify transactions |
| Keeper | Gelato Web3 Functions | On-chain execution |
| Monitoring | Forta + custom alerts | Anomaly detection |
| Notifications | Firebase + Telegram Bot API | Push notifications |

---

## 8. AI Security

### Three-Layer Defense

**Layer 1 — Smart Contract Limits (on-chain)**
- Protocol whitelist (governance-updated)
- Max transaction size per action
- Daily volume limit (25% of portfolio)
- Emergency pause (multisig 2-of-3)
- Rate limits (5% TVL/hour)

**Layer 2 — AI Guardrails (off-chain)**
- Risk score for each transaction (1–100 scale)
- Anomaly detection (Isolation Forest)
- Tenderly simulation before execution
- Auto-reject if risk score > 70 without user confirmation
- Human-in-the-loop for operations > $50,000

**Layer 3 — User Controls**
- Instant AI pause (Pause Agent)
- Override any AI decision
- Custom limits (max per tx, daily cap)
- Full manual mode (AI disabled)
- Activity log (all AI actions transparent)

---

## 9. Data Privacy

| Principle | Implementation |
|-----------|---------------|
| On-device first | Basic inference on device; raw data never leaves phone |
| E2E encryption | Biometrics encrypted AES-256 before cloud transmission |
| Federated learning | Models improve without raw data on server |
| Data minimization | Server receives only WVI score + aggregated features |
| User control | Export / delete all data (GDPR Art. 17) |
| Anonymization | Research uses only de-identified data |

---

*→ Related documents: [04_APP_UX.md](04_APP_UX.md) (AI assistant screen) · [05_DASHBOARD.md](05_DASHBOARD.md) (AI Dashboard Agents) · [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) (yield mechanics) · [08_HARDWARE.md](08_HARDWARE.md) (band data)*

*Wellex © 2026 · Confidential*
