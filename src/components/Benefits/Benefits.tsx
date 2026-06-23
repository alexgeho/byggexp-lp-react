import "./Benefits.scss";
import type { BenefitsProps } from "../../types/benefits";

function Benefits({ benefitsT }: BenefitsProps) {
  return (
    <section className="benefits">
      {/* HEADER */}
      <div className="benefits-header">
        <span className="eyebrow">       

          {benefitsT.office.benefitsOfficeTitle} </span>
          <h2>
            {benefitsT.office.benefitsOfficeHeading1}{" "}
            <em>{benefitsT.office.benefitsOfficeAccent}</em>
            {benefitsT.office.benefitsOfficeHeading2}
          </h2>
      </div>

      {/* BENEFITS-BOTH */}
      <div className="benefitsBoth">
        {/* FOR OFFICE */}

        <div className="benefits-office">
          <div className="solution-lead">{benefitsT.office.benefitsOfficeLead}</div>

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
              <h3>{benefitsT.office.benefitsOfficeCard1Title}</h3>
              <p>{benefitsT.office.benefitsOfficeCard1Text}</p>
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
              <h3>{benefitsT.office.benefitsOfficeCard2Title}</h3>
              <p>{benefitsT.office.benefitsOfficeCard2Text}</p>
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
              <h3>{benefitsT.office.benefitsOfficeCard3Title}</h3>
              <p>{benefitsT.office.benefitsOfficeCard3Text}</p>
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
              <h3>{benefitsT.office.benefitsOfficeCard4Title}</h3>
              <p>{benefitsT.office.benefitsOfficeCard4Text}</p>
            </div>
          </div>
        </div>

        {/* FOR TEAM */}

        <div className="benefits-office">
          <p className="solution-lead">{benefitsT.site.benefitsSiteLead}</p>
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
              <h3>{benefitsT.site.benefitsSiteCard1Title}</h3>
              <p>{benefitsT.site.benefitsSiteCard1Text}</p>
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
              <h3>{benefitsT.site.benefitsSiteCard2Title}</h3>
              <p>{benefitsT.site.benefitsSiteCard2Text}</p>
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
              <h3>{benefitsT.site.benefitsSiteCard3Title}</h3>
              <p>{benefitsT.site.benefitsSiteCard3Text}</p>
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
              <h3>{benefitsT.site.benefitsSiteCard4Title}</h3>
              <p>{benefitsT.site.benefitsSiteCard4Text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
