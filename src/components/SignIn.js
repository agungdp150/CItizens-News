import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginUser} from '../store/actions/loginAction';


import Logo2 from '../assets/img/Logo2.png';
import Pict1 from '../assets/img/2650149.svg';

import '../assets/scss/SignIn.scss'

class SignIn extends Component {
  constructor(props) {
    super (props);

    this.state={
      username : '',
      password : ''
    }
  }

  handleChange = e => {
    this.setState ({
      [e.target.name] : e.target.value
    });
  };


  handleSubmit = async (e) => {
    e.preventDefault()
    // console.log ("oke")

    const dataLogin = {
      username : this.state.username,
      password : this.state.password
    }
    // console.log (dataLogin);
    // this.props.loginUser(dataLogin);
    await this.props.loginUser(dataLogin)
    if (this.props.login1) {
      this.props.history.push("/");
    } else (
      alert ("Something went wrong!")
    )
  }


  render() {

    const {username, password} = this.state

    return (
      <div> 
      <div className="flex sign-in-set">
        <div className="w-1/3 bg-black h-screen inp-set">
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={this.handleChange}
            // required
          />
          <input 
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <div className="flex justify-center">
          <button type="submit">
            Sign In
          </button>
          </div>
          </form>
          <Link to="/forgot">
          <p>forgot password?</p>
          </Link>
          <p>don't have account yet register <Link to="/signup">here...</Link></p>
        </div>

        <div className="w-3/4 bg-white-400 img-set">
          <div className="flex justify-center ">
            <Link to="/">
              <img src={Logo2} alt="Logo" width="210px"/>
            </Link>
          </div>
          <div className="text-login">
          <h1>Hello Citizens...</h1>
          <p>Please sign in to access your account and contribute with other people about happen today</p>
          </div>
          <div className="flex justify-center">
          <img src={Pict1} alt="Join Our Citizens" width="43%"/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.login1.isAuthenticated,
    login1 : state.login1.token
  }
}

export default connect(
  mapStateToProps,
  {loginUser}
) (withRouter(SignIn));
