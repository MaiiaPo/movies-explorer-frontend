import '../Movies/Movies.css';
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";

function SavedMovies({ savedMovies, onDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [searchQuery, setSearchQuery] = useState({});

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies])

  const filterMovies = (query) => {
    let filtered = [];
    query.searchText = query.searchText ? query.searchText : '';

    if (query.isShortFilm) {
      filtered = savedMovies.filter((m) => {
        return (
          query.searchText
            ? m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase()) && m.duration <= 40
            : m.duration <= 40
        );
      });

      setFilteredMovies(filtered);
    } else if (!query.isShortFilm) {
      filtered = savedMovies.filter((m) => {
        return query.searchText
          ? m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase())
          : m.nameRU.trim().includes(query.searchText);
      });

      setFilteredMovies(filtered);
    }
  };

  return (
    <main className="movies">
      <div className="movies__filter">
        <div className="movies__search-form-container">
          <SearchForm
            onFilters={filterMovies}
            searchQuery={searchQuery}
          />
        </div>
      </div>
      {savedMovies.length === 0 ?
        (
          <div className="movies__empty">
            <p className="movies__empty-text">Ещё нет сохранённых фильмов</p>
          </div>
        ) : (
          savedMovies.length && filteredMovies.length > 0 ? (
            <MoviesCardList
              movies={filteredMovies}
              savedMovies={savedMovies}
              onDeleteMovie={onDeleteMovie}
            />
          ) : (
            <div className="movies__empty-text movies__empty-text_padding">
              По вашему запросу ничего не найдено
            </div>
          )
        )
      }
    </main>
  )
}

export default SavedMovies;
