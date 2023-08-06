import './Auth.css';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.svg';

function Auth({title, name, children, button, buttonValue, isRegister}) {
  function handleSubmit(evt) {
    evt.preventDefault();
  }
  return (
    <main className="auth">
      <Link className="auth__route" to="/">
        <img className="auth__logo" src={Logo} alt="Логотип" />
      </Link>
      <h1 className="auth__title">{title}</h1>
      <form
        className="auth__form"
        name={`${name}_form`}
        onSubmit={handleSubmit}
      >
        <fieldset className="form__set">
          {children}
          {button && <input type="submit" value={buttonValue} className="auth__submit"/>}
        </fieldset>
      </form>
      {
        isRegister ? (
          <p className="auth__register-text">
            Уже зарегистированы? <Link to='/signin' className="auth__link">Войти</Link>
          </p>
        ) : (
          <p className="auth__register-text">
            Ещё не зарегистрированы? <Link to='/signup' className="auth__link">Регистрация</Link>
          </p>
        )
      }
    </main>
  )
}

export default Auth;
