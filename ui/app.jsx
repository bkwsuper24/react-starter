// github.com/ReactTraining/react-router

import { Router, Route, BrowserHistory } from 'react-router';
import moviedisplay from './movieDisplay';
import searchmovies from './searchMovies';

export default (

  <Router history={BrowserHistory}>
    <Route path="/">
      <Route path="searchmovies" component={searchmovies} />
      <Route path="movies">
        <Route path=":movieId" component={moviedisplay} />
      </Route>
    </Route>
  </Router>
);
