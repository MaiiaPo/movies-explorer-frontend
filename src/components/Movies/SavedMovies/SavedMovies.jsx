import '../Movies/Movies.css';
import './SavedMovies.css';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../../сommon/Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import Words from "../../../images/movies/33 слова о дизайне.jpg";
import Design from "../../../images/movies/Киноальманах 100 лет дизайна.jpg";
import useWindowDimensions from "../../../hooks/windowDimensions";
import Bencsi from "../../../images/movies/В погоне за Бенкси.jpg";

function SavedMovies() {
  const { width } = useWindowDimensions();

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
      <div className="movies__list movies__list_saved">
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
        {width >= 768 &&
          <MoviesCard
            name="В погоне за Бенкси"
            image={Bencsi}
            altImage="Бенкси с гитарой за столом"
            isSaved={true}
          />
        }
      </div>
      <div className="footer__container_saved">
        <Footer/>
      </div>
    </main>
  )
}

export default SavedMovies;
