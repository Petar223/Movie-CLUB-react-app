import React from "react";

//COMPONENTS
import Navigation from "./Navigation";
import Main from "./Main";
import PageCounter from "../PageCounter/PageCounter";

function Content() {
  return (
    <div className="content">
      <Navigation />
      <Main />
      <PageCounter />
    </div>
  );
}
export default Content;
