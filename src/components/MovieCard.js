import React from 'react';

const MovieCard = ({ title, releaseDate, posterPath }) => {
  return (
    <div className="movie-card">
      <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
      <div className="movie-details">
      <p className="movie-title">{title}</p>
      <p className="movie-release-date">Release Date: {releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
