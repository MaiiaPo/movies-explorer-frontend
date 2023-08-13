import '../Movies/Movies.css';
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies }) {
  return (
    <main className="movies">
      <div className="movies__filter">
        <div className="movies__search-form-container">
          <SearchForm />
        </div>
      </div>
      {!savedMovies.length &&
        <div className="movies__empty">
          <p className="movies__empty-text">Ещё нет сохранённых фильмов</p>
        </div>
      }
      <MoviesCardList movies={ savedMovies } />
    </main>
  )
}

export default SavedMovies;
