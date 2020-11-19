import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UrbanContent = () => {
  const [dropdownId, setDropdownId] = useState(null);

  const handleDropdown = (e) => {
    //console.log('from urban toggle dropdown', e.currentTarget.id, e.target);
    e.currentTarget.lastChild.classList.toggle('flip-v');

    if (dropdownId !== e.currentTarget.id) {
      setDropdownId(e.currentTarget.id);
    } else {
      setDropdownId('');
    }
  };

  return (
    <div className=' api-content wrapper'>
      <div className='heading'>
        <h1>With UrbanEngine</h1>
        <p className='p-light-small'>
          Once mapped, the UrbanEngine can be connected and automate
        </p>
      </div>

      <div className='api-page'>
        <div className='content-image'>
          <img src={require('../../../assets/urban-content.webp')} alt='' />
        </div>

        <div className='dropdown-info'>
          <div className='dropdown-card'>
            <div className='dropdown-title' id={1} onClick={handleDropdown}>
              <legend>Holding Tax Collection</legend>
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
                Proper mapping of holdings increases visibility and transparency
                which leads to better management and collection.
              </p>
            </div>
          </div>

          <div className='dropdown-card'>
            <div className='dropdown-title' id={2} onClick={handleDropdown}>
              <legend>Trade License Management</legend>
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
                Enable an efficient way to manage trade-licenses from issuing it
                to renewing it to tracking and monitoring the trades, all can be
                done with urban engine
              </p>
            </div>
          </div>

          <div className='dropdown-card'>
            <div className='dropdown-title' id={3} onClick={handleDropdown}>
              <legend>Road Management</legend>
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
                A complete solution to manage information about road
                construction, repairing, reporting
              </p>
            </div>
          </div>

          <div className='dropdown-card'>
            <div className='dropdown-title' id={4} onClick={handleDropdown}>
              <legend>Waste Management</legend>
              <FontAwesomeIcon
                icon='angle-down'
                size='lg'
                className='transition-rotate'
              />
            </div>

            <div
              className={`${
                dropdownId === '4' ? 'open-dropdown ' : 'hide-dropdown'
              }`}
            >
              <p className='p-light-smaller'>
                A unique way to predict the volume of waste generated and then
                manage with the data to efficiently manage the waste.
              </p>
            </div>
          </div>

          <div className='api-btn'>
            <a href="mailto:hello@barikoi.com?Subject=Barikoi%20Urban%20Solution" target="_top">
              <button className='btn bkoi-btn btn-circle'>Contact Sales</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbanContent;
