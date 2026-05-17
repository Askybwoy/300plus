"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";

const approaches = [
  {
    number: "(01)",
    title: "Психология\nвнимания",
    description: "Используем принципы когнитивной психологии для создания интерфейсов, которые захватывают внимание и ведут к конверсии",
  },
  {
    number: "(02)",
    title: "Трендовый\nдизайн",
    description: "Следим за трендами и применяем актуальные визуальные решения: чистую типографику, грамотные акценты и продуманную анимацию.",
  },
  {
    number: "(03)",
    title: "Современные\nтехнологии",
    description: "Next.js, TypeScript, Tailwind CSS. Быстрая загрузка, SEO-оптимизация и адаптивность на всех устройствах.",
  },
];

/* Landing Page Mockup with animated gaze path - shown for first accordion item */
function LandingMockup({ animateKey }: { animateKey: number }) {
  return (
    <div key={animateKey} className="w-full min-w-[280px] max-w-[340px] sm:max-w-[400px]">
      {/* Main mockup card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white rounded-[20px] shadow-[0_2px_24px_rgba(0,0,0,0.07)] border border-black/6 w-full overflow-hidden"
      >
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
            strokeDasharray="6.67 4.45"
            strokeLinecap="round"
            opacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
        </svg>

        {/* Hotspot markers */}
        {[
          { label: "1", x: "left-4", y: "top-[98px]", delay: 0.5 },
          { label: "2", x: "right-4", y: "top-[210px]", delay: 0.8 },
          { label: "3", x: "left-1/2 -translate-x-1/2", y: "bottom-[60px]", delay: 1.1 },
        ].map((spot) => (
          <motion.div
            key={spot.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: spot.delay, type: "spring", damping: 12 }}
            className={`absolute ${spot.x} ${spot.y} w-8 h-8 rounded-2xl bg-[#FF6B00] flex items-center justify-center`}
          >
            <span className="text-xs font-semibold text-white">{spot.label}</span>
            <div className="absolute -inset-1 rounded-[20px] border-2 border-[#FF6B00] opacity-30" />
          </motion.div>
        ))}
      </motion.div>

      {/* Conversion metric card - positioned below the main mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-4 bg-white rounded-[14px] border border-black/6 p-4 sm:p-5 w-full"
      >
        <div className="flex items-center gap-4">
          {/* Bar chart */}
          <div className="flex items-end gap-[3px] h-12">
            {[40, 30, 22, 34].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.3 }}
                style={{ height: h, transformOrigin: "bottom" }}
                className={`w-4 rounded-sm ${i === 3 ? "bg-[#FF6B00]" : i === 2 ? "bg-[rgba(255,107,0,0.6)]" : "bg-[rgba(190,190,190,0.15)]"}`}
              />
            ))}
          </div>
          <div className="flex-1">
            <p className="text-[11px] text-[#5D5D5D] uppercase tracking-wider mb-1">Конверсия</p>
            <div className="flex items-baseline gap-2">
              <p className="text-[24px] sm:text-[32px] font-semibold text-[#FF6B00] leading-none">+34%</p>
              <p className="text-sm text-[#5D5D5D]">vs контроль</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2L6 10M6 2L2 6M6 2L10 6" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm text-[#22C55E]">Визуальная иерархия</span>
        </div>
      </motion.div>
    </div>
  );
}

