export const SET_WEATHER = 'SET_WEATHER';
export const SET_CITY_COORDS = 'SET_CITY_COORDS';
export const SET_SPINNER = 'SET_SPINNER';
export const CLEAR_SPINNER = 'CLEAR_SPINNER';

export const coordsReducer = (state, action) => {
  switch(action.type) {
      case SET_WEATHER:
          return {...state, weather: action.weather};
      case SET_CITY_COORDS:
          return {...state, cityCoords: action.cityCoords};
      case SET_SPINNER:
          return {...state, spinner: true};
      case CLEAR_SPINNER:
          return {...state, spinner: false};
      default:
          return {
              weather: null,
              cityCoords: null,
              spinner: false
          }
    }
};
