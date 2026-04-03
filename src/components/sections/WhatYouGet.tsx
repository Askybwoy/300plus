"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";
import { Modal } from "../ui/Modal";
import Image from "next/image";

const serviceCards = [
  {
    title: "Фирменный стиль",
    description: "Логотип, цвета, шрифты и\nвизуальная система",
    icon: "/icons/service-branding-icon.svg",
    variant: "white" as const,
  },
  {
    title: "Лендинг",
    description: "Конверсионная посадочная\nстраница",
    icon: "/icons/service-landing-icon.svg",
    variant: "white" as const,
  },
  {
    title: "Тестирование гипотез",
    description: "Проверка идеи на реальной аудитории",
    icon: "/icons/service-testing-icon.svg",
    variant: "white-wide" as const,
  },
  {
    title: "Поддержка",
    description: "Консультации и доработки после запуска",
    icon: "/icons/service-support-icon.svg",
    variant: "dark-wide" as const,
  },
];

const statCards = [
  { value: "10", label: "дней от идеи\nдо первых заявок" },
  { value: "40%", label: "выше конверсия\nс таргетированной рекламой" },
];

export function WhatYouGet() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Dark header area */}
      <section id="what-you-get" className="bg-[#0A0A0A] py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-6"
          >
            <span className="bg-gradient-to-b from-[#434343] to-[#000000] text-white text-sm font-medium px-4 py-2 rounded-full">
              Что вы получаете
            </span>
          </motion.div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[4.35rem] text-white tracking-[-0.05em] leading-[0.9] mb-6">
            <AnimatedText text="Всё для быстрого старта" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-white/70 max-w-[610px] mx-auto leading-relaxed"
          >
            Комплексное решение для запуска бизнеса: от фирменного стиля до первых заявок с рекламы
          </motion.p>
        </div>
      </section>

      {/* Pricing & Benefits Grid */}
      <section className="bg-[#0A0A0A] pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {/* Left: Price Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#1A1A1A] rounded-[20px] overflow-hidden p-8 flex flex-col justify-between min-h-[480px]"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 -z-0 overflow-hidden">
                <Image
                  src="/images/price-gradient-bg.png"
                  alt=""
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="relative z-10">
                <p className="text-[13px] text-white font-medium tracking-[0.07em] uppercase mb-6">
                  Стоимость пакета
                </p>
              </div>
              <div className="relative z-10 space-y-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-playfair)] text-[64px] md:text-[80px] text-white leading-none tracking-[-0.03em]">
                    300 000
                  </span>
                  <span className="font-[family-name:var(--font-playfair)] text-[32px] md:text-[40px] text-white leading-none tracking-[-0.03em]">
                    руб.
                  </span>
                </div>
                <p className="text-[13px] text-white/55">
                  Фиксированная цена. Без скрытых доплат.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <motion.button
                    onClick={() => setModalOpen(true)}
                    className="bg-[#FF6B00] text-white font-cta px-8 py-4 rounded-full flex-1 text-center cursor-pointer uppercase text-sm tracking-wide hover:bg-[#E65C00] transition-all duration-200"
                    whileTap={{ scale: 0.98 }}
                  >
                    Обсудить проект
                  </motion.button>
                  <motion.button
                    onClick={() => document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" })}
                    className="bg-transparent text-white font-cta px-8 py-4 rounded-full border border-white/30 flex-1 text-center cursor-pointer uppercase text-sm tracking-wide hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                    whileTap={{ scale: 0.98 }}
                  >
                    Бесплатный аудит
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right: Top 2x2 Grid - matches left card height */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[480px]">
              {/* White card 1 - Branding */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 md:p-7 flex flex-col justify-between"
              >
                <Image src={serviceCards[0].icon} alt="" width={28} height={28} className="w-7 h-7 mb-4" />
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-base mb-1">{serviceCards[0].title}</h4>
                  <p className="text-[13px] text-black/45 leading-snug whitespace-pre-line">{serviceCards[0].description}</p>
                </div>
              </motion.div>

              {/* Orange stat card 1 - 10 days */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-[#FF6B00] rounded-2xl p-6 md:p-7 flex flex-col items-center justify-center text-center"
              >
                <span className="font-[family-name:var(--font-playfair)] font-medium text-[56px] text-white leading-none">{statCards[0].value}</span>
                <p className="text-sm text-white/85 mt-2 whitespace-pre-line">{statCards[0].label}</p>
              </motion.div>

              {/* Orange stat card 2 - 40% */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-[#FF6B00] rounded-2xl p-6 md:p-7 flex flex-col items-center justify-center text-center"
              >
                <span className="font-[family-name:var(--font-playfair)] font-medium text-[56px] text-white leading-none">{statCards[1].value}</span>
                <p className="text-sm text-white/85 mt-2 whitespace-pre-line">{statCards[1].label}</p>
              </motion.div>

              {/* White card 2 - Landing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 md:p-7 flex flex-col justify-between"
              >
                <Image src={serviceCards[1].icon} alt="" width={28} height={28} className="w-7 h-7 mb-4" />
                <div>
                  <h4 className="font-semibold text-[#1A1A1A] text-base mb-1">{serviceCards[1].title}</h4>
                  <p className="text-[13px] text-black/45 leading-snug whitespace-pre-line">{serviceCards[1].description}</p>
                </div>
              </motion.div>
            </div>

            {/* Bottom row: 2 wide cards - spans full width */}
            <div className="grid grid-cols-2 gap-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white rounded-[20px] p-6 md:p-7"
              >
                <Image src={serviceCards[2].icon} alt="" width={28} height={28} className="w-7 h-7 mb-5" />
                <h4 className="font-semibold text-[#1A1A1A] text-base mb-1">{serviceCards[2].title}</h4>
                <p className="text-[13px] text-black/45 leading-snug">{serviceCards[2].description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-[#1A1A1A] rounded-[20px] p-6 md:p-7"
              >
                <Image src={serviceCards[3].icon} alt="" width={28} height={28} className="w-7 h-7 mb-5 brightness-0 invert" />
                <h4 className="font-semibold text-white text-base mb-1">{serviceCards[3].title}</h4>
                <p className="text-[13px] text-white/40 leading-snug">{serviceCards[3].description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Обсудить проект"
        subtitle="Расскажите о вашей идее, и мы свяжемся с вами"
      />
    </>
  );
}
