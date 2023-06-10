import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from '..//../services/TmbdApi';
import Loader from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams(); // Получение параметра movieId из URL с помощью хука useParams
  const [reviews, setReviews] = useState([]); // Состояние для хранения отзывов
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки

  useEffect(() => {
    const fetchReviewsFilms = () => {
      setLoading(true); // Устанавливаем состояние загрузки в true перед запросом

      fetchReviews(movieId)
        .then(reviews => {
          setReviews(reviews); // Устанавливаем полученные отзывы в состояние
        })
        .catch(error => {
          console.log(error); // Обрабатываем возможные ошибки и выводим их в консоль
        })
        .finally(() => {
          setLoading(false); // Устанавливаем состояние загрузки в false после завершения запроса
        });
    };

    fetchReviewsFilms(); // Вызываем функцию получения отзывов при каждом изменении параметра movieId
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {reviews.length !== 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
