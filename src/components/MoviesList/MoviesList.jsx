import { useLocation, Link } from 'react-router-dom';
import { ListMovies, ListMoviesItem } from './MoviesList';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListMovies>
      {movies.map(({ id, title }) => (
        <ListMoviesItem key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title}
          </Link>
        </ListMoviesItem>
      ))}
    </ListMovies>
  );
};

export default MoviesList;
