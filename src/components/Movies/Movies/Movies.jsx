import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../../сommon/Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import Words from "../../../images/movies/33 слова о дизайне.jpg";
import Design from "../../../images/movies/Киноальманах 100 лет дизайна.jpg";
import Bencsi from "../../../images/movies/В погоне за Бенкси.jpg";
import Baskia from "../../../images/movies/Баския Взрыв реальности.jpg";
import Run from "../../../images/movies/Бег это свобода.jpg";

function Movies() {
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
        />
        <MoviesCard
          name="Киноальманах «100 лет дизайна»"
          image={Design}
          altImage="Фотография мужчины в очках"
          isLike={false}
        />
        <MoviesCard
          name="В погоне за Бенкси"
          image={Bencsi}
          altImage="Бенкси с гитарой за столом"
          isLike={false}
        />
        <MoviesCard
          name="Баския: Взрыв реальности"
          image={Baskia}
          altImage="Девушка в комнате с колоннами"
          isLike={false}
        />
        <MoviesCard
          name="Бег это свобода"
          image={Run}
          altImage="Трое людей на скейтах на дороге"
          isLike={false}
        />
        <button className="movies__button-more">Еще</button>
      </div>

      <Footer/>
    </main>
  )
}

export default Movies;
