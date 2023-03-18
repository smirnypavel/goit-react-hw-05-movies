import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredit } from 'servises/fetchApi';
import errorImg from '../../images/errorImg.jpg';
import styled from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const resp = await fetchCredit(movieId);
        setActors(resp.cast);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <ul className={styled.ul}>
      {Array.isArray(actors) &&
        actors.map(item => (
          <li key={item.id} className={styled.li}>
            <p className={styled.name}>{item.name}</p>
            <p className={styled.character}>Character:{item.character}</p>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : errorImg
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
