import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ movies }) {
  return (
    <main className="movies">
      <div className="movies__filter">
        <div className="movies__search-form-container">
          <SearchForm />
        </div>
      </div>
      <MoviesCardList movies={movies} />
      <button className="movies__button-more" type="button">Еще</button>
    </main>
  )
}

export default Movies;
