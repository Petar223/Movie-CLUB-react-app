import React from "react";
import { Route, Switch } from "react-router-dom";

import "./main.css";

import Movie from "../../Movie/movie";
import TvShows from "../../Tv/tv";
import Favorites from "../../Fav/fav";

const Main = () => {
  return (
    <main class="poster-view">
      <Switch>
        <Route path="/" exact component={Movie} />
        <Route path="/tv" component={TvShows} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </main>
  );
};

export default Main;
