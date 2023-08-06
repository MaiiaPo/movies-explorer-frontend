import Auth from "../Auth/Auth";

function Login() {
  return (
    <Auth
      title="Рады видеть!"
      name="login"
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
        minLength="2"
        maxLength="40"
        required
      />
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
    </Auth>
  )
}

export default Login;
