import { useEffect, useState } from 'react';
import { fetchTrends } from 'servises/fetchApi';
import MovieList from '../Movies';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends().then(resp => {
      setMovies(resp.results);
    });
  }, []);

  return (
    <main>
      <h1>Top movies today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
