import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { getDetailUser } from "../store/actions/getdetailuserAction";

class NewsByUser extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
  }

  render() {

    const userNews = this.props.details.user

    // console.log(userNews && userNews.news.filter(checkNews => checkNews.status === 'Approved'))

    const filterNews =  userNews && userNews.news.filter(checkNews => checkNews.status === 'Approved')
    // const semen = filterNews && filterNews[6].media.secure_url.split('.')
    // console.log(semen && semen[3])

    const getNewsUser = filterNews && filterNews.map(showNews => {
      // console.log(showNews)
      // console.log(showNews.media.secure_url.split('.') === "mp4")
      const dataNewsVideo = showNews.media.secure_url.split('.')
      if ( dataNewsVideo[3] === 'mp4') 
      {
        return (
          <div className="card md:rounded shadow bg-white p-4 mb-4 mx-4" key={showNews._id}>
          <h1 className="text-xl font-semibold"><Link to={`/videoDetail/${showNews._id}`}>{showNews.title}</Link></h1>
          <p className="my-2 leading-normal text-sm">
           {showNews.description.substring(0, 150)}... <span className="font-semibold text-blue-800"><Link to={`/videoDetail/${showNews._id}`}> Read More </Link></span>
          </p>
          <p className="my-2 leading-normal text-xs font-base text-gray-600">
            Published on {showNews.date.substring(0, 10)}
          </p>
           </div>
        )
      } else {
        return (
          <div className="card md:rounded shadow bg-white p-4 mb-4 mx-4" key={showNews._id}>
          <h1 className="text-xl font-semibold"><Link to={`/detail/${showNews._id}`}>{showNews.title}</Link></h1>
          <p className="my-2 leading-normal text-sm">
           {showNews.description.substring(0, 150)}... <span className="font-semibold text-blue-800"><Link to={`/detail/${showNews._id}`}> Read More </Link></span>
          </p>
          <p className="my-2 leading-normal text-xs font-base text-gray-600">
            Published on {showNews.date.substring(0, 10)}
          </p>
           </div>
        )
      }

     
    })

    return (
      <div className="bg-color-hot">
          <div className="mx-auto user-width ">
          <div className="pt-6 min-h-screen pb-5 flex-1 bg-color-hot">
            {getNewsUser}
          </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    details : state.user1.detailUser
  };
};

export default connect(
  mapStateToProps,
  {getDetailUser}
) (withRouter(NewsByUser));
