import "./Header.scss";
import logo from "../../assets/header/logo.svg";
import burger from "../../assets/header/burger.svg";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { languages } from "../../locales/languages";
import type { HeaderProps } from "../../types/header";

function Header({ headerT }: HeaderProps) {
  /* BURGER NAV */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  /*  */

  /* LANG */
  const { lang = "sv" } = useParams();
  const currentLanguage = languages[lang as keyof typeof languages];

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function changeLanguage(language: string) {
    navigate(`/${language}`);
    setIsOpen(false);
  }
  /*  */
  return (
    <header className="site-header">
      <nav className="nav">
        {/* LOGO */}
        <Link to={`/${lang}`} className="nav-logo">
          <img src={logo} alt="ByggExp" />
        </Link>

        {/* NAV RIGHT */}
        <div className="nav-right">
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
          {/* NAV LINKS */}
          <div className={isMenuOpen ? "nav-links open" : "nav-links"}>
            <a href="#features">{headerT.how}</a>
            <a href="#pricing">{headerT.pricing}</a>
            <a href="#cta">{headerT.company}</a>

            <a href="#cta" className="nav-cta">
              {headerT.demo}
            </a>
          </div>

          {/* BURGER */}
          <button className="burger" id="burger" onClick={openMenu}>
            <img src={burger} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
