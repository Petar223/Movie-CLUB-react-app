import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./custom-style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
