import React from "react";
import Posters from "../Posters/posters";

const Movie = props => {
  return (
    <React.Fragment>
      <Posters type="movie" page={1} input={props.input} />
    </React.Fragment>
  );
};

export default Movie;
