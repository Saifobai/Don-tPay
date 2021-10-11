import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContext } from "./store/context";

ReactDOM.render(
  <React.StrictMode>
    <DataContext>
      <Router>
        <App />
      </Router>
    </DataContext>
  </React.StrictMode>,
  document.getElementById("root")
);
