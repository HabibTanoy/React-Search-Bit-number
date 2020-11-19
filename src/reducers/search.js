import {
  SEARCH_PLACES,
  GET_PLACE,
  SET_PREV_PLACE,
  GET_NEARBY,
  GET_NEARBY_ERROR,
  GET_RG_PLACE,
  CLEAR_SEARCH,
} from '../actions/types';

const initialState = {
  places: [],
  autocompleteFlag: false,
  resultFlag: false,
  inputFlag: true, // to show/notshow the result in the search/input bar
  place: null,
  prevPlace: null,
  nearby: [],
  rgPlace: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_PLACES:
      return {
        ...state,
        places: payload,
        autocompleteFlag: true,
        resultFlag: false,
      };

    case GET_PLACE:
      return {
        ...state,
        place: payload,
        prevPlace: payload,
        autocompleteFlag: false,
        resultFlag: true,
        inputFlag: true,
        nearby: [], // so that even if we clicked on nearby during search when we
        //get another new search place the nearby vanishes then
      };

    case SET_PREV_PLACE:
      return {
        ...state,
        prevPlace: payload,
      };

    case GET_RG_PLACE:
      return {
        ...state,
        //place: payload,
        resultFlag: true,
        inputFlag: false,
        rgPlace: payload,
        prevPlace: payload,
        nearby: [],
        place: null, // to get rg place while searching
      };

    case GET_NEARBY:
      return {
        ...state,
        nearby: payload,
      };

    case GET_NEARBY_ERROR:
      return {
        ...state,
        nearby: [],
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        places: null,
        place: null,
        autocompleteFlag: false,
        resultFlag: false,
        rgPlace: null,
      };

    default:
      return state;
  }
}
