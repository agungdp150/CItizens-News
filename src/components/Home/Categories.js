import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCategory } from "../../store/actions/getdetailcategoriesAction";
import Lottie from "react-lottie";
// import ReactPlayer from "react-player";

// Loading stuff
import Myloading from "../../assets/loading/201-simple-loader.json";

import "../../assets/scss/Categories.scss";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading : false
    }
  }

  componentDidMount() {
    // console.log (this.props.getCategory())
    setTimeout(() => {
      this.setState({
        loading : true
      })
      const category = this.props.match.params.category;
      this.props.getCategory(category);
    }, 2000);

  }

  render() {

    const firstNews = this.props.categories[0];
    // console.log (firstNews && firstNews.category)
    
    let sliceMydata = this.props.categories.slice(1);

    let filterCaterories = sliceMydata.filter(divide => divide.status === "Approved");

    const dataCategory = filterCaterories.map(categoryObj => {
      console.log (categoryObj)
      // console.log((categoryObj.category !== "Video") ? true  :  false)
      return (
        <div key={categoryObj._id}>
        <div className="flex justify-beetwen pt-4">
          <div className="w-3/4 pr-4">
            <h1 className="text-lg font-semibold font-serif pt-2 capitalize">
              <Link to={`/detail/${categoryObj._id}`}>{categoryObj.title}</Link>
            </h1>
            <p className="text-sm font-serif pt-2 text-gray-700">
               {categoryObj.description.substring(0,120)}...  
              <Link to={`/detail/${categoryObj._id}`}>
                <span className="text-blue-800 font-bold font-sans ml-1">
                  Read More
                </span>
              </Link>
            </p>
            <p className="text-sm font-bold pt-2">
              <Link to={`/user/`}>
                {categoryObj.user.username}
              </Link>
            </p>
            <p className="text-xs text-gray-700">Published on {categoryObj.date.substring(0, 10)}</p>
          </div>
          <div className="w-1/4 px-2 pt-2">

            <img src={categoryObj.media.secure_url} alt="nature" width="100%" />

          </div>
        </div>
      </div>
      )
    })

    const setLoattie = {
      loop: true,
      autoplay: true,
      animationData: Myloading,
      renderSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className="styling-category bg-color-hot py-4">
        <div className="flex flex-wrap overflow-hidden max-w-5xl mx-auto">
          <div className="w-full overflow-hidden h-full">
            <img
              src={firstNews && firstNews.media.secure_url}
              alt="category-img"
              className="ml-16 my-6 w-2/3 categories-responsive"
            />

            <h1 className="ml-16 font-serif font-semibold w-2/3 mt-4 categories-responsive">

              <Link to={`/detail/${firstNews && firstNews._id}`}>
                {firstNews && firstNews.title}
              </Link>
            </h1>
            <h3 className="ml-16 font-semibold w-2/3 mt-6 categories-responsive">{firstNews && firstNews.user.username}</h3>
            <h3 className="ml-16 w-2/3 categories-responsive text-gray-700"> Published on <span className="mx-1">
              {firstNews && firstNews.date.substring(0, 10)}</span>
            </h3>
          </div>

          <h4 className="ml-16 w-2/3 py-3 font-semibold categories-responsive">List of {firstNews && firstNews.category[0]}</h4>

       
          <div className="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4 ml-12 for-cate-1 categories-responsive">
          {this.state.loading ? (
            <div>
              {dataCategory}
            </div>
          ) : (
            <Lottie options={setLoattie} width={150} />
          )}
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
