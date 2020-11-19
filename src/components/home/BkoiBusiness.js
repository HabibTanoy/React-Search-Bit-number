import React from 'react';

const BkoiBusiness = () => {
  return (
    <div className='bkoi-page container wrapper'>
      <div className='left-content'>
        <h1 className=''>
          Combining <br /> Mapping and data to <br /> build better cities.
        </h1>

        <h3>
          Barikoi for <br /> Business{' '}
        </h3>
      </div>

      <div className='right-content flex-order'>
        <div className='card'>
          <div className='card-image'>
            <img src={require('../../assets/smartcity.webp')} alt='' />
          </div>
          <div className='card-info'>
            <legend className='title'>Smart City</legend>
            <div className='content'>
              <p className='p-light-smaller'>
                Detailed data to improve operations, engage residents and
                support local communities.
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-image'>
            <img src={require('../../assets/logistics-auto.webp')} alt='' />
          </div>
          <div className='card-info'>
            <legend className='title'>Logistics Automation</legend>
            <div className='content'>
              <p className='p-light-smaller'>
                Amaze your users with precise routing and planning. Grow your
                business with us.
              </p>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-image'>
            <img src={require('../../assets/customer.webp')} alt='' />
          </div>
          <div className='card-info'>
            <legend className='title'>Customer Mapping</legend>
            <div className='content'>
              <p className='p-light-smaller'>
                Enabling Financial institutions like banks to take data driven
                decisions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkoiBusiness;