/* Design Illustration - shown for second accordion item */
function DesignIllustration({ animateKey }: { animateKey: number }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const colorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div 
      key={animateKey}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-w-[280px] max-w-[400px]"
    >
      <div className="space-y-3">
        {/* Dark design showcase card */}
        <motion.div 
          variants={cardVariants}
          className="bg-[#1A1A1A] rounded-[20px] p-5 shadow-[0_24px_48px_rgba(0,0,0,0.12)] relative overflow-hidden"
        >
          {/* Typography showcase */}
          <motion.div variants={itemVariants} className="relative mb-4">
            <div className="font-headline text-[40px] font-medium text-white leading-none tracking-[-1px]">
              Aa<span className="text-[#FF6B00]">.</span>
            </div>
            <div className="text-[11px] text-white/35 mt-1.5 tracking-[2px] uppercase">Чистая типографика</div>
          </motion.div>

          {/* Font specimens */}
          <motion.div variants={itemVariants} className="flex items-baseline gap-3 py-2.5 border-t border-white/[0.06]">
            <span className="text-[10px] text-white/25 uppercase tracking-[1px] w-14 flex-shrink-0">Serif</span>
            <span className="font-headline text-lg font-medium text-white">Playfair Display</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-baseline gap-3 py-2.5 border-t border-white/[0.06]">
            <span className="text-[10px] text-white/25 uppercase tracking-[1px] w-14 flex-shrink-0">Sans</span>
            <span className="font-sans text-sm text-white/60">Inter — body & UI</span>
          </motion.div>

          {/* Color palette */}
          <motion.div variants={itemVariants} className="pt-3 border-t border-white/[0.06] mt-0.5">
            <div className="text-[10px] text-white/25 uppercase tracking-[1px] mb-2">Палитра</div>
            <div className="flex gap-2">
              <motion.div variants={colorVariants} className="flex-1 h-7 rounded-lg bg-[#1A1A1A] border border-white/10" />
              <motion.div variants={colorVariants} className="flex-1 h-7 rounded-lg bg-[#F5F5F5]" />
              <motion.div variants={colorVariants} className="flex-1 h-7 rounded-lg bg-[#FF6B00] relative">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", damping: 12 }}
                  className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#22C55E] rounded-full border-2 border-[#1A1A1A]" 
                />
              </motion.div>
              <motion.div variants={colorVariants} className="flex-1 h-7 rounded-lg bg-white" />
            </div>
          </motion.div>
        </motion.div>

        {/* Component preview card */}
        <motion.div 
          variants={cardVariants}
          className="bg-white rounded-[20px] p-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-black/[0.06]"
        >
          <div className="flex gap-3 mb-3">
            {/* Left: 2x2 grid */}
            <div className="flex-1 grid grid-cols-2 gap-2">
              <motion.div 
                variants={colorVariants}
                className="aspect-square bg-[#FFF4ED] rounded-lg border border-dashed border-[#FF6B00]/30 relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FF6B00] rounded-sm opacity-60" />
              </motion.div>
              <motion.div variants={colorVariants} className="aspect-square bg-[#F5F5F5] rounded-lg" />
              <motion.div variants={colorVariants} className="aspect-square bg-[#F5F5F5] rounded-lg" />
              <motion.div 
                variants={colorVariants}
                className="aspect-square bg-[#FFF4ED] rounded-lg border border-dashed border-[#FF6B00]/30 relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#FF6B00] rounded-sm opacity-60" />
              </motion.div>
            </div>
            {/* Right: card preview */}
            <motion.div variants={itemVariants} className="flex-[1.2] flex flex-col gap-2">
              <div className="bg-[#F5F5F5] rounded-lg p-2.5 flex flex-col gap-1.5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="h-1.5 bg-[#1A1A1A] rounded" 
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.55, duration: 0.3 }}
                  className="h-1 bg-black/10 rounded" 
                />
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  className="h-1 bg-black/10 rounded" 
                />
              </div>
              <motion.div 
                variants={colorVariants}
                className="bg-[#F5F5F5] rounded-lg p-2 flex items-center justify-center flex-1"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="#FF6B00" strokeWidth="1.5" fill="none"/>
                  <circle cx="8.5" cy="8.5" r="2" stroke="#FF6B00" strokeWidth="1.5" fill="none"/>
                  <path d="M3 15L8 10L13 15L21 7" stroke="#FF6B00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>
          <motion.span variants={itemVariants} className="block text-center text-[13px] text-black/50">Акценты</motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* Tech Illustration - shown for third accordion item */
