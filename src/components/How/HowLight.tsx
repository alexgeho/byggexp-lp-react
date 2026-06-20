import "./How.scss";

function HowLight() {
  return (
    <section className="howLight" id="how">
      <div className="container">

        <div className="step">
          <div className="step-text-block">
            <h3>Документы в одном месте</h3>
            <p className="step-text">
              Чертежи, спецификации, фото и график смен — в папке проекта и
              доступно в пару кликов. Никаких «скинь мне на почту, потом
              перезвони».
            </p>
            <ul className="step-bullets">
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
                Каждому проекту своя отдельная папка
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
                История изменений, кто добавлял, скачивал документ
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
                Работает офлайн, синхронизируется когда появится связь
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
            <h3>Смены и фотоотчеты</h3>
            <p className="step-text">
              Запускаешь смену в один клик — приложение само фиксирует
              геолокацию, длительность, ты тока делаешь, где надо, фото текущих
              работ. В конце недели — готовый табель и отчёт для заказчика.
            </p>
            <ul className="step-bullets">
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
                Таймер смены с привязкой к адресу объекта
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
                Фото работ с датой и геоданными в одном альбоме
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
                Недельный отчёт по бригаде формируется автоматически
              </li>
            </ul>
          </div>
          <div className="step-visual">
            <div className="phone-shell">
              <img src="assets/screen-shift.png" alt="Учёт смен в Byggexp" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowLight;
