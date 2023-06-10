import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchByKeyword } from './../../services/TmbdApi';
import Loader from './../../components/Loader/Loader';
import EditorList from './../../components/EditorList/EditorList';

const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState([]); // Состояние для хранения результатов поиска фильмов
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки
  const [searchParams, setSearchParams] = useSearchParams({}); // Хук для работы с параметрами URL
  const queryMovie = searchParams.get('query'); // Получение значения параметра 'query' из URL
  const [noMoviesText, setNoMoviesText] = useState(false); // Состояние для отображения текста "There is no movies with this request"

  const handleSubmit = event => {
    event.preventDefault(); // Предотвращение перезагрузки страницы при отправке формы
    setSearchParams({ query: event.target.elements.query.value.toLowerCase() }); // Установка значения параметра 'query' в URL
  };

  useEffect(() => {
    if (queryMovie) {
      const searchMovies = async () => {
        setLoading(true); // Устанавливаем состояние загрузки в true перед запросом
        try {
          const searchResults = await fetchSearchByKeyword(queryMovie); // Выполняем запрос на поиск фильмов по ключевому слову с использованием API-сервиса
          setSearchFilms(searchResults); // Устанавливаем полученные результаты поиска в состояние
          if (searchResults.length === 0) {
            setNoMoviesText(true);
          } else {
            setNoMoviesText(false);
          }
        } catch (error) {
          console.log(error); // Обрабатываем возможные ошибки и выводим их в консоль
        } finally {
          setLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
        }
      };
      searchMovies(); // Вызываем функцию поиска фильмов при каждом изменении параметра 'query'
    }
  }, [queryMovie]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" autoFocus />

        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}

      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}

      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default MoviesPage;
