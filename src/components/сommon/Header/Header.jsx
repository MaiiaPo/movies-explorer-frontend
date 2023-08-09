import './Header.css';
import { useLocation, Link } from "react-router-dom";
import Logo from '../../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import ButtonProfile from "../ButtonProfile/ButtonProfile";
import useWindowDimensions from "../../../hooks/windowDimensions";

function Header() {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <header className={`header ${location.pathname === '/' ? 'header_backgroundColor' : ''}` }>
      <div className="header__left">
        <Link className="header__route" to="/">
          <img className="header__logo" src={Logo} alt="Логотип" />
        </Link>
        {width >= 768 &&
          <div className="header__route-links">
            <Link className="header__route-link" to="/movies">
              Фильмы
            </Link>
            <Link className="header__route-link" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </div>
        }
      </div>
      <div className="header__right">
        {width >= 768
          ? (<div className="button-profile-container"><ButtonProfile/></div>)
          : (location.pathname !== '/signin' && location.pathname !== '/signup' && <Navigation/>)
        }
      </div>
    </header>
  )
}

export default Header;
