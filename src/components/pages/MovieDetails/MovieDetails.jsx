import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDetails } from 'servises/fetchApi';
import styled from './movieDetails.module.css';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  //   const date = movie.release_date.substring(0);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetchDetails(movieId);
        setMovie(response);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link
        className={styled.button}
        to={location.state && location.state.from ? location.state.from : '/'}
      >
        Back to movies
      </Link>
      <div>
        <div className={styled.container}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            className={styled.movie_poster}
          />
          <div>
            {' '}
            <h1 className={styled.film_title}>{movie.original_title}</h1>
            <h2 className={styled.overview_title}>Overview</h2>
            <p className={styled.overview_text}>{movie.overview}</p>
            <h2 className={styled.genre_title}>Genres</h2>
            <div className={styled.genre}>
              {movie.genres &&
                movie.genres.map(item => {
                  return (
                    <p key={item.id} className={styled.genre_item}>
                      {item.name}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
        <h4 className={styled.information}>Additional information</h4>
        <ul className={styled.link_list}>
          <li className={styled.li}>
            <Link to={`/movies/${movieId}/cast`} className={styled.link}>
              Cast
            </Link>
          </li>
          <li className={styled.li}>
            <Link to={`/movies/${movieId}/reviews`} className={styled.link}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
