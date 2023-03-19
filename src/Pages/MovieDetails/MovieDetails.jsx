import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDetails } from 'servises/fetchApi';
import styled from '../MovieDetails/movieDetails.module.css';
import errorImg from '../../images/errorImg.jpg';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const goBack = location.state?.from || '/';

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetchDetails(movieId);
        setMovie(response);
      } catch (error) {
        setError(error);
        console.log('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Went wrong</p>}
      <Link className={styled.button} to={goBack}>
        Back to movies
      </Link>
      <div>
        <div className={styled.container}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : errorImg
            }
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
            <Link to="cast" state={{ from: goBack }} className={styled.link}>
              Cast
            </Link>
          </li>
          <li className={styled.li}>
            <Link to="reviews" state={{ from: goBack }} className={styled.link}>
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
