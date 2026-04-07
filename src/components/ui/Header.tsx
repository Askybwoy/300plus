"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Что вы получаете", href: "#what-you-get" },
  { label: "Наш подход", href: "#approach" },
  { label: "Аудит сайта", href: "#audit", badge: "Бесплатно" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isInverted, setIsInverted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 80; // Header height offset
      
      // Get all sections with their background colors
      const sections = [
        { id: 'hero', light: false },
        { id: 'entry-cards', light: false },
        { id: 'how-it-works', light: true },
        { id: 'what-you-get', light: false },
        { id: 'pricing', light: true },
        { id: 'audit', light: true },
        { id: 'approach', light: true },
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
  };

  return (
    <nav className={`w-full py-6 px-6 md:px-12 fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${isInverted ? 'bg-white/80' : 'bg-black/80'}`}>
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

        {/* CTA Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <span className={`font-cta hidden md:block transition-colors duration-300 ${isInverted ? 'text-black' : 'text-white'}`}>
            Обсудить<br />проект
          </span>
          <div className="relative w-[60px] h-[60px] rounded-full bg-[#FF6B00] flex items-center justify-center overflow-hidden">
            {/* Original icon - flies up-right on hover */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              className="absolute transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5 group-hover:opacity-0"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {/* New icon - appears from bottom-left on hover */}
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
  );
}
