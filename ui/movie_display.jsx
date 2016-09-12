import React from 'react';

class MovieDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { movie } = this.props;

    return (<div> AYYY </div>
      /*<div>
        <p>Title: {movie.Title}</p>
        <p>Rated: {movie.Rated}</p>
        <p>Released: {movie.Released}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Writer: {movie.Writer}</p>
        <p>Language: {movie.Language}</p>
        <p>Plot: {movie.Plot}</p>
        <p>Awards: {movie.Awards}</p>
        <p>IMDB Rating: {movie.imdbRating}</p>
        <img src={movie.Poster} alt="Movie Poster" />
        
      </div>
      */);
    
  }
}

MovieDisplay.propTypes = {
  movie: React.PropTypes.object,
};


export default (MovieDisplay);
