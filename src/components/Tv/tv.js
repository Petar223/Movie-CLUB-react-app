import React from "react";
import Posters from "../Posters/posters";

const Tv = props => {
  return (
    <React.Fragment>
      <Posters type="tv" page={1} input={props.input} />
    </React.Fragment>
  );
};

export default Tv;
