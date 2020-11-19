import React from 'react';

const ApiHeader = () => {
  return (
    <div className='api-page api-header wrapper'>
      <div className='header-image api-header-image'>
        <img src={require('../../../assets/bkoi-api-banani.webp')} alt='' />
      </div>

      <div className='right-flex'>
        <h1>
          More precise and <br /> The most effiecient <br /> Way to locate.
        </h1>

        <p className='p-light-small'>
          Over 90% addresses of Dhaka City Corporation has been enlisted and
          POI's from 63 other District cities are in the coverage and can be
          smoothly accessed with BarikoiAPI. Since data has been prioritized in
          local context, it is more accurate.
        </p>
      </div>
    </div>
  );
};

export default ApiHeader;
