import React from 'react';
import { connect } from 'react-redux';

import AutoCompleteList from './AutocompleteList';

const Autocomplete = ({ places, isTyping, setTyping, text, setText }) => {
  return (
    <div className='autocomplete-content '>
      <ul className='scroll'>
        {places &&
          places.map((place) => (
            <AutoCompleteList
              key={place.id}
              place={place}
              setTyping={setTyping}
              text={text}
              setText={setText}
            />
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  places: state.search.places,
});

export default connect(mapStateToProps)(Autocomplete);
