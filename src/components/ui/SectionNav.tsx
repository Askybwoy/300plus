"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Главная", isDark: true },
  { id: "entry-cards", label: "Старт", isDark: true },
  { id: "approach", label: "Подход", isDark: false },
  { id: "how-it-works", label: "Как работаем", isDark: false },
  { id: "what-you-get", label: "Что вы получаете", isDark: true },
  { id: "audit", label: "Аудит", isDark: false },
  { id: "faq", label: "FAQ", isDark: false },
];

export function SectionNav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          if (scrollY >= sectionTop) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = sections[activeIndex]?.isDark ?? true;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="fixed right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-[30px] z-50"
    >
      {sections.map((section, i) => (
        <div
          key={section.id}
          className="relative flex items-center"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: hoveredIndex === i ? 1 : 0,
              x: hoveredIndex === i ? 0 : 10,
            }}
            transition={{ duration: 0.2 }}
            className="absolute right-full mr-4 whitespace-nowrap"
          >
            <span className={`text-sm font-medium ${isDark ? "text-white" : "text-black"}`}>
              {section.label}
            </span>
          </motion.div>

          {/* Dot */}
          <motion.button
            onClick={() => scrollToSection(section.id)}
            animate={{
              opacity: activeIndex === i ? 1 : 0.3,
              scale: activeIndex === i ? 1.2 : 1,
            }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.2 }}
            className={`rounded-full cursor-pointer ${
              isDark ? "bg-white" : "bg-black"
            } ${activeIndex === i ? "w-2 h-2" : "w-1.5 h-1.5"}`}
            aria-label={section.label}
          />
        </div>
      ))}
    </motion.div>
  );
}
