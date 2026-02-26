"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";
import { Brain, Atom, Eye } from "@phosphor-icons/react";

const features = [
  {
    icon: Eye,
    title: "Психология внимания",
    description:
      "Используем принципы когнитивной психологии для создания интерфейсов, которые захватывают внимание и ведут к конверсии.",
  },
  {
    icon: Brain,
    title: "Современный дизайн",
    description:
      "Следим за трендами и применяем актуальные визуальные решения: чистую типографику, грамотные акценты и продуманную анимацию.",
  },
  {
    icon: Atom,
    title: "Технологии",
    description:
      "Next.js, TypeScript, Tailwind CSS. Быстрая загрузка, SEO-оптимизация и адаптивность на всех устройствах.",
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
];

export function Moodboard() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel className="mb-6 bg-[#2A2A2A] border-[#3A3A3A] text-white">
            Наш подход
          </SectionLabel>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-3xl md:text-5xl text-white tracking-tight">
            <AnimatedText text="Не просто красиво, а эффективно" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-[#FF8A3D] to-[#FF6B00] rounded-2xl p-6"
            >
              <feature.icon weight="duotone" className="w-10 h-10 text-white mb-4" />
              <h3 className="text-white font-medium text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#6B7280] text-sm mb-4">Технологический стек</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="px-4 py-2 bg-[#2A2A2A] text-white/80 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
