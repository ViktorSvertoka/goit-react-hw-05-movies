// Импортируем модуль axios для работы с HTTP-запросами
import axios from 'axios';

// Константа с API-ключом
const API_KEY = '992758a4802a699e8df27d4d6efc34fb';

// Устанавливаем базовый URL для всех запросов
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// Функция для получения трендовых фильмов
export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// Функция для поиска фильмов по ключевому слову
export const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};

// Функция для получения деталей фильма по его идентификатору
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// Функция для получения списка актеров фильма
export const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

// Функция для получения отзывов о фильме
export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
