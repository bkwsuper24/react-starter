import Types from './types';

// first keyword search
export function searchAllMovies(searchWord) {
  return {
    type: Types.SEARCHING,
    searchWord,
  };
}

export function fetchSingleMovie(movieID) {
  return {
    type: Types.RESULT_SINGLE_MOVIE,
    movieID,
  };
}
