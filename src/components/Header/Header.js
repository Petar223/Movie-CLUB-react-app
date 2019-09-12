import React from "react";
import logo from "../../img/film-logo-4.png";
import face from "../../img/face-holder.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="movie-search-logo" className="logo__img" />
        <p className="logo__name">Movie CLUB</p>
      </div>
      <form action="#" className="search">
        <input type="text" className="search__input" placeholder="Search" />
      </form>
      <nav className="user-nav">
        <img src={face} alt="user img" className="user-nav__photo" />
        <span className="user-nav__name">Name</span>
        <span className="user-nav__surname">Surname</span>
      </nav>
    </header>
  );
}
export default Header;
