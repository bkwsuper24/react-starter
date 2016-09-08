//https://yelouafi.github.io/redux-saga/docs/api/index.html#createsagamiddlewareoptions

import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import { Provider } from "react-redux"; 

window.React = React;

const setup = {};

//create instance of createSagaMiddleware to connect Sagas to redux store
const sagaMiddlewareInstance = createSagaMiddleware();


//add SagaMiddleware to the store
const store = createStore(reducer, applyMiddleware(createSagaMiddlewareInstance);


//not sure what this component needs to be
setup.render = function render(Component) {
  ReactDOM.render(<Provider store = {store} > <Component /> </Provider>, document.getElementById('root'));
};

export default setup;
