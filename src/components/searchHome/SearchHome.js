import React, { Fragment, useState } from 'react';
import Search from './search/Search';
import MapContainer from './map/MapContainer';

const SearchHome = () => {
  const [isSlide, setSlide] = useState(false);

  return (
    <Fragment>
      <div className='search-home'>
        <Search setSlide={setSlide} isSlide={isSlide} />
        <MapContainer setSlide={setSlide} isSlide={isSlide} />
      </div>
    </Fragment>
  );
};

export default SearchHome;
