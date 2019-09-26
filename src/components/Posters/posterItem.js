import React from "react";
import { IMAGE_PATH } from "../../config";
import "./poster.css";
const PosterItem = props => {
  const createPosters = () => {
    return props.data.map((item, i) => {
      return (
        <div key={i} className="poster-view__container">
          <div className="imgBox">
            <img
              className="img"
              src={IMAGE_PATH + item.poster_path}
              alt="film-poster"
            />
          </div>
          <div className="container-details">
            <p className="name">{item.title}</p>
            <p className="release">Release:</p>
            <p className="year">{item.release_date}</p>
            <p className="rating">Rating:</p>
            <p className="mark">{item.vote_average} / 10</p>
            <button className="container-btn">F A V O R I T E</button>
          </div>
        </div>
      );
    });
  };
  return <React.Fragment>{createPosters()}</React.Fragment>;
};

export default PosterItem;
