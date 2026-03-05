---
id: 08_HARDWARE
title: "08 · Wellex Band — Браслет"
sidebar_position: 8
description: "Wellex v5.0 · 05.03.2026"
---

# 08 · WELLEX BAND — Hardware Platform
> **Версия:** 5.0 | **Дата:** 05.03.2026 | **Статус:** Public


> Screenless биометрический браслет собственной разработки · Medical-grade датчики · Бесплатно при подписке $19/мес
>
> ⚠️ Wellex Band measures biometrics for WVI calculation. WVI determines Target Yield tier — not a guaranteed return.

---

## 1. Философия устройства

Wellex Band — **screenless биометрический оракул** собственной разработки Wellex. Отсутствие экрана обеспечивает максимальную автономию батареи (до **14 дней**) и абсолютный фокус на качестве данных. Каждый замер криптографически подписывается и передаётся через BLE 5.3 в приложение Wellex для расчёта WVI → Monthly Yield.

**Одна модель. Топовые спецификации. Бесплатно при подписке $19/мес.**

Путь данных:
```
Сенсоры → TEE (подпись) → BLE 5.3 → App → Wellex Oracle → On-chain WVI
```

---

## 2. Технические спецификации

### 2.1 Основные характеристики

| Параметр | Значение |
|----------|----------|
| **Название** | Wellex Band |
| **Тип** | Screenless smart band |
| **Разработка** | Wellex (собственный дизайн, инженерия, firmware) |
| **Линейка** | 1 модель (top-spec) |
| **Цена с подпиской** | **$0 (бесплатно)** при подписке $19/мес |
| **Розничная цена** | $249 (без подписки) |
| **SoC** | Nordic nRF5340 (dual-core ARM Cortex-M33, 128 + 64 МГц) |
| **RAM** | 512 KB + 64 KB (network core) |
| **Flash** | 1 MB + 256 KB |
| **Secure Element** | Infineon OPTIGA Trust M (TEE, криптохранилище ключей) |
| **Беспроводная связь** | BLE 5.3 (LE Audio ready, extended range, direction finding) |
| **NFC** | Быстрое сопряжение (tap-to-pair) |

### 2.2 Сенсорный модуль

| Сенсор | Модель / Тип | Спецификация | Применение в WVI |
|--------|-------------|-------------|-----------------|
| **PPG** | Dual-LED (green 525 нм + red 660 нм) | HR continuous, beat-to-beat RR | Основа WVI: HRV, стресс, recovery |
| **ECG** | Dry electrodes (touch-based) | Single-lead, по запросу | Валидация HRV, медицинский уровень |
| **SpO₂** | Red (660 нм) + IR (940 нм) | Continuous, точность ±2% | Recovery, качество сна |
| **EDA** | 2 × Ag/AgCl electrodes | SCL + SCR (10 Гц) | 11 эмоций, стресс |
| **Акселерометр** | Bosch BMA456 (3-axis) | 50 Гц, ±16g, 12-bit | Шаги, калории, sleep staging |
| **Гироскоп** | Bosch BMI270 (3-axis) | 50 Гц, ±2000 °/с | Классификация тренировок |
| **Температура** | TMP117 (Texas Instruments) | Точность ±0.1 °C, разрешение 0.0078 °C | Циркадный ритм, recovery |
| **Барометр** | BMP390 (Bosch) | Высота ±0.5 м | Этажи, altitude training |

### 2.3 Физические характеристики

| Параметр | Значение |
|----------|----------|
| **Размеры (капсула)** | 42 × 18 × 10.5 мм |
| **Вес** | 8.5 г (капсула) / 22 г (с ремешком) |
| **Материал корпуса** | Aerospace-grade polycarbonate + нержавеющая сталь (задняя панель) |
| **Водозащита** | **IP68** (5 ATM / 50 м, плавание) |
| **Пылезащита** | IP6X (полная) |
| **Рабочая температура** | −10 °C … +50 °C |
| **Размеры ремешка** | S (130–170 мм) · M (155–210 мм) · L (190–240 мм) |
| **Цвета** | Midnight Black · Arctic White · Deep Ocean · Forest Green |

### 2.4 Батарея и зарядка

