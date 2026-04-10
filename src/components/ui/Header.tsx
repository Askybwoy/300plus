"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "./Modal";

const navLinks = [
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Что вы получаете", href: "#what-you-get" },
  { label: "Наш подход", href: "#approach" },
  { label: "Аудит сайта", href: "#audit", badge: "Бесплатно" },
  { label: "FAQ", href: "#faq" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    y: -20,
  },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.08,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export function Header() {
  const [isInverted, setIsInverted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80; // Header height offset
      
      // Get all sections with their background colors
      const sections = [
        { id: 'hero', light: false },
        { id: 'entry-cards', light: false },
        { id: 'how-it-works', light: true },
        { id: 'approach', light: true },
        { id: 'what-you-get', light: false },
        { id: 'social-proof', light: true },
        { id: 'audit', light: true },
        { id: 'pricing', light: true },
        { id: 'faq', light: true },
      ];
      
      let currentSectionIsLight = false;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionBottom = sectionTop + rect.height;
          
          // Check if header is over this section
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSectionIsLight = section.light;
            break;
          }
        }
      }
      
      setIsInverted(currentSectionIsLight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`w-full py-3 md:py-6 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${isInverted ? 'bg-white/80' : 'bg-black/80'}`}>
        <div className="max-w-[1572px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <Image
                src="/icons/logo-header.svg"
                alt="300.plus"
                width={140}
                height={44}
                className={`h-8 md:h-11 w-auto transition-all duration-300 ${isInverted ? 'invert' : ''}`}
              />
            </a>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isInverted ? 'text-black' : 'text-white'}`}>
                  {link.label}
                </span>
                {link.badge && (
                  <span className="bg-[#FF6B00] text-white text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile: Burger only */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Burger Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-[44px] h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Открыть меню"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-6 h-0.5 transition-colors duration-300 ${isInverted ? 'bg-black' : 'bg-white'}`}></span>
                <span className={`block w-6 h-0.5 transition-colors duration-300 ${isInverted ? 'bg-black' : 'bg-white'}`}></span>
                <span className={`block w-4 h-0.5 transition-colors duration-300 ${isInverted ? 'bg-black' : 'bg-white'}`}></span>
              </div>
            </button>
          </div>

          {/* Desktop CTA Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="hidden lg:flex items-center gap-4 cursor-pointer group"
          >
            <span className={`font-cta transition-colors duration-300 ${isInverted ? 'text-black' : 'text-white'}`}>
              Обсудить<br />проект
            </span>
            <div className="relative w-[60px] h-[60px] rounded-full bg-[#FF6B00] flex items-center justify-center overflow-hidden">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                className="absolute transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                className="absolute translate-x-[-24px] translate-y-[24px] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu - Portal outside nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[9999] lg:hidden"
          >
            {/* Solid Background */}
            <motion.div 
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="relative h-full flex flex-col px-6 pt-20 pb-24 overflow-y-auto">
              {/* Close Button */}
              <motion.button
                custom={0}
                variants={itemVariants}
                initial="closed"
                animate="open"
                onClick={() => setMenuOpen(false)}
                className="absolute top-3 right-6 w-[44px] h-[44px] flex items-center justify-center z-10"
                aria-label="Закрыть меню"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>

              {/* Large Logo */}
              <motion.div
                custom={1}
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="w-full mb-4"
                style={{
                  background: "linear-gradient(180deg, #5E5E5E 0%, #0A0A0A 77%)",
                  maskImage: "url(/icons/logo-footer.svg)",
                  WebkitMaskImage: "url(/icons/logo-footer.svg)",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  height: "120px",
                }}
              />

              {/* Nav Links - centered */}
              <nav className="flex flex-col items-center justify-center flex-1 gap-5">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    custom={index + 1}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => scrollTo(link.href)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-xl font-medium text-white">
                      {link.label}
                    </span>
                    {link.badge && (
                      <span className="bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Contacts - slightly smaller than links */}
              <motion.div 
                custom={navLinks.length + 1}
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="flex flex-col items-center gap-3 mb-6"
              >
                <a 
                  href="mailto:hello@300.plus" 
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span className="text-base">hello@300.plus</span>
                </a>
                <a 
                  href="https://t.me/its300plus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M18.5 1.5L9 11M18.5 1.5L12.5 18.5L9 11M18.5 1.5L1.5 8L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-base">@its300plus</span>
                </a>
              </motion.div>

              {/* CTA Button - fixed at bottom */}
              <motion.div
                custom={navLinks.length + 2}
                variants={itemVariants}
                initial="closed"
                animate="open"
                className="flex justify-center"
              >
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="flex items-center gap-3 bg-[#FF6B00] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#E65C00] transition-colors"
                >
                  <span>Обсудить проект</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Обсудить проект"
        subtitle="Расскажите о вашей идее, и мы свяжемся с вами"
      />
    </>
  );
}
