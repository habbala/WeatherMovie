import {SET_WEATHER} from '../constants/action-types.js';

const initialState = {
  weather: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_WEATHER:
      return {...state, weather: action.weather };
      break;

    default:
      return state;
  }
};

export default rootReducer;
