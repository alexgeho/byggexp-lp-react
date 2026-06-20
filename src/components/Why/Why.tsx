import "./Why.scss"

function Why() {
    return (
        <section className="why">
      <div className="container why-inner">
        <div className="stat-big">80<span>%</span></div>
        <div>
          <span className="eyebrowWhy">Корень проблемы</span>
          <h2>
            компаний теряют деньги не из-за плохих работников, а потому что
            делают вручную то, что успешные давно автоматизирвали
          </h2>
          <ul className="why-list">
            <li>
              <span className="dash"></span>строитель забыл вечером отправить часы -
              и счет Вам не отправить
            </li>
            <li>
              <span className="dash"></span>прораб записал не всех - начинается
              валакита
            </li>
            <li>
              <span className="dash"></span>часы с объекта не совпали с данными
              заказчика - надо разбираться
            </li>
            <li>
              <span className="dash"></span>секретарша тратит 10-ки часов на ручноц
              ввод в Excel таблицу - надо ей платить
            </li>
          </ul>
          <div className="why-conclusion">
            <strong>Как результат:</strong> расходы сильно растут, счета уходят
            позже, а деньги зависают неделями ...
          </div>
        </div>
      </div>
    </section>
    )
}

export default Why;