import "./Benefits.scss"

function BenefitsForSite() {
  return (
    <section className="benefits-team">
      <div className="container benefits-inner">
        <p className="solution-lead-team">Что получает строительная бригада:</p>
        <div className="benefits-grid">

          <div className="benefit-card-team">
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
            <h3>Учёт часов в телефоне</h3>
            <p>Отметил начало и конец смены за несколько секунд.</p>
          </div>

          <div className="benefit-card-team">
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
            <h3>Задачи без звонков</h3>
            <p>Задания прямо в приложении, вместе с автонапоминаниями</p>
          </div>

          <div className="benefit-card-team">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                ></path>
              </svg>
            </div>
            <h3>Все под рукой</h3>
            <p>Фотографии, документы привязываются к смене и проекту</p>
          </div>

          <div className="benefit-card-team">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                ></path>
              </svg>
            </div>
            <h3>Мгновенное оповещение</h3>
            <p>Все участники проекта получают уведомление одновременно.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsForSite;