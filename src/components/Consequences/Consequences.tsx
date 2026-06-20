import "./Consequences.scss"

function Consequences() {
  return (
    <section className="consequences">
      <div className="container">
        <div className="conseq-head">
          <span className="eyebrow">Что будет, если оставить как есть</span>
          <h2>
            Три сценария, которые <em>тебя ждут</em>
          </h2>
        </div>
        <div className="conseq-grid">
          <div className="conseq-card">
            <div className="conseq-icon">
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
            <h3>Работа по вечерам</h3>
            <p>
              или зарплата сотрудника, который вручную собирает и вводит часы в
              таблицы зарплат и фактурирования
            </p>
          </div>
          <div className="conseq-card">
            <div className="conseq-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h3>Проблемы с ликвидностью</h3>
            <p>
              Рабочие забывают отправлять вовремя рабочее время, надо звонить
              напоминать и откладывать с выствлением счета
            </p>
          </div>
          <div className="conseq-card">
            <div className="conseq-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Бесконечные звонки</h3>
            <p>
              Сотрудник не прислал часы - надо звонить, не сообщил о выполнении
              задания - надо звонить, ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consequences;
