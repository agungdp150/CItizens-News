import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo3 from '../assets/img/Logo3.png'

import '../assets/scss/HeaderS.scss'
class HeaderS extends Component {
  render() {
    return (
     <div>
            <header className="lg:px-16 px-6 bg-black flex-wrap items-center lg:py-0 py-2">
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-1 nav-color">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/">
            <img src={Logo3} alt="Logo" width="120" viewBox="0 0 54 54"/>
            </Link>
          </div>
          
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white btn-menu" >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to='/category'>
            <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">Category</p>
            </Link>
            <Link to='/contribution'>
            <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">Contributor</p>
            </Link>
            <Link to='/about'>
            <p className="block mt-4 lg:inline-block lg:mt-0 mr-4">About</p>
            </Link>
          </div>
          <form>
            <label><i className="fas fa-search"/></label>
            <input type="search" className="shadow rounded border-0" placeholder="Search by name..."/>
          </form>
        <div>
          <Link to='/signin'>
              <p className="text-sm block mt-4 lg:inline-block lg:mt-0 mr-4">Sign In</p>
          </Link>
          <Link to='/signup'>
          <p className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Sign Up</p>
          </Link>
        </div>
        </div>
      </nav>
      </header>
    </div>
    )
  }
}

export default HeaderS