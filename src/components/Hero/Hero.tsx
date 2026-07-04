import "./Hero.scss";
import phone from "../../assets/hero/phone-3d.png";
import type { HeroProps } from "../../types/hero";
import { useState } from "react";

function Hero({ heroT }: HeroProps) {
  const [wholeText, setWholeText] = useState(false);

  return (
    <section className="hero">
      <div className="container">
        <span className="pill-mobile">
          <span className="pill-dot-mobile">●</span>
          {heroT.heroPill}
        </span>

        <div className="hero-inner">
          {/* HERO CONTENT */}
          <div className="hero-content">
            <span className="pill-desktop">
              <span className="pill-dot"></span>
              {heroT.heroPill}
            </span>

            <h1>
              {heroT.heroTitle}
              <em> {heroT.heroTitleAccent}</em>
            </h1>

            <div className="footer-desktop ">
              {" "}
              <p className="hero-sub">{heroT.heroSubtitle}</p>
              <div className="hero-ctas">
                <a href="#cta" className="btn-primary">
                  {heroT.heroDemo}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7"></path>
                  </svg>
                </a>
                <a href="#features" className="btn-ghost">
                  {heroT.heroHow}
                </a>
              </div>
              {/* META */}
              <div className="hero-meta">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {heroT.heroFeature1}
                </span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {heroT.heroFeature2}
                </span>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {heroT.heroFeature3}
                </span>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <img src={phone} alt="Byggexp mobile" className="hero-phone" />
          </div>
        </div>

        <div className="footer-mobile">
          {" "}
          <div className="hero-sub">
            <span>
              {wholeText ? heroT.heroSubtitle : heroT.heroSubtitleShort}
            </span>

            <button
              type="button"
              className="hero-sub-toggle"
              onClick={() => setWholeText(!wholeText)}
            >
              {wholeText ? heroT.heroSubtitleBtnLess : heroT.heroSubtitleBtnMore}
            </button>
          </div>
          <div className="hero-ctas">
            <a href="#cta" className="btn-primary">
              {heroT.heroDemo}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7"></path>
              </svg>
            </a>
            <a href="#features" className="btn-ghost">
              {heroT.heroHow}
            </a>
          </div>
          {/* META */}
          <div className="hero-meta">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {heroT.heroFeature1}
            </span>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {heroT.heroFeature2}
            </span>
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {heroT.heroFeature3}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
