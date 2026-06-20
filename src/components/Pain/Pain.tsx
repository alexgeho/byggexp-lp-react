import "./Pain.scss";

function Pain() {
return (
      <section className="pain">
      <div className="container">
        <div className="pain-head">
          <h2>Знакомо?</h2>
        </div>
        <div className="pain-grid">
          <div className="pain-card">
            <div className="pain-icon">?</div>
            <p>Вечно напоминаешь строителям об своевременной отправке часов?</p>
          </div>
          <div className="pain-card">
            <div className="pain-icon">?</div>
            <p>Тратишь безценное время на ручной ввод рабочих часов в Excel?</p>
          </div>
          <div className="pain-card">
            <div className="pain-icon">?</div>
            <p>
              Не можешь выставить счет, строитель опять забыл прислать часы?
            </p>
          </div>
          <div className="pain-card">
            <div className="pain-icon">?</div>
            <p>Поданное рабочее время не стыкуется с данными заказчика?</p>
          </div>
        </div>
        <p className="pain-footer">
          Листай дальше — расскажем,
          <strong>почему возникают эти проблемы</strong>.
        </p>
      </div>
    </section>
)    
}

export default Pain;