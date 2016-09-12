import { put, fork, take } from 'redux-saga/effects';
import { asyncSearchAllMovies, asyncFetchSingleMovie } from './omdbapi';

export function* searchMovies(searchWord) {
  try {
    const searchMovie = asyncSearchAllMovies(searchWord);
    yield put({ type: 'DONE SEARCHING', searchMovie });
  } catch (error) {
    yield put({ type: 'ERROR WHEN SEARCHING', error });
  }
}

export function* watchForSearchReturn() {
  const loop = true;
  while (loop) {
    yield take("SEARCHING");
    //yield fork(loadSearchResults);
  }
}
