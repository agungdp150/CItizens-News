import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../store/actions/getnewsAction";
import {ComingSoon} from '../assets/img/Coming.jpg';

import "../assets/scss/CardHotNews.scss";

class CardHotNews extends Component {

  componentDidMount() {
    this.props.getNews();
  }

  render() {

    let hotNews = this.props.news

    // console.log("props",this.props.news);
    const myNewData = hotNews.filter(saring => saring.status === "Approved")
    let newData = myNewData.slice(0, 6)
    // console.log(newData)
    // console.log(newData[0] && newData[0].status)
    // console.log((newData[0] && newData[0].status === "Approved") ? newData[0]._id : "oops")


    return (
      <div className="bg-color-hot ">
        <div className="container mx-auto">
          <h1 className="mb-6 ml-6 text-3xl font-bold rounded custom-title font-serif">
            Hot News from Our Citizens
          </h1>
          <div>
            <div className="grid-layout">
              <div className="grid-item span-2 grid-item-10">
                <img
                 src={(newData[0] && newData[0].status === "Approved") ? newData[0].media.secure_url : ComingSoon}
                 alt="test-img"
                />
                <Link to={`/detail/${(newData[0] && newData[0].status === "Approved") ? newData[0]._id : "oops"}`}>
                <h1 className="capitalize text-xl">
                  {(newData[0] && newData[0].status === "Approved") ? newData[0].title : "oops"}
                </h1>
                </Link>
                <div>
                  <p className="normal-case mt-4 font-normal">
                  {(newData[0] && newData[0].status === "Approved") ? newData[0].description.substring(0, 150) : "oops"}...<Link to={`/detail/${(newData[0] && newData[0].status === "Approved") ? newData[0]._id : "oops"}`}> 
                    <span className="font-semibold text-gray-600">Read More</span></Link></p>
                </div>
              </div>
              <div className="grid-item grid-item-11">
              <img
                 src={(newData[1] && newData[1].status === "Approved") ? newData[1].media.secure_url : ComingSoon}
                 alt="test-img"
                />
                <Link to={`/detail/${(newData[1] && newData[1].status === "Approved") ? newData[1]._id : "oops"}`}>
                <h1 className="capitalize text-sm">
                {(newData[1] && newData[1].status === "Approved") ? newData[1].title : "oops"}
                </h1>
                </Link>
              </div>
              <div className="grid-item grid-item-12">
              <img
                 src={(newData[2] && newData[2].status === "Approved") ? newData[2].media.secure_url : ComingSoon}
                 alt="test-img"
                />
                <Link to={`/detail/${(newData[2] && newData[2].status === "Approved") ? newData[2]._id : "oops"}`}>
                <h1 className="capitalize text-sm">
                {(newData[2] && newData[2].status === "Approved") ? newData[2].title : "oops"}
                  </h1>
                </Link>
              </div>
              <div className="grid-item span-2 grid-item-13">
              <img
                 src={(newData[3] && newData[3].status === "Approved") ? newData[3].media.secure_url : ComingSoon}
                 alt="test-img"
                />
                <Link to={`/detail/${(newData[3] && newData[3].status === "Approved") ? newData[3]._id : "oops"}`}>
                <h1 className="capitalize text-xl">
                {(newData[3] && newData[3].status === "Approved") ? newData[3].title : "oops"}
                </h1>
                </Link>
                <div>
                  <p className="normal-case mt-4 font-normal">
                  {(newData[3] && newData[3].status === "Approved") ? newData[3].description.substring(0, 150) : "oops"}...<Link to={`/detail/${(newData[3] && newData[3].status === "Approved") ? newData[3]._id : "oops"}`}>
                    <span className="font-semibold text-gray-600">Read More</span></Link>
                  </p>
                </div>
              </div>
              <div className="grid-item grid-item-14">
              <img
                 src={(newData[4] && newData[4].status === "Approved") ? newData[4].media.secure_url : ComingSoon}
                 alt="test-img"
                />
                <Link to={`/detail/${(newData[4] && newData[4].status === "Approved") ? newData[4]._id : "oops"}`}>
                <h1 className="capitalize text-sm">
                {(newData[4] && newData[4].status === "Approved") ? newData[4].title : "oops"}
                </h1>
                </Link>
              </div>
              <div className="grid-item grid-item-15">
              <img
                 src={(newData[5] && newData[5].status === "Approved") ? newData[5].media.secure_url : ComingSoon}
                 alt="test-img"
                />
                <Link to={`/detail/${(newData[5] && newData[5].status === "Approved") ? newData[5]._id : "oops"}`}>
                <h1 className="capitalize text-sm">
                {(newData[5] && newData[5].status === "Approved") ? newData[5].title : "oops"}
                </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="line-style mx-8 mt-6"/>
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
)(withRouter(CardHotNews));
