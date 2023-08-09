import './MoviesCard.css';
import Like from "../../../images/like.svg";
import Dislike from "../../../images/dislike.svg";
function MoviesCard({name, image, altImage, isLike, isSaved}) {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card__img" src={image} alt={altImage}/>
        <div className="card__info">
          <p className="card__name">{ name }</p>
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
      <p className="card__duration">1ч 42м</p>
    </div>

  )
}

export default MoviesCard;
