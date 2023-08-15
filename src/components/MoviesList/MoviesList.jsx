import { useLocation, Link } from 'react-router-dom';
import { ListMovies, ListMoviesItem } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListMovies>
      {movies.map(({ id, title }) => (
        <ListMoviesItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </ListMoviesItem>
      ))}
    </ListMovies>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      to: PropTypes.string,
      movieId: PropTypes.number,
    })
  ),
};
