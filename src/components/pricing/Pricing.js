import React from 'react';
import PricingHeader from './PricingHeader';
import PricingPlans from './PricingPlans';
import PricingDefinition from './PricingDefinition';
import PricingCalculator from './PricingCalculator';
import PricingFooter from './PricingFooter';
import Navbar from '../layout/Navbar';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <PricingHeader />
        <PricingPlans />
        <PricingDefinition />
        <PricingCalculator />
      </div>
      <PricingFooter />
    </>
  );
};

export default Pricing;
