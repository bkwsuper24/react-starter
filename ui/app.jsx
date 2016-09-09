import { connect } from "react-redux";
import React, { Component, PropTypes } from "react";
import * as Actions from "./actions.js";

export default class App extends React.Component {

render() {
    const { searchWord, searchAllMovies } = this.props;
    return (
    //wrapping div for adjacent JSX error, creating textbox, and button
      <div>
        <div>
        Search titles:
          <input
            type="text"
            placeholder="Search Movies Here "
            value={searchWord}
          />
        </div>
        <button
          onClick={() => searchAllMovies(searchWord)}>
          FIND MY MOVIES!
        </button>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    searchWord: state.searchWord,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}
//export default connect()(App);
