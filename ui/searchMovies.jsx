import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

 const renderSearch = (props) => {
    if (!this.state.movies) return null;
    return this.state.movies.map(this.renderButton);
  }

  // separating button from map
  const renderResults = renderButton = (entry, i) => (
    <button key={i} > 
      <Link to = {`/movies/${entry.imdbID}`}>
      {{entry.Title} {entry.Year}}
     </Link>
)

export class SearchMovies extends React.Component {
  render() {
    const { searchWord, movieResults, updateSearch } = this.props;
    const finalRenderMovie = () => moves.map(renderResults);
    return (
    // wrapping div for adjacent JSX error, creating textbox, and button
      <div>
        <div>
        Search titles:
          <input
            type="text" placeholder="Search Movies Here " value={searchWord}
            onChange={(event) => updateSearch(event.target.value)}
          />
        </div>
        <button
          onClick={() => movieResults(searchWord)}
        >
          FIND MY MOVIES!
        </button>
      </div>
      <div>
        { finalRenderMovie() }
    );
  }
}

SearchMovies.propTypes = {
  searchWord: React.PropTypes.string,
  movieResults: React.PropTypes.func,
  updateSearch: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    searchWord: state.searchWord,
  };
}
function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(SearchMovies);
