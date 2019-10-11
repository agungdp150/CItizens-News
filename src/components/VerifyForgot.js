import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import MailBox from "../assets/img/103967-OM4NIH-225.png";

import "../assets/scss/VerifyForgot.scss";

class VerifyForgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      newPass: "",
      confirmPass: ""
    };
  }

  handleChange = async e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // console.log ("oke");
    const { token, newPass, confirmPass } = this.state;
    if (newPass === confirmPass) {
      alert("Congratulations!, has been success to change");
    } else alert("oops, something went wrong please check your password");

    try {
      const response = await axios.put(
        `https://app-citizenjournalism.herokuapp.com/api/v1/user/reset-password`,
        {
          token: token,
          password: newPass
        },
        console.log(token, newPass)
      );
      console.log(response.data);
      console.log("berhasil");
      this.props.history.push("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  render() {
    const { token, newPass, confirmPass } = this.state;

    return (
      <div className="bcg-color">
        <div className="btn-back">
          <Link to="/">
            <button>
              <i className="fas fa-arrow-circle-left" /> Go Home
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden">
            <div className="flex justify-center img-style">
              <img src={MailBox} alt="mailbox"/>
            </div>
            <div className="text-center">
              <p>
                We already send token to your e-mail.
                <br />
                Please check your e-mail and write it bellow.
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden input-forgot">
            <div className="flex justify-center">
              <form onSubmit={this.handleSubmit}>
                <div className="col-3">
                  <input
                    className="effect-1"
                    type="text"
                    placeholder="Your Token"
                    name="token"
                    value={token}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-1"
                    type="password"
                    placeholder="New Password"
                    name="newPass"
                    value={newPass}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="col-3">
                  <input
                    className="effect-1"
                    type="password"
                    placeholder="Confirm Your Password"
                    name="confirmPass"
                    value={confirmPass}
                    onChange={this.handleChange}
                  />
                  <span className="focus-border"></span>
                </div>

                <div className="flex justify-center ml-32">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
                    type="submit">
                    Verify Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VerifyForgot);
