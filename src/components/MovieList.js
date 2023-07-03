import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const MovieList = () => {
  const movies = useSelector((state) => state.movies);

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {movies.length > 0 ? (
        <div className="movie-list">
          {currentMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              posterPath={movie.poster_path}
            />
          ))}
          <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={movies.length}
            paginate={paginate}
          />
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
