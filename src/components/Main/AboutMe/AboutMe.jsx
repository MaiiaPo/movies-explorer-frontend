import './AboutMe.css';
import SectionTitle from "../../сommon/SectionTitle/SectionTitle";
import Avatar from '../../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="container about-me">
      <SectionTitle title="Студент"/>
      <div className="about-me__container">
        <img className="about-me__avatar" src={Avatar} alt="Аватар"/>
        <div className="about-me__description">
          <div className="about-me__description-student">
            <h2 className="about-me__name">Майя</h2>
            <p className="about-me__profession">Фронтенд-разработчик, 35 лет</p>
            <p className="about-me__info">Я из Перми. Работаю фронтент-разработчиком на Vue.js.
              До этого был опыт в бэкенде и фуллстеком. При переходе между стеками была
              необходимость в структурировании знаний, и Яндекс.Практикум помог в этом.
              В свободное время изучаю новые технологии, повышаю уровень английского,
              хожу в зал и бассейн.
            </p>
          </div>
          <a className="about-me__link" href="https://github.com/MaiiaPo" target="_blank" rel="noreferrer" >
            Github
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