function TechIllustration({ animateKey }: { animateKey: number }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const metricVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  const codeLines = [
    { num: "1", content: <><span className="text-[#C678DD]">import</span> <span className="text-white/60">{'{ '}</span><span className="text-[#61AFEF]">Metadata</span><span className="text-white/60">{' }'}</span> <span className="text-[#C678DD]">from</span> <span className="text-[#98C379]">&apos;next&apos;</span></> },
    { num: "2", content: null },
    { num: "3", content: <><span className="text-[#C678DD]">export const</span> <span className="text-[#D19A66]">metadata</span><span className="text-white/60">:</span> <span className="text-[#61AFEF]">Metadata</span> <span className="text-white/60">= {'{'}</span></> },
    { num: "4", content: <><span className="text-white/60">{'  '}</span><span className="text-[#D19A66]">title</span><span className="text-white/60">:</span> <span className="text-[#98C379]">&apos;Your Brand&apos;</span><span className="text-white/60">,</span></> },
    { num: "5", content: <><span className="text-white/60">{'}'}</span></> },
    { num: "6", content: null },
    { num: "7", content: <><span className="text-[#C678DD]">export default</span> <span className="text-[#C678DD]">function</span> <span className="text-[#61AFEF]">Page</span><span className="text-white/60">() {'{'}</span></> },
    { num: "8", content: <><span className="text-white/60">{'  '}</span><span className="text-[#C678DD]">return</span> <span className="text-[#E06C75]">&lt;Hero /&gt;</span><span className="inline-block w-0.5 h-3.5 bg-[#FF6B00] ml-0.5 align-middle animate-pulse" /></> },
    { num: "9", content: <><span className="text-white/60">{'}'}</span></> },
  ];

  return (
    <motion.div 
      key={animateKey}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full min-w-[280px] max-w-[400px]"
    >
      <div className="space-y-3">
        {/* Code editor card */}
        <motion.div 
          variants={cardVariants}
          className="bg-[#1A1A1A] rounded-[20px] overflow-hidden shadow-[0_24px_48px_rgba(0,0,0,0.12)]"
        >
          {/* Window chrome */}
          <motion.div 
            variants={lineVariants}
            className="flex items-center px-4 py-3.5 gap-2 border-b border-white/[0.06]"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", damping: 12 }}
              className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" 
            />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", damping: 12 }}
              className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" 
            />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 12 }}
              className="w-2.5 h-2.5 rounded-full bg-[#28C840]" 
            />
            <motion.span 
              variants={lineVariants}
              className="ml-4 font-mono text-[11px] text-white/40 bg-white/[0.06] px-3 py-1 rounded-md"
            >
              page.tsx
            </motion.span>
          </motion.div>

          {/* Code area */}
          <div className="px-5 py-4 font-mono text-xs leading-7">
            {codeLines.map((line, i) => (
              <motion.div 
                key={line.num}
                variants={lineVariants}
                className="flex"
              >
                <span className="w-7 text-right pr-3 text-white/15 select-none">{line.num}</span>
                <span>{line.content}</span>
              </motion.div>
            ))}
          </div>

          {/* Tech badges */}
          <div className="flex gap-2 px-5 pb-4 flex-wrap">
            {[
              { color: "bg-white", bg: "bg-white/[0.08]", text: "text-white", label: "Next.js" },
              { color: "bg-[#3178C6]", bg: "bg-[#3178C6]/15", text: "text-[#61AFEF]", label: "TypeScript" },
              { color: "bg-[#38BDF8]", bg: "bg-[#38BDF8]/12", text: "text-[#38BDF8]", label: "Tailwind CSS" },
            ].map((badge, i) => (
              <motion.div 
                key={badge.label}
                variants={badgeVariants}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${badge.bg} ${badge.text} text-[11px] font-medium`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${badge.color}`} />
                {badge.label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics row */}
        <div className="flex gap-2.5">
          {/* Speed */}
          <motion.div 
            variants={metricVariants}
            className="flex-1 bg-white rounded-[14px] p-3 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-black/[0.06] flex flex-col items-center gap-2"
          >
            <svg width="52" height="30" viewBox="0 0 52 30" fill="none">
              <path d="M 6 28 A 20 20 0 0 1 46 28" stroke="rgba(0,0,0,0.06)" strokeWidth="3" strokeLinecap="round"/>
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                d="M 6 28 A 20 20 0 0 1 46 28" 
                stroke="#22C55E" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeDasharray="63" 
                strokeDashoffset="3"
              />
              <line x1="26" y1="28" x2="26" y2="12" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" transform="rotate(70 26 28)"/>
              <circle cx="26" cy="28" r="3" fill="#1A1A1A"/>
            </svg>
            <span className="text-[11px] text-black/40 text-center leading-tight">Загрузка<br/>&lt; 1 сек</span>
          </motion.div>

          {/* SEO */}
          <motion.div 
            variants={metricVariants}
            className="flex-1 bg-white rounded-[14px] p-3 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-black/[0.06] flex flex-col items-center gap-2"
          >
            <div className="relative w-11 h-11">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 44 44">
                <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="3"/>
                <motion.circle 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                  cx="22" cy="22" r="18" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeDasharray="113" strokeDashoffset="5"
                />
              </svg>
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", damping: 12 }}
                className="absolute inset-0 flex items-center justify-center text-[13px] font-semibold text-[#22C55E]"
              >
                96
              </motion.span>
            </div>
            <span className="text-[11px] text-black/40 text-center leading-tight">SEO<br/>оценка</span>
          </motion.div>

          {/* Responsiveness */}
          <motion.div 
            variants={metricVariants}
            className="flex-1 bg-white rounded-[14px] p-3 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-black/[0.06] flex flex-col items-center gap-2"
          >
            <div className="flex items-end gap-1 h-9">
              {[6, 7, 9].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  style={{ 
                    height: `${h * 4}px`, 
                    transformOrigin: "bottom",
                    width: i === 0 ? "10px" : i === 1 ? "14px" : "20px"
                  }}
                  className="bg-[#FF6B00] rounded-sm"
                />
              ))}
            </div>
            <span className="text-[11px] text-black/40 text-center leading-tight">Любые<br/>экраны</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}



