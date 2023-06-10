import React, { useEffect, useState } from 'react';
import EditorList from './../../components/EditorList/EditorList';
import { fetchTrending } from './../../services/TmbdApi';
import Loader from './../../components/Loader/Loader';

const HomePage = () => {
  const [films, setFilms] = useState([]); // Состояние для хранения списка фильмов
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      setLoading(true); // Устанавливаем состояние загрузки в true перед запросом
      try {
        const trendingFilms = await fetchTrending(); // Выполняем запрос на получение популярных фильмов с использованием API-сервиса
        setFilms(trendingFilms); // Устанавливаем полученные фильмы в состояние
      } catch (error) {
        console.log(error); // Обрабатываем возможные ошибки и выводим их в консоль
      } finally {
        setLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
      }
    };
    fetchTrendingFilms(); // Вызываем функцию получения популярных фильмов при монтировании компонента (пустой массив зависимостей)
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {films && <EditorList films={films} />}

      {loading && <Loader />}
    </main>
  );
};

export default HomePage;
