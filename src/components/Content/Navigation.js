import React from "react";

function Navigation() {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <button id="film" className="side-nav__button">
            <i className="fas fa-film"></i>
            <span>Movies</span>
          </button>
        </li>
        <li className="side-nav__item">
          <button id="tv" className="side-nav__button">
            <i className="fas fa-tv"></i>
            <span>TV Shows</span>
          </button>
        </li>

        <li className="side-nav__item">
          <button id="favorites" className="side-nav__button">
            <i className="fas fa-heart"></i>
            <span>Favorites</span>
          </button>
        </li>
      </ul>
      <div className="legal">&copy; 2019 by Petruska.</div>
    </nav>
  );
}

export default Navigation;
