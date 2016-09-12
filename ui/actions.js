export const SEARCHING = 'SEARCHING';
export const RESULT_SINGLE_MOVIE = 'RESULT_SINGLE_MOVIE';

// first keyword search
export function searchAllMovies(searchWord) {
  return {
    type: SEARCHING,
    searchWord,
  };
}

export function fetchSingleMovie(movieID) {
  return {
    type: RESULT_SINGLE_MOVIE,
  };
}
