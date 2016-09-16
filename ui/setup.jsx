// https://yelouafi.github.io/redux-saga/docs/api/index.html#createsagamiddlewareoptions
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { searchMovies, searchSingleMovie  } from './sagas';

window.React = React;

const setup = {};

const sagaMiddleware = createSagaMiddleware();

// add SagaMiddleware to the store, applyMiddlleware allows us to use sagas
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(searchMovies);
sagaMiddleware.run(searchSingleMovie);


setup.render = function render(Component) {
  console.log(store);
  ReactDOM.render(<Provider store={store}><Component /></Provider>,
  document.getElementById('root'));
};

export default setup;
