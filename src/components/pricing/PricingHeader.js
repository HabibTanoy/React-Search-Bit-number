import React from 'react';

const PricingHeader = () => {
  return (
    <div className='price-header api-content wrapper'>
      <div className='heading'>
        <h1>Start for Free</h1>
        <p className='p-light-small'>
          Get 30,000 API Calls FREE every month and build without <br />
          any friction. Pay 15 Tk / 100 call afterwards
        </p>
        
        <a style={{color:'#488DE0'}} href="https://docs.barikoi.com/docs/pricing-call/" target="_blank">API Usage and Pricing Clarification</a>

        <div className='free-price-content'>
          <div className='pricing-highlight'>
            <div className='color-block color-sky'></div>
            <p className='p-light-smaller'>Easy Cancellation</p>
          </div>

          <div className='pricing-highlight'>
            <div className='color-block color-paste'></div>
            <p className='p-light-smaller'>Dedicated Assistance</p>
          </div>

          <div className='pricing-highlight'>
            <div className='color-block color-violet'></div>
            <p className='p-light-smaller'>No credit card required</p>
          </div>
        </div>

        <div className='pricing-btn'>
          <a href='https://dev.barikoi.com'>
            <button className='btn bkoi-btn btn-circle'>Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingHeader;
