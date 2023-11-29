import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

// Disable React DevTools early in the application setup
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import withErrorBoundary from "./HOC/withErrorBoundary";
disableReactDevTools();


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>{withErrorBoundary(App)()}</Provider>
  </React.StrictMode>
);
