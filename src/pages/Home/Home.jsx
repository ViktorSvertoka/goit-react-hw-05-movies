import React, { useEffect, useState } from 'react';
import EditorList from 'components/EditorList/EditorList';
import { fetchTrending } from 'services/TmbdApi';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
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
