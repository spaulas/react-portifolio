import * as serviceWorker from "./serviceWorker";
import App from "./react/App/App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  // Recent bug detected but not fixed yet, updates at:
  // https://github.com/JedWatson/react-select/issues/4094
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
