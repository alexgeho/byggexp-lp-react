import "./Benefits.scss";

type BenefitsSiteProps = {
  benefitsSiteT: {
    benefitsSiteLead: string;
    benefitsSiteCard1Title: string;
    benefitsSiteCard1Text: string;
    benefitsSiteCard2Title: string;
    benefitsSiteCard2Text: string;
    benefitsSiteCard3Title: string;
    benefitsSiteCard3Text: string;
    benefitsSiteCard4Title: string;
    benefitsSiteCard4Text: string;
  };
};

function BenefitsForSite({ benefitsSiteT }: BenefitsSiteProps) {
  return (
    <section className="benefits-team">
      <div className="container benefits-inner">
        <p className="solution-lead-team">{benefitsSiteT.benefitsSiteLead}</p>
        <div className="benefits-grid">
          <div className="benefit-card-team">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3>{benefitsSiteT.benefitsSiteCard1Title}</h3>
            <p>{benefitsSiteT.benefitsSiteCard1Text}</p>
          </div>

          <div className="benefit-card-team">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>{benefitsSiteT.benefitsSiteCard2Title}</h3>
            <p>{benefitsSiteT.benefitsSiteCard2Text}</p>
          </div>

          <div className="benefit-card-team">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <h3>{benefitsSiteT.benefitsSiteCard3Title}</h3>
            <p>{benefitsSiteT.benefitsSiteCard3Text}</p>
          </div>

          <div className="benefit-card-team">
            <div className="benefit-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <h3>{benefitsSiteT.benefitsSiteCard4Title}</h3>
            <p>{benefitsSiteT.benefitsSiteCard4Text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsForSite;
