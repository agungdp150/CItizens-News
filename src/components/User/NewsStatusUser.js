import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getDetailUser,
  getUserNews
} from "../../store/actions/getdetailuserAction";
import setToken from '../../helpers/setToken';
import axios from "axios";

class NewsStatusUser extends Component {
  constructor(props) {
    super(props);

    this.state ={
      token : ""
    }
  }

  componentDidMount() {
    if (localStorage.token){
      setToken(localStorage.token);
    }
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
    this.props.getUserNews();
  }


  handleDelete = async (id) => {

    const checkToken = `Bearer ${localStorage.getItem("token")}`

    try {
      const response = await axios.delete(
        `https://app-citizenjournalism.herokuapp.com/api/v1/news/delete/${id}`,
        {
          headers : {
            Authorization: checkToken
          }
        },
      );
      console.log(response.data);
      alert("are you sure about that? Jhon cena ")
      this.props.getUserNews(this.props.userNews)
    } catch (error) {
      console.log(error.response.data)
    }


  }

  render() {
    const status = this.props.userNews;

    const myNewsStatus =
      status &&
      status.news.map(showStatus => {
        const dataNewsVideo = showStatus.media.secure_url.split(".");
        if (dataNewsVideo[3] === "mp4") {
          return (
            <div
              className='card md:rounded shadow bg-white p-4 mb-4 mx-4'
              key={showStatus._id}>
              <h1 className='text-xl font-semibold'>
                <Link to={`/videoDetail/${showStatus._id}`}>
                  {showStatus.title}
                </Link>
              </h1>
              <p className='my-2 leading-normal text-sm'>
                {showStatus.description.substring(0, 150)}...
                <span className='font-semibold text-blue-800'>
                  <Link to={`/videoDetail/${showStatus._id}`}> Read More </Link>
                </span>
              </p>
              <p className='my-2 leading-normal text-xs font-base text-gray-600'>
                Status :      </p>
                {showStatus.status === "Approved" ? (
                  <div>
                    <span className='text-green-500'>
                      <i
                        className='far fa-check-circle fa-lg'
                        style={{ fontSize: "16px", width: "50%" }}
                      />
                    </span>

                    <span className='text-green-500 text-xs'>publish</span>
                  </div>
                ) : showStatus.status === "Pending" ? (
                  <div>
                    <span className='text-yellow-500'>
                      <i
                        className='far fa-clock fa-lg'
                        style={{ fontSize: "16px", width: "50%" }}
                      />
                    </span>
                    <span className='text-yellow-500 text-xs'>pending</span>{" "}
                  </div>
                ) : (
                  <div>
                    <span className='text-red-500'>
                      <i
                        className='far fa-times-circle fa-lg'
                        style={{ fontSize: "16px", width: "50%" }}
                      />
                    </span>
                    <span className='text-red-500 text-xs'>rejected</span>
                    <span className='text-xs mx-4 text-red-500 border-solid border border-red-500 px-2 py-1'>
                      <button onClick={() => this.handleDelete(showStatus._id)}>Delete</button>
                    </span>
                  </div>
                )}
        
            </div>
          );
        } else {
          return (
            <div
              className='card md:rounded shadow bg-white p-4 mb-4 mx-4'
              key={showStatus._id}>
              <h1 className='text-xl font-semibold'>
                <Link to={`/detail/${showStatus._id}`}>{showStatus.title}</Link>
              </h1>
              <p className='my-2 leading-normal text-sm'>
                {showStatus.description.substring(0, 150)}...
                <span className='font-semibold text-blue-800'>
                  <Link to={`/detail/${showStatus._id}`}> Read More </Link>
                </span>
              </p>
              <p className='my-2 leading-normal text-xs font-base text-gray-600'>
                Status :    </p>
                {showStatus.status === "Approved" ? (
                  <div>
                    <span className='text-green-500'>
                      <i
                        className='far fa-check-circle fa-lg'
                        style={{ fontSize: "16px", width: "50%" }}
                      />
                    </span>

                    <span className='text-green-500 text-xs'>publish</span>
                  </div>
                ) : showStatus.status === "Pending" ? (
                  <div>
                    <span className='text-yellow-500'>
                      <i
                        className='far fa-clock fa-lg'
                        style={{ fontSize: "16px", width: "50%" }}
                      />
                    </span>
                    <span className='text-yellow-500 text-xs'>pending</span>{" "}
                  </div>
                ) : (
                  <div>
                    <span className='text-red-500'>
                      <i
                        className='far fa-times-circle fa-lg'
                        style={{ fontSize: "16px", width: "50%" }}
                      />
                    </span>
                    <span className='text-red-500 text-xs'>rejected</span>
                    <span className='text-xs mx-4 text-red-500 border-solid border border-red-500 px-2 py-1'>
                      <button onClick={() => this.handleDelete(showStatus._id)}>Delete</button>
                    </span>
                  </div>
                )}
            </div>
          );
        }
      });

    return (
      <div className='bg-color-hot'>
        <div className='mx-auto user-width '>
          <div className='pt-6 min-h-screen pb-6 flex-1 bg-color-hot'>
            {myNewsStatus}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.user1.detailUser,
    userNews: state.user1.userNews
  };
};

export default connect(
  mapStateToProps,
  { getUserNews, getDetailUser }
)(withRouter(NewsStatusUser));
