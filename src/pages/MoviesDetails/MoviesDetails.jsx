import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'service/getMovies';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <Link to={goBackLink.current}>Go Back </Link>
      <h2> {movie.title}</h2>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <Link to="cast">Cast</Link>
      <p> </p>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};
export default MoviesDetails;
