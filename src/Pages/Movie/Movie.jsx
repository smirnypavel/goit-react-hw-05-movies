import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'servises/fetchApi';
import Movies from '../Movies';
import SearchForm from 'components/SearchForm';
import Loader from 'components/Loader/Loader';

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const name = searchParams.get('name') ?? '';

  useEffect(() => {
    const fetchData = async () => {
      if (name === '') {
        return;
      }
      setIsLoading(true);
      try {
        const resp = await fetchSearch(name);
        setMovies(resp.results);
      } catch (error) {
        setError(error);
        toast.error('Введите запрос!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [name]);

  const handleFormSubmit = query => {
    const nextParams = query !== '' ? { name: query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      {isLoading && <Loader />}
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && <Movies movies={movies} />}
      {error && <p>Went wrong</p>}
    </main>
  );
};

export default Movie;
