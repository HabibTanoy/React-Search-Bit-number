import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ApiContent = () => {
  const [dropdownId, setDropdownId] = useState(null);

  const handleDropdown = (e) => {
    //console.log('from api toggle dropdown', e.currentTarget.lastChild);
    e.currentTarget.lastChild.classList.toggle('flip-v');
    // const icon = document.querySelector('.transition');
    // icon.classList.toggle('flip-v');
    //console.log(icon);
    if (dropdownId !== e.currentTarget.id) {
      setDropdownId(e.currentTarget.id);
    } else {
      setDropdownId('');
    }
  };

  return (
    <div className=' api-content wrapper'>
      <div className='heading'>
        <h1>With Barikoi API</h1>
        <p className='p-light-small'>
          Improve user experience and drive engagement for your product
        </p>
      </div>

      <div className='api-page'>
        <div className='content-image'>
          <img src={require('../../../assets/dashboard.webp')} alt='' />
        </div>

        <div className='dropdown-info'>
          <div className='dropdown-card'>
            <div className='dropdown-title' id='1' onClick={handleDropdown}>
              <legend>Search</legend>
              <FontAwesomeIcon
                icon='angle-down'
                size='lg'
                className='transition-rotate'
              />
            </div>

            <div
              className={`${
                dropdownId === '1' ? 'open-dropdown ' : 'hide-dropdown'
              }`}
            >
              <p className='p-light-smaller'>
                Make your website or apps search experience better with the best
                location data with the best search algorithm which can be both
                configured to be location relevant and location agnostic.
              </p>
            </div>
          </div>

          <div className='dropdown-card'>
            <div className='dropdown-title' id='2' onClick={handleDropdown}>
              <legend>Nearby Suggestions</legend>
              <FontAwesomeIcon
                icon='angle-down'
                size='lg'
                className='transition-rotate'
              />
            </div>

            <div
              className={`${
                dropdownId === '2' ? 'open-dropdown ' : 'hide-dropdown'
              }`}
            >
              <p className='p-light-smaller'>
                Make the best possible experience for your user with our nearby
                search suggestion. This api allows to show nearby addresses to
                select from to the user's current location. This reduces the
                chance of selecting the wrong address.
              </p>
            </div>
          </div>

          <div className='dropdown-card'>
            <div className='dropdown-title' id={3} onClick={handleDropdown}>
              <legend>Reverse Geocode</legend>
              <FontAwesomeIcon
                icon='angle-down'
                size='lg'
                className='transition-rotate'
              />
            </div>

            <div
              className={`${
                dropdownId === '3' ? 'open-dropdown ' : 'hide-dropdown'
              }`}
            >
              <p className='p-light-smaller'>
                Is the process of converting your location coordinates to a
                readable location or address. Our reverse geocoding api is the
                best in the country with full, error free address line data.
              </p>
            </div>
          </div>

          <div className='api-btn'>
            <a href='https://developer.barikoi.com'>
              <button className='btn bkoi-btn btn-circle'>Get Started!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiContent;
