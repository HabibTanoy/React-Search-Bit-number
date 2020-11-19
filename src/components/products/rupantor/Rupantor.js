import React, { Fragment } from 'react';
import RupantorHeader from './RupantorHeader';
import RupantorContent from './RupantorContent';
import Navbar from '../../layout/Navbar';

const Rupantor = () => {
  return (
    <Fragment>
      <Navbar />
      <RupantorHeader />
      <div className='container'>
        <RupantorContent />
      </div>
    </Fragment>
  );
};
export default Rupantor;
