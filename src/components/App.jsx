import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';

const Home = lazy(() => import('../components/Pages/Home'));
const MoviesDetails = lazy(() => import('../components/Pages/MoviesDetails'));
const Movies = lazy(() => import('../components/Pages/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
