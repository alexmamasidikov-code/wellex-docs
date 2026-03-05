---
id: 21_GAMIFICATION
title: "21 · Геймификация"
sidebar_position: 21
description: "Wellex v5.0 · 05.03.2026"
---

# 21 · GAMIFICATION

> **Version:** 5.0 | **Date:** 05.03.2026 | **Status:** Canonical
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

## Архитектурное разделение

| Элемент | APP | WEB |
|---------|:---:|:---:|
| Achievements & Badges | ✅ Отображение | ✅ Yield impact |
| Streaks | ✅ | ✅ |
| Challenges (wellness) | ✅ | ❌ |
| Community challenges | ✅ | ❌ |
| Leaderboards | ✅ | ✅ (виджет) |
| NFT Gallery | ✅ | ✅ |
| Yield boost от достижений | ❌ (только %) | ✅ (в $) |
| Seasons | ✅ | ✅ |

---

## Executive Summary

Система геймификации Wellex — engagement engine, увеличивающий DAU/MAU на 60%, retention на 63%, среднее время ношения браслета на 44%. Интегрирована с Community-разделом APP.

**Принцип:** Wellex не имеет собственного fungible token. Все вознаграждения выплачиваются в USDC/USDT. NFT = soulbound (ERC-5192) бейджи достижений (непередаваемые, без торгуемой ценности).

---

## 1. Achievements (26 достижений)

### Категории

| Категория | Достижений | Описание |
|-----------|:----------:|----------|
| 🏃 Activity | 5 | Шаги, тренировки, калории |
| 😴 Sleep | 4 | Качество и длительность сна |
| 🧠 Mindfulness | 4 | HRV, стресс, медитации (Emotional Mining) |
| 🔥 Streaks | 4 | Серии дней ношения |
| 👥 Community | 5 | Группы, челленджи, дуэли |
| 🏆 Prestige | 4 | Лидерборды, сезоны |

### Полный список

| # | Название | Категория | Условие | Yield бонус |
|---|---------|:---------:|---------|:-----------:|
| 1 | First Steps | 🏃 | 10,000 шагов за 1 день | — |
| 2 | Marathon Week | 🏃 | 70,000 шагов за неделю | — |
| 3 | Million Miler | 🏃 | 1,000,000 шагов всего | +0.5% |
| 4 | Iron Will | 🏃 | 30 тренировок за месяц | +0.5% |
| 5 | Cardio King | 🏃 | 100 тренировок 30+ мин | +0.5% |
| 6 | Dream Weaver | 😴 | 7 дней по 7+ часов сна | — |
| 7 | Sleep Master | 😴 | 30 дней по 7+ часов | +0.5% |
| 8 | Deep Sleeper | 😴 | 25%+ глубокого сна, 14 дней | — |
| 9 | Year of Rest | 😴 | 365 ночей здорового сна | +0.5% |
| 10 | Zen Mind | 🧠 | HRV ≥60, 7 дней подряд | — |
| 11 | Stress Slayer | 🧠 | Стресс <30, 14 дней | +0.5% |
| 12 | Inner Peace | 🧠 | HRV ≥70 + стресс <20, 30 дней | +0.5% |
| 13 | Emotional Miner | 🧠 | Преобладание позитивных эмоций 30 дней | +0.5% |
| 14 | Week Warrior | 🔥 | 7-дневный streak (WVI ≥50) | — |
| 15 | Monthly Champion | 🔥 | 30-дневный streak | Бейдж |
| 16 | Century Club | 🔥 | 100-дневный streak | NFT + yield +0.5% |
| 17 | Year-Long Legend | 🔥 | 365-дневный streak | NFT + yield +0.5% |
| 18 | Social Butterfly | 👥 | Вступить в 5 групп | — |
| 19 | Team Player | 👥 | Участие в 5 командных челленджах | +0.5% |
| 20 | Duel Master | 👥 | Выиграть 10 дуэлей | — |
| 21 | Community Leader | 👥 | Создать группу с 50+ участниками | NFT |
| 22 | Challenge King | 👥 | Выполнить 20 челленджей | +0.5% |
| 23 | Leaderboard Star | 🏆 | Топ-10 в любом лидерборде | +0.5% |
| 24 | Season Champion | 🏆 | Топ-3 в сезоне | +1.0% |
| 25 | Emotional Pioneer | 🏆 | WVI ≥90, 30 дней | +1.0% |
| 26 | Founding Miner | 🏆 | Первые 1000 пользователей | +1.0% (пожизненно) |

