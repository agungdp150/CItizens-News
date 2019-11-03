import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import Lottie from "react-lottie";

// Loading stuff
import Myloading from "../../assets/loading/201-simple-loader.json";

import "../../assets/scss/CardHotNews.scss";

class CardHotNews extends Component {
  constructor(props) {
    super (props);

    this.state ={
      trends : [],
      loading : false
    }
  }


  getTrending = async () =>{
    await axios({
      mehod : "GET",
      url : `https://app-citizenjournalism.herokuapp.com/api/v1/news/popular`
    }).then(response => {
      this.setState({trends : response.data.result});
      this.setState({loading : true})
    });
  };

  componentDidMount = async () => {
    await this.getTrending()

  }

  render() {
    // console.log(this.state.trends)
    let trendSlice = this.state.trends

    let sliceNow = trendSlice.slice(0,6)

    const showTrends = sliceNow && sliceNow.map(helloTrends => {
      let getVideoTrends = helloTrends._id.media.secure_url.split(".")

      if (getVideoTrends[3] === "mp4"){
        return (
          <div className="flex flex-wrap justify-center border-b border-blue-600 w-4/5 overflow-hidden py-3 mx-auto" key={helloTrends._id._id}>
          <ReactPlayer url={helloTrends._id.media.secure_url} width="45%" height="50px"/>
          <Link to={`/videoDetail/${helloTrends._id._id}`} >
          <h5 className="text-xs text-gray-700 text-center px-8 py-1">{helloTrends._id.title}</h5>
          </Link>
         </div>
        )
      } else {
        return (
          <div className="flex flex-wrap justify-center w-4/5 overflow-hidden border-b border-blue-600 py-3 mx-auto" key={helloTrends._id._id}>
          <img src={helloTrends._id.media.secure_url}
          alt="trends" 
          className="w-24 h-16"/>
          <h5 className="text-xs text-gray-700 text-center px-8 py-1"><Link to={`/detail/${helloTrends._id._id}`}>{helloTrends._id.title} </Link></h5>
        </div>
        )
      }

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
      <div className="bg-color-hot ">
          <div className="p-2 my-3">
            <h1 className="py-4 font-semibold text-center">Trending News</h1>
            <div className="flex flex-wrap overflow-hidden">
              {this.state.loading ? 
              (
                <div className="w-full overflow-hidden">
                {showTrends}
              </div>
              ) : 
              (
                <Lottie options={setLoattie} width={150} />
              )}

            </div>        
          </div>
      </div>
    );
  }
}


export default (withRouter(CardHotNews));
