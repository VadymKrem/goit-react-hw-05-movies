import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/getMovies';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    getMovieCredits(movieId).then(setCasts);
  }, [movieId]);
  return (
    <>
      {casts.length === 0 ? (
        <p>No casts in this movies</p>
      ) : (
        <ul>
          {casts.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : defaultImg
                }
                width={250}
                alt={item.original_name}
              />
              <h3>{item.original_name}</h3>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Cast;
