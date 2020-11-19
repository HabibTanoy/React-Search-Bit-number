import React from 'react';

const BkoiBuilt = () => {
  return (
    <div className='bkoi-page container wrapper'>
      <div className='left-content'>
        <h1 className=''>Users who trusted our platform.</h1>

        <h3>
          Built with <br /> Barikoi{' '}
        </h3>

        <div className='built-btn'>
          <a href='https://developer.barikoi.com/'>
            <button className='btn bkoi-btn btn-circle'>Start Building!</button>
          </a>
        </div>
      </div>

      <div className='right-content company-logos'>
        <div className='logo-block logo-block-1'>
          <div className='company-logo'>
            <img
              src={require('../../assets/company-logos/sheba.webp')}
              alt=''
            />
          </div>
          <div className='company-logo'>
            <img
              src={require('../../assets/company-logos/chaldal.webp')}
              alt=''
            />
          </div>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/ajkerdeal.webp')} />
          </div>
        </div>

        <div className='logo-block logo-block-2'>
          <div className='company-logo'>
            <img
              src={require('../../assets/company-logos/styline.webp')}
              alt=''
            />
          </div>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/easytrax.webp')} />
          </div>

          <div className='company-logo'>
            <img src={require('../../assets/company-logos/lk.webp')} />
          </div>
        </div>

        <div className='logo-block logo-block-3'>
          <div className='company-logo'>
            <img src={require('../../assets/company-logos/walletmix.webp')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkoiBuilt;
