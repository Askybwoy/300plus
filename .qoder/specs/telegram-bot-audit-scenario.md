# Telegram Bot Audit Scenario - 300.plus

## Context

Currently the Telegram bot at `@its300plus_bot` asks 3 questions (goal, stage, budget) before running a website audit. This is insufficient — the AI audit (Claude Haiku) receives no business context, so recommendations are generic. Expanding to 5-6 targeted questions will:
1. Give Claude industry/audience context for better recommendations
2. Improve lead scoring accuracy
3. Provide richer data for the owner's approval decision

**Deliverable**: A scenario document describing the complete bot flow, questions, logic, and delivery format. No code changes.

---

## Complete User Journey

```
WEBSITE ──[form]──> WEBHOOK ──> TELEGRAM BOT
                                    │
                              Welcome + Explain
                                    │
                              Q1: Goal (4 options)
                              Q2: Niche (7 options)       ← NEW
                              Q3: Audience (4 options)     ← NEW
                              Q4: Traffic (4 options)      ← NEW
                              Q5: Stage (3 options)
                              Q6: Readiness (3 options)    ← updated wording
                                    │
                              [URL if missing]
                                    │
                              Owner Approval
                                    │
                    ┌───────────────┴───────────────┐
                 Approved                        Rejected
                    │                               │
              ScreenshotOne → Claude AI       "Try later"
                    │
              Text Summary → Telegram
              PDF Report → Telegram
              Personalized Offer
```

---

## Entry Points (Site → Bot)

User fills form on 300.plus (Modal component). Webhook sends `{ name, contact, url, form }`. The `form` value indicates intent level and adds an entry bonus to lead score:

| Form source | Entry bonus |
|---|---|
| "Запустить спринт" | +4 |
| "Обсудить проект" / "Запустим ваш проект" | +3 |
| "Заказать аудит" | +2 |
| "Бесплатный аудит" / "Расскажите о вашей идее" | +1 |

---

## Welcome Message

```
👋 Привет, {name}!

Я — бот 300.plus. Проведу экспресс-аудит вашего сайта
и покажу точки роста конверсии.

Чтобы аудит был максимально полезным, задам 6 быстрых
вопросов. Это займёт буквально минуту 🕐
```

Buttons: `[🚀 Начать]` `[❓ Что я получу?]`

"Что я получу?" sends explanation, then proceeds to Q1.

---

## Questions (Q1–Q6)

### Q1 — Goal

> 📋 Какая главная задача для вашего сайта сейчас? (1/6)

| Button | callback_data | Score | Claude focus |
|---|---|---|---|
| 📈 Больше заявок | `goal_leads` | +3 | CTA, forms, conversion funnel |
| 🤔 Не конвертит | `goal_convert` | +3 | First screen, USP, trust factors |
| 🎨 Нужен редизайн | `goal_redesign` | +2 | Visual, UX patterns, modernity |
| 👀 Просто интересно | `goal_curious` | +0 | General overview |

---

### Q2 — Niche (NEW)

> 🏷 В какой сфере ваш бизнес? (2/6)

| Button | callback_data | Score |
|---|---|---|
| 🛍 E-commerce / Магазин | `niche_ecom` | +1 |
| 💼 Услуги / B2B | `niche_b2b` | +2 |
| 🎓 Обучение / EdTech | `niche_edu` | +1 |
| 🏥 Медицина / Здоровье | `niche_med` | +2 |
| 🍔 HoReCa / Еда | `niche_horeca` | +1 |
| 💻 IT / SaaS | `niche_it` | +2 |
| 🔧 Другое | `niche_other` | +1 |

**Why it matters for Claude**: Enables industry-specific benchmarks. E.g., for B2B services Claude emphasizes case studies and ROI numbers; for e-commerce — product pages and checkout UX.

---

### Q3 — Audience (NEW)

> 👥 Кто ваш основной клиент? (3/6)

| Button | callback_data | Score |
|---|---|---|
| 👤 Обычные люди (B2C) | `aud_b2c` | +1 |
| 🏢 Бизнес / компании (B2B) | `aud_b2b` | +2 |
| 👤+🏢 И те, и другие | `aud_both` | +1 |
| 🤷 Пока определяюсь | `aud_unsure` | +0 |

**Why it matters for Claude**: B2C = evaluate emotional engagement, speed. B2B = evaluate persuasion, social proof, content depth.

---

### Q4 — Traffic (NEW)

> 📊 Сколько примерно посетителей у сайта в месяц? (4/6)

| Button | callback_data | Score |
|---|---|---|
| 🌱 Меньше 500 | `traffic_low` | +0 |
| 📈 500 – 5 000 | `traffic_mid` | +2 |
| 🚀 5 000 – 50 000 | `traffic_high` | +3 |
| 🔥 Больше 50 000 | `traffic_mega` | +4 |

**Why it matters for Claude**: High traffic → prioritize quick wins with max CR impact. Low traffic → focus on basics and acquisition strategy.

---

### Q5 — Stage

> 🏢 На какой стадии ваш проект? (5/6)

| Button | callback_data | Score |
|---|---|---|
| 🚀 Запускаемся | `stage_startup` | +1 |
| 📊 Растём | `stage_growth` | +3 |
| 🏢 Масштабируемся | `stage_scale` | +4 |

---

### Q6 — Readiness (replaces "Budget")

> 💡 Если аудит покажет точки роста — готовы действовать? (6/6)

