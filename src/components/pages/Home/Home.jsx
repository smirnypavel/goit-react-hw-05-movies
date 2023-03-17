import { useEffect, useState } from 'react';
import { fetchTrends } from 'servises/fetchApi';
import Movies from '../Movies';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length > 0) {
      return;
    }
    fetchTrends().then(resp => {
      const movieList = resp.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));
      setMovies(movieList);
    });
  }, [movies]);

  return (
    <main>
      <h1>Top movies today</h1>
      <Movies movies={movies} />
    </main>
  );
};

export default Home;