**Максимальный yield boost от достижений: +5.0%**

---

## 2. Streaks

**Streak** = непрерывная серия дней с WVI ≥ 50. Отображается на главном экране APP.

| Streak | Награда |
|:------:|---------|
| 7 дней | Бейдж «Week Warrior» 🔥 |
| 14 дней | Бейдж |
| 30 дней | «Monthly Champion» NFT |
| 100 дней | «Century Club» NFT + yield +0.5% |
| 365 дней | «Year-Long Legend» NFT + yield +0.5% |

**Streak Protection:** 1 freeze/мес (болезнь, путешествие).

---

## 3. Challenges

*(Интегрированы с Community — см. [26_COMMUNITY.md](26_COMMUNITY.md))*

### Wellness Challenges (индивидуальные)

| Челлендж | Условие | Награда |
|----------|---------|---------|
| 💤 Марафон сна | 7 дней по 7+ часов | Бейдж |
| 🚶 10K каждый день | 10,000 шагов × 7 дней | Бейдж |
| 🧘 Дзен-неделя | HRV ≥60 каждый день | Бейдж |
| 🔥 Кардио-бласт | 5 тренировок ≥30 мин | Бейдж |
| 🧠 Emotional Week | Преобладание позитивных эмоций 7 дней | Бейдж |

### Community Challenges (командные)

Управляются через Community раздел APP:
- Team WVI Challenge
- Group Step Challenge
- 1v1 Duels
- Seasonal Tournaments

---

## 4. Seasons (3 месяца)

| Сезон | Период | Тема | Главный челлендж | Призовой фонд |
|-------|--------|------|-----------------|:--------------:|
| **S1** | Апр–Июн 2026 | ☀️ «Solar Energy» | 300 часов активности | $15,000 USDT |
| **S2** | Июл–Сен 2026 | 🧠 «Inner Balance» | Avg WVI ≥70 (Emotional Mining focus) | $20,000 USDT |
| **S3** | Окт–Дек 2026 | ❄️ «Steel Will» | 0 пропущенных дней + WVI ≥60 | $25,000 USDT |
| **S4** | Янв–Мар 2027 | 🌸 «Rebirth» | Улучшить WVI на 20+ от старта | $20,000 USDT |

**Season 2 — «Inner Balance»:** первый сезон, полностью посвящённый Emotional Mining. Фокус на эмоциональном компоненте WVI.

---

## 5. NFT Rewards (Soulbound)

Все NFT — **soulbound (ERC-5192)**: непередаваемые, привязаны к кошельку.

| Категория | Примеры | Yield бонус |
|-----------|---------|:-----------:|
| Achievement NFT | Century Club, Community Leader | +0.5% каждый |
| Season NFT | S1 Gold, S2 Silver | +0.5–1.0% на сезон |
| Special NFT | Founding Miner, Emotional Pioneer | +1.0% (пожизненно) |

### NFT Gallery (в профиле APP)

