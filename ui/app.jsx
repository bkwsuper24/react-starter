// eslint-disable-next-line react/prefer-stateless-function
import { connect } from "react-redux";
import React, { Component, PropTypes } from "react";
import * as Actions from "./actions.js";

export class App extends React.Component {

	componentDidMount() {
	}

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
        <div>
          button onClick = {() => searchAllMovies(searchWord)}> 
          FIND MY MOVIES!
        </div>
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

export default connect(mapStateToProps, mapActionCreatorsToProps)(App);



