import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { asyncSearchAllMovies, fetchSingleMovie } from './omdbapi';
import { movieResults, getSingleMovie } from './actions';

export function* searchMovies(searchWord) {
  try {
    yield put(movieResults(null));
    const searchMovie = asyncSearchAllMovies(searchWord);
    yield put({ type: 'DONE SEARCHING', searchMovie });
  } catch (error) {
    yield put({ type: 'ERROR WHEN SEARCHING', error });
  }
}

export function* searchSingleMovie(movieID) {
  const movie = yield fetchSingleMovie(movieID);
  yield put(getSingleMovie(movie));
  yield takeEvery('SEARCHING');
  // yield fork(loadSearchResults);
}

