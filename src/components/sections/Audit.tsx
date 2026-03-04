"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "../ui/Modal";

const floatingTags = [
  { label: "Бесплатно", color: "#FFF0E6", x: 141, y: 92 },
  { label: "Отправьте ссылку", color: "#EFF6FF", x: 934, y: 26 },
  { label: "Конкретные рекомендации", color: "#F3F4F6", x: 0, y: 324 },
  { label: "Детальный анализ", color: "#ECFDF5", x: 1051, y: 256 },
  { label: "Улучшение конверсии", color: "#FFF0E6", x: 143, y: 539 },
  { label: "PDF-разбор", color: "#FDF2F8", x: 970, y: 481 },
  { label: "24 часа", color: "#FF6B00", x: 642, y: 602 },
];

// Normalize positions to percentages based on the Figma group dimensions
const groupWidth = 1236;
const groupHeight = 638;

export function Audit() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="audit" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Radial layout */}
        <div className="relative min-h-[500px] md:min-h-[620px] flex items-center justify-center">
          {/* Background circle decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[500px] h-[500px] md:w-[620px] md:h-[620px] rounded-full border border-black/5"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-[350px] h-[350px] md:w-[440px] md:h-[440px] rounded-full border border-black/5"
            />
          </div>

          {/* Floating tags */}
          <div className="absolute inset-0 hidden md:block">
            {floatingTags.map((tag, index) => {
              const xPercent = (tag.x / groupWidth) * 100;
              const yPercent = (tag.y / groupHeight) * 100;
              const isOrange = tag.color === "#FF6B00";
              const floatDuration = 3 + (index * 0.5);

              return (
                <motion.div
                  key={tag.label}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", damping: 12 }}
                  style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
                  className="absolute"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2.5"
                  >
                    <div
                      className="w-9 h-9 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center"
                      style={{ backgroundColor: isOrange ? "#FF6B00" : tag.color }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 6V12M6 9H12" stroke={isOrange ? "white" : "#374151"} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <span className="text-[15px] font-medium text-[#0A0A0A]">{tag.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative z-10 text-center max-w-[400px] mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex mb-4"
            >
              <span className="bg-gradient-to-r from-white to-[#F3F4F6] border border-black/6 text-[#374151] text-sm font-medium px-5 py-2 rounded-full">
                Бесплатно
              </span>
            </motion.div>

            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-[4.35rem] text-[#2D2D2D] tracking-[-0.05em] leading-[0.9] mb-4">
              Аудит сайта
            </h2>

            <p className="text-[15px] text-[#6B7280]/70 leading-relaxed mb-6 max-w-[310px] mx-auto">
              Пришлите ссылку на&nbsp;Ваш текущий сайт, и&nbsp;мы&nbsp;пришлем разбор с&nbsp;конкретными рекомендациями по&nbsp;улучшению
            </p>

            <motion.button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-4 bg-[#131313] text-white font-cta pl-7 pr-2 py-2 rounded-full cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Оставить заявку</span>
              <div className="w-[50px] h-[50px] rounded-full bg-[#FF6B00] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 10L10 4M10 4H4M10 4V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 md:hidden">
          {floatingTags.map((tag, index) => {
            const isOrange = tag.color === "#FF6B00";
            return (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-black/6"
              >
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: isOrange ? "#FF6B00" : tag.color }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 3V9M3 6H9" stroke={isOrange ? "white" : "#374151"} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="text-sm text-[#0A0A0A]">{tag.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Бесплатный аудит"
        subtitle="Пришлите ссылку на сайт для разбора"
      />
    </section>
  );
}
