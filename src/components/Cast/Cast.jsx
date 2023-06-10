import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from 'services/TmbdApi';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams(); // Получение параметра movieId из URL
  const [actors, setActors] = useState([]); // Состояние для хранения списка актеров
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки

  useEffect(() => {
    const onActorsOfMovie = () => {
      setLoading(true); // Устанавливаем флаг загрузки в true

      fetchActors(movieId)
        .then(actors => {
          setActors(actors); // Обновляем состояние актеров с полученными данными
        })
        .catch(error => {
          console.log(error); // Обрабатываем ошибку, если произошла
        })
        .finally(() => {
          setLoading(false); // Устанавливаем флаг загрузки в false после выполнения запроса
        });
    };

    onActorsOfMovie(); // Вызываем функцию для получения актеров фильма
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}

      <ul>
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li key={id}>
            <img
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