| Параметр | Значение |
|----------|----------|
| **Ёмкость** | 180 мАч (LiPo) |
| **Автономность** | **до 14 дней** (screenless — нулевое потребление на дисплей) |
| **Режим мониторинга** | PPG always-on (1 Гц), Accel 50 Гц, EDA 10 Гц |
| **Зарядка** | Магнитная, USB-C pogo pin cradle |
| **Полный цикл зарядки** | 0 → 100% за 45 мин |
| **Quick charge** | 10 мин → 3 дня автономности |
| **LED-индикатор** | Tri-color (зарядка / сопряжение / OTA) |

### 2.5 Сертификации

| Сертификация | Статус | Описание |
|-------------|:------:|----------|
| CE (EU) | ✅ Получена | Электромагнитная совместимость |
| FCC (US) | ✅ Получена | Соответствие по радиочастотам |
| Bluetooth SIG | ✅ Qualified | BLE 5.3 |
| IP68 | ✅ Подтверждена | Тест в сторонней лаборатории |
| RoHS | ✅ Compliant | Ограничение вредных веществ |
| FDA 510(k) | 🔄 Roadmap Q4 2026 | Классификация медицинского устройства |
| MDR (EU) | 🔄 Roadmap 2027 | Регулирование медицинских устройств |

---

## 3. Medical-Grade точность

### 3.1 Валидация

| Метрика | Точность | Эталон |
|---------|---------|--------|
| HR (пульс) | ±2 BPM vs ECG Holter | IEC 60601-2-27 |
| HRV (RMSSD) | r = 0.94 vs ECG | Schäfer & Vagedes, 2013 |
| SpO₂ | ±2% vs pulse oximeter | ISO 80601-2-61 |
| Sleep stages | κ = 0.72 vs PSG | de Zambotti et al., 2019 |
| Шаги | ±3% vs ручной подсчёт | — |
| Температура | ±0.1 °C vs эталон | — |
| ECG | Диагностическое качество (верифицировано кардиологами) | IEC 60601-2-25 |

### 3.2 Производственная калибровка

Каждый Wellex Band проходит полный цикл калибровки:

1. **PPG** — сравнение с golden reference photodiode
2. **SpO₂** — гипоксическая камера (SaO₂ 70–100%)
3. **Температура** — климатическая камера (15–45 °C)
4. **Акселерометр** — 6-point tumble test
5. **ECG** — проверка синтетическим ECG-сигналом
6. **BLE range** — минимум 15 м в open field
7. **Водостойкость** — камера давления (5 ATM, 10 мин)

---

## 4. Firmware и OTA-обновления

### 4.1 Архитектура firmware

```
Application Layer
├── Sensor Manager (PPG, EDA, Accel, Gyro, Temp, Baro)
├── Data Buffer (локальное хранение до 7 дней)
├── WVI Pre-processor
└── TEE Signer (криптографическая подпись)

BLE Communication Stack

RTOS: Zephyr (nRF Connect SDK)

Hardware Abstraction Layer (HAL)
├── Nordic nRF5340 SoC
└── Infineon OPTIGA Trust M
```

### 4.2 OTA-обновления (Over-the-Air)

| Параметр | Значение |
|----------|----------|
| Протокол | Nordic DFU over BLE 5.3 |
| Безопасность | Подписанные образы (Ed25519), верификация через Secure Element |
| Размер обновления | 50–200 KB (delta updates) |
| Время установки | 2–5 мин |
| Rollback | Dual-bank: при ошибке — автооткат к предыдущей версии |
| Уведомление | Push в приложении: «Доступна прошивка v2.2.0 — улучшена точность HRV» |
| Фоновая загрузка | Загрузка фоном; установка при зарядке (> 30%) |
| Частота | ~1 раз в 6–8 недель |

### 4.3 Roadmap firmware

| Версия | Срок | Изменения |
|--------|------|-----------|
| v1.0.0 | Q2 2026 | Launch: все сенсоры, BLE 5.3, TEE |
| v1.1.0 | Q3 2026 | Улучшенный алгоритм sleep staging |
| v1.2.0 | Q4 2026 | Advanced emotion detection (EDA + HRV fusion) |
| v2.0.0 | Q1 2027 | ML on-edge: базовый WVI pre-processing на чипе |
| v2.1.0 | Q2 2027 | LE Audio support, оптимизация батареи |

