import React, { Component } from "react";
import "./Nav/navigation.css";
import NavButtons from "./Nav/navButtons";
import Navigation from "./Nav/navigation";
class Content extends Component {
  render() {
    return (
      <div class="content">
        <Navigation>
          <NavButtons />
        </Navigation>
      </div>
    );
  }
}

export default Content;
