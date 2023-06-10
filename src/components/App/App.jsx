import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loader from './../Loader/Loader';
import { Container, Link } from './App.styled';

// Ленивая загрузка компонентов
const Home = lazy(() => import('./../../pages/Home/Home')); // Компонент для домашней страницы
const Movies = lazy(() => import('./../../pages/Movies/Movies')); // Компонент для страницы с фильмами
const MovieDetails = lazy(() =>
  import('./../../pages/MovieDetails/MovieDetails')
); // Компонент для страницы с подробной информацией о фильме
const Cast = lazy(() => import('./../Cast/Cast')); // Компонент для страницы с актерским составом фильма
const Reviews = lazy(() => import('./../Reviews/Reviews')); // Компонент для страницы с обзорами фильма

const App = () => {
  return (
    <Container>
      <Helmet>
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
      </Helmet>
      <header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies" end>
            Movies
          </Link>
          <hr />
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />

            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