---

## 5. TEE — Trusted Execution Environment

### 5.1 Компоненты

| Элемент | Описание |
|---------|----------|
| **Secure Element** | Infineon OPTIGA Trust M |
| **Ключи** | Ed25519, генерируются на чипе, неизвлекаемые |
| **Подпись пакета** | `{sensor_data, timestamp, nonce, signature}` |
| **Attestation** | Сертификат идентичности устройства, выпускается при производстве |
| **Anti-tamper** | Физическое обнаружение вскрытия → уничтожение ключей |

### 5.2 Trusted Data Pipeline

```
Sensor Reading
 → TEE: sign(data + timestamp + monotonic_nonce)
 → BLE 5.3 encrypted channel
 → App: verify(signature, device_certificate)
 → Cloud: re-verify + WVI calculation
 → Oracle: on-chain WVI commitment (hash)
```

**Гарантия:** данные невозможно подделать ни на устройстве, ни при передаче, ни в приложении.

---

## 6. SDK и интеграция

### 6.1 Wellex SDK — поддерживаемые платформы

| Платформа | Язык | Статус |
|-----------|------|:------:|
| iOS | Swift (SwiftUI) | ✅ Production |
| Android | Kotlin (Jetpack Compose) | ✅ Production |
| React Native | TypeScript bridge | ✅ Production |
| Flutter | Dart plugin | ✅ Production |
| Web (тест) | Web Bluetooth API | 🔄 Beta |

### 6.2 Возможности SDK

| Функция | Описание |
|---------|----------|
| BLE Management | Scan, connect, disconnect, auto-reconnect, обработка ошибок |
| NFC Pairing | Tap-to-pair (iOS 16+, Android 11+) |
| Real-time HR | Потоковый пульс (1 Гц) |
| Beat-to-beat RR | Критично для WVI (каждый удар) |
| SpO₂ Continuous | Потоковая сатурация |
| EDA Stream | SCL + SCR (10 Гц) |
| ECG On-demand | Запись ЭКГ по запросу (30 с) |
| Raw Accelerometer | 50 Гц, 3 оси |
| Raw Gyroscope | 50 Гц, 3 оси |
| Temperature | 1 Гц |
| Battery & Status | Уровень заряда, версия firmware |
| OTA DFU | Программный запуск обновления |
| Data Export | Локальный буфер → batch export |

### 6.3 Потоки данных

| Поток | Частота | Формат | Применение |
|-------|---------|--------|-----------|
| HR | 1 Гц (continuous) | BPM (uint8) | WVI: нагрузка, recovery |
| RR intervals | Beat-to-beat | мс (uint16) | WVI: HRV → эмоции, стресс |
| SpO₂ | 1 Гц | % (uint8) | WVI: recovery, сон |
| EDA (SCL) | 10 Гц | мкСм (float32) | 11 эмоций |
| EDA (SCR) | Event-based | мкСм + latency | Стресс, возбуждение |
| ECG | 250 Гц (по запросу) | мВ (int16) | Калибровка HRV |
| Accel | 50 Гц | g × 3 оси (int16) | Шаги, сон, активность |
| Gyro | 50 Гц | °/с × 3 оси (int16) | Тип тренировки |
| Temperature | 1 Гц | °C (float16) | Circadian rhythm, recovery |
| Barometer | 1 Гц | гПа (float16) | Высота, этажи |

---

## 7. Бизнес-модель устройства

### 7.1 Ценообразование

| Модель | Цена | Условие |
|--------|------|---------|
| **С подпиской** | **$0 (бесплатно)** | Подписка $19/мес (lock-up 1 год) |
| Без подписки | $249 | Базовый трекинг: шаги, сон |
| Гарантийная замена | $0 | В течение 24 мес |
| Замена после гарантии | $99 | Льготная цена |

### 7.2 Состав подписки $19/мес

