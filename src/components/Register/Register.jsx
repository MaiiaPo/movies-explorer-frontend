import Auth from "../Auth/Auth";
import {useForm} from "../../hooks/useForm";
import {Link} from "react-router-dom";

function Register({ handleRegister }) {
  const {values, handleChange} = useForm({})

  return (
    <Auth title="Добро пожаловать!">
      <form
        className="auth__form"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(values);
        }}
      >
        <fieldset className="auth__form-set">
          <div className="auth__input-fields">
            <label className="auth__label" htmlFor="user-name">
              Имя
            </label>
            <input
              className="auth__input"
              name="name"
              id="user-name"
              placeholder="Введите имя"
              value={values.name || ""}
              type="text"
              minLength="2"
              maxLength="40"
              required
              onChange={handleChange}
            />
            <span className="auth__input-error">
              Что-то пошло не так...
            </span>
            <label className="auth__label" htmlFor="user-email">
              E-mail
            </label>
            <input
              className="auth__input"
              id="user-email"
              name="email"
              placeholder="Введите e-mail"
              value={values.email || ""}
              type="email"
              minLength="2"
              maxLength="40"
              required
              onChange={handleChange}
            />
            <label className="auth__label" htmlFor="user-password">
              Пароль
            </label>
            <input
              className="auth__input auth__input-error auth__input-error_active"
              id="user-password"
              placeholder="Введите пароль"
              value={values.password || ""}
              type="password"
              minLength="8"
              maxLength="20"
              required
              onChange={handleChange}
            />
            <span className="auth__input-error">
              Что-то пошло не так...
            </span>
          </div>
            <div className="auth__buttons">
              <input type="submit" value="Зарегистрироваться" className="auth__submit"/>
                <p className="auth__register-text">
                  Уже зарегистированы?  <Link to='/signin' className="auth__link">Войти</Link>
                </p>
            </div>
        </fieldset>
      </form>
    </Auth>
  )
}

export default Register;
