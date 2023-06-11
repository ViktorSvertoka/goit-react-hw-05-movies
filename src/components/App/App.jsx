// import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import HomePage from 'pages/Home/Home';
import MovieDetailsPage from 'pages/MovieDetails/MovieDetails';
import MoviesPage from 'pages/Movies/Movies';

// Ленивая загрузка компонентов
// const Home = lazy(() => import('pages/Home/Home'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('components/Cast/Cast'));
// const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
