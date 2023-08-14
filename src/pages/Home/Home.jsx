import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';

import { getTrendingMoviesToday } from 'service/getMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMoviesToday().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending movies today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
