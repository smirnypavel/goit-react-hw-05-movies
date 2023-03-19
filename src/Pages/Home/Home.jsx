import React, { useEffect, useState } from 'react';
import { fetchTrends } from 'servises/fetchApi';
import MovieList from '../../components/Movies';
import Loader from 'components/Loader/Loader';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrends = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchTrends();
        setMovies(resp.results);
      } catch (error) {
        setError(error);
        console.log('Error fetching trends:', error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrends();
  }, []);

  return (
    <main>
      <h1>Top movies today</h1>
      {isLoading && <Loader />}
      {error && <p>Went wrong</p>}
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Home;
