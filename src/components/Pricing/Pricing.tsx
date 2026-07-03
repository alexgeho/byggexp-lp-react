import { useState } from "react";
import "./Pricing.scss";
import type { PricingProps } from "../../types/pricing";


/* BUTTONS */
function Pricing({ pricingT }: PricingProps) {
  const [isYearly, setYearly] = useState(false);

  function togglePeriod() {
    setYearly(!isYearly);
  }

  const basePrice50 = 499;

  const basePrice90 = 899;

  const basePrice180 = 1799;

  function priceDeducter(price:number) {
    return !isYearly ? price : price * 0.9
  }

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        
        <div className="section-head">
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
            <span className="pricing-tag pricing-tag-starter">{pricingT.pricingPer1}</span>

            <div className="pricing-price">
              <span className="num">
                {priceDeducter(basePrice50)} SEK</span>

              <span className="per">{pricingT.pricingPer}</span>
            </div>

            <p className="pricing-sub">{pricingT.priceDescription1}</p>

            <ul className="pricing-list">
              <li>
                <span className="check check-green">
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
                <span className="check check-green">
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
                <span className="check check-green">
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
                <span className="check check-green">
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
            <span className="pricing-tag pricing-tag-orange">{pricingT.pricingPer10}</span>

            <div className="pricing-price">
              <span className="num">{priceDeducter(basePrice90)} SEK</span>

              <span className="per">{pricingT.pricingPer}</span>
            </div>

            <p className="pricing-sub">{pricingT.priceDescription2}</p>

            <ul className="pricing-list">
              <li>
                <span className="check check-orange">
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
                <span className="check check-orange">
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
                <span className="check check-orange">
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
                <span className="check check-orange">
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
            <span className="pricing-tag pricing-tag-proffesional">{pricingT.pricingPer20}</span>

            <div className="pricing-price">
              <span className="num">{priceDeducter(basePrice180)} SEK</span>

              <span className="per">{pricingT.pricingPer}</span>
            </div>

            <p className="pricing-sub">{pricingT.priceDescription3}</p>

            <ul className="pricing-list">
              <li>
                <span className="check check-blue">
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
                <span className="check check-blue">
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
                <span className="check check-blue">
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
                <span className="check check-blue">
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
            <span className="pricing-tag pricing-tag-purple">{pricingT.pricingPer40}</span>

            <div className="pricing-price">
              <span className="num">{pricingT.pricingCustom}</span>
            </div>

            <p className="pricing-sub">{pricingT.priceDescription4}</p>

            <ul className="pricing-list">
              <li>
                <span className="check check-purple">
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
                <span className="check check-purple">
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
                <span className="check check-purple">
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
                <span className="check check-purple">
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
