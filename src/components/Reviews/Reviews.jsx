import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servises/fetchApi';
import styled from './reviews.module.css';

const Reviews = () => {
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

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
