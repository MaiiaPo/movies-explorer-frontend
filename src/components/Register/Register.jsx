import Auth from "../Auth/Auth";

function Register() {
  return (
    <Auth
      title="Добро пожаловать!"
      name="register"
      button={true}
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
      <span className={`auth__input-error`}>
        Что-то пошло не так...
      </span>
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
        className="auth__input auth__input_error"
        value="Пароль"
        name="password"
        type="password"
        minLength="6"
        maxLength="20"
        required
      />
      <span className={`auth__input-error auth__input-error_active`}>
        Что-то пошло не так...
      </span>
    </Auth>
  )
}

export default Register;
