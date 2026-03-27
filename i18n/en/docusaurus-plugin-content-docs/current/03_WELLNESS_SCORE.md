---
id: 03_WELLNESS_SCORE
title: "03 · WELLEX VITALITY INDEX (WVI)"
sidebar_position: 3
description: "Wellex v6.0 · 05.03.2026"
---

# 03 · WELLEX VITALITY INDEX (WVI)

> **Version:** 6.0 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Protocol
> **SSOT for:** WVI formula, biometric components, yield tier table
> **Dependencies:** 06_YIELD_PROTOCOL (yield), 04_APP_UX (display), 25_TECH_REQUIREMENTS (specs)

---

## TL;DR

- WVI = daily score 0–100 from 3 biometric components: Emotional (35%) + Recovery (35%) + Physical (30%)
- WVI determines Target Yield: 0% at WVI 0–39, up to 20% at WVI 90–100
- Calibration period (Day 1–7): WVI = 50 neutral, yield = 5%/month fixed

---

## Purpose & Scope

This document defines the WVI methodology — the scientific and algorithmic core of Wellex. It covers the formula, components, 11-emotion detection, anti-cheat, edge cases, and the canonical WVI→Yield table. For yield mechanics see `06_YIELD_PROTOCOL`. For UX display see `04_APP_UX` and `05_DASHBOARD`.

---

## 1. Definition

**Wellex Vitality Index (WVI)** — a proprietary daily health score (0–100) calculated from continuous Wellex Band biometric data. WVI is the "hash rate" of Emotional Mining: higher WVI → higher Target Yield allocation.

**WVI in the dual-platform architecture:**

| Platform | WVI Display |
|----------|-------------|
| **APP** | Full detail: WVI 0–100, 3 components, graphs, trends, AI recommendations |
| **WEB** | WVI widget + yield $ calculation, income projector |

APP shows only yield **%**. WEB shows full financial detail.

---

## 2. Formula

```
WVI_daily = E_score × 0.35 + R_score × 0.35 + P_score × 0.30
WVI_monthly = Σ(WVI_daily) / N_days_in_month
```

All sub-scores normalized 0–100. Age correction via rolling 90-day personalized baseline.
Days without bracelet: **WVI_daily = 0** (see Grace Days exception below).

**Grace Days:** 3 days/month where WVI_daily = rolling 7-day average of active days (no zero penalty). User sees: "📅 Grace Day used (2 of 3 remaining)."

**WVI Floor for stakers:** minimum WVI = 25 for users with active staking. Even at zero wearing → yield allocation = 0% (no punishment, just no bonus).

---

## 3. Component 1 — Emotional State (35%)

The emotional component is Wellex's unique differentiator and the core of Emotional Mining.

**Key metrics:**
▸ HRV (RMSSD, LF/HF ratio, pNN50)
▸ EDA — skin conductance level (SCL) and spontaneous response peaks (SCR)
▸ Resting heart rate and variability

**Detection algorithm:** multi-class LSTM + attention neural network. Input: HRV time-series + EDA + accelerometer. Output: probability distribution across 11 emotions.

**11 emotions — detection methodology:**

| # | Emotion | HRV Pattern | EDA Pattern | Confidence |
|---|---------|-------------|-------------|:----------:|
| 1 | Calm | High RMSSD, low LF/HF | Low SCL, rare SCR | 95% |
| 2 | Joy | Moderate RMSSD ↑, HF dominant | Moderate SCL ↑ | 88% |
| 3 | Excitement | Low RMSSD, high LF | High SCR frequency | 90% |
| 4 | Acute Stress | Very low RMSSD, LF/HF > 4 | SCL spike + frequent SCR | 93% |
| 5 | Chronic Stress | Sustained low RMSSD (> 2h) | Elevated baseline SCL | 85% |
| 6 | Anxiety | Low HF, irregular RR | Elevated SCL, spontaneous SCR | 82% |
| 7 | Focus | Moderate RMSSD, stable RR | Gradual SCL rise | 80% |
| 8 | Fatigue | Declining RMSSD trend | Flattened EDA response | 87% |
| 9 | Arousal | High HR, low RMSSD, high LF | SCR burst > 10/min | 85% |
| 10 | Relaxation | High HF, RMSSD > 70ms | SCL dropping, minimal SCR | 92% |
| 11 | Meditative State | Very high HF, coherent rhythm | Very low SCL, no SCR | 90% |

**Emotional Mining logic:** positive emotions (Calm, Joy, Focus, Relaxation, Meditative) → high E_score → high WVI → higher yield. Taking care of emotional state literally "mines" economic value.

---

## 4. Component 2 — Recovery (35%)

Reflects the body's adaptive reserve — ability to recover from physical and emotional loads.

**Key metrics:**
▸ Sleep quality: total duration, efficiency, phases (light/deep/REM)
▸ Recovery score: resting HR, HRV in first 30min of sleep, temperature trend
▸ Chronobiological pattern: sleep-wake cycle regularity

Normalization: results adjusted by individual rolling 90-day baseline and age correction.

---

## 5. Component 3 — Physical Activity (30%)

Measures volume and quality of daily physical activity.

**Key metrics:**
▸ Steps, distance, calories (active + basal)
▸ MVPA (Moderate-to-Vigorous Physical Activity) in minutes
▸ Training intensity: HR zones, VO₂max estimate
▸ Activity/recovery balance (overtraining = P_score reduction)

---

## 6. WVI → Target Yield Table (canonical — SSOT)

> This is the single canonical yield tier table. All documents must reference this version.

