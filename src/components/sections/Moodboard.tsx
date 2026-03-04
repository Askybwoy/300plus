"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";

const approaches = [
  {
    number: "(01)",
    title: "Психология\nвнимания",
    description: "Используем принципы когнитивной психологии для создания интерфейсов, которые захватывают внимание и ведут к конверсии",
    expandable: true,
  },
  {
    number: "(02)",
    title: "Трендовый\nдизайн",
    description: "Следим за трендами и применяем актуальные визуальные решения: чистую типографику, грамотные акценты и продуманную анимацию.",
    expandable: true,
  },
  {
    number: "(03)",
    title: "Современные\nтехнологии",
    description: "Next.js, TypeScript, Tailwind CSS. Быстрая загрузка, SEO-оптимизация и адаптивность на всех устройствах.",
    expandable: true,
  },
];

/* Landing Page Mockup with animated gaze path */
function LandingMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative">
      {/* Main mockup card */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.07)] border border-black/6 w-full max-w-[380px] overflow-hidden">
        {/* Browser chrome */}
        <div className="px-4 py-3 border-b border-black/6 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-black/10" />
            <div className="w-2 h-2 rounded-full bg-black/10" />
            <div className="w-2 h-2 rounded-full bg-black/10" />
          </div>
          <div className="flex-1 ml-4">
            <div className="bg-black/4 rounded-md px-3 py-1.5 max-w-[296px]">
              <span className="text-[11px] text-black/35">yourproject.com</span>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="p-5 space-y-4">
          {/* Headline blocks */}
          <div className="space-y-2">
            <div className="h-3.5 bg-[#1A1A1A] rounded-sm w-[65%]" />
            <div className="h-3.5 bg-[#1A1A1A] rounded-sm w-[45%]" />
          </div>
          {/* Body text blocks */}
          <div className="space-y-1.5">
            <div className="h-2 bg-black/8 rounded-sm w-[80%]" />
            <div className="h-2 bg-black/8 rounded-sm w-[55%]" />
          </div>
          {/* Image block */}
          <motion.div
            className="h-20 rounded-xl bg-gradient-to-br from-[rgba(255,107,0,0.08)] to-[rgba(255,107,0,0.03)] flex items-center justify-center"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="opacity-25">
              <rect x="3.5" y="3.5" width="21" height="21" rx="4" stroke="#FF6B00" strokeWidth="1.75"/>
              <circle cx="10" cy="11" r="2" stroke="#FF6B00" strokeWidth="1.75"/>
              <path d="M3.5 18L9 13L14 17L19 12L24.5 18" stroke="#FF6B00" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </motion.div>
          {/* More text */}
          <div className="space-y-1.5">
            <div className="h-2 bg-black/8 rounded-sm w-[80%]" />
            <div className="h-2 bg-black/8 rounded-sm w-[55%]" />
          </div>
          {/* CTA button */}
          <div className="flex justify-center pt-2">
            <div className="h-10 w-[140px] bg-[#FF6B00] rounded-[10px]" />
          </div>
        </div>

        {/* Gaze path SVG overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 380 476">
          <motion.path
            d="M 60 100 C 120 120, 200 100, 260 140 C 300 160, 320 200, 280 260 C 240 300, 180 320, 200 380"
            fill="none"
            stroke="#FF6B00"
            strokeWidth="1.6"
            strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>

        {/* Hotspot markers */}
        {[
          { label: "1", x: "left-4", y: "top-[98px]", delay: 1 },
          { label: "2", x: "right-4", y: "top-[210px]", delay: 1.5 },
          { label: "3", x: "left-1/2 -translate-x-1/2", y: "bottom-[60px]", delay: 2 },
        ].map((spot) => (
          <motion.div
            key={spot.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: spot.delay, type: "spring", damping: 12 }}
            className={`absolute ${spot.x} ${spot.y} w-8 h-8 rounded-2xl bg-[#FF6B00] flex items-center justify-center`}
          >
            <span className="text-xs font-semibold text-white">{spot.label}</span>
            <div className="absolute -inset-1 rounded-[20px] border-2 border-[#FF6B00] opacity-30" />
          </motion.div>
        ))}
      </div>

      {/* Conversion metric overlay card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -bottom-6 -left-6 bg-white rounded-[14px] border border-black/6 p-4 w-[200px] shadow-sm"
      >
        <div className="flex gap-2 mb-2">
          {/* Bar chart */}
          <div className="flex items-end gap-1 h-10">
            {[40, 30, 22, 34].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                style={{ height: h, transformOrigin: "bottom" }}
                className={`w-3 rounded-sm ${i === 3 ? "bg-[#FF6B00]" : i === 2 ? "bg-[rgba(255,107,0,0.6)]" : "bg-[rgba(190,190,190,0.15)]"}`}
              />
            ))}
          </div>
          <div className="ml-auto text-right">
            <p className="text-[11px] text-[#5D5D5D] uppercase tracking-wider">Конверсия</p>
            <p className="text-2xl font-semibold text-[#FF6B00]">+34%</p>
            <p className="text-sm text-[#5D5D5D]">vs контроль</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#22C55E] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          <span className="text-xs text-[#22C55E]">Визуальная иерархия</span>
        </div>
      </motion.div>
    </div>
  );
}

export function Moodboard() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="approach" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionLabel className="mb-6">Наш подход</SectionLabel>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[4.35rem] text-[#2D2D2D] tracking-[-0.05em] leading-[0.9]">
            <AnimatedText text="Не просто красиво, а эффективно" />
          </h2>
        </div>

        {/* Content: Mockup + Accordion */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left: Mockup */}
          <div className="flex-1 flex justify-center">
            <LandingMockup />
          </div>

          {/* Right: Accordion */}
          <div className="flex-1">
            {approaches.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="border-t border-gradient-to-r from-[#FFE4D1] to-white py-6"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-start gap-5 cursor-pointer"
                >
                  <span className="font-[family-name:var(--font-playfair)] font-medium text-[25px] text-[#FF6B00] tracking-[-0.03em] text-center w-[45px] flex-shrink-0">
                    {item.number}
                  </span>
                  <div className="flex-1 text-left">
                    <h3 className="font-[family-name:var(--font-playfair)] font-medium text-[28px] md:text-[32px] text-[#2D2D2D] leading-[1.1] tracking-[-0.025em] whitespace-pre-line">
                      {item.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                      <line x1="13.5" y1="0" x2="13.5" y2="27" stroke="#2D2D2D" strokeWidth="2"/>
                      <line x1="0" y1="13.5" x2="27" y2="13.5" stroke="#2D2D2D" strokeWidth="2"/>
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && item.description && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-[15px] text-black/60 leading-relaxed mt-4 ml-[65px] max-w-[360px]">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
