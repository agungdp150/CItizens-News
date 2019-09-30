import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Logo2 from '../assets/img/Logo2.png';
import Pict1 from '../assets/img/2650149.jpg';

import '../assets/scss/SignIn.scss'

class SignIn extends Component {
  render() {
    return (
      <div> 
      <div className="flex sign-in-set">
        <div className="w-1/3 bg-black h-screen inp-set">
          <h1>Sign In</h1>
          <form>
          <input 
            type="text"
            placeholder="username"
            required
          />
          <input 
            type="password"
            placeholder="password"
          />
          <div className="flex justify-center">
          <button>
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
              <img src={Logo2} alt="Logo" width="200px"/>
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

export default SignIn
