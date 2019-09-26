import React, { Component } from "react";
import "./components/Content/Nav/navigation.css";
import NavButtons from "./components/Content/Nav/navButtons";
import Navigation from "./components/Content/Nav/navigation";
import Main from "./components/Content/Main/main";
class Content extends Component {
  render() {
    return (
      <div className="content">
        <Navigation>
          <NavButtons />
        </Navigation>
        <Main />
      </div>
    );
  }
}

export default Content;
