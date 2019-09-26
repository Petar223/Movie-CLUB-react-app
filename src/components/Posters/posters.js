import React, { Component } from "react";
import axios from "axios";
import { API_KEY, URL } from "../../config";
import PosterItem from "./posterItem";
// import { POSTER_PAT } from "../../config";

class Posters extends Component {
  state = {
    movies: []
  };
  UNSAFE_componentWillMount() {
    axios
      .get(
        `${URL}${this.props.type}/top_rated?api_key=${API_KEY}&language=en-US&page=${this.props.page}`
      )
      .then(response => {
        this.setState({
          movies: response.data.results
        });
      });
  }

  render() {
    console.log(this.state);
    return <PosterItem data={this.state.movies} />;
  }
}

export default Posters;
