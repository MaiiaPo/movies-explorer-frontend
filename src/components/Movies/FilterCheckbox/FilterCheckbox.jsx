import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="switch filter-checkbox__switch">
        <input type="checkbox" className="filter-checkbox__input" />
          <span className="filter-checkbox__slider filter-checkbox__slider_round"></span>
      </label>
      <div className="filter-checkbox__title">Короткометражки</div>
    </div>
  )
}

export default FilterCheckbox;
