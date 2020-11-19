import React from 'react';
import { Link } from 'react-router-dom';

const BkoiDevelopers = () => {
  return (
    <div className='bkoi-page container wrapper'>
      <div className='left-content left-flex'>
        <h3>
          Barikoi for <br /> Developers{' '}
        </h3>

        <div className='card'>
          <div className='card-image'>
            <img src={require('../../assets/smartcity.webp')} alt='' />
          </div>
          <div className='card-info'>
            <legend className='title'>Start for Free</legend>
            <div className='content'>
              <p className='p-light-smaller'>
                Get 30,000 API Calls for FREE / Month. Pay per 100 call 15 taka
                afterwards !
              </p>

              <Link to='/pricing'>Learn More</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='right-content right-flex'>
        <h1 className=''>
          Better mapping, <br /> Navigation and search <br /> Experiences across{' '}
          <br /> Platforms.
        </h1>

        <p className='p-light-small'>
          Over 4 million people in Bangladesh touch Barikoi products every
          month.
        </p>

        <div className='btns'>
          <a href='https://play.google.com/store/apps/details?id=com.barikoi.barikoidemo&hl=en'>
            <button class='btn bkoi-btn btn-circle blue-btn'>
              Barikoi Demo App
            </button>
          </a>

          <a href='https://developer.barikoi.com'>
            <button class='btn bkoi-btn btn-circle'>Get Started!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BkoiDevelopers;
