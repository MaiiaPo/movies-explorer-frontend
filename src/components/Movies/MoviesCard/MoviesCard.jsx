import './MoviesCard.css';
import Like from "../../../images/like.svg";
import Dislike from "../../../images/dislike.svg";
import {BEATFILM} from "../../../utils/constants";
function MoviesCard({ movie }) {
  const isLike = true;
  const isSaved = false;

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
            {isLike && !isSaved &&
              <img className="card__like-icon" src={Like} alt="Иконка лайка"/>
            }
            {isSaved &&
              <img className="card__like-icon" src={Dislike} alt="Иконка отмены лайка"/>
            }
          </div>
        </div>
      </div>
      <p className="card__duration">{movie.duration}</p>
    </div>

  )
}

export default MoviesCard;