```
🏅 Коллекция: 12 из 26
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

*(Интегрированы с Community — см. [26_COMMUNITY.md](26_COMMUNITY.md))*

| Лидерборд | Период | Доступ |
|-----------|--------|--------|
| 🌍 Global | Ежемесячный | APP + WEB |
| 📍 Regional | Ежемесячный | APP |
| 📈 Improvement | Ежемесячный | APP |
| 👥 Team | Ежемесячный | APP |
| 🔥 Streak | Постоянный | APP |
| 👫 Friends | Постоянный | APP |
| 🧘 Group | По группе | APP |

---

## 7. Экономика геймификации

### Ежемесячный бюджет (при 10K юзеров)

| Статья | Сумма/мес |
|--------|:---------:|
| Challenges rewards | $10,000 |
| Leaderboards | $5,000 |
| Team competitions | $5,000 |
| Streak rewards | $3,000 |
| NFT minting (gas) | $500 |
| **Итого/мес** | **$23,500** |

### ROI

| Метрика | Без геймификации | С геймификацией | Улучшение |
|---------|:----------------:|:---------------:|:---------:|
| DAU/MAU | 45% | 72% | +60% |
| Время ношения | 18 дн/мес | 26 дн/мес | +44% |
| Retention (6 мес) | 40% | 65% | +63% |
| NPS | 35 | 58 | +66% |

---

---

## First 24h Achievement Chain — критический retention-механизм

Исследования показывают: 80% долгосрочного retention формируется в первые 24 часа. Wellex превращает первый день в серию dopamine loops.

| # | Время | Достижение | Триггер | Награда |
|:-:|-------|-----------|---------|---------|
| 1 | Регистрация | 🎉 **"Welcome to Wellex"** | Создание аккаунта | Бейдж + Welcome Video CEO |
| 2 | ~5 мин | 📱 **"Band Connected"** | Первое BLE-соединение браслета | Бейдж + анимация + push celebration |
| 3 | ~2 часа | 👣 **"First Steps"** | Первые 1 000 шагов | Бейдж + первый WVI-снимок |
| 4 | Следующее утро | 🌙 **"First Night"** | Первая записанная ночь сна | Бейдж + sleep insight ("Твоя первая ночь: 6.8ч") |
| 5 | День 1–2 | ✨ **"Awakening"** | Первый WVI > 30 | Бейдж + объяснение WVI |
| 6 | День 1–2 | 🤝 **"Social Start"** | Добавить 1 друга / вступить в группу | Бейдж + community access |

**6 бейджей за ≤48 часов = мощный dopamine loop = retention +40% по данным аналогичных продуктов (WHOOP, Strava).**

---

## Living NFT — вирусный социальный актив

**Концепция:** Soulbound NFT пользователя, визуализация которого меняется в реальном времени на основе WVI.

| WVI | Визуализация | Состояние |
|:---:|-------------|-----------|
| 90–100 | 🔥 Золотое свечение, пульсирующий орнамент | "Apex Wellness" |
| 70–89 | 💎 Синее свечение, активная анимация | "High Performance" |
| 50–69 | 🌿 Зелёный, спокойная анимация | "Balanced" |
| 30–49 | ⚪ Серебристый, минимальная анимация | "Building" |
| 0–29 | 🌑 Потускневший, статичный | "Rest Mode" |

**Ключевые свойства:**
- Soulbound (non-transferable) — нельзя продать или передать
- Обновляется автоматически при изменении WVI
- Видим в APP-профиле, WEB-кошельке, и как публичная ссылка
- Формат для соцсетей: генерирует анимированный PNG/GIF для сторис

**Вирусный механизм:** "Смотри, мой NFT сегодня горит золотом — я на WVI 94!" → органический контент → рост awareness.

---

## WVI Story — шаринг биометрии в соцсетях

**Что это:** автоматически генерируемая красивая карточка с персональными данными WVI.

**Форматы:** Instagram Story (9:16), Telegram пост (4:3), Twitter/X карточка (16:9).

**Контент карточки:**
- WVI за день / неделю / месяц (большой, визуальный)
- Streak (🔥 Day 47)
- Ранг в партнёрской программе
- Living NFT (минимальная анимация)
- Watermark: wellex.ai

**Механика:** в APP кнопка "Поделиться WVI" → выбор формата → export → репост. Watermark создаёт органический маркетинг.

---

## Duo Challenges — социальная конкуренция

**Концепция:** 1v1 соревнования между пользователями APP по WVI.

**Механика:**
- Пользователь A вызывает пользователя B: "Кто наберёт больше WVI за 7 дней?"
- Приглашение через APP, Telegram, WhatsApp (deep link)
- Оба соглашаются → старт в полночь → трекинг в реальном времени
- Победитель (выше WVI на Day 7) получает: бейдж + USDC micro-reward $1–$5 (из Gamification Budget)
- Проигравший получает: утешительный бейдж + мотивирующее сообщение от AI Coach

**Вирусность:** "Вызываю тебя на дуэль WVI! 🤺" + ссылка → встроенный реферальный механизм.

---

*→ Смежные: [26_COMMUNITY.md](26_COMMUNITY.md) (Community) · [03_WELLNESS_SCORE.md](03_WELLNESS_SCORE.md) (WVI) · [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) (yield boost)*

*Wellex © 2026 · Confidential*
