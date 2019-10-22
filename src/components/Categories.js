import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCategory } from "../store/actions/getdetailcategoriesAction";

import "../assets/scss/Categories.scss";

class Categories extends Component {
  componentDidMount() {
    // console.log (this.props.getCategory())
    const category = this.props.match.params.category;
    this.props.getCategory(category);
  }

  render() {

    const firstNews = this.props.categories[0];
    // console.log (firstNews && firstNews.category)
    
    let sliceMydata = this.props.categories.slice(1);

    let filterCaterories = sliceMydata.filter(divide => divide.status === "Approved");

    const dataCategory = filterCaterories.map(categoryObj => {
      console.log (categoryObj)
      return (
        <div key={categoryObj._id}>
        <div className="flex justify-beetwen pt-4">
          <div className="w-3/4 pr-4">
            <h1 className="text-lg font-semibold font-serif pt-2 capitalize">
              <Link to={`/detail/`}>{categoryObj.title}</Link>
            </h1>
            <p className="text-sm font-serif pt-2 text-gray-700">
               {categoryObj.description.substring(0,120)} 
              <Link to={`/detail/`}>
                <span className="text-blue-800 font-bold font-sans">
                  Read More
                </span>
              </Link>
            </p>
            <p className="text-sm font-bold pt-2">
              <Link to={`/user/`}>
                {categoryObj.user.username}
              </Link>
            </p>
            <p className="text-xs ">{categoryObj.date.substring(0, 10)}</p>
          </div>
          <div className="w-1/4 px-2 pt-2">
            <img src={categoryObj.media.secure_url} alt="nature" width="100%" />
          </div>
        </div>
      </div>
      )
    })

    return (
      <div className="styling-category">
        <div className="flex flex-wrap overflow-hidden max-w-5xl mx-auto">
          <div className="w-full overflow-hidden h-full">
            <img
              src={firstNews && firstNews.media.secure_url}
              alt="category-img"
              className="ml-16 my-6 w-2/3"
            />

            <h1 className="ml-16 font-serif font-semibold w-2/3 mt-4">

              <Link to={`/detail/${firstNews && firstNews._id}`}>
                {firstNews && firstNews.title}
              </Link>
            </h1>
            <h3 className="ml-16 font-semibold w-2/3 mt-6">Jhon Doe</h3>
            <h3 className="ml-16 w-2/3">
              {firstNews && firstNews.date.substring(0, 10)}
            </h3>
          </div>

          <h4 className="ml-16 w-2/3 py-3 font-semibold">List of {firstNews && firstNews.category[0]}</h4>

          <div className="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4 ml-12">
            <div>
              {dataCategory}
            </div>
          </div>


        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories1.categories
  };
};

export default connect(
  mapStateToProps,
  { getCategory }
)(withRouter(Categories));
