// Импортируем модуль axios для работы с HTTP-запросами
import axios from 'axios';

// Константа с API-ключом
const API_KEY = '9a0701f2e35c588a9bcc5f999814db26';

// Устанавливаем базовый URL для всех запросов
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// Функция для получения трендовых фильмов
const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

// Функция для поиска фильмов по ключевому слову
const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};

// Функция для получения деталей фильма по его идентификатору
const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// Функция для получения списка актеров фильма
const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

// Функция для получения отзывов о фильме
const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};

// Объект с экспортируемыми функциями
const api = {
  fetchTrending, // Получение трендовых фильмов
  fetchSearchByKeyword, // Поиск фильмов по ключевому слову
  fetchMovieDetails, // Получение деталей фильма
  fetchActors, // Получение списка актеров фильма
  fetchReviews, // Получение отзывов о фильме
};

export default api;
