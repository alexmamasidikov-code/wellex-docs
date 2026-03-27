---
id: 35_INSURANCE_PARTNERSHIP_LOI
title: "35 · Партнёрство по страхованию"
sidebar_position: 35
description: "Wellex v6.0 · 12.03.2026"
---

# 35 · INSURANCE PARTNERSHIP — LETTER OF INTENT (TEMPLATE)

> **Version:** 6.0 | **Date:** 12.03.2026 | **Status:** Canonical
> **Category:** Business / Legal
> **SSOT for:** Insurance partnership framework, LOI template, co-branded product structure
> **Dependencies:** 22_INSURANCE_FUND, 30_SMART_CONTRACT_INSURANCE, 31_B2B_PLAYBOOK

---

## TL;DR

- LOI template для партнёрства Wellex + страховая компания
- Модель B2B2C: страховая предлагает скидки клиентам с высоким WVI
- Win-win: Wellex получает канал привлечения, страховая снижает claims
- 3 формата партнёрства: Wellness Discount, Co-branded Product, WVI API

---

## 1. Стратегическое обоснование

### Зачем страховой компании Wellex

| Метрика | Без Wellex | С Wellex |
|---------|-----------|---------|
| Client health visibility | Годовой медосмотр (1 data point/год) | WVI ежедневно (365 data points/год) |
| Preventive intervention | Постфактум | В реальном времени (AI Coach) |
| Client engagement | Полис → забыл | Браслет + APP → ежедневный контакт |
| Risk assessment | Статические факторы (возраст, пол) | Динамический WVI (реальное здоровье) |
| Claims reduction (target) | Baseline | −12–18% за 24 месяца |

### Зачем Wellex страховая компания

| Ценность | Описание |
|----------|---------|
| Канал привлечения | Страховая предлагает Wellex своим клиентам → массовый B2B2C |
| Trust transfer | «Рекомендовано [Allianz/AXA]» — мгновенное доверие |
| Финансовый стимул для пользователя | Скидка на страховку = ещё один мотиватор поддерживать WVI |
| Data enrichment | Агрегированные wellness-данные для продукта |

---

## 2. Три формата партнёрства

### Format A: Wellness Discount Programme (начальный уровень)

**Механика:** Клиент страховой компании, поддерживающий WVI ≥ 70 на протяжении 90+ дней, получает скидку на страховую премию.

```
Клиент страховой → регистрация на wellex.ai → подписка $19/мес
  → носит браслет → поддерживает WVI ≥ 70
  → каждые 90 дней → автоматический отчёт страховой (анонимизированный)
  → скидка 10–20% на следующий период страховки
```

| Параметр | Значение |
|----------|----------|
| Скидка | 10% (WVI 70–79) / 15% (WVI 80–89) / 20% (WVI 90+) |
| Период оценки | 90 дней rolling average |
| Данные передаваемые | Только WVI score + compliance status (не raw biometrics) |
| Согласие пользователя | Explicit opt-in при регистрации |
| Техническая интеграция | API endpoint: `GET /api/v1/wvi/compliance/{user_id}` |

---

### Format B: Co-branded Product (продвинутый уровень)

**Механика:** Совместный продукт «[Страховая] Wellness by Wellex» — продаётся клиентам страховой как bundle.

| Компонент | Кто предоставляет |
|-----------|------------------|
| Страховой полис | Страховая компания |
| Wellex Band + APP + WEB | Wellex |
| Co-branded design (APP) | Совместная разработка |
| Маркетинг | Совместный бюджет |
| Support Level 1 | Страховая (первая линия) |
| Support Level 2 | Wellex (технический) |

**Ценообразование:**
- Страховая включает $19/мес Wellex в стоимость полиса
- Wellex получает $15/user/мес (после комиссии страховой)
- Клиент видит: «Wellness-браслет бесплатно в вашем страховом пакете»

---

### Format C: WVI API for Underwriting (стратегический уровень)

**Механика:** Страховая использует агрегированные, анонимизированные WVI-данные для улучшения моделей андеррайтинга.

| Параметр | Значение |
|----------|----------|
| Данные | Обезличенные: WVI distribution, wellness trends, risk clusters |
| Granularity | По возрастным группам / регионам / типам активности |
| Частота | Monthly reports + real-time API |
| Цена | $0.50–$2 per user/month (в зависимости от объёма) |
| Compliance | GDPR Article 9 (health data), explicit consent, anonymization |
| Доступность | Phase 3 (Year 2) |

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

| Компания | Регион | Тип | Приоритет | Контакт |
|----------|--------|-----|:---------:|---------|
| Allianz Partners | MENA / Global | Health + Life | 🔴 | [TBD] |
| AXA Gulf | UAE / GCC | Health | 🔴 | [TBD] |
| MetLife UAE | UAE | Life + Health | 🟡 | [TBD] |
| Daman Health (NHI) | Abu Dhabi | National health | 🟡 | [TBD] |
| SOGAZ | CIS / Russia | Universal | 🟡 | [TBD] |
| Reso-Garantiya | CIS | Health + Life | 🟢 | [TBD] |
| Bupa Global | International | Health | 🟢 | [TBD] |

### Критерии выбора партнёра

| Критерий | Минимум |
|----------|---------|
| Клиентская база | 100K+ policyholders в target-регионе |
| Digital maturity | API-ready, digital onboarding |
| Wellness interest | Existing wellness programme or stated intent |
| Regulatory standing | Licensed in target jurisdiction |

---

## 5. Financial Impact Model

### Для Wellex (per insurance partnership)

| Метрика | Conservative | Base |
|---------|:-----------:|:----:|
| Policyholders onboarded (Y1) | 2,000 | 5,000 |
| Wellex MRR | $30K/мес | $75K/мес |
| Referral spillover (20% become partners) | 400 | 1,000 |
| Additional organic users from trust | 1,000 | 3,000 |
| **Total user impact** | **3,400** | **9,000** |

### Для страховой (per partnership)

| Метрика | Conservative | Base |
|---------|:-----------:|:----:|
| Claims reduction (24 month) | −8% | −15% |
| Client retention improvement | +5% | +12% |
| NPS improvement | +8 | +15 |
| New product revenue | $100K/год | $400K/год |

---

## 6. Outreach Script (для первого контакта)

### Email template для Head of Innovation / VP Partnerships

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

▸ v1.0 (02.03.2026) — создан Opus 4.6. LOI template, 3 partnership formats, target list, financial model, outreach script.

---

*→ Related: [22_INSURANCE_FUND.md](22_INSURANCE_FUND.md) · [30_SMART_CONTRACT_INSURANCE.md](30_SMART_CONTRACT_INSURANCE.md) · [31_B2B_PLAYBOOK.md](31_B2B_PLAYBOOK.md)*

*Wellex © 2026 · wellex.ai*
