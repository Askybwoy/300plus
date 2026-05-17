import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { SectionNav } from "@/components/ui/SectionNav";
import { CookieBanner } from "@/components/ui/CookieBanner";

// TODO: Replace with your actual VK Pixel ID or set NEXT_PUBLIC_VK_PIXEL_ID env variable
const VK_PIXEL_ID = process.env.NEXT_PUBLIC_VK_PIXEL_ID || 'VK-RTRG-XXXXXX-XXXXX';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const ptSerif = PT_Serif({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "300.plus | Ваш спринт-отдел в любой кризис",
  description: "Проверим вашу бизнес-идею за 10 дней. Бренд, лендинг и запуск рекламы за 300 000 рублей. Быстрое тестирование гипотез без найма и долгих согласований.",
  keywords: "тестирование гипотез, MVP, лендинг, запуск рекламы, быстрый старт, стартап",
  openGraph: {
    title: "300.plus | Ваш спринт-отдел в любой кризис",
    description: "Проверим вашу бизнес-идею за 10 дней. Бренд, лендинг и запуск рекламы за 300 000 рублей.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${ptSerif.variable} antialiased`}>
        <Header />
        {/* <SectionNav /> */}
        {children}
        <CookieBanner />

        {/* VK Pixel (VK Ads Retargeting) — loads only in production */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              id="vk-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(){var t=document.createElement("script");
                  t.type="text/javascript",t.async=!0,
                  t.src='https://vk.com/js/api/openapi.js?175',
                  t.onload=function(){
                    VK.Retargeting.Init("${VK_PIXEL_ID}"),
                    VK.Retargeting.Hit()
                  },document.head.appendChild(t)}();
                `,
              }}
            />
            <noscript>
              <img
                src={`https://vk.com/rtrg?p=${VK_PIXEL_ID}`}
                style={{ position: 'fixed', left: '-999px' }}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
