import "./Header.scss";
import logo from "../../assets/header/logo.svg";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { languages } from "../../locales/languages";

type HeaderProps = {
  t: {
    how: string;
    pricing: string;
    company: string;
    demo: string;
  };
};

function Header({ t }: HeaderProps) {
  const { lang = "sv" } = useParams();
  const currentLanguage = languages[lang as keyof typeof languages];

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function changeLanguage(language: string) {
    navigate(`/${language}`);
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav">
        <Link to={`/${lang}`} className="nav-logo">
          <img src={logo} alt="ByggExp" />
        </Link>

        <div className="nav-links">
          <div className="language-switcher">
            <button
              type="button"
              className="language-selector"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img src={currentLanguage.flag} alt="" />
              <span>{currentLanguage.label}</span>
            </button>

            {isOpen && (
              <div className="language-dropdown">
                {Object.entries(languages).map(([code, language]) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => changeLanguage(code)}
                  >
                    <img src={language.flag} alt="" />
                    <span>{language.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#how">{t.how}</a>
          <a href="#pricing">{t.pricing}</a>
          <a href="#cta">{t.company}</a>

          <a href="#demo" className="nav-cta">
            {t.demo}
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
