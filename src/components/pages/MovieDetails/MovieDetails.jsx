import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDetails } from 'servises/fetchApi';

export const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState('');

  useEffect(() => {
    fetchDetails(movieId)
      .then(resp => {
        setMovie(resp);
      })
      .catch(error => {
        console.log('Error fetching movie details:', error);
      });
  }, [movieId]);

  return (
    <div>
      <Link
        to={location.state && location.state.from ? location.state.from : '/'}
      >
        Back to products
      </Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <h1>{movie.original_title}</h1>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        <div>
          {movie.genres &&
            movie.genres.map(item => {
              return <p key={item.id}>{item.name}</p>;
            })}
        </div>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
