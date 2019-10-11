import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../store/actions/registerAction";

import Pict2 from "../assets/img/2824217.png";
import Logo2 from "../assets/img/Logo2.png";

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
          <div className="w-full overflow-hidden lg:w-2/3 xl:w-2/3 bg-blue-300 style-up">
            <div className="flex justify-center mt-12">
              <Link to="/">
                <img src={Logo2} alt="Logo" width="180px" />
              </Link>
            </div>
            <div className="text-login">
              <h1 className="font-medium">Welcome Citizens...</h1>
              <p>
                Register now and tell any people what happen today then people
                know what happen with our envitrontmen now.
              </p>
            </div>
            <div className="flex justify-center">
              <img src={Pict2} alt="Join Our Citizens" width="46%" />
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-1/3 xl:w-1/3 up-style h-screen pt-8">
            <h1 className="text-center font-medium text-3xl">Sign Up</h1>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="col-3">
                  <input
                    className="effect-1"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-1"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-1"
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    value={fullname}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-1"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

              
              <div className="col-3">
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

              <div className="col-3">
              <textarea
                type ="text"
                placeholder="Address"
                name="address"
                value={address}
                onChange={this.handleChange}
              />
              </div>

              <div className="cntr s-gender">
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
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
                    type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="text-center text-xs mt-4">
                <p>
                  <Link to="/signin">already member sign in here...</Link>
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
