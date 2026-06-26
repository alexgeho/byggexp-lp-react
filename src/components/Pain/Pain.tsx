import type { PainProps } from "../../types/pain";
import "./Pain.scss";



function Pain({ painT }: PainProps) {

  return (
    <section className="pain">

      <div className="container">

        <div className="pain-top">

          <div className="stat-big">
            80<span>%</span>
          </div>

          <div className="pain-header">

            <span className="eyebrowpain">{painT.painTitle}</span>

            <h2>{painT.painHeading}</h2>

          </div>
        </div>

        <div className="pain-list">

          <div className="pain-item">
            <span className="dash"></span>
            {painT.painItem1}
          </div>

          <div className="pain-item">
            <span className="dash"></span>
            {painT.painItem2}
          </div>

          <div className="pain-item">
            <span className="dash"></span>
            {painT.painItem3}
          </div>

          <div className="pain-item">
            <span className="dash"></span>
            {painT.painItem4}
          </div>
        </div>

        <div className="pain-conclusion">
          <strong>{painT.painResult}</strong> {painT.painResultText}
        </div>
        
      </div>
    </section>
  );
}

export default Pain;