import React, { Fragment, useState } from 'react';
import { Popup } from 'react-map-gl';

const MapPopup = ({ selectedPlace, setSelectedPlace }) => {
  return (
    <Fragment>
      {selectedPlace && (
        <Popup
          latitude={parseFloat(selectedPlace.latitude)}
          longitude={parseFloat(selectedPlace.longitude)}
          onClose={() => {
            setSelectedPlace(null);
          }}
          className='map-popup'
        >
          <div>
            <h5>{selectedPlace.Address}</h5>
          </div>
        </Popup>
      )}
    </Fragment>
  );
};

export default MapPopup;
