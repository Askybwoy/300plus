# 300.plus Brand Guide

## Бренд-гайд для презентационных материалов

---

## 1. О бренде

### Название
**300.plus** — студия быстрого тестирования бизнес-идей

### Слоган
**"Ваш спринт-отдел в кризис"**

### Ценностное предложение
Помогаем маркетологам и предпринимателям проверить гипотезы за 7 дней через создание бренда, лендинга и запуск таргетированной рекламы — без найма, без долгих согласований, без риска масштабных инвестиций.

### Альтернативные формулировки
- "Запускайте гипотезы за неделю, а не за квартал"
- "Неделя вместо квартала. Пока другие думают — вы знаете"
- "Сгорите за 300 тысяч, а не за 3 миллиона"
- "300 тысяч вместо 3 миллионов на тест"

---

## 2. Цветовая палитра

### Основные цвета

| Цвет | Hex | RGB | Использование |
|------|-----|-----|---------------|
| **Primary Orange** | `#FF6B00` | rgb(255, 107, 0) | Главный акцент, CTA, ключевые элементы |
| **Primary Hover** | `#E65C00` | rgb(230, 92, 0) | Hover-состояния кнопок |
| **Primary Light** | `#FFF4ED` | rgb(255, 244, 237) | Фоновые акценты, подсветка |

### Нейтральные цвета

| Цвет | Hex | RGB | Использование |
|------|-----|-----|---------------|
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Текст на тёмном фоне, карточки |
| **Background** | `#000000` | rgb(0, 0, 0) | Основной фон сайта |
| **Surface** | `#FAFAFA` | rgb(250, 250, 250) | Светлые секции, карточки |
| **Text Primary** | `#0A0A0A` | rgb(10, 10, 10) | Основной текст на светлом фоне |
| **Text Secondary** | `#374151` | rgb(55, 65, 81) | Вторичный текст, описания |
| **Text Muted** | `#6B7280` | rgb(107, 114, 128) | Подписи, вспомогательный текст |
| **Border** | `#E5E7EB` | rgb(229, 231, 235) | Границы, разделители |

### Тёмные UI-элементы

| Цвет | Hex | RGB | Использование |
|------|-----|-----|---------------|
| **Card Dark** | `#1A1A1A` | rgb(26, 26, 26) | Тёмные карточки, панели |
| **Card Dark Hover** | `#2A2A2A` | rgb(42, 42, 42) | Hover-состояния тёмных карточек |

### Акцентные градиенты

```css
/* Gradient для карточек */
background: linear-gradient(135deg, #FF8A3D 0%, #FF6B00 100%);

/* Grid overlay */
--color-grid: rgba(255, 107, 0, 0.08);
```

---

## 3. Типографика

### Шрифты

| Назначение | Шрифт | Fallback |
|------------|-------|----------|
| **Заголовки** | Playfair Display | Georgia, serif |
| **Основной текст** | Inter | -apple-system, BlinkMacSystemFont, sans-serif |
| **Моноширинный** | JetBrains Mono | monospace |

### Google Fonts URL
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap
```

### Иерархия заголовков

| Уровень | Размер | Вес | Стиль | Межстрочное |
|---------|--------|-----|-------|-------------|
| **Hero H1** | 64-80px (mobile: 40-48px) | 500-600 | Italic | 1.1-1.2 |
| **Section H2** | 48-56px (mobile: 32-40px) | 500-600 | Italic | 1.1-1.2 |
| **Card Title H3** | 24-32px | 500-600 | Italic | 1.2 |
| **Body Large** | 18px | 400 | Normal | 1.6 |
| **Body** | 16px | 400 | Normal | 1.6 |
| **Caption** | 14px | 500 | Normal | 1.4 |

### Особенности

- **ВСЕ заголовки** используют Playfair Display Italic — это ключевая черта бренда
- Межбуквенное расстояние: `-0.02em` (tight) для заголовков
- Цвет заголовков: `#0A0A0A` (на светлом) или `#FFFFFF` (на тёмном)
- Цвет основного текста: `#374151`

### Статистика/Числа

- Шрифт: Playfair Display Italic
- Размер: 48-72px
- Примеры: "2.4×", "5×", "7 дней", "300 000 ₽"

### Нумерация шагов

- Формат: `(01)`, `(02)`, `(03)` и т.д.
- Шрифт: Playfair Display Italic
- Цвет: `#FF6B00`
- Размер: 18px

---

## 4. Компоненты UI

### Кнопки

#### Primary Button (CTA)
```css
background: #FF6B00;
color: white;
border-radius: 9999px; /* Pill shape */
padding: 14px 28px;
font-weight: 500;
font-size: 16px;
transition: background-color 0.2s, transform 0.2s;

/* Hover */
background: #E65C00;
transform: scale(1.02);

/* Active */
transform: scale(0.98);
```

#### Secondary Button
```css
background: transparent;
color: #0A0A0A;
border: 1px solid #E5E7EB;
border-radius: 9999px;
padding: 14px 28px;
```

### Метки секций (Pills)

```css
display: inline-flex;
padding: 8px 16px;
background: #FAFAFA;
border: 1px solid #E5E7EB;
border-radius: 9999px;
font-size: 14px;
font-weight: 500;
color: #374151;
```

Примеры текстов: "Built for clarity", "How it works", "Что вы получаете"

### Карточки

#### Тёмная карточка (Feature Card)
```css
background: #1A1A1A;
border-radius: 20px;
padding: 24px;
color: white;
```

#### Светлая карточка
```css
background: white;
border: 1px solid #E5E7EB;
border-radius: 16px;
padding: 24px;
transition: all 0.3s ease;

/* Hover */
transform: translateY(-4px);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
```

