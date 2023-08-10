import './Profile.css';
import {useForm} from "../../hooks/useForm";
import {Link} from "react-router-dom";

function Profile() {
  const { handleChange } = useForm({});

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__input-field profile__input-field_border profile_input-field_name">
          <label className="profile__label" for="user-name">
            Имя
          </label>
          <input
            className="profile__input"
            id="user-name"
            name="name"
            value="Виталий"
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChange}
          />
        </div>

        <div className="profile__input-field">
          <label className="profile__label" for="user-email">
            E-mail
          </label>
          <input
            className="profile__input"
            name="email"
            id="user-email"
            value="pochta@yandex.ru"
            type="email"
            placeholder="Введите почту"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="profile__buttons">
        <button className="profile__button" type="button" >Редактировать</button>
        <Link className="profile__route" to="/">
          <button className="profile__button profile__button_color" type="button">Выйти из аккаунта</button>
        </Link>
      </div>
    </section>
  )
}

export default Profile;
