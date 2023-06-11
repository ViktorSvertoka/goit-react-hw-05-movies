import React, { useEffect, useState } from 'react';
import EditorList from 'pages/EditorList/EditorList';
import { fetchTrending } from 'services/TmbdApi';
import Loader from 'components/Loader/Loader';

const Home = () => {
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
      <EditorList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
