import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useEffect, useState} from "react";

function SearchForm({ onFilters, searchQuery }) {
  const [searchText, setSearchText] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);

  const localSearch = JSON.parse(localStorage.getItem('searchQuery'));

  useEffect(() => {
    if (localSearch) {
      setSearchText(localSearch.searchText);
    }
  }, []);

  const getFilterShortFilm = () => {
    if (searchText !== '') {
      setIsShortFilm(!isShortFilm);

      onFilters({
        searchText: searchText,
        isShortFilm: !isShortFilm
      });
    } else {
      setIsShortFilm(!isShortFilm);

      onFilters({
        searchText: searchQuery.searchText,
        isShortFilm: !isShortFilm
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilters({ searchText, isShortFilm });
  };

  return (
    <div className="search">
      <form className="search__form"  onSubmit={handleSubmit}>
        <div className="search__input-fields">
          <input
            className="search__input"
            name="search"
            id="search"
            type="text"
            value={searchText || ''}
            placeholder="Фильм"
            minLength="1"
            onChange={(e) => {setSearchText(e.target.value)}}
          />
          <input
            type="submit"
            value="Найти"
            className="search__submit"
          />
        </div>
        <div className="search__toggle">
          <FilterCheckbox
            onCheck={getFilterShortFilm}
            isChecked={searchQuery.isShortFilm}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchForm;
