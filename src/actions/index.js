import {SET_WEATHER, SET_MOVIE} from "../constants/action-types";

export const setWeather = (newWeather) => ({
  type : SET_WEATHER,
  weather: newWeather,
});

export const setMovie = (newMovie) => ({
  type : SET_MOVIE,
  movie: newMovie,
});
