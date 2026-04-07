# n8n AI Prompt — Telegram Bot Audit 300.plus

Создай n8n workflow для Telegram-бота экспресс-аудита сайтов студии 300.plus.

## АРХИТЕКТУРА

2 потока:
1. Webhook POST → парсинг → приветствие в Telegram
2. TelegramTrigger (callback_query) → роутер → 6 шагов вопросов → сбор URL → одобрение владельца → скриншот → Claude AI → текст + PDF → оффер

Credentials: Telegram Bot API, Anthropic (Header Auth). Owner chat_id: "75402056".

## FLOW 1: WEBHOOK

Webhook POST path: "funnel-html-pdf". Парсим body: name, contact, projectUrl, form. Сохраняем в staticData.users[chatId]. Отправляем приветствие:
"👋 Привет, {name}! Я — бот 300.plus. Задам 6 быстрых вопросов для аудита. 🕐"
Кнопки: [🚀 Начать → step0_start] [❓ Что я получу? → step0_what]

## FLOW 2: CALLBACK HANDLER

TelegramTrigger слушает callback_query. Code-нода парсит prefix из callback_data (step0/goal/niche/aud/traffic/stage/ready). Switch роутит на 7 cases.

### ВОПРОСЫ (все через inline keyboard):

**Q1 (prefix: goal)**: "📋 Какая главная задача? (1/6)"
- 📈 Больше заявок → goal_leads (+3)
- 🤔 Не конвертит → goal_convert (+3)  
- 🎨 Нужен редизайн → goal_redesign (+2)
- 👀 Просто интересно → goal_curious (+0)

**Q2 (prefix: niche)**: "🏷 В какой сфере бизнес? (2/6)"
- 🛍 E-commerce → niche_ecom (+1)
- 💼 Услуги/B2B → niche_b2b (+2)
- 🎓 Обучение → niche_edu (+1)
- 🏥 Медицина → niche_med (+2)
- 🍔 HoReCa → niche_horeca (+1)
- 💻 IT/SaaS → niche_it (+2)
- 🔧 Другое → niche_other (+1)

**Q3 (prefix: aud)**: "👥 Кто основной клиент? (3/6)"
- 👤 B2C → aud_b2c (+1)
- 🏢 B2B → aud_b2b (+2)
- 👤+🏢 Оба → aud_both (+1)
- 🤷 Определяюсь → aud_unsure (+0)

**Q4 (prefix: traffic)**: "📊 Посетителей в месяц? (4/6)"
- 🌱 <500 → traffic_low (+0)
- 📈 500-5к → traffic_mid (+2)
- 🚀 5к-50к → traffic_high (+3)
- 🔥 50к+ → traffic_mega (+4)

**Q5 (prefix: stage)**: "🏢 Стадия проекта? (5/6)"
- 🚀 Запуск → stage_startup (+1)
- 📊 Рост → stage_growth (+3)
- 🏢 Масштаб → stage_scale (+4)

**Q6 (prefix: ready)**: "💡 Готовы действовать? (6/6)"
- ✅ Да → ready_yes (+5)
- 🤔 Зависит → ready_maybe (+3)
- 👀 Смотрю → ready_no (+0)

### LEAD SCORING

Каждая Code-нода сохраняет ответ в staticData и накапливает leadScore. После Q6 квалификация: 18+ = hot, 10-17 = warm, <10 = cold.

### СБОР URL

If-нода проверяет hasUrl. Если нет — Telegram sendAndWait (freeText, 24h timeout). Code-нода извлекает URL regex.

### ОДОБРЕНИЕ ВЛАДЕЛЬЦА

Code-нода формирует сообщение со всеми 6 ответами + leadScore + leadType. Telegram sendAndWait (approval) владельцу с кнопками ✅/❌.

### AUDIT PIPELINE (после одобрения)

1. Telegram sendMessage клиенту: "Аудит готовится..."
2. HTTP Request GET к ScreenshotOne API (full_page, jpg, 1440px)
3. HTTP Request POST к Anthropic API (claude-haiku-4-5-20251001). Промпт включает все 6 ответов как контекст:

```
Ты — UX/конверсионный аналитик. КОНТЕКСТ: ниша={niche}, аудитория={aud}, цель={goal}, трафик={traffic}, стадия={stage}. Анализируй скриншот {url}. Ответ JSON: {overall_score, total_potential, executive_summary, scores:[{label,score,comment}x5], issues:[{number,title,problem,hypothesis,solution,priority,complexity,potential}x5], quick_wins:[3 items]}
```

4. Code-нода парсит JSON (с fallback regex)
5. Telegram sendMessage — текстовая сводка: оценка, executive_summary, 5 scores, 3 quick_wins
6. Code-нода генерирует HTML-отчёт (титул, оценки с прогресс-барами, 5 issues по странице, quick wins, оффер)
7. HTTP Request POST к Gotenberg (HTML→PDF)
8. Telegram sendDocument — PDF файл "audit-300plus.pdf"
9. Telegram sendMessage — оффер по leadType:
   - hot: "🔥 Пакет СПРИНТ — 7 дней, 90к ₽" + кнопки [Обсудить/Пакеты]
   - warm: "💡 Бесплатная консультация 30 мин" + кнопка [Записаться]
   - cold: "📌 Сохраните отчёт, мы рядом"

## WIRING

Flow 1: webhook → parse → welcome
Flow 2: tgTrigger → loadState → router → [7 cases]
Case step0: branch(what?) → explanation → Q1 | direct → Q1
Case goal: save+score → Q2
Case niche: save+score → Q3
Case aud: save+score → Q4
Case traffic: save+score → Q5
Case stage: save+score → Q6
Case ready: qualify → urlCheck → (askUrl→saveUrl | skip) → ownerMsg → approval → branch(approved?) → [pipeline | reject]
