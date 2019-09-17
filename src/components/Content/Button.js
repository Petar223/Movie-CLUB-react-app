import React from "react";

function Button(props) {
  return (
    <li className="side-nav__item">
      <button id={props.id} className={props.className}>
        <i className={props.iconClass}></i>
        <span>{props.type}</span>
      </button>
    </li>
  );
}
export default Button;
