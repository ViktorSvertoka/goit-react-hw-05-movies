import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from './../../services/TmbdApi';
import Loader from './../Loader/Loader';

const Cast = () => {
  const { movieId } = useParams(); // Получение параметра movieId из URL
  const [actors, setActors] = useState([]); // Состояние для хранения списка актеров
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки

  useEffect(() => {
    const onActorsOfMovie = async () => {
      setLoading(true); // Устанавливаем флаг загрузки в true
      try {
        const actors = await fetchActors(movieId); // Выполняем запрос к API для получения актеров фильма
        setActors(actors); // Обновляем состояние актеров с полученными данными
      } catch (error) {
        console.log(error); // Обрабатываем ошибку, если произошла
      } finally {
        setLoading(false); // Устанавливаем флаг загрузки в false после выполнения запроса
      }
    };
    onActorsOfMovie(); // Вызываем функцию для получения актеров фильма
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}{' '}
      {/* Отображение компонента Loader во время загрузки */}
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <img
              width="200px"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` // Если у актера есть изображение, используем его URL
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg` // Если у актера нет изображения, используем заглушку
              }
              alt={actor.original_name}
            />
            <p>{actor.name}</p> {/* Отображение имени актера */}
            <p>Character: {actor.character}</p> {/* Отображение роли актера */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
