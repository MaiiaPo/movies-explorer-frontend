import './AboutMe.css';
import SectionTitle from "../../сommon/SectionTitle/SectionTitle";
import Avatar from '../../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className="container about-me">
      <SectionTitle title="Студент"/>
      <img className="about-me__avatar" src={Avatar} alt="Аватар"/>
      <h2 className="about-me__name">Майя</h2>
      <p className="about-me__profession">Фронтенд-разработчик, 35 лет</p>
      <p className="about-me__info">Я из Перми. В настоящий момент работаю фронтент-разработчиком на Vue.js.
        До этого был опыт в бэкенде и фуллстеком. При переходе между стеками была
        необходимость в структурировании знаний, и Яндекс.Практикум помог в этом.
        В свободное время изучаю новые технологии, повышаю уровень английского,
        хожу в зал и бассейн. Люблю рисовать маслом. Программирование вдохновляет =)
      </p>
      <a className="about-me__link" href="https://github.com/MaiiaPo" target="_blank" rel="noreferrer" >
        Github
      </a>
    </section>
  )
}

export default AboutMe;
