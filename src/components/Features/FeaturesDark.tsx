import "./features.scss";
import shiftsExport from "../../assets/features/shiftsExport.png";

import skull from "../../assets/emoji-skull.gif"

type FeaturesProps = {
  featuresT: {
    featuresTitle: string;

    featuresHeading1: string;
    featuresHeadingAccent: string;
    featuresHeading2: string;

    featuresSub: string;

    featuresCard1Title: string;
    featuresCard1Text: string;
    featuresCard1Step1: string;
    featuresCard1Step2: string;
    featuresCard1Step3: string;

    featuresCard2Title: string;
    featuresCard2Text: string;
    featuresCard2Step1: string;
    featuresCard2Step2: string;
    featuresCard2Step3: string;

    featuresCard3Title: string;
    featuresCard3Text: string;
    featuresCard3Step1: string;
    featuresCard3Step2: string;
    featuresCard3Step3: string;
  };
};

function FeaturesDark({ featuresT }: FeaturesProps) {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-head">
          <span className="eyebrow">{featuresT.featuresTitle}</span>

          <h2>
            {featuresT.featuresHeading1} <em>{featuresT.featuresHeadingAccent}</em>{" "}
            {featuresT.featuresHeading2}
          </h2>

          <p className="section-sub">{featuresT.featuresSub}</p>
        </div>

        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT.featuresCard1Title}</h3>

            <p className="step-text">{featuresT.featuresCard1Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT.featuresCard1Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT.featuresCard1Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT.featuresCard1Step3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img src={shiftsExport} alt="shiftsExport" />
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-text-block">
            <h3>{featuresT.featuresCard2Title}</h3>

            <p className="step-text">{featuresT.featuresCard2Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT.featuresCard2Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT.featuresCard2Step2}
              </li>

              <li>
                <span className="number">3</span>
                {featuresT.featuresCard2Step3}
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
            <h3>{featuresT.featuresCard3Title}</h3>

            <p className="step-text">{featuresT.featuresCard3Text}</p>

            <ul className="step-bullets">
              <li>
                <span className="number">1</span>
                {featuresT.featuresCard3Step1}
              </li>

              <li>
                <span className="number">2</span>
                {featuresT.featuresCard3Step2}
              </li>

              <li>
                <span className="check">
                  <svg viewBox="0 0 14 10" fill="none">
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m1 5 4 4 8-8"
                    />
                  </svg>
                </span>

                {featuresT.featuresCard3Step3}

                <img
                  src={skull}
                  alt=""
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

export default FeaturesDark;