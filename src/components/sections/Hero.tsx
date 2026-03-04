"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";
import { Modal } from "../ui/Modal";
import Image from "next/image";

const navLinks = [
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Что вы получаете", href: "#what-you-get" },
  { label: "Наш подход", href: "#approach" },
  { label: "Аудит сайта", href: "#audit", badge: "Бесплатно" },
  { label: "FAQ", href: "#faq" },
];

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const auditSection = document.querySelector('#audit');
      if (auditSection) {
        const rect = auditSection.getBoundingClientRect();
        setIsInverted(rect.top <= 80 && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
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
      {/* Navigation */}
      <nav className={`w-full py-6 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${isInverted ? 'bg-white/80' : 'bg-black/80'}`}>
        <div className="max-w-[1572px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/icons/logo-header.svg"
              alt="300.plus"
              width={140}
              height={44}
              className={`h-8 md:h-11 w-auto transition-all duration-300 ${isInverted ? 'invert' : ''}`}
            />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isInverted ? 'text-black' : 'text-white'}`}>
                  {link.label}
                </span>
                {link.badge && (
                  <span className="bg-[#FF6B00] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <span className={`font-cta hidden md:block transition-colors duration-300 ${isInverted ? 'text-black' : 'text-white'}`}>
              Обсудить<br />проект
            </span>
            <div className={`w-[60px] h-[60px] rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 ${isInverted ? 'border-black' : 'border-white'}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke={isInverted ? 'black' : 'white'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </nav>

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
