import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class MovieDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { singleMovieInfo } = this.props;
    const exitButton = <div name="closeButton"><Link to="/">Close</Link></div>;

    if (singleMovieInfo === null) {
      return (
        <div>
          <div>{exitButton}</div>
           Loading...
        </div>
      );
    }

    return (
      <div>
        <p>Title: {singleMovieInfo.Title}</p>
        <p>Rated: {singleMovieInfo.Rated}</p>
        <p>Released: {singleMovieInfo.Released}</p>
        <p>Runtime: {singleMovieInfo.Runtime}</p>
        <p>Genre: {singleMovieInfo.Genre}</p>
        <p>Director: {singleMovieInfo.Director}</p>
        <p>Writer: {singleMovieInfo.Writer}</p>
        <p>Language: {singleMovieInfo.Language}</p>
        <p>Plot: {singleMovieInfo.Plot}</p>
        <p>Awards: {singleMovieInfo.Awards}</p>
        <p>IMDB Rating: {singleMovieInfo.imdbRating}</p>
        <img src={singleMovieInfo.Poster} alt="Movie Poster" />
        {exitButton}
      </div>
      );
  }
}

MovieDisplay.propTypes = {
  singleMovieInfo: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    singleMovieInfo: state.singleMovieInfo,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MovieDisplay);
