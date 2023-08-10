import './SearchForm.css';
function SearchForm() {
  return (
    <div className="search">
      <form className="search__form">
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          required
          minLength="2"
        />
        <input type="submit" value="Найти" className="search__submit"/>
      </form>
    </div>
  )
}

export default SearchForm;
