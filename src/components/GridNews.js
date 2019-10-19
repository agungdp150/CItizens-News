import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../store/actions/getnewsAction";

import Medal1 from "../assets/img/medal2.svg";
import Silver1 from "../assets/img/silver.svg";
// import ComingSoon from '../assets/img/Coming.jpg';

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
    const newsData = this.props.news.map(newspro => {
      if (
        newspro.category[0] === "News" &&
        newspro.status === "Approved" &&
        newspro.category[0] !== "Video"
      ) {
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
                <p className="text-xs ">{newspro.date.substring(0, 10)}</p>
              </div>
              <div className="w-1/4 px-2 pt-2">
                <img src={newspro.media.secure_url} alt="nature" width="100%" />
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    const lifestyleData = this.props.news.map(newspro => {
      if (
        newspro.category[0] === "Lifestyle" &&
        newspro.status === "Approved" &&
        newspro.category[0] !== "Video"
      ) {
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
                <p className="text-xs ">{newspro.date.substring(0, 10)}</p>
              </div>
              <div className="w-1/4 px-2 pt-2">
                <img src={newspro.media.secure_url} alt="nature" width="100%" />
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    const foodData = this.props.news.map(newspro => {
      if (
        newspro.category[0] === "Food" &&
        newspro.status === "Approved" &&
        newspro.category[0] !== "Video"
      ) {
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
                <p className="text-xs ">{newspro.date.substring(0, 10)}</p>
              </div>
              <div className="w-1/4 px-2 pt-2">
                <img src={newspro.media.secure_url} alt="nature" width="100%" />
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    const techData = this.props.news.map(newspro => {
      if (
        newspro.category[0] === "Tech" &&
        newspro.status === "Approved" &&
        newspro.category[0] !== "Video"
      ) {
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
                <p className="text-xs ">{newspro.date.substring(0, 10)}</p>
              </div>
              <div className="w-1/4 px-2 pt-2">
                <img src={newspro.media.secure_url} alt="nature" width="100%" />
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    const educateData = this.props.news.map(newspro => {
      if (
        newspro.category[0] === "Education" &&
        newspro.status === "Approved" &&
        newspro.category[0] !== "Video"
      ) {
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
                <p className="text-xs ">{newspro.date.substring(0, 10)}</p>
              </div>
              <div className="w-1/4 px-2 pt-2">
                <img src={newspro.media.secure_url} alt="nature" width="100%" />
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    const entertainData = this.props.news.map(newspro => {
      if (
        newspro.category[0] === "Entertainment" &&
        newspro.status === "Approved" &&
        newspro.category[0] !== "Video"
      ) {
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
                <p className="text-xs ">{newspro.date.substring(0, 10)}</p>
              </div>
              <div className="w-1/4 px-2 pt-2">
                <img src={newspro.media.secure_url} alt="nature" width="100%" />
              </div>
            </div>
          </div>
        );
      } else {
        return null;
      }
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
                  More News{" "}
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
                  More Lifestyle{" "}
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
                  More Food{" "}
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
                  More Tech{" "}
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
                  More Education{" "}
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
              <Link to="/category/Entertaintment">
                <h2 className="text-blue-800 font-bold">
                  More Entertaintment{" "}
                  <span>
                    <i className="fas fa-chevron-circle-right" />
                  </span>
                </h2>
              </Link>
            </div>
          </div>

          <div className="w-1/3 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 shadow bg-gray-300 shadow style-top">
            <h2 className="text-center font-bold p-2 mb-6">TOP CONTRIBUTOR</h2>
            <h1 className="text-center font-bold py-4">#1</h1>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Some"
                className="w-24 h-24 flex self-center rounded-full shadow-lg mb-6 object-cover"
              />
              <div className="medal-top">
                <img src={Medal1} alt="medal" width="35%" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-xl">Jane Doe</h2>
              <h2 className="font-semibold text-base">90</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-1 text-sm px-4 rounded">
                View
              </button>
            </div>
            <div className="flex justify-around mt-4">
              <p>2</p>
              <p className="font-base ml-8">Jane Doe</p>
              <img src={Silver1} alt="medal-silver" width="10%" />
            </div>
            <div className="flex justify-around mt-4">
              <p>3</p>
              <p className="font-base ml-8">Jane Doe</p>
              <img src={Silver1} alt="medal-silver" width="10%" />
            </div>
            <div className="flex justify-around mt-4">
              <p>4</p>
              <p className="font-base ml-8">Jane Doe</p>
              <img src={Silver1} alt="medal-silver" width="10%" />
            </div>
            <div className="flex justify-around mt-4">
              <p>5</p>
              <p className="font-base ml-8">Jane Doe</p>
              <img src={Silver1} alt="medal-silver" width="10%" />
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
