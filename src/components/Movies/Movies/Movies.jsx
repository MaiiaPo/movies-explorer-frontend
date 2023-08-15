import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ movies, savedMovies, onSaveMovie }) {
  return (
    <main className="movies">
      <div className="movies__filter">
        <div className="movies__search-form-container">
          <SearchForm />
        </div>
      </div>
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
      />
      <button className="movies__button-more" type="button">Еще</button>
    </main>
  )
}

export default Movies;
