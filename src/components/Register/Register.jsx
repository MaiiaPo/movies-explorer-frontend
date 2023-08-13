import Auth from "../Auth/Auth";
import {useForm} from "../../hooks/useForm";

function Register() {
  const { handleChange } = useForm({});

  return (
    <Auth
      title="Добро пожаловать!"
      name="register"
      button={true}
      buttonValue="Зарегистрироваться"
      isRegister={true}
    >
      <label className="auth__label" htmlFor="user-name">
        Имя
      </label>
      <input
        className="auth__input"
        name="name"
        id="user-name"
        placeholder="Введите имя"
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
        value="Пароль"
        name="password"
        id="user-password"
        placeholder="Введите пароль"
        type="password"
        minLength="6"
        maxLength="20"
        required
        onChange={handleChange}
      />
      <span className="auth__input-error auth__input-error_active">
        Что-то пошло не так...
      </span>
    </Auth>
  )
}

export default Register;
