import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";

function Movies({ movies, savedMovies, onSaveMovie, onDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  const searchedMovies = localStorage.getItem('searchedMovies');
  const queries = localStorage.getItem('searchQuery');

  useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
  }, [searchedMovies]);

  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    }
  }, [queries]);

  const filterMovies = (query) => {
    let filtered = [];
    localStorage.setItem('searchQuery', JSON.stringify(query));

    if (query.isShortFilm) {
      filtered = movies.filter((m) => {
        return (
          query.searchText
            ? m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase()) && m.duration <= 40
            : m.duration <= 40
        );
      });

      setFilteredMovies(filtered);
      localStorage.setItem('searchedMovies', JSON.stringify(filtered));
      } else if (!query.isShortFilm) {
        filtered = movies.filter((m) => {
          return query.searchText
            ? m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase())
            : m.nameRU.trim().includes(query.searchText);
        });

        setFilteredMovies(filtered);
        localStorage.setItem('searchedMovies', JSON.stringify(filtered));
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
      {filteredMovies.length > 0 ? (
        <MoviesCardList
          movies={filteredMovies}
          savedMovies={savedMovies}
          searchQuery={searchQuery}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />
        ) : (
          <div className="movies__empty-text movies__empty-text_padding">
            По вашему запросу ничего не найдено
          </div>
        )
      }
    </main>
  )
}

export default Movies;
