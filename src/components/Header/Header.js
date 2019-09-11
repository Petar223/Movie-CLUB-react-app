import React from "react";
import logo from "../../img/film-logo-4.png";
import face from "../../img/face-holder.png";

function Header() {
  return (
    <header class="header">
      <div class="logo">
        <img src={logo} alt="movie-search-logo" class="logo__img" />
        <p class="logo__name">Movie CLUB</p>
      </div>
      <form action="#" class="search">
        <input type="text" class="search__input" placeholder="Search" />
      </form>
      <nav class="user-nav">
        <img src={face} alt="user img" class="user-nav__photo" />
        <span class="user-nav__name">Name</span>
        <span class="user-nav__surname">Surname</span>
      </nav>
    </header>
  );
}
export default Header;
