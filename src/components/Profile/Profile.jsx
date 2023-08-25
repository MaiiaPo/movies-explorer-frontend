import './Profile.css';
import { useForm } from "../../hooks/useForm";
import {Link, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {validateEmail, validateName} from "../../utils/validation";

function Profile({ handleSignOut, handleUpdateProfile, successUpdateUser }) {
  const {values, handleChange, setValues, isValid} = useForm({})
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();

  const [isSave, setIsSave] = useState(false);
  const [userName, setUserName] = useState('');
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [isSaveUpdate, setIsSaveUpdate] = useState(false);

  useEffect(() => {
    if (currentUser && location.pathname === '/profile') {
      setValues({name: currentUser.name, email: currentUser.email});
      setUserName(currentUser.name);
    }
  }, [currentUser, location.pathname]);

  useEffect(() => {
    successUpdateUser = false;
  }, []);

  useEffect(() => {
    if (successUpdateUser) {
      setShowSuccessMsg(true);
      setIsSave(false);
    }
  }, [successUpdateUser, isSaveUpdate]);

  function isNewData() {
    return currentUser.name !== values.name || currentUser.email !== values.email;
  }

  function updateProfile() {
    setIsSaveUpdate(!isSaveUpdate);
    handleUpdateProfile({
      name: values.name,
      email: values.email,
    });
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {userName}!</h1>
      <form className="profile__form">
        <div className="profile__input-field profile__input-field_border profile_input-field_name">
          <label className="profile__label" htmlFor="user-name">
            Имя
          </label>
          <input
            className="profile__input"
            id="user-name"
            name="name"
            value={values.name || ""}
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            disabled={!isSave}
            required
            onChange={handleChange}
          />
          <span className={`auth__input-error ${validateName(values.name).invalid ? 'auth__input-error_active' : ''}`}>
            {validateName(values.name).message}
          </span>
        </div>
        <div className="profile__input-field">
          <label className="profile__label" htmlFor="user-email">
            E-mail
          </label>
          <input
            className="profile__input"
            name="email"
            id="user-email"
            value={values.email || ""}
            type="email"
            placeholder="Введите почту"
            minLength="2"
            maxLength="40"
            disabled={!isSave}
            required
            onChange={handleChange}
          />
          <span className={`auth__input-error ${validateEmail(values.email).invalid ? 'auth__input-error_active' : ''}`}>
            {validateEmail(values.email).message}
          </span>
        </div>
      </form>
      {showSuccessMsg && (
        <span key={successUpdateUser} className="profile__success">
          Данные успешно обновлены!
        </span>
      )}
      <div className="profile__buttons">
        {isSave ? (
          <button
            className="profile__button"
            type="button"
            disabled={
              !isNewData() ||
              !isValid ||
              validateEmail(values.email).invalid ||
              validateName(values.name).invalid
            }
            onClick={updateProfile}
          >
            Сохранить
          </button>
        ) : (
          <button
            className="profile__button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsSave(true);
              setShowSuccessMsg(false);
            }}
          >
            Редактировать
          </button>
        )}

        <Link className="profile__route" to="/">
          <button
            className="profile__button profile__button_color"
            type="button"
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Profile;
