import React, { Component } from "react";

class Navigation extends Component {
  state = {
    className: "side-nav__button",
    film: "film",
    tv: "tv",
    favorites: "favorites"
  };
  changeClass = () => {
    this.setState({
      className: "side-nav__button-active"
    });
  };
  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item">
            <button
              id={this.state.film}
              className={this.state.className}
              onClick={this.changeClass}
            >
              <i className="fas fa-film"></i>
              <span>Movies</span>
            </button>
          </li>
          <li className="side-nav__item">
            <button id={this.state.tv} className={this.state.className}>
              <i className="fas fa-tv"></i>
              <span>TV Shows</span>
            </button>
          </li>

          <li className="side-nav__item">
            <button id={this.state.favorites} className={this.state.className}>
              <i className="fas fa-heart"></i>
              <span>Favorites</span>
            </button>
          </li>
        </ul>
        <div className="legal">&copy; 2019 by Petruska.</div>
      </nav>
    );
  }
}

export default Navigation;
