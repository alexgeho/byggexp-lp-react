import "./Hero.scss"
import phone from "../../assets/hero/phone-3d.png"

function Hero () {
    return (
    <section className="hero">
      <div className="container hero-inner">
        <div>
          <span className="pill"
            ><span className="pill-dot"></span>Система управления строительными
            проектами</span>

          <h1>
            Автоматический учёт рабочего времени
            <em> для строительных компаний </em>
          </h1>
          <p className="hero-sub">
            Быстрое выставляете
            счетов и зарплат, задачи с авто напоминаниями, контроль смен в
            режиме онлайн, планирование и многое другое …
          </p>

          <div className="hero-ctas">
            <a href="#cta" className="btn-primary">
              Записаться на демо
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7"></path>
              </svg>
            </a>
            <a href="#how" className="btn-ghost">Как это работает</a>
          </div>
          <div className="hero-meta">
            <span
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Первый месяц бесплатно</span>
            <span
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Запуск за 15 минут</span>
            <span
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Без обучения бригады</span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src={phone}
            alt="Byggexp mobile"
            className="hero-phone"
          />
        </div>
      </div>
    </section>

    )
}

export default Hero;