import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound({loggedIn}) {
  const navigate = useNavigate();
  function back() {
    loggedIn ? navigate(-2) : navigate(-1);
  }
  return (
    <section className="not-found">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__back-button" type="button" onClick={back}>Назад</button>
    </section>
  )
}

export default NotFound;
