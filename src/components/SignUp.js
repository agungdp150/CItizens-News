import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../store/actions/registerAction';

import Pict2 from "../assets/img/2824217.svg"
import Logo2 from '../assets/img/Logo2.png';

import '../assets/scss/SignUp.scss'

class SignUp extends Component {
  constructor(props) {
    super (props);

    this.state = {
      username : '',
      password : '',
      fullname : '',
      email : '',
      birthday : '',
      gender : '',
      address : ''
    }
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }


  handleSubmit = e => {
    console.log (e.target.value)
    e.preventDefault();
    // console.log ("oke")

    const regisInput = {
      username : this.state.username,
      password : this.state.password,
      fullname : this.state.fullname,
      email : this.state.email,
      birthday : this.state.birthday,
      gender : this.state.gender,
      address : this.state.address
    }

    // console.log (regisInput);
    this.props.register(regisInput);
    this.props.history.push("/verify");
  }

  render() {

    const {username, email, password, fullname, address, birthday} = this.state;

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
                type="email"
                placeholder="e.g citizens@citizens.com"
                name="email"
                value={email}
                onChange={this.handleChange}
                // required
              />
              <input 
                type="text"
                placeholder="e.g Annetta Mante"
                name="fullname"
                value={fullname}
                onChange={this.handleChange}
              />
              <input 
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <label className="label-date text-white"><p>Birthday</p>
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
              <textarea
                type ="text"
                placeholder="address"
                name="address"
                value={address}
                onChange={this.handleChange}
              />
               
               <h4 className="text-white text-center">Gender</h4>

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
              <div className="flex justify-center text-white">
              <button type="submit" >
                Sign Up
              </button>
              </div>
                <p className="text-white text-xs text-center pt-4">Already member <Link to="/signin">sign in here...</Link></p>
            </form>
          </div>
        </div>
      </div>
   )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.register1.isAuthenticated
  }
}

export default connect (
  mapStateToProps,
  {register}
) (withRouter(SignUp));
