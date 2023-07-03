import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';

const SearchBar = () => {
  const [actorName, setActorName] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setActorName(event.target.value);
  };

  const handleSearch = () => {
    if (actorName.trim() !== '') {
      dispatch(fetchMovies(actorName));
    }
  };

  return (
    <div className="search-container">
      <input
       className="search-input"
        type="text"
        value={actorName}
        onChange={handleInputChange}
        placeholder="Enter actor's name"
      />
      <button className="search-button" onClick={handleSearch} disabled={actorName.trim() === ''}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
