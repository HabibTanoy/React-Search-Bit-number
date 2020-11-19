import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPlace } from '../../../../actions/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import match from 'autosuggest-highlight/umd/match';
import parse from 'autosuggest-highlight/umd/parse';

const AutocompleteList = ({ place, getPlace, setTyping, text, setText }) => {
  let matchPlace =
    place.place_name || place.business_name
      ? place.place_name || place.business_name
      : place.Address;
  let addr = place && place.Address.split(',');
  let address = addr.slice(1, addr.length).join(',');

  const handleClick = (e) => {
    getPlace(place.uCode);
    //to make the white bg from search-active class inactive
    setTyping(false);
    setText(matchPlace); // to keep the search result name in the input bar.
  };

  // useEffect(() => {
  //   reactStringReplace(matchPlace, regex, (m, i) => (
  //     <span key={i} style={{ color: 'red' }}>
  //       {m}
  //     </span>
  //   ));
  //   // eslint-disable-next-line
  // }, [regex]);

  // const formatValue = (matchPlace, text) => {
  //   var textMatcher = new RegExp(text, 'ig');
  //   console.log({ textMatcher });

  //   return reactStringReplace(matchPlace, textMatcher, (textMatcher, i) => {
  //     return (
  //       <span key={i} style={{ color: 'red' }}>
  //         {textMatcher}
  //       </span>
  //     );
  //   });
  // };

  let matches = match(matchPlace, text);
  let parts = parse(matchPlace, matches);

  return (
    <li>
      <div className='autocomplete-item' onClick={handleClick}>
        <div className='location-icon'>
          <FontAwesomeIcon icon='map-marker-alt' size='lg' color='black' />
        </div>

        <div className='autocomplete-info'>
          <h4>
            {parts.map((p) =>
              p.highlight ? (
                <span style={{ fontWeight: '400' }}>{p.text}</span>
              ) : (
                <span>{p.text}</span>
              )
            )}
          </h4>
          <p>
            {address ? address + ',' : ''}
            {place.area ? place.area + ',' : ''}
            {place.city ? place.city : ''}
          </p>
        </div>
      </div>
    </li>
  );
};

export default connect(null, { getPlace })(AutocompleteList);
