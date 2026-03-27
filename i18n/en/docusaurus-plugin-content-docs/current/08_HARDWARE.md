---
id: 08_HARDWARE
title: "08 · WELLEX BAND — Hardware Platform"
sidebar_position: 8
description: "Wellex v6.0 · 05.03.2026"
---

# 08 · WELLEX BAND — Hardware Platform
> **Version:** 6.0 | **Date:** 05.03.2026 | **Status:** Public


> Screenless biometric bracelet, proprietary design · Medical-grade sensors · Free with $19/mo subscription
>
> ⚠️ Wellex Band measures biometrics for WVI calculation. WVI determines Target Yield tier — not a guaranteed return.

---

## 1. Device Philosophy

Wellex Band is a **screenless biometric oracle**, proprietary Wellex design. The absence of a screen ensures maximum battery life (up to **14 days**) and absolute focus on data quality. Every measurement is cryptographically signed and transmitted via BLE 5.3 to the Wellex app for WVI calculation → Monthly Yield.

**One model. Top specs. Free with $19/mo subscription.**

Data path:
```
Sensors → TEE (signing) → BLE 5.3 → App → Wellex Oracle → On-chain WVI
```

---

## 2. Technical Specifications

### 2.1 Core Characteristics

| Parameter | Value |
|-----------|-------|
| **Name** | Wellex Band |
| **Type** | Screenless smart band |
| **Development** | Wellex (proprietary design, engineering, firmware) |
| **Product line** | 1 model (top-spec) |
| **Price with subscription** | **$0 (free)** with $19/mo subscription |
| **Retail price** | $249 (without subscription) |
| **SoC** | Nordic nRF5340 (dual-core ARM Cortex-M33, 128 + 64 MHz) |
| **RAM** | 512 KB + 64 KB (network core) |
| **Flash** | 1 MB + 256 KB |
| **Secure Element** | Infineon OPTIGA Trust M (TEE, cryptographic key storage) |
| **Wireless** | BLE 5.3 (LE Audio ready, extended range, direction finding) |
| **NFC** | Quick pairing (tap-to-pair) |

### 2.2 Sensor Module

| Sensor | Model / Type | Specification | WVI Application |
|--------|-------------|---------------|-----------------|
| **PPG** | Dual-LED (green 525 nm + red 660 nm) | HR continuous, beat-to-beat RR | Core WVI: HRV, stress, recovery |
| **ECG** | Dry electrodes (touch-based) | Single-lead, on-demand | HRV validation, medical grade |
| **SpO₂** | Red (660 nm) + IR (940 nm) | Continuous, accuracy ±2% | Recovery, sleep quality |
| **EDA** | 2 × Ag/AgCl electrodes | SCL + SCR (10 Hz) | 11 emotions, stress |
| **Accelerometer** | Bosch BMA456 (3-axis) | 50 Hz, ±16g, 12-bit | Steps, calories, sleep staging |
| **Gyroscope** | Bosch BMI270 (3-axis) | 50 Hz, ±2000 °/s | Workout classification |
| **Temperature** | TMP117 (Texas Instruments) | Accuracy ±0.1 °C, resolution 0.0078 °C | Circadian rhythm, recovery |
| **Barometer** | BMP390 (Bosch) | Altitude ±0.5 m | Floors, altitude training |

### 2.3 Physical Characteristics

| Parameter | Value |
|-----------|-------|
| **Dimensions (capsule)** | 42 × 18 × 10.5 mm |
| **Weight** | 8.5 g (capsule) / 22 g (with strap) |
| **Case material** | Aerospace-grade polycarbonate + stainless steel (back plate) |
| **Water resistance** | **IP68** (5 ATM / 50 m, swimming) |
| **Dust protection** | IP6X (full) |
| **Operating temperature** | −10 °C … +50 °C |
| **Strap sizes** | S (130–170 mm) · M (155–210 mm) · L (190–240 mm) |
| **Colors** | Midnight Black · Arctic White · Deep Ocean · Forest Green |

### 2.4 Battery & Charging

