import { useEffect, useState } from 'react';
import { fetchSearh } from 'servises/fetchApi';
import Movies from '../Movies';
import SearchForm from 'components/SearchForm';

export const SearhMovies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchSearh(query).then(resp => {
      console.log(resp);
      const movieList = resp.results.map(movie => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }));
      setMovies(movieList);
    });
  }, [query]);

  const hendleFormSubmit = query => {
    setQuery(query);
    setMovies([]);
  };
  console.log(movies);
  console.log(query);

  return (
    <main>
      <SearchForm onSubmit={hendleFormSubmit} query={query} />
      <Movies movies={movies} />
    </main>
  );
};

export default SearhMovies;
