"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "../ui/AnimatedText";

const testimonials = [
  {
    name: "Алексей Воронов",
    company: "FitStart / Фитнес",
    text: "«Запустили лендинг для нового фитнес-клуба за 10 дней. Результат превзошел ожидания — конверсия в заявку выросла в 2.4 раза по сравнению с предыдущим сайтом. Рекомендую!»",
    metric: "2.4×",
    metricLabel: "рост конверсии",
  },
  {
    name: "Марина Соколова",
    company: "DecorHome / Дизайн интерьера",
    text: "«Обратились для запуска рекламы услуг дизайна. Получили 18 заявок в первый день работы. Качество лидов отличное, уже закрыли 4 проекта.»",
    metric: "18+",
    metricLabel: "заявок в первый день",
  },
  {
    name: "Дмитрий Козлов",
    company: "EduPro / Онлайн-курсы",
    text: "«Сделали полный ребрендинг и лендинг для запуска нового курса. От идеи до запуска прошло ровно 10 дней. Профессиональный подход и отличная скорость работы.»",
    metric: "10 дней",
    metricLabel: "от идеи до запуска",
  },
];

export function SocialProof() {
  return (
    <section id="social-proof" className="bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-6"
          >
            <span className="bg-[#FAFAFA] text-[#374151] text-sm font-medium px-4 py-2 rounded-full border border-[#E5E7EB]">
              Результаты
            </span>
          </motion.div>
          <h2 className="font-headline text-3xl md:text-[4.35rem] text-[#2D2D2D] tracking-[-0.05em] leading-[0.9] mb-6">
            <AnimatedText text="Проверено на практике" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-[#374151] max-w-[610px] mx-auto leading-relaxed"
          >
            Истории клиентов, которые протестировали идеи вместе с нами
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-t from-[#F9F9F9] to-white rounded-[20px] p-6 sm:p-7"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-[#E5E7EB] mb-4" />
              
              {/* Name & Company */}
              <h4 className="font-semibold text-[#0A0A0A] text-base mb-1">
                {testimonial.name}
              </h4>
              <p className="text-sm text-[#6B7280] mb-4">
                {testimonial.company}
              </p>
              
              {/* Quote */}
              <p className="text-sm text-[#374151] leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>
              
              {/* Metric */}
              <div>
                <span className="font-headline text-[28px] sm:text-[32px] text-[#FF6B00] font-medium leading-none">
                  {testimonial.metric}
                </span>
                <p className="text-xs text-[#6B7280] mt-1">
                  {testimonial.metricLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-[#E5E7EB]"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-[100px] h-[36px] rounded-lg bg-[#F3F4F6]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
