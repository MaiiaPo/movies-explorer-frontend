import './Promo.css';
import PromoLogo from "../../../images/promo-logo.svg";
import React from "react";
function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__img" src={PromoLogo} alt="Промо-логотип" />
    </section>
  )
}

export default Promo;
