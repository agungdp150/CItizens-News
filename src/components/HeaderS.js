import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Logo3 from '../assets/img/Logo3.png'

import '../assets/scss/HeaderS.scss'
class HeaderS extends Component {

  handleLogout = e => {
    localStorage.removeItem("token")
    this.props.history.push('/')
  }

  removeToken = async () => {
    await localStorage.clear();
    this.props.history.push("/");
  }

  // navbarRender = () => {
  //   if (this.props.isAuthenticated === true) {
  //     return (
  //     <div >
  //     <li class="border-t md:border-none">
  //       <Link to="/signin" class="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm"> 
  //         Log Out
  //       </Link>
  //     </li>
  //     </div>
  //     )
  //   } else {
  //     return (
  //       <div className="lg:flex md:flex">
  //       <li class="border-t md:border-none">
  //         <Link to="/signin" class="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Sign In</Link>
  //       </li>

  //       <li class="border-t md:border-none">
  //         <Link to="/signup" class="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Sign Up</Link>
  //       </li>
  //       </div>
  //     )
  //   }
  // }

  render() {
    return (
     <div>
      <nav className="w-full nav items-center px-1 text-white coloring-navbar">
      <div>
        <ul className="flex justify-end text-base font-medium pt-4 px-4">
          <li className="bg-transparent  font-semibold py-2 px-4 rounded">
            <Link to="/signin">
            Sign In
            </Link>
          </li>
          <li className="bg-transparent hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
            <Link to="/signup">
            Sign Up
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-no-shrink items-center mr-3 text-grey-darkest container px-4">
        <Link to="/">
          <img src={Logo3} alt="Logo" width="25%"/>
        </Link>
      </div>
      <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
      <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>
      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
      </ul>
    </nav>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.login1.isAuthenticated
  }
}

export default connect(
  mapStateToProps
)  (withRouter(HeaderS))