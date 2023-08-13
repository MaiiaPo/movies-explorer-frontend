import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <div className="search__input-fields">
          <input
            className="search__input"
            name="search"
            type="text"
            placeholder="Фильм"
            required
            minLength="2"
          />
          <input type="submit" value="Найти" className="search__submit"/>
        </div>
        <div className="search__toggle">
          <FilterCheckbox />
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
