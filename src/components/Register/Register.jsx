import Auth from "../Auth/Auth";

function Register() {
  return (
    <Auth
      title="Добро пожаловать!"
      name="register"
      buttonValue="Зарегистрироваться"
      isRegister={true}
    >
      <label className="auth__label" htmlFor="name">
        Имя
      </label>
      <input
        className="auth__input"
        name="name"
        type="text"
        minLength="2"
        maxLength="40"
        required
      />
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

export default Register;
