import "./Footer.scss"
import logo from "../../assets/header/logo.svg"

function Footer() {

    return (

    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <img src={logo} alt="Byggexp" />
        </div>
        <div className="footer-meta">
          <span>© 2026 Byggexp</span>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия</a>
          <a href="mailto:hello@byggexp.com">hello@byggexp.com</a>
        </div>
      </div>
    </footer>
    )
    
}

export default Footer;