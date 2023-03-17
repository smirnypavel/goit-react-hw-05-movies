import { Link } from 'react-router-dom';
import styled from './Home.module.css';
// import { AiFillFileImage } from 'react-icons/ai';
export const Movies = ({ movies }) => {
  return (
    <div className={styled.ImageGallery}>
      {movies.map(item => (
        <Link
          key={item.id}
          to={`${item.id}`}
          className={styled.ImageGalleryItem}
        >
          <img
            src={item.poster}
            alt={item.title}
            className={styled.ImageGalleryItem_image}
          />
        </Link>
      ))}
    </div>
  );
};
export default Movies;
