"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "../ui/Modal";
import { AnimatedText } from "../ui/AnimatedText";
import Image from "next/image";

const cards = [
  {
    id: "idea",
    icon: "/icons/icon-lightbulb-group.svg",
    iconSize: { width: 39, height: 39 },
    title: "У\u00A0меня\nтолько идея",
    description: "Идеально для\u00A0старта. Превратим абстрактную мысль\nв\u00A0упакованный продукт.",
    bgImage: "/images/bulb-bg-53cf4f.png",
    imageSize: { width: 506, height: 720 },
    layout: "text-left", // text on left, image on right
    modalTitle: "Расскажите о вашей идее",
    modalSubtitle: "Мы поможем превратить её в работающий бизнес",
    buttonText: "получить консультацию",
  },
  {
    id: "launch",
    icon: "/icons/icon-loyalty.svg",
    iconSize: { width: 66, height: 66 },
    title: "Есть\u00A0бренд,\nнужен запуск",
    description: "Для\u00A0действующего бизнеса. Быстрый тест новой гипотезы или\u00A0продукта.",
    bgImage: "/images/cat-bg.png",
    imageSize: { width: 720, height: 720 },
    layout: "text-right", // image on left, text on right
    modalTitle: "Запустим ваш проект",
    modalSubtitle: "Лендинг и реклама за 10 дней",
    buttonText: "запустить проект",
  },
];

export function EntryCards() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section id="entry-cards" className="px-6 pt-[20vh] pb-[40vh] relative z-10">
      <div className="max-w-[1100px] mx-auto flex flex-col">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="relative w-full h-[50vh] overflow-hidden sticky top-[20vh]"
            style={{ zIndex: index + 1 }}
          >
            <div className={`relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 p-8 md:p-10 ${card.layout === 'text-right' ? 'md:flex-row-reverse' : ''}`}>
              {/* Video - First on mobile, 50% on desktop */}
              <div className="flex-shrink-0 flex items-center justify-center order-1 md:order-none md:w-1/2">
                {card.id === 'idea' ? (
                  <video
                    src="/bulb.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-contain w-auto h-[300px] md:h-[720px]"
                  />
                ) : (
                  <video
                    src="/cat.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-contain w-auto h-[300px] md:h-[720px]"
                  />
                )}
              </div>

              {/* Text Content - Second on mobile, 50% on desktop */}
              <div className="flex flex-col items-center text-center gap-[31px] order-2 md:order-none md:w-1/2">
                <Image
                  src={card.icon}
                  alt=""
                  width={card.iconSize?.width || 39}
                  height={card.iconSize?.height || 39}
                  className={card.id === 'idea' ? 'w-[48px] h-[48px]' : 'w-[52px] h-[52px]'}
                />
                <h3 className="font-headline text-white tracking-[-0.05em] leading-[0.9] whitespace-pre-line"
                    style={{ fontSize: 'clamp(2rem, 4vw, 4.35rem)' }}>
                  <AnimatedText text={card.title.replace(/\n/g, ' ')} delay={index * 0.15} />
                </h3>
                <motion.p
                  className="text-white text-base leading-relaxed whitespace-pre-line"
                  style={{ maxWidth: card.id === 'idea' ? '564px' : '326px' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                >
                  {card.description}
                </motion.p>
                <motion.button
                  onClick={() => setActiveModal(card.id)}
                  className="bg-[#FF6B00] text-white font-cta px-12 py-4 rounded-full cursor-pointer hover:bg-[#E65C00] transition-all duration-200"
                  style={{ height: '60px', padding: '10px 50px' }}
                  whileTap={{ scale: 0.98 }}
                >
                  {card.buttonText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {cards.map((card) => (
        <Modal
          key={card.id}
          isOpen={activeModal === card.id}
          onClose={() => setActiveModal(null)}
          title={card.modalTitle}
          subtitle={card.modalSubtitle}
        />
      ))}
    </section>
  );
}
