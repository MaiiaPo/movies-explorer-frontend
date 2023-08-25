import './FilterCheckbox.css';

function FilterCheckbox({ onCheck, isChecked}) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__switch">
        <input
          type="checkbox"
          className="filter-checkbox__input"
          id="filter-checkbox"
          onChange={onCheck}
          checked={isChecked || ''}
        />
        <span className="filter-checkbox__slider filter-checkbox__slider_round"></span>
      </label>
      <div className="filter-checkbox__title">Короткометражки</div>
    </div>
  )
}

export default FilterCheckbox;
