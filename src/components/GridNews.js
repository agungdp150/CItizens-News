import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../store/actions/getnewsAction";

import "../assets/scss/GridNews.scss";

class GridNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryCheck: "",
      filterCategory: []
    };
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    // console.log(this.props.news.category)
    const dataNews = this.props.news;

    for (let newsCategory = 0; newsCategory < dataNews.length; newsCategory++) {
      // console.log(dataNews[newsCategory].category);
    }

    // const newsCategory = () => {
    //   this.setState(state => {
    //     if (state.categoryCheck !== ''){
    //       return {state.categoryCheck : state.news.filter()(myFilter => myFilter.filterCategory.indexOf(state.categoryCheck)) >= 0 }
    //     }
    //   })
    // }

    const newsData = this.props.news.map(newspro => {
      // console.log (newspro.category);
      if (newspro.category[0] === "Food") {
        return (
          <div
            className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            key={newspro._id}>
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
              <div className="flex flex-wrap no-underline hover:no-underline">
                <img
                  src={newspro.media.secure_url}
                  alt=""
                  className="h-64 w-full rounded-t pb-6"
                />
                <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                  <Link to={`/category/${newspro.category}`}>{newspro.category}</Link>
                </p>
                <Link to={`/detail/${newspro._id}`}>
                  <div className="w-full font-bold text-xl text-gray-900 px-6">
                    {newspro.title}
                  </div>
                </Link>
                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                  {newspro.description.substring(0, 210)}...
                  <Link to={`/detail/${newspro._id}`}>
                    <span className="text-gray-600 text-xs md:text-sm">
                      Read More
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-sm md:text-sm">
                  {newspro.user.username}
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  {newspro.date.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <div>
        <h1 className="my-6 text-2xl bg-gray-800 text-white font-bold py-2 px-4 rounded custom-title font-serif ml-12">
          News
        </h1>
        <div className="flex flex-wrap justify-center  container mx-auto">
          {newsData}
        </div>

        <h1 className="my-6 text-2xl bg-gray-800 text-white font-bold py-2 px-4 rounded custom-title font-serif ml-12">
          Life Style
        </h1>
        <div className="flex flex-wrap justify-center  container mx-auto">

        </div>

        <h1 className="my-6 text-2xl bg-gray-800 text-white font-bold py-2 px-4 rounded custom-title font-serif ml-12">
          Food
        </h1>
        <div className="flex flex-wrap justify-center  container mx-auto">

        </div>

        <h1 className="my-6 text-2xl bg-gray-800 text-white font-bold py-2 px-4 rounded custom-title font-serif ml-12">
          Tech
        </h1>
        <div className="flex flex-wrap justify-center  container mx-auto">
          
        </div>
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
