import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditorList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films &&
        films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

EditorList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default EditorList;
