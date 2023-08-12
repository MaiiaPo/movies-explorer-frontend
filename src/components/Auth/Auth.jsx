import './Auth.css';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.svg';

function Auth({ title, children }) {
  return (
    <section className="auth">
      <Link className="auth__route" to="/">
        <img className="auth__logo" src={Logo} alt="Логотип" />
      </Link>
      <h1 className="auth__title">{title}</h1>
      {children}
    </section>
  )
}

export default Auth;
