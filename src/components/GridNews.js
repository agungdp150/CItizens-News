import React, { Component } from "react";
// import Moment from 'react-moment';
import 'moment-timezone';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../store/actions/getnewsAction";

import "../assets/scss/GridNews.scss";

class GridNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryCheck: ""
    };
  }

  componentDidMount() {
    this.props.getNews();
  }

  render() {
    let dataAllnews = this.props.news;

    let cateNews = dataAllnews.filter(newsFil => newsFil.status === "Approved");

    let newsFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "News"
    );

    let sliceNews = newsFilter.slice(0, 4);

    const newsData = sliceNews.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className="flex justify-beetwen pt-4">
            <div className="w-3/4 pr-4">
              <h1 className="text-lg font-semibold font-serif pt-2 capitalize">
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className="text-sm font-serif pt-2 text-gray-700">
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className="text-blue-800 font-bold font-sans">
                    Read More
                  </span>
                </Link>
              </p>
              <p className="text-sm font-bold pt-2">
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className="text-xs text-gray-700">Published on {newspro.date.substring(0, 10)}</p>
            </div>
            <div className="w-1/4 px-2 pt-2">
              <img src={newspro.media.secure_url} alt="nature" width="100%" />
            </div>
          </div>
        </div>
      );
    });

    let lifeFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Lifestyle"
    );

    let sliceLifestyle = lifeFilter.slice(0, 4);

    const lifestyleData = sliceLifestyle.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className="flex justify-beetwen pt-4">
            <div className="w-3/4 pr-4">
              <h1 className="text-lg font-semibold font-serif pt-2 capitalize">
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className="text-sm font-serif pt-2 text-gray-700">
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className="text-blue-800 font-bold font-sans">
                    Read More
                  </span>
                </Link>
              </p>
              <p className="text-sm font-bold pt-2">
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className="text-xs text-gray-700">Published on {newspro.date.substring(0, 10)}</p>
            </div>
            <div className="w-1/4 px-2 pt-2">
              <img src={newspro.media.secure_url} alt="nature" width="100%" />
            </div>
          </div>
        </div>
      );
    });

    let foodFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Food"
    );

    let sliceFood = foodFilter.slice(0, 4);

    const foodData = sliceFood.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className="flex justify-beetwen pt-4">
            <div className="w-3/4 pr-4">
              <h1 className="text-lg font-semibold font-serif pt-2 capitalize">
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className="text-sm font-serif pt-2 text-gray-700">
                {newspro.description.substring(0, 170)}...
                <Link to={`/detail/${newspro._id}`}>
                  <span className="text-blue-800 font-bold font-sans">
                    Read More
                  </span>
                </Link>
              </p>
              <p className="text-sm font-bold pt-2">
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className="text-xs text-gray-700">Published on {newspro.date.substring(0, 10)}</p>
            </div>
            <div className="w-1/4 px-2 pt-2">
              <img src={newspro.media.secure_url} alt="nature" width="100%" />
            </div>
          </div>
        </div>
      );
    });

    let techFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Tech"
    );

    let sliceTech = techFilter.slice(0, 4);

    const techData = sliceTech.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className="flex justify-beetwen pt-4">
            <div className="w-3/4 pr-4">
              <h1 className="text-lg font-semibold font-serif pt-2 capitalize">
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className="text-sm font-serif pt-2 text-gray-700">
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className="text-blue-800 font-bold font-sans">
                    Read More
                  </span>
                </Link>
              </p>
              <p className="text-sm font-bold pt-2">
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className="text-xs text-gray-700">Published on {newspro.date.substring(0, 10)}</p>
            </div>
            <div className="w-1/4 px-2 pt-2">
              <img src={newspro.media.secure_url} alt="nature" width="100%" />
            </div>
          </div>
        </div>
      );
    });

    let eduFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Education"
    );

    let sliceEdu = eduFilter.slice(0, 4);

    const educateData = sliceEdu.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className="flex justify-beetwen pt-4">
            <div className="w-3/4 pr-4">
              <h1 className="text-lg font-semibold font-serif pt-2 capitalize">
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className="text-sm font-serif pt-2 text-gray-700">
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className="text-blue-800 font-bold font-sans">
                    Read More
                  </span>
                </Link>
              </p>
              <p className="text-sm font-bold pt-2">
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className="text-xs text-gray-700">Published on {newspro.date.substring(0, 10)}</p>
            </div>
            <div className="w-1/4 px-2 pt-2">
              <img src={newspro.media.secure_url} alt="nature" width="100%" />
            </div>
          </div>
        </div>
      );
    });

    let entertainFilter = cateNews.filter(
      checkNews => checkNews.category[0] === "Entertainment"
    );

    let sliceEnter = entertainFilter.slice(0, 4);

    const entertainData = sliceEnter.map(newspro => {
      return (
        <div key={newspro._id}>
          <div className="flex justify-beetwen pt-4">
            <div className="w-3/4 pr-4">
              <h1 className="text-lg font-semibold font-serif pt-2 capitalize">
                <Link to={`/detail/${newspro._id}`}>{newspro.title}</Link>
              </h1>
              <p className="text-sm font-serif pt-2 text-gray-700">
                {newspro.description.substring(0, 170)}...{" "}
                <Link to={`/detail/${newspro._id}`}>
                  <span className="text-blue-800 font-bold font-sans">
                    Read More
                  </span>
                </Link>
              </p>
              <p className="text-sm font-bold pt-2">
                <Link to={`/user/${newspro.user._id}`}>
                  {newspro.user.username}
                </Link>
              </p>
              <p className="text-xs text-gray-700">Published on {newspro.date.substring(0, 10)}</p>
            </div>
            <div className="w-1/4 px-2 pt-2">
              <img src={newspro.media.secure_url} alt="nature" width="100%" />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="bg-color-hot">
        <div className="container mx-auto pt-6"></div>
        <div className="flex flex-wrap overflow-hidden mx-8">
          <div className="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
              News
            </h1>
            <div>{newsData}</div>
            <div className="flex justify-end">
              <Link to="/category/News">
                <h2 className="text-blue-800 font-bold">
                  More News
                  <span>
                    <i className="fas fa-chevron-circle-right" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <hr className="line-style mt-4" />
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
              Lifestyle
            </h1>
            <div>{lifestyleData}</div>
            <div className="flex justify-end">
              <Link to="/category/Lifestyle">
                <h2 className="text-blue-800 font-bold pt-4">
                  More Lifestyle
                  <span>
                    <i className="fas fa-chevron-circle-right" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <hr className="line-style mt-4" />
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
              Food
            </h1>
            <div>{foodData}</div>
            <div className="flex justify-end">
              <Link to="/category/Food">
                <h2 className="text-blue-800 font-bold">
                  More Food
                  <span>
                    <i className="fas fa-chevron-circle-right" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <hr className="line-style mt-4" />
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
              Tech
            </h1>
            <div>{techData}</div>
            <div className="flex justify-end pt-4">
              <Link to="/category/Tech">
                <h2 className="text-blue-800 font-bold">
                  More Tech
                  <span>
                    <i className="fas fa-chevron-circle-right" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <hr className="line-style mt-4" />
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
              Education
            </h1>
            <div>{educateData}</div>
            <div className="flex justify-end pt-4">
              <Link to="/category/Education">
                <h2 className="text-blue-800 font-bold">
                  More Education
                  <span>
                    <i className="fas fa-chevron-circle-right" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="w-2/3 overflow-hidden sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 px-4">
            <hr className="line-style mt-4" />
            <h1 className="pb-4 mt-4 ml-1 text-3xl font-bold rounded font-serif">
              Entertaintment
            </h1>
            <div>{entertainData}</div>
            <div className="flex justify-end pt-4">
              <Link to="/category/Entertainment">
                <h2 className="text-blue-800 font-bold">
                  More Entertaintment
                  <span>
                    <i className="fas fa-chevron-circle-right" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>
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
