import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <ul className="footer__links">
          <li className="footer__links-item">
            <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">
              Яндекс Практикум
            </a>
          </li>
          <li className="footer__links-item">
            <a className="footer__link" href="https://github.com/MaiiaPo" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
        <div className="footer__copyright">
          <p className="footer__year">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
