import axios from 'axios';

import {
  SEARCH_PLACES,
  GET_PLACE,
  SET_PREV_PLACE,
  GET_NEARBY,
  GET_NEARBY_ERROR,
  GET_RG_PLACE,
  CLEAR_SEARCH,
} from './types';

//Autocomplete API
export const searchPlaces = (text) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://admin.barikoi.xyz:8090/search/address?search=${text}`
    );

    console.log(res.data.places);
    dispatch({
      type: SEARCH_PLACES,
      payload: res.data.places,
    });
  } catch (err) {
    console.log(err);
  }
};

//Geocode API to get place by uCode
export const getPlace = (uCode) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://admin.barikoi.xyz:8090/place/${uCode}`
    );

    // console.log(res.data);
    dispatch({
      type: GET_PLACE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

//Nearby API
export const getNearby = (category, longitude, latitude) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `https://admin.barikoi.xyz:8090/public/find/nearby/by/catagory/noauth?latitude=${latitude}&longitude=${longitude}&ptype=${category}`
    );

    //console.log(res.data);
    if (res.data.Message) {
      dispatch({ type: GET_NEARBY_ERROR, payload: res.data.Message });
    } else {
      dispatch({
        type: GET_NEARBY,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({ type: GET_NEARBY_ERROR, payload: err.response.data.Message });
  }
};

//Reverse Geocode API
export const getRgPlace = (latitude, longitude) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://admin.barikoi.xyz:8090/reverse/without/auth?latitude=${latitude}&longitude=${longitude}`
    );

    // console.log(res.data[0]);
    dispatch({
      type: GET_RG_PLACE,
      payload: res.data[0],
    });
  } catch (err) {
    console.log(err);
  }
};

// keeping the prev latitudes and longitudes so that the map doesn't go back
// default viewport values of lat and long
export const setPrevPlace = (prevPlace) => {
  return {
    type: SET_PREV_PLACE,
    payload: prevPlace,
  };
};

export const clear = () => ({ type: CLEAR_SEARCH });
