import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getVideo } from "../../store/actions/getvideoAction";

import "../../assets/scss/GridVideo.scss";

class GridVideo extends Component {
  componentDidMount() {
    this.props.getVideo();
  }

  render() {
    
    let filterData = this.props.allVideo.filter(saring => saring.status === "Approved");
    
    let videoCitizens = filterData.slice(0,4)
    
    const videos = videoCitizens.map(vidZens => {
      return (
          <div className="w-1/2 overflow-hidden p-3" key={vidZens._id}>
          <div className="w-full overflow-hidden">
          <ReactPlayer
              url={vidZens.media.secure_url}
              width="100%"
              height="230px"
            />
          </div>

            <div className="w-full overflow-hidden">
              <Link to={`/videoDetail/${vidZens._id}`}>
              <h2 className="font-semibold">{vidZens.title}</h2>
              </Link>
              <p className="text-xs">{vidZens.user.username}<span className="ml-1">published on {vidZens.date.substring(0, 10)}</span></p>
            </div>
          </div>          
      )
    })

    return (
      <div className="bg-color-hot py-4">
        <div className="flex flex-wrap overflow-hidden">

        <div className="w-full flex flex-wrap overflow-hidden">
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
