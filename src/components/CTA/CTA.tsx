import "./CTA.scss"

function CTA() {
return (
     <section className="cta" id="cta">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">Готов попробовать?</span>
          <h2>Запишись на демо — <em>15 минут</em> по видеосвязи</h2>
          <p className="cta-lead">
            Покажем, как Byggexp работает на твоём объекте, ответим на вопросы
            и поможем настроить первый чат с бригадой.
          </p>
          <ul className="cta-list">
            <li>
              <span className="check"
                ><svg viewBox="0 0 14 10" fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m1 5 4 4 8-8"
                  /></svg></span>Бесплатно и без обязательств
            </li>
            <li>
              <span className="check"
                ><svg viewBox="0 0 14 10" fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m1 5 4 4 8-8"
                  /></svg></span>Свяжемся в течение часа в рабочее время
            </li>
            <li>
              <span className="check"
                ><svg viewBox="0 0 14 10" fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m1 5 4 4 8-8"
                  /></svg></span>Поможем перенести данные с твоей системы
            </li>
          </ul>
        </div>

        <div className="form-card" id="form-card">
          <div id="form-view">
            <h3>Оставь заявку на демо</h3>
            <form id="demo-form" noValidate>
              <div className="form-group" data-field="name">
                <label htmlFor="f-name">Как тебя зовут</label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  placeholder="Имя Фамилия"
                  autoComplete="name"
                />
                <div className="err-msg">Укажи имя</div>
              </div>
              <div className="form-group" data-field="email">
                <label htmlFor="f-email">Email</label>
                <input
                  id="f-email"
                  name="email"
                  type="email"
                  placeholder="hans@bygg.se"
                  autoComplete="email"
                />
                <div className="err-msg">Введи реальный email</div>
              </div>
              <div className="form-group" data-field="phone">
                <label htmlFor="f-phone">Телефон</label>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  placeholder="+46 70 123 45 67"
                  autoComplete="tel"
                />
                <div className="err-msg">Укажи телефон для связи</div>
              </div>
              <button type="submit" className="form-submit">
                Записаться на демо
              </button>
              <p className="form-fine">
                Отправляя форму, ты соглашаешься с обработкой персональных
                данных. Не передаём третьим лицам.
              </p>
            </form>
          </div>
          <div id="form-success" className="form-success">
            <div className="form-success-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>Заявка отправлена!</h3>
            <p id="success-msg">
              Свяжемся с тобой в течение часа в рабочее время.
            </p>
          </div>
        </div>
      </div>
    </section>
)    
}

export default CTA;