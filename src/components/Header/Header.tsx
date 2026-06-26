import "./Header.scss";
import logo from "../../assets/header/logo.svg";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { languages } from "../../locales/languages";
import type { HeaderProps } from "../../types/header";



function Header({ headerT }: HeaderProps) {
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

          <a href="#features">{headerT.how}</a>
          <a href="#pricing">{headerT.pricing}</a>
          <a href="#cta">{headerT.company}</a>

          <a href="#cta" className="nav-cta">
            {headerT.demo}
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
