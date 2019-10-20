import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import setToken from '../helpers/setToken';
import { connect } from "react-redux";
import { getDetailUser } from "../store/actions/getdetailuserAction";

// import User from '../assets/img/user.svg'

import "../assets/scss/EditProfile.scss";

class EditProfile extends Component {
  constructor (props) {
    super (props);

    this.state = {
      email : '',
      fullname : '',
      birthday : '',
      gender : '',
      address : '',
    }
  }

  componentDidMount(){
    if (localStorage.token){
      setToken(localStorage.token)
    }
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
  }

  


  handleChange = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = async e =>{
    e.preventDefault();

    const {email, gender, birthday, fullname, address} = this.state;
    
    try{
      const response = await axios.put(
        `https://app-citizenjournalism.herokuapp.com/api/v1/user/update`,
        {
          emai : email,
          gender : gender,
          birthday : birthday,
          fullname : fullname,
          address : address
        }
      );
      console.log(response.data);
      console.log("OKKKKKKK");
    } catch (error) {
      console.log(error.response.data)
    }
  }

  handlePictProfile = async e => {
    e.preventDefault();

    // const fd = new FormData();
    // fd.append('image',
    //   this.state.media,
    //   this.state.media.name,
    //   this.state.media.type
    //   )
    // )

  }
  

  render() {

    const accountEdit = this.props.details.user;
    
    const {email, fullname, birthday, address} = this.state

    return (
      <div>
        <div className="user-width mx-auto">
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden lg:w-3/4 xl:w-3/4 bg-gray-400">
            <div>
              <div className="md:flex rounded-lg p-6">
              <form>
                <div className="image-upload">
                  <label htmlFor="img-input">
                    <img
                      className="h-24 w-24 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 object-cover cursor-pointer"
                      src={accountEdit && accountEdit.image.secure_url}
                      alt="your-pict"
                    />
                  </label>
                  <input type="file" id="img-input" className="coba" />
                </div>
                <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded text-xs mt-4 ml-2">
                  Save Image
                </button>
                </form>
                <div className="text-center md:text-left">
                  <h2 className="text-gray-800 text-xl w-full text-center sm:text-left font-bold font-serif pt-6 sm:mt-0">{accountEdit && accountEdit.fullname}</h2>
                 
                </div>
              </div>
            </div>

            <div>
              <form className="edit-form" onSubmit={this.handleSubmit}>
                <div className="col-3">
                  <input 
                  className="effect-1" 
                  type="email" 
                  name = "email"
                  value = {email}
                  onChange={this.handleChange}
                  placeholder="Email" 
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-1"
                    type="text"
                    name="fullname"
                    value={fullname}
                    onChange={this.handleChange}
                    placeholder="Full Name"
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <label className="label-date text-white">
                    <p>Birthday</p>
                    <input
                      type="date"
                      min="1945-01-01"
                      max="2020-01-01"
                      className="unstyled"
                      name="birthday"
                      value={birthday}
                      onChange={this.handleChange} 
                    />
                  </label>
                </div>

                <div className="flex col-3 radio">
                  <label htmlFor="opt1" className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="M"
                      onChange={this.handleChange}
                      className="hidden"
                      id="opt1"
                    />
                    <span className="label"></span>Male
                  </label>
                  <label htmlFor="opt2" className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="F"
                      onChange={this.handleChange}
                      className="hidden"
                      id="opt2"
                    />
                    <span className="label"></span>Female
                  </label>
                </div>

                <div className="col-3">
                  <textarea
                    className="effect-1"
                    type="text"
                    name="address"
                    onChange={this.handleChange}
                    value={address}
                    placeholder="Addres"
                  />
                </div>

                <div className="col-3">
                  <button 
                    className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-3 rounded text-xs"
                    type="submit"
                    >
                    Submit
                  </button>
                </div>
              </form>
              <button className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded text-xs">
                Delet Account
              </button>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-1/4 xl:w-1/4 bg-blue-300">
            <div className="fixed w-48">
              <div className="p-4 mx-auto">
                <h2 className="text-lg font-bold mb-2">Profile</h2>
                <p className="text-sm">
                  This information appears on your public profile. It helps instanly identify you those following you, and tells those who aren't more about you.
                </p>
              </div>
              <div className="p-4 mx-auto">
                <h2 className="text-lg font-bold mb-2">Tips</h2>
                <p className="text-sm">
                  Your Citizens profile picture helps instanly indentify you to
                  those following you and tells those who aren't more about you.
                </p>
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
) (withRouter(EditProfile));
