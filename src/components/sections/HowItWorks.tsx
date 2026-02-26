"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";
import { Chat, CurrencyDollar, PaintBrush, Megaphone } from "@phosphor-icons/react";

const steps = [
  {
    number: "(01)",
    icon: Chat,
    title: "Интервью",
    timing: "День 1",
    description: "Погружаемся в проект, фиксируем гипотезы и определяем ключевые метрики успеха.",
  },
  {
    number: "(02)",
    icon: CurrencyDollar,
    title: "Предоплата",
    timing: "День 1-2",
    description: "Получаем предоплату 150 000 рублей и стартуем работу над проектом.",
  },
  {
    number: "(03)",
    icon: PaintBrush,
    title: "Бренд + Лендинг",
    timing: "День 2-5",
    description: "Создаём айдентику и посадочную страницу, готовим материалы для рекламы.",
  },
  {
    number: "(04)",
    icon: Megaphone,
    title: "Запуск рекламы",
    timing: "День 6-7",
    description: "Настраиваем таргетированную рекламу и получаем первые заявки.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="mb-6">Как это работает</SectionLabel>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-3xl md:text-5xl text-[#0A0A0A] tracking-tight">
            <AnimatedText text="От идеи до первых заявок за 7 дней" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[family-name:var(--font-playfair)] italic text-[#FF6B00]">
                    {step.number}
                  </span>
                  <span className="text-xs text-[#6B7280] bg-[#F3F4F6] px-2 py-1 rounded-full">
                    {step.timing}
                  </span>
                </div>
                <step.icon weight="duotone" className="w-10 h-10 text-[#0A0A0A] mb-4" />
                <h3 className="text-[#0A0A0A] font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
