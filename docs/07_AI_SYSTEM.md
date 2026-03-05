---
id: 07_AI_SYSTEM
title: "07 · AI System"
sidebar_position: 7
description: "Wellex v5.0 · 05.03.2026"
---

# 07 · AI SYSTEM
> **Версия:** 5.0 | **Дата:** 05.03.2026 | **Статус:** Public


> ML-архитектура · Training pipeline · AI Coach · AI Wallet Agent · AI Insurance Agent · Предиктивная аналитика
>
> ⚠️ AI Yield Engine optimizes allocation but does not guarantee returns. Target Yield depends on DeFi market conditions.

---

## 1. Обзор

AI-система Wellex состоит из пяти взаимосвязанных компонентов, объединённых принципом **Lazy Factor**: пользователь делает минимум — AI берёт на себя всё остальное.

| # | Компонент | Назначение | Развёртывание |
|---|-----------|-----------|--------------|
| 1 | **AI Coach** | Wellness-рекомендации (видео / аудио / текст) | On-device + Cloud |
| 2 | **AI Wallet Agent** | Auto-compound, ребалансировка, управление рисками | Cloud (server-side) |
| 3 | **AI Insurance Agent** | Оценка рисков, персональные страховые рекомендации | Cloud |
| 4 | **AI Dashboard Agents** | Продвижение, контент, аналитика, менторинг | Cloud |
| 5 | **Predictive Analytics Engine** | Прогнозирование здоровья, оттока, дохода | Cloud |

---

## 2. AI Coach

### 2.1 Архитектура pipeline

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
 Llama 3.1 8B (on-device) / GPT-4o (cloud, сложные запросы)
 ↓
Output: 🎥 Video · 🎧 Audio · 📝 Text + Personalized action plan
```

### 2.2 ML-модели

| Модель | Архитектура | Input | Output | Точность |
|--------|-------------|-------|--------|---------|
| Emotion Classifier | XGBoost ensemble | HRV + EDA (12 признаков) | 11 эмоций + confidence | 78.2% (11-class) |
| Sleep Staging | 1D-CNN + BiLSTM | PPG + Accel (эпохи 30 с) | Wake / N1 / N2 / N3 / REM | κ = 0.72 |
| Activity Classifier | LightGBM | Accel + Gyro + HR | 12 типов тренировок | 91.3% |
| Stress Predictor | LSTM (seq2seq) | HRV time series (5 мин) | Stress score + прогноз 1 ч | MAE = 6.2 |
| Recommendation LLM | Fine-tuned Llama 3.1 8B | Context vector + user profile | Текстовая рекомендация | Human eval: 4.3/5 |
| Content Generator | GPT-4o (API) | Recommendation + format | Видеоскрипт / аудиотекст | Human eval: 4.5/5 |

### 2.3 Training Pipeline

```
1. Сбор данных
 ├── WESAD (PPG + EDA, N = 15)
 ├── AMIGOS (мультимодальный, N = 40)
 ├── Sleep-EDF (PSG-верифицированный, N = 197)
 ├── Wellex proprietary (N = 3 200+)
 └── Непрерывный сбор от пользователей (opt-in)

2. Предобработка
 ├── Удаление артефактов (motion artifacts PPG)
 ├── Полосовая фильтрация (0.5–40 Гц для PPG)
 ├── Извлечение RR-интервалов (Pan-Tompkins)
 ├── Feature extraction (временная + частотная область)
 └── Нормализация (per-user z-score)

3. Обучение
 ├── Разделение 80/10/10 (train / val / test)
 ├── 5-fold cross-validation
 ├── Подбор гиперпараметров (Optuna)
 ├── Балансировка классов (SMOTE + class weights)
 └── Early stopping (patience = 10)

4. Валидация
 ├── Hold-out test set
 ├── Cross-dataset validation
 ├── A/B тестирование рекомендаций
 └── Экспертная проверка (clinical advisory board)

5. Деплой
 ├── ONNX export → CoreML / TFLite
 ├── On-device inference (< 50 мс)
 ├── Cloud fallback для сложных запросов
 ├── Версионирование моделей (MLflow)
 └── Постепенный rollout (5% → 25% → 100%)

6. Непрерывное обучение
 ├── Federated learning (без передачи raw data)
 ├── Ежемесячное переобучение
 ├── Обнаружение дрейфа (PSI > 0.2 → retrain)
 └── Петля обратной связи от пользователей
