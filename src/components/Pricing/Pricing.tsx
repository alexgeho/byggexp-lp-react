import "./Pricing.scss"

function Pricing() {
    return (
        <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow">Сколько это стоит?</span>
          <h2>Один тариф, всё включено</h2>
          <p className="section-sub">
            Никаких скрытых платежей, лимитов на чаты или доплат
            за фотофиксацию.
          </p>
        </div>
        <div className="pricing-card">
          <span className="pricing-tag">Первый месяц бесплатно</span>
          <div className="pricing-price">
            <span className="num">€50</span>
            <span className="per">/ месяц за 10 пользователей</span>
          </div>
          <p className="pricing-sub">
            Один объект, вся бригада, неограниченное количество фото
            и документов.
          </p>
          <ul className="pricing-list">
            <li>
              <span className="check"
                ><svg viewBox="0 0 14 10" fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m1 5 4 4 8-8"
                  /></svg></span>Чат, документы, фотофиксация, смены
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
                  /></svg></span>Неограниченное хранилище для объекта
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
                  /></svg></span>Поддержка в чате с 8:00 до 22:00
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
                  /></svg></span>Без обязательств — отменишь в любой момент
            </li>
          </ul>
          <a href="#cta" className="btn-primary">Попробовать бесплатно</a>
          <span className="pricing-trial"
            >Без карты. Запуск занимает 15 минут.</span>
        </div>
      </div>
    </section>

    )
}

export default Pricing;