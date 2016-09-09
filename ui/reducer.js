const defaultState = {
  searchWord: ' ',
};

//
export default function searchWord(state = defaultState, action) {
  switch (action.type) {
    case "TESTING":
      console.log("SUCCESS. REDUCER FIXED");
      return { ...state, searchWord: action.searchWord };
    default:
      return state;
  }
}