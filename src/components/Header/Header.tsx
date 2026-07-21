import "./Header.scss";
import logo from "../../assets/header/logo.svg";
import burger from "../../assets/header/burger.svg";
import close from "../../assets/header/close.svg";
import down from "../../assets/header/down.svg";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { languages, selectableLanguages } from "../../locales/languages";
import type { HeaderProps } from "../../types/header";

function Header({ headerT }: HeaderProps) {
  /* BURGER NAV */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
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
          {/* LANGUAGE */}
          {!isMenuOpen && (
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
                  {Object.entries(selectableLanguages).map(([code, language]) => (
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
          )}

          {/* NAV LINKS */}
          <div className={isMenuOpen ? "nav-links open" : "nav-links"}>
            <a href="#features" onClick={closeMenu}>{headerT.how}</a>
            <a href="#pricing" onClick={closeMenu}>{headerT.pricing}</a>
            <a href="#cta" onClick={closeMenu}>{headerT.company}</a>
            <Link to={`/${lang}/contact`} onClick={closeMenu}>{headerT.contact}</Link>

            {/* MOBILET LANGUAGE */}
            <div className="mobile-language">
              <button
                type="button"
                className="language-selector"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={currentLanguage.flag} alt="" />
                <span>{currentLanguage.label}</span>

                <img
                  src={down}
                  alt=""
                  className={isOpen ? "language-arrow open" : "language-arrow"}
                />
              </button>

              {isOpen && (
                <div className="language-dropdown">
                  {Object.entries(selectableLanguages).map(([code, language]) => (
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
            {/* MOBILET LANGUAGE END*/}

            {/* CTA BTN */}
            <a href="#cta" className="nav-cta" onClick={closeMenu}>
              {headerT.demo}
            </a>
            {/* CTA BTN END*/}
          </div>
          {/* BURGER */}
          <button className="burger" id="burger" onClick={openMenu}>
            <img
              src={isMenuOpen ? close : burger}
              alt=""
              className={isMenuOpen ? "close-icon" : "burger-icon"}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
