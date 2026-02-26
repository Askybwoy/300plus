# 300.plus Landing Page Style Guide

Based on reference analysis: Cliento video, main page structure, and page layouts.

---

## 1. Typography

### Font Stack
```css
--font-headline: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

### Headline Style
- **Font**: Playfair Display **Italic**
- **Weight**: 500-600
- **Style**: Italic (key differentiator)
- **Size scale**:
  - Hero: 64-80px (mobile: 40-48px)
  - Section titles: 48-56px (mobile: 32-40px)
  - Card titles: 24-32px
- **Line height**: 1.1-1.2
- **Letter spacing**: -0.02em (tight)

### Body Text
- **Font**: Inter
- **Weight**: 400 (regular), 500 (medium)
- **Size**: 16-18px
- **Line height**: 1.6
- **Color**: #374151 (gray-700)

### Section Labels (Pills/Badges)
- **Font**: Inter
- **Size**: 14px
- **Weight**: 500
- **Style**: Pill-shaped background
- **Example**: "Built for clarity", "How it works"

### Statistics/Numbers
- **Font**: Playfair Display Italic
- **Size**: 48-72px
- **Style**: Large, bold metrics like "2.4×", "5×", "7 days"

---

## 2. Color Palette

### Primary Colors
```css
--color-primary: #FF6B00;        /* Vibrant orange - main accent */
--color-primary-hover: #E65C00;  /* Darker orange for hover */
--color-primary-light: #FFF4ED;  /* Light orange tint for backgrounds */
```

### Neutral Colors
```css
--color-white: #FFFFFF;
--color-background: #FAFAFA;     /* Subtle off-white */
--color-text-primary: #0A0A0A;   /* Near black for headlines */
--color-text-secondary: #374151; /* Gray for body text */
--color-text-muted: #6B7280;     /* Muted gray for captions */
--color-border: #E5E7EB;         /* Light gray borders */
```

### Dark UI Elements
```css
--color-card-dark: #1A1A1A;      /* Dark cards/panels */
--color-card-dark-hover: #2A2A2A;
```

### Accent Grid Background
```css
--color-grid: rgba(255, 107, 0, 0.1); /* Subtle orange grid lines */
```

---

## 3. Animation Patterns

### Text Reveal Animation (Key Feature)
Words animate from blurred/faded to sharp/visible:

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
Each word animates with staggered delay:
```typescript
// Framer Motion example
const wordVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};
```

### Scroll-Triggered Animations
- **Fade up**: Elements fade in and move up on scroll
- **Stagger**: Child elements animate sequentially
- **Scale**: Cards slightly scale up on hover

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

### Card Hover Effects
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
```

### Button Animations
```css
.button-primary {
  transition: background-color 0.2s, transform 0.2s;
}
.button-primary:hover {
  background-color: var(--color-primary-hover);
  transform: scale(1.02);
}
.button-primary:active {
  transform: scale(0.98);
}
```

---

## 4. UI Components

### Section Labels (Pills)
```css
.section-label {
  display: inline-flex;
  padding: 8px 16px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text-secondary);
}
```

### Primary Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--color-primary);
  color: white;
  border-radius: 9999px; /* Pill shape */
  font-weight: 500;
  font-size: 16px;
}
```

### Dark Cards (Feature Cards)
```css
.card-dark {
  background: var(--color-card-dark);
  border-radius: 20px;
  padding: 24px;
  color: white;
}

.card-dark-item {
  background: linear-gradient(135deg, #FF8A3D 0%, #FF6B00 100%);
  border-radius: 12px;
  padding: 16px 20px;
  color: white;
}
```

### Feature Cards (White)
```css
.card-feature {
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
}
```

### Stat Card (Orange Accent)
```css
.card-stat {
  background: var(--color-primary);
  border-radius: 16px;
  padding: 32px;
  color: white;
}

.stat-number {
  font-family: var(--font-headline);
  font-style: italic;
  font-size: 64px;
  line-height: 1;
}
```

### Numbered Steps
```css
.step-number {
  font-family: var(--font-headline);
  font-style: italic;
  color: var(--color-primary);
  font-size: 18px;
}
/* Format: (01), (02), etc. */
```

### Accordion (FAQ)
```css
.accordion-item {
  border-bottom: 1px solid var(--color-border);
  padding: 20px 0;
}

.accordion-trigger {
  font-family: var(--font-headline);
  font-style: italic;
  font-size: 20px;
}
```

---

## 5. Layout Patterns

### Grid Background
Orange grid overlay on sections:
```css
.grid-background {
  background-image: 
    linear-gradient(var(--color-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-grid) 1px, transparent 1px);
  background-size: 80px 80px;
}
```

### Section Spacing
```css
--section-padding-y: 120px;  /* Desktop */
--section-padding-y-mobile: 80px;
--container-max-width: 1200px;
--container-padding-x: 24px;
```

### Two-Column Feature Layout
```
[Image/Mockup]  |  [Content]
                |  - Section label pill
                |  - Headline (italic serif)
                |  - Description
                |  - Stat number
```

### Hero Structure
```
[Navigation]
[Section label pill - centered]
[Large headline - italic serif - centered]
[Subtitle - centered]
[CTA buttons - centered]
[Partner logos - horizontal row]
```

---

## 6. Specific Animations to Implement

### 1. Hero Text Reveal
- Each word fades in with blur effect
- Staggered timing (0.1s between words)
- Total duration: ~1.5s

### 2. Scroll-triggered Section Headers
- Section label slides up with fade
- Headline words animate word-by-word
- Triggered at 20% viewport intersection

### 3. Card Entrance
- Cards fade up with 40px offset
- Stagger between cards: 0.1s
- Duration: 0.6s

### 4. Statistics Counter
- Numbers count up from 0
- Duration: 1.5s
- Easing: ease-out

### 5. Accordion Expand
- Content slides down with fade
- Duration: 0.3s
- Icon rotates 45deg

---

## 7. Responsive Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Mobile Adjustments
- Headlines: 60% of desktop size
- Section padding: 80px vertical
- Cards: Full width, stacked
- Navigation: Hamburger menu

---

## 8. Implementation Notes

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@1,400;1,500;1,600&display=swap" rel="stylesheet">
```

### Framer Motion Config
```typescript
const defaultTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1] // Custom easing
};

const staggerChildren = 0.1;
```

### Key Visual Elements
1. Orange accent color throughout
2. Italic serif headlines (editorial feel)
3. Text blur-reveal animations
4. Orange grid background on accent sections
5. Dark cards with gradient items
6. Pill-shaped buttons and labels
7. Large statistic numbers with "×" suffix
8. Numbered steps with parentheses "(01)"

---

## 9. Do's and Don'ts

### Do
- Use italic serif for ALL headlines
- Apply blur-reveal animation to section titles
- Use orange sparingly but boldly
- Maintain generous whitespace
- Use pill shapes for buttons and labels

### Don't
- Mix multiple accent colors
- Use regular (non-italic) serif for headlines
- Overuse animations (key moments only)
- Crowd content - let it breathe
- Use generic sans-serif for headlines
