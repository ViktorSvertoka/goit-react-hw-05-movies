import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from './../../services/TmbdApi';
import Loader from './../../components/Loader/Loader';
import { Container, List } from './MovieDetails.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Получение параметра movieId из URL с помощью хука useParams
  const [movieInfo, setMovieInfo] = useState(null); // Состояние для хранения информации о фильме
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки
  const location = useLocation(); // Получение текущего местоположения (URL)

  useEffect(() => {
    const fetchMovieDetailsFilms = async () => {
      setLoading(true); // Устанавливаем состояние загрузки в true перед запросом
      try {
        const detailMovie = await fetchMovieDetails(movieId); // Выполняем запрос на получение подробной информации о фильме с использованием API-сервиса
        setMovieInfo(detailMovie); // Устанавливаем полученную информацию о фильме в состояние
      } catch (error) {
        console.log(error); // Обрабатываем возможные ошибки и выводим их в консоль
      } finally {
        setLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
      }
    };
    fetchMovieDetailsFilms(); // Вызываем функцию получения информации о фильме при каждом изменении параметра movieId
  }, [movieId]);

  return (
    <>
      <Link to={location?.state?.from ?? '/movies'}>
        <button type="button">Go back</button>
      </Link>
      {loading && <Loader />}{' '}
      {/* Отображение компонента загрузки во время выполнения запроса */}
      {movieInfo && (
        <Container>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div>
            <h1>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieInfo.popularity}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <List>
              {movieInfo.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </List>
          </div>
        </Container>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>{' '}
            {/* Ссылка на страницу с информацией о актерах */}
          </li>
          <li>
            <Link to="reviews">Reviews</Link>{' '}
            {/* Ссылка на страницу с отзывами */}
          </li>
        </ul>
        <hr />
        <Outlet /> {/* Отображение вложенного маршрута */}
      </div>
    </>
  );
};

export default MovieDetailsPage;
