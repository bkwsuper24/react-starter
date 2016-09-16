const API_SEARCH_ENDPOINT = 'http://www.omdbapi.com/?s=';

export async function fetchAllMovies(title) {
  const response = await fetch(API_SEARCH_ENDPOINT + title);
  const json = await response.json();
  return json.Search;
}

export async function fetchSingleMovie(movieID) {
	console.log(movieID)
  const response = await fetch(`http://www.omdbapi.com/?i=${movieID}&plot=full&r=json`);
  const json = await response.json();
  return json;
}
