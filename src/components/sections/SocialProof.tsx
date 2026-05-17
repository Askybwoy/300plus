"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimatedText } from "../ui/AnimatedText";
import { CaseModal } from "../ui/CaseModal";
import { cases, type CaseStudy } from "@/data/cases";

function CardImagePlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center text-[#9CA3AF] text-sm font-medium">
      Скриншот сайта
    </div>
  );
}

export function SocialProof() {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <section
      id="social-proof"
      className="bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-6"
          >
            <span className="bg-[#FAFAFA] text-[#374151] text-sm font-medium px-4 py-2 rounded-full border border-[#E5E7EB]">
              Кейсы
            </span>
          </motion.div>
          <h2 className="font-headline text-3xl md:text-[4.35rem] text-[#2D2D2D] tracking-[-0.05em] leading-[0.9] mb-6">
            <AnimatedText text="Проверено на практике" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-[#374151] max-w-[610px] mx-auto leading-relaxed"
          >
            Истории клиентов, которые протестировали
            <br />
            идеи вместе с нами
          </motion.p>
        </div>

        {/* Cases — 1 per row */}
        <div className="flex flex-col gap-5 sm:gap-6 mb-12">
          {cases.filter(c => !c.hidden).map((c, index) => (
            <motion.button
              key={c.id}
              type="button"
              onClick={() => setActiveCase(c)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group text-left bg-gradient-to-t from-[#F9F9F9] to-white rounded-[24px] p-4 sm:p-6 border border-[#EDEDED] hover:border-[#D1D5DB] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-7 items-stretch">
                {/* Left: Screenshot 60% (3/5) */}
                <div className="md:col-span-3 rounded-2xl overflow-hidden aspect-[16/10] bg-white border border-[#E5E7EB]">
                  {c.cardImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.cardImage}
                      alt={c.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <CardImagePlaceholder />
                  )}
                </div>

                {/* Right: Info 40% (2/5) */}
                <div className="md:col-span-2 flex flex-col justify-between gap-5 py-1 sm:py-2">
                  <div>
                    <h3 className="font-headline text-2xl sm:text-3xl text-[#0A0A0A] tracking-[-0.02em] leading-tight mb-1">
                      {c.name}
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-4">{c.niche}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#FAFAFA] text-[#374151] border border-[#E5E7EB]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-headline text-[36px] sm:text-[44px] text-[#FF6B00] font-medium leading-none block">
                      {c.primaryMetric.value}
                    </span>
                    <p className="text-sm text-[#6B7280] mt-1.5 mb-5">
                      {c.primaryMetric.label}
                    </p>

                    <div className="inline-flex items-center gap-2 text-[#0A0A0A] text-sm font-medium group-hover:gap-3 transition-[gap]">
                      <span>Смотреть кейс</span>
                      <ArrowRight weight="bold" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-8 border-t border-[#E5E7EB]"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-[100px] h-[36px] rounded-lg bg-[#F3F4F6]"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <CaseModal
        isOpen={activeCase !== null}
        onClose={() => setActiveCase(null)}
        caseStudy={activeCase}
      />
    </section>
  );
}
