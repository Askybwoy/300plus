import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { SectionNav } from "@/components/ui/SectionNav";
import { CookieBanner } from "@/components/ui/CookieBanner";

const TMR_COUNTER_ID = "3766946";

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
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.variable} ${ptSerif.variable} antialiased`}>
        <Header />
        {/* <SectionNav /> */}
        {children}
        <CookieBanner />

        {/* Top.Mail.Ru counter */}
        <Script
          id="tmr-code"
          src="https://top-fwz1.mail.ru/js/code.js"
          strategy="afterInteractive"
        />
        <Script
          id="tmr-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _tmr = window._tmr || (window._tmr = []);
              _tmr.push({id: "${TMR_COUNTER_ID}", type: "pageView", start: (new Date()).getTime()});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src={`https://top-fwz1.mail.ru/counter?id=${TMR_COUNTER_ID};js=na`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt="Top.Mail.Ru"
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