| WVI Monthly | Target Yield/month | Realistic Range* | Annual Equivalent |
|:-----------:|:------------------:|:----------------:|:-----------------:|
| 0–39 | 0% | 0% | 0% |
| 40–49 | 2% | 1–3% | ~24% |
| 50–59 | 5% | 3–7% | ~60% |
| 60–69 | 8% | 5–10% | ~96% |
| 70–79 | 12% | 8–15% | ~144% |
| 80–89 | 16% | 10–18% | ~192% |
| 90–100 | 20% | 12–20% | ~240% |

*Realistic Range depends on DeFi market conditions, strategy performance, and SR ratio.

> ⚠️ **Target Yield is not a guarantee.** Actual yield depends on DeFi market conditions, WVI score, and strategy allocation. Dynamic Yield Cap adjusts automatically when SR < 1.0. Average historical blended: **1.5–3.5%/month**.

**Calibration period (Days 1–7):** WVI = 50 neutral. Yield = **5%/month fixed** (not 8%, not 20%). Honest framing, no inflated expectations.

**Wellness Boost (streak bonus):**

| Streak | Bonus |
|:------:|:-----:|
| 30 days | +0.5% |
| 90 days | +1.0% |
| 180 days | +1.5% |
| 365 days | +2.0% |

---

## 7. WVI Allocation Modifier

WVI determines the aggressiveness of yield strategy allocation (→ [06_YIELD_PROTOCOL](06_YIELD_PROTOCOL.md)):

| WVI | Allocation | Yield Ceiling |
|:---:|-----------|:-------------:|
| 0–39 | 80% DeFi+RWA · 20% Arbitrage | ~1%/month |
| 40–69 | 60% DeFi+RWA · 30% Arbitrage · 10% Prediction | ~4%/month |
| 70–89 | 40% DeFi+RWA · 30% Arbitrage · 30% Prediction | ~10%/month |
| 90–100 | 30% DeFi+RWA · 20% Arbitrage · 50% Prediction | ~20%/month |

Low WVI = conservative portfolio (capital protection). High WVI = aggressive allocation (maximum yield).

---

## 8. Edge Cases

| Situation | Handling |
|-----------|----------|
| Bracelet not worn (day) | WVI_daily = 0 (or Grace Day if available) |
| Partial wear (< 6h) | Proportional calculation by actual wear time |
| Motion artifacts | Accelerometer filtering, anomalous segments excluded |
| Extreme training | Separates fatigue from overtraining (HR + recovery cross-validation) |
| Illness / abnormal values | "Recovery mode" flag, increased weight of recovery component |
| Timezone change | Chronobiological correction (jet lag adjustment) |
| Night shift | Sleep-wake cycle inversion — baseline recalibration |
| Sleep disorder (< 3h) | R_score = 0, notification flag |
| First 7 days | Calibration — WVI = 50, yield = 5%/month fixed |
| Grace Day (≤3/month) | WVI = rolling 7-day average of active days |

---

## 9. Anti-Cheat System

Data integrity is critical for yield trust. Multi-layer protection:

| Threat | Countermeasure |
|--------|---------------|
| Physical movement simulation | HRV + accelerometer + gyroscope coherence analysis |
| Third-party device | TEE chip: cryptographic signature on every data packet |
| Firmware modification | Secure Boot, code attestation in Trusted Execution Environment |
| Replay attacks | Timestamps + nonce in every packet |
| Synthetic biosignals | ML anomaly detector: live human vs. signal generator patterns |
| Device transfer to another person | Biometric fingerprint (unique HRV baseline pattern) |
| Sleep manipulation | Cross-validation: thermometer + motion + sleep phases |
| Network attacks | E2E BLE 5.3 encryption, API mutation testing |

**Trusted Data Pipeline:**
```
Wellex Band (TEE signed) → BLE E2E → Edge Server (signature verify) → Blockchain Oracle → WVI Engine → Yield Calculation
```

**Fraud Score:** every session gets a fraud_score (0–100). Above threshold → automatic WVI reset for the period + user notification.

---

## 10. Lazy Factor in WVI

| Aspect | Implementation |
|--------|---------------|
| Auto-calculation | WVI calculated continuously, no user action needed |
| Push guidance | "Today WVI = 45. A 30min walk will raise it to 60." |
| AI projection | "At current pace, yield = 12%. To reach 16%, need +8 WVI." |
| Trend analysis | Weekly and monthly graphs with forecast |
| Community display | WVI shown in profile and leaderboards |

---

## Integration Points

▸ Yield mechanics → [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md)
▸ APP display of WVI → [04_APP_UX.md](04_APP_UX.md)
▸ WEB display of WVI → [05_DASHBOARD.md](05_DASHBOARD.md)
▸ Technical specifications → [25_TECH_REQUIREMENTS.md](25_TECH_REQUIREMENTS.md)
▸ Emotional Mining concept → [27_EMOTIONAL_MINING.md](27_EMOTIONAL_MINING.md)

---

## Open Issues

▸ 10-tier scale → unified to 7-tier ✅ (v4.0 — aligns with 06_YIELD_PROTOCOL)
▸ Calibration yield → 5%/month fixed ✅ (was 8% — corrected)
▸ Grace Days → added ✅
▸ WVI Floor for stakers → added ✅
▸ Scientific source list: pending publication in 25_TECH_REQUIREMENTS.md

---

## Changelog

▸ v1.0 — Initial WVI spec (Feb 2026)
▸ v2.0 — 11-emotion table added (Feb 2026)
▸ v3.0 — Anti-cheat system expanded (Mar 2026)
▸ **v4.0** — Unified to 7-tier yield table (SSOT), calibration yield corrected to 5%/month, Grace Days added, WVI Floor for stakers added, Realistic Range column added, full EN reformat

---

*Wellex © 2026 · Confidential*
