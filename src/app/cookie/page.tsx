import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика использования cookie | 300.plus",
  description: "Информация об использовании cookie на сайте",
};

export default function CookiePage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-3xl md:text-4xl text-[#0A0A0A] mb-8">
          Политика использования cookie
        </h1>
        
        <div className="prose prose-lg max-w-none text-[#374151]">
          <p className="text-sm text-[#6B7280] mb-8">
            Последнее обновление: 16 апреля 2026 г.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">1. Что такое cookie</h2>
            <p className="mb-4">
              Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве 
              (компьютере, планшете, смартфоне) при посещении веб-сайтов. Они позволяют сайту 
              запоминать ваши действия и предпочтения (такие как язык, размер шрифта и другие 
              настройки отображения) на определённый период времени.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">2. Какие cookie мы используем</h2>
            <p className="mb-4">На нашем сайте используются следующие типы cookie:</p>
            
            <h3 className="text-lg font-medium text-[#0A0A0A] mb-3">2.1. Необходимые cookie</h3>
            <p className="mb-4">
              Эти cookie необходимы для корректной работы сайта. Они обеспечивают базовые 
              функции, такие как навигация по страницам и доступ к защищённым областям сайта. 
              Без этих cookie сайт не может функционировать должным образом.
            </p>

            <h3 className="text-lg font-medium text-[#0A0A0A] mb-3">2.2. Функциональные cookie</h3>
            <p className="mb-4">
              Эти cookie позволяют сайту запоминать ваши выборы (такие как согласие на использование 
              cookie) и предоставлять расширенные функции.
            </p>

            <h3 className="text-lg font-medium text-[#0A0A0A] mb-3">2.3. Аналитические cookie</h3>
            <p className="mb-4">
              Эти cookie помогают нам понять, как посетители взаимодействуют с сайтом, 
              собирая и сообщая информацию анонимно. Это помогает нам улучшать работу сайта.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">3. Конкретные cookie на нашем сайте</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="border-b border-[#E5E7EB]">
                    <th className="text-left py-3 px-4 font-medium text-[#0A0A0A]">Название</th>
                    <th className="text-left py-3 px-4 font-medium text-[#0A0A0A]">Тип</th>
                    <th className="text-left py-3 px-4 font-medium text-[#0A0A0A]">Срок хранения</th>
                    <th className="text-left py-3 px-4 font-medium text-[#0A0A0A]">Назначение</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-3 px-4">300plus-cookie-consent</td>
                    <td className="py-3 px-4">Функциональное</td>
                    <td className="py-3 px-4">1 год</td>
                    <td className="py-3 px-4">Сохранение согласия на использование cookie</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">4. Управление cookie</h2>
            <p className="mb-4">
              Вы можете управлять cookie через настройки вашего браузера. Большинство браузеров 
              позволяют:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Просматривать cookie, сохранённые на вашем устройстве</li>
              <li>Удалять отдельные cookie или все cookie</li>
              <li>Блокировать cookie от определённых сайтов</li>
              <li>Блокировать все cookie</li>
              <li>Получать уведомления при получении cookie</li>
            </ul>
            <p className="mb-4">
              Обратите внимание: отключение cookie может повлиять на функциональность сайта.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">5. Изменения в политике</h2>
            <p className="mb-4">
              Мы можем обновлять настоящую Политику использования cookie. Изменения вступают 
              в силу с момента их публикации на сайте.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">6. Контакты</h2>
            <p className="mb-4">
              Если у вас есть вопросы об использовании cookie, свяжитесь с нами:
            </p>
            <p className="mb-2">Email: <a href="mailto:hello@300.plus" className="text-[#FF6B00] hover:underline">hello@300.plus</a></p>
            <p>Telegram: <a href="https://t.me/its300plus_bot" className="text-[#FF6B00] hover:underline">@its300plus_bot</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
