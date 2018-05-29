import {SET_WEATHER, SET_MOVIE} from '../constants/action-types.js';

const initialState = {
  weather: '',
  movie: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_WEATHER:
      return {...state, weather: action.weather };

    case SET_MOVIE:
      return {...state, movie: action.movie };

    default:
      return state;
  }
};

export default rootReducer;
