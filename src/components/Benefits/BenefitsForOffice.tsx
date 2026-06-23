import "./Benefits.scss";

type BenefitsOfficeProps = {
  benefitsOfficeT: {
    benefitsOfficeTitle: string;
    benefitsOfficeHeading1: string;
    benefitsOfficeAccent: string;
    benefitsOfficeHeading2: string;
    benefitsOfficeLead: string;
    benefitsOfficeCard1Title: string;
    benefitsOfficeCard1Text: string;
    benefitsOfficeCard2Title: string;
    benefitsOfficeCard2Text: string;
    benefitsOfficeCard3Title: string;
    benefitsOfficeCard3Text: string;
    benefitsOfficeCard4Title: string;
    benefitsOfficeCard4Text: string;
  };
};

function BenefitsForOffice({ benefitsOfficeT }: BenefitsOfficeProps) {
  return (
    <section className="benefits">
      <div className="container benefits-inner">
        <div className="benefits-header">
          <span className="eyebrow">{benefitsOfficeT.benefitsOfficeTitle}</span>

          <h2>
            {benefitsOfficeT.benefitsOfficeHeading1}{" "}
            <em>{benefitsOfficeT.benefitsOfficeAccent}</em>
            {benefitsOfficeT.benefitsOfficeHeading2}
          </h2>
        </div>

        <p className="solution-lead">
          {benefitsOfficeT.benefitsOfficeLead}
        </p>

        <div className="benefits-grid">
          <div className="benefit-card">
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
            <h3>{benefitsOfficeT.benefitsOfficeCard1Title}</h3>
            <p>{benefitsOfficeT.benefitsOfficeCard1Text}</p>
          </div>

          <div className="benefit-card">
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
            <h3>{benefitsOfficeT.benefitsOfficeCard2Title}</h3>
            <p>{benefitsOfficeT.benefitsOfficeCard2Text}</p>
          </div>

          <div className="benefit-card">
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
            <h3>{benefitsOfficeT.benefitsOfficeCard3Title}</h3>
            <p>{benefitsOfficeT.benefitsOfficeCard3Text}</p>
          </div>

          <div className="benefit-card">
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
            <h3>{benefitsOfficeT.benefitsOfficeCard4Title}</h3>
            <p>{benefitsOfficeT.benefitsOfficeCard4Text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsForOffice;
