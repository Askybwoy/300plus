"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";
import { Modal } from "../ui/Modal";
import { Lightbulb, Rocket, MagnifyingGlass } from "@phosphor-icons/react";

const ctaCards = [
  {
    id: "idea",
    icon: Lightbulb,
    title: "У меня только идея",
    description: "Поможем создать бренд с нуля",
    modalTitle: "Расскажите о вашей идее",
    modalSubtitle: "Мы поможем превратить её в работающий бизнес",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Есть бренд, нужен запуск",
    description: "Быстро выведем на рынок",
    modalTitle: "Запустим ваш проект",
    modalSubtitle: "Лендинг и реклама за 7 дней",
  },
  {
    id: "audit",
    icon: MagnifyingGlass,
    title: "Бесплатный аудит",
    description: "Разберём сайт конкурента",
    modalTitle: "Бесплатный аудит",
    modalSubtitle: "Пришлите ссылку на сайт для разбора",
  },
];

export function Hero() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Navigation */}
      <nav className="w-full py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo className="h-8 md:h-10 text-[#0A0A0A]" />
          <Button variant="outline" size="sm" onClick={() => setActiveModal("idea")}>
            Обсудить проект
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="font-[family-name:var(--font-playfair)] italic text-4xl md:text-6xl lg:text-7xl text-[#0A0A0A] tracking-tight leading-[1.1] mb-6 text-center">
            <AnimatedText text="Ваш спринт-отдел" />
            <br />
            <AnimatedText text="в кризис" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-12"
          >
      Проверим вашу идею за 7 дней. Создание бренда, лендинга <br />и запуск рекламы без найма и лишних согласований.
          </motion.p>

          {/* CTA Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {ctaCards.map((card, index) => (
              <motion.button
                key={card.id}
                onClick={() => setActiveModal(card.id)}
                className="group p-6 bg-white border border-[#E5E7EB] rounded-2xl text-left transition-all duration-300 hover:border-[#FF6B00]/30 hover:shadow-lg hover:shadow-[#FF6B00]/5 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <card.icon
                  weight="duotone"
                  className="w-8 h-8 text-[#FF6B00] mb-3 transition-transform group-hover:scale-110"
                />
                <h3 className="font-medium text-[#0A0A0A] mb-1">{card.title}</h3>
                <p className="text-sm text-[#6B7280]">{card.description}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#D1D5DB] rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#6B7280] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Modals */}
      {ctaCards.map((card) => (
        <Modal
          key={card.id}
          isOpen={activeModal === card.id}
          onClose={() => setActiveModal(null)}
          title={card.modalTitle}
          subtitle={card.modalSubtitle}
        />
      ))}
    </section>
  );
}
