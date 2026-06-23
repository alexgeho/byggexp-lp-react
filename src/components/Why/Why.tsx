import "./Why.scss";

type WhyProps = {
  translation: {
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

function Why({ translation }: WhyProps) {

  return (
    <section className="why">

      <div className="container">

        <div className="why-top">

          <div className="stat-big">
            80<span>%</span>
          </div>

          <div className="why-header">

            <span className="eyebrowWhy">{translation.whyTitle}</span>

            <h2>{translation.whyHeading}</h2>

          </div>
        </div>

        <div className="why-list">

          <div className="why-item">
            <span className="dash"></span>
            {translation.whyItem1}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {translation.whyItem2}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {translation.whyItem3}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {translation.whyItem4}
          </div>
        </div>

        <div className="why-conclusion">
          <strong>{translation.whyResult}</strong> {translation.whyResultText}
        </div>
        
      </div>
    </section>
  );
}

export default Why;