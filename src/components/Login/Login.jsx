import Auth from "../Auth/Auth";
import { useForm } from "../../hooks/useForm";
import {Link} from "react-router-dom";
import {validateEmail, validatePassword} from "../../utils/validation";

function Login( { handleLogin } ) {
  const {values, handleChange, isValid} = useForm({});

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    handleLogin(values);
  }

  return (
    <Auth
      title="Рады видеть!"
      name="login"
      button={true}
      buttonValue="Войти"
      isRegister={false}
    >
      <form
        className="auth__form"
        onSubmit={handleSubmit}
      >
        <fieldset className="auth__form-set">
          <div className="auth__input-fields">
            <label className="auth__label" htmlFor="user-email">
              E-mail
            </label>
            <input
              className="auth__input"
              name="email"
              id="user-email"
              type="email"
              value={values.email || ""}
              placeholder="Введите e-mail"
              minLength="2"
              maxLength="40"
              required
              onChange={handleChange}
            />
            <span className={`auth__input-error ${validateEmail(values.email).invalid ? 'auth__input-error_active' : ''}`}>
              {validateEmail(values.email).message}
            </span>
            <label className="auth__label" htmlFor="user-password">
              Пароль
            </label>
            <input
              className="auth__input"
              name="password"
              id="user-password"
              placeholder="Введите пароль"
              value={values.password || ""}
              type="password"
              minLength="8"
              maxLength="20"
              required
              onChange={handleChange}
            />
            <span className={`auth__input-error ${validatePassword(values.password).invalid ? 'auth__input-error_active' : ''}`}>
              {validatePassword(values.password).message}
            </span>
          </div>
            <div className="auth__buttons">
              <input
                type="submit"
                value="Войти"
                className={`auth__submit 
                ${!isValid
                || validateEmail(values.email).invalid
                || validatePassword(values.password).invalid
                  ? 'auth__submit_disable' : ''
                }` }
                disabled={
                  !isValid ||
                  validateEmail(values.email).invalid ||
                  validatePassword(values.password).invalid
                }
              />
                <p className="auth__register-text">
                  Ещё не зарегистрированы?  <Link to='/signup' className="auth__link">Регистрация</Link>
                </p>
            </div>
        </fieldset>
      </form>
    </Auth>
  )
}

export default Login;
