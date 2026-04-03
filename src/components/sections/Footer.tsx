"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "../ui/Modal";
import Image from "next/image";

export function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="py-16 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1152px] mx-auto">
        {/* Top area */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Left: Description + CTA */}
          <div className="max-w-[443px] space-y-9">
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Студия быстрого тестирования бизнес-идей. Помогаем
              проверить гипотезу за&nbsp;10&nbsp;дней через&nbsp;создание бренда,
              лендинга и&nbsp;запуск таргетированной рекламы.
            </p>
            <motion.button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-4 bg-white text-[#2A2A2A] font-cta pl-7 pr-2 py-2 rounded-full cursor-pointer hover:bg-[#F5F5F5] transition-all duration-200"
              whileTap={{ scale: 0.98 }}
            >
              <span>Оставить заявку</span>
              <div className="w-[50px] h-[50px] rounded-full bg-[#FF6B00] flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 10L10 4M10 4H4M10 4V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.button>
          </div>

          {/* Right: Contacts */}
          <div>
            <h4 className="text-white font-medium text-base mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="https://t.me/its300plus_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M18.5 1.5L9 11M18.5 1.5L12.5 18.5L9 11M18.5 1.5L1.5 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                @its300plus_bot
              </a>
              <a
                href="mailto:hello@300.plus"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 6L10 11L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                hello@300.plus
              </a>
            </div>
          </div>
        </div>

        {/* Large logo */}
        <div className="mb-8">
          <Image
            src="/icons/logo-footer.svg"
            alt="300.plus"
            width={1129}
            height={295}
            className="w-full h-auto opacity-100"
            style={{
              maskImage: "linear-gradient(180deg, #373737 0%, #0A0A0A 77%)",
              WebkitMaskImage: "linear-gradient(180deg, #373737 0%, #0A0A0A 77%)",
            }}
          />
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] text-sm">
            2026 300.plus. Все&nbsp;права защищены.
          </p>
          <a
            href="#"
            className="text-[#6B7280] text-sm hover:text-white transition-colors"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Оставить заявку"
        subtitle="Расскажите о вашем проекте, и мы свяжемся с вами"
      />
    </footer>
  );
}
