import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../store/actions/loginAction";

import Logo2 from "../assets/img/Logo2.png";
import Pict1 from "../assets/img/2650149.png";

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
          <div className="w-full overflow-hidden lg:w-1/3 xl:w-1/3 sign-style h-screen pt-32">
            <h1 className="text-center font-medium text-3xl"> Sign In </h1>{" "}
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
                  />{" "}
                  <span className="focus-border"> </span>{" "}
                </div>
                <div className="col-3">
                  <input
                    className="effect-1"
                    type="Password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />{" "}
                  <span className="focus-border"> </span>{" "}
                </div>{" "}
                <div className="flex justify-center">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
                    type="submit">
                    Sign In{" "}
                  </button>{" "}
                </div>{" "}
              </form>{" "}
              <div className="text-center text-xs mt-4">
                <p>
                  {" "}
                  <Link to="/forgot"> forgot password ? </Link>
                </p>
                <p className="mt-1">
                  {" "}
                  don 't have account yet register{" "}
                  <Link to="/signup">here...</Link>
                </p>{" "}
              </div>{" "}
            </div>
          </div>
          <div className="w-full overflow-hidden lg:w-2/3 xl:w-2/3 bg-blue-300 style-in">
            <div className="flex justify-center mt-12">
              <Link to="/">
                <img src={Logo2} alt="Logo" width="180px" />
              </Link>{" "}
            </div>{" "}
            <div className="text-login">
              <h1 className="font-medium"> Hello Citizens... </h1>{" "}
              <p>
                Please sign in to access your account and contribute with other
                people about happen today{" "}
              </p>{" "}
            </div>{" "}
            <div className="flex justify-center">
              <img src={Pict1} alt="Join Our Citizens" width="46%" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
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
