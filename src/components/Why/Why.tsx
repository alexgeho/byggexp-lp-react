import "./Why.scss";

type WhyProps = {
  t: {
    whyTitle: string;
    whyHeading: string;
    whyItem1: string;
    whyItem2: string;
    whyItem3: string;
    whyItem4: string;
    whyResult: string;
    whyResultText: string;
  };
};

function Why({ t }: WhyProps) {

  return (
    <section className="why">

      <div className="container">

        <div className="why-top">

          <div className="stat-big">
            80<span>%</span>
          </div>

          <div className="why-header">

            <span className="eyebrowWhy">{t.whyTitle}</span>

            <h2>{t.whyHeading}</h2>

          </div>
        </div>

        <div className="why-list">

          <div className="why-item">
            <span className="dash"></span>
            {t.whyItem1}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {t.whyItem2}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {t.whyItem3}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {t.whyItem4}
          </div>
        </div>

        <div className="why-conclusion">
          <strong>{t.whyResult}</strong> {t.whyResultText}
        </div>
        
      </div>
    </section>
  );
}

export default Why;