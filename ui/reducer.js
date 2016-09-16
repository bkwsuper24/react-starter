const defaultState = {
  movies: [],
  singleMovieInfo: [],
  searchWord: '',
};

//
export default function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case 'LOAD_SEARCH':
      console.log(action.value);
      return { ...state, searchWord: action.value };
    case 'LOAD_DETAILS':
      return { ...state, singleMovieInfo: action.detail };
    case 'ALL_MOVIE_DETAILS':
      return { ...state, movies: action.movies };
    default:
      return state;
  }
}
