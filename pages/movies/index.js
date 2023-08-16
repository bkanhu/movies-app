import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/utils/api';
import MovieCard from '@/components/MovieCard';

function MoviesPage({ movies }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [movieData, setMovieData] = useState([]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    console.log('useEffect running');
    const fetchMoviesData = async () => {
      const data = await fetchMovies(currentPage);
      setMovieData(data.results);
    };

    fetchMoviesData();
  }, [currentPage]);

  return (
    <section className="">
      <h1>Movies</h1>
      <div className="grid grid-cols-5 gap-4 movie-list">
        {movieData.length > 0 ? (
          movieData.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>No movies available.</p>
        )}
      </div>
      <div className="flex items-center justify-end w-full gap-5 pr-10 mt-8">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const movies = await fetchMovies();

  return {
    props: {
      movies,
    },
  };
}

export default MoviesPage;
