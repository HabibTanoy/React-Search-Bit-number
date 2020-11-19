import React from 'react';

const PricingDefinition = () => {
  return (
    <div className='pricing-def api-content wrapper'>
      <div className='heading'>
        <div className='shield-image'>
          <img src={require('../../assets/pricing-shield.svg')} alt='' />
        </div>

        <h1>Barikoi Pricing</h1>
        <p className='p-light-small'>
          Whether you’re just getting started or Building at scale, we’re here
          to help.
          <br /> With Guaranteed response times and dedicated assistance,
          <br /> we promise to help and support when you need it.
          For tech support please mail at <a style={{color: '#488DE0'}} href="mailto:support@barikoi.com?Subject=Barikoi%20Tech%20Support">support@barikoi.com</a>

        </p>
      </div>
    </div>
  );
};

export default PricingDefinition;
