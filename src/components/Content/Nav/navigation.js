import React from "react";

// import "./navigation.css";

import SideNavItems from "./navButtons";
const Navigation = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <SideNavItems />
      </ul>
      <div className="legal">&copy; 2019 by Petruska.</div>
    </nav>
  );
};

export default Navigation;
