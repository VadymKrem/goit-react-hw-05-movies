import { useEffect, useState } from 'react';

import { getTrendingMoviesToday } from 'service/getMovies';

import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMoviesToday('').then(setMovies);
    // параметр запиту підказали..не розумію чого так
  }, []);

  return (
    <>
      <h1>Trending movies today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
