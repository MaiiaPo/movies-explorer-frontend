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

  const isLikeButton = location.pathname === '/movies';
  const isDeleteButton = location.pathname === '/saved-movies';

  const isSaved = savedMovies
    ? isSaveMoviesPage
      ? savedMovies.some((i) => i.movieId === movie.movieId)
      : savedMovies.some((i) => i.movieId === movie.id)
    : false;

  const imageUrl = movie.image.url ? `${BEATFILM}${movie.image.url}` : movie.image;

  function getDuration(min) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;

    if (hours === 0) {
      return `${minutes > 0 ? ` ${minutes}м` : ''}`;
    } else {
      return `${hours}ч${minutes > 0 ? ` ${minutes}м` : ''}`;
    }
  }

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
            {isDeleteButton &&
              <button
                type="button"
                className="card__like-button"
                onClick={() => onDeleteMovie(movie._id)}
              >
                <img className="card__like-icon" src={Dislike} alt="Иконка удаления фильма из списка"/>
              </button>
            }
            {isLikeButton &&
              <button
                type="button"
                className="card__like-button"
                onClick={() => onSaveMovie(movie, isSaved, movieWithId)}
              >
                {isSaved ? (
                  <img className="card__like-icon" src={Like} alt="Иконка лайка"/>
                ) : (
                  <img className="card__like-icon" src={NotLike} alt="Иконка отмены лайка"/>
                )}
              </button>
            }
          </div>
        </div>
      </div>
      <p className="card__duration">{getDuration(movie.duration)}</p>
    </div>

  )
}

export default MoviesCard;
