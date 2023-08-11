import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCard from "../MoviesCard/MoviesCard";
import Words from "../../../images/movies/33 слова о дизайне.jpg";
import Design from "../../../images/movies/Киноальманах 100 лет дизайна.jpg";
import Bencsi from "../../../images/movies/В погоне за Бенкси.jpg";
import Baskia from "../../../images/movies/Баския Взрыв реальности.jpg";
import Run from "../../../images/movies/Бег это свобода.jpg";
import BooksShopers from "../../../images/movies/Книготорговцы.jpg";
import ThinkGermany from "../../../images/movies/Когда я думаю о Германии ночью.jpg";
import Iggy from "../../../images/movies/Gimme Danger История Игги и The Stooges.jpg";
import useWindowDimensions from "../../../hooks/windowDimensions";

function Movies() {
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
      <ul className="movies__list">
        <li className="movies__list-item">
          <MoviesCard
            name="33 слова о дизайне"
            image={Words}
            altImage="Черно-белая фотография девушки с машиной"
            isLike={true}
          />
        </li>
        <li className="movies__list-item">
          <MoviesCard
            name="Киноальманах «100 лет дизайна»"
            image={Design}
            altImage="Фотография мужчины в очках"
          />
        </li>
        <li className="movies__list-item">
          <MoviesCard
            name="В погоне за Бенкси"
            image={Bencsi}
            altImage="Бенкси с гитарой за столом"
          />
        </li>
        <li className="movies__list-item">
          <MoviesCard
            name="Баския: Взрыв реальности"
            image={Baskia}
            altImage="Девушка в комнате с колоннами"
          />
        </li>
        <li className="movies__list-item">
          <MoviesCard
            name="Бег это свобода"
            image={Run}
            altImage="Трое людей на скейтах на дороге"
          />
        </li>
        {width >= 768 &&
          <>
            <li className="movies__list-item">
              <MoviesCard
                name="Книготорговцы"
                image={BooksShopers}
                altImage="Мужчина в комнате разбирает коробки с книгами"
                isLike={true}
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="Когда я думаю о Германии ночью"
                image={ThinkGermany}
                altImage="Трое мужчин разговаривают"
                isLike={true}
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="Gimme Danger: История Игги и The Stooges"
                image={Iggy}
                altImage="Стена с граффити"
              />
            </li>
          </>
          }
        {width >= 1280 &&
          <>
            <li className="movies__list-item">
              <MoviesCard
                name="33 слова о дизайне"
                image={Words}
                altImage="Черно-белая фотография девушки с машиной"
                isLike={true}
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="Киноальманах «100 лет дизайна»"
                image={Design}
                altImage="Фотография мужчины в очках"
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="В погоне за Бенкси"
                image={Bencsi}
                altImage="Бенкси с гитарой за столом"
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="Баския: Взрыв реальности"
                image={Baskia}
                altImage="Девушка в комнате с колоннами"
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="33 слова о дизайне"
                image={Words}
                altImage="Черно-белая фотография девушки с машиной"
                isLike={true}
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="Киноальманах «100 лет дизайна»"
                image={Design}
                altImage="Фотография мужчины в очках"
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="В погоне за Бенкси"
                image={Bencsi}
                altImage="Бенкси с гитарой за столом"
              />
            </li>
            <li className="movies__list-item">
              <MoviesCard
                name="Баския: Взрыв реальности"
                image={Baskia}
                altImage="Девушка в комнате с колоннами"
              />
            </li>
          </>
        }
      </ul>
      <button className="movies__button-more" type="button">Еще</button>
    </main>
  )
}

export default Movies;
