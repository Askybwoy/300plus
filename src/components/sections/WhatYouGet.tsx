"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";
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
  return (
    <>
      {/* Dark header area */}
      <section id="what-you-get" className="bg-[#0A0A0A] py-16 sm:py-24 md:py-32 px-4 sm:px-6">
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
          <h2 className="font-headline text-3xl md:text-[4.35rem] text-white tracking-[-0.05em] leading-[0.9] mb-6">
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

      {/* Benefits Grid - No price card */}
      <section className="bg-[#0A0A0A] pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 gap-2">
            {/* Row 1: Branding + 10 days stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col justify-between min-h-[180px]"
            >
              <Image src={serviceCards[0].icon} alt="" width={28} height={28} className="w-6 h-6 sm:w-7 sm:h-7 mb-3 sm:mb-4" />
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-sm sm:text-base mb-1">{serviceCards[0].title}</h4>
                <p className="text-[11px] sm:text-[13px] text-black/45 leading-snug whitespace-pre-line">{serviceCards[0].description}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-[#FF6B00] rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col items-center justify-center text-center min-h-[180px]"
            >
              <span className="font-headline font-medium text-[36px] sm:text-[56px] text-white leading-none">{statCards[0].value}</span>
              <p className="text-xs sm:text-sm text-white/85 mt-2 whitespace-pre-line">{statCards[0].label}</p>
            </motion.div>

            {/* Row 2: 40% stat + Landing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-[#FF6B00] rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col items-center justify-center text-center min-h-[180px]"
            >
              <span className="font-headline font-medium text-[36px] sm:text-[56px] text-white leading-none">{statCards[1].value}</span>
              <p className="text-xs sm:text-sm text-white/85 mt-2 whitespace-pre-line">{statCards[1].label}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-7 flex flex-col justify-between min-h-[180px]"
            >
              <Image src={serviceCards[1].icon} alt="" width={28} height={28} className="w-6 h-6 sm:w-7 sm:h-7 mb-3 sm:mb-4" />
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-sm sm:text-base mb-1">{serviceCards[1].title}</h4>
                <p className="text-[11px] sm:text-[13px] text-black/45 leading-snug whitespace-pre-line">{serviceCards[1].description}</p>
              </div>
            </motion.div>

            {/* Row 3: Testing + Support - full width cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white rounded-[20px] p-4 sm:p-6 md:p-7 min-h-[180px]"
            >
              <Image src={serviceCards[2].icon} alt="" width={28} height={28} className="w-6 h-6 sm:w-7 sm:h-7 mb-3 sm:mb-5" />
              <h4 className="font-semibold text-[#1A1A1A] text-sm sm:text-base mb-1">{serviceCards[2].title}</h4>
              <p className="text-[11px] sm:text-[13px] text-black/45 leading-snug">{serviceCards[2].description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-[#1A1A1A] rounded-[20px] p-4 sm:p-6 md:p-7 min-h-[180px]"
            >
              <Image src={serviceCards[3].icon} alt="" width={28} height={28} className="w-6 h-6 sm:w-7 sm:h-7 mb-3 sm:mb-5 brightness-0 invert" />
              <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{serviceCards[3].title}</h4>
              <p className="text-[11px] sm:text-[13px] text-white/40 leading-snug">{serviceCards[3].description}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
