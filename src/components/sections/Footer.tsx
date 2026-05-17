"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-[#0A0A0A]">
      <div className="max-w-[1152px] mx-auto">
        {/* Top area */}
        <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Left: Description */}
          <div className="max-w-[443px]">
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              Студия быстрого тестирования бизнес-идей. Помогаем
              проверить гипотезу за&nbsp;10&nbsp;дней через&nbsp;создание бренда,
              лендинга и&nbsp;запуск таргетированной рекламы.
            </p>
          </div>

          {/* Right: Contacts */}
          <div>
            <h4 className="text-white font-medium text-base mb-4">Контакты</h4>
            <div className="space-y-3">
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

        {/* Legal Info */}
        <div className="pt-8 border-t border-[#1A1A1A]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <p className="text-[#6B7280] text-sm">
              2026 300.plus. Все права защищены.
            </p>
            <div className="flex items-center gap-5 md:gap-6">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href="/privacy"
                  className="text-[#6B7280] text-sm hover:text-white transition-colors"
                >
                  Политика конфиденциальности
                </a>
                <a
                  href="/offer"
                  className="text-[#6B7280] text-sm hover:text-white transition-colors"
                >
                  Договор оферты
                </a>
                <a
                  href="/cookie"
                  className="text-[#6B7280] text-sm hover:text-white transition-colors"
                >
                  Политика использования cookie
                </a>
                <a
                  href="/offer"
                  className="text-[#6B7280] text-sm hover:text-white transition-colors"
                >
                  Реквизиты
                </a>
              </div>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Наверх"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#9CA3AF] hover:text-white hover:border-[#FF6B00] hover:bg-[#FF6B00] transition-all duration-200 active:scale-95 flex-shrink-0 cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
