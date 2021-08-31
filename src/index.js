import React from "react";
import ReactDOM from "react-dom";

// css files import
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.css";
// css files import

// redux store setup files
import { Provider } from "react-redux";
import store from "./redux/store/Store";
// redux store setup files
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
