import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from './Home.module.css';
import errorImg from '../../../images/errorImg.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={styled.ImageGallery}>
      {movies.map(item => (
        <Link
          key={item.id}
          to={`/movies/${item.id}`}
          className={styled.ImageGalleryItem}
          state={{ from: location }}
        >
          <img
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : errorImg
            }
            alt={item.title}
            className={styled.ImageGalleryItem_image}
          />
        </Link>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieList;
