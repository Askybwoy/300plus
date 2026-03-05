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
          className="w-full object-cover object-bottom"
          poster="/images/hero-bg.png"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="flex-1 px-6 py-12 relative z-10 pt-[210px]">
        <div className="max-w-[610px] mx-auto text-center">
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

          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.5rem,5vw,4.35rem)] text-white tracking-[-0.05em] leading-[0.9] mb-6 text-center">
            <AnimatedText text="Ваш спринт-отдел" />
            <br />
            <AnimatedText text="в любой кризис" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-white/70 max-w-[610px] mx-auto leading-relaxed"
          >
            Проверим вашу идею за&nbsp;10&nbsp;дней. Создание бренда, лендинга
            и&nbsp;запуск рекламы без&nbsp;найма и&nbsp;лишних согласований
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator - Right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-[30px]"
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className={`rounded-full ${i === 0 ? "w-2 h-2" : "w-1.5 h-1.5"} bg-white`}
          />
        ))}
      </motion.div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Обсудить проект"
        subtitle="Расскажите о вашей идее, и мы свяжемся с вами"
      />
    </section>
  );
}
