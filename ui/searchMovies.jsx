import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as actions from './actions';

export class SearchMovies extends React.Component {

  renderSearch(movies) {
    if (!movies) return null;
    return movies.map(this.renderButton);
  }

  // separating button from map
  renderButton = (entry, i) => (
    <button
      key={i}
      onClick={() => {
        this.props.updateResults(entry);
        browserHistory.push('movie');
      }}
    >
    {entry.Title} {entry.Year}
    </button>
  )

  render() {
    const { searchWord, movieResults, updateSearch, movies } = this.props;
    return (
      <div>
        Search titles:
        <input
          type="text" placeholder="Search Movies Here " value={searchWord}
          onChange={(event) => updateSearch(event.target.value)}
        />
        <div>
          <button
            onClick={() => movieResults(searchWord)}
          >
          FIND MY MOVIES!
          </button>
        </div>
        {this.renderSearch(movies)}
      </div>
    );
  }
}

SearchMovies.propTypes = {
  searchWord: React.PropTypes.string,
  movieResults: React.PropTypes.func,
  updateSearch: React.PropTypes.func,
  updateResults: React.PropTypes.func,
  movies: React.PropTypes.array,
};

function mapStateToProps(state) {
  return {
    searchWord: state.searchWord,
    movies: state.movies,
    singleMovieInfo: state.singleMovieInfo,
  };
}
function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(SearchMovies);