| Parameter | Value |
|-----------|-------|
| **Capacity** | 180 mAh (LiPo) |
| **Battery life** | **up to 14 days** (screenless — zero display power draw) |
| **Monitoring mode** | PPG always-on (1 Hz), Accel 50 Hz, EDA 10 Hz |
| **Charging** | Magnetic, USB-C pogo pin cradle |
| **Full charge cycle** | 0 → 100% in 45 min |
| **Quick charge** | 10 min → 3 days of battery life |
| **LED indicator** | Tri-color (charging / pairing / OTA) |

### 2.5 Certifications

| Certification | Status | Description |
|--------------|:------:|------------|
| CE (EU) | ✅ Obtained | Electromagnetic compatibility |
| FCC (US) | ✅ Obtained | Radio frequency compliance |
| Bluetooth SIG | ✅ Qualified | BLE 5.3 |
| IP68 | ✅ Confirmed | Third-party lab tested |
| RoHS | ✅ Compliant | Restriction of hazardous substances |
| FDA 510(k) | 🔄 Roadmap Q4 2026 | Medical device classification |
| MDR (EU) | 🔄 Roadmap 2027 | Medical device regulation |

---

## 3. Medical-Grade Accuracy

### 3.1 Validation

| Metric | Accuracy | Reference |
|--------|----------|-----------|
| HR (heart rate) | ±2 BPM vs ECG Holter | IEC 60601-2-27 |
| HRV (RMSSD) | r = 0.94 vs ECG | Schäfer & Vagedes, 2013 |
| SpO₂ | ±2% vs pulse oximeter | ISO 80601-2-61 |
| Sleep stages | κ = 0.72 vs PSG | de Zambotti et al., 2019 |
| Steps | ±3% vs manual count | — |
| Temperature | ±0.1 °C vs reference | — |
| ECG | Diagnostic quality (cardiologist-verified) | IEC 60601-2-25 |

### 3.2 Production Calibration

Every Wellex Band undergoes a full calibration cycle:

1. **PPG** — comparison with golden reference photodiode
2. **SpO₂** — hypoxic chamber (SaO₂ 70–100%)
3. **Temperature** — climate chamber (15–45 °C)
4. **Accelerometer** — 6-point tumble test
5. **ECG** — synthetic ECG signal verification
6. **BLE range** — minimum 15 m in open field
7. **Water resistance** — pressure chamber (5 ATM, 10 min)

---

## 4. Firmware & OTA Updates

### 4.1 Firmware Architecture

```
Application Layer
├── Sensor Manager (PPG, EDA, Accel, Gyro, Temp, Baro)
├── Data Buffer (local storage up to 7 days)
├── WVI Pre-processor
└── TEE Signer (cryptographic signing)

BLE Communication Stack

RTOS: Zephyr (nRF Connect SDK)

Hardware Abstraction Layer (HAL)
├── Nordic nRF5340 SoC
└── Infineon OPTIGA Trust M
```

### 4.2 OTA Updates (Over-the-Air)

| Parameter | Value |
|-----------|-------|
| Protocol | Nordic DFU over BLE 5.3 |
| Security | Signed images (Ed25519), verification via Secure Element |
| Update size | 50–200 KB (delta updates) |
| Installation time | 2–5 min |
| Rollback | Dual-bank: on error — automatic rollback to previous version |
| Notification | Push in app: "Firmware v2.2.0 available — improved HRV accuracy" |
| Background download | Downloads in background; installs while charging (>30%) |
| Frequency | ~once every 6–8 weeks |

### 4.3 Firmware Roadmap

| Version | Timeline | Changes |
|---------|----------|---------|
| v1.0.0 | Q2 2026 | Launch: all sensors, BLE 5.3, TEE |
| v1.1.0 | Q3 2026 | Improved sleep staging algorithm |
| v1.2.0 | Q4 2026 | Advanced emotion detection (EDA + HRV fusion) |
| v2.0.0 | Q1 2027 | ML on-edge: basic WVI pre-processing on chip |
| v2.1.0 | Q2 2027 | LE Audio support, battery optimization |

---

## 5. TEE — Trusted Execution Environment

### 5.1 Components

| Element | Description |
|---------|------------|
| **Secure Element** | Infineon OPTIGA Trust M |
| **Keys** | Ed25519, generated on-chip, non-extractable |
| **Packet signature** | `{sensor_data, timestamp, nonce, signature}` |
| **Attestation** | Device identity certificate, issued at manufacturing |
| **Anti-tamper** | Physical tamper detection → key destruction |

### 5.2 Trusted Data Pipeline

```
Sensor Reading
 → TEE: sign(data + timestamp + monotonic_nonce)
 → BLE 5.3 encrypted channel
 → App: verify(signature, device_certificate)
 → Cloud: re-verify + WVI calculation
 → Oracle: on-chain WVI commitment (hash)
```

**Guarantee:** data cannot be falsified on the device, during transmission, or in the application.

---

## 6. SDK & Integration

### 6.1 Wellex SDK — Supported Platforms

| Platform | Language | Status |
|----------|----------|:------:|
| iOS | Swift (SwiftUI) | ✅ Production |
| Android | Kotlin (Jetpack Compose) | ✅ Production |
| React Native | TypeScript bridge | ✅ Production |
| Flutter | Dart plugin | ✅ Production |
| Web (test) | Web Bluetooth API | 🔄 Beta |

### 6.2 SDK Capabilities

| Feature | Description |
|---------|------------|
| BLE Management | Scan, connect, disconnect, auto-reconnect, error handling |
| NFC Pairing | Tap-to-pair (iOS 16+, Android 11+) |
| Real-time HR | Streaming heart rate (1 Hz) |
| Beat-to-beat RR | Critical for WVI (every beat) |
| SpO₂ Continuous | Streaming saturation |
| EDA Stream | SCL + SCR (10 Hz) |
| ECG On-demand | On-demand ECG recording (30 s) |
| Raw Accelerometer | 50 Hz, 3 axes |
| Raw Gyroscope | 50 Hz, 3 axes |
| Temperature | 1 Hz |
| Battery & Status | Charge level, firmware version |
| OTA DFU | Programmatic update trigger |
| Data Export | Local buffer → batch export |

### 6.3 Data Streams

| Stream | Frequency | Format | Application |
|--------|-----------|--------|------------|
| HR | 1 Hz (continuous) | BPM (uint8) | WVI: load, recovery |
| RR intervals | Beat-to-beat | ms (uint16) | WVI: HRV → emotions, stress |
| SpO₂ | 1 Hz | % (uint8) | WVI: recovery, sleep |
| EDA (SCL) | 10 Hz | µS (float32) | 11 emotions |
| EDA (SCR) | Event-based | µS + latency | Stress, arousal |
| ECG | 250 Hz (on-demand) | mV (int16) | HRV calibration |
| Accel | 50 Hz | g × 3 axes (int16) | Steps, sleep, activity |
| Gyro | 50 Hz | °/s × 3 axes (int16) | Workout type |
| Temperature | 1 Hz | °C (float16) | Circadian rhythm, recovery |
| Barometer | 1 Hz | hPa (float16) | Altitude, floors |

---

## 7. Device Business Model

### 7.1 Pricing

| Model | Price | Condition |
|-------|-------|-----------|
| **With subscription** | **$0 (free)** | Subscription $19/mo (1-year lock-up) |
| Without subscription | $249 | Basic tracking: steps, sleep |
| Warranty replacement | $0 | Within 24 months |
| Post-warranty replacement | $99 | Discounted price |

### 7.2 Subscription Breakdown ($19/mo)

| Component | Without subscription | With subscription ($19/mo) |
|-----------|:-------------------:|:--------------------------:|
| Wellex Band | ❌ ($249) | ✅ Free |
| Basic tracking | ✅ | ✅ |
| WVI calculation | ❌ | ✅ |
| Monthly Yield on deposit | ❌ | ✅ |
| AI Coach (video/audio) | ❌ | ✅ |
| 11 emotions | ❌ | ✅ |
| Detailed analytics | ❌ | ✅ |
| Seasonal challenges | ❌ | ✅ |
| NFT badges | ❌ | ✅ |
| Leaderboards | ❌ | ✅ |
| OTA updates | ✅ | ✅ |

### 7.3 Device Economics

| Metric | Value |
|--------|-------|
| Cost of goods (BOM) | ~$38 |
| Manufacturing + QC | ~$12 |
| Logistics | ~$5 |
| MRR per user | $19/mo |
| Device payback period | 3 months |
| At 10,000 subscribers: MRR | $190,000 |
| At 10,000 subscribers: ARR | $2,280,000 |
| Subscription margin | ~85% |

