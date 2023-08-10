import React from 'react';
import './Navigation.css';
import { useLocation, Link } from "react-router-dom";
import Menu from '../../../../images/menu.svg';
import Close from '../../../../images/close.svg';
import ButtonProfile from "../../ButtonProfile/ButtonProfile";
import useWindowDimensions from "../../../../hooks/windowDimensions";
import NavDropdown from "../NavDropdown/NavDropdown";

function Navigation() {
  const [showMenu, setShowMenu] = React.useState(false);
  let location = useLocation();
  const { width } = useWindowDimensions();

  function handleShowMenu () {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="nav">
      {location.pathname === '/' ? (
        <div className="nav__auth">
          <Link className="nav__auth-item" to="/signup">Регистрация</Link>
          <Link className="nav__auth-item nav__auth-item_button" to="/signin">Войти</Link>
        </div>
      ) : (
        width < 768 && location.pathname !== '/'  ? (
          <div className="nav__default">
            <img className="nav__icon" onClick={handleShowMenu} src={Menu} alt="Навигационное меню" />
            {showMenu && <NavDropdown onClose={handleShowMenu} />}
          </div>
        ) : (
          <div className="nav__route">
            <div className="nav__route-links">
              <Link className="nav__route-link" to="/movies">
                Фильмы
              </Link>
              <Link className="nav__route-link" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </div>
            <div className="header__button-profile"><ButtonProfile/></div>
        </div>
        )

      )
    }
    </nav>
  )
}

export default Navigation;
