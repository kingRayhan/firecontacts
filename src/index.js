import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.css";
import { Provider } from "react-redux";
import store from "./store";
import { authSetuser } from "./store/reducers/authReducer";
import App from "./App";
store.dispatch(authSetuser()); // check is logged in

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
