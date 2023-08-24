import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";
import Menu from '../../../../images/menu.svg';
import ButtonProfile from "../../ButtonProfile/ButtonProfile";
import useWindowDimensions from "../../../../hooks/windowDimensions";
import NavDropdown from "../NavDropdown/NavDropdown";

function Navigation({ loggedIn }) {
  const [showMenu, setShowMenu] = React.useState(false);
  const { width } = useWindowDimensions();

  function handleShowMenu () {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="nav">
      { loggedIn ? (
        width < 768 ? (
          <>
            <button type="button" className="nav__default">
              <img className="nav__icon" onClick={handleShowMenu} src={Menu} alt="Навигационное меню" />
            </button>
            {showMenu && <NavDropdown onClose={handleShowMenu} />}
          </>
        ) : (
          <div className="nav__route">
            <div className="nav__route-links">
              <NavLink
                className="nav__route-link"
                activeClassName="nav__route-link_active"
                to="/movies"
              >
                Фильмы
              </NavLink>
              <NavLink
                className="nav__route-link"
                activeClassName="nav__route-link_active"
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </div>
            <div className="header__button-profile"><ButtonProfile/></div>
          </div>
        )
      ) : (
        <div className="nav__auth">
          <Link className="nav__auth-item" to="/signup">Регистрация</Link>
          <Link className="nav__auth-item nav__auth-item_button" to="/signin">Войти</Link>
        </div>
      )
    }
    </nav>
  )
}

export default Navigation;
