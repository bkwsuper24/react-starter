import { put, take } from 'redux-saga/effects';
import { fetchAllMovies, fetchSingleMovie } from './omdbapi';
import { updateResults, updateMovies, putDetails } from './actions';
import * as types from './types';

export function* searchMovies() {
  while (true) {
    const action = yield take(types.SEARCHING);
    const movies = yield fetchAllMovies(action.searchWord);
    yield put({ type: 'ALL_MOVIE_DETAILS', movies: movies });
  }
}

export function* searchSingleMovie() {
  console.log("in searchSingleMovie")
  while (true) {
    const action = yield take(types.RESULT_SINGLE_MOVIE);
    console.log(results)
    const movie = yield fetchSingleMovie(movie.selected.imdbID);
    console.log("here")
    yield put(putDetails(movie));
  }
}
