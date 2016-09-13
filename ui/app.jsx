import { connect } from 'react-redux';
import { searchAllMovies, fetchSingleMovie } from './omdbapi';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateChange = this.updateChange.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.getSingleMovie = this.getSingleMovie.bind(this);

    this.state = {
      searchWord: '',
      movies: [],
      singleMovieInfo: [],
    };
  }

  getSingleMovie(id) {
    const api = fetchSingleMovie(id);
    api.then(response => response.json()).then(json => this.setState({ singleMovieInfo: json }));
  }

  // what to do when button is clicked
  async handleClick() {
    const response = await searchAllMovies(this.state.searchWord);
    const json = await response.json();
    this.setState({ movies: json.Search });
  }

  // updateChange
  updateChange(event) {
    this.setState({
      searchWord: event.target.value,
    });
  }

  // getting error converting data tyoe varchar to int
  showDisplay() {
    if (this.state.singleMovieInfo.length === 0) return null;
    console.log(this.state.singleMovieInfo);
    return (
      <div>
        <p>Title: {this.state.singleMovieInfo.Title}</p>
        <p>Rated: {this.state.singleMovieInfo.Rated}</p>
        <p>Released: {this.state.singleMovieInfo.Released}</p>
        <p>Runtime: {this.state.singleMovieInfo.Runtime}</p>
        <p>Genre: {this.state.singleMovieInfo.Genre}</p>
        <p>Director: {this.state.singleMovieInfo.Director}</p>
        <p>Writer: {this.state.singleMovieInfo.Writer}</p>
        <p>Language: {this.state.singleMovieInfo.Language}</p>
        <p>Plot: {this.state.singleMovieInfo.Plot}</p>
        <p>Awards: {this.state.singleMovieInfo.Awards}</p>
        <p>IMDB Rating: {this.state.singleMovieInfo.imdbRating}</p>
        <img src={this.state.singleMovieInfo.Poster} alt="Movie Poster" />
      </div>
      );
  }

  renderResults() {
    if (!this.state.movies) return null;
    return this.state.movies.map(this.renderButton);
  }

  // separating button from map
  renderButton = (entry, i) => (
    <button key={i} onClick={() => this.getSingleMovie(entry)}>{entry.Title} {entry.Year}</button>
)

  render() {
    return (
    // wrapping div for adjacent JSX error, creating textbox, and button
      <div>
        <div>
        Search titles:
          <input
            type="text" placeholder="Search Movies Here " value={this.state.searchWord}
            onChange={this.updateChange}
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
        {this.showDisplay()}
      </div>
    );
  }
}

export default connect()(App);
