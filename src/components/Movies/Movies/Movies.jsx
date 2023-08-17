import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useState} from "react";

function Movies({ movies, savedMovies, onSaveMovie, onDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  const filterMovies = (query) => {
    console.log('фильтруем')
    let filtered = [];
    localStorage.setItem('searchQueryMovies', JSON.stringify(query));

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

    console.log('filteredMovies', filteredMovies)
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
      <MoviesCardList
        movies={filteredMovies}
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  )
}

export default Movies;
