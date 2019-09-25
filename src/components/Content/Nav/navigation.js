import React from "react";

// import "./navigation.css";

import SideNavItems from "./navButtons";
const Navigation = () => {
  return (
    <nav class="sidebar">
      <ul class="side-nav">
        <SideNavItems />
      </ul>
      <div class="legal">&copy; 2019 by Petruska.</div>
    </nav>
  );
};

export default Navigation;
