import React, { Component } from 'react';
import ReactPlayer from "react-player";
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { getDetailUser } from "../../store/actions/getdetailuserAction";

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
          <div className="flex flex-wrap overflow-hidden p-2 shadow my-4 rounded" key={showNews._id}>
          <div className="w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 p-3">
            <ReactPlayer 
            url={showNews.media.secure_url}        
            width="100%"
            height="130px" />
          </div>
            <div className="w-full overflow-hidden md:w-2/3 lg:w-2/3 xl:w-2/3 p-3">
               <Link to={`/videoDetail/${showNews._id}`}>
                <h2 className="font-semibold">{showNews.title}</h2>
                </Link>
                <p className="text-xs">published on<span> {showNews.date.substring(0, 10)}</span></p>
                <p className="text-sm py-4 text-justify">{showNews.description.substring(0, 150)}... <span className="font-semibold text-blue-800"><Link to={`/detail/${showNews._id}`}> Read More </Link></span></p>
            </div>
          </div>
        )
      } else {
        return (
          <div className="flex flex-wrap overflow-hidden p-2 shadow my-4 rounded" key={showNews._id}>

          <div className="w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 p-3">
              <img src={showNews.media.secure_url} alt="name"  className="h-40 w-full"/>
          </div>

            <div className="w-full overflow-hidden md:w-2/3 lg:w-2/3 xl:w-2/3 p-3">
                <Link to={`/detail/${showNews._id}`}>
                <h2 className="font-semibold">{showNews.title}</h2>
                </Link>
                <p className="text-xs">published on {showNews.date.substring(0, 10)}</p>
                <p className="text-sm py-4 text-justify"> {showNews.description.substring(0, 150)}... <span className="font-semibold text-blue-800"><Link to={`/detail/${showNews._id}`}> Read More </Link></span></p>
            </div>
          </div>
        )
      }

     
    })

    return (
      <div className="bg-color-hot">
          <div className="mx-auto user-width ">
          <div className="p-3 min-h-screen pb-5 flex-1 bg-color-hot">
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
