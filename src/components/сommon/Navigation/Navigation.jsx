import React from 'react';
import './Navigation.css';
import { useLocation, Link } from "react-router-dom";
import Menu from '../../../images/menu.svg';
import Close from '../../../images/close.svg';
import Profile from '../../../images/profile.svg';

function Navigation() {
  const [showMenu, setShowMenu] = React.useState(false);
  let location = useLocation();

  function handleShowMenu () {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="nav">
      {location.pathname === '/' ? (
        <div className="nav__auth">
          <Link className="nav__auth-item" to="/signup">
            Регистрация
          </Link>

          <Link className="nav__auth-item nav__auth-item_button" to="/signin">
            Войти
          </Link>
        </div>
      ) : (
        <div className="nav__default">
          <img className="nav__icon" onClick={handleShowMenu} src={Menu} alt="Навигационное меню" />
          {showMenu &&
            <div className="nav__dropdown">
              <img className="nav__close" src={Close} alt="Закрыть меню" onClick={handleShowMenu} />
              <div className="nav__menu">
                <Link
                  className={`nav__menu-item ${location.pathname === '/' ? 'nav__menu-item_active' : ''}`}
                  to="/"
                  onClick={handleShowMenu}
                >
                  Главная
                </Link>
                <Link
                  className={`nav__menu-item ${location.pathname === '/movies' ? 'nav__menu-item_active' : ''}`}
                  to="/movies"
                  onClick={handleShowMenu}
                >
                  Фильмы
                </Link>
                <Link
                  className={`nav__menu-item ${location.pathname === '/saved-movies' ? 'nav__menu-item_active' : ''}`}
                  to="/saved-movies"
                  onClick={handleShowMenu}
                >
                  Сохранённые фильмы
                </Link>
              </div>
              <div className="nav__profile">
                <Link
                  className="nav__profile-button"
                  to="/profile"
                  onClick={handleShowMenu}
                >
                  Аккаунт <img className="nav__profile-icon" src={Profile} alt="Аккаунт" />
                </Link>
              </div>
            </div>
          }
        </div>
      )
    }
    </nav>
  )
}

export default Navigation;
