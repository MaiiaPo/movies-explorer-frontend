import './Portfolio.css';
import Arrow from '../../../images/arrow-link.svg';

function Portfolio() {
  return (
    <section className="container portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://github.com/MaiiaPo/how-to-learn" target="_blank" rel="noreferrer">
            <span className="portfolio__link-name">Статичный сайт</span>
            <img className="portfolio__arrow" src={Arrow} alt="Ссылка на сайт" />
          </a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://maiiapo.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <span className="portfolio__link-name">Адаптивный сайт</span>
            <img className="portfolio__arrow" src={Arrow} alt="Ссылка на сайт" />
          </a>
        </li>
        <li className="portfolio__link-item">
          <a className="portfolio__link" href="https://maiiapo.github.io/mesto/" target="_blank" rel="noreferrer">
            <span className="portfolio__link-name">Одностраничное приложение</span>
            <img className="portfolio__arrow" src={Arrow} alt="Ссылка на сайт" />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
