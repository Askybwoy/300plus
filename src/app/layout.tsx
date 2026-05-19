import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { SectionNav } from "@/components/ui/SectionNav";
import { CookieBanner } from "@/components/ui/CookieBanner";

const TMR_COUNTER_ID = "3766946";
const YM_COUNTER_ID = 109303198;

// Original unmodified Top.Mail.Ru pixel code (must remain verbatim for tracking validation)
const tmrPixel = `
var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "${TMR_COUNTER_ID}", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");
`;

// Original unmodified Yandex.Metrika pixel code (must remain verbatim for tracking validation)
const ymPixel = `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document,"script","https://mc.yandex.ru/metrika/tag.js?id=${YM_COUNTER_ID}", "ym");

ym(${YM_COUNTER_ID}, "init", {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
`;

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
  description: "Проверим вашу бизнес-идею за 14 дней. Бренд, лендинг и запуск рекламы за 300 000 рублей. Быстрое тестирование гипотез без найма и долгих согласований.",
  keywords: "тестирование гипотез, MVP, лендинг, запуск рекламы, быстрый старт, стартап",
  openGraph: {
    title: "300.plus | Ваш спринт-отдел в любой кризис",
    description: "Проверим вашу бизнес-идею за 14 дней. Бренд, лендинг и запуск рекламы за 300 000 рублей.",
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
      <head>
        {/* Top.Mail.Ru counter */}
        <script dangerouslySetInnerHTML={{ __html: tmrPixel }} />
        {/* Yandex.Metrika counter */}
        <script dangerouslySetInnerHTML={{ __html: ymPixel }} />
      </head>
      <body className={`${inter.variable} ${ptSerif.variable} antialiased`}>
        <Header />
        {/* <SectionNav /> */}
        {children}
        <CookieBanner />

        <noscript>
          <div>
            <img
              src={`https://top-fwz1.mail.ru/counter?id=${TMR_COUNTER_ID};js=na`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt="Top.Mail.Ru"
            />
          </div>
        </noscript>
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
