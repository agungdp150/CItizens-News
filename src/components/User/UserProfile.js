import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getDetailUser } from "../../store/actions/getdetailuserAction";

import "../../assets/scss/UserProfile.scss";

class UserProfile extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
  }

  render() {
    const userData = this.props.details.user;
    // console.log(this.props.details.user);
    console.log(userData && userData);


    return (
      <div className="bg-color-hot">
        <div className="user-width mx-auto bg-white">

          <div className="flex flex-col px-4 bg-color-hot">
            
            <div className="bg-user">
              <div className="container mx-auto">
                <div className="flex flex-wrap py-8 flex-col sm:flex-row">
                  
                  <div className="w-32 h-32 rounded-full flex-shrink-0 m-auto sm:m-0">
                    <img
                      src={userData && userData.image.secure_url}
                      alt={userData && userData.username}
                      className="object-cover self-center rounded-full shadow-lg mb-6 h-32 w-32 md:h-32 md:w-32"
                    />
                  </div>
                  
                  <div className="sm:pl-10 sm:pt-1 flex-1">
                    <div className="flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6">
                      <div className="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">
                        <h2 className="text-gray-800 text-3xl w-full mb-3 text-center sm:text-left font-bold font-serif mt-4 sm:mt-0">
                          {userData && userData.fullname} 
                          <span className="ml-6 text-xs font-sans font-normal text-green-500 py-1 px-2 border border-green-500 rounded"> 
                          <Link to={`/editprofile/${userData && userData._id}`}>Edit Profile</Link></span>
                        </h2>
                        <div className="flex sm:w-auto w-full sm:justify-start justify-center">
                          <span className="text-gray-800 mr-4 tracking-wider text-sm">
                            <span className="text-gray-800 mx-1"> Contribution</span>
                            {userData && userData.news.length}
                          </span>

                          <span className="text-gray-800 mr-4 tracking-wider text-sm">
                            <span className="text-gray-800"> Subcribers </span>
                            10
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
  {getDetailUser}
)(withRouter(UserProfile));
