import React, { Component } from "react";

import PosterItem from "./posterItem";

class Posters extends Component {
  state = {
    favorites: []
  };
  UNSAFE_componentWillMount() {
    this.request();
  }

  request = () => {
    if (JSON.parse(localStorage.getItem("favorites")) === null) {
      localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
    }
    return this.setState({
      favorites: JSON.parse(localStorage.getItem("favorites"))
    });
  };

  render() {
    console.log(this.state.favorites);
    return (
      <React.Fragment>
        <PosterItem type={this.props.type} data={this.state.favorites} />
      </React.Fragment>
    );
  }
}

export default Posters;
