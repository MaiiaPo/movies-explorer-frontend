import {useEffect, useMemo, useState} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowDimensions from "../../../hooks/windowDimensions";
import {useLocation} from "react-router-dom";

const MoviesCardList = ( { movies, savedMovies, onSaveMovie, onDeleteMovie } ) => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [moviesMore, setMoviesMore] = useState(0);

  const moviesCount = useMemo(() => {
    const count = width < 768 ? 5 : width < 1280 ? 8 : 12;
    return movies.slice(0, count + moviesMore);
  }, [movies, width, moviesMore]);

  useEffect(() => {
    setMoviesMore(0);
  }, [movies]);

  function addMovies() {
    setMoviesMore((prev) => prev + (width >= 1280 ? 8 : 3));
  }

  return (
    <>
      <ul className="movies__list">
        {moviesCount.map((movie) => {
          return (
            <li className="movies__list-item" key={movie.id || movie.movieId}>
              <MoviesCard
                key={movie.id || movie.movieId}
                movie={movie}
                savedMovies={savedMovies}
                onSaveMovie={onSaveMovie}
                onDeleteMovie={onDeleteMovie}
              />
            </li>
          );
        })}
      </ul>
      {location.pathname === '/movies' && movies.length > moviesCount.length && (
          <button
            className="movies__button-more"
            type="button"
            onClick={addMovies}
          >
            Ещё
          </button>
        )}
    </>
  );
};

export default MoviesCardList;
