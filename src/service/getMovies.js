import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  language: 'en-US',
  api_key: 'a6164a42f44684b25b63c2b30ed1c2c2',
  include_adult: false,
  page: 1,
};

export const getTrendingMoviesToday = async () => {
  const { data } = await axios.get(`trending/movie/day`);

  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(`search/movie?query=${query}`);
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data.results;
};
