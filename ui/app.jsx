// github.com/ReactTraining/react-router

import { Router, Route, browserHistory } from 'react-router';
import moviedisplay from './movieDisplay';
import searchmovies from './searchMovies';

export class App extends React.Component {
  render() {
  	return(
  		<Router history={browserHistory}>
    		<Route path="/" component={searchmovies}/>
    		<Route path = "movie" component= { moviedisplay }/>
	    </Router>
  	);
  }

}

export default App;

      		//<Route path="movies">
        	//<Route path=":movieId" component={moviedisplay} />