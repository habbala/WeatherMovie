import {SET_WEATHER} from "../constants/action-types";

export const setWeather = (newWeather) => ({
  type : SET_WEATHER,
  weather: newWeather,
});