/* ─────────── Plus / Minus Toggle Icon ─────────── */
function ToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative flex-shrink-0 w-6 h-6 flex items-center justify-center mt-2">
      <span className="absolute h-[1.5px] w-5 bg-[#FF6B00] rounded-full" />
      <motion.span
        animate={{ scaleX: isOpen ? 0 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute h-[1.5px] w-5 bg-[#FF6B00] rounded-full origin-center"
        style={{ rotate: "90deg" }}
      />
    </span>
  );
}

/* ─────────── Accordion Item (desktop) ─────────── */
function AccordionItem({
  approach,
  isOpen,
  onClick,
}: {
  approach: typeof approaches[number];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#FF6B00]/35">
      <button
        onClick={onClick}
        className="w-full flex items-start gap-5 py-7 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-headline italic text-[22px] text-[#FF6B00] tracking-[-0.02em] pt-2 flex-shrink-0">
          {approach.number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-headline font-medium text-[28px] md:text-[34px] text-[#2D2D2D] leading-[1.1] tracking-[-0.02em] whitespace-pre-line">
            {approach.title}
          </h3>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-[15px] text-black/60 leading-[1.6] mt-4 max-w-[440px]">
                  {approach.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <ToggleIcon isOpen={isOpen} />
      </button>
    </div>
  );
}

/* ─────────── Mobile Slider with swipe ─────────── */
function MobileSlider({ illustrations }: { illustrations: React.ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Pointer-drag swipe (works for mouse on desktop preview)
  const dragState = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slideWidth = track.clientWidth;
      if (slideWidth === 0) return;
      const idx = Math.round(track.scrollLeft / slideWidth);
      setActiveSlide(idx);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(approaches.length - 1, i));
    track.scrollTo({ left: target * track.clientWidth, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return; // let native scroll handle touch
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      active: true,
      startX: e.clientX,
      startScroll: track.scrollLeft,
      moved: false,
    };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = e.clientX - dragState.current.startX;
    if (Math.abs(dx) > 4) dragState.current.moved = true;
    track.scrollLeft = dragState.current.startScroll - dx;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragState.current.active) return;
    const track = trackRef.current;
    if (!track) return;
    dragState.current.active = false;
    try { track.releasePointerCapture(e.pointerId); } catch {}
    if (dragState.current.moved) {
      const idx = Math.round(track.scrollLeft / track.clientWidth);
      goTo(idx);
    }
  };

  const isFirst = activeSlide === 0;
  const isLast = activeSlide === approaches.length - 1;

  return (
    <div className="lg:hidden">
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex overflow-x-auto snap-x snap-mandatory -mx-4 sm:-mx-6 px-4 sm:px-6 pb-2 gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none"
        style={{ scrollSnapType: "x mandatory", touchAction: "pan-x" }}
      >
        {approaches.map((approach, i) => (
          <div
            key={approach.number}
            className="snap-center flex-shrink-0 w-full"
          >
            <div className="bg-gradient-to-t from-[#F9F9F9] to-white rounded-[20px] p-5 sm:p-8 flex flex-col items-center">
              <div className="w-full flex justify-center pointer-events-none">{illustrations[i]}</div>
              <div className="mt-6 w-full px-2">
                <span className="font-headline italic text-[20px] text-[#FF6B00] tracking-[-0.02em]">
                  {approach.number}
                </span>
                <h3 className="font-headline font-medium text-[26px] text-[#2D2D2D] leading-[1.15] tracking-[-0.02em] mt-2 whitespace-pre-line">
                  {approach.title}
                </h3>
                <p className="text-[15px] text-black/60 leading-[1.6] mt-3">
                  {approach.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls: arrows + dot indicators */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={() => goTo(activeSlide - 1)}
          disabled={isFirst}
          aria-label="Предыдущий слайд"
          className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/5 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke={isFirst ? "#9CA3AF" : "#FF6B00"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {approaches.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Перейти к слайду ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: activeSlide === i ? 24 : 8,
                backgroundColor: activeSlide === i ? "#FF6B00" : "rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeSlide + 1)}
          disabled={isLast}
          aria-label="Следующий слайд"
          className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/5 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke={isLast ? "#9CA3AF" : "#FF6B00"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export function Moodboard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const illustrationsForActive = [
    <LandingMockup key={`landing-${activeIndex}`} animateKey={activeIndex} />,
    <DesignIllustration key={`design-${activeIndex}`} animateKey={activeIndex} />,
    <TechIllustration key={`tech-${activeIndex}`} animateKey={activeIndex} />,
  ];

  // Stable instances per slide for the mobile track (don't remount on activeIndex change)
  const mobileIllustrations = [
    <LandingMockup key="m-landing" animateKey={0} />,
    <DesignIllustration key="m-design" animateKey={0} />,
    <TechIllustration key="m-tech" animateKey={0} />,
  ];

  return (
    <section id="approach" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <SectionLabel className="mb-6">Наш подход</SectionLabel>
          <h2 className="font-headline text-3xl md:text-[4.35rem] text-[#2D2D2D] tracking-[-0.05em] leading-[0.9]">
            <AnimatedText text="Не просто красиво, а эффективно" />
          </h2>
        </div>

        {/* Desktop: synced visual + accordion */}
        <div className="hidden lg:grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-10 xl:gap-16 items-center min-h-[640px]">
          {/* Visual side */}
          <div className="flex justify-center w-full">
            <div className="bg-gradient-to-t from-[#F9F9F9] to-white rounded-[20px] p-8 md:p-10 w-full max-w-[460px] min-h-[560px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full flex justify-center"
                >
                  {illustrationsForActive[activeIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Accordion side */}
          <div className="min-h-[540px]">
            {approaches.map((approach, i) => (
              <AccordionItem
                key={approach.number}
                approach={approach}
                isOpen={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Mobile: swipe slider */}
        <MobileSlider illustrations={mobileIllustrations} />
      </div>
    </section>
  );
}
