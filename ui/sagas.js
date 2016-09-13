import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { asyncSearchAllMovies } from './omdbapi';

export function* searchMovies(searchWord) {
  try {
    const searchMovie = asyncSearchAllMovies(searchWord);
    yield put({ type: 'DONE SEARCHING', searchMovie });
  } catch (error) {
    yield put({ type: 'ERROR WHEN SEARCHING', error });
  }
}

export function* watchForSearchReturn() {
  yield takeEvery('SEARCHING');
  // yield fork(loadSearchResults);
}

