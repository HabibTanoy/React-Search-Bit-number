import React from 'react';
import RupantorImage from './RupantorImage';

const RupantorHeader = () => {
  return (
    <div className='api-page rupantor-page'>
      <RupantorImage />

      <div className='rupantor-wrapper'>
        <div>
          <div className='heading'>
            <h1>
              Rupantor
              <span class='by-bkoi'> by Barikoi</span>
            </h1>

            <h4>
              First of its kind API that turns your bad address <br /> into good
              ones!
            </h4>

            <p class='p-light-small animated fade-in-right animated-text'>
              Our rich, error-free database is a great source for <br />
              the growing logistic industry in our country.
            </p>
          </div>

          <div className='btns animated fade-in-right animated-btn'>
            <a href='https://rupantor.barikoi.com/#/products/rupantor'>
              <button class='btn bkoi-btn btn-circle blue-btn'>
                Try Rupantor Demo
              </button>
            </a>

            <a href='https://developer.barikoi.com'>
              <button class='btn bkoi-btn btn-circle'>Get Started</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RupantorHeader;
