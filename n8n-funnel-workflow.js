// ============================================================
// 300.plus — Воронка с HTML→PDF (полная перезапись)
// ============================================================

const OWNER_CHAT_ID = "75402056";
const SCREENSHOT_API_KEY = "REPLACE_SCREENSHOTONE_KEY";

// === CREDENTIALS ===
const tgCred = newCredential("Telegram");
const anthropicCred = newCredential("Anthropic Header Auth");

// ============================================================
// FLOW 1: Webhook entry point
// ============================================================
const webhookTrigger = trigger({
  type: "n8n-nodes-base.webhook",
  version: 2.1,
  name: "Заявка с сайта",
  config: { httpMethod: "POST", path: "funnel-html-pdf", options: {} }
});

const parseRequest = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Парсинг заявки",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const b = $input.first().json.body || $input.first().json;\nconst name = b.name || 'друг';\nconst contact = b.contact || '';\nconst projectUrl = b.project || b.url || b.projectUrl || '';\nconst chatId = (contact || '').replace('@', '').trim();\n\nconst staticData = $getWorkflowStaticData('global');\nif (!staticData.users) staticData.users = {};\nstaticData.users[chatId] = {\n  name: name,\n  contact: contact,\n  projectUrl: projectUrl,\n  chatId: chatId,\n  ts: new Date().toISOString(),\n  step: 0\n};\n\nreturn [{ json: { chatId, name, projectUrl } }];"
  }
});

const sendWelcome = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Приветствие",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $json.chatId }}",
    text: "={{ '👋 Привет, ' + $json.name + '!\\n\\nЯ — бот 300.plus. Проведу экспресс-аудит вашего сайта и покажу, как увеличить конверсию.\\n\\nГотовы начать?' }}",
    replyMarkup: "inlineKeyboard",
    inlineKeyboard: {
      rows: [
        { row: { buttons: [
          { text: "🚀 Начать", additionalFields: { callback_data: "step0_start" } },
          { text: "❓ Что это?", additionalFields: { callback_data: "step0_what" } }
        ] } }
      ]
    },
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

// ============================================================
// FLOW 2: TelegramTrigger (callback_query handler)
// ============================================================
const callbackTrigger = trigger({
  type: "n8n-nodes-base.telegramTrigger",
  version: 1.2,
  name: "Callback Handler",
  credentials: { telegramApi: tgCred },
  config: { updates: ["callback_query"], additionalFields: {} }
});

const loadState = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Загрузка состояния",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const cb = $input.first().json.callback_query || $input.first().json;\nconst data = cb.data || '';\nconst chatId = String(cb.message?.chat?.id || cb.from?.id || '');\n\nconst staticData = $getWorkflowStaticData('global');\nconst user = (staticData.users || {})[chatId] || { chatId: chatId };\n\nlet prefix = 'unknown';\nif (data.startsWith('step0')) prefix = 'step0';\nelse if (data.startsWith('goal_')) prefix = 'goal';\nelse if (data.startsWith('stage_')) prefix = 'stage';\nelse if (data.startsWith('budget_')) prefix = 'budget';\n\nconst value = data.replace(/^(step0_|goal_|stage_|budget_)/, '');\n\nreturn [{ json: { ...user, callbackData: data, prefix: prefix, value: value, chatId: chatId } }];"
  }
});

// === ROUTER ===
const router = switchCase({
  name: "Роутинг по шагам",
  rules: [
    { conditions: { conditions: [{ leftValue: "={{ $json.prefix }}", operator: { type: "string", operation: "equals" }, rightValue: "step0" }] } },
    { conditions: { conditions: [{ leftValue: "={{ $json.prefix }}", operator: { type: "string", operation: "equals" }, rightValue: "goal" }] } },
    { conditions: { conditions: [{ leftValue: "={{ $json.prefix }}", operator: { type: "string", operation: "equals" }, rightValue: "stage" }] } },
    { conditions: { conditions: [{ leftValue: "={{ $json.prefix }}", operator: { type: "string", operation: "equals" }, rightValue: "budget" }] } }
  ],
  fallback: "extra"
});

