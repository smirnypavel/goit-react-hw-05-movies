import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servises/fetchApi';
import styled from './reviews.module.css';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchReviews(movieId);
        setReviews(resp.results);
      } catch (error) {
        setError(error);
        console.log('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Went wrong</p>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id} className={styled.li}>
              <h3>
                {item.author} <p className={styled.content}>{item.content}</p>
              </h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry no reviews</p>
      )}
    </div>
  );
};

export default Reviews;
