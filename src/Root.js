import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./config/Store";
import App from "./App";
import "./App.css";

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
