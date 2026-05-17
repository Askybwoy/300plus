import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | 300.plus",
  description: "Политика обработки персональных данных",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-3xl md:text-4xl text-[#0A0A0A] mb-8">
          Политика конфиденциальности
        </h1>
        
        <div className="prose prose-lg max-w-none text-[#374151]">
          <p className="text-sm text-[#6B7280] mb-8">
            Последнее обновление: 16 апреля 2026 г.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">1. Общие положения</h2>
            <p className="mb-4">
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) 
              действует в отношении всей информации, которую ИП Дресвянников Александр Сергеевич 
              (ИНН: 245407242557, ОГРН: 323246800012544) может получить о пользователе во время 
              использования сайта 300.plus.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">2. Персональные данные</h2>
            <p className="mb-4">
              Персональные данные — любая информация, относящаяся к прямо или косвенно 
              определенному или определяемому физическому лицу (субъекту персональных данных).
            </p>
            <p className="mb-4">Мы можем собирать следующие персональные данные:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Имя</li>
              <li>Контактный телефон</li>
              <li>Имя пользователя в Telegram</li>
              <li>Информация о проекте/запросе</li>
              <li>IP-адрес и данные cookie</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">3. Цели обработки персональных данных</h2>
            <p className="mb-4">Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Связь с пользователем по запросу</li>
              <li>Предоставление консультаций и услуг</li>
              <li>Улучшение качества обслуживания</li>
              <li>Отправка информационных материалов (с согласия)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">4. Правовые основания обработки</h2>
            <p className="mb-4">
              Обработка персональных данных осуществляется на основании:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Федерального закона № 152-ФЗ «О персональных данных»</li>
              <li>Согласия субъекта персональных данных</li>
              <li>Договорных отношений с пользователем</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">5. Хранение и защита данных</h2>
            <p className="mb-4">
              Мы принимаем необходимые организационные и технические меры для защиты 
              персональных данных от неправомерного или случайного доступа, уничтожения, 
              изменения, блокирования, копирования, распространения.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">6. Права субъекта персональных данных</h2>
            <p className="mb-4">Вы имеете право:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Получать информацию об обработке ваших персональных данных</li>
              <li>Требовать уточнения, блокирования или уничтожения данных</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Обжаловать действия в Роскомнадзоре</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#0A0A0A] mb-4">7. Контакты</h2>
            <p className="mb-4">
              По вопросам обработки персональных данных обращайтесь:
            </p>
            <p className="mb-2">Email: <a href="mailto:hello@300.plus" className="text-[#FF6B00] hover:underline">hello@300.plus</a></p>
            <p>Telegram: <a href="https://t.me/its300plus_bot" className="text-[#FF6B00] hover:underline">@its300plus_bot</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
