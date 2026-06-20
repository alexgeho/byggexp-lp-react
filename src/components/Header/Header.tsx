import "./Header.scss";
import logo from "../../assets/header/logo.svg"

function Header(){
    return (
    <header className="site-header">
      <nav className="nav">
        <a href="#" className="nav-logo"
          ><img src={logo} alt="Byggexp"
        /></a>
        <div className="nav-links">
          <a href="#how">Как работает</a>
          <a href="#pricing">Цены</a>
          <a href="#cta">О компании</a>
          <a href="#cta" className="nav-cta">Записаться на демо</a>
        </div>
      </nav>
    </header>
    )
}

export default Header;