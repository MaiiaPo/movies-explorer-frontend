import './SectionTitle.css';

function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h3 className="section-title__title">{ title }</h3>
    </div>
  )
}

export default SectionTitle;
