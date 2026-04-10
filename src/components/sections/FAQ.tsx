"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";

const faqs = [
  {
    question: "Что\u00A0если у\u00A0меня только идея без\u00A0чёткого понимания продукта?",
    answer:
      "Это нормально! На первом интервью мы вместе разберём вашу идею, выявим ключевые гипотезы и определим минимальный набор функций для тестирования. Наша задача — помочь вам проверить идею с минимальными вложениями.",
  },
  {
    question: "Почему именно 10\u00A0дней? Не\u00A0будет\u00A0ли\u00A0это\u00A0в\u00A0ущерб качеству?",
    answer:
      "10 дней — это оптимальный срок для тестирования гипотезы. Мы фокусируемся на ключевых элементах: конверсионный лендинг, узнаваемый бренд и настроенная реклама. Всё остальное можно доработать после получения первых результатов.",
  },
  {
    question: "Что\u00A0входит в\u00A0стоимость 300 000\u00A0рублей?",
    answer:
      "Полный цикл запуска: айдентика (логотип, цвета, шрифты), адаптивный лендинг на современном стеке, настройка и запуск таргетированной рекламы. Рекламный бюджет оплачивается отдельно по факту.",
  },
  {
    question: "А\u00A0что\u00A0если\u00A0идея не\u00A0сработает?",
    answer:
      "В этом и ценность быстрого тестирования! Лучше за 300 000 узнать, что идея требует доработки, чем потратить 3 000 000 на полноценный запуск. Мы предоставим аналитику и рекомендации по дальнейшим шагам.",
  },
  {
    question: "Можно\u00A0ли\u00A0внести правки после\u00A0запуска?",
    answer:
      "Да, мы предоставляем одну итерацию правок в рамках пакета. Если нужна постоянная поддержка и развитие проекта, обсудим условия сопровождения отдельно.",
  },
  {
    question: "Как\u00A0проходит оплата?",
    answer:
      "Работаем по предоплате: 50% (150 000 рублей) перед началом работ, оставшиеся 50% после запуска лендинга. Рекламный бюджет оплачивается отдельно напрямую в рекламные системы.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-[768px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex mb-6"
          >
            <span className="bg-gradient-to-b from-black/10 to-black/5 text-[#374151] text-sm font-medium px-5 py-2 rounded-full">
              FAQ
            </span>
          </motion.div>
          <h2 className="font-headline text-[clamp(2rem,7vw,3rem)] md:text-5xl text-[#2D2D2D] tracking-[-0.025em] leading-none">
            <AnimatedText text="Частые" />
            {" "}
            <AnimatedText text="вопросы" />
          </h2>
        </div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="py-6"
            >
              {/* Gradient divider line */}
              <div className="w-full h-px bg-gradient-to-r from-[#E5E5E5] to-transparent mb-6" />
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
              >
                <h3 className="font-headline text-base sm:text-lg md:text-xl text-[#2D2D2D] pr-2 sm:pr-4 leading-snug">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 bg-[#FFF4ED] rounded-full flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <line x1="7" y1="0" x2="7" y2="14" stroke="#FF6B00" strokeWidth="2"/>
                    <line x1="0" y1="7" x2="14" y2="7" stroke="#FF6B00" strokeWidth="2"/>
                  </svg>
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
                    <p className="text-black/60 leading-relaxed mt-4 pr-4 sm:pr-12 text-sm sm:text-base">
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
            href="https://t.me/its300plus_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FF6B00] text-white rounded-full font-medium transition-all hover:bg-[#e65c00] active:scale-[0.98]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.5 1.5L9 11M18.5 1.5L12.5 18.5L9 11M18.5 1.5L1.5 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Написать в&nbsp;Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
