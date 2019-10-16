import React, { Component } from 'react';
import ReactPlayer from "react-player";
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {getDetailUser} from '../store/actions/getdetailuserAction';
import { dispatch } from 'rxjs/internal/observable/pairs';

import "../assets/scss/UserProfile.scss";


class UserProfile extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
  }

  render() {

    console.log (this.props.details);
    const {
      image,
      fullname,
      username,
      email,
    } = this.props.details;


    return (
      <div>
        <div className="flex flex-col min-h-screen">
          <div className="bg-user">
            <div className="container mx-auto">
              <div className="flex flex-wrap py-8 flex-col sm:flex-row">
                <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 m-auto sm:m-0">
                  <img src={image.secure_url} alt={username} />
                </div>
                <div className="sm:pl-10 sm:pt-4 flex-1">
                  <div className="flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6">
                    <div className="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">
                      <h2 className="text-gray-800 text-2xl w-full mb-3 text-center sm:text-left mt-4 sm:mt-0">
                        {fullname}
                      </h2>
                      <div className="flex sm:w-auto w-full sm:justify-start justify-center">
                      
                      <span className="text-gray-800 mr-4 tracking-wider">
                          <span className="text-gray-800"> Subscribe </span> 80 
                        </span>
                        
                        <span className="text-gray-800 mr-4 tracking-wider">
                          <span className="text-gray-800"></span> {email}
                        </span>

                      </div>
                    </div>
                  </div>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded btn-subs text-sm">
                      Subscribe 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center border-t border-gray-700 py-5">
            <a href="#" class="text-gray mx-5">Articles</a>
            <a href="#" class="text-gray-600 mx-5 hover:text-gray-500">Recommends</a>
            <a href="#" class="text-gray-600 mx-5 hover:text-gray-500">Subscriptions</a>
          </div>
  
          <div className="bg-gray-900 pt-12 pb-6 flex-1">
            <div classNAme="container mx-auto">
              <div className="flex flex-wrap md:mx-3">

          
                
                <div className="md:w-1/2 px-3 mb-6 w-full">
                  <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                    <div className="w-2/6">
                      <img
                        className="object-cover h-full w-full"
                        src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU1MzA3fQ&auto=format&fit=crop&w=2250&q=80"
                        alt=""
                      />
                    </div>
                    <div className="w-4/6 p-5">
                      <h2 className="text-white leading-normal text-lg">
                        How To Boost Your Traffic Of Your Blog And Destroy The
                        Competition
                      </h2>
                      <div className="flex flex-wrap justify-between items-center mt-6">
                        <div className="inline-flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt=""/>
                          </div>
                          <div className="flex-1 pl-2">
                            <h2 className="text-white mb-1">Mike Olle</h2>
                            <p className="text-white opacity-50 text-xs">May 18</p>
                          </div>
                        </div>
                        <span className="text-white opacity-50">
                          <svg
                            className="fill-current w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 459 459">
                            <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>




              </div>
              <div className="text-center">
                <button className="border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white">
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
) (withRouter(UserProfile));
