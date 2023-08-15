import './MoviesCard.css';
import Like from "../../../images/like.svg";
import NotLike from "../../../images/notLike.svg";
import Dislike from "../../../images/dislike.svg";
import {BEATFILM} from "../../../utils/constants";
import {useLocation} from "react-router-dom";

function MoviesCard({ movie, savedMovies, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();
  const isSaveMoviesPage = location.pathname === '/saved-movies'

  const movieWithId =  savedMovies ? savedMovies.find(m => m.movieId === movie.id) : '';

  const isSaved = savedMovies
    ? isSaveMoviesPage
      ? savedMovies.some((i) => i.movieId === movie.movieId)
      : savedMovies.some((i) => i.movieId === movie.id)
    : false;

  const imageUrl = movie.image.url ? `${BEATFILM}${movie.image.url}` : movie.image;

  return (
    <div className="card">
      <div className="card__block">
        <a
          className="moviescard__image-container"
          href={movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img className="card__img" src={imageUrl} alt={movie.nameRU}/>
        </a>
        <div className="card__info">
          <h2 className="card__name">{movie.nameRU}</h2>
          <div className="card__like">
            {isSaved && isSaveMoviesPage &&
              <button
                type="button"
                className="card__like-button"
                onClick={() => onDeleteMovie(movie._id)}
              >
                <img className="card__like-icon" src={Dislike} alt="Иконка удаления фильма из списка"/>
              </button>
            }
            {isSaved && !isSaveMoviesPage &&
              <button
                type="button"
                className="card__like-button"
                onClick={() => onDeleteMovie(movieWithId._id)}
              >
                <img className="card__like-icon" src={Like} alt="Иконка лайка"/>
              </button>
            }
            {!isSaved &&
              <button
                type="button"
                className="card__like-button"
                onClick={() => {onSaveMovie(movie)}}
              >
                <img className="card__like-icon" src={NotLike} alt="Иконка отмены лайка"/>
              </button>
            }
          </div>
        </div>
      </div>
      <p className="card__duration">{movie.duration}</p>
    </div>

  )
}

export default MoviesCard;
