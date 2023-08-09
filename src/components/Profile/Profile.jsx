import './Profile.css';
import {useForm} from "../../hooks/useForm";

function Profile() {
  const { handleChange } = useForm({});

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__input-field profile__input-field_border profile_input-field_name">
          <label className="profile__label" htmlFor="user-name">
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
          <label className="profile__label" htmlFor="user-email">
            E-mail
          </label>
          <input
            className="profile__input"
            name="email"
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
        <button type="button" className="profile__button">Редактировать</button>
        <button type="button" className="profile__button profile__button_color">Выйти из аккаунта</button>
      </div>
    </main>
  )
}

export default Profile;
