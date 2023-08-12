import React from 'react';
import './NavDropdown.css';
import { useLocation, Link } from "react-router-dom";
import Close from '../../../../images/close.svg';
import ButtonProfile from "../../ButtonProfile/ButtonProfile";

function NavDropdown( { onClose } ) {
  let location = useLocation();

  return (
    <>
      <div className="nav__dropdown">
        <button className="nav__button-close">
          <img className="nav__close" src={Close} alt="Закрыть меню" onClick={onClose} />
        </button>
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <Link
              className={`nav__menu-link ${location.pathname === '/' ? 'nav__menu-link_active' : ''}`}
              to="/"
              onClick={onClose}
            >
              Главная
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link
              className={`nav__menu-link ${location.pathname === '/movies' ? 'nav__menu-link_active' : ''}`}
              to="/movies"
              onClick={onClose}
            >
              Фильмы
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link
              className={`nav__menu-link ${location.pathname === '/saved-movies' ? 'nav__menu-link_active' : ''}`}
              to="/saved-movies"
              onClick={onClose}
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <div className="nav__button-profile">
          <ButtonProfile showMenu={onClose}/>
        </div>
      </div>
      <div className="nav__overlay"></div>
    </>
  )
}

export default NavDropdown;
