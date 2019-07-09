import React, { Component } from "react";
import Welcome from "./src/screens/Welcome";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./src/redux/reducers";
// Logger with default options
import logger from 'redux-logger'
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk,logger));

// Amplify
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Welcome />
      </Provider>
    );
  }
}
