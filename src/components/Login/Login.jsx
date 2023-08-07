import Auth from "../Auth/Auth";

function Login() {
  return (
    <Auth
      title="Рады видеть!"
      name="login"
      button={true}
      buttonValue="Войти"
      isRegister={false}
    >
      <label className="auth__label" htmlFor="email">
        E-mail
      </label>
      <input
        className="auth__input"
        name="email"
        type="email"
        value="pochta@yandex.ru"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="auth__input-error">
        Что-то пошло не так...
      </span>
      <label className="auth__label" htmlFor="password">
        Пароль
      </label>
      <input
        className="auth__input"
        name="password"
        type="password"
        minLength="6"
        maxLength="20"
        required
      />
      <span className="auth__input-error">
        Что-то пошло не так...
      </span>
    </Auth>
  )
}

export default Login;
