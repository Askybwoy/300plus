"use client";

import { motion } from "framer-motion";

const floatingTags = [
  { label: "Бесплатно", color: "#FFF0E6", iconColor: "#FF6B00", x: 141, y: 92, icon: "free" },
  { label: "Отправьте ссылку", color: "#EFF6FF", iconColor: "#3B82F6", x: 934, y: 26, icon: "link" },
  { label: "Конкретные рекомендации", color: "#F3F4F6", iconColor: "#6B7280", x: 0, y: 324, icon: "recommend" },
  { label: "Детальный анализ", color: "#ECFDF5", iconColor: "#10B981", x: 1051, y: 256, icon: "analyze" },
  { label: "Улучшение конверсии", color: "#FFF0E6", iconColor: "#FF6B00", x: 143, y: 539, icon: "conversion" },
  { label: "PDF-разбор", color: "#FDF2F8", iconColor: "#EC4899", x: 970, y: 481, icon: "pdf" },
  { label: "60 секунд", color: "#FF6B00", iconColor: "#FFFFFF", x: 642, y: 602, icon: "time" },
];

// Icon components matching Figma design exactly
// Using Figma's original 52x52 viewBox with exact paths, scaled via width/height
const TagIcon = ({ type, color }: { type: string; color: string }) => {
  switch (type) {
    case "free":
      return (
        <svg width="60" height="60" viewBox="0 0 52 52" fill="none">
          <path d="M26 21V24M26 27H26.0075M33.5 24C33.5 28.1421 30.1421 31.5 26 31.5C21.8579 31.5 18.5 28.1421 18.5 24C18.5 19.8579 21.8579 16.5 26 16.5C30.1421 16.5 33.5 19.8579 33.5 24Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "link":
      return (
        <svg width="60" height="60" viewBox="0 0 52 52" fill="none">
          <path d="M24.5 24.75C24.8221 25.1806 25.233 25.5369 25.7049 25.7947C26.1768 26.0525 26.6987 26.2058 27.235 26.2442C27.7714 26.2826 28.3097 26.2052 28.8135 26.0173C29.3174 25.8294 29.7749 25.5353 30.155 25.155L32.405 22.905C33.0881 22.1977 33.4661 21.2505 33.4576 20.2672C33.449 19.284 33.0546 18.3434 32.3593 17.6482C31.6641 16.9529 30.7235 16.5585 29.7403 16.5499C28.757 16.5414 27.8098 16.9194 27.1025 17.6025L25.8125 18.885M27.5 23.25C27.1779 22.8194 26.767 22.4631 26.2951 22.2053C25.8232 21.9475 25.3014 21.7941 24.765 21.7557C24.2287 21.7173 23.6903 21.7947 23.1865 21.9826C22.6827 22.1706 22.2252 22.4647 21.845 22.845L19.595 25.095C18.9119 25.8022 18.534 26.7495 18.5425 27.7327C18.551 28.716 18.9454 29.6565 19.6407 30.3518C20.336 31.0471 21.2765 31.4415 22.2598 31.45C23.243 31.4585 24.1903 31.0806 24.8975 30.3975L26.18 29.115" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "recommend":
      return (
        <svg width="60" height="60" viewBox="0 0 52 52" fill="none">
          <path d="M27.5 16.5H21.5C21.1022 16.5 20.7206 16.658 20.4393 16.9393C20.158 17.2206 20 17.6022 20 18V30C20 30.3978 20.158 30.7794 20.4393 31.0607C20.7206 31.342 21.1022 31.5 21.5 31.5H30.5C30.8978 31.5 31.2794 31.342 31.5607 31.0607C31.842 30.7794 32 30.3978 32 30V21M27.5 16.5L32 21M27.5 16.5V21H32M29 24.75H23M29 27.75H23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "analyze":
      return (
        <svg width="60" height="60" viewBox="0 0 52 52" fill="none">
          <path d="M32.75 30.75L29.4875 27.4875M31.25 23.25C31.25 26.5637 28.5637 29.25 25.25 29.25C21.9363 29.25 19.25 26.5637 19.25 23.25C19.25 19.9363 21.9363 17.25 25.25 17.25C28.5637 17.25 31.25 19.9363 31.25 23.25Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "conversion":
      return (
        <svg width="60" height="60" viewBox="0 0 52 52" fill="none">
          <path d="M33.5 24H30.5L28.25 30.75L23.75 17.25L21.5 24H18.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "pdf":
      return (
        <svg width="60" height="60" viewBox="0 0 52 52" fill="none">
          <path d="M34.25 20.25L29 24L34.25 27.75V20.25Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.5 18.75H19.25C18.4216 18.75 17.75 19.4216 17.75 20.25V27.75C17.75 28.5784 18.4216 29.25 19.25 29.25H27.5C28.3284 29.25 29 28.5784 29 27.75V20.25C29 19.4216 28.3284 18.75 27.5 18.75Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "time":
      return (
        <svg width="60" height="60" viewBox="0 0 52 52" fill="none">
          <path d="M26 19.5V24L29 25.5M33.5 24C33.5 28.1421 30.1421 31.5 26 31.5C21.8579 31.5 18.5 28.1421 18.5 24C18.5 19.8579 21.8579 16.5 26 16.5C30.1421 16.5 33.5 19.8579 33.5 24Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

// Normalize positions to percentages based on the Figma group dimensions
const groupWidth = 1236;
const groupHeight = 638;

export function Audit() {
  return (
    <section id="audit" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Radial layout */}
        <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[620px] flex items-center justify-center">
          {/* Background circle decoration */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] md:w-[620px] md:h-[620px] rounded-full border border-black/5"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[440px] md:h-[440px] rounded-full border border-black/5"
            />
          </div>

          {/* Floating tags */}
          <div className="absolute inset-0 hidden md:block">
            {floatingTags.map((tag, index) => {
              const xPercent = (tag.x / groupWidth) * 100;
              const yPercent = (tag.y / groupHeight) * 100;
              const isOrange = tag.color === "#FF6B00";
              const floatDuration = 3 + (index * 0.5);

              return (
                <motion.div
                  key={tag.label}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring", damping: 12 }}
                  style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
                  className="absolute"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2.5"
                  >
                    <div
                      className="w-11 h-11 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center"
                      style={{ backgroundColor: tag.color }}
                    >
                      <TagIcon type={tag.icon} color={tag.iconColor} />
                    </div>
                    <span className="text-[15px] font-medium text-[#0A0A0A]">{tag.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative z-10 text-center max-w-[400px] mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex mb-4"
            >
              <span className="bg-gradient-to-r from-white to-[#F3F4F6] border border-black/6 text-[#374151] text-sm font-medium px-5 py-2 rounded-full">
                Бесплатно
              </span>
            </motion.div>

            <h2 className="font-headline text-[clamp(2rem,8vw,4.35rem)] text-[#2D2D2D] tracking-[-0.05em] leading-[0.9] mb-4">
              Аудит сайта
            </h2>

            <p className="text-[15px] text-[#6B7280]/70 leading-relaxed mb-6 max-w-[310px] mx-auto">
              Пришлите ссылку на&nbsp;Ваш текущий сайт, и&nbsp;мы&nbsp;пришлем разбор с&nbsp;конкретными рекомендациями по&nbsp;улучшению
            </p>

            <motion.button
              onClick={() => window.open('https://t.me/its300plus_bot?start=audit', '_blank')}
              className="group inline-flex items-center gap-4 bg-[#131313] text-white font-cta pl-7 pr-2 py-2 rounded-full cursor-pointer hover:bg-[#2A2A2A] transition-all duration-200"
              whileTap={{ scale: 0.98 }}
            >
              <span>Бесплатный аудит</span>
              <div className="relative w-[50px] h-[50px] rounded-full bg-[#FF6B00] flex items-center justify-center overflow-hidden">
                {/* Original icon - flies up-right on hover */}
                <motion.svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 14 14" 
                  fill="none"
                  className="absolute transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0"
                >
                  <path d="M4 10L10 4M10 4H4M10 4V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
                {/* New icon - appears from bottom-left on hover */}
                <motion.svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 14 14" 
                  fill="none"
                  className="absolute translate-x-[-20px] translate-y-[20px] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <path d="M4 10L10 4M10 4H4M10 4V10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </div>
            </motion.button>

            <p className="text-sm text-[#6B7280] mt-4">
              Telegram бот @its300plus_bot
            </p>
          </motion.div>
        </div>

        {/* Mobile tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 md:hidden">
          {floatingTags.map((tag, index) => {
            return (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl border border-black/6"
              >
                <div
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: tag.color }}
                >
                  <div className="scale-[0.5] sm:scale-[0.67]">
                    <TagIcon type={tag.icon} color={tag.iconColor} />
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-[#0A0A0A]">{tag.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
