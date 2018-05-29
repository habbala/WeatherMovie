import {SET_WEATHER, SET_MOVIE, SET_LOCATION} from "../constants/action-types";

export const setWeather = (newWeather) => ({
  type : SET_WEATHER,
  weather: newWeather,
});

export const setMovie = (newMovie) => ({
  type : SET_MOVIE,
  movie: newMovie,
});

export const setLocation = (newLocation) => ({
  type : SET_LOCATION,
  location: newLocation,
});
