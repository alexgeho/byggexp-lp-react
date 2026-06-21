import "./Benefits.scss";

function BenefitsForOffice() {
  return (
    <section className="benefits">
      <div className="container benefits-inner">

        <div className="benefits-header">
          <span className="eyebrow">Что Вам даст работа с нами?</span>

          <h2>
            С 1й недели <em>Вы больше не тратите время</em> на звонки, ручной
            сбор/ввод часов и напоминаниями
          </h2>
        </div>

          <p className="solution-lead">
            Что поменяется для офиса и руководителя:
          </p>

        <div className="benefits-grid">
          
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
            <h3>Часы сразу в системе</h3>
            <p>Счета можно выставлять без ожиданий и напоминаний.</p>
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
            <h3>Экспорт в Excel</h3>
            <p>Готовые часы для зарплат и счетов в один клик.</p>
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
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <h3>Автонапоминания по задачам</h3>
            <p>Не нужно звонить и напоминать сотрудникам вручную.</p>
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
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <h3>Контроль объектов</h3>
            <p>Видно Live кто работает, где работает и кто не на работе.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BenefitsForOffice;
