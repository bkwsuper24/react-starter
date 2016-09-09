import {put, fork, take} from "redux-saga/effects";
import { asyncSearchAllMovies, asyncFetchSingleMovie } from "./omdapi";
/*export function* loadSearchResults() {
	try {





	} catch(error) {
		yield put({type: "SEARCH FAILED", error});
	}



}
*/

export function* watchForSearchReturn() {
  const loop = true;
  while (loop) {
    yield take("SEARCHING");
    //yield fork(loadSearchResults);
  }
}
