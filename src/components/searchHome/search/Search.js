import React from 'react';

//import components
import SearchBar from './searchBar/SearchBar';

const Search = ({ setSlide, isSlide }) => {
  return (
    <div className={`search-container ${isSlide ? 'slide-close ' : ''}`}>
      <SearchBar setSlide={setSlide} isSlide={isSlide} />
    </div>
  );
};

export default Search;
