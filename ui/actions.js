import types from './types';

// first keyword search
export function searchAllMovies(searchWord) {
  return {
    type: types.SEARCHING,
    searchWord,
  };
}

export function fetchSingleMovie(movieID) {
  return {
    type: types.RESULT_SINGLE_MOVIE,
    movieID,
  };
}
