"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "300plus-cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1A1A1A] border-t border-[#2A2A2A]"
        >
          <div className="max-w-6xl mx-auto px-4 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#9CA3AF] text-center md:text-left">
              <p>
                Мы используем cookie для улучшения работы сайта. Продолжая использовать сайт,
                вы соглашаетесь с{" "}
                <a
                  href="/cookie"
                  className="text-[#FF6B00] hover:underline"
                >
                  Политикой использования cookie
                </a>
                .
              </p>
            </div>
            <button
              onClick={handleAccept}
              className="flex-shrink-0 bg-[#FF6B00] hover:bg-[#E65C00] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors whitespace-nowrap"
            >
              Понятно
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
