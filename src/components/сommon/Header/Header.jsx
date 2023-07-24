import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.svg';
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <Link className="header__route" to="/">
        <img className="header__logo" src={Logo} alt="Логотип" />
      </Link>
      <Navigation/>
    </header>
  )
}

export default Header;
