"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "../ui/SectionLabel";
import { AnimatedText } from "../ui/AnimatedText";
import { Button } from "../ui/Button";
import {
  Link as LinkIcon,
  EnvelopeSimple,
  MagnifyingGlass,
  VideoCamera,
  FileText,
  CircleNotch,
  CheckCircle,
} from "@phosphor-icons/react";

type FormState = "idle" | "loading" | "success";

const steps = [
  {
    number: "01",
    icon: LinkIcon,
    title: "Отправьте ссылку",
    description: "Укажите URL сайта конкурента для анализа",
  },
  {
    number: "02",
    icon: MagnifyingGlass,
    title: "Мы анализируем",
    description: "Проводим детальный разбор в течение 24 часов",
  },
  {
    number: "03",
    icon: VideoCamera,
    title: "Получите видео",
    description: "Отправляем видео-разбор с рекомендациями",
  },
];

export function Audit() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    url: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");
  };

  return (
    <section id="audit" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionLabel className="mb-6">Бесплатно</SectionLabel>
            <h2 className="font-[family-name:var(--font-playfair)] italic text-3xl md:text-5xl text-[#0A0A0A] tracking-tight mb-6">
              <AnimatedText text="Аудит сайта конкурента" />
            </h2>
            <p className="text-[#6B7280] text-lg mb-8 max-w-md">
              Пришлите ссылку на любой сайт, и мы запишем видео-разбор с
              конкретными рекомендациями по улучшению.
            </p>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FFF4ED] rounded-xl flex items-center justify-center">
                    <step.icon weight="duotone" className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-[family-name:var(--font-playfair)] italic text-[#FF6B00] text-sm">
                        ({step.number})
                      </span>
                      <h3 className="font-medium text-[#0A0A0A]">{step.title}</h3>
                    </div>
                    <p className="text-[#6B7280] text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#E5E7EB] rounded-3xl p-8"
          >
            {formState === "success" ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                >
                  <CheckCircle
                    weight="fill"
                    className="w-16 h-16 text-[#FF6B00] mx-auto mb-4"
                  />
                </motion.div>
                <h3 className="font-[family-name:var(--font-playfair)] italic text-2xl text-[#0A0A0A] mb-2">
                  Заявка отправлена
                </h3>
                <p className="text-[#6B7280]">
                  Мы пришлём видео-разбор в течение 24 часов
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <FileText weight="duotone" className="w-8 h-8 text-[#FF6B00]" />
                  <h3 className="font-[family-name:var(--font-playfair)] italic text-2xl text-[#0A0A0A]">
                    Получить аудит
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">
                      URL сайта *
                    </label>
                    <div className="relative">
                      <LinkIcon
                        weight="bold"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]"
                      />
                      <input
                        type="url"
                        required
                        value={formData.url}
                        onChange={(e) =>
                          setFormData({ ...formData, url: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <EnvelopeSimple
                        weight="bold"
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]"
                      />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3 border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/20 focus:border-[#FF6B00] transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    size="lg"
                  >
                    {formState === "loading" ? (
                      <CircleNotch className="w-5 h-5 animate-spin" />
                    ) : (
                      "Получить бесплатный аудит"
                    )}
                  </Button>
                </form>

                <p className="text-xs text-[#9CA3AF] text-center mt-4">
                  Отправляя форму, вы соглашаетесь на обработку данных
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
