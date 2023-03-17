import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'servises/fetchApi';
import Movies from '../Movies';
import SearchForm from 'components/SearchForm';

export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  useEffect(() => {
    const fetchData = async () => {
      if (name === '') {
        return;
      }
      try {
        const resp = await fetchSearch(name);
        setMovies(resp.results);
      } catch (error) {
        toast.error('Введите запрос!');
      }
    };
    fetchData();
  }, [query, name]);

  const handleFormSubmit = async query => {
    setQuery(query);
    setMovies([]);
    const nextParams = query !== '' ? { name: query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} query={query} />
      <Movies movies={movies} />
    </main>
  );
};

export default Movie;
