import React from 'react';

const UrbanHeader = () => {
  return (
    <div className='api-page api-header wrapper'>
      <div className='header-image'>
        <img src={require('../../../assets/urban-header.webp')} alt='' />
      </div>

      <div className='right-flex'>
        <h1>
          Enabling the <br /> City Authorities to make <br /> Data Driven
          decisions
        </h1>

        <p className='p-light-small'>
          Be it trade license tax or Holding tax or Birth Certificate issue -
          Everything city corporation can monitor from one single dashboard.
          Search for any house/building and get Location pictures, Holding Tax,
          Trade License fee instantly.
        </p>
      </div>
    </div>
  );
};

export default UrbanHeader;
