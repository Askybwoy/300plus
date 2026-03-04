import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
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
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
