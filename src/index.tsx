import React from "react";

// eslint-disable-next-line import/order
import ReactDOM from "react-dom";
import "normalize.css";
import "assets/styles/reset.css";

import { Provider } from "react-redux";
import { store } from "store/store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
