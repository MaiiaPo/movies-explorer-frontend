import '../Movies/Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../../сommon/Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import Words from "../../../images/movies/33 слова о дизайне.jpg";
import Design from "../../../images/movies/Киноальманах 100 лет дизайна.jpg";

function SavedMovies() {
  return (
    <main className="movies">
      <div className="movies__filter">
        <div className="movies__search-form-container">
          <SearchForm />
        </div>
        <div className="movies__checkbox-container">
          <FilterCheckbox />
        </div>
      </div>
      <div className="movies__list">
        <MoviesCard
          name="33 слова о дизайне"
          image={Words}
          altImage="Черно-белая фотография девушки с машиной"
          isLike={true}
          isSaved={true}
        />
        <MoviesCard
          name="Киноальманах «100 лет дизайна»"
          image={Design}
          altImage="Фотография мужчины в очках"
          isSaved={true}
        />
      </div>
      <Footer/>
    </main>
  )
}

export default SavedMovies;
