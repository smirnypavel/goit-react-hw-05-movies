import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredit } from 'servises/fetchApi';
import imagesNotFaund from '../../images/imagesNotFaund.png';
import styled from './Cast.module.css';
import Loader from 'components/Loader/Loader';
export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchCredit(movieId);
        setActors(resp.cast);
      } catch (error) {
        setError(error);
        console.log('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <ul className={styled.ul}>
      {isLoading && <Loader />}
      {error && <p>Went wrong</p>}
      {actors &&
        actors.map(item => (
          <li key={item.cast_id} className={styled.li}>
            <p className={styled.name}>{item.name}</p>
            <p className={styled.character}>Character:{item.character}</p>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : imagesNotFaund
              }
              alt=""
              className={styled.img}
            />
          </li>
        ))}
    </ul>
  );
};

export default Cast;
