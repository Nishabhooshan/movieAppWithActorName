import React from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './styles.css'

const App = () => {
  return (
    <div>
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default App;
