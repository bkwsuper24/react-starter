import * as types from './types';

// first keyword search
export function movieResults(searchWord) {
  return {
    type: types.SEARCHING,
    searchWord,
  };
}

export function getSingleMovie(movieID) {
  return {
    type: types.RESULT_SINGLE_MOVIE,
    movieID,
  };
}

export function updateSearch(event) {
  return {
    type: types.UPDATE_SEARCH,
    searchWord: event.target.value,
  };
}