---

## 8. Competitive Comparison

| Device | Price | ECG | EDA | SpO₂ | HRV | Screenless | Web3 | Battery |
|--------|-------|:---:|:---:|:----:|:---:|:----------:|:----:|:-------:|
| Xiaomi Mi Band 9 | $35 | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | 16d |
| Fitbit Charge 6 | $160 | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | 7d |
| Oura Ring Gen 3 | $299 + $6/mo | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | 7d |
| Whoop 4.0 | $0 + $30/mo | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | 5d |
| Apple Watch Ultra | $799 | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | 2d |
| **Wellex Band** | **$0 + $19/mo** | **✅** | **✅** | **✅** | **✅** | **✅** | **✅** | **14d** |

**Wellex Band — the only device combining:** ECG + EDA + full sensor stack + screenless + Web3 yield + 14-day battery.

---

## 9. Manufacturing & Logistics

### 9.1 Manufacturing Process

| Stage | Description | Duration |
|-------|------------|----------|
| PCB fabrication | 4-layer HDI PCB, Shenzhen | 2 weeks |
| Component sourcing | Nordic, Bosch, TI, Infineon | 4–6 weeks (lead time) |
| SMT assembly | Pick-and-place, reflow | 1 week |
| Module testing | ICT + functional test (100%) | During assembly |
| Encapsulation | Injection molding, IP68 sealing | 1 week |
| Final QC | All sensors + BLE + water test on every unit | 2 days |
| Packaging | Branded box, QR → app, strap, charger | 1 day |
| Shipping | DHL Express (global), ocean freight (bulk) | 3–14 days |

### 9.2 Go-to-Market Timeline

| Phase | Timeline | Description |
|-------|----------|------------|
| Engineering Validation (EVT) | Completed | Prototypes, sensor testing |
| Design Validation (DVT) | Q1 2026 | Final design, certifications |
| Production Validation (PVT) | Q1 2026 | Pilot batch of 500 units |
| Mass Production (MP) | **Q2 2026** | Mass production start |
| Production capacity | — | 10,000 units/mo (scalable to 50,000) |

---

## 10. Hardware Roadmap

| Version | Timeline | Description |
|---------|----------|------------|
| **v1.0** (Launch) | Q2 2026 | Full sensor stack, BLE 5.3, TEE, IP68 |
| **v1.5** (OTA) | Q4 2026 | ML on-edge, improved sleep and emotion algorithms |
| **v2.0** | Q2 2027 | UWB (proximity), NFC payments, updated design |
| **v3.0** | Q2 2028 | Non-invasive glucose (CGM), eSIM, mmWave BP |

---

## 11. Plan B — MVP Without Physical Band

If hardware delivery delays impact launch timeline, Wellex operates in Software-First Mode:

| Mode | Description | WVI Source |
|------|------------|-----------|
| **Full Hardware** | Wellex Band + APP + WEB | Real-time biometrics via band |
| **Software-First (Plan B)** | APP + WEB, no band required | Manual daily check-in (5 inputs, 60 sec) |
| **Partner Device** | Compatible third-party wearables (Apple Watch, Garmin, WHOOP) | HealthKit / Google Fit via API |

Software-First WVI calculation:
▸ User inputs mood (1–10) + sleep hours + sleep quality + steps estimate + stress level
▸ WVI calculated from 5 inputs with lower precision (±15 vs ±5 for band)
▸ Clearly marked as "Estimated WVI" in APP — no false precision
▸ Band arrival → automatic switch to full biometric WVI

Partner Device integration (Phase 2, Q4 2026):
▸ Apple Health / Google Fit API → extracts HRV, sleep, activity
▸ WVI calculated from third-party data with standard formula
▸ No TEE anti-cheat — partner device users excluded from highest yield tiers

This ensures zero launch delay regardless of hardware supply chain status.

---

*→ Related documents: [03_WELLNESS_SCORE.md](03_WELLNESS_SCORE.md) (WVI from bracelet data) · [04_APP_UX.md](04_APP_UX.md) (mobile application) · [17_TECH_ARCHITECTURE.md](17_TECH_ARCHITECTURE.md) (technical architecture)*

*Wellex © 2026 · Confidential*
