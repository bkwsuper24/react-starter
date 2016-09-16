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
    if (singleMovieInfo.length === 0) {
      return (
        <div>
          <div>{exitButton}</div>
           Loading...
        </div>
      );
    }

    return (
      <div>
        <img src={singleMovieInfo.Poster} alt="Movie Poster" />
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
