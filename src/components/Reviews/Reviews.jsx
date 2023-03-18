import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servises/fetchApi';
import styled from './reviews.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const resp = await fetchReviews(movieId);
        setReviews(resp.results);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {Array.isArray(reviews) &&
          reviews.map(item => (
            <li key={item.id} className={styled.li}>
              <h3>
                {item.author} <p className={styled.content}>{item.content}</p>
              </h3>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
