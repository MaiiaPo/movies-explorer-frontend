import './Header.css';
import { useLocation, Link } from "react-router-dom";
import Logo from '../../../images/logo.svg';
import Navigation from "../Navigation/Navigation";

function Header() {
  const location = useLocation();

  return (
    <header
      className={`header ${location.pathname === '/' ? 'header_backgroundColor' : ''}` }
    >
      <Link className="header__route" to="/">
        <img className="header__logo" src={Logo} alt="Логотип" />
      </Link>
      {location.pathname !== '/signin' && location.pathname !== '/signup' && <Navigation/>}
    </header>
  )
}

export default Header;
