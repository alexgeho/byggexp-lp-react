import "./CTA.scss";

type CTAProps = {
  ctaT: {
    ctaTitle: string;

    ctaHeading1: string;
    ctaAccent: string;
    ctaHeading2: string;

    ctaLead: string;

    ctaItem1: string;
    ctaItem2: string;
    ctaItem3: string;

    ctaFormTitle: string;

    ctaNameLabel: string;
    ctaNamePlaceholder: string;
    ctaNameError: string;

    ctaEmailLabel: string;
    ctaEmailPlaceholder: string;
    ctaEmailError: string;

    ctaPhoneLabel: string;
    ctaPhonePlaceholder: string;
    ctaPhoneError: string;

    ctaButton: string;

    ctaPrivacy: string;

    ctaSuccessTitle: string;
    ctaSuccessText: string;
  };
};

function CTA({ ctaT }: CTAProps) {
  return (
    <section className="cta" id="cta">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">{ctaT.ctaTitle}</span>

          <h2>
            {ctaT.ctaHeading1} <em>{ctaT.ctaAccent}</em> {ctaT.ctaHeading2}
          </h2>

          <p className="cta-lead">{ctaT.ctaLead}</p>

          <ul className="cta-list">
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
              {ctaT.ctaItem1}
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
              {ctaT.ctaItem2}
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
              {ctaT.ctaItem3}
            </li>
          </ul>
        </div>

        <div className="form-card" id="form-card">
          <div id="form-view">
            <h3>{ctaT.ctaFormTitle}</h3>

            <form id="demo-form" noValidate>
              <div className="form-group" data-field="name">
                <label htmlFor="f-name">{ctaT.ctaNameLabel}</label>

                <input
                  id="f-name"
                  name="name"
                  type="text"
                  placeholder={ctaT.ctaNamePlaceholder}
                  autoComplete="name"
                />

                <div className="err-msg">
                  {ctaT.ctaNameError}
                </div>
              </div>

              <div className="form-group" data-field="email">
                <label htmlFor="f-email">{ctaT.ctaEmailLabel}</label>

                <input
                  id="f-email"
                  name="email"
                  type="email"
                  placeholder={ctaT.ctaEmailPlaceholder}
                  autoComplete="email"
                />

                <div className="err-msg">
                  {ctaT.ctaEmailError}
                </div>
              </div>

              <div className="form-group" data-field="phone">
                <label htmlFor="f-phone">{ctaT.ctaPhoneLabel}</label>

                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  placeholder={ctaT.ctaPhonePlaceholder}
                  autoComplete="tel"
                />

                <div className="err-msg">
                  {ctaT.ctaPhoneError}
                </div>
              </div>

              <button type="submit" className="form-submit">
                {ctaT.ctaButton}
              </button>

              <p className="form-fine">
                {ctaT.ctaPrivacy}
              </p>
            </form>
          </div>

          <div id="form-success" className="form-success">
            <div className="form-success-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h3>{ctaT.ctaSuccessTitle}</h3>

            <p id="success-msg">
              {ctaT.ctaSuccessText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;