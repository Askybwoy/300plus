import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { SectionNav } from "@/components/ui/SectionNav";

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
      </body>
    </html>
  );
}
