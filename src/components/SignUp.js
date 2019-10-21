import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../store/actions/registerAction";

import Logo3 from "../assets/img/Logo3.png";

import "../assets/scss/SignUp.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      fullname: "",
      email: "",
      birthday: "",
      gender: "",
      address: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log(e.target.value);
    e.preventDefault();
    // console.log ("oke")

    const regisInput = {
      username: this.state.username,
      password: this.state.password,
      fullname: this.state.fullname,
      email: this.state.email,
      birthday: this.state.birthday,
      gender: this.state.gender,
      address: this.state.address
    };

    // console.log (regisInput);
    this.props.register(regisInput);
    this.props.history.push("/verify");
  };

  render() {
    const {
      username,
      email,
      password,
      fullname,
      address,
      birthday
     } = this.state;

    return (
      <div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden lg:w-2/5 xl:w-2/5 bg-blue-300 style-up">
              <div className="bg-gray-800 mt-24 p-10 text-gray-200">
                <h3 className="ml-8 text-2xl font-bold">Welcome to Citizen News</h3>
                <div>
                <h1 className="font-serif text-4xl">Complete Your Personal Information</h1>
                <p>
                  Create a Citizens News account to unlock all the benefit :
                </p>
                <ul className="-ml-4">
                  <li>
                    <p><span><i className="fas fa-check-circle"></i></span>Upload your own news</p>
                  </li>
                  <li>
                    <p><span><i className="fas fa-check-circle"></i></span>Subscribe to other contributor</p>
                  </li>
                </ul>

                </div>
              </div>
          </div>

          <div className="w-full overflow-hidden lg:w-3/5 xl:w-3/5 up-style h-screen pt-8">
            <Link to="/">
            <img 
            src={Logo3} 
            alt="Citizens-Logo"
            className="w-40 mx-auto"
            />
            </Link>
            <div className="mx-auto">
              <form onSubmit={this.handleSubmit}>
                <div className="col-3 flex">
                  <label className="w-1/4">Username</label> 
                  <input
                    className="effect-1"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3 flex">
                <label className="w-1/4">Email</label>
                  <input
                    className="effect-1"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3 flex">
                <label className="w-1/4">Full Name</label>
                  <input
                    className="effect-1"
                    type="text"
                    name="fullname"
                    value={fullname}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3 flex">
                <label className="w-1/4">Password</label>
                  <input
                    className="effect-1"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

              
                <div className="col-3 flex">
                <label className="w-1/4">Birthday</label>
              <label className="label-date text-white">
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

              <div className="col-3 flex">
                <label className="w-1/4">Address</label>
              <textarea
                type ="text"
                name="address"
                value={address}
                onChange={this.handleChange}
              />
              </div>

              <div className="cntr s-gender flex justify-center">
              <label htmlFor="opt1" className="radio">
                <input 
                type="radio" 
                name="gender"
                value= "M"
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

                <div className="flex justify-center pt-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-12 rounded text-sm"
                    type="submit">
                    Register
                  </button>
                </div>
              </form>
              <div className="text-center text-xs mt-4">
                <p>
                  <Link to="/signin">
                    already member sign in here...
                    </Link>
                </p>
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
    isAuthenticated: state.register1.isAuthenticated
  };
};

export default connect(
  mapStateToProps,
  { register }
)(withRouter(SignUp));
