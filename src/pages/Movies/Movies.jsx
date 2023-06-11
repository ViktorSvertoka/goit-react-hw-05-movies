import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchByKeyword } from 'services/TmbdApi';
import Loader from 'components/Loader/Loader';
import EditorList from 'components/EditorList/EditorList';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');
  const [noMoviesText, setNoMoviesText] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
  };

  useEffect(() => {
    if (queryMovie) {
      const searchMovies = () => {
        setLoading(true);

        fetchSearchByKeyword(queryMovie)
          .then(searchResults => {
            setSearchFilms(searchResults);
            if (searchResults.length === 0) {
              setNoMoviesText(true);
            } else {
              setNoMoviesText(false);
            }
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      };

      searchMovies();
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

export default Movies;
