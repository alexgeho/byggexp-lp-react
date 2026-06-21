import "./FinalBenefits.scss";

function FinalBenefits() {
    return (
        <section className="benefits">
      <div className="container benefits-inner">
        <span className="eyebrow" >Итого, что ты получаешь</span>
        <h2>Объект под контролем — <em>и спокойный сон</em></h2>
        <div className="finalBenefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>

            <p>Руководитель получает больше времени и экономии</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            <p>Компания начинает работать быстрее и спокойнее</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            <p>Команда тратит время на работу, а не на суету</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>

            <p>Ошибки, потери часов и хаос начинают исчезать</p>
          </div>
        </div>
      </div>
    </section>
    )

}

export default FinalBenefits;