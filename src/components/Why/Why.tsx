import "./Why.scss";

function Why() {
  return (
    <section className="why">
      <div className="container">
        <div className="why-top">
          <div className="stat-big">
            80<span>%</span>
          </div>

          <div className="why-header">
            <span className="eyebrowWhy">Корень проблемы</span>

            <h2>
              компаний теряют деньги не из-за плохих работников, а потому что
              делают вручную то, что успешные давно автоматизирвали
            </h2>
          </div>
        </div>

        <div className="why-list">
          <div className="why-item">
            <span className="dash"></span>
            часы присылают в SMS или на бумаге — администрация вручную переносит
            их в Excel
          </div>

          <div className="why-item">
            <span className="dash"></span>
            рабочий забыл отправить часы — приходится звонить и напоминать
          </div>

          <div className="why-item">
            <span className="dash"></span>
            часы с объекта не совпали с данными заказчика — надо разбираться
          </div>

          <div className="why-item">
            <span className="dash"></span>
            секретарша тратит десятки часов на ручной ввод в Excel
          </div>
        </div>

        <div className="why-conclusion">
          <strong>Как результат:</strong> расходы сильно растут, счета уходят
          позже, а деньги зависают неделями ...
        </div>
      </div>
    </section>
  );
}

export default Why;