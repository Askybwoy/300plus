"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";
import { Modal } from "../ui/Modal";
import Image from "next/image";

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 flex items-end justify-center max-w-[1440px] mx-auto">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-bottom"
          poster="/images/hero-bg.png"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="flex-1 px-4 sm:px-6 py-12 relative z-10 pt-[140px] sm:pt-[180px] md:pt-[210px]">
        <div className="max-w-[610px] mx-auto text-center px-2 sm:px-0">
          {/* Small logo icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="w-12 h-12 rounded-full border border-white/30 p-1 flex items-center justify-center">
              <Image
                src="/icons/hero-icon.svg"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
          </motion.div>

          <h1 className="font-headline text-[clamp(2rem,8vw,4.35rem)] text-white tracking-[-0.05em] leading-[0.9] mb-6 text-center">
            <AnimatedText text="Ваш спринт-отдел" />
            <br />
            <AnimatedText text="в любой кризис" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-[610px] mx-auto leading-relaxed px-2 sm:px-0"
          >
            Проверим вашу идею за&nbsp;14&nbsp;дней. Создание бренда, лендинга
            и&nbsp;запуск рекламы без&nbsp;найма и&nbsp;лишних согласований
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10"
          >
            <motion.button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-4 bg-[#FF6B00] text-white font-cta px-8 py-4 rounded-full cursor-pointer uppercase text-sm tracking-wide hover:bg-[#E65C00] transition-all duration-200"
              whileTap={{ scale: 0.98 }}
            >
              <span>Обсудить проект</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <path d="M4 10L10 4M10 4H4M10 4V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Обсудить проект"
        subtitle="Расскажите о вашей идее, и мы свяжемся с вами"
        source="discuss_hero"
      />
    </section>
  );
}
