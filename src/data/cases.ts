export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  id: string;
  name: string;
  niche: string;
  tags: string[];
  primaryMetric: CaseMetric;
  metrics: CaseMetric[];
  cardImage: string | null;
  heroImage: string | null;
  galleryImages: string[];
  problem: string;
  solution: string;
  liveUrl: string;
  testimonial: {
    text: string;
    author: string;
  };
  hidden?: boolean;
};

export const cases: CaseStudy[] = [
  {
    id: "dcnikitin",
    name: "Доктор Никитин",
    niche: "Пластическая хирургия",
    tags: ["Бренд", "Лендинг"],
    primaryMetric: { value: "3×", label: "рост записей" },
    metrics: [
      { value: "3×", label: "рост записей" },
      { value: "14 дней", label: "до запуска" },
      { value: "78%", label: "конверсия формы" },
    ],
    cardImage: "/images/cases/dcnikitin-1.png",
    heroImage: "/images/cases/dcnikitin-1.png",
    galleryImages: [
      "/images/cases/dcnikitin-2.png",
      "/images/cases/dcnikitin-3.png",
      "/images/cases/dcnikitin-4.png",
    ],
    problem:
      "Пластический хирург с 20-летним опытом работал только по рекомендациям. Не было профессионального сайта, пациенты не могли найти информацию об услугах и записаться онлайн.",
    solution:
      "Создали персональный бренд и лендинг с акцентом на экспертизу и доверие. Интегрировали онлайн-запись, добавили портфолио работ и блог с полезными материалами.",
    liveUrl: "https://doctornikitin.ru/",
    testimonial: {
      text: "«Сайт начал приводить пациентов с первой недели. Особенно ценю, что удалось передать атмосферу доверия — люди приходят уже подготовленными к консультации.»",
      author: "Никитин В.Е.",
    },
  },
  {
    id: "ne-tak",
    name: "НЕ ТАК",
    niche: "HR-конференция",
    tags: ["Бренд", "Лендинг"],
    primaryMetric: { value: "1200+", label: "регистраций" },
    metrics: [
      { value: "1200+", label: "регистраций" },
      { value: "sold out", label: "за 3 недели" },
      { value: "92%", label: "NPS участников" },
    ],
    cardImage: "/images/cases/ne-tak-1.png",
    heroImage: "/images/cases/ne-tak-1.png",
    galleryImages: [
      "/images/cases/ne-tak-2.png",
      "/images/cases/ne-tak-3.png",
      "/images/cases/ne-tak-4.png",
    ],
    problem:
      "ЭКОПСИ запускала новую HR-конференцию без визуальной айдентики. Нужно было выделиться среди десятков похожих ивентов и за короткий срок собрать аудиторию.",
    solution:
      "Разработали яркий бренд конференции с провокационным названием, создали лендинг с программой и спикерами, запустили регистрацию. Билеты разлетелись за 3 недели.",
    liveUrl: "https://conf.ecopsy.ru/",
    testimonial: {
      text: "«Команда попала в tone of voice с первого раза. Брендинг конференции получился настолько сильным, что участники делились лендингом в соцсетях сами — без рекламы.»",
      author: "Команда ЭКОПСИ",
    },
  },
  {
    id: "evo",
    name: "EVO",
    niche: "HoReCa / FoodTech",
    tags: ["Бренд", "Лендинг", "Реклама"],
    primaryMetric: { value: "40+", label: "ресторанов-клиентов" },
    metrics: [
      { value: "40+", label: "ресторанов-клиентов" },
      { value: "2.8×", label: "рост заявок" },
      { value: "21 день", label: "до запуска" },
    ],
    cardImage: "/images/cases/evo-1.png",
    heroImage: "/images/cases/evo-1.png",
    galleryImages: [
      "/images/cases/evo-2.png",
      "/images/cases/evo-3.png",
      "/images/cases/evo-4.png",
    ],
    problem:
      "Маркетинговое агентство для ресторанов не могло масштабироваться: старый сайт не конвертировал, а холодные звонки давали слабый отклик.",
    solution:
      "Переупаковали позиционирование под HoReCa, создали лендинг с кейсами и интеграцией iiko, запустили performance-рекламу на владельцев ресторанов.",
    liveUrl: "https://efood.dev/",
    testimonial: {
      text: "«После запуска нового сайта мы за месяц получили больше заявок, чем за предыдущий квартал. Cofix, Kannam Chicken — все пришли через лендинг.»",
      author: "Основатель EVO",
    },
  },
  {
    id: "verb",
    name: "Вербицкие",
    niche: "FMCG / Фермерство",
    tags: ["Бренд", "Лендинг"],
    primaryMetric: { value: "5×", label: "рост узнаваемости" },
    metrics: [
      { value: "5×", label: "рост узнаваемости" },
      { value: "24", label: "SKU в новом дизайне" },
      { value: "30 дней", label: "полный ребрендинг" },
    ],
    cardImage: "/images/cases/verb-1.png",
    heroImage: "/images/cases/verb-1.png",
    galleryImages: [
      "/images/cases/verb-2.png",
      "/images/cases/verb-3.png",
      "/images/cases/verb-4.png",
    ],
    problem:
      "Семейная мясная ферма выходила в федеральные сети, но упаковка выглядела кустарно. Продукт терялся на полке среди конкурентов.",
    solution:
      "Разработали тёплый семейный бренд «Вербицкие» с акцентом на традиции, создали систему упаковки для 24 SKU и витринный сайт для партнёров.",
    liveUrl: "https://sibferma.ru/",
    testimonial: {
      text: "«Новая упаковка — это небо и земля. Нас стали узнавать на полках, ритейлеры сами выходят на контакт. А сайт стал нашей визиткой для переговоров.»",
      author: "Семья Вербицких",
    },
  },
  {
    id: "kzecpsy",
    name: "ЭКОПСИ",
    niche: "HR-консалтинг",
    tags: ["Бренд", "Лендинг"],
    primaryMetric: { value: "№1", label: "RAEX 10 лет" },
    metrics: [
      { value: "№1", label: "RAEX 10 лет" },
      { value: "35 лет", label: "на рынке" },
      { value: "18 дней", label: "до запуска" },
    ],
    cardImage: "/images/cases/kzecpsy-1.png",
    heroImage: "/images/cases/kzecpsy-1.png",
    galleryImages: [
      "/images/cases/kzecpsy-2.png",
      "/images/cases/kzecpsy-3.png",
      "/images/cases/kzecpsy-4.png",
    ],
    problem:
      "Ведущая консалтинговая компания в HR нуждалась в обновлении цифрового присутствия — сайт устарел визуально и не отражал масштаб компании.",
    solution:
      "Создали минималистичный сайт с 3D-элементами, подчёркивающий статус №1 на рынке. Акцент на кейсы и экспертизу команды.",
    liveUrl: "",
    testimonial: {
      text: "«Новый сайт наконец соответствует нашему уровню. Клиенты отмечают, что он выглядит как сайт международной компании — именно это нам и было нужно.»",
      author: "ЭКОПСИ Консалтинг",
    },
    hidden: true,
  },
];
