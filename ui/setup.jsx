// https://yelouafi.github.io/redux-saga/docs/api/index.html#createsagamiddlewareoptions
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import { Provider } from 'react-redux';

window.React = React;

const setup = {};

// const sagaMiddlewareInstance = createSagaMiddleware();


// add SagaMiddleware to the store, applyMiddlleware allows us to use sagas
const store = createStore(reducer);


setup.render = function render(Component) {
  ReactDOM.render(/*<Provider store={store}>*/ <Component /> /*</Provider>*/, document.getElementById('root'));
};

export default setup;
