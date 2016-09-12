import { connect } from 'react-redux';
import { searchAllMovies, fetchSingleMovie } from './omdbapi';
import MovieDisplay from './movie_display.jsx';
import Modal from 'react-modal';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateChange = this.updateChange.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.renderSingleMovie = this.renderSingleMovie.bind(this);

    this.state = {
      searchWord: '',
      movies: [],
      showResults: false,
      singleMovie: null,
    };
  }

// what to do when button is clicked
  handleClick() {
    searchAllMovies(this.state.searchWord).then(response =>
      response.json()).then(json =>
      this.setState({ movies: json.Search }));

    this.setState({ showResults: true });
  }

  // updateChange
  updateChange(event) {
    this.setState({
      searchWord: event.target.value,
    });
  }

  renderResults() {
    if (this.state.showResults === true) {
      return this.state.movies.map(
      (entry, i) => { return <button onClick={() => this.renderSingleMovie(this.state.showResults.imdbID)} key={i} >{entry.Title} {entry.Year}</button>; }
      );
    }
    return null;
  }

  renderSingleMovie(id) {
    fetchSingleMovie(id).then(showResults => {
      this.setState({ singleMovie: showResults,
      showResults: true });
    });
  }

// when showResults flag is set to true

  render() {
    return (
    // wrapping div for adjacent JSX error, creating textbox, and button
      <div>
        <div>
        Search titles:
          <input
            type="text"
            placeholder="Search Movies Here "
            value={this.state.searchWord} onChange={this.updateChange}
          />
        </div>
        <button
          onClick={this.handleClick}
        >
          FIND MY MOVIES!
        </button>
        <div className="allMovieContainer">
        {this.renderResults()}
        </div>
          <MovieDisplay movie={this.state.singleMovie} />
      </div>
    );
  }
}

export default connect()(App);