#### Карточка со статистикой (Orange)
```css
background: #FF6B00;
border-radius: 16px;
padding: 32px;
color: white;
```

### Аккордеон (FAQ)

```css
.accordion-item {
  border-bottom: 1px solid #E5E7EB;
  padding: 20px 0;
}

.accordion-trigger {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 20px;
}
```

---

## 5. Анимации

### Text Reveal (ключевая анимация бренда)

```css
@keyframes textReveal {
  0% {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

.text-reveal {
  animation: textReveal 0.8s ease-out forwards;
}
```

### Word-by-Word Animation

Каждое слово анимируется с задержкой:
- Задержка между словами: `0.1s`
- Длительность: `0.6s`
- Easing: `ease-out`

### Fade Up

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Hover-эффекты

**Карточки:**
```css
transition: transform 0.3s ease, box-shadow 0.3s ease;
/* Hover: */
transform: translateY(-4px);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
```

**Кнопки:**
```css
transition: background-color 0.2s, transform 0.2s;
/* Hover: */
transform: scale(1.02);
/* Active: */
transform: scale(0.98);
```

---

## 6. Графические элементы

### Сетка (Grid Background)

```css
.grid-background {
  background-image: 
    linear-gradient(rgba(255, 107, 0, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 0, 0.08) 1px, transparent 1px);
  background-size: 80px 80px;
}
```

### Иконки

- **Библиотека:** Lucide React
- **Стиль:** Line icons, 1.5px stroke
- **Размеры:** 16px, 20px, 24px
- **Цвет:** наследуется от текста или `#FF6B00` для акцентов

### Логотип

- Формат: SVG
- Цвет: адаптивный (белый на тёмном, чёрный на светлом)
- Минимальный размер: 32px высота

---

## 7. Принципы компоновки

### Отступы

```css
--section-padding-y: 120px;        /* Desktop */
--section-padding-y-mobile: 80px;  /* Mobile */
--container-max-width: 1200px;
--container-padding-x: 24px;
```

### Структура Hero-секции

```
[Navigation]
   ↓
[Section label pill — centered]
   ↓
[Large headline — italic serif — centered]
   ↓
[Subtitle — centered]
   ↓
[CTA buttons — centered]
   ↓
[Partner logos — horizontal row]
```

### Двухколоночный layout

```
[Image/Mockup]  |  [Content]
                |  - Section label pill
                |  - Headline (italic serif)
                |  - Description
                |  - Stat number
```

---

## 8. Tone of Voice

### Характер бренда

- **Быстрый** — никакой воды, только суть
- **Профессиональный** — экспертность без пафоса
- **Честный** — прозрачные цены и сроки
- **Решающий проблемы** — фокус на результате клиента

### Принципы текста

- На русском языке
- Продающий, но без агрессии
- Чёткий и конкретный (без "воды")
- Короткие предложения
- Активный залог

### Примеры формулировок

**Вместо:** "Мы предлагаем комплексные услуги по разработке..."
**Используй:** "Бренд, лендинг и реклама за 7 дней"

**Вместо:** "Наши специалисты имеют многолетний опыт..."
**Используй:** "Проверили 50+ идей. Знаем, что работает"

---

## 9. Do's and Don'ts

### Do (Делай)

- Используй italic serif для ВСЕХ заголовков
- Применяй blur-reveal анимацию к заголовкам секций
- Используй оранжевый цвет умеренно, но смело
- Соблюдай щедрые отступы (whitespace)
- Используй pill-форму для кнопок и меток
- Держи текст коротким и по делу
- Используй чёрный фон для основных секций

### Don't (Не делай)

- Не смешивай несколько акцентных цветов
- Не используй обычный (не-italic) serif для заголовков
- Не перегружай анимациями (только ключевые моменты)
- Не загромождай контент — дай ему дышать
- Не используй generic sans-serif для заголовков
- Не пиши длинные абзацы без разбивки
- Не используй чистый белый фон для всего сайта

---

## 10. Адаптивность

### Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Мобильная адаптация

- Заголовки: 60% от десктопного размера
- Секции: 80px вертикальных отступов
- Карточки: полная ширина, вертикальный стек
- Навигация: hamburger menu
- Сетка: 40px вместо 80px

---

## 11. Контакты и ссылки

### Социальные сети
- Telegram: [ссылка]
- Email: [email]

### CTA тексты
- "Обсудить проект"
- "Бесплатный аудит"
- "Записаться на интервью"
- "Оставить заявку"

---

## 12. Пресеты для инструментов

### Figma

**Colors:**
- Primary: #FF6B00
- Background: #000000
- Surface: #FAFAFA
- Text Primary: #0A0A0A
- Text Secondary: #374151

**Typography:**
- Headlines: Playfair Display Italic
- Body: Inter Regular/Medium

### CSS Variables

```css
:root {
  --color-primary: #FF6B00;
  --color-primary-hover: #E65C00;
  --color-primary-light: #FFF4ED;
  --color-white: #FFFFFF;
  --color-background: #000000;
  --color-surface: #FAFAFA;
  --color-text-primary: #0A0A0A;
  --color-text-secondary: #374151;
  --color-text-muted: #6B7280;
  --color-border: #E5E7EB;
  --color-card-dark: #1A1A1A;
  --color-card-dark-hover: #2A2A2A;
  --color-grid: rgba(255, 107, 0, 0.08);
  
  --font-headline: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  --section-padding-y: 120px;
  --section-padding-y-mobile: 80px;
  --container-max-width: 1200px;
  --container-padding-x: 24px;
}
```

---

*Версия: 1.0*
*Дата создания: 3 апреля 2026*
