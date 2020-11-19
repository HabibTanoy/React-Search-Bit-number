import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { searchPlaces } from '../../../../actions/search';
import { clear } from '../../../../actions/search';

//import components
import Autocomplete from '../autocomplete/Autocomplete';
import SearchResult from '../searchDetails/SearchResult';

const SearchBar = ({
  isSlide,
  setSlide,
  searchPlaces,
  clear,
  autocompleteFlag,
  resultFlag,
  place,
}) => {
  const [text, setText] = useState('');
  const [isTyping, setTyping] = useState(false);

  const onChange = (query) => {
    if (query) {
      setText(query);
      setTyping(true);
      searchPlaces(query);
    } else {
      setText(query);
      setTyping(false);
      clear();
    }
  };

  return (
    <Fragment>
      <div className='brand-logo search-logo'>
        <Link to='/'>
          <span className='dark-text'>Bari</span>
          <span className='nav-text'>koi</span>
        </Link>
      </div>
      <div
        className={`search-bar-container ${isTyping ? 'search-active' : ''}`}
      >
        <div className='search-bar'>
          <form>
            <div className='input-container'>
              <input
                type='text'
                placeholder='Search Location.'
                value={text}
                onChange={(e) => onChange(e.target.value)}
              />

              {(isTyping && autocompleteFlag) || resultFlag ? (
                <div
                  className='close-icon'
                  onClick={() => {
                    clear();
                    setText('');
                    setTyping(false);
                  }}
                >
                  <FontAwesomeIcon icon='times' size='lg' color='black' />
                </div>
              ) : (
                <div className='search-icon'>
                  <FontAwesomeIcon icon='search' size='sm' color='white' />
                </div>
              )}
            </div>
          </form>

          {autocompleteFlag && text && (
            <Autocomplete
              setTyping={setTyping}
              isTyping={isTyping}
              text={text}
              setText={setText}
            />
          )}
        </div>
      </div>

      <div className='slide-arrow' onClick={() => setSlide(!isSlide)}>
        <FontAwesomeIcon icon='angle-left' size='lg' color='black' />
      </div>

      <SearchResult />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  autocompleteFlag: state.search.autocompleteFlag,
  resultFlag: state.search.resultFlag,

  place: state.search.place,
});

export default connect(mapStateToProps, { searchPlaces, clear })(SearchBar);
