import "./How.scss";

function HowLight() {
  return (
    <section className="howLight" id="how">
      <div className="container">
        <div className="how-head">
          <span className="eyebrow">Как это выглядит</span>
          <h2>
            3 инструмента, которые <em>закрывают 60%</em> работы администрации
          </h2>
          <p className="section-sub">
            Можно без ноутбука, можно без секретарши. Нужен только смартфон,
            который и так лежит в кармане.
          </p>
        </div>

        <div className="step">
          <div className="step-text-block">
            <h3>Авто сбор и экспорт часов в Excel</h3>
            <p className="step-text">
              Сотрудник выбирает проект и нажимает “Start”. ByggExp
              автоматически фиксирует рабочее время определяя по GPS находится
              ли человек на объекте.
            </p>
            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                Создай проект и назначь сотрудников
              </li>

              <li>
                <span className="number">2</span>
                Рабочий запускает смену одним нажатием
              </li>

              <li>
                <span className="number">3</span>
                Нескольго кликов и готовые отчеты выгружены в Excel
              </li>
            </ul>
          </div>
          <div className="step-visual">
            <div className="phone-shell">
              <img src="assets/screen-chat.png" alt="Чат бригады в Byggexp" />
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-text-block">
            <h3>Задачи с авто контролем</h3>
            <p className="step-text">
              Задача ставится всем кто на проекте, выбранным или 1 сотруднику.
              Если задача не выполнена — приложение будет присылать,
              установленные вами напоминания каждые 5, 15, 60 минут или любой
              другой интервал
            </p>
            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                Внутри проекта, переходите в задачи и клик "создать"
              </li>

              <li>
                <span className="number">2</span>
                Добавляете получателей, сроки и интервал напоминаний
              </li>

              <li>
                <span className="number">3</span>
                Напоминания отключатся как исполнитель завершит задачу
              </li>
            </ul>
          </div>
          <div className="step-visual">
            <div className="phone-shell">
              <img
                src="assets/screen-documents.png"
                alt="Документы по объекту в Byggexp"
              />
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-text-block">
            <h3>Бригады в Live режиме</h3>
            <p className="step-text">
              Контроль сотрудников и объектов в реальном времени. На панели
              админа вы сразу можете видеть всех сотрудников кто начал смену и
              тех кто не начал, кто на каком объекте и со скольки
            </p>
            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                Заходите в панель администратора
              </li>

              <li>
                <span className="number">2</span>
                Кликаете на вкладку Live
              </li>

              <li>
                <span className="check">
                  <svg viewBox="0 0 14 10" fill="none">
                    <path
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m1 5 4 4 8-8"
                    />
                  </svg>
                </span>
                Прогульщиков сразу видно
                <img
                  src="assets/emoji-skull.gif"
                  alt="💀"
                  className="inline-skull"
                />
              </li>
            </ul>
          </div>
          <div className="step-visual">
            <div className="phone-shell">
              <img
                src="assets/screen-documents.png"
                alt="Документы по объекту в Byggexp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowLight;
