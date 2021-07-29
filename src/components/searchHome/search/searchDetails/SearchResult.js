import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getPlace } from '../../../../actions/search';
import { getNearby } from '../../../../actions/search';

//import components
import NearByList from './NearByList';
import NearbyModal from './NearbyModal';

const SearchResult = ({ place, getNearby, resultFlag, rgPlace }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openDropdown, setDropdown] = useState(false);
  const [openNearby, setOpenNearby] = useState(false);
  const [postOffice, setPostOffice] = useState("");

  useEffect(() => {
    if(place && place.postCode) {
      // setPostOffice(place.postCode);
      getPostOfficeName(place.postCode)
    }
    
  });

  const handleMobileClick = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  const handleDesktopClick = () => {
    setDropdown(!openDropdown);
  };

  const handleNearByClick = (e) => {
    // console.log(place.bit )
    getNearby(e.target.name, place.longitude, place.latitude);
    setOpenNearby(true);
    setOpenModal(false);
  };

  place = place || rgPlace;
  let addr = place && place.Address.split(',');
  let address = addr && addr.slice(1, addr.length).join(',');

  const getPostOfficeName = postCode => {
    // console.log("demo");
    if(postCode) {
      axios.get(
        `https://rupantor.barikoi.com/sugg/search/postcodebn?q=${postCode}`
      ).then(res=> {
        const PostOfficeName = res.data && res.data.length > 0 && res.data[0].postoffice_en
        // console.log(PostOfficeName);
        setPostOffice(PostOfficeName)
      }).catch(err => console.error(err))
    }
  } 
 
  return (
    <Fragment>
      {place && resultFlag && (
        <div className='search-result container'>
          <div className='content-wrapper'>
            <div className='content'>
              <h4>
                {/* {place.place_name ? place.place_name : place.business_name} */}
                {place.place_name || place.business_name
                  ? place.place_name || place.business_name
                  : place.Address}
              </h4>
              <p>
                {/* {place.place_name ? address + ',' : ''}{' '}
                {address1 ? address1 + ',' : ''}{' '}
                {address2 ? address2 + ',' : ''}
                {address3 ? address3 + ',' : ''}
                {place.area}, {place.city} */}
                {address ? address + ',' : ''}
                {place.area ? place.area + ',' : ''}
                {place.city ? place.city : ''}
              </p>
              
              <p className='post-bit'>PostOffice Name: {postOffice}</p>
              <p className='post-bit'>Postcode: {place.postCode}</p>
              <p className='post-bit'>Bit: {place.bit.bit_number}</p>
              <div className='content-inner'>
                <span className='variant-text'>{place.subType}</span>
                <span>
                  Place Code :{' '}
                  <span className='variant-text'>{place.uCode} </span>
                </span>
              </div>
              <div>
              <span className="full-address">
                  <p className="title">User this Address Format :</p>{' '}
                {address ? address + ',' : ''}
                {place.area ? place.area + ',' : ''}
                {place.city ? place.city + ' ' : ' '}
                {place.postCode ? place.postCode + '-' : ''}
                {place.bit.bit_number}     
                </span>
              </div>
            </div>
          </div>

          <div className='explore-nearby-wrapper'>
            <div className='explore-nearby'>
              <h4>Explore Nearby</h4>
              <div className='tags'>
                <button name='food' onClick={handleNearByClick}>
                  Food
                </button>
                <button name='bank' onClick={handleNearByClick}>
                  Bank
                </button>
                <button name='healthcare' onClick={handleNearByClick}>
                  Healthcare
                </button>
                <a
                  name='more'
                  onClick={handleMobileClick}
                  className='hide-desktop'
                >
                  More..
                </a>
                <a
                  name='more'
                  onClick={handleDesktopClick}
                  className='show-desktop hide-mobile'
                >
                  More..
                </a>
              </div>

              {openDropdown && (
                <div className='tags'>
                  <button name='education' onClick={handleNearByClick}>
                    {' '}
                    Education
                  </button>
                  <button name='hotel' onClick={handleNearByClick}>
                    Hotel
                  </button>
                </div>
              )}
            </div>

            {openNearby ? <NearByList /> : ''}

            {openModal && (
              <NearbyModal
                setOpenModal={setOpenModal}
                handleNearByClick={handleNearByClick}
              />
            )}
          </div>
        </div>
      )}
      
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  place: state.search.place,
  rgPlace: state.search.rgPlace,
  resultFlag: state.search.resultFlag,
});

export default connect(mapStateToProps, { getPlace, getNearby })(SearchResult);
