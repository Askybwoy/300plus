import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Договор оферты | 300.plus",
  description: "Публичная оферта на оказание услуг",
};

export default function OfferPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-3xl md:text-4xl text-[#0A0A0A] mb-8">
          Договор публичной оферты
        </h1>
        
        <div className="prose prose-lg max-w-none text-[#374151]">
          <p className="text-sm text-[#6B7280] mb-8">
            Последнее обновление: 16 апреля 2026 г.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">1. Общие положения</h2>
            <p className="mb-4">
              Настоящий документ является публичной офертой (предложением) Индивидуального 
              предпринимателя Дресвянникова Александра Сергеевича (ИНН: 245407242557, 
              ОГРН: 323246800012544, далее — Исполнитель) любому физическому или юридическому 
              лицу (далее — Заказчик) на оказание услуг по разработке дизайна, созданию 
              лендингов и запуску рекламных кампаний.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">2. Предмет договора</h2>
            <p className="mb-4">
              Исполнитель обязуется оказать Заказчику услуги по выбранному пакету:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Пакет «СТАРТ»</strong> — аудит сайта, UX-разбор, список рекомендаций</li>
              <li><strong>Пакет «СПРИНТ»</strong> — новый дизайн главной страницы, вёрстка, аналитика</li>
              <li><strong>Пакет «ПОЛНЫЙ ЗАПУСК»</strong> — фирменный стиль, лендинг, запуск рекламы</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">3. Стоимость услуг и порядок оплаты</h2>
            <p className="mb-4">
              Стоимость услуг указана на сайте 300.plus и может быть изменена Исполнителем 
              в одностороннем порядке до момента заключения договора.
            </p>
            <p className="mb-4">Порядок оплаты:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Предоплата 50% перед началом работ</li>
              <li>Окончательный расчёт 50% по факту выполнения</li>
              <li>Оплата производится на расчётный счёт Исполнителя</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">4. Сроки выполнения</h2>
            <p className="mb-4">
              Сроки выполнения работ указаны в описании каждого пакета и отсчитываются 
              с момента получения предоплаты и всех необходимых материалов от Заказчика.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">5. Права и обязанности сторон</h2>
            <p className="mb-4 font-medium">Исполнитель обязуется:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Оказать услуги в полном объёме и надлежащем качестве</li>
              <li>Соблюдать согласованные сроки</li>
              <li>Сохранять конфиденциальность информации Заказчика</li>
            </ul>
            <p className="mb-4 font-medium">Заказчик обязуется:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Предоставить необходимые материалы и доступы</li>
              <li>Своевременно производить оплату</li>
              <li>Предоставлять обратную связь в течение 3 рабочих дней</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">6. Ответственность</h2>
            <p className="mb-4">
              Исполнитель не несёт ответственность за результаты, зависящие от действий 
              третьих лиц (рекламные площадки, хостинг-провайдеры и т.д.).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">7. Форс-мажор</h2>
            <p className="mb-4">
              Стороны освобождаются от ответственности за частичное или полное неисполнение 
              обязательств по настоящему договору, если это явилось следствием обстоятельств 
              непреодолимой силы.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">8. Реквизиты Исполнителя</h2>
            <div className="bg-[#F9FAFB] p-6 rounded-xl mb-4">
              <p className="mb-2"><strong>ИП Дресвянников Александр Сергеевич</strong></p>
              <p className="mb-2">ИНН: 245407242557</p>
              <p className="mb-2">ОГРН: 323246800012544</p>
              <p className="mb-2">Юр. адрес: 662547, Красноярский край, г. Лесосибирск, мкр. 7-й, д. 15а, кв. 47</p>
              <p className="mb-2">Р/с: 40802810400004170762</p>
              <p className="mb-2">Банк: АО «Тинькофф Банк»</p>
              <p className="mb-2">БИК: 044525974</p>
              <p>К/с: 30101810145250000974</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">9. Контакты</h2>
            <p className="mb-2">Email: <a href="mailto:hello@300.plus" className="text-[#FF6B00] hover:underline">hello@300.plus</a></p>
            <p>Telegram: <a href="https://t.me/its300plus_bot" className="text-[#FF6B00] hover:underline">@its300plus_bot</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
