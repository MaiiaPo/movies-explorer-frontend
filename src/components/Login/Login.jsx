import Auth from "../Auth/Auth";
import { useForm } from "../../hooks/useForm";

function Login() {
  const { handleChange } = useForm({});

  return (
    <Auth
      title="Рады видеть!"
      name="login"
      button={true}
      buttonValue="Войти"
      isRegister={false}
    >
      <label className="auth__label" htmlFor="user-email">
        E-mail
      </label>
      <input
        className="auth__input"
        name="email"
        id="user-email"
        type="email"
        value="pochta@yandex.ru"
        placeholder="Введите e-mail"
        minLength="2"
        maxLength="40"
        required
        onChange={handleChange}
      />
      <span className="auth__input-error">
        Что-то пошло не так...
      </span>
      <label className="auth__label" htmlFor="user-password">
        Пароль
      </label>
      <input
        className="auth__input"
        name="password"
        id="user-password"
        placeholder="Введите пароль"
        type="password"
        minLength="6"
        maxLength="20"
        required
        onChange={handleChange}
      />
      <span className="auth__input-error">
        Что-то пошло не так...
      </span>
    </Auth>
  )
}

export default Login;
