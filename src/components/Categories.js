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
    console.log (firstNews && firstNews.category)
    const dataCategory = this.props.categories.map(categoryObj => {
      // console.log (categoryObj)
      return (
        <div className="flex justify-between">
        <div>
          <h1 className="ml-16 font-serif text-lg font-semibold mt-2 w-3/4 ">{categoryObj.title}</h1>
          <h3 className="ml-16 font-semibold w-2/3 mt-6">Jhon Doe</h3>
          <h3 className="ml-16 w-2/3">
          {categoryObj.date.substring(0, 10)}
          </h3>
        </div>
        <div>
          <img 
          src={categoryObj.media.secure_url} 
          alt="Lorem Ipsum"
          className="w-1/2 md:w-1/2 lg:w-1/2 sm:w-1/2 px-4 pb-4"
          />
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

          <div className="w-full overflow-hidden h-full pt-4 ">
            {dataCategory}
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
