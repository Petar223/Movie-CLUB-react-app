import React, { Component } from "react";
import axios from "axios";
import { API_KEY, URL } from "../../config";
import PosterItem from "./posterItem";

class Posters extends Component {
  state = {
    movies: [],
    data: {}
  };
  UNSAFE_componentWillMount() {
    this.request(this.props.page);
  }

  request = page => {
    return axios
      .get(
        `${URL}${this.props.type}/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
      )
      .then(response => {
        this.setState({
          movies: response.data.results,
          data: response.data
        });
      });
  };

  pageControl = () => {
    if (this.state.data.total_pages > 1) {
      if (
        this.state.data.page > 1 &&
        this.state.data.page !== this.state.data.total_pages
      ) {
        return (
          <div className="container__page">
            <div className="page-selects">
              <button
                id="previous-page"
                onClick={() => {
                  this.request(this.state.data.page - 1);
                }}
              >
                <i className="far fa-arrow-alt-circle-left"></i>
              </button>
              <span id="current-page">
                {this.state.data.page} / {this.state.data.total_pages}
              </span>
              <button
                id="next-page"
                onClick={() => {
                  this.request(this.state.data.page + 1);
                }}
              >
                <i className="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
        );
      }
      if (this.state.data.page === this.state.data.total_pages) {
        return (
          <div className="container__page">
            <div className="page-selects">
              <button
                id="previous-page"
                onClick={() => {
                  this.request(this.state.data.page - 1);
                }}
              >
                <i className="far fa-arrow-alt-circle-left"></i>
              </button>
              <span id="current-page">
                {this.state.data.page} / {this.state.data.total_pages}
              </span>
            </div>
          </div>
        );
      } else if (this.state.data.page === 1) {
        return (
          <div className="container__page">
            <div className="page-selects">
              <span id="current-page">
                {this.state.data.page} / {this.state.data.total_pages}
              </span>
              <button
                id="next-page"
                onClick={() => {
                  this.request(this.state.data.page + 1);
                }}
              >
                <i className="far fa-arrow-alt-circle-right"></i>
              </button>
            </div>
          </div>
        );
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <PosterItem data={this.state.movies} />
        {this.pageControl()}
      </React.Fragment>
    );
  }
}

export default Posters;
