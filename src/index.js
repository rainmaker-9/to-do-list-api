import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./store/reducer";
import { configureStore } from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import "./index.css";

const store = configureStore({
  reducer: reducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
