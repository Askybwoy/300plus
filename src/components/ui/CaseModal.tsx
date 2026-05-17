"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowSquareOut } from "@phosphor-icons/react";
import type { CaseStudy } from "@/data/cases";
import { Modal as ContactModal } from "./Modal";

interface CaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy | null;
}

function ImagePlaceholder({
  label,
  ratio = "16/10",
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className="w-full bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] rounded-xl flex items-center justify-center text-[#9CA3AF] text-sm font-medium"
      style={{ aspectRatio: ratio }}
    >
      {label}
    </div>
  );
}

export function CaseModal({ isOpen, onClose, caseStudy }: CaseModalProps) {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && caseStudy && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 24 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-0 z-50 flex items-start justify-center p-0 sm:px-6 sm:pb-6 sm:pt-0 overflow-y-auto"
              onClick={onClose}
            >
              <div
                className="relative w-full max-w-4xl bg-white rounded-none sm:rounded-t-none sm:rounded-b-3xl shadow-2xl my-0 sm:mt-0 sm:mb-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="sticky top-4 float-right mr-4 z-10 p-2.5 rounded-full bg-white/90 backdrop-blur border border-[#E5E7EB] text-[#6B7280] hover:text-[#0A0A0A] hover:border-[#D1D5DB] transition-colors cursor-pointer"
                  aria-label="Закрыть"
                >
                  <X weight="bold" className="w-5 h-5" />
                </button>

                <div className="p-6 sm:p-10 pt-2">
                  {/* Hero image */}
                  <div className="mb-8">
                    {caseStudy.heroImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={caseStudy.heroImage}
                        alt={caseStudy.name}
                        className="w-full rounded-xl aspect-[16/10] object-cover"
                      />
                    ) : (
                      <ImagePlaceholder label="Скриншот сайта" ratio="16/10" />
                    )}
                  </div>

                  {/* Header */}
                  <div className="mb-8">
                    <p className="text-sm text-[#6B7280] mb-2">
                      {caseStudy.niche}
                    </p>
                    <h2 className="font-headline text-3xl sm:text-5xl text-[#0A0A0A] tracking-[-0.03em] leading-[1] mb-4">
                      {caseStudy.name}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#FAFAFA] text-[#374151] border border-[#E5E7EB]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Narrative: Problem → Solution */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-10">
                    <div className="bg-[#FAFAFA] rounded-2xl p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-3">
                        Задача
                      </p>
                      <p className="text-[15px] text-[#374151] leading-relaxed">
                        {caseStudy.problem}
                      </p>
                    </div>
                    <div className="bg-[#FAFAFA] rounded-2xl p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-3">
                        Решение
                      </p>
                      <p className="text-[15px] text-[#374151] leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Gallery: full-width stacked screenshots */}
                  {caseStudy.galleryImages.length > 0 && (
                    <div className="flex flex-col gap-4 sm:gap-6 mb-10">
                      {caseStudy.galleryImages.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={i}
                          src={src}
                          alt={`${caseStudy.name} — ${i + 1}`}
                          className="w-full rounded-xl object-cover border border-[#E5E7EB]"
                        />
                      ))}
                    </div>
                  )}

                  {/* Result metrics */}
                  <div className="mb-10">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-4">
                      Результат
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {caseStudy.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-[#FFF8F2] to-white rounded-2xl p-5 border border-[#FFE5D0]"
                        >
                          <span className="font-headline text-[32px] sm:text-[40px] text-[#FF6B00] font-medium leading-none block mb-2">
                            {m.value}
                          </span>
                          <p className="text-sm text-[#374151]">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-4 border-[#FF6B00] pl-6 mb-10">
                    <p className="text-base sm:text-lg text-[#374151] leading-relaxed italic mb-3">
                      {caseStudy.testimonial.text}
                    </p>
                    <p className="text-sm font-semibold text-[#0A0A0A]">
                      {caseStudy.testimonial.author}
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#2A2A2A] border border-[#E5E7EB] hover:border-[#9CA3AF] font-cta px-6 py-4 rounded-2xl transition-colors"
                    >
                      <span>Открыть сайт</span>
                      <ArrowSquareOut weight="bold" className="w-5 h-5" />
                    </a>
                    <button
                      onClick={() => setContactOpen(true)}
                      className="flex-1 inline-flex items-center justify-center gap-4 bg-[#FF6B00] hover:bg-[#E65C00] text-white font-cta pl-7 pr-2 py-2 rounded-2xl transition-colors cursor-pointer"
                    >
                      <span>Хочу так же</span>
                      <div className="w-[44px] h-[44px] flex items-center justify-center">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M4 10L10 4M10 4H4M10 4V10"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        title="Хочу такой же результат"
        subtitle={`Расскажите о проекте — обсудим, как повторить успех ${caseStudy?.name ?? ""}`}
        source="discuss_hero"
      />
    </>
  );
}
