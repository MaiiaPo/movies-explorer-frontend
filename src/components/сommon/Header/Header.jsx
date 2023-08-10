import './Header.css';
import { useLocation, Link } from "react-router-dom";
import Logo from '../../../images/logo.svg';
import Navigation from "../Navigation/Navigation/Navigation";
import ButtonProfile from "../ButtonProfile/ButtonProfile";
import useWindowDimensions from "../../../hooks/windowDimensions";

function Header() {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <header className={`header ${location.pathname === '/' ? 'header_pink' : ''}` }>
      <Link className="header__route" to="/">
        <img className="header__logo" src={Logo} alt="Логотип" />
      </Link>
      <div className="header__nav">
        {location.pathname !== '/signin' && location.pathname !== '/signup' && <Navigation/>}
      </div>
    </header>
  )
}

export default Header;
