import "./Why.scss";

type WhyProps = {
  whyT: {
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

function Why({ whyT }: WhyProps) {

  return (
    <section className="why">

      <div className="container">

        <div className="why-top">

          <div className="stat-big">
            80<span>%</span>
          </div>

          <div className="why-header">

            <span className="eyebrowWhy">{whyT.whyTitle}</span>

            <h2>{whyT.whyHeading}</h2>

          </div>
        </div>

        <div className="why-list">

          <div className="why-item">
            <span className="dash"></span>
            {whyT.whyItem1}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {whyT.whyItem2}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {whyT.whyItem3}
          </div>

          <div className="why-item">
            <span className="dash"></span>
            {whyT.whyItem4}
          </div>
        </div>

        <div className="why-conclusion">
          <strong>{whyT.whyResult}</strong> {whyT.whyResultText}
        </div>
        
      </div>
    </section>
  );
}

export default Why;