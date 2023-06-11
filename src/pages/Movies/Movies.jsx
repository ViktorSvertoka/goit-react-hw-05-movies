import { useState } from 'react';
import Loader from 'components/Loader/Loader';
import EditorList from 'pages/EditorList/EditorList';
import Form from 'components/Form/Form';
import { fetchSearchByKeyword } from 'services/TmbdApi';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const searchMovies = queryMovie => {
    setLoading(true);

    fetchSearchByKeyword(queryMovie)
      .then(searchResults => {
        setSearchFilms(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {loading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {searchFilms && <EditorList films={searchFilms} />}
    </main>
  );
};

export default Movies;

// import { useState, useEffect } from 'react';
// // import { useSearchParams } from 'react-router-dom';
// import { fetchSearchByKeyword } from 'services/TmbdApi';
// import Loader from 'components/Loader/Loader';
// import EditorList from 'pages/EditorList/EditorList';
// import Form from 'pages/Form/Form';

// const Movies = () => {
//   const [searchFilms, setSearchFilms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   // const [searchParams, setSearchParams] = useSearchParams({});
//   const queryMovie = searchParams.get('query');
//   const [noMoviesText, setNoMoviesText] = useState(false);

//   // const handleSubmit = event => {
//   //   event.preventDefault();
//   //   setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
//   // };

//   useEffect(() => {
//     if (queryMovie) {
//       const searchMovies = () => {
//         setLoading(true);

//         fetchSearchByKeyword(queryMovie)
//           .then(searchResults => {
//             setSearchFilms(searchResults);
//             if (searchResults.length === 0) {
//               setNoMoviesText(true);
//             } else {
//               setNoMoviesText(false);
//             }
//           })
//           .catch(error => {
//             console.log(error);
//           })
//           .finally(() => {
//             setLoading(false);
//           });
//       };

//       searchMovies();
//     }
//   }, [queryMovie]);

//   return (
//     <main>
//       <Form />
//       {/* <form onSubmit={handleSubmit}>
//         <input type="text" name="query" autoFocus />

//         <button type="submit">Search</button>
//       </form> */}
//       {loading && <Loader />}

//       {noMoviesText && (
//         <p>There is no movies with this request. Please, try again</p>
//       )}

//       {searchFilms && <EditorList films={searchFilms} />}
//     </main>
//   );
// };

// export default Movies;
