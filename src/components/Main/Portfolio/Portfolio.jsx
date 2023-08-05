import './Portfolio.css';
import Arrow from '../../../images/arrow-link.svg';

function Portfolio() {
  return (
    <section className="container portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://github.com/MaiiaPo/how-to-learn" target="_blank" rel="noreferrer">
            Статичный сайт
          </a>
          <img className="portfolio__arrow" src={Arrow} alt="Ссылка на сайт" />
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://maiiapo.github.io/russian-travel/" target="_blank" rel="noreferrer">
            Адаптивный сайт
          </a>
          <img className="portfolio__arrow" src={Arrow} alt="Ссылка на сайт" />
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://maiiapo.github.io/mesto/" target="_blank" rel="noreferrer">
            Одностраничное приложение
          </a>
          <img className="portfolio__arrow" src={Arrow} alt="Ссылка на сайт" />
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
