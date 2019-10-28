import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { getDetailUser } from "../../store/actions/getdetailuserAction";

class NewsStatusUser extends Component {
  
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
  }

  render() {

    const userStatusNews = this.props.details.user


    console.log(userStatusNews && userStatusNews)

    const myNewsStatus = userStatusNews && userStatusNews.news.map(showStatus => {
      // console.log(showStatus.status)
      const dataNewsVideo = showStatus.media.secure_url.split('.')
      if (dataNewsVideo[3] === 'mp4') {
        // console.log(showStatus)
      return (
        <div className="card md:rounded shadow bg-white p-4 mb-4 mx-4">
        <h1 className="text-xl font-semibold"><Link to={`/videoDetail/${showStatus._id}`}>{showStatus.title}</Link></h1>
        <p className="my-2 leading-normal text-sm">
           {showStatus.description.substring(0, 150)}... <span className="font-semibold text-blue-800"><Link to={`/videoDetail/${showStatus._id}`}> Read More </Link></span>
          </p>
          <p className="my-2 leading-normal text-xs font-base text-gray-600">
          Status : {showStatus.status === "Approved" ?  
          <div><span 
          className="text-green-500">
          
          <i className="far fa-check-circle fa-lg" 
          style={{fontSize : '16px', width:'50%'}}/>
          </span>
          
          <span className="text-green-500">
            publish
          </span></div> :
          
          (showStatus.status === "Pending" ? 
          <div>
          <span className="text-yellow-500"><i className="far fa-clock fa-lg" style={{fontSize : '16px', width:'50%'}}/></span> 
          <span className="text-yellow-500">pending</span> </div>: 
          
          <div><span className="text-red-500">
            <i className="far fa-times-circle fa-lg" style={{fontSize : '16px', width:'50%'}}/></span> 
          <span className="text-red-500">rejected</span></div> )} 
        </p>
        </div>
      )
    } else {
      return ( 
        <div className="card md:rounded shadow bg-white p-4 mb-4 mx-4">
        <h1 className="text-xl font-semibold"><Link to={`/detail/${showStatus._id}`}>{showStatus.title}</Link></h1>
        <p className="my-2 leading-normal text-sm">
           {showStatus.description.substring(0, 150)}... <span className="font-semibold text-blue-800"><Link to={`/detail/${showStatus._id}`}> Read More </Link></span>
          </p>
        <p className="my-2 leading-normal text-xs font-base text-gray-600">
          Status : {showStatus.status === "Approved" ?  
          <div><span 
          className="text-green-500">
          
          <i className="far fa-check-circle fa-lg" 
          style={{fontSize : '16px', width:'50%'}}/>
          </span>
          
          <span className="text-green-500">
            publish
          </span></div> :
          
          (showStatus.status === "Pending" ? 
          <div>
          <span className="text-yellow-500"><i className="far fa-clock fa-lg" style={{fontSize : '16px', width:'50%'}}/></span> 
          <span className="text-yellow-500">pending</span> </div>: 
          
          <div><span className="text-red-500">
            <i className="far fa-times-circle fa-lg" style={{fontSize : '16px', width:'50%'}}/></span> 
          <span className="text-red-500">rejected</span></div> )} 
        </p>
        </div>
      )
    }
    })
    
    return (
      <div className="bg-color-hot">
      <div className="mx-auto user-width ">
      <div className="pt-6 min-h-screen pb-6 flex-1 bg-color-hot">
        
        {myNewsStatus}

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
) (withRouter (NewsStatusUser))
