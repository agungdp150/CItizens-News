import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getVideo } from "../store/actions/getvideoAction";

import "../assets/scss/GridVideo.scss";

class GridVideo extends Component {
  componentDidMount() {
    this.props.getVideo();
  }

  render() {

    console.log(this.props.allVideo)
    
    let filterData = this.props.allVideo.filter(saring => saring.status === "Approved");
    
    let videoCitizens = filterData.slice(0,6)
    
    const videos = videoCitizens.map(vidZens => {
      console.log(vidZens._id)
      return (
        <div className="w-full overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/3 p-2" key={vidZens._id}>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full h-48 overflow-hidden">
            <ReactPlayer
              url={vidZens.media.secure_url}
              width="100%"
              height="200px"
            />
          </div>

          <div className="w-full overflow-hidden">
            <h2 className="font-semibold text-base mx-8 py-2">
              <Link to={`/videoDetail/${vidZens._id}`}> {vidZens.title} </Link>
            </h2>
            <p className="text-sm font-semibold text-blue-800 pt-2 mx-8">
              By: {vidZens.user.username}
            </p>
          </div>
        </div>
      </div>
      )
    })

    return (
      <div className="bg-color-hot py-4">
        <div>
          <h1 className="pb-4 pt-4 ml-8 text-3xl font-bold rounded font-serif">
            Citizens Video
          </h1>
          <div className="flex flex-wrap overflow-hidden mx-8">

            {videos}
          
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allVideo: state.video1.allVideo
  };
};

export default connect(
  mapStateToProps,
  { getVideo }
)(withRouter(GridVideo));
