import axios from 'axios';

const API_KEY = 'a6164a42f44684b25b63c2b30ed1c2c2';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMoviesToday = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data.results;
};

export const getMovieDetails = async query => {
  const { data } = await axios.get(
    `movie/{movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const getMovieCredits = async query => {
  const { data } = await axios.get(
    `movie/{movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const getMovieReviews = async query => {
  const { data } = await axios.get(
    `movie/{movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
};
