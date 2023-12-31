import './AboutProject.css';
import SectionTitle from "../../сommon/SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="about-project container">
      <SectionTitle title="О проекте"/>
      <ul className="about-project__description">
        <li className="about-project__description-item">
          <h3 className="about-project__description-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__description-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__description-item">
          <h3 className="about-project__description-title">На выполнение диплома ушло 5 недель</h3>
          <p  className="about-project__description-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__duration">
        <p className="about-project__duration-weeks about-project__duration-weeks_one">
          1 неделя
        </p>
        <p className="about-project__duration-weeks about-project__duration-weeks_four">
          4 недели
        </p>
      </div>
      <div className="about-project__type">
        <div className="about-project__type-item">Back-end</div>
        <div className="about-project__type-item">Front-end</div>
      </div>
    </section>
  )
}

export default AboutProject;
