import React from 'react';
import { connect } from 'react-redux';

const NearByList = ({ nearby }) => {
  const nearByList =
    nearby &&
    nearby.map(
      (item) => (
        <li key={item.id}>
          <div className='nearby-info'>
            <p>{item.Address}</p>
          </div>
        </li>
      )
      //console.log({ nearby });
    );
  return (
    <div className='nearby-content hide-mobile show-desktop'>
      <ul className='scroll'>{nearByList}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nearby: state.search.nearby,
});
export default connect(mapStateToProps)(NearByList);
