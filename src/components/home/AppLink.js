import React from 'react';

const AppLink = () => {
  return (
    <div className='applink-page container wrapper'>
      <div className='applink-image'>
        <img
          src={require('../../assets/find-dhaka.webp')}
          alt=''
          className='finddhaka-img'
        />
      </div>

      <div className='applink-content'>
        <h3>
          Be it residential or business address
          <br />
          Get everything in one app
        </h3>
        <h3 class='find'>Find address easily! </h3>
        <a href='https://play.google.com/store/apps/details?id=com.barikoi.barikoidemo&hl=en'>
          <img
            src={require('../../assets/google-play.webp')}
            alt=''
            className='googleplay-img'
          />
        </a>
      </div>
    </div>
  );
};

export default AppLink;