```

### 2.4 Персонализированные рекомендации

| Тип | Триггер | Пример | Формат |
|-----|---------|--------|--------|
| Утренняя | Каждое утро | «Recovery 74. Хороший день для умеренной нагрузки» | Push + Text |
| Превентивная | HRV drop > 15% | «Стресс растёт — дыхание 4-7-8 за 5 мин» | Push + Video |
| Коррекция сна | Сон < 6 ч | «Вчера спали 5 ч 20 мин — ложитесь до 22:30» | Push + Text |
| Мотивация | WVI близок к порогу yield | «До следующего уровня Monthly Yield +8 WVI! Прогулка поможет» | Push + Audio |
| Вечерняя | 21:00–22:00 | «Избегайте кофе и экранов после 22:00, засыпайте в 23:00» | Push + Text |
| Еженедельная | Воскресенье | Видеоотчёт: тренды, достижения, план на неделю | Video (3 мин) |
| Milestone | Streak / level up | «Streak 30 дней! Бонус к Monthly Yield +0.5%» | Push + Animation |

**Факторы персонализации:** возраст, пол, уровень физической подготовки, хронотип, история рекомендаций (без повторов), эффективность прошлых советов (CTR, follow-through rate), предпочтительный формат (видео / текст).

### 2.5 Тарифы AI Coach

| Тариф | Стоимость | Возможности |
|-------|-----------|-----------|
| Basic | $0/мес | Базовые текстовые рекомендации, WVI |
| **Подписка Wellex** | **$19/мес** | **Полный AI Coach: видео / аудио, детальная аналитика, бесплатный браслет** |

---

## 3. AI Wallet Agent

### 3.1 Архитектура

```
Источники данных
├── The Graph (TVL протоколов, Monthly Yield)
├── DeFiLlama API (cross-protocol)
├── Chainlink (price feeds)
└── Internal analytics (поведение пользователей)
 ↓
 Gauntlet-style simulation · 10 000 сценариев / решение
 ↓
Decision Engine (PPO agent)
 State: рыночные условия + портфель
 Action: ребалансировка / compound
 Reward: risk-adjusted return
 ↓
TX Builder
 Ethers.js + Tenderly Simulation → Gelato Keeper execution
```

### 3.2 Автономные действия AI

| Действие | Условие | Пример |
|----------|---------|--------|
| Auto-compound yield | При активации ($129) | Реинвест yield → WellexVault |
| Сбор наград | Всегда | CRV, COMP → конвертация в USDC → vault |
| Ребалансировка DeFi-аллокаций | Отклонение > 5% от целевого | Lending/AMM/RWA → ребаланс до оптимального |
| Кросс-чейн перемещение | Yield differential > 2% | Liquidity USDC с BSC на Ethereum via LayerZero |
| Газ-оптимизация | Всегда | Батчинг UserOps, low-gas windows |
| Аварийный вывод | Depeg > 2%, обнаружен эксплойт | Мгновенный вывод в стейблкоины |

### 3.3 Действия, требующие подтверждения пользователя

| Действие | Причина |
|----------|---------|
| Вывод на внешний адрес | Безопасность |
| Смена стратегии | Изменение риск-профиля |
| Размещение вне whitelist | Риск смарт-контракта |
| Операции > 25% портфеля за 24 ч | Защита от крупных перемещений |

### 3.4 Аллокация AI Wallet Agent (единый WellexVault)

AI Wallet Agent управляет единым **WellexVault (ERC-4626)**. Ручной выбор стратегии пользователем недоступен — AI автоматически оптимизирует распределение DeFi-аллокаций по рыночной ситуации и WVI пользователя.

| DeFi-категория | Ориентир аллокации | Протоколы |
|----------------|:------------------:|-----------|
| Lending | 35–55% | Aave v3, Compound III, Morpho |
| AMM fees / LP | 10–20% | Uniswap v3, Curve |
| RWA / Treasuries | 10–25% | Ondo USDY, Mountain USDM |
| Liquidity incentives | 5–15% | CRV/CVX incentives, LM программы |
| Rate/basis arbitrage | 0–10% | Funding/basis, межпротокольные спреды |
| Structured strategies | 0–15% | Delta-neutral, covered/hedged конструкции |
| **Cash buffer** | **5–10%** | **USDC — для gas и ребалансировки** |

**Принципы Auto AI:**
- Аллокация пересматривается ежедневно (реакция на рыночные условия)
- High WVI (≥70) → AI допускает более сложные стратегии (higher expected yield)
- Low WVI (<40) → AI снижает долю incentives/structured → консервативная аллокация
- Tenderly-симуляция каждой транзакции перед исполнением

**Ожидаемый Monthly Yield** (из WellexVault) строго определяется WVI пользователя по единой таблице REBUILD_PLAN.md. Фактический yield зависит от рыночных условий DeFi.

---

## 4. AI Insurance Agent

### 4.1 Концепция

AI Insurance Agent анализирует биометрические данные и финансовый профиль пользователя для формирования персонализированных страховых рекомендаций.

### 4.2 Архитектура

```
Входные данные:
├── WVI history (30 / 90 / 365 дней)
├── Биометрические тренды (HRV, sleep, activity)
├── Возраст, пол, BMI, lifestyle factors
├── История депозитов и yield
└── Региональные факторы (стоимость медицины)
 ↓