| Компонент | Без подписки | С подпиской ($19/мес) |
|-----------|:-----------:|:--------------------:|
| Wellex Band | ❌ ($249) | ✅ Бесплатно |
| Базовый трекинг | ✅ | ✅ |
| Расчёт WVI | ❌ | ✅ |
| Monthly Yield на депозит | ❌ | ✅ |
| AI Coach (видео / аудио) | ❌ | ✅ |
| 11 эмоций | ❌ | ✅ |
| Детальная аналитика | ❌ | ✅ |
| Сезонные челленджи | ❌ | ✅ |
| NFT-бейджи | ❌ | ✅ |
| Лидерборды | ❌ | ✅ |
| OTA-обновления | ✅ | ✅ |

### 7.3 Экономика устройства

| Метрика | Значение |
|---------|----------|
| Себестоимость (BOM) | ~$38 |
| Производство + QC | ~$12 |
| Логистика | ~$5 |
| MRR на пользователя | $19/мес |
| Срок окупаемости устройства | 3 мес |
| При 10 000 подписчиков: MRR | $190 000 |
| При 10 000 подписчиков: ARR | $2 280 000 |
| Маржа подписки | ~85% |

---

## 8. Конкурентное сравнение

| Устройство | Цена | ECG | EDA | SpO₂ | HRV | Screenless | Web3 | Батарея |
|-----------|------|:---:|:---:|:----:|:---:|:----------:|:----:|:-------:|
| Xiaomi Mi Band 9 | $35 | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | 16д |
| Fitbit Charge 6 | $160 | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | 7д |
| Oura Ring Gen 3 | $299 + $6/мес | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | 7д |
| Whoop 4.0 | $0 + $30/мес | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | 5д |
| Apple Watch Ultra | $799 | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | 2д |
| **Wellex Band** | **$0 + $19/мес** | **✅** | **✅** | **✅** | **✅** | **✅** | **✅** | **14д** |

**Wellex Band — единственное устройство, объединяющее:** ECG + EDA + полный сенсорный стек + screenless + Web3 yield + 14-дневная батарея.

---

## 9. Производство и логистика

### 9.1 Производственный процесс

| Этап | Описание | Срок |
|------|----------|------|
| PCB fabrication | 4-слойная HDI PCB, Shenzhen | 2 нед |
| Компонентная база | Nordic, Bosch, TI, Infineon | 4–6 нед (lead time) |
| SMT assembly | Pick-and-place, reflow | 1 нед |
| Module testing | ICT + functional test (100%) | В процессе сборки |
| Encapsulation | Литьё под давлением, IP68 sealing | 1 нед |
| Final QC | Все сенсоры + BLE + water test на каждом устройстве | 2 дня |
| Packaging | Фирменная коробка, QR → app, ремешок, зарядка | 1 день |
| Доставка | DHL Express (global), морская доставка (bulk) | 3–14 дней |

### 9.2 Timeline выхода на рынок

| Фаза | Срок | Описание |
|------|------|----------|
| Engineering Validation (EVT) | Завершена | Прототипы, тестирование сенсоров |
| Design Validation (DVT) | Q1 2026 | Финальный дизайн, сертификации |
| Production Validation (PVT) | Q1 2026 | Пилотная партия 500 шт |
| Mass Production (MP) | **Q2 2026** | Старт массового производства |
| Производственная мощность | — | 10 000 шт/мес (масштабирование до 50 000) |

---

## 10. Hardware Roadmap

| Версия | Срок | Описание |
|--------|------|----------|
| **v1.0** (Launch) | Q2 2026 | Полный сенсорный стек, BLE 5.3, TEE, IP68 |
| **v1.5** (OTA) | Q4 2026 | ML on-edge, улучшенные алгоритмы сна и эмоций |
| **v2.0** | Q2 2027 | UWB (proximity), NFC-платежи, обновлённый дизайн |
| **v3.0** | Q2 2028 | Неинвазивный глюкоз (CGM), eSIM, mmWave BP |

---

---

## 11. Plan B — MVP Without Physical Band

If hardware delivery delays impact launch timeline, Wellex operates in Software-First Mode:

| Mode | Description | WVI Source |
|------|-------------|-----------|
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

*→ Смежные документы: [03_WELLNESS_SCORE.md](03_WELLNESS_SCORE.md) (WVI из данных браслета) · [04_APP_UX.md](04_APP_UX.md) (мобильное приложение) · [17_TECH_ARCHITECTURE.md](17_TECH_ARCHITECTURE.md) (техническая архитектура)*

*Wellex © 2026 · Confidential*
