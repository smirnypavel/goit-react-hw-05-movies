import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchDetails } from 'servises/fetchApi';
export const MovieDetails = ({ key }) => {
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState('');

  useEffect(() => {
    fetchDetails(key).then(resp => {
      const movieList = resp.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));
      setMovie(movieList);
    });
  }, [key]);

  //   const detail = fetchDetails(id);
  return (
    <div>
      <h1>{movie.original_title}</h1>
    </div>
  );
};
export default MovieDetails;
