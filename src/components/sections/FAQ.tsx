"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";
import { Plus, TelegramLogo } from "@phosphor-icons/react";

const faqs = [
  {
    question: "Что если у меня только идея без чёткого понимания продукта?",
    answer:
      "Это нормально! На первом интервью мы вместе разберём вашу идею, выявим ключевые гипотезы и определим минимальный набор функций для тестирования. Наша задача - помочь вам проверить идею с минимальными вложениями.",
  },
  {
    question: "Почему именно 7 дней? Не будет ли это в ущерб качеству?",
    answer:
      "7 дней - это оптимальный срок для тестирования гипотезы. Мы фокусируемся на ключевых элементах: конверсионный лендинг, узнаваемый бренд и настроенная реклама. Всё остальное можно доработать после получения первых результатов.",
  },
  {
    question: "Что входит в стоимость 300 000 рублей?",
    answer:
      "Полный цикл запуска: айдентика (логотип, цвета, шрифты), адаптивный лендинг на современном стеке, настройка и запуск таргетированной рекламы. Рекламный бюджет оплачивается отдельно по факту.",
  },
  {
    question: "А что если идея не сработает?",
    answer:
      "В этом и ценность быстрого тестирования! Лучше за 300 000 узнать, что идея требует доработки, чем потратить 3 000 000 на полноценный запуск. Мы предоставим аналитику и рекомендации по дальнейшим шагам.",
  },
  {
    question: "Можно ли внести правки после запуска?",
    answer:
      "Да, мы предоставляем одну итерацию правок в рамках пакета. Если нужна постоянная поддержка и развитие проекта, обсудим условия сопровождения отдельно.",
  },
  {
    question: "Как проходит оплата?",
    answer:
      "Работаем по предоплате: 50% (150 000 рублей) перед началом работ, оставшиеся 50% после запуска лендинга. Рекламный бюджет оплачивается отдельно напрямую в рекламные системы.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="mb-6">FAQ</SectionLabel>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-3xl md:text-5xl text-[#0A0A0A] tracking-tight">
            <AnimatedText text="Частые вопросы" />
          </h2>
        </div>

        <div className="space-y-0 divide-y divide-[#E5E7EB]">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="py-6"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
              >
                <h3 className="font-[family-name:var(--font-playfair)] italic text-lg md:text-xl text-[#0A0A0A] pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 bg-[#FFF4ED] rounded-full flex items-center justify-center"
                >
                  <Plus weight="bold" className="w-4 h-4 text-[#FF6B00]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#6B7280] leading-relaxed mt-4 pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Telegram Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6B7280] mb-4">Остались вопросы?</p>
          <a
            href="https://t.me/threeplus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-medium transition-all hover:bg-[#2A2A2A] hover:scale-[1.02] active:scale-[0.98]"
          >
            <TelegramLogo weight="fill" className="w-5 h-5" />
            Написать в Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