| Button | callback_data | Score |
|---|---|---|
| ✅ Да, хочу расти | `ready_yes` | +5 |
| 🤔 Зависит от рекомендаций | `ready_maybe` | +3 |
| 👀 Пока только смотрю | `ready_no` | +0 |

Softer wording than old "Готовы инвестировать?" — less intimidating.

---

## Lead Scoring

```
Total = entry_bonus + Q1 + Q2 + Q3 + Q4 + Q5 + Q6
```

| Range | Type | Offer strategy |
|---|---|---|
| 18+ | 🔥 HOT | Aggressive: "Sprint package, 7 days, 90k" |
| 10–17 | 🟡 WARM | Soft: "Free 30-min consultation" |
| 0–9 | 🔵 COLD | Passive: "Save the report, we're here when ready" |

Max possible: 24. Min possible: 3.

---

## Enriched Claude AI Prompt

Current prompt is generic. New prompt injects all 6 answers:

```
Ты — старший UX/конверсионный аналитик студии 300.plus.

КОНТЕКСТ КЛИЕНТА:
• Ниша: {niche_label}
• Аудитория: {audience_label}
• Главная задача: {goal_label}
• Трафик: {traffic_label}
• Стадия: {stage_label}
• Готовность: {ready_label}

Проанализируй скриншот главной страницы {url}.
Учитывай нишу и аудиторию. Фокус: {focus_area}.

Ответ — строго JSON:
{
  "overall_score": 5.6,
  "total_potential": "+75% CR",
  "executive_summary": "2-3 sentences verdict",
  "scores": [
    {"label": "Первый экран", "score": 6, "comment": "..."},
    {"label": "Ясность предложения", "score": 7, "comment": "..."},
    {"label": "CTA и формы", "score": 4, "comment": "..."},
    {"label": "Доверие", "score": 5, "comment": "..."},
    {"label": "Мобильная версия", "score": 6, "comment": "..."}
  ],
  "issues": [5 issues with: number, title, problem, hypothesis,
             solution, priority, complexity, potential, comment],
  "quick_wins": ["Action 1", "Action 2", "Action 3"]
}
```

New fields vs current: `executive_summary`, `scores[].comment`, `quick_wins`.

---

## Delivery to Client

### Step 1 — Text summary (instant value)

```
✅ Аудит готов, {name}!

🌐 {projectUrl}
⭐️ Оценка: {overall_score}/10

📝 {executive_summary}

📋 Ключевые оценки:
• Первый экран: {score}/10
• Ясность предложения: {score}/10
• CTA и формы: {score}/10
• Доверие: {score}/10
• Мобильная: {score}/10

⚡ 3 быстрых победы (можно сделать сегодня):
1. {quick_win_1}
2. {quick_win_2}
3. {quick_win_3}

📄 Полный PDF-отчёт с деталями ↓
```

### Step 2 — PDF report

Pages:
1. **Cover**: Logo, URL, date, overall score, executive summary
2. **Scores**: 5 metrics with progress bars + comments
3–7. **Issues**: One per page (problem → hypothesis → solution → priority/complexity/potential)
8. **Quick Wins**: 3 actionable items with checklist
9. **CTA**: Personalized offer based on lead type

### Step 3 — Offer message (3 sec after PDF)

**HOT (18+)**: "Package SPRINT — implement all 5 recommendations in 7 days. 90 000 rub" + buttons [Discuss / All packages]

**WARM (10-17)**: "Free 30-min consultation — let's review the report together" + button [Book a review]

**COLD (<10)**: "Save the report! Quick wins can be done independently. We're here when ready."

---

## Owner Notification

```
🆕 Новая заявка на аудит!

👤 {name}
📱 Chat ID: {chatId}
🌐 {projectUrl}
📩 Источник: {form_label}

📋 Профиль:
• Цель: {goal_emoji} {goal_label}
• Ниша: {niche_emoji} {niche_label}
• Аудитория: {aud_emoji} {aud_label}
• Трафик: {traffic_emoji} {traffic_label}
• Стадия: {stage_emoji} {stage_label}
• Готовность: {ready_emoji} {ready_label}

{leadType_emoji} Тип лида: {leadType} ({score}/24)
```

Buttons: `[✅ Отправить аудит]` `[❌ Отклонить]`

---

## UX Details

- **Completion time**: ~60-90 seconds (all buttons, no typing except URL)
- **Progress indicator**: Each question shows `(N/6)` in the text
- **Micro-reactions**: Brief confirmations between questions ("Понял! 👍", "Серьёзный объём! 💰")
- **No back button**: Simplicity over flexibility; /start to restart
- **URL validation**: If user sends non-URL text, ask again with hint

---

## User State Object

```
{
  chatId, name, contact, projectUrl, formSource,
  goal, niche, audience, traffic, stage, readiness,
  leadScore, leadType, step (0-6), ts
}
```

## Router Prefixes

| Step | Prefix | Example callback_data |
|---|---|---|
| 0 | step0 | step0_start, step0_what |
| 1 | goal | goal_leads, goal_convert |
| 2 | niche | niche_ecom, niche_b2b |
| 3 | aud | aud_b2c, aud_b2b |
| 4 | traffic | traffic_low, traffic_high |
| 5 | stage | stage_startup, stage_growth |
| 6 | ready | ready_yes, ready_maybe |

---

## Files to Modify (when implementing)

- `n8n-funnel-workflow.js` — Add 3 new question steps, expand router, enrich Claude prompt, add text summary, update offers
- `audit.json` — Keep in sync with workflow changes
- `src/components/ui/Modal.tsx` — Add `project` (URL) field to webhook payload where applicable
