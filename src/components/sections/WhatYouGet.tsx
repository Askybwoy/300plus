"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import {
  PaintBrush,
  Globe,
  ChartLineUp,
  Clock,
  Target,
  Handshake,
} from "@phosphor-icons/react";

const benefits = [
  {
    icon: PaintBrush,
    title: "Фирменный стиль",
    description: "Логотип, цвета, шрифты и визуальная система",
  },
  {
    icon: Globe,
    title: "Лендинг",
    description: "Конверсионная посадочная страница",
  },
  {
    icon: ChartLineUp,
    title: "Рекламная кампания",
    description: "Настройка и запуск таргетированной рекламы",
  },
  {
    icon: Clock,
    title: "Быстрый запуск",
    description: "Всего 7 дней от идеи до первых заявок",
  },
  {
    icon: Target,
    title: "Тестирование гипотез",
    description: "Проверка идеи на реальной аудитории",
  },
  {
    icon: Handshake,
    title: "Поддержка",
    description: "Консультации и доработки после запуска",
  },
];

export function WhatYouGet() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 px-6 grid-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="mb-6">Что вы получаете</SectionLabel>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-3xl md:text-5xl text-[#0A0A0A] tracking-tight">
            <AnimatedText text="Всё для быстрого старта" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B00]/5 hover:border-[#FF6B00]/20"
            >
              <benefit.icon
                weight="duotone"
                className="w-10 h-10 text-[#FF6B00] mb-4"
              />
              <h3 className="font-medium text-[#0A0A0A] text-lg mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FF6B00] rounded-3xl p-8 md:p-12 text-center"
        >
          <p className="text-white/80 mb-2">Полный пакет услуг</p>
          <div className="font-[family-name:var(--font-playfair)] italic text-5xl md:text-7xl text-white mb-4">
            300 000
            <span className="text-2xl md:text-3xl ml-2">рублей</span>
          </div>
          <p className="text-white/80 max-w-md mx-auto mb-8">
            Бренд, лендинг, запуск рекламы и первые заявки за 7 дней
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              icon
              onClick={() => setModalOpen(true)}
            >
              Обсудить проект
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => {
                document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Бесплатный аудит
            </Button>
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Обсудить проект"
        subtitle="Расскажите о вашей идее, и мы свяжемся с вами"
      />
    </section>
  );
}
