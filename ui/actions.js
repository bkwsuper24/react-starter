import * as types from './types';

// first keyword search
export function movieResults(searchWord) {
  return {
    type: types.SEARCHING,
    searchWord,
  };
}

export function updateSearch(value) {
  return {
    type: types.UPDATE_SEARCH,
    value,
  };
}


export function updateMovie(singleMovie) {
  return {
    type: types.ALL_MOVIE_DETAILS,
    singleMovie,
  };
}

export function updateResults(selected) {
  return {
    type: types.RESULT_SINGLE_MOVIE,
    selected,
  };
}


export function putDetails(detail) {
  return {
    type: types.SINGLE_MOVIE_DETAILS,
    detail,
  };
}
