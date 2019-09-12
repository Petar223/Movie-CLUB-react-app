import React from "react";
import "./css/custom-style.css";
import "./css/layout.css";
import "./css/components.css";

//COMPONENTS
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
