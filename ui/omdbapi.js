const API_SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=';

export function searchAllMovies(searchWord) {
  const api = fetch(API_SEARCH_ENDPOINT + searchWord);
  return api;
}

export function fetchSingleMovie(movieID) {
  const api = fetch(`http://www.omdbapi.com/?i=${movieID}&plot=full&r=json`);
  console.log(movieID);
  return api;
}
