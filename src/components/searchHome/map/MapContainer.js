import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getRgPlace } from '../../../actions/search';
import { setPrevPlace } from '../../../actions/search';
import { clear } from '../../../actions/search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMapGL, { GeolocateControl, NavigationControl, FullscreenControl, ScaleControl} from 'react-map-gl';

import MapPopup from './MapPopup';
import MapMarker from './MapMarker';


const MapContainer = ({
  setSlide,
  isSlide,
  place,
  prevPlace,
  nearby,
  getRgPlace,
  rgPlace,
  clear,
}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    position: 'absolute',
    latitude: 23.777176,
    longitude: 90.399452,
    zoom: 12,
  });

  const geolocateStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    margin: 10
  };

  const fullscreenControlStyle = {
    position: 'absolute',
    top: 72,
    left: 0,
    padding: '10px'
  };
  
  const navStyle = {
    position: 'absolute',
    top: 108,
    left: 0,
    padding: '10px'
  };
  
  const scaleControlStyle = {
    position: 'absolute',
    bottom: 36,
    left: 0,
    padding: '10px'
  };


  useEffect(() => {
    setViewport({
      ...viewport,
      zoom: 16,
      latitude:
        (place && parseFloat(place.latitude)) ||
        (prevPlace && prevPlace.latitude) ||
        23.777176,
      longitude:
        (place && parseFloat(place.longitude)) ||
        (prevPlace && prevPlace.longitude) ||
        90.399452,
    });
    // eslint-disable-next-line
  }, [place]);

  // to close the popup on Esp button
  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setSelectedPlace(null);
      }
    };

    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  useEffect(()=>{
    isSlide? setViewport({
       ...viewport,
       width: '100vw'
     }): setViewport({
       ...viewport,
       width: '100%'
     })
   },[isSlide])

  const handleClick = () => {
    setSlide(!isSlide);
  };

  const handleMapClick = (e) => {
    clear(); // so that the map doesnt change viewport
    getRgPlace(e.lngLat[1], e.lngLat[0]);
  };

  const _onViewportChange = (viewport) => {
    setViewport({
      ...viewport,
      zoom: 13
    })
   }


  return (
    <div className='map-container'>
      <div className='slide-arrow'>
        {isSlide && (
          <FontAwesomeIcon
            icon='angle-right'
            size='lg'
            color='black'
            onClick={handleClick}
          />
        )}
      </div>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle='https://map.barikoi.com/styles/osm-liberty/style.json'
        onDblClick={handleMapClick}
        doubleClickZoom={false}
      >

        <div style={geolocateStyle}>
          <GeolocateControl 
          onViewportChange={_onViewportChange}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          auto={true}
          label="Set Current Location"
          />
        </div>
        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div style={navStyle}>
          <NavigationControl />
        </div>
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>
        

        {place || rgPlace ? (
          <MapMarker
            placeMarker={place || rgPlace}
            setSelectedPlace={setSelectedPlace}
          />
        ) : prevPlace && prevPlace.latitude && prevPlace.longitude ? (
          <MapMarker
            placeMarker={prevPlace}
            setSelectedPlace={setSelectedPlace}
          />
        ) : (
          ''
        )}

        <MapPopup
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
        />

        {nearby &&
          nearby.map((item) => (
            <MapMarker placeMarker={item} setSelectedPlace={setSelectedPlace} />
          ))}

        
        
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = (state) => ({
  place: state.search.place,
  prevPlace: state.search.prevPlace,
  nearby: state.search.nearby,
  rgPlace: state.search.rgPlace,
  nearbyMarker: state.search.nearbyMarker,
});

export default connect(mapStateToProps, { clear, getRgPlace, setPrevPlace })(
  MapContainer
);
