"use client";

import { motion } from "framer-motion";
import { Logo } from "../ui/Logo";
import { TelegramLogo, EnvelopeSimple } from "@phosphor-icons/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Logo className="h-10 text-white mb-4" />
            <p className="text-[#9CA3AF] max-w-md leading-relaxed">
              Студия быстрого тестирования бизнес-идей. Помогаем проверить
              гипотезу за 7 дней через создание бренда, лендинга и запуск
              таргетированной рекламы.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-medium mb-4">Контакты</h4>
            <div className="space-y-3">
              <motion.a
                href="https://t.me/threeplus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-white transition-colors"
                whileHover={{ x: 4 }}
              >
                <TelegramLogo weight="fill" className="w-5 h-5" />
                @threeplus
              </motion.a>
              <motion.a
                href="mailto:hello@300.plus"
                className="flex items-center gap-3 text-[#9CA3AF] hover:text-white transition-colors"
                whileHover={{ x: 4 }}
              >
                <EnvelopeSimple weight="fill" className="w-5 h-5" />
                hello@300.plus
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] text-sm">
            {currentYear} 300.plus. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#6B7280] text-sm hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
