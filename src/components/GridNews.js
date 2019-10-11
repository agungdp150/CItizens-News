import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../store/actions/getnewsAction";

import "../assets/scss/GridNews.scss";

class GridNews extends Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    const newsData = this.props.news.map(i => {
      return (
        <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 shadow" key={i._id}>
          <img
            class="w-screen h-64"
            src={i.picture.secure_url}
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              <Link to={`/detail/${i._id}`}>{i.title}</Link>
            </div>
            <p class="text-gray-600 ">
              {i.description.substring(0, 120)}...
            </p>
            <div>
              <Link to={`/detail/${i._id}`}>Read More</Link>
            </div>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
              {(i.category !== i.category[0]) !== undefined
                ? i.category[0]
                : "undefined"}
            </span>
            <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
              {(i.category !== i.category[1]) !== undefined
                ? i.category[1]
                : "undefined"}
            </span>
            <span class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
              {(i.category !== i.category[2]) !== undefined
                ? i.category[2]
                : "undefined"}
            </span>
          </div>
        </div>
      );
    });

    return (
      <div>
        <main className="py-4">
          <h1 className="font-normal text-4xl mb-8 ml-6 ">CITIZENS NEWS</h1>
          <div>
            <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
              {newsData}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.getnews1.news
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(withRouter(GridNews));
