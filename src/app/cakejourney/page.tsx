export default function CakeJourneyPage() {
  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        :root{--pink:#FF6B9D;--gold:#FFB845;--green:#4CAF50;--blue:#5C9DFF;--dark:#2D1B4E;--light:#FFF8F0;--card:#FFFFFF;--text:#3A2A1F;--muted:#8B7B6B}
        html{scroll-behavior:smooth;font-size:16px}
        .cj-body{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:var(--text);background:var(--light);overflow-x:hidden;line-height:1.6}
        .cj-body a{text-decoration:none;color:inherit}
        .cj-nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:16px 32px;display:flex;align-items:center;justify-content:space-between;transition:all .3s}
        .cj-nav.scrolled{background:rgba(255,248,240,.95);backdrop-filter:blur(12px);box-shadow:0 2px 20px rgba(0,0,0,.08)}
        .cj-nav-logo{font-size:1.4rem;font-weight:800;background:linear-gradient(135deg,var(--pink),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .cj-nav-links{display:flex;gap:24px;font-size:.9rem;font-weight:500}
        .cj-nav-links a{opacity:.7;transition:.2s}.cj-nav-links a:hover{opacity:1}
        .cj-burger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none}
        .cj-burger span{width:24px;height:2px;background:var(--dark);border-radius:2px;transition:.3s}
        .cj-hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:120px 24px 80px;background:linear-gradient(170deg,#FFF8F0 0%,#FFE8D6 30%,#FFD6E8 60%,#E8D6FF 100%);position:relative;overflow:hidden}
        .cj-hero::before{content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(255,107,157,.15),transparent 70%);top:-200px;right:-200px}
        .cj-hero::after{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(255,184,69,.12),transparent 70%);bottom:-100px;left:-100px}
        .cj-hero-badge{display:inline-block;padding:8px 20px;border-radius:50px;background:rgba(255,107,157,.12);color:var(--pink);font-size:.85rem;font-weight:600;margin-bottom:24px;letter-spacing:.5px}
        .cj-hero h1{font-size:clamp(2.5rem,6vw,4.5rem);font-weight:900;line-height:1.1;margin-bottom:20px}
        .cj-hero h1 span{background:linear-gradient(135deg,var(--pink),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .cj-hero-sub{font-size:clamp(1.1rem,2vw,1.4rem);color:var(--muted);max-width:600px;margin:0 auto 40px}
        .cj-hero-stats{display:flex;gap:48px;justify-content:center;margin-top:60px;flex-wrap:wrap}
        .cj-hero-stat{text-align:center}
        .cj-hero-stat .num{font-size:2rem;font-weight:800;color:var(--dark)}
        .cj-hero-stat .label{font-size:.85rem;color:var(--muted);margin-top:4px}
        .cj-body section{padding:100px 24px}
        .container{max-width:1200px;margin:0 auto}
        .section-badge{display:inline-block;padding:6px 16px;border-radius:30px;font-size:.8rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px}
        .section-title{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;margin-bottom:16px;line-height:1.2}
        .section-desc{font-size:1.1rem;color:var(--muted);max-width:640px;margin-bottom:48px}
        .problem{background:linear-gradient(180deg,var(--light) 0%,#fff 100%)}
        .problem .section-badge{background:rgba(255,107,157,.1);color:var(--pink)}
        .problem-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px}
        .problem-card{padding:32px;border-radius:20px;background:#fff;border:1px solid rgba(0,0,0,.06);transition:transform .3s,box-shadow .3s}
        .problem-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.08)}
        .problem-card .icon{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin-bottom:16px}
        .problem-card h3{font-size:1.15rem;font-weight:700;margin-bottom:8px}
        .problem-card p{font-size:.95rem;color:var(--muted)}
        .solution{background:linear-gradient(135deg,var(--dark) 0%,#1A0A3E 100%);color:#fff}
        .solution .section-badge{background:rgba(255,184,69,.2);color:var(--gold)}
        .solution .section-desc{color:rgba(255,255,255,.6)}
        .solution-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px}
        .solution-item{padding:28px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(4px)}
        .solution-item .num{font-size:2rem;font-weight:900;background:linear-gradient(135deg,var(--pink),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:12px}
        .solution-item h3{font-size:1.05rem;font-weight:700;margin-bottom:6px}
        .solution-item p{font-size:.9rem;color:rgba(255,255,255,.55)}
        .features{background:#fff}
        .features .section-badge{background:rgba(76,175,80,.1);color:var(--green)}
        .feature-row{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;margin-bottom:80px}
        .feature-row:nth-child(even){direction:rtl}.feature-row:nth-child(even)>*{direction:ltr}
        .feature-img{border-radius:24px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.1)}
        .feature-img img{width:100%;display:block;max-height:500px;object-fit:contain;background:#f5f0eb}
        .feature-text h3{font-size:1.5rem;font-weight:800;margin-bottom:12px}
        .feature-text p{font-size:1rem;color:var(--muted);margin-bottom:20px}
        .feature-tags{display:flex;flex-wrap:wrap;gap:8px}
        .feature-tag{padding:6px 14px;border-radius:20px;font-size:.8rem;font-weight:600;background:rgba(76,175,80,.08);color:var(--green)}
        .gallery{background:linear-gradient(180deg,#fff,var(--light))}
        .gallery .section-badge{background:rgba(92,157,255,.1);color:var(--blue)}
        .gallery-scroll{display:flex;gap:20px;overflow-x:auto;padding:20px 0;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch}
        .gallery-scroll::-webkit-scrollbar{height:6px}.gallery-scroll::-webkit-scrollbar-thumb{background:var(--pink);border-radius:3px}
        .gallery-item{min-width:260px;max-width:260px;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.1);scroll-snap-align:start;transition:transform .3s;flex-shrink:0}
        .gallery-item:hover{transform:scale(1.03)}
        .gallery-item img{width:100%;height:460px;object-fit:cover;display:block}
        .gallery-item .caption{padding:12px 16px;background:#fff;font-size:.85rem;font-weight:600;text-align:center}
        .finance{background:linear-gradient(135deg,#1A0A3E,var(--dark));color:#fff}
        .finance .section-badge{background:rgba(255,184,69,.2);color:var(--gold)}
        .finance .section-desc{color:rgba(255,255,255,.6)}
        .fin-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;margin-bottom:48px}
        .fin-card{padding:32px;border-radius:20px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
        .fin-card h3{font-size:1rem;font-weight:700;color:var(--gold);margin-bottom:20px;text-transform:uppercase;letter-spacing:1px}
        .fin-row{display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:.95rem}
        .fin-row:last-child{border:none}
        .fin-row .val{font-weight:700;color:#fff}
        .fin-highlight{padding:32px;border-radius:20px;background:linear-gradient(135deg,rgba(255,107,157,.15),rgba(255,184,69,.15));border:1px solid rgba(255,184,69,.2);text-align:center}
        .fin-highlight .big{font-size:clamp(2rem,5vw,3rem);font-weight:900;background:linear-gradient(135deg,var(--pink),var(--gold));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        .fin-highlight .sub{color:rgba(255,255,255,.6);margin-top:8px}
        .tabs{display:flex;gap:8px;margin-bottom:32px;flex-wrap:wrap}
        .tab{padding:10px 24px;border-radius:30px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.7);cursor:pointer;font-size:.9rem;font-weight:600;transition:.2s}
        .tab.active{background:linear-gradient(135deg,var(--pink),var(--gold));color:#fff;border-color:transparent}
        .tab-content{display:none}.tab-content.active{display:block}
        .packages{background:var(--light)}
        .packages .section-badge{background:rgba(255,107,157,.1);color:var(--pink)}
        .pkg-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px}
        .pkg-card{padding:36px;border-radius:24px;background:#fff;border:2px solid transparent;transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden}
        .pkg-card:hover{transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,.1)}
        .pkg-card.featured{border-color:var(--pink)}
        .pkg-card.featured::before{content:'Популярный';position:absolute;top:20px;right:-30px;background:linear-gradient(135deg,var(--pink),var(--gold));color:#fff;padding:4px 40px;font-size:.75rem;font-weight:700;transform:rotate(45deg)}
        .pkg-card .tier{font-size:.85rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:8px}
        .pkg-card .price{font-size:2.5rem;font-weight:900;color:var(--dark);margin-bottom:4px}
        .pkg-card .price-sub{font-size:.85rem;color:var(--muted);margin-bottom:24px}
        .pkg-list{list-style:none;margin-bottom:28px}
        .pkg-list li{padding:8px 0;font-size:.95rem;display:flex;align-items:center;gap:10px}
        .pkg-list li::before{content:'✓';color:var(--green);font-weight:700}
        .cta-section{background:linear-gradient(135deg,var(--pink),#FF8A65,var(--gold));color:#fff;text-align:center;padding:100px 24px}
        .cta-section h2{font-size:clamp(2rem,4vw,3rem);font-weight:900;margin-bottom:16px}
        .cta-section p{font-size:1.1rem;opacity:.85;max-width:500px;margin:0 auto 36px}
        .cj-footer{background:var(--dark);color:rgba(255,255,255,.5);text-align:center;padding:32px 24px;font-size:.85rem}
        @media(max-width:768px){
          .cj-nav-links{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,248,240,.98);flex-direction:column;align-items:center;justify-content:center;gap:32px;font-size:1.3rem}
          .cj-nav-links.open{display:flex}
          .cj-burger{display:flex}
          .cj-hero-stats{gap:24px}
          .feature-row{grid-template-columns:1fr;gap:24px}
          .feature-row:nth-child(even){direction:ltr}
          .gallery-item{min-width:220px;max-width:220px}
          .gallery-item img{height:390px}
          .pkg-grid{grid-template-columns:1fr}
          .cj-body section{padding:60px 16px}
          .fin-grid{grid-template-columns:1fr}
        }
      `}</style>

      <div className="cj-body">
        <nav className="cj-nav" id="cj-nav">
          <div className="cj-nav-logo">🎂 CakeJourney</div>
          <div className="cj-nav-links" id="cjNavLinks">
            <a href="#problem">Проблема</a>
            <a href="#solution">Решение</a>
            <a href="#features">Функции</a>
            <a href="#gallery">Экраны</a>
            <a href="#finance">Финансы</a>
            <a href="#packages">Пакеты</a>
            <a href="#contact">Контакт</a>
          </div>
          <button className="cj-burger" id="cjBurger">
            <span></span><span></span><span></span>
          </button>
        </nav>

        <section className="cj-hero">
          <div>
            <div className="cj-hero-badge">📋 Коммерческое предложение</div>
            <h1><span>CakeJourney</span><br />От первого капкейка<br />до профессионала</h1>
            <p className="cj-hero-sub">EdTech-платформа с подписочной моделью, которая превращает разовых покупателей курсов в постоянных подписчиков</p>
            <div className="cj-hero-stats">
              <div className="cj-hero-stat"><div className="num">30 млн ₽</div><div className="label">Потенциал MRR / год</div></div>
              <div className="cj-hero-stat"><div className="num">3.96x</div><div className="label">LTV / CAC</div></div>
              <div className="cj-hero-stat"><div className="num">14</div><div className="label">Готовых экранов</div></div>
            </div>
          </div>
        </section>

        <section className="problem" id="problem">
          <div className="container">
            <div className="section-badge">Проблема рынка</div>
            <h2 className="section-title">80% учеников бросают<br />онлайн-курсы</h2>
            <p className="section-desc">Кондитерские школы теряют учеников после первой продажи. Текущие платформы не решают ключевые проблемы обучения.</p>
            <div className="problem-grid">
              <div className="problem-card">
                <div className="icon" style={{background:'rgba(255,107,157,.1)'}}>😔</div>
                <h3>Разовые продажи</h3>
                <p>Ученик покупает курс один раз — школа теряет его навсегда. Нет повторных продаж и LTV.</p>
              </div>
              <div className="problem-card">
                <div className="icon" style={{background:'rgba(92,157,255,.1)'}}>📉</div>
                <h3>Низкая доходимость</h3>
                <p>Курсы проходят один раз и забываются. Нет привычки практиковаться и системы удержания.</p>
              </div>
              <div className="problem-card">
                <div className="icon" style={{background:'rgba(255,184,69,.1)'}}>🎯</div>
                <h3>Нет персонализации</h3>
                <p>Все ученики получают одинаковый контент. Платформа не адаптируется под уровень и цели.</p>
              </div>
              <div className="problem-card">
                <div className="icon" style={{background:'rgba(76,175,80,.1)'}}>🔗</div>
                <h3>Зависимость от площадок</h3>
                <p>GetCourse и аналоги забирают комиссию и контроль. Нет собственной платформы.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="solution" id="solution">
          <div className="container">
            <div className="section-badge">Решение</div>
            <h2 className="section-title" style={{color:'#fff'}}>Duolingo для кондитеров</h2>
            <p className="section-desc">Не очередная школа с набором курсов, а персональный кондитерский тренажёр, который ежедневно сопровождает пользователя через практику и игровые механики.</p>
            <div className="solution-grid">
              <div className="solution-item"><div className="num">01</div><h3>Персональный маршрут</h3><p>Онбординг определяет уровень и создаёт индивидуальный план обучения</p></div>
              <div className="solution-item"><div className="num">02</div><h3>Геймификация</h3><p>XP, бейджи, уровни и челленджи — проверенная механика удержания</p></div>
              <div className="solution-item"><div className="num">03</div><h3>Подписочная модель</h3><p>MRR вместо разовых продаж. LTV в 3–5 раз выше</p></div>
              <div className="solution-item"><div className="num">04</div><h3>Собственная платформа</h3><p>iOS + Android + Web. Полный контроль бренда и данных</p></div>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <div className="section-badge">Возможности</div>
            <h2 className="section-title">14 экранов — полностью<br />спроектированный продукт</h2>
            <p className="section-desc">Каждый экран продуман для конверсии, удержания и монетизации.</p>
            {[
              {img:'01_Intro.png', title:'Яркий вход в приложение', desc:'Приветственный экран с персонажами задаёт тон и создаёт эмоциональную связь с брендом с первой секунды.', tags:['Брендинг','Эмоция','Конверсия']},
              {img:'07_Learning_Path.png', title:'Карта обучения', desc:'Визуальный путь прогресса в стиле match-3 игры. Уровни, звёзды, события и награды — пользователь видит свой рост.', tags:['Геймификация','Прогресс','Удержание']},
              {img:'08_Lesson.png', title:'Интерактивные уроки', desc:'Видеоуроки с пошаговыми заданиями. Ученик выполняет каждый шаг и получает XP за завершение.', tags:['Видео','Пошаговость','XP']},
              {img:'11_Ingredient_Calculator.png', title:'Калькулятор ингредиентов', desc:'Уникальный инструмент: выбираешь размер, порции, форму — получаешь автоматический расчёт.', tags:['Утилита','Уникальность','Premium']},
              {img:'12_Profile_Dashboard.png', title:'Профиль и достижения', desc:'Дашборд со статистикой, графиком активности за неделю, коллекцией бейджей — мотивация не останавливаться.', tags:['Статистика','Бейджи','Мотивация']},
              {img:'13_Subscription_Paywall.png', title:'Пейволл с 3 тарифами', desc:'Free / Premium / Pro — прозрачная монетизация. Пользователь видит ценность каждого уровня и выбирает подходящий.', tags:['Монетизация','Free→Paid','Конверсия']},
            ].map((f, i) => (
              <div className="feature-row" key={i}>
                <div className="feature-img">
                  <img src={`/cakejourney/screenshots/${f.img}`} alt={f.title} />
                </div>
                <div className="feature-text">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <div className="feature-tags">{f.tags.map(t => <span key={t} className="feature-tag">{t}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="container">
            <div className="section-badge">Все экраны</div>
            <h2 className="section-title">14 спроектированных экранов</h2>
            <p className="section-desc">Полный пользовательский путь — от первого касания до подписки.</p>
          </div>
          <div className="gallery-scroll" style={{paddingLeft:'max(24px,calc((100vw - 1200px)/2))'}}>
            {[
              ['01_Intro.png','Вступительный экран'],
              ['02_Auth.png','Авторизация'],
              ['03_Onboarding_Experience.png','Опыт'],
              ['04_Onboarding_Desserts.png','Предпочтения'],
              ['05_Onboarding_Goal.png','Цель обучения'],
              ['06_Level_Selection.png','Выбор уровня'],
              ['07_Learning_Path.png','Карта обучения'],
              ['08_Lesson.png','Урок'],
              ['09_Recipe_Detail.png','Рецепт'],
              ['10_Recipe_Library.png','Библиотека рецептов'],
              ['11_Ingredient_Calculator.png','Калькулятор'],
              ['12_Profile_Dashboard.png','Профиль'],
              ['13_Subscription_Paywall.png','Подписка'],
              ['14_Settings.png','Настройки'],
            ].map(([file, caption]) => (
              <div className="gallery-item" key={file}>
                <img src={`/cakejourney/screenshots/${file}`} alt={caption} />
                <div className="caption">{caption}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="finance" id="finance">
          <div className="container">
            <div className="section-badge">Финансовая модель</div>
            <h2 className="section-title" style={{color:'#fff'}}>Прозрачная юнит-экономика</h2>
            <p className="section-desc">Подписочная модель с предсказуемым доходом и быстрым возвратом инвестиций.</p>
            <div className="tabs" id="cjTabs">
              <div className="tab active" data-tab="0">1 000 пользователей</div>
              <div className="tab" data-tab="1">5 000 пользователей</div>
              <div className="tab" data-tab="2">Юнит-экономика</div>
            </div>
            <div className="tab-content active" id="cjtab0">
              <div className="fin-grid">
                <div className="fin-card"><h3>Тарифы</h3>
                  <div className="fin-row"><span>Free (600 чел.)</span><span className="val">0 ₽</span></div>
                  <div className="fin-row"><span>Premium (300 чел.)</span><span className="val">990 ₽/мес</span></div>
                  <div className="fin-row"><span>Pro (100 чел.)</span><span className="val">1 990 ₽/мес</span></div>
                </div>
                <div className="fin-card"><h3>Доход</h3>
                  <div className="fin-row"><span>Premium</span><span className="val">297 000 ₽/мес</span></div>
                  <div className="fin-row"><span>Pro</span><span className="val">199 000 ₽/мес</span></div>
                  <div className="fin-row"><span>MRR (итого)</span><span className="val">496 000 ₽/мес</span></div>
                </div>
                <div className="fin-highlight" style={{gridColumn:'1/-1'}}><div className="big">~5,9 млн ₽/год</div><div className="sub">Годовой доход при 1 000 активных пользователей</div></div>
              </div>
            </div>
            <div className="tab-content" id="cjtab1">
              <div className="fin-grid">
                <div className="fin-card"><h3>Масштабирование</h3>
                  <div className="fin-row"><span>Free (3 000 чел.)</span><span className="val">0 ₽</span></div>
                  <div className="fin-row"><span>Premium (1 500 чел.)</span><span className="val">1 485 000 ₽/мес</span></div>
                  <div className="fin-row"><span>Pro (500 чел.)</span><span className="val">995 000 ₽/мес</span></div>
                </div>
                <div className="fin-card"><h3>Рост</h3>
                  <div className="fin-row"><span>MRR</span><span className="val">2 480 000 ₽/мес</span></div>
                  <div className="fin-row"><span>ARR</span><span className="val">~29,8 млн ₽/год</span></div>
                  <div className="fin-row"><span>Маржа (70%)</span><span className="val">~20,8 млн ₽</span></div>
                </div>
                <div className="fin-highlight" style={{gridColumn:'1/-1'}}><div className="big">~30 млн ₽/год</div><div className="sub">Годовой доход при 5 000 активных пользователей</div></div>
              </div>
            </div>
            <div className="tab-content" id="cjtab2">
              <div className="fin-grid">
                <div className="fin-card"><h3>На 1 Premium-подписчика</h3>
                  <div className="fin-row"><span>CAC (привлечение)</span><span className="val">~1 500 ₽</span></div>
                  <div className="fin-row"><span>ARPU / мес</span><span className="val">990 ₽</span></div>
                  <div className="fin-row"><span>Средний lifetime</span><span className="val">6 месяцев</span></div>
                </div>
                <div className="fin-card"><h3>Результат</h3>
                  <div className="fin-row"><span>LTV</span><span className="val">5 940 ₽</span></div>
                  <div className="fin-row"><span>LTV / CAC</span><span className="val">3.96x ✓</span></div>
                  <div className="fin-row"><span>Payback</span><span className="val">~2 месяца</span></div>
                </div>
                <div className="fin-highlight" style={{gridColumn:'1/-1'}}><div className="big">3.96x LTV/CAC</div><div className="sub">Здоровая модель — пороговое значение 3x превышено</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="packages" id="packages">
          <div className="container">
            <div className="section-badge">Пакеты</div>
            <h2 className="section-title">Выберите формат сотрудничества</h2>
            <p className="section-desc">Три варианта — от быстрого старта до полноценной платформы под ключ.</p>
            <div className="pkg-grid">
              <div className="pkg-card">
                <div className="tier">MVP для инвестора</div>
                <div className="price">от 1,35 млн ₽</div>
                <div className="price-sub">Единоразово · 6–8 недель</div>
                <ul className="pkg-list">
                  <li>Онбординг + авторизация</li><li>Карта обучения + уроки</li><li>Библиотека рецептов</li>
                  <li>Калькулятор ингредиентов</li><li>Подписочная модель</li><li>Аналитика (Mixpanel)</li>
                  <li>Pitch deck с юнит-экономикой</li>
                </ul>
              </div>
              <div className="pkg-card featured">
                <div className="tier">Платформа под ключ</div>
                <div className="price">от 2,3 млн ₽</div>
                <div className="price-sub">Единоразово + 50 000 ₽/мес поддержка</div>
                <ul className="pkg-list">
                  <li>Всё из MVP</li><li>iOS + Android + Web</li><li>Админ-панель</li>
                  <li>Брендирование под клиента</li><li>Интеграция платежей</li><li>Push-уведомления</li>
                  <li>3 месяца поддержки</li><li>Обучение команды</li>
                </ul>
              </div>
              <div className="pkg-card">
                <div className="tier">White Label SaaS</div>
                <div className="price">от 450 000 ₽</div>
                <div className="price-sub">Setup + 30 000 ₽/мес</div>
                <ul className="pkg-list">
                  <li>Готовая платформа</li><li>Запуск за 4 недели</li><li>Ваш бренд и контент</li>
                  <li>Обновления и поддержка</li><li>Хостинг включён</li><li>Масштабирование</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={{background:'#fff'}}>
          <div className="container">
            <div className="section-badge" style={{background:'rgba(92,157,255,.1)',color:'var(--blue)'}}>Дорожная карта</div>
            <h2 className="section-title">3 фазы развития продукта</h2>
            <p className="section-desc">От MVP до AI-кондитера — поэтапное масштабирование с минимальным риском.</p>
            <div className="solution-grid" style={{color:'var(--text)'}}>
              {[
                {v:'v1.0',c:'var(--green)',title:'MVP',desc:'Авторизация, онбординг, маршрут, видеоуроки, рецепты, калькулятор, XP, подписка'},
                {v:'v2.0',c:'var(--blue)',title:'Сообщество',desc:'Комьюнити, челленджи, AI-рекомендации, наставник, рейтинг'},
                {v:'v3.0',c:'var(--pink)',title:'AI-кондитер',desc:'Анализ фото десерта: выравнивание, декор, ошибки, рекомендации'},
              ].map(({v,c,title,desc}) => (
                <div key={v} style={{padding:'28px',borderRadius:'16px',background:'var(--light)',border:'1px solid rgba(0,0,0,.06)'}}>
                  <div style={{fontSize:'2rem',fontWeight:900,color:c,marginBottom:'12px'}}>{v}</div>
                  <h3 style={{fontSize:'1.05rem',fontWeight:700,marginBottom:'6px'}}>{title}</h3>
                  <p style={{fontSize:'.9rem',color:'var(--muted)'}}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <h2>Готовы запустить<br />CakeJourney?</h2>
          <p>Обсудим ваш проект и подберём оптимальный формат сотрудничества</p>
          <a href="https://t.me/askybwoy" target="_blank" rel="noopener noreferrer" style={{display:'inline-block',padding:'18px 48px',borderRadius:'60px',background:'#fff',color:'var(--pink)',fontSize:'1.1rem',fontWeight:800,boxShadow:'0 8px 30px rgba(0,0,0,.15)',transition:'.2s',cursor:'pointer',textDecoration:'none'}}>Написать в Telegram</a>
        </section>

        <footer className="cj-footer">
          <p>© 2025 CakeJourney · Коммерческое предложение · Конфиденциально</p>
        </footer>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        (function(){
          window.addEventListener('scroll',function(){
            var nav=document.getElementById('cj-nav');
            if(nav) nav.classList.toggle('scrolled',window.scrollY>50);
          });
          var burger=document.getElementById('cjBurger');
          var links=document.getElementById('cjNavLinks');
          if(burger && links){
            burger.addEventListener('click',function(){links.classList.toggle('open')});
            links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){links.classList.remove('open')})});
          }
          var tabs=document.querySelectorAll('#cjTabs .tab');
          tabs.forEach(function(tab){
            tab.addEventListener('click',function(){
              var i=parseInt(this.dataset.tab);
              tabs.forEach(function(t,j){t.classList.toggle('active',j===i)});
              document.querySelectorAll('.tab-content').forEach(function(c,j){c.classList.toggle('active',j===i)});
            });
          });
        })();
      `}} />
    </>
  );
}
