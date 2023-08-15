import { useMemo } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useWindowDimensions from "../../../hooks/windowDimensions";

const MoviesCardList = ( { movies, savedMovies, onSaveMovie, onDeleteMovie } ) => {
  const { width } = useWindowDimensions();

  const moviesCount = useMemo(() => {
    const count = width < 768 ? 5 : width < 1280 ? 8 : 12;
    return movies.slice(0, count);
  }, [movies, width]);

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
    </>
  );
};

export default MoviesCardList;
