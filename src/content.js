import React from "react";
import "./components/Content/Nav/navigation.css";
import NavButtons from "./components/Content/Nav/navButtons";
import Navigation from "./components/Content/Nav/navigation";
import Main from "./components/Content/Main/main";
const Content = props => {
  return (
    <div className="content">
      <Navigation>
        <NavButtons />
      </Navigation>
      <Main input={props.input} />
    </div>
  );
};

export default Content;
