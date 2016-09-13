const defaultState = {
  allMovies: [],
};

//
export default function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case 'TESTING':
      console.log('SUCCESS. REDUCER FIXED');
      return { ...state, searchWord: action.allMovies };
    default:
      return state;
  }
}
