import React from "react";
import Button from "./Button";
function Navigation() {
  const buttons = [
    {
      className: "side-nav__button",
      id: "film",
      iconClass: "fas fa-film",
      type: "movie"
    },
    {
      className: "side-nav__button",
      id: "tv",
      iconClass: "fas fa-tv",
      type: "tv"
    },
    {
      className: "side-nav__button",
      id: "favorites",
      iconClass: "fas fa-heart",
      type: "favorites"
    }
  ];

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {buttons.map(button => (
          <Button
            id={button.id}
            className={button.className}
            iconClass={button.iconClass}
            type={button.type}
          />
        ))}
      </ul>
      <div className="legal">&copy; 2019 by Petruska.</div>
    </nav>
  );
}

export default Navigation;
