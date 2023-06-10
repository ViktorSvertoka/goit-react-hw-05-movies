import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

// Ленивая загрузка компонентов
const Home = lazy(() => import('..//../pages/Home/Home')); // Компонент для домашней страницы
const Movies = lazy(() => import('..//../pages/Movies/Movies')); // Компонент для страницы с фильмами
const MovieDetails = lazy(() =>
  import('..//../pages/MovieDetails/MovieDetails')
); // Компонент для страницы с подробной информацией о фильме
const Cast = lazy(() => import('./../Cast/Cast')); // Компонент для страницы с актерским составом фильма
const Reviews = lazy(() => import('./../Reviews/Reviews')); // Компонент для страницы с обзорами фильма

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
