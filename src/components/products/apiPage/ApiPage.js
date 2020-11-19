import React, { Fragment } from 'react';

//import components
import ApiHeader from '../apiPage/ApiHeader';
import ApiContent from '../apiPage/ApiContent';
import Navbar from '../../layout/Navbar';

const ApiPage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <ApiHeader />
        <ApiContent />
      </div>
    </Fragment>
  );
};

export default ApiPage;
