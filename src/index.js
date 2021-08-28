import React from "react";
import ReactDOM from "react-dom";

// css files import
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.css";
// css files import

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
