import { lazy, Suspense } from 'react';
import {
  Route,
  Routes,
  NavLink as NewNavLink,
  Navigate,
} from 'react-router-dom';
import { Container, StyledNavLink } from './App.styled';

// Ленивая загрузка компонентов
const Home = lazy(() => import('..//../pages/Home/Home')); // Компонент для домашней страницы
const Movies = lazy(() => import('..//../pages/Movies/Movies')); // Компонент для страницы с фильмами
const MovieDetails = lazy(() =>
  import('..//../pages/MovieDetails/MovieDetails')
); // Компонент для страницы с подробной информацией о фильме
const Cast = lazy(() => import('../Cast/Cast')); // Компонент для страницы с актерским составом фильма
const Reviews = lazy(() => import('../Reviews/Reviews')); // Компонент для страницы с обзорами фильма

const App = () => {
  return (
    <Container>
      <nav>
        {/* Навигационные ссылки */}
        <StyledNavLink as={NewNavLink} to="/">
          Home
        </StyledNavLink>

        <StyledNavLink as={NewNavLink} to="/movies">
          Movies
        </StyledNavLink>

        <hr />
      </nav>
      <Suspense fallback="loading">
        <Routes>
          {/* Маршрут для домашней страницы */}
          <Route path="/" element={<Home />} />

          {/* Маршрут для страницы с фильмами */}
          <Route path="movies" element={<Movies />} />

          {/* Маршрут для страницы с подробной информацией о фильме */}
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* Вложенные маршруты для страницы с подробной информацией о фильме */}
            <Route path="cast" element={<Cast />} />{' '}
            {/* Маршрут для страницы с актерским составом фильма */}
            <Route path="reviews" element={<Reviews />} />{' '}
            {/* Маршрут для страницы с обзорами фильма */}
          </Route>

          {/* Маршрут для перенаправления на домашнюю страницу в случае неправильного адреса */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;