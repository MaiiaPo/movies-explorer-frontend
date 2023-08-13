import './ButtonProfile.css';
import {Link} from "react-router-dom";
import Profile from "../../../images/profile.svg";
import React from "react";

function ButtonProfile({showMenu}) {
  return (
    <div className="button-profile" onClick={showMenu}>
      <Link
        className="button-profile__button"
        to="/profile"
      >
        Аккаунт <img className="button-profile__icon" src={Profile} alt="Аккаунт" />
      </Link>
    </div>
  )
}

export default ButtonProfile;
