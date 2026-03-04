"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";

/* ─────────── Animated Counter ─────────── */
function CountUp({ value, inView }: { value: string; inView: boolean }) {
  const hasRun = useRef(false);
  const numericMatch = value.match(/[\d.,]+/);
  const initialDisplay = numericMatch ? value.replace(numericMatch[0], "0") : value;
  const [display, setDisplay] = useState(initialDisplay);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;
    if (!numericMatch) return;
    const numStr = numericMatch[0];
    const prefix = value.slice(0, value.indexOf(numStr));
    const suffix = value.slice(value.indexOf(numStr) + numStr.length);
    const isDecimal = numStr.includes(",");
    const numericValue = parseFloat(numStr.replace(",", "."));
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / 1500, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;
      setDisplay(isDecimal
        ? `${prefix}${current.toFixed(1).replace(".", ",")}${suffix}`
        : `${prefix}${Math.round(current)}${suffix}`
      );
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value, numericMatch]);

  return <>{display}</>;
}

/* ─────────── (01) Video Call Card ─────────── */
function VideoCallCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [seconds, setSeconds] = useState(23);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => setSeconds((s) => (s + 1) % 60), 1000);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full max-w-[380px]"
    >
      <div className="bg-white rounded-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.07)] border border-black/6 overflow-hidden">
        <div className="px-5 py-3 border-b border-black/6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-sm font-medium text-[#0A0A0A]">47:{seconds.toString().padStart(2, "0")}</span>
          </div>
          <div className="bg-black/4 rounded-[20px] px-3 py-1">
            <span className="text-xs text-black/40">1&nbsp;час</span>
          </div>
        </div>
        <div className="px-5 py-4 flex gap-1">
          <div className="flex-1 bg-gradient-to-b from-[#F7F7F7] to-[#EDEDED] rounded-md flex flex-col items-center justify-center py-6 relative">
            <div className="w-12 h-12 rounded-full bg-[#FF6B00] flex items-center justify-center mb-2">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 17V15C5 13.3431 6.34315 12 8 12H14C15.6569 12 17 13.3431 17 15V17" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><circle cx="11" cy="7" r="3" stroke="white" strokeWidth="1.8"/></svg>
            </div>
            <span className="text-xs font-medium text-black/60">300plus</span>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full border-2 border-[#FF6B00]" />
            </div>
          </div>
          <div className="flex-1 bg-gradient-to-br from-[#E8E8E8] to-[#D0D0D0] rounded-md flex flex-col items-center justify-center py-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8E8E8] to-[#D0D0D0] border border-black/10 flex items-center justify-center mb-2">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 17V15C5 13.3431 6.34315 12 8 12H14C15.6569 12 17 13.3431 17 15V17" stroke="rgba(0,0,0,0.35)" strokeWidth="1.8" strokeLinecap="round"/><circle cx="11" cy="7" r="3" stroke="rgba(0,0,0,0.35)" strokeWidth="1.8"/></svg>
            </div>
            <span className="text-xs font-medium text-black/60">Клиент</span>
          </div>
        </div>
        <div className="px-5 py-3 border-t border-black/6 flex items-center justify-center gap-3">
          {[0,1,2,3,4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-black/4 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black/20" />
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute -bottom-8 right-4 bg-white rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-black/6 p-4 w-[260px]"
      >
        <div className="flex items-start gap-3">
          <div className="w-[18px] h-[18px] rounded-[9px] bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5L4.5 7L7.5 3" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] text-black/50">Этап завершён</span>
              <span className="text-[11px] text-black/35">15:00</span>
            </div>
            <p className="text-[15px] font-medium text-[#1A1A1A]">Интервью с&nbsp;клиентом</p>
            <p className="text-[13px] text-black/45 mt-0.5">Создание лендинга</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────── (02) List Card ─────────── */
function ListCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const items = [
    { text: "Счёт отправлен", time: "2ч назад" },
    { text: "Оплата 50% получена", time: "1ч назад" },
    { text: "Договор подписан", time: "30м назад" },
    { text: "Работа над\u00A0проектом начата", time: "Сейчас" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.07)] border border-black/6 w-full max-w-[380px] overflow-hidden"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
          className="flex items-center gap-4 px-5 py-4 border-b border-black/4 last:border-b-0"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.15, type: "spring", damping: 12 }}
            className="w-11 h-11 rounded-[22px] bg-[#1A1A1A] flex items-center justify-center flex-shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 10L9 13L14 7" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.div>
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-medium text-[#1A1A1A] leading-snug">{item.text}</p>
          </div>
          <span className="text-[13px] text-black/40 flex-shrink-0">{item.time}</span>
        </motion.div>
      ))}
      <div className="px-5 pb-5 pt-2 flex justify-end">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-[#1A1A1A] rounded-full px-5 py-3 flex items-center gap-2"
        >
          <span className="text-[15px] font-medium text-white">Подтвердить этап</span>
          <div className="w-8 h-8 rounded-2xl bg-[#FF6B00] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6L5.5 8.5L9 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─────────── (03) Dark Project Card ─────────── */
function ProjectCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const tiles = [
    { text: "Айдентика\nбренда", bg: "bg-[#2A2A2A]", textColor: "text-white", iconBg: "bg-[#FF6B00]", iconStroke: "white" },
    { text: "Лендинг\nпод\u00A0рекламу", bg: "bg-[#FF6B00]", textColor: "text-white", iconBg: "bg-white", iconStroke: "#FF6B00" },
    { text: "Рекламные\nкреативы", bg: "bg-white", textColor: "text-[#1A1A1A]", iconBg: "bg-black/6", iconStroke: "#1A1A1A" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="bg-[#1A1A1A] rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.15)] w-full max-w-[340px] overflow-hidden"
    >
      <div className="px-6 py-5 border-b border-white/8 grid grid-cols-3 gap-4">
        {[
          { label: "Клиент", value: "Стартап" },
          { label: "Бюджет", value: "300+" },
          { label: "Дней", value: "14" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
          >
            <span className="text-[11px] text-white/40 uppercase tracking-[0.05em]">{item.label}</span>
            <p className="text-sm font-medium text-white mt-0.5">{item.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="p-6 space-y-2.5">
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.text}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            className={`${tile.bg} rounded-2xl px-5 py-4 flex items-center justify-between`}
          >
            <span className={`text-xl font-[family-name:var(--font-playfair)] font-medium leading-tight ${tile.textColor} whitespace-pre-line`}>{tile.text}</span>
            <div className={`w-9 h-9 rounded-[18px] ${tile.iconBg} flex items-center justify-center`}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 11L11 5M11 5H5M11 5V11" stroke={tile.iconStroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────── (04) Chat Card ─────────── */
function ChatCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-[380px]"
    >
      <div className="bg-gradient-to-t from-[#F9F9F9] to-white rounded-[20px] p-6 shadow-sm border border-black/4">
        <div className="space-y-4 mb-6">
          {/* Outgoing message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-end"
          >
            <div className="bg-[#F5F5F5] rounded-[18px_18px_6px_18px] px-4 py-3 max-w-[260px]">
              <p className="text-sm text-[#1A1A1A] leading-relaxed">Кампания запущена. Ждите первых лидов в&nbsp;течение&nbsp;дня!</p>
            </div>
            <span className="text-xs text-black/40 mt-1">14:32</span>
          </motion.div>
          {/* Incoming message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-end gap-2"
          >
            <div className="w-9 h-9 rounded-[18px] bg-gradient-to-br from-[#FFE4D4] to-[#FFCDB2] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 14V12.5C4 11.1193 5.11929 10 6.5 10H11.5C12.8807 10 14 11.1193 14 12.5V14" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="6" r="2.5" stroke="#FF6B00" strokeWidth="1.5"/></svg>
            </div>
            <div className="flex flex-col">
              <div className="bg-[#FF6B00] rounded-[18px_18px_18px_6px] px-4 py-3 max-w-[260px]">
                <p className="text-sm text-white leading-relaxed">Отлично! Уже&nbsp;пришла первая заявка, спасибо!</p>
              </div>
              <span className="text-xs text-black/40 mt-1">14:45</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Task card overlay */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="mt-3 bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-black/6 p-4 w-[280px]"
      >
        <div className="flex items-start gap-3">
          <div className="w-[18px] h-[18px] rounded-[9px] bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 5L4.5 7L7.5 3" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] text-black/50">Реклама запущена</span>
              <span className="text-[11px] text-black/35">14:30</span>
            </div>
            <p className="text-[15px] font-medium text-[#1A1A1A]">Настройка таргета VK</p>
            <p className="text-[13px] text-black/45 mt-0.5">Привлечение клиентов</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────── Step Data ─────────── */
const steps = [
  {
    number: "(01)",
    title: "Понимаем бизнес\nдо\u00A0первого пикселя",
    description: "Глубокое интервью помогает создать лендинг, который говорит на\u00A0языке вашей аудитории",
    metricLabel: "конверсия в\u00A0заявку",
    metricValue: "2,5",
    metricHasArrow: true,
    card: VideoCallCard,
    cardPosition: "right" as const,
  },
  {
    number: "(02)",
    title: "Старт без\nлишних слов",
    description: "Получаем предоплату 50% и\u00A0сразу приступаем к\u00A0работе над\u00A0вашим проектом",
    metricLabel: "размер предоплаты",
    metricValue: "50%",
    metricHasArrow: false,
    card: ListCard,
    cardPosition: "left" as const,
  },
  {
    number: "(03)",
    title: "Бренд +\nЛендинг",
    description: "Создаём айдентику и\u00A0посадочную страницу, готовим материалы\u00A0\u2014 всё\u00A0за\u00A0две недели",
    metricLabel: "готовность к\u00A0запуску рекламы",
    metricValue: "2",
    metricHasArrow: true,
    card: ProjectCard,
    cardPosition: "right" as const,
  },
  {
    number: "(04)",
    title: "Запуск рекламы",
    description: "Настраиваем таргетированную рекламу\nи\u00A0получаем первые заказы",
    metricLabel: "заявок за\u00A0день",
    metricValue: "18",
    metricHasArrow: true,
    card: ChatCard,
    cardPosition: "left" as const,
  },
];

/* ─────────── Metric Component ─────────── */
function Metric({ label, value, hasArrow, inView }: { label: string; value: string; hasArrow: boolean; inView: boolean }) {
  return (
    <div className="border-t border-gradient-to-r from-[#F8F5F5] to-white pt-6">
      <p className="text-[15px] text-black/60 mb-2">{label}</p>
      <div className="flex items-center gap-3">
        <span className="font-[family-name:var(--font-playfair)] text-[80px] md:text-[120px] leading-none tracking-[-0.06em] text-[#FF6B00]">
          <CountUp value={value} inView={inView} />
        </span>
        {hasArrow && (
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" className="mt-4">
            <path d="M7 22L22 7M22 7H7M22 7V22" stroke="#FF6B00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </div>
  );
}

/* ─────────── Single Step Row ─────────── */
function StepRow({ step }: { step: typeof steps[number] }) {
  const StepCard = step.card;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const isCardLeft = step.cardPosition === "left";

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isCardLeft ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}
    >
      {/* Text side */}
      <div className="flex-1 flex gap-6">
        <div className="flex flex-col justify-between py-8 flex-1">
          <div>
            <span className="font-[family-name:var(--font-playfair)] font-medium text-[25px] text-[#FF6B00] tracking-[-0.03em]">
              {step.number}
            </span>
            <div className="mt-6 space-y-3">
              <h3 className="font-[family-name:var(--font-playfair)] font-medium text-[28px] md:text-[32px] text-[#2D2D2D] leading-[1.1] tracking-[-0.025em] whitespace-pre-line">
                {step.title}
              </h3>
              <p className="text-[15px] text-black/60 leading-relaxed max-w-[360px]">
                {step.description}
              </p>
            </div>
          </div>
          <Metric label={step.metricLabel} value={step.metricValue} hasArrow={step.metricHasArrow} inView={inView} />
        </div>
      </div>
      {/* Card side */}
      <div className="flex-1 flex justify-center">
        <div className="bg-gradient-to-t from-[#F9F9F9] to-white rounded-[20px] p-8 md:p-10">
          <StepCard />
        </div>
      </div>
    </div>
  );
}

/* ─────────── Main Section ─────────── */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionLabel className="mb-6">Как это работает</SectionLabel>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[4.35rem] text-[#2D2D2D] tracking-[-0.05em] leading-[0.9]">
            <AnimatedText text="От идеи до первых заявок" />
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-24 md:space-y-32">
          {steps.map((step) => (
            <StepRow key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
