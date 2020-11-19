import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='overlay'></div>
      <div className='landing-image hide-mobile show-desktop'>
        <img src={require('../../assets/landing-image.webp')} alt='' />
      </div>

      <div className='landing-content container'>
        <div>
          <div className='landing-info'>
            <h1 className='variant-text'>
              Enabling Location Experience
              <br />
              <span className='primary-text'>For Bangladesh & Beyond</span>
            </h1>
          </div>

          <Link to='/search'>
            <div className='search-btn'>
              <button>Search a location</button>

              <div className='search-icon'>
                <FontAwesomeIcon icon='search' size='lg' color='white' />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
