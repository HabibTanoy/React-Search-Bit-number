import React from 'react';

const RupantorContent = () => {
  return (
    <div className=' api-content wrapper'>
      <div className='heading'>
        <h1>With Rupantor</h1>
        <p className='p-light-small'>
          Transform your operation into efficient one and let’s grow together
        </p>
      </div>

      <div className='api-page'>
        <div className='content-image'>
          <img src={require('../../../assets/rupantor-impact.webp')} alt='' />
        </div>

        <div className='right-flex'>
          <p className='p-light-small'>
            Our rich, error-free database is a great source for the growing
            logistic industry in our country. Delivery services can be
            efficiently handled by taking advantage of our data and planning
            ahead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RupantorContent;
