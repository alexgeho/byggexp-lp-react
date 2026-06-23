import "./Features.scss";

type FeaturesLightProps = {
  featuresLightT: {
    featuresLightCard1Title: string;
    featuresLightCard1Text: string;
    featuresLightCard1Item1: string;
    featuresLightCard1Item2: string;
    featuresLightCard1Item3: string;

    featuresLightCard2Title: string;
    featuresLightCard2Text: string;
    featuresLightCard2Item1: string;
    featuresLightCard2Item2: string;
    featuresLightCard2Item3: string;
  };
};

function FeaturesLight({ featuresLightT }: FeaturesLightProps) {
  return (
    <section className="featuresLight" id="features">
      <div className="container">
        <div className="step">
          <div className="step-text-block">
            <h3>{featuresLightT.featuresLightCard1Title}</h3>

            <p className="step-text">
              {featuresLightT.featuresLightCard1Text}
            </p>

            <ul className="step-bullets">
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
                {featuresLightT.featuresLightCard1Item1}
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
                {featuresLightT.featuresLightCard1Item2}
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
                {featuresLightT.featuresLightCard1Item3}
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
            <h3>{featuresLightT.featuresLightCard2Title}</h3>

            <p className="step-text">
              {featuresLightT.featuresLightCard2Text}
            </p>

            <ul className="step-bullets">
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
                {featuresLightT.featuresLightCard2Item1}
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
                {featuresLightT.featuresLightCard2Item2}
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
                {featuresLightT.featuresLightCard2Item3}
              </li>
            </ul>
          </div>

          <div className="step-visual">
            <div className="phone-shell">
              <img
                src="assets/screen-shift.png"
                alt="Учёт смен в Byggexp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesLight;