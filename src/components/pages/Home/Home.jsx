import React, { useEffect, useState } from 'react';
import { fetchTrends } from 'servises/fetchApi';
import MovieList from '../Movies';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const resp = await fetchTrends();

        setMovies(resp.results);
      } catch (error) {
        console.log('Error fetching trends:', error);
      }
    };
    getTrends();
  }, []);

  return (
    <main>
      <h1>Top movies today</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
