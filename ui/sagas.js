import { put, take } from 'redux-saga/effects';
import { fetchAllMovies, fetchSingleMovie } from './omdbapi';
import * as types from './types';

export function* searchMovies() {
  while (true) {
    const action = yield take(types.SEARCHING);
    const movies = yield fetchAllMovies(action.searchWord);
    yield put({ type: 'ALL_MOVIE_DETAILS', movies });
  }
}

export function* searchSingleMovie() {
  while (true) {
    const action = yield take(types.RESULT_SINGLE_MOVIE);
    const movie = yield fetchSingleMovie(action.selected.imdbID);
    yield put({ type: 'SINGLE_MOVIE_DETAILS', detail: movie });
  }
}