// === CASE 0: step0 ===
const handleStep0 = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Обработка step0",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const d = $input.first().json;\nreturn [{ json: { ...d, needExplanation: d.value === 'what' } }];"
  }
});

const step0Branch = ifElse({
  name: "Объяснение?",
  conditions: { conditions: [{ leftValue: "={{ $json.needExplanation }}", operator: { type: "boolean", operation: "true" }, rightValue: true }] }
});

const sendExplanation = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Объяснение ценности",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $json.chatId }}",
    text: "🔍 <b>Что такое экспресс-аудит?</b>\n\nМы анализируем ваш сайт с помощью ИИ и находим точки роста конверсии. Вы получите PDF-отчет с конкретными рекомендациями.\n\n✅ Бесплатно\n✅ Занимает 2-3 минуты\n✅ Конкретные гипотезы с потенциалом роста",
    replyMarkup: "none",
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

const sendGoalButtons = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Шаг 1 — Цель",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $json.chatId }}",
    text: "📋 Какая сейчас главная задача для сайта?",
    replyMarkup: "inlineKeyboard",
    inlineKeyboard: {
      rows: [
        { row: { buttons: [
          { text: "📈 Больше заявок", additionalFields: { callback_data: "goal_leads" } },
          { text: "🤔 Не конвертит", additionalFields: { callback_data: "goal_convert" } }
        ] } },
        { row: { buttons: [
          { text: "🎨 Хочу редизайн", additionalFields: { callback_data: "goal_redesign" } },
          { text: "👀 Просто интересно", additionalFields: { callback_data: "goal_curious" } }
        ] } }
      ]
    },
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

const sendGoalButtonsDirect = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Шаг 1 — Цель (direct)",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $json.chatId }}",
    text: "📋 Какая сейчас главная задача для сайта?",
    replyMarkup: "inlineKeyboard",
    inlineKeyboard: {
      rows: [
        { row: { buttons: [
          { text: "📈 Больше заявок", additionalFields: { callback_data: "goal_leads" } },
          { text: "🤔 Не конвертит", additionalFields: { callback_data: "goal_convert" } }
        ] } },
        { row: { buttons: [
          { text: "🎨 Хочу редизайн", additionalFields: { callback_data: "goal_redesign" } },
          { text: "👀 Просто интересно", additionalFields: { callback_data: "goal_curious" } }
        ] } }
      ]
    },
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

// === CASE 1: goal ===
const saveGoal = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Сохранить цель",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const d = $input.first().json;\nconst staticData = $getWorkflowStaticData('global');\nif (staticData.users && staticData.users[d.chatId]) {\n  staticData.users[d.chatId].goal = d.value;\n  staticData.users[d.chatId].step = 1;\n}\nreturn [{ json: d }];"
  }
});

const sendStageButtons = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Шаг 2 — Стадия",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $json.chatId }}",
    text: "🏢 На какой стадии ваш бизнес?",
    replyMarkup: "inlineKeyboard",
    inlineKeyboard: {
      rows: [
        { row: { buttons: [
          { text: "🚀 Запускаемся", additionalFields: { callback_data: "stage_startup" } },
          { text: "📊 Растем", additionalFields: { callback_data: "stage_growth" } },
          { text: "🏢 Масштабируемся", additionalFields: { callback_data: "stage_scale" } }
        ] } }
      ]
    },
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

// === CASE 2: stage ===
const saveStage = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Сохранить стадию",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const d = $input.first().json;\nconst staticData = $getWorkflowStaticData('global');\nif (staticData.users && staticData.users[d.chatId]) {\n  staticData.users[d.chatId].stage = d.value;\n  staticData.users[d.chatId].step = 2;\n}\nreturn [{ json: d }];"
  }
});

