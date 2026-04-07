"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";
import { Modal } from "../ui/Modal";

const packages = [
  {
    id: "start",
    name: "СТАРТ",
    price: "15 000",
    tagline: "Проверь идею перед вложениями",
    popular: false,
    features: [
      "Глубокий аудит сайта (PDF с 5 гипотезами)",
      "UX-разбор главной страницы с макетом правок",
      "Список из 10 конкретных действий с приоритетами",
    ],
    timeline: "2 дня",
    audience: "есть сайт, не понимаешь почему нет заявок",
    buttonText: "Заказать аудит",
    variant: "white" as const,
  },
  {
    id: "sprint",
    name: "СПРИНТ",
    price: "90 000",
    tagline: "Новая главная страница под ключ",
    popular: true,
    features: [
      "Всё из СТАРТА",
      "Новый дизайн главной страницы (Figma → вёрстка)",
      "Подключение аналитики (Яндекс.Метрика + цели)",
      "A/B тест заголовков",
    ],
    timeline: "7 дней",
    audience: "хочешь результат быстро, без найма дизайнера",
    buttonText: "Запустить спринт",
    variant: "orange" as const,
  },
  {
    id: "full",
    name: "ПОЛНЫЙ ЗАПУСК",
    price: "300 000",
    tagline: "Бренд, лендинг и первые заявки с рекламы",
    popular: false,
    features: [
      "Всё из СПРИНТА",
      "Фирменный стиль (логотип, цвета, шрифты)",
      "Полный лендинг (все секции)",
      "Запуск таргетированной рекламы",
      "Поддержка 30 дней",
    ],
    timeline: "10 дней",
    audience: "запускаешь новый продукт или перезапускаешь бизнес",
    buttonText: "Обсудить проект",
    variant: "dark" as const,
  },
];

export function PricingSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleOpenModal = (packageId: string) => {
    setSelectedPackage(packageId);
    setModalOpen(true);
  };

  const getModalTitle = () => {
    const pkg = packages.find((p) => p.id === selectedPackage);
    return pkg?.buttonText || "Оставить заявку";
  };

  return (
    <>
      <section id="pricing" className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex mb-6"
            >
              <span className="bg-[#FAFAFA] text-[#374151] text-sm font-medium px-4 py-2 rounded-full border border-[#E5E7EB]">
                Тарифы
              </span>
            </motion.div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[4.35rem] text-[#0A0A0A] tracking-[-0.05em] leading-[0.9] mb-6">
              <AnimatedText text="Выберите подходящий пакет" />
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg md:text-xl text-[#374151] max-w-[610px] mx-auto leading-relaxed"
            >
              От аудита до полного запуска — выберите уровень поддержки, который нужен вашему проекту
            </motion.p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative rounded-[24px] p-8 flex flex-col ${
                  pkg.variant === "orange"
                    ? "bg-[#FF6B00] text-white"
                    : pkg.variant === "dark"
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-[#FAFAFA] text-[#0A0A0A] border border-[#E5E7EB]"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-[#0A0A0A] text-white text-xs font-medium px-3 py-1 rounded-full">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Популярный
                    </span>
                  </div>
                )}

                {/* Package Name */}
                <p
                  className={`text-xs font-semibold tracking-[0.15em] uppercase mb-4 ${
                    pkg.variant === "white" ? "text-[#FF6B00]" : "text-white/70"
                  }`}
                >
                  Пакет {pkg.id === "start" ? "1" : pkg.id === "sprint" ? "2" : "3"} — {pkg.name}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span
                    className={`font-[family-name:var(--font-playfair)] text-[48px] md:text-[56px] leading-none tracking-[-0.03em] ${
                      pkg.variant === "white" ? "text-[#0A0A0A]" : "text-white"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`font-[family-name:var(--font-playfair)] text-[24px] leading-none tracking-[-0.03em] ml-1 ${
                      pkg.variant === "white" ? "text-[#0A0A0A]" : "text-white"
                    }`}
                  >
                    ₽
                  </span>
                </div>

                {/* Tagline */}
                <p
                  className={`text-base leading-snug mb-6 ${
                    pkg.variant === "white" ? "text-[#374151]" : "text-white/80"
                  }`}
                >
                  «{pkg.tagline}»
                </p>

                {/* Divider */}
                <div
                  className={`h-px w-full mb-6 ${
                    pkg.variant === "white" ? "bg-[#E5E7EB]" : "bg-white/20"
                  }`}
                />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.variant === "white" ? "text-[#FF6B00]" : "text-white"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span
                        className={`text-sm leading-relaxed ${
                          pkg.variant === "white" ? "text-[#374151]" : "text-white/90"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Timeline */}
                <div className="mb-4">
                  <p
                    className={`text-xs font-medium uppercase tracking-[0.1em] mb-1 ${
                      pkg.variant === "white" ? "text-[#6B7280]" : "text-white/60"
                    }`}
                  >
                    Срок
                  </p>
                  <p
                    className={`text-base font-medium ${
                      pkg.variant === "white" ? "text-[#0A0A0A]" : "text-white"
                    }`}
                  >
                    {pkg.timeline}
                  </p>
                </div>

                {/* Audience */}
                <div className="mb-8">
                  <p
                    className={`text-xs font-medium uppercase tracking-[0.1em] mb-1 ${
                      pkg.variant === "white" ? "text-[#6B7280]" : "text-white/60"
                    }`}
                  >
                    Для кого
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      pkg.variant === "white" ? "text-[#374151]" : "text-white/80"
                    }`}
                  >
                    {pkg.audience}
                  </p>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => handleOpenModal(pkg.id)}
                  className={`w-full py-4 rounded-full font-medium text-sm uppercase tracking-wide transition-all duration-200 ${
                    pkg.variant === "orange"
                      ? "bg-white text-[#FF6B00] hover:bg-white/90"
                      : pkg.variant === "dark"
                      ? "bg-[#FF6B00] text-white hover:bg-[#E65C00]"
                      : "bg-[#FF6B00] text-white hover:bg-[#E65C00]"
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {pkg.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Trust Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center text-sm text-[#6B7280] mt-12"
          >
            Фиксированные цены. Без скрытых доплат. Оплата поэтапная.
          </motion.p>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={getModalTitle()}
        subtitle="Расскажите о вашем проекте, и мы свяжемся с вами в течение дня"
      />
    </>
  );
}
