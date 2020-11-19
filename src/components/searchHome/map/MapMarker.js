import React, { Fragment } from 'react';
import { Marker } from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

const MapMarker = ({ placeMarker, place, prevPlace, setSelectedPlace }) => {
  return (
    <Fragment>
      {placeMarker && (
        <Marker
          latitude={placeMarker && parseFloat(placeMarker.latitude)}
          longitude={placeMarker && parseFloat(placeMarker.longitude)}
          offsetLeft={-18.5}
          offsetTop={-20}
        >
          <div>
            <FontAwesomeIcon
              icon='map-marker-alt'
              size='2x'
              color={
                place === placeMarker || prevPlace === placeMarker
                  ? 'blue'
                  : 'green'
              }
              onClick={(e) => {
                setSelectedPlace(placeMarker);
              }}
            />
          </div>
        </Marker>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  place: state.search.place,
  prevPlace: state.search.prevPlace,
});

export default connect(mapStateToProps)(MapMarker);
