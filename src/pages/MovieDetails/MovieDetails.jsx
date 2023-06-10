import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '..//../services/TmbdApi';
import Loader from '..//../components/Loader/Loader';
import { Container, List } from './MovieDetails.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Получение параметра movieId из URL с помощью хука useParams
  const [movieInfo, setMovieInfo] = useState(null); // Состояние для хранения информации о фильме
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки
  const location = useLocation(); // Получение текущего местоположения (URL)

  useEffect(() => {
    const fetchMovieDetailsFilms = () => {
      setLoading(true); // Устанавливаем состояние загрузки в true перед запросом

      fetchMovieDetails(movieId)
        .then(detailMovie => {
          setMovieInfo(detailMovie); // Устанавливаем полученную информацию о фильме в состояние
        })
        .catch(error => {
          console.log(error); // Обрабатываем возможные ошибки и выводим их в консоль
        })
        .finally(() => {
          setLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
        });
    };

    fetchMovieDetailsFilms(); // Вызываем функцию получения информации о фильме при каждом изменении параметра movieId
  }, [movieId]);

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieInfo || {};

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button type="button">Go back</button>
      </Link>
      {loading && <Loader />}

      {movieInfo && (
        <Container>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
            }
            alt={original_title}
          />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <List>
              {genres.map(genre => (
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
