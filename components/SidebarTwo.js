import React, { useEffect, useState } from 'react';
import axios from 'axios';

const fetchGenres = async () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API;

  // Fetch movie genres
  const movieGenresResponse = await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list',
    {
      params: {
        api_key: apiKey,
      },
    }
  );
  const movieGenres = movieGenresResponse.data.genres || [];

  // Fetch TV show genres
  const tvGenresResponse = await axios.get(
    'https://api.themoviedb.org/3/genre/tv/list',
    {
      params: {
        api_key: apiKey,
      },
    }
  );
  const tvGenres = tvGenresResponse.data.genres || [];

  return { movieGenres, tvGenres };
};

const SidebarTwo = ({
  movieGenres: initialMovieGenres,
  tvGenres: initialTvGenres,
}) => {
  const [movieGenres, setMovieGenres] = useState(initialMovieGenres || []);
  const [tvGenres, setTvGenres] = useState(initialTvGenres || []);

  useEffect(() => {
    if (!movieGenres.length || !tvGenres.length) {
      fetchGenres().then(({ movieGenres, tvGenres }) => {
        setMovieGenres(movieGenres);
        setTvGenres(tvGenres);
      });
    }
  }, [movieGenres, tvGenres]);

  if (!tvGenres.length || !movieGenres.length) {
    return <div>Loading...</div>; // Add a loading state while the data is being fetched
  }

  return (
    <>
      <ul>
        {tvGenres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <ul>
        {movieGenres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SidebarTwo;

export async function getServerSideProps() {
  try {
    const { movieGenres, tvGenres } = await fetchGenres();

    return {
      props: {
        movieGenres,
        tvGenres,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        movieGenres: [],
        tvGenres: [],
      },
    };
  }
}
