import Form from 'components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'service/getMovies';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getMovieByQuery(query).then(setMovies);
  }, [searchParams]);
  return (
    <>
      <Form params={setSearchParams} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
