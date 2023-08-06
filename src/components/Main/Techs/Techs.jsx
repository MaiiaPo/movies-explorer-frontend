import './Techs.css';
import SectionTitle from "../../сommon/SectionTitle/SectionTitle";

function Techs() {
  return (
    <section className="container techs">
      <SectionTitle title="Технологии"/>
      <div className="techs__description">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__about">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__technology-list">
        <li className="techs__technology-item">HTML</li>
        <li className="techs__technology-item">CSS</li>
        <li className="techs__technology-item">JS</li>
        <li className="techs__technology-item">React</li>
        <li className="techs__technology-item">Git</li>
        <li className="techs__technology-item">Express.js</li>
        <li className="techs__technology-item">mongoDB</li>
      </ul>
    </section>
  )
}

export default Techs;
