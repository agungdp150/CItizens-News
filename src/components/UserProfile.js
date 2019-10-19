import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getDetailUser } from "../store/actions/getdetailuserAction";

import "../assets/scss/UserProfile.scss";

class UserProfile extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
  }

  render() {
    const userData = this.props.details.user;
    console.log(this.props.details.user);
    console.log(userData && userData.fullname);

    return (
      <div className="bg-color-hot">
        <div className="user-width mx-auto">

          <div className="flex flex-col min-h-screen px-4">
            
            <div className="bg-user">
              <div className="container mx-auto">
                <div className="flex flex-wrap py-8 flex-col sm:flex-row">
                  
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 m-auto sm:m-0">
                    <img
                      src={userData && userData.image.secure_url}
                      alt={userData && userData.username}
                      className="object-cover self-center rounded-full shadow-lg mb-6"
                    />
                  </div>
                  
                  <div className="sm:pl-10 sm:pt-1 flex-1">
                    <div className="flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6">
                      <div className="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">
                        <h2 className="text-gray-800 text-3xl w-full mb-3 text-center sm:text-left font-bold font-serif mt-4 sm:mt-0">
                          {userData && userData.fullname} 
                          <span className="ml-6 text-xs font-sans font-normal text-green-500 py-1 px-2 border border-green-500 rounded"> 
                          <Link to="/editprofile">Edit Profile</Link></span>
                        </h2>
                        <div className="flex sm:w-auto w-full sm:justify-start justify-center">
                          <span className="text-gray-800 mr-4 tracking-wider text-sm">
                            <span className="text-gray-800"> Subcribers </span>
                            80
                          </span>

                          <span className="text-gray-800 mr-4 tracking-wider text-sm">
                            <span className="text-gray-800"></span>
                            {userData && userData.email}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="btn-center">                    
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded btn-subs text-xs">
                      Subscribe
                    </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center border-t border-gray-700 py-5">
            <Link to="#" className="text-white mx-5">Articles</Link>
      <Link to="#" className="text-gray-600 mx-5 hover:text-gray-500">Recommends</Link>
      <Link to="#" className="text-gray-600 mx-5 hover:text-gray-500">Subscriptions</Link>
            </div>
            <div className="bg-gray-900 pt-12 pb-6 flex-1">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.user1.detailUser
  };
};

export default connect(
  mapStateToProps,
  { getDetailUser }
)(withRouter(UserProfile));
