import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/loginAction";

import Logo3 from "../assets/img/Logo3.png";

import "../assets/scss/SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // console.log ("oke")

    const dataLogin = {
      username: this.state.username,
      password: this.state.password
    };
    // console.log(dataLogin);
    this.props.loginUser(dataLogin);
    await this.props.loginUser(dataLogin);
    const token = await localStorage.getItem("token");
    if (token) {
      console.log(token);
      alert("Login success :)");
      this.props.history.push("/");
    } else {
      alert("Something went wrong!");
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden lg:w-3/5 xl:w-3/5 sign-style h-screen pt-32">
            <Link to="/">
            <img 
              src={Logo3} 
              alt="Logo-Citizens"
              className="w-40 mx-auto"
              />
            </Link>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="col-3 flex">
                  <label className="w-1/4 p-4">Username</label>
                  <input
                    className="effect-1"
                    type="text"
                    placeholder="citizens username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"> </span>
                </div>
                <div className="col-3 flex">
                  <label className="w-1/4 p-4">Password</label>
                  <input
                    className="effect-1"
                    type="Password"
                    placeholder="your password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"> </span>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-12 rounded text-sm"
                    type="submit">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-center text-xs mt-4">
                <p>
                 
                  <Link to="/forgot"> Forgot password ? </Link>
                </p>
                <p className="mt-1">
                
                  Don 't have any account yet?
                  <Link to="/signup" className="ml-1"> register here...</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-2/5 xl:w-2/5 bg-blue-300 style-in">
            <div className="bg-gray-800 text-gray-200 mt-24 p-10 font-serif">
              <h1 className="font-serif text-4xl">
               Sign In with Citizens Account
              </h1>
              <p>
                 Now you can login with your Google Account wiht these step :
                </p>
                <ul className="-ml-4">
                  <li>
                    <p><span><i className="fas fa-check-circle"></i></span>Upload more news and become our Top Contributor.</p>
                  </li>
                  <li>
                    <p><span><i className="fas fa-check-circle"></i></span>Subscribe your favorite contributor, and give them appreciation by leaving comment.</p>
                  </li>
                </ul>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login1.isAuthenticated,
    login1: state.login1.token
  };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(withRouter(SignIn));
