import React from "react";
import { Route, Switch } from "react-router-dom";

import "./main.css";

import Movie from "../../Movie/movie";
import TvShows from "../../Tv/tv";
import Favorites from "../../Fav/fav";

const Main = props => {
  return (
    <main className="poster-view">
      <Switch>
        <Route path="/" exact component={() => <Movie input={props.input} />} />
        <Route path="/tv" component={() => <TvShows input={props.input} />} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </main>
  );
};

export default Main;
