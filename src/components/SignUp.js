import React, { Component } from 'react'
import Pict2 from "../assets/img/2824217.jpg"
import Logo2 from '../assets/img/Logo2.png';
import {Link} from 'react-router-dom';

import '../assets/scss/SignUp.scss'

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="flex">
          <div className="w-3/4 h-screen">
          <div className="flex justify-center s-up">
            <Link to="/">
              <img src={Logo2} alt="Logo" width="200px"/>
            </Link>
          </div>
          <div className="s-up-text">
            <h1>Welcome...</h1>
            <p>Register now and tell any people what happen today then people know what happen with our envitrontmen now.</p>
          </div>
          <div className="flex justify-left s-up-qu">
           <img src={Pict2} alt="Join Our Citizens" width="43%"/>
           <p>“I still believe that if your aim is to change the world, journalism is a more immediate short-term weapon.”
          <br/>
          <br/>
           <i>Tom Stoppard - British playwright and screenwriter.-</i>
           </p>
          </div>
          </div>
          <div className="w-1/3 bg-black h-screen s-up-form">
          <h1 className="text-white">Sign Up</h1>
            <form>
              <input 
                type="text"
                placeholder="username"
                required
              />
              <input 
                type="email"
                placeholder="e.g citizens@citizens.com "
              />
              <input 
                type="text"
                placeholder="e.g Annetta Mante"
              />
              <input 
                type="password"
                placeholder="password"
              />
              <label className="label-date text-white"><p>Birthday</p>
              <input 
                type="date"
                min="1945-01-01" 
                max="2020-01-01" 
                step="7"
                className="unstyled"
              />
              </label>
              <textarea
                type ="text"
                placeholder="address"
              />
               
               <h4 className="text-white text-center">Gender</h4>

              <div className="cntr s-gender">
              <label for="opt1" className="radio">
                <input 
                type="radio" 
                name="gender"
                value= "Male"
                // onChange={this.handleGender}
                className="hidden"
                id="opt1" 
                />
                <span className="label"></span>Male
              </label>
              <label for="opt2" className="radio">
                <input 
                type="radio" 
                name="gender"
                value="Female"
                // onChange={this.handleGender}
                className="hidden" 
                id="opt2" 
                />
                <span className="label"></span>Female
              </label>
              <label for="opt3" className="radio">
                <input 
                type="radio" 
                name="gender"
                value = "other"
                // onChange={this.handleGender}
                className="hidden" 
                id="opt3"
                />
                <span className="label"></span>Other
              </label>
              </div>
              <div className="flex justify-center text-white">
              <button>
                Sign Up
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
   )
  }
}

export default SignUp
