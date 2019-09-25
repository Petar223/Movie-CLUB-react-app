import React from "react";
import { Link } from "react-router-dom";

const SideNavItems = () => {
  const buttons = [
    {
      type: "side-nav__item",
      icon: "fas fa-film",
      text: "movies",
      buttonClass: "side-nav__button",
      id: "film",
      link: "/"
    },
    {
      type: "side-nav__item",
      icon: "fas fa-tv",
      text: "tv shows",
      buttonClass: "side-nav__button",
      id: "tv",
      link: "/tv"
    },
    {
      type: "side-nav__item",
      icon: "fas fa-heart",
      text: "favorites",
      buttonClass: "side-nav__button",
      id: "tv",
      link: "/favorites"
    }
  ];

  const showItems = () => {
    return buttons.map((item, i) => {
      return (
        <li key={i} class={item.type}>
          <Link to={item.link} id={item.id} class={item.buttonClass}>
            <i class={item.icon}></i>
            <span>{item.text}</span>
          </Link>
        </li>
      );
    });
  };

  return <div>{showItems()}</div>;
};
export default SideNavItems;
