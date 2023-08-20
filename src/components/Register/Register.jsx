import Auth from "../Auth/Auth";
import {useForm} from "../../hooks/useForm";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {validateEmail, validateName, validatePassword} from "../../utils/validation";

function Register({ handleRegister, loggedIn }) {
  const navigate = useNavigate();
  const { values, handleChange, isValid }  = useForm({})

  useEffect(() => {
    if (loggedIn) {
      navigate('/movies');
    }
  }, [loggedIn]);

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
            <span className={`auth__input-error ${isValid ? '' : 'auth__input-error_active'}`}>
              {validateName(values.name).message}
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
            <span className={`auth__input-error ${isValid ? '' : 'auth__input-error_active'}`}>
              {validateEmail(values.email).message}
            </span>
            <label className="auth__label" htmlFor="user-password">
              Пароль
            </label>
            <input
              className="auth__input"
              id="user-password"
              name="password"
              placeholder="Введите пароль"
              value={values.password || ""}
              type="password"
              minLength="8"
              maxLength="20"
              required
              onChange={handleChange}
            />
            <span className={`auth__input-error ${isValid ? '' : 'auth__input-error_active'}`}>
              {validatePassword(values.password).message}
            </span>
          </div>
            <div className="auth__buttons">
              <input
                type="submit"
                value="Зарегистрироваться"
                className={`auth__submit ${isValid ? '' : 'auth__submit_disable'}` }
                disabled={
                  !isValid ||
                  validateName(values.name).invalid ||
                  validateEmail(values.email).invalid ||
                  validatePassword(values.password).invalid
                }
              />
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
