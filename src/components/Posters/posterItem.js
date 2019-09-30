import React from "react";
import { IMAGE_PATH } from "../../config";
import "./pageControl.css";
import image from "./no-image.jpeg";
const PosterItem = props => {
  const img = item => {
    if (item.poster_path === null || item.poster_path === "") {
      return <img className="img" src={image} alt="film-poster" />;
    } else {
      return (
        <img
          className="img"
          src={IMAGE_PATH + item.poster_path}
          alt="film-poster"
        />
      );
    }
  };
  const title = item => {
    if (item.name) {
      return item.name;
    } else {
      return item.title;
    }
  };

  const release = item => {
    if (item.first_air_date) {
      return item.first_air_date;
    } else {
      return item.release_date;
    }
  };

  const favorite = item => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log(item);
    favorites.push(item);
    const favorite = Array.from(new Set(favorites.map(a => a.id))).map(id => {
      return favorites.find(a => a.id === id);
    });
    let stringifyFavorite = JSON.stringify(favorite);
    localStorage.setItem("favorites", stringifyFavorite);
  };

  const createPosters = () => {
    return props.data.map((item, i) => {
      return (
        <div key={i} className="poster-view__container">
          <div className="imgBox">{img(item)}</div>
          <div className="container-details">
            <p className="name">{title(item)}</p>
            <p className="release">Release:</p>
            <p className="year">{release(item)}</p>
            <p className="rating">Rating:</p>
            <p className="mark">{item.vote_average} / 10</p>
            <button
              className="container-btn"
              onClick={() => {
                favorite(item);
              }}
            >
              F A V O R I T E
            </button>
          </div>
        </div>
      );
    });
  };

  return <React.Fragment>{createPosters()}</React.Fragment>;
};

export default PosterItem;
