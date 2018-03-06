import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { recipeReducer } from "./store/reducers";

const store = createStore(recipeReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
