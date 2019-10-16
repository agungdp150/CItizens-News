import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../store/actions/getnewsAction";

import "../assets/scss/CardHotNews.scss";

class CardHotNews extends Component {
  componentDidMount() {
    this.props.getNews();
  }

  render() {
    console.log(this.props.news);
    let dataHotNew = this.props.news;
    let sliceNews = dataHotNew.slice(0, 3)
    const hotData = sliceNews.map(newsHot =>{
      console.log(newsHot)
      return (
        <div className="flex flex-row flex-wrap -mx-2">
        <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
          <img
            src={newsHot.media.secure_url}
            alt=""
            class="block w-full h-64 bg-grey-dark bg-no-repeat bg-center bg-cover"></img>
          <div className="py-6 px-4">
            <h1 className="pb-4 font-serif">
              Scotland in World Cup limbo ahead of must-win game that may
              not happen
            </h1>
            <p className="text-justify font-serif">
              Tokyo came to a standstill, justifying the decision taken by
              World Rugby on Thursday to cancel Saturday’s match in
              Yokohama, about miles south of the capital, between England
              and France, with the city’s two airports closed and train
              services suspended.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-4 px-2 height-style">
          <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
            <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2 relative">
              <img
                src="https://images.unsplash.com/photo-1562887193-417e6bcfedcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
                alt=""
                class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"></img>
              <h2 className="style-title font-serif">
                Scotland in World Cup limbo ahead of must-win game that may
                not happen
              </h2>
            </div>
            <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2 relative">
              <img
                src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"
                alt=""
                class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"></img>
              <h2 className="style-title font-serif">
                Scotland in World Cup limbo ahead
              </h2>
            </div>
          </div>
        </div>
      </div>
      )
    })
    return (
      <div>
        <div className="container mx-auto p-1">
          <h1 className="my-6 text-2xl bg-gray-800 text-white font-bold py-2 px-4 rounded custom-title font-serif">
            New Citizens News
          </h1>
          {/* <div className="flex flex-row flex-wrap -mx-2">
            <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
              <img
                src="https://images.unsplash.com/photo-1570884007389-d72c2103312d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
                alt=""
                class="block w-full h-64 bg-grey-dark bg-no-repeat bg-center bg-cover"></img>
              <div className="py-6 px-4">
                <h1 className="pb-4 font-serif">
                  Scotland in World Cup limbo ahead of must-win game that may
                  not happen
                </h1>
                <p className="text-justify font-serif">
                  Tokyo came to a standstill, justifying the decision taken by
                  World Rugby on Thursday to cancel Saturday’s match in
                  Yokohama, about miles south of the capital, between England
                  and France, with the city’s two airports closed and train
                  services suspended.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-4 px-2 height-style">
              <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2 relative">
                  <img
                    src="https://images.unsplash.com/photo-1562887193-417e6bcfedcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
                    alt=""
                    class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"></img>
                  <h2 className="style-title font-serif">
                    Scotland in World Cup limbo ahead of must-win game that may
                    not happen
                  </h2>
                </div>
                <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2 relative">
                  <img
                    src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200"
                    alt=""
                    class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"></img>
                  <h2 className="style-title font-serif">
                    Scotland in World Cup limbo ahead
                  </h2>
                </div>
              </div>
            </div>
          </div> */}
          {/* {hotData} */}
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
)(withRouter(CardHotNews));
