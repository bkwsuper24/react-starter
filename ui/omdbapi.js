const API_SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=';
const TITLE_ID = 'http://www.omdbapi.com/?i=tt0165798&plot=full&r=json';


export async function asyncSearchAllMovies(searchWord) {
  const response = await fetch(API_SEARCH_ENDPOINT + searchWord);
  const json = await response.json();
  return json;
}

export async function asyncFetchSingleMovie(movieID) {
  const response = await fetch('http://www.omdbapi.com/?i={movieID}&plot=full&r=json');
  const json = await response.json();
  return json;
}