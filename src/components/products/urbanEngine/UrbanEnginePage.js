import React, { Fragment } from 'react';

//import components
import UrbanHeader from './UrbanHeader';
import UrbanContent from './UrbanContent';
import Navbar from '../../layout/Navbar';

const UrbanEnginePage = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <UrbanHeader />
        <UrbanContent />
      </div>
    </Fragment>
  );
};

export default UrbanEnginePage;
