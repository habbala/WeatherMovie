import {SET_WEATHER, SET_MOVIE, SET_LOCATION} from '../constants/action-types.js';

const initialState = {
  weather: -1,
  movie: '',
  location: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_WEATHER:
      return {...state, weather: action.weather };

    case SET_MOVIE:
      return {...state, movie: action.movie };

    case SET_LOCATION:
      return {...state, location: action.location };

    default:
      return state;
  }
};

export default rootReducer;
