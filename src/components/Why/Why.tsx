import type { WhyProps } from "../../types/pain";
import "./Why.scss";



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