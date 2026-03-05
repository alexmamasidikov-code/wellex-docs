---
id: 35_INSURANCE_PARTNERSHIP_LOI
title: "35 · INSURANCE PARTNERSHIP — LETTER OF INTENT (TEMPLATE)"
sidebar_position: 35
description: "Wellex v5.0 · 05.03.2026"
---

# 35 · INSURANCE PARTNERSHIP — LETTER OF INTENT (TEMPLATE)

> **Version:** 5.0 | **Date:** 05.03.2026 | **Status:** Canonical
> **Category:** Business / Legal
> **SSOT for:** Insurance partnership framework, LOI template, co-branded product structure
> **Dependencies:** 22_INSURANCE_FUND, 30_SMART_CONTRACT_INSURANCE, 31_B2B_PLAYBOOK

---

## TL;DR

- LOI template for Wellex + insurance company partnership
- B2B2C model: insurer offers discounts to clients with high WVI
- Win-win: Wellex gets acquisition channel, insurer reduces claims
- 3 partnership formats: Wellness Discount, Co-branded Product, WVI API

---

## 1. Strategic Rationale

### Why an Insurer Needs Wellex

| Metric | Without Wellex | With Wellex |
|--------|:-------------:|:-----------:|
| Client health visibility | Annual check-up (1 data point/year) | Daily WVI (365 data points/year) |
| Preventive intervention | After the fact | Real-time (AI Coach) |
| Client engagement | Policy → forgotten | Bracelet + APP → daily contact |
| Risk assessment | Static factors (age, gender) | Dynamic WVI (actual health) |
| Claims reduction (target) | Baseline | −12–18% over 24 months |

### Why Wellex Needs an Insurer

| Value | Description |
|-------|------------|
| Acquisition channel | Insurer offers Wellex to their clients → mass B2B2C |
| Trust transfer | "Recommended by [Allianz/AXA]" — instant credibility |
| Financial incentive for user | Insurance discount = one more motivator to maintain WVI |
| Data enrichment | Aggregated wellness data for product |

---

## 2. Three Partnership Formats

### Format A: Wellness Discount Programme (entry level)

**Mechanics:** Insurer's client maintaining WVI ≥ 70 for 90+ days gets a discount on their insurance premium.

```
Insurance client → register on wellex.ai → subscribe $19/mo
  → wear bracelet → maintain WVI ≥ 70
  → every 90 days → automatic report to insurer (anonymized)
  → 10–20% discount on next insurance period
```

| Parameter | Value |
|-----------|-------|
| Discount | 10% (WVI 70–79) / 15% (WVI 80–89) / 20% (WVI 90+) |
| Assessment period | 90-day rolling average |
| Data transmitted | WVI score + compliance status only (not raw biometrics) |
| User consent | Explicit opt-in at registration |
| Technical integration | API endpoint: `GET /api/v1/wvi/compliance/{user_id}` |

---

### Format B: Co-branded Product (advanced level)

**Mechanics:** Joint product "[Insurer] Wellness by Wellex" — sold to insurer's clients as a bundle.

| Component | Provider |
|-----------|---------|
| Insurance policy | Insurance company |
| Wellex Band + APP + WEB | Wellex |
| Co-branded design (APP) | Joint development |
| Marketing | Shared budget |
| Support Level 1 | Insurer (first line) |
| Support Level 2 | Wellex (technical) |

**Pricing:**
- Insurer includes $19/mo Wellex in policy cost
- Wellex receives $15/user/mo (after insurer commission)
- Client sees: "Wellness bracelet included free in your insurance package"

---

### Format C: WVI API for Underwriting (strategic level)

**Mechanics:** Insurer uses aggregated, anonymized WVI data to improve underwriting models.

| Parameter | Value |
|-----------|-------|
| Data | De-identified: WVI distribution, wellness trends, risk clusters |
| Granularity | By age group / region / activity type |
| Frequency | Monthly reports + real-time API |
| Price | $0.50–$2 per user/month (volume-dependent) |
| Compliance | GDPR Article 9 (health data), explicit consent, anonymization |
| Availability | Phase 3 (Year 2) |

---

## 3. LOI Template

---

### LETTER OF INTENT

### Re: Strategic Partnership — Wellness Insurance Programme

**Date:** [DD.MM.YYYY]

**Between:**

**Party A (Insurance Company):**
[Full Legal Name]
[Registration Number]
[Registered Address]
Represented by: [Name, Title]
(hereinafter referred to as "Insurer")

**Party B (Technology Provider):**
Wellex Ltd.
[Registration Number]
[Registered Address]
Represented by: [Name, Title]
(hereinafter referred to as "Wellex")

---

### 1. Background

The Insurer is a licensed insurance company operating in [jurisdictions]. Wellex is a wellness technology company operating the Wellex Protocol — a biometric wellness platform that combines wearable technology, AI coaching, and a proprietary Wellex Vitality Index (WVI) to provide measurable wellness outcomes.

The Parties wish to explore a strategic partnership to develop a joint wellness-insurance product offering.

---

### 2. Scope of Collaboration

The Parties intend to collaborate on:

**2.1** Development of a Wellness Discount Programme whereby the Insurer's policyholders who maintain a WVI score of 70 or above for a minimum of 90 consecutive days receive a discount of [10–20]% on their insurance premium renewal.

**2.2** Exploration of a co-branded wellness-insurance product ("**[Insurer Name] Wellness by Wellex**") combining the Insurer's insurance coverage with Wellex's biometric tracking platform, to be offered to the Insurer's existing and new policyholders.

**2.3** Integration of Wellex's WVI API into the Insurer's risk assessment and client engagement systems, subject to data protection requirements and user consent.

---

### 3. Key Commercial Terms (Indicative)

| Term | Proposed |
|------|----------|
| Wellex subscription cost per policyholder | $[15–19]/month |
| Revenue share on co-branded product | [To be negotiated] |
| WVI API access fee | $[0.50–2.00] per user/month |
| Minimum commitment (policyholders) | [500–2,000] users |
| Pilot duration | [90–180] days |
| Exclusivity | [Non-exclusive / Exclusive per region] |
| Territory | [Specify: UAE, GCC, CIS, EU] |

---

### 4. Pilot Programme

The Parties agree to commence a Pilot Programme under the following framework:

**4.1** Duration: [90] days from Effective Date.

**4.2** Scope: [500–1,000] of the Insurer's policyholders in [Region].

**4.3** Each pilot participant receives:
- Wellex Band (free)
- Wellex APP + WEB Platform access
- AI Coach
- WVI tracking and monthly wellness report

**4.4** Success criteria for pilot:
- Participant activation rate > 80%
- NPS > 45 among participants
- Average WVI improvement > +5 points over 90 days
- Participant retention > 70%
- Claims data comparison: pilot group vs control group

**4.5** Pilot costs: [To be negotiated — options: shared equally / Wellex covers technology / Insurer covers distribution].

---

### 5. Data Protection and Privacy

**5.1** All user data processing shall comply with applicable data protection legislation, including but not limited to GDPR (EU), PDPL (UAE), and local equivalents.

**5.2** Wellex shall not share individual biometric data with the Insurer. Only aggregated, anonymised wellness scores (WVI) shall be transmitted, and only with explicit user consent.

**5.3** Users may revoke data sharing consent at any time via Wellex APP Settings → Privacy.

**5.4** The Parties shall execute a separate Data Processing Agreement (DPA) prior to any data exchange.

---

### 6. Intellectual Property

**6.1** Each Party retains all intellectual property rights in its pre-existing technology, branding, and data.

**6.2** Any co-developed materials (co-branded product design, joint marketing assets) shall be jointly owned unless otherwise agreed in the Definitive Agreement.

**6.3** The "Emotional Mining" trademark and "WVI" methodology remain the exclusive property of Wellex.

---

### 7. Exclusivity

**7.1** During the Pilot Programme, [Insurer] shall have a right of first refusal for exclusive partnership in [Territory] for a period of [6] months following pilot completion.

**7.2** Wellex retains the right to partner with non-competing insurance companies in other territories during the pilot period.

---

### 8. Timeline

| Milestone | Target Date |
|-----------|:-----------:|
| LOI signed | [Date] |
| Technical integration kick-off | [LOI + 14 days] |
| Pilot launch | [LOI + 45 days] |
| Pilot mid-point review | [LOI + 90 days] |
| Pilot completion & review | [LOI + 135 days] |
| Definitive Agreement signed | [LOI + 150 days] |
| Full rollout | [LOI + 180 days] |

---

### 9. Non-Binding Nature

**9.1** This Letter of Intent is non-binding and does not create any legal obligations between the Parties, except for Sections 6 (Intellectual Property) and 10 (Confidentiality), which are binding.

**9.2** The Parties intend to negotiate and execute a Definitive Agreement that will contain binding terms and conditions.

---

### 10. Confidentiality

**10.1** Each Party shall keep confidential all non-public information received from the other Party in connection with this LOI and the contemplated partnership.

**10.2** This obligation survives termination of this LOI for a period of [24] months.

---

### 11. Governing Law

This LOI shall be governed by and construed in accordance with the laws of [UAE / England and Wales / other].

---

### Signatures

**For [Insurance Company]:**

Name: ________________________________
Title: ________________________________
Date: ________________________________
Signature: ____________________________

**For Wellex Ltd.:**

Name: ________________________________
Title: ________________________________
Date: ________________________________
Signature: ____________________________

---

---

## 4. Target Insurance Partners

| Company | Region | Type | Priority | Contact |
|---------|--------|------|:--------:|---------|
| Allianz Partners | MENA / Global | Health + Life | 🔴 | [TBD] |
| AXA Gulf | UAE / GCC | Health | 🔴 | [TBD] |
| MetLife UAE | UAE | Life + Health | 🟡 | [TBD] |
| Daman Health (NHI) | Abu Dhabi | National health | 🟡 | [TBD] |
| SOGAZ | CIS / Russia | Universal | 🟡 | [TBD] |
| Reso-Garantiya | CIS | Health + Life | 🟢 | [TBD] |
| Bupa Global | International | Health | 🟢 | [TBD] |

### Partner Selection Criteria

| Criterion | Minimum |
|-----------|---------|
| Client base | 100K+ policyholders in target region |
| Digital maturity | API-ready, digital onboarding |
| Wellness interest | Existing wellness programme or stated intent |
| Regulatory standing | Licensed in target jurisdiction |

---

## 5. Financial Impact Model

### For Wellex (per insurance partnership)

| Metric | Conservative | Base |
|--------|:-----------:|:----:|
| Policyholders onboarded (Y1) | 2,000 | 5,000 |
| Wellex MRR | $30K/mo | $75K/mo |
| Referral spillover (20% become partners) | 400 | 1,000 |
| Additional organic users from trust | 1,000 | 3,000 |
| **Total user impact** | **3,400** | **9,000** |

### For the Insurer (per partnership)

| Metric | Conservative | Base |
|--------|:-----------:|:----:|
| Claims reduction (24 months) | −8% | −15% |
| Client retention improvement | +5% | +12% |
| NPS improvement | +8 | +15 |
| New product revenue | $100K/year | $400K/year |

---

## 6. Outreach Script (first contact)

### Email template for Head of Innovation / VP Partnerships

**Subject:** Wellex × [Company] — Wellness Insurance Partnership Opportunity

> Dear [Name],
>
> I'm reaching out from Wellex — a wellness technology platform that combines biometric tracking with financial incentives to improve health outcomes.
>
> We've built the Wellex Vitality Index (WVI), a daily health score from 0 to 100, derived from emotional state, sleep quality, and physical activity — measured through our proprietary wearable device.
>
> We believe there's a strong strategic fit with [Company]:
>
> - **For your policyholders:** WVI-based premium discounts create real motivation to stay healthy
> - **For [Company]:** measurable claims reduction (target: −12–18% over 24 months) + differentiated product offering + daily client engagement through our APP
>
> We're currently exploring partnership pilots in [Region] and would love to discuss a 90-day pilot with [Company].
>
> I've attached a one-pager with our partnership framework. Would you be open to a 20-minute call next week?
>
> Best regards,
> [Name]
> [Title], Wellex
> wellex.ai

---

## Changelog

▸ v5.0 (04.03.2026) — EN translation by Tery Marius. Aligned with v5.0 canon.
▸ v1.0 (02.03.2026) — created by Opus 4.6.

---

*→ Related: [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md) · [30_SMART_CONTRACT_INSURANCE.md](30_SMART_CONTRACT_INSURANCE.md) · [31_B2B_PLAYBOOK.md](31_B2B_PLAYBOOK.md)*

*Wellex © 2026 · wellex.ai*
