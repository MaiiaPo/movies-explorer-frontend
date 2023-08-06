import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  function back() {
    navigate(-1);
  }
  return (
    <main className="not-found">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__back-button" type="button" onClick={back}>Назад</button>
    </main>
  )
}

export default NotFound;
