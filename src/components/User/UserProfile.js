import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getDetailUser } from "../../store/actions/getdetailuserAction";
import setToken from "../../helpers/setToken";

import "../../assets/scss/UserProfile.scss";

class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      subs : false,
      scanSubs : []
    };
  }


  handleCheckSub = async (id) => {
    if (localStorage.token){
      setToken(localStorage.token)
    }

    let tokenCheck = localStorage.token

    await axios.get(
      `https://app-citizenjournalism.herokuapp.com/api/v1/subs/${id}`,
      {
        headers : {
          Authorization : `Bearer ${tokenCheck}`
        }
      }
    )
    .then (response => {
      console.log(response.data)
      this.setState({subs : response.data.result})
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount = async() => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
    await this.handleCheckSub(id);
  }


  handleSubs = async id => {

    const {token} = this.state

    try {
      const response = await axios.post(
        `https://app-citizenjournalism.herokuapp.com/api/v1/subs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      alert("Makasih ya bang")
      this.handleCheckSub(id)
    } catch (error) {
      console.log(error.response.data);
    }
  };



  handleDeletSubs = async (id) => {
    
    if(localStorage.token){
      setToken(localStorage.token)
    }

    let tokenCheck = localStorage.token

    try {
      const response = await axios.delete(
        `https://app-citizenjournalism.herokuapp.com/api/v1/subs/${id}`,
        {
          headers:{
            Authorization : `Bearer ${tokenCheck}`
          }
        }
      );
      console.log(response.data);
      alert ('Abang jahat banget')
      this.handleCheckSub(id)
    } catch (error) {
      console.log(error.response.data);
    }
  }




  render() {
    console.log(this.state.subs)
    const userData = this.props.details.user;
    // console.log(userData && userData);
    // console.log(this.state.scanSubs)

    return (
      <div className='bg-color-hot'>
        <div className='user-width mx-auto bg-white'>
          <div className='flex flex-col px-4 bg-color-hot'>
            <div className='bg-user'>
              <div className='container mx-auto'>
                <div className='flex flex-wrap py-8 flex-col sm:flex-row'>
                  <div className='w-32 h-32 rounded-full flex-shrink-0 m-auto sm:m-0'>
                    <img
                      src={userData && userData.image.secure_url}
                      alt={userData && userData.username}
                      className='object-cover self-center rounded-full shadow-lg mb-6 h-32 w-32 md:h-32 md:w-32'
                    />
                  </div>

                  <div className='sm:pl-10 sm:pt-1 flex-1'>
                    <div className='flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6'>
                      <div className='flex flex-wrap md:w-auto w-full md:mb-0 mb-4'>
                        <h2 className='text-gray-800 text-3xl w-full mb-3 text-center sm:text-left font-bold font-serif mt-4 sm:mt-0'>
                          {userData && userData.fullname}
                          <span className='ml-6 text-xs font-sans font-normal text-green-500 py-1 px-2 border border-green-500 rounded'>
                            <Link
                              to={`/editprofile/${userData && userData._id}`}>
                              Edit Profile
                            </Link>
                          </span>
                        </h2>
                        <div className='flex sm:w-auto w-full sm:justify-start justify-center'>
                          <span className='text-gray-800 mr-4 tracking-wider text-sm'>
                            <span className='text-gray-800 mx-1'>
                              Contribution
                            </span>
                            {userData && userData.news.length}
                          </span>

                          <span className='text-gray-800 mr-4 tracking-wider text-sm'>
                            <span className='text-gray-800'> Subcribers </span>
                            {userData && userData.subscribers.length}
                          </span>

                          <span className='text-gray-800 mr-4 tracking-wider text-sm'>
                            <span className='text-gray-800'></span>
                            {userData && userData.email}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='btn-center'>
                      {this.state.subs === true ? 
                      ( <button
                        className='bg-gray-800 text-white font-semibold rounded btn-subs text-xs'
                        onClick={() => this.handleDeletSubs(userData && userData._id)}>
                        Unsubscribe
                      </button>) : ( <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded btn-subs text-xs'
                        onClick={() => this.handleSubs(userData && userData._id)}>
                        Subscribe
                      </button>)}
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
  { getDetailUser }
)(withRouter(UserProfile));
