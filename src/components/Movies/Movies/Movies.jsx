import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {useEffect, useState} from "react";
import Preloader from "../../Preloader/Preloader";
import {moviesApi} from "../../../utils/moviesApi";

function Movies({ savedMovies, onSaveMovie, onDeleteMovie }) {
  const [movies, setMovies] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});
  const [loading, setLoading] = useState(false);
  const [isLoadMovie, setIsLoadMovie] = useState(false);

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

  async function filterMovies (query) {
    let filtered = [];

    if (!isLoadMovie) {
      setLoading(true);
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
        filtered = JSON.parse(localStorage.getItem('movies'));
        setLoading(false);
      } else {
        await moviesApi.getMovies()
          .then((movies) => {
            localStorage.setItem('movies', JSON.stringify(movies));
            setMovies(movies);
            filtered = movies;
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => setLoading(false));
      }

      setIsLoadMovie(true);
    }

    if (movies && movies.length) {
      filtered = movies;
    }

    localStorage.setItem('searchQuery', JSON.stringify(query));

    if (filtered && filtered.length > 0) {
      if (query.isShortFilm) {
        filtered = filtered.filter((m) => {
          return (
            query.searchText
              ? m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase()) && m.duration <= 40
              : m.duration <= 40
          );
        });

        setFilteredMovies(filtered);
        localStorage.setItem('searchedMovies', JSON.stringify(filtered));
      } else if (!query.isShortFilm) {
        filtered = filtered.filter((m) => {
          return query.searchText
            ? m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase())
            : m.nameRU.trim().includes(query.searchText);
        });

        setFilteredMovies(filtered);
        localStorage.setItem('searchedMovies', JSON.stringify(filtered));
      }
    }
  }

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
      {loading === true
        ? (<Preloader />)
        : (filteredMovies && filteredMovies.length > 0 ? (
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
        )
      }
    </main>
  )
}

export default Movies;