Risk Scoring Engine
 Actuarial model + ML (Gradient Boosting / XGBoost)
 Обучен на страховых датасетах
 ↓
Результаты:
├── Personal Health Risk Score (0–100)
├── Рекомендуемый тип и объём страховки
├── Расчёт премии (страховые партнёры)
├── Превентивные рекомендации (снижение премии)
└── «Сэкономлено $X благодаря вашему WVI»
```

### 4.3 Функции

| Функция | Описание |
|---------|----------|
| Health Risk Score | ML-оценка риска на основе 90+ дней биометрии |
| Coverage Recommendations | Тип и объём страховки по профилю пользователя |
| Premium Optimization | «Ваш WVI 80 → скидка 15% у партнёра X» |
| Preventive Actions | «Добавьте 1 ч сна → снижение risk score на 8%» |
| Claims Assistant | AI-помощь при оформлении страхового случая |
| Partner Marketplace | Предложения от страховых компаний-партнёров |

### 4.4 Монетизация

| Источник | Ставка |
|----------|--------|
| Комиссия от страховых партнёров | 5–15% от страховой премии |
| Лидогенерация | $20–50 за квалифицированный лид |
| Детальный Health Risk Report | Включён в подписку $19/мес |

---

## 5. AI Dashboard Agents

### 5.1 Агент «Продвижение»

| Функция | Описание |
|---------|----------|
| Реактивация | Обнаружение неактивных партнёров → персонализированные скрипты |
| Анализ аудитории | Профиль партнёра → рекомендации каналов привлечения |
| Прогнозирование | «+3 реферала/мес → ранг Master через 6 мес, доход ~$1 700» |
| Недельный план | Пошаговый action plan с расставленными приоритетами |

### 5.2 Агент «Контент»

| Функция | Описание |
|---------|----------|
| Генерация постов | Instagram, Telegram, Facebook — по промпту или автоматически |
| Видеоскрипты | Сценарии для Reels, TikTok, YouTube Shorts |
| Stories | Готовые визуалы + текст |
| Обучение промптингу | Помощь в составлении эффективных запросов |

### 5.3 Агент «Аналитика» (Guardian+)

| Функция | Описание |
|---------|----------|
| Воронка | Приглашения → Регистрации → Активные → Платящие |
| Узкие места | «80% отвала на подключении браслета — помогите команде» |
| Когортный анализ | Retention по месяцам привлечения |

### 5.4 Агент «Менторинг» (Master+)

| Функция | Описание |
|---------|----------|
| Обучение команды | Шаблоны вебинаров, скрипты для звонков |
| Делегирование | «@user1 готов к рангу Guardian — помогите закрыть 3 реферала» |
| Командный WVI | Рекомендации по росту среднего WVI команды |

---

## 6. Predictive Analytics Engine

### 6.1 Модели

| Модель | Задача | Архитектура | Горизонт | Метрика |
|--------|--------|-------------|---------|---------|
| WVI Forecast | Прогноз WVI на 7/30 дней | LSTM (seq2seq) | 7–30 дней | MAE = 4.1 |
| Churn Predictor | Вероятность оттока | Gradient Boosting | 30 дней | AUC = 0.87 |
| Monthly Yield Optimizer | Оптимальная стратегия | RL (PPO) | Real-time | Sharpe > 1.8 |
| Health Alert | Раннее предупреждение о проблемах | Anomaly detection (Isolation Forest) | 24–72 ч | Precision = 0.82 |
| Revenue Forecast | Прогноз MRR / ARR | Prophet + XGBoost | 3–12 мес | MAPE = 8% |
| Network Growth | Рост партнёрской сети | Graph Neural Network | 1–6 мес | MAE = 12% |

### 6.2 Примеры предиктивных инсайтов

**Для пользователя:**

- «HRV снижается третий день подряд. С вероятностью 72% завтра WVI упадёт ниже 60. Рекомендация: прогулка + сон до 22:00»
- «При текущей динамике Monthly Yield за март составит 14.2%. Для 16% нужно +4 к среднему WVI»

**Для администратора:**

- «Когорта февраля: retention 30d = 78%, прогноз 90d = 62%. Узкое место: 23% не подключили браслет»
- «Прогноз TVL на Q2: $8.2M (+95% к текущему). Риск при коррекции рынка: $5.1M»

---

## 7. Технологический стек

| Компонент | Технология | Назначение |
|-----------|-----------|-----------|
| On-device LLM | Llama 3.1 8B (ONNX → CoreML / TFLite) | Wellness-рекомендации (< 50 мс) |
| Cloud LLM | GPT-4o / Claude API | Сложные запросы, генерация контента |
| ML Framework | PyTorch 2.x + Lightning | Обучение моделей |
| ML Serving | ONNX Runtime (device), TorchServe (cloud) | Inference |
| Experiment Tracking | MLflow + Weights & Biases | Метрики, артефакты |
| Hyperparameter Tuning | Optuna | Автоматический HPO |
| Feature Store | Feast (on Redis) | Real-time + batch признаки |
| Data Pipeline | Apache Airflow | ETL, расписания переобучения |
| Vector DB | Qdrant | Similarity search для рекомендаций |
| RL Environment | Gymnasium + Stable Baselines3 | Обучение Wallet Agent |
| Market Data | The Graph + DeFiLlama API | Monthly Yield, TVL, utilization |
| TX Builder | Ethers.js + Tenderly Simulation | Построение и верификация транзакций |
| Keeper | Gelato Web3 Functions | On-chain исполнение |
| Monitoring | Forta + custom alerts | Обнаружение аномалий |
| Notifications | Firebase + Telegram Bot API | Push-уведомления |

---

## 8. Безопасность AI

### Трёхуровневая защита

**Layer 1 — Smart Contract Limits (on-chain)**
- Whitelist протоколов (обновление через governance)
- Максимальный размер транзакции на действие
- Дневной лимит объёма (25% портфеля)
- Аварийная пауза (multisig 2-of-3)
- Rate limits (5% TVL/ч)

**Layer 2 — AI Guardrails (off-chain)**
- Оценка риска каждой транзакции (шкала 1–100)
- Обнаружение аномалий (Isolation Forest)
- Tenderly simulation перед исполнением
- Автоотклонение при risk score > 70 без подтверждения пользователя
- Human-in-the-loop для операций > $50 000

**Layer 3 — User Controls**
- Мгновенная пауза AI (Pause Agent)
- Переопределение любого решения AI
- Пользовательские лимиты (max per tx, daily cap)
- Полный ручной режим (AI отключён)
- Журнал активности (все действия AI прозрачны)

---

## 9. Приватность данных

| Принцип | Реализация |
|---------|-----------|
| On-device first | Базовый inference на устройстве; raw данные не покидают телефон |
| E2E-шифрование | Биометрия шифруется AES-256 перед отправкой в облако |
| Federated learning | Модели улучшаются без передачи raw data на сервер |
| Data minimization | Сервер получает только WVI score + агрегированные признаки |
| Контроль пользователя | Экспорт / удаление всех данных (GDPR Art. 17) |
| Анонимизация | В исследованиях используются только де-идентифицированные данные |

---

*→ Смежные документы: [04_APP_UX.md](04_APP_UX.md) (экран AI-ассистента) · [05_DASHBOARD.md](05_DASHBOARD.md) (AI Dashboard Agents) · [06_YIELD_PROTOCOL.md](06_YIELD_PROTOCOL.md) (механика yield) · [08_HARDWARE.md](08_HARDWARE.md) (данные браслета)*

*Wellex © 2026 · Confidential*
