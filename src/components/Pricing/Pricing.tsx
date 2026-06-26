import { useState } from "react";
import "./Pricing.scss";

type PricingProps = {
  pricingT: {
    pricingTitle: string;
    pricingHeading: string;
    pricingSub: string;

    pricingTag: string;

    pricingPer: string;
    pricingPer1: string;
    pricingPer10: string;
    pricingPer20: string;
    pricingPer40: string;
    pricingCustom: string;

    pricingDescription: string;

    pricingItem1: string;
    pricingItem2: string;
    pricingItem3: string;
    pricingItem4: string;

    pricingButton: string;
    pricingTrial: string;
  };
};

/* BUTTONS */
function Pricing({ pricingT }: PricingProps) {
  const [isYearly, setYearly] = useState(false);

  function togglePeriod() {
    setYearly(!isYearly);
  }

  const basePrice50 = 50;
  const price50 = !isYearly ? basePrice50 : basePrice50 * 0.9;

  const basePrice90 = 90;
  const price90 = !isYearly ? basePrice90 : basePrice90 * 0.9;

  const basePrice180 = 180;
  const price180 = !isYearly ? basePrice180 : basePrice180 * 0.9;

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow">{pricingT.pricingTitle}</span>

          <h2>{pricingT.pricingHeading}</h2>

          <p className="section-sub">{pricingT.pricingSub}</p>
        </div>

        {/* CARDs */}
        {/* BUTTONS */}
        <div className="toggleMonthYearPrice">
          <button
            onClick={togglePeriod}
            className={!isYearly ? "toggleButtonActive" : "toggleButton"}
          >
            Monthly
          </button>

          <button
            onClick={togglePeriod}
            className={isYearly ? "toggleButtonActive" : "toggleButton"}
          >
            Yearly - 10% off
          </button>
        </div>

        <div className="pricingOptions">
          {/* CARD 1 */}
          <div className="pricing-card">
            <span className="pricing-tag">{pricingT.pricingPer1}</span>

            <div className="pricing-price">
              <span className="num">{price50}</span>

              <span className="per">{pricingT.pricingPer}</span>
            </div>

            <p className="pricing-sub">{pricingT.pricingDescription}</p>

            <ul className="pricing-list">
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
                {pricingT.pricingItem1}
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
                {pricingT.pricingItem2}
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
                {pricingT.pricingItem3}
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
                {pricingT.pricingItem4}
              </li>
            </ul>

            <a href="#cta" className="btn-primary">
              {pricingT.pricingButton}
            </a>

            <span className="pricing-trial">{pricingT.pricingTrial}</span>
          </div>

          {/* CARD 2 */}
          <div className="pricing-card">
            <span className="pricing-tag">{pricingT.pricingPer10}</span>

            <div className="pricing-price">
              <span className="num">{price90}</span>

              <span className="per">{pricingT.pricingPer}</span>
            </div>

            <p className="pricing-sub">{pricingT.pricingDescription}</p>

            <ul className="pricing-list">
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
                {pricingT.pricingItem1}
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
                {pricingT.pricingItem2}
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
                {pricingT.pricingItem3}
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
                {pricingT.pricingItem4}
              </li>
            </ul>

            <a href="#cta" className="btn-primary">
              {pricingT.pricingButton}
            </a>

            <span className="pricing-trial">{pricingT.pricingTrial}</span>
          </div>

          {/* CARD 3 */}
          <div className="pricing-card">
            <span className="pricing-tag">{pricingT.pricingPer20}</span>

            <div className="pricing-price">
              <span className="num">{price180}</span>

              <span className="per">{pricingT.pricingPer}</span>
            </div>

            <p className="pricing-sub">{pricingT.pricingDescription}</p>

            <ul className="pricing-list">
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
                {pricingT.pricingItem1}
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
                {pricingT.pricingItem2}
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
                {pricingT.pricingItem3}
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
                {pricingT.pricingItem4}
              </li>
            </ul>

            <a href="#cta" className="btn-primary">
              {pricingT.pricingButton}
            </a>

            <span className="pricing-trial">{pricingT.pricingTrial}</span>
          </div>

          {/* CARD 4 */}
          <div className="pricing-card">
            <span className="pricing-tag">{pricingT.pricingPer40}</span>

            <div className="pricing-price">
              <span className="num">{pricingT.pricingCustom}</span>
            </div>

            <p className="pricing-sub">{pricingT.pricingDescription}</p>

            <ul className="pricing-list">
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
                {pricingT.pricingItem1}
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
                {pricingT.pricingItem2}
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
                {pricingT.pricingItem3}
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
                {pricingT.pricingItem4}
              </li>
            </ul>

            <a href="#cta" className="btn-primary">
              {pricingT.pricingButton}
            </a>

            <span className="pricing-trial">{pricingT.pricingTrial}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
