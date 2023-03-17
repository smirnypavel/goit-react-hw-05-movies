import { Link, useLocation } from 'react-router-dom';
import styled from './Home.module.css';
import errorImg from '../../../images/errorImg.jpg';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(location, 'привет MovieList');
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
export default MovieList;
