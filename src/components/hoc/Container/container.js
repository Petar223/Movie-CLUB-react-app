import React, { Component } from "react";
import "./layout.css";
import "./header.css";
import logoImage from "./img/film-logo-4.png";
import userImage from "./img/face-holder.png";
//Components
import Content from "../../../content";

class Container extends Component {
  state = {
    inputValue: ""
  };
  changeValue = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  render() {
    // console.log(this.state.inputValue);
    return (
      <div className="container">
        <header className="header">
          <div className="logo">
            <img
              src={logoImage}
              alt="movie-search-logo"
              className="logo__img"
            />
            <p className="logo__name">Movie CLUB</p>
          </div>
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search"
              onChange={this.changeValue}
            />
          </form>
          <nav className="user-nav">
            <img src={userImage} alt="user pic." className="user-nav__photo" />
            <span className="user-nav__name">Name</span>
            <span className="user-nav__surname">Surname</span>
          </nav>
        </header>
        <Content input={this.state.inputValue} />
      </div>
    );
  }
}
export default Container;
