import './Header.css';
import { useLocation, Link } from "react-router-dom";
import Logo from '../../../images/logo.svg';
import Navigation from "../Navigation/Navigation/Navigation";

function Header({ loggedIn }) {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' ? 'header_pink' : ''}` }>
      <Link className="header__route" to="/">
        <img className="header__logo" src={Logo} alt="Логотип" />
      </Link>
      <div className="header__nav">
        {location.pathname !== '/signin' && location.pathname !== '/signup' && <Navigation loggedIn={loggedIn}/>}
      </div>
    </header>
  )
}

export default Header;