const sendBudgetButtons = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Шаг 3 — Бюджет",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $json.chatId }}",
    text: "💰 Готовы инвестировать в улучшение сайта?",
    replyMarkup: "inlineKeyboard",
    inlineKeyboard: {
      rows: [
        { row: { buttons: [
          { text: "✅ Да, если обоснуете", additionalFields: { callback_data: "budget_yes" } }
        ] } },
        { row: { buttons: [
          { text: "💰 Зависит от суммы", additionalFields: { callback_data: "budget_maybe" } }
        ] } },
        { row: { buttons: [
          { text: "👀 Пока смотрю", additionalFields: { callback_data: "budget_no" } }
        ] } }
      ]
    },
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

// === CASE 3: budget → qualify → audit pipeline ===
const qualifyLead = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Квалификация лида",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const d = $input.first().json;\nconst staticData = $getWorkflowStaticData('global');\nconst user = (staticData.users || {})[d.chatId] || {};\n\nuser.budget = d.value;\nuser.step = 3;\n\nlet leadType = 'cold';\nif (d.value === 'yes') leadType = 'hot';\nelse if (d.value === 'maybe') leadType = 'warm';\nuser.leadType = leadType;\n\nif (staticData.users) staticData.users[d.chatId] = user;\n\nreturn [{ json: { ...user, chatId: d.chatId, hasUrl: !!user.projectUrl } }];"
  }
});

const urlCheck = ifElse({
  name: "URL есть?",
  conditions: { conditions: [{ leftValue: "={{ $json.hasUrl }}", operator: { type: "boolean", operation: "true" }, rightValue: true }] }
});

const askUrl = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Запрос URL",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendAndWait",
    chatId: "={{ $json.chatId }}",
    message: "🌐 Отправьте ссылку на ваш сайт, и я начну аудит:",
    responseType: "freeText",
    options: { appendAttribution: false, limitWaitTime: { values: { resumeAmount: 24, resumeUnit: "hours" } } }
  }
});

const saveUrl = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Сохранить URL",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const d = $input.first().json;\nconst text = d.data?.text || d.text || '';\nconst urlMatch = text.match(/(https?:\\/\\/[^\\s]+)/i);\nconst projectUrl = urlMatch ? urlMatch[1] : text.trim();\n\nconst staticData = $getWorkflowStaticData('global');\nconst chatId = d.chatId || '';\nconst user = (staticData.users || {})[chatId] || {};\nuser.projectUrl = projectUrl;\nif (staticData.users) staticData.users[chatId] = user;\n\nreturn [{ json: { ...user, chatId: chatId, projectUrl: projectUrl } }];"
  }
});

const formatOwnerMsg = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Данные для владельца",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const d = $input.first().json;\nconst staticData = $getWorkflowStaticData('global');\nconst user = (staticData.users || {})[d.chatId] || d;\n\nconst goalMap = { leads: '📈 Больше заявок', convert: '🤔 Не конвертит', redesign: '🎨 Редизайн', curious: '👀 Интересно' };\nconst stageMap = { startup: '🚀 Запуск', growth: '📊 Рост', scale: '🏢 Масштаб' };\nconst budgetMap = { yes: '✅ Да', maybe: '💰 Зависит', no: '👀 Смотрю' };\nconst leadMap = { hot: '🔥 ГОРЯЧИЙ', warm: '🟡 ТЁПЛЫЙ', cold: '🔵 ХОЛОДНЫЙ' };\n\nconst msg = '🆕 <b>Новая заявка на аудит!</b>\\n\\n' +\n  '👤 <b>Клиент:</b> ' + (user.name || 'N/A') + '\\n' +\n  '📱 <b>Chat ID:</b> ' + d.chatId + '\\n' +\n  '🌐 <b>Сайт:</b> ' + (user.projectUrl || d.projectUrl || 'N/A') + '\\n\\n' +\n  '📋 <b>Квалификация:</b>\\n' +\n  '• Цель: ' + (goalMap[user.goal] || user.goal || 'N/A') + '\\n' +\n  '• Стадия: ' + (stageMap[user.stage] || user.stage || 'N/A') + '\\n' +\n  '• Бюджет: ' + (budgetMap[user.budget] || user.budget || 'N/A') + '\\n\\n' +\n  '🔥 <b>Тип лида:</b> ' + (leadMap[user.leadType] || 'N/A');\n\nreturn [{ json: { ...user, chatId: d.chatId, ownerMsg: msg, projectUrl: user.projectUrl || d.projectUrl } }];"
  }
});

const ownerApproval = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Одобрение владельца",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendAndWait",
    chatId: OWNER_CHAT_ID,
    message: "={{ $json.ownerMsg }}",
    responseType: "approval",
    approvalOptions: { values: { approvalType: "double", approveLabel: "✅ Отправить аудит", disapproveLabel: "❌ Отклонить" } },
    options: { appendAttribution: false, limitWaitTime: { values: { resumeAmount: 24, resumeUnit: "hours" } } }
  }
});

const approvedCheck = ifElse({
  name: "Одобрено?",
  conditions: { conditions: [{ leftValue: "={{ $json.data?.approved }}", operator: { type: "boolean", operation: "true" }, rightValue: true }] }
});

// === APPROVED BRANCH ===
const notifyClientOK = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Уведомление (одобрено)",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $json.chatId }}",
    text: "✅ Отлично! Ваш аудит готовится. Это займет пару минут...",
    replyMarkup: "none",
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

const screenshotSite = node({
  type: "n8n-nodes-base.httpRequest",
  version: 4.4,
  name: "Скриншот сайта",
  config: {
    method: "GET",
    url: "={{ 'https://api.screenshotone.com/take?access_key=REPLACE_SCREENSHOTONE_KEY&url=' + encodeURIComponent($json.projectUrl) + '&full_page=true&format=jpg&image_quality=80&viewport_width=1440' }}",
    options: { response: { response: { responseFormat: "file", outputPropertyName: "screenshot" } } }
  }
});

const claudeAudit = node({
  type: "n8n-nodes-base.httpRequest",
  version: 4.4,
  name: "Claude Haiku Аудит",
  credentials: { httpHeaderAuth: anthropicCred },
  config: {
    method: "POST",
    url: "https://api.anthropic.com/v1/messages",
    authentication: "genericCredentialType",
    genericAuthType: "httpHeaderAuth",
    sendHeaders: true,
    specifyHeaders: "json",
    jsonHeaders: "{\"anthropic-version\":\"2023-06-01\",\"content-type\":\"application/json\"}",
    sendBody: true,
    contentType: "json",
    specifyBody: "json",
    jsonBody: "={{ JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:2500,messages:[{role:'user',content:[{type:'image',source:{type:'base64',media_type:'image/jpeg',data:$binary.screenshot.data}},{type:'text',text:'Ты эксперт по UX и конверсии. Проанализируй скриншот сайта. Верни СТРОГО JSON: {\"overall_score\":5.6,\"total_potential\":\"+75% CR\",\"scores\":[{\"label\":\"Первый экран\",\"score\":6},{\"label\":\"CTA\",\"score\":7},{\"label\":\"Мобильная\",\"score\":4},{\"label\":\"Доверие\",\"score\":5},{\"label\":\"Навигация\",\"score\":6}],\"issues\":[{\"number\":1,\"title\":\"Проблема\",\"problem\":\"Описание\",\"hypothesis\":\"Гипотеза\",\"solution\":\"Решение\",\"priority\":\"высокий\",\"complexity\":\"низкая\",\"potential\":\"+20% CR\",\"comment\":\"Комментарий\"}]} Только JSON, русский язык.'}]}]}) }}",
    options: {}
  }
});

const parseAudit = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Парсинг аудита",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const prev = $('Данные для владельца').first().json;\nconst r = $input.first().json;\nconst txt = r.content?.[0]?.text || '';\n\nlet auditData;\ntry {\n  auditData = JSON.parse(txt);\n} catch(e) {\n  const m = txt.match(/\\{[\\s\\S]*\\}/);\n  auditData = m ? JSON.parse(m[0]) : {\n    overall_score: 5.0, total_potential: '+50% CR',\n    scores: [{label:'Первый экран',score:5},{label:'CTA',score:5},{label:'Мобильная',score:5},{label:'Доверие',score:5},{label:'Навигация',score:5}],\n    issues: []\n  };\n}\n\nwhile (auditData.issues.length < 5) {\n  auditData.issues.push({ number: auditData.issues.length+1, title:'Требует анализа', problem:'Необходимо изучение.', hypothesis:'+10% CR', solution:'Углубленный анализ.', priority:'средний', complexity:'средняя', potential:'+10% CR', comment:'' });\n}\n\nreturn [{ json: { chatId: prev.chatId, projectUrl: prev.projectUrl, name: prev.name, budget: prev.budget, leadType: prev.leadType, auditData: auditData } }];"
  }
});

const generateHTML = node({
  type: "n8n-nodes-base.code",
  version: 2,
  name: "Генерация HTML",
  config: {
    mode: "runOnceForAllItems",
    jsCode: "const f = $input.first().json;\nconst data = f.auditData;\nconst date = new Date().toLocaleDateString('ru-RU');\nconst gc = (s) => s >= 7 ? '#4CAF50' : s >= 5 ? '#FF9800' : '#F44336';\nconst pc = (p) => p === 'высокий' ? '#F44336' : p === 'средний' ? '#FF9800' : '#4CAF50';\nconst scoresH = data.scores.map(s => '<div style=\"mb:15px\"><div style=\"display:flex;justify-content:space-between;mb:5px\"><span>'+s.label+'</span><span style=\"font-weight:bold\">'+s.score+'/10</span></div><div style=\"background:#eee;height:20px;border-radius:10px;overflow:hidden\"><div style=\"background:'+gc(s.score)+';width:'+s.score*10+'%;height:100%\"></div></div></div>').join('');\nconst issuesH = data.issues.map(i => '<div style=\"page-break-before:always;padding:40px\"><div style=\"display:flex;align-items:center;mb:30px\"><div style=\"background:#FF6B00;color:white;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:bold;mr:20px\">'+i.number+'</div><h2 style=\"margin:0;color:#1a1a1a\">'+i.title+'</h2></div><div style=\"mb:25px\"><div style=\"color:#FF6B00;font-weight:bold;mb:10px\">ПРОБЛЕМА</div><div style=\"color:#666\">'+i.problem+'</div></div><div style=\"mb:25px\"><div style=\"color:#FF6B00;font-weight:bold;mb:10px\">ГИПОТЕЗА</div><div style=\"color:#666\">'+i.hypothesis+'</div></div><div style=\"mb:25px\"><div style=\"color:#FF6B00;font-weight:bold;mb:10px\">РЕШЕНИЕ</div><div style=\"color:#1a1a1a;font-weight:500\">'+i.solution+'</div></div><div style=\"display:flex;gap:15px;mt:30px\"><div style=\"background:'+pc(i.priority)+';color:white;padding:8px 16px;border-radius:4px;font-size:12px\">'+i.priority+'</div><div style=\"background:#f5f5f5;padding:8px 16px;border-radius:4px;font-size:12px\">'+i.complexity+'</div><div style=\"background:#FF6B00;color:white;padding:8px 16px;border-radius:4px;font-size:12px;font-weight:bold\">'+i.potential+'</div></div></div>').join('');\nconst tableR = data.issues.map(i => '<tr style=\"border-bottom:1px solid #eee\"><td style=\"p:12px\">'+i.number+'</td><td style=\"p:12px\">'+i.title+'</td><td style=\"p:12px\"><span style=\"background:'+pc(i.priority)+';color:white;padding:4px 8px;border-radius:4px;font-size:11px\">'+i.priority+'</span></td><td style=\"p:12px\">'+i.complexity+'</td><td style=\"p:12px;color:#FF6B00;font-weight:bold\">'+i.potential+'</td></tr>').join('');\nconst url = (f.projectUrl||'').replace(/^https?:\\/\\//, '');\nconst html = '<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><style>@page{size:A4;margin:0}body{margin:0;font-family:Helvetica,Arial,sans-serif}.page{width:210mm;min-height:297mm;position:relative}</style></head><body><div class=\"page\" style=\"background:#1a1a1a;color:white;padding:40px;box-sizing:border-box\"><div style=\"color:#FF6B00;font-size:28px;font-weight:bold;margin-bottom:40px\">300.plus</div><div style=\"font-size:42px;font-weight:bold;margin-bottom:20px\">Аудит сайта</div><div style=\"color:#FF6B00;font-size:24px;font-weight:bold;margin-bottom:40px\">'+url+'</div><div style=\"width:60px;height:3px;background:#FF6B00;margin-bottom:30px\"></div>'+(f.name?'<div style=\"margin-bottom:10px\">Клиент: '+f.name+'</div>':'')+'<div style=\"margin-bottom:30px\">Дата: '+date+'</div><div style=\"font-size:100px;font-weight:bold;color:#FF6B00\">'+data.overall_score+'</div><div style=\"font-size:14px;color:#999\">из 10</div></div><div class=\"page\" style=\"background:white;padding:40px;box-sizing:border-box\"><h1 style=\"color:#1a1a1a;margin-bottom:40px\">Сводка оценок</h1>'+scoresH+'<div style=\"background:#1a1a1a;color:white;padding:30px;margin-top:40px;border-radius:8px\"><div style=\"font-size:12px;margin-bottom:10px\">Общая оценка</div><div style=\"font-size:48px;font-weight:bold;color:#FF6B00\">'+data.overall_score+'/10</div></div></div>'+issuesH+'<div class=\"page\" style=\"background:white;padding:40px;box-sizing:border-box;page-break-before:always\"><h1 style=\"color:#1a1a1a;margin-bottom:40px\">Сводная таблица</h1><table style=\"width:100%;border-collapse:collapse;font-size:12px\"><thead><tr style=\"background:#1a1a1a;color:white\"><th style=\"padding:12px;text-align:left\">N</th><th style=\"padding:12px;text-align:left\">Проблема</th><th style=\"padding:12px;text-align:left\">Приоритет</th><th style=\"padding:12px;text-align:left\">Сложность</th><th style=\"padding:12px;text-align:left\">Потенциал</th></tr></thead><tbody>'+tableR+'</tbody></table><div style=\"background:#1a1a1a;color:white;padding:20px;margin-top:30px;border-radius:8px\"><div style=\"font-size:12px\">Общий потенциал:</div><div style=\"font-size:24px;font-weight:bold;color:#FF6B00\">'+data.total_potential+'</div></div></div><div class=\"page\" style=\"background:#1a1a1a;color:white;padding:40px;box-sizing:border-box;page-break-before:always\"><h1 style=\"font-size:32px;margin-bottom:40px\">Готовы улучшить ваш сайт?</h1><div style=\"text-align:center;color:#999;margin-top:60px\"><div style=\"margin-bottom:10px\">Свяжитесь с нами:</div><div style=\"color:#FF6B00;font-size:18px;font-weight:bold\">t.me/its300plus | 300.plus</div></div></div></body></html>';\nreturn [{ json: { ...f, htmlContent: html } }];"
  }
});

const htmlToPdf = node({
  type: "n8n-nodes-base.httpRequest",
  version: 4.4,
  name: "HTML к PDF",
  config: {
    method: "POST",
    url: "http://gotenberg:3000/forms/chromium/convert/html",
    sendBody: true,
    contentType: "multipart-form-data",
    specifyBody: "keypair",
    bodyParameters: { parameters: [
      { name: "files", value: "={{ $json.htmlContent }}" },
      { name: "paperWidth", value: "8.27" },
      { name: "paperHeight", value: "11.69" },
      { name: "marginTop", value: "0" },
      { name: "marginBottom", value: "0" },
      { name: "marginLeft", value: "0" },
      { name: "marginRight", value: "0" },
      { name: "printBackground", value: "true" }
    ] },
    options: { response: { response: { responseFormat: "file", outputPropertyName: "pdf" } } }
  }
});

const sendPdf = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Отправка PDF",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendDocument",
    chatId: "={{ $('Данные для владельца').first().json.chatId }}",
    binaryData: true,
    binaryPropertyName: "pdf",
    replyMarkup: "none",
    additionalFields: { caption: "📊 Ваш персональный аудит сайта от 300.plus", parse_mode: "HTML", fileName: "audit-300plus.pdf" }
  }
});

const sendOffer = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Оффер",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $('Данные для владельца').first().json.chatId }}",
    text: "={{ $('Данные для владельца').first().json.leadType === 'hot' ? '🔥 <b>Видите потенциал?</b>\\n\\nПакет СПРИНТ — редизайн главной за 7 дней с гарантией роста конверсии.\\n\\n👉 @its300plus' : $('Данные для владельца').first().json.leadType === 'warm' ? '💡 <b>Хотите обсудить?</b>\\n\\nБесплатная консультация и подбор варианта под ваш бюджет.\\n\\n👉 @its300plus' : '📌 <b>Сохраните отчет!</b>\\n\\nКогда будете готовы — мы здесь.\\n\\n👉 @its300plus' }}",
    replyMarkup: "none",
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

// === REJECTED BRANCH ===
const notifyClientRejected = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Уведомление (отказ)",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: "={{ $json.chatId }}",
    text: "Спасибо за интерес! К сожалению, сейчас мы не можем провести аудит. Попробуйте позже или напишите @its300plus.",
    replyMarkup: "none",
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

const confirmToOwner = node({
  type: "n8n-nodes-base.telegram",
  version: 1.2,
  name: "Подтверждение владельцу",
  credentials: { telegramApi: tgCred },
  config: {
    resource: "message",
    operation: "sendMessage",
    chatId: OWNER_CHAT_ID,
    text: "❌ Заявка отклонена.",
    replyMarkup: "none",
    additionalFields: { parse_mode: "HTML", appendAttribution: false }
  }
});

// ============================================================
// WIRING
// ============================================================
const wf = workflow("HlUKa9WSAIhWSQ5K", "300.plus — Воронка с HTML→PDF");

// Flow 1: Webhook → Parse → Welcome
wf.add(webhookTrigger).to(parseRequest).to(sendWelcome);

// Flow 2: TG Callback → Load state → Router
wf.add(callbackTrigger).to(loadState).to(
  router
    .onCase(0, handleStep0)
    .onCase(1, saveGoal)
    .onCase(2, saveStage)
    .onCase(3, qualifyLead)
);

// Case 0: step0 → branch → goal buttons
wf.add(handleStep0).to(
  step0Branch
    .onTrue(sendExplanation)
    .onFalse(sendGoalButtonsDirect)
);
wf.add(sendExplanation).to(sendGoalButtons);

// Case 1: save goal → stage buttons
wf.add(saveGoal).to(sendStageButtons);

// Case 2: save stage → budget buttons
wf.add(saveStage).to(sendBudgetButtons);

// Case 3: qualify → URL check → approval → audit pipeline
wf.add(qualifyLead).to(
  urlCheck
    .onTrue(formatOwnerMsg)
    .onFalse(askUrl)
);
wf.add(askUrl).to(saveUrl).to(formatOwnerMsg);

wf.add(formatOwnerMsg).to(ownerApproval).to(
  approvedCheck
    .onTrue(notifyClientOK)
    .onFalse(notifyClientRejected)
);

// Approved: audit pipeline
wf.add(notifyClientOK).to(screenshotSite).to(claudeAudit).to(parseAudit).to(generateHTML).to(htmlToPdf).to(sendPdf).to(sendOffer);

// Rejected
wf.add(notifyClientRejected).to(confirmToOwner);
