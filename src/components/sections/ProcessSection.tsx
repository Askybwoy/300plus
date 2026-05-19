"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";

/* ─────────── (01) Designer Card ─────────── */
function DesignerCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full min-w-0 max-w-[400px] h-full"
    >
      <div className="bg-white rounded-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.07)] border border-black/6 overflow-hidden h-full flex flex-col">
        {/* Header with badge */}
        <div className="px-5 py-4 border-b border-black/6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1A1A1A]">Senior Designer</p>
              <p className="text-xs text-black/40">Art Director</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, type: "spring", damping: 12 }}
            className="bg-[#1A1A1A] rounded-full px-3 py-1.5"
          >
            <span className="text-xs font-medium text-white">10+ лет</span>
          </motion.div>
        </div>

        {/* Design tools visualization */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center justify-center gap-4 mb-5">
            {[
              { icon: "pen", delay: 0.3 },
              { icon: "layout", delay: 0.4 },
              { icon: "palette", delay: 0.5 },
              { icon: "monitor", delay: 0.6 },
            ].map((tool, i) => (
              <motion.div
                key={tool.icon}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: tool.delay, duration: 0.4 }}
                className="w-12 h-12 rounded-xl bg-black/4 flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {tool.icon === "pen" && (
                    <>
                      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                      <path d="M2 2l7.586 7.586"/>
                      <circle cx="11" cy="11" r="2"/>
                    </>
                  )}
                  {tool.icon === "layout" && (
                    <>
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                      <line x1="3" x2="21" y1="9" y2="9"/>
                      <line x1="9" x2="9" y1="21" y2="9"/>
                    </>
                  )}
                  {tool.icon === "palette" && (
                    <>
                      <circle cx="13.5" cy="6.5" r=".5"/>
                      <circle cx="17.5" cy="10.5" r=".5"/>
                      <circle cx="8.5" cy="7.5" r=".5"/>
                      <circle cx="6.5" cy="12.5" r=".5"/>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.01 17.461 2 12 2z"/>
                    </>
                  )}
                  {tool.icon === "monitor" && (
                    <>
                      <rect width="20" height="14" x="2" y="3" rx="2" ry="2"/>
                      <line x1="8" x2="16" y1="21" y2="21"/>
                      <line x1="12" x2="12" y1="17" y2="21"/>
                    </>
                  )}
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Experience timeline */}
          <div className="space-y-3">
            {[
              { year: "2014", text: "Начало карьеры в дизайне", active: false },
              { year: "2018", text: "Art Director в агентстве", active: false },
              { year: "2024", text: "300.plus — собственная студия", active: true },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <span className={`text-xs font-medium w-10 ${item.active ? "text-[#FF6B00]" : "text-black/30"}`}>
                  {item.year}
                </span>
                <div className={`flex-1 h-px ${item.active ? "bg-[#FF6B00]" : "bg-black/10"}`} />
                <span className={`text-xs ${item.active ? "text-[#1A1A1A] font-medium" : "text-black/40"}`}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-6 pt-5 border-t border-black/6"
          >
            <p className="text-sm text-black/60 italic leading-relaxed">
              "Дизайн — это не картинка, а решение задачи бизнеса"
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────── (02) AI Card ─────────── */
function AICard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full min-w-0 max-w-[400px] h-full"
    >
      <div className="bg-[#1A1A1A] rounded-[20px] shadow-[0_24px_48px_rgba(0,0,0,0.15)] overflow-hidden h-full flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
                <path d="M8.5 8.5v.01"/>
                <path d="M16 15.5v.01"/>
                <path d="M12 12v.01"/>
                <path d="M11 17v.01"/>
                <path d="M7 14v.01"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Автоматизация</p>
              <p className="text-xs text-white/40">ИИ-инструменты</p>
            </div>
          </div>
        </div>

        {/* Automation tasks */}
        <div className="p-5 space-y-2 flex-1">
          {[
            { text: "Анализ конкурентов", time: "2 мин", delay: 0.3 },
            { text: "Генерация копирайтинга", time: "5 мин", delay: 0.4 },
            { text: "Варианты визуалов", time: "10 мин", delay: 0.5 },
            { text: "Анализ трендов", time: "15 мин", delay: 0.6 },
          ].map((task, i) => (
            <motion.div
              key={task.text}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: task.delay, duration: 0.4 }}
              className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: task.delay + 0.1, type: "spring", damping: 12 }}
                  className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </motion.div>
                <span className="text-sm text-white/80">{task.text}</span>
              </div>
              <span className="text-xs text-white/40">{task.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────── (03) Speed Card ─────────── */
function SpeedCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full min-w-0 max-w-[400px] h-full"
    >
      <div className="bg-white rounded-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.07)] border border-black/6 overflow-hidden h-full flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-black/6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-[#1A1A1A]">Скорость запуска</p>
              <p className="text-xs text-black/40">14 дней vs 60</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.5, type: "spring", damping: 12 }}
            className="bg-[#FF6B00] rounded-full px-3 py-1.5"
          >
            <span className="text-xs font-medium text-white">14 дней</span>
          </motion.div>
        </div>

        {/* Speed comparison */}
        <div className="p-5 flex-1">
          {/* Traditional agency */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mb-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-black/50">Традиционное агентство</span>
              <span className="text-sm text-black/30">60 дней</span>
            </div>
            <div className="h-3 bg-black/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="h-full bg-black/10 rounded-full"
              />
            </div>
          </motion.div>

          {/* 300.plus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mb-5"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#1A1A1A]">300.plus</span>
              <span className="text-sm font-bold text-[#FF6B00]">14 дней</span>
            </div>
            <div className="h-3 bg-black/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "16%" } : {}}
                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                className="h-full bg-[#FF6B00] rounded-full"
              />
            </div>
          </motion.div>

          {/* Rocket launch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="relative bg-gradient-to-b from-[#F9F9F9] to-white rounded-2xl p-6 flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Rocket */}
              <svg width="48" height="64" viewBox="0 0 48 64" fill="none">
                <path d="M24 0C24 0 8 16 8 36C8 48 14 56 24 64C34 56 40 48 40 36C40 16 24 0 24 0Z" fill="#1A1A1A"/>
                <circle cx="24" cy="28" r="8" fill="#FF6B00"/>
                <path d="M8 36C4 40 0 48 0 52C0 56 4 56 8 52V36Z" fill="#1A1A1A"/>
                <path d="M40 36C44 40 48 48 48 52C48 56 44 56 40 52V36Z" fill="#1A1A1A"/>
              </svg>
              {/* Flame */}
              <motion.div
                animate={{ 
                  scaleY: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              >
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                  <path d="M10 24C15 18 18 12 10 0C2 12 5 18 10 24Z" fill="#FF6B00"/>
                </svg>
              </motion.div>
            </motion.div>
            <p className="text-xs text-black/40 mt-3 text-center">Запуск через 14 дней</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────── Step Data ─────────── */
const steps = [
  {
    title: "Дизайнер с\n10-летним опытом",
    description: "Каждый проект ведётся senior-дизайнером. Никаких джунов — только проверенные решения",
    card: DesignerCard,
  },
  {
    title: "ИИ ускоряет\nрутину",
    description: "Генерация идей, вариантов копирайтинга, анализ конкурентов — всё в часах, не днях",
    card: AICard,
  },
  {
    title: "14 дней\nвместо 2 месяцев",
    description: "Автоматизация + опыт = скорость без потери качества. Тестируйте идеи, пока конкуренты согласовывают бриф",
    card: SpeedCard,
  },
];

/* ─────────── Single Step Card ─────────── */
function StepCard({ step, index }: { step: typeof steps[number]; index: number }) {
  const StepCardComponent = step.card;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="flex flex-col items-start text-left h-full"
    >
      {/* Card */}
      <div className="mb-6 w-full flex-1 flex items-stretch justify-center">
        <StepCardComponent />
      </div>

      {/* Text */}
      <h3 className="font-headline font-medium text-[22px] md:text-[26px] text-[#2D2D2D] leading-[1.15] tracking-[-0.02em] whitespace-pre-line mb-3">
        {step.title}
      </h3>
      <p className="text-[15px] text-black/60 leading-[1.6] max-w-[400px]">
        {step.description}
      </p>
    </motion.div>
  );
}

/* ─────────── Main Section ─────────── */
export function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <SectionLabel className="mb-6">Как проходит процесс</SectionLabel>
          <h2 className="font-headline text-3xl md:text-[4rem] text-[#2D2D2D] tracking-[-0.05em] leading-[0.95] mb-4">
            <AnimatedText text="Качество студии, но быстрее" />
          </h2>
          <p className="text-lg md:text-xl text-black/50 max-w-[500px] mx-auto">
            За счёт автоматизации и ИИ
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
