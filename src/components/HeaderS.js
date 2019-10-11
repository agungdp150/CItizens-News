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

  navbarRender = () => {
    if (this.props.isAuthenticated === true) {
      return (
      <div >
      <li class="border-t md:border-none">
        <Link to="/signin" class="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm"> 
          Log Out
        </Link>
      </li>
      </div>
      )
    } else {
      return (
        <div className="lg:flex md:flex">
        <li class="border-t md:border-none">
          <Link to="/signin" class="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Sign In</Link>
        </li>

        <li class="border-t md:border-none">
          <Link to="/signup" class="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Sign Up</Link>
        </li>
        </div>
      )
    }
  }

  render() {
    return (
     <div>
      <nav className="nav flex flex-wrap items-center justify-between px-4 text-white coloring-navbar">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <Link to="/">
          <img src={Logo3} alt="Logo" width="120"/>
        </Link>

        <div className="hide-menu">
        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">

          <li className="border-t md:border-none ">
            <Link to="/" className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Home</Link>
          </li>

          <li className="border-t md:border-none">
            <Link to="/category" className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Category</Link>
          </li>

          <li className="border-t md:border-none">
            <Link to="/contribution" className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Contributor</Link>
          </li>

          <li className="border-t md:border-none">
            <Link to="/about" className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">About</Link>
          </li>
          </ul>
          </div>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn"/>
      <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>
      <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">

      <li className="border-t md:border-none lg:hidden md:hidden">
            <Link to="/" className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Home</Link>
          </li>

   
          <li className="border-t md:border-none lg:hidden md:hidden">
            <Link to="/category" className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Category</Link>
          </li>

          <li className="border-t md:border-none lg:hidden md:hidden">
            <Link to="/contribution" className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">Contributor</Link>
          </li>

          <li className="border-t md:border-none lg:hidden md:hidden">
            <Link to="/about" className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm">About</Link>
          </li>

          <li className="border-t md:border-none">
            <div className="block md:inline-block px-2 py-3 no-underline text-grey-darkest hover:text-grey-darker font-md text-sm search-style">
              <div className="flex">
              <i className="fas fa-search"></i>
              <input 
                type = "search"
                placeholder="search news..."
              />
              </div>
            </div>
          </li>

        {this.navbarRender()}
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