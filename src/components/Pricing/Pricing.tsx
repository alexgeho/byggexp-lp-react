import "./Pricing.scss";

type PricingProps = {
  pricingT: {
    pricingTitle: string;
    pricingHeading: string;
    pricingSub: string;

    pricingTag: string;

    pricingPrice: string;
    pricingPer: string;

    pricingDescription: string;

    pricingItem1: string;
    pricingItem2: string;
    pricingItem3: string;
    pricingItem4: string;

    pricingButton: string;
    pricingTrial: string;
  };
};

function Pricing({ pricingT }: PricingProps) {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-head">
          <span className="eyebrow">{pricingT.pricingTitle}</span>

          <h2>{pricingT.pricingHeading}</h2>

          <p className="section-sub">
            {pricingT.pricingSub}
          </p>
        </div>

        <div className="pricing-card">
          <span className="pricing-tag">
            {pricingT.pricingTag}
          </span>

          <div className="pricing-price">
            <span className="num">
              {pricingT.pricingPrice}
            </span>

            <span className="per">
              {pricingT.pricingPer}
            </span>
          </div>

          <p className="pricing-sub">
            {pricingT.pricingDescription}
          </p>

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

          <span className="pricing-trial">
            {pricingT.pricingTrial}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Pricing;