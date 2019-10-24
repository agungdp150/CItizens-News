import React, { Component } from "react";
import {withRouter ,Link } from "react-router-dom";
import Logo2 from "../assets/img/Logo2.png";
import {connect} from "react-redux";



import "../assets/scss/HeadCategory.scss";

class HeadCategory extends Component {

  removeToken = async () => {
    await localStorage.clear();
    window.location.reload(true);
    this.props.history.push('/');
  }  


  render() {
    // console.log(this.props.isAuthenticated)
    return (
      <div>
        <header className="lg:px-16 px-8 py-4 md:py-0 shadow sticky top-0 nav-color">
          <div className="container mx-auto flex flex-wrap items-center">
            <div className="flex-1 flex justify-between items-center">
              <Link to="/">
              <img src={Logo2} alt="Logo-Citizens" className="w-32  block"/>
              </Link>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
              <svg
                className="fill-current text-gray-800 hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div
              className="hidden md:flex md:items-center md:w-auto w-full text-black"
              id="menu">
              <nav>
                <ul className="md:flex items-center justify-between text-base pt-4 md:pt-0">
                  <li className="md:px-2 py-4 px-0 block search-bar-style">
                  <form id="demo-2">
                    <input 
                    type="search" 
                    placeholder="Search"
                    className="mx-4"
                    />
                  </form>
                  </li>
                

            
                    {this.props.isAuthenticated ? (
                      <div className="flex">
                        <li>
                        <div className="flex flex-col">
                          <div>
                            <div className=" flex items-center justify-center">
                              <Link
                                className="cursor-pointer w-10 h-10 rounded-full overflow-hidden"
                                to="/user/5da71cdc106f7800176a2b42">
                                <img
                                  src="https://res.cloudinary.com/limkaleb/image/upload/v1571898796/citizen-journalism/gdf1ny2gsafg5c9d75qy.png"
                                  alt="pict-profile"
                                  className="object-fit"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button className="text-xs mt-2 mx-4" onClick={this.removeToken} >Log Out</button>
                      </li>
                      </div>
                    ):(
                      <div className="flex ">
                          <li>
                          <Link
                            to="/signin"
                            className="md:px-4 md:py-4 px-0 block text-sm get-login">
                            Sign In
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/signup"
                            className="md:px-4 md:py-2 text-xs px-0 block bg-gray-200 px-4 border border-gray-500 rounded get-start mt-2">
                            Get Started
                          </Link>
                        </li>
                      </div>
                    )}
        
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapSTateToProps = state => {
  return {
    isAuthenticated : state.login1.isAuthenticated,

  }
} 

export default connect(
  mapSTateToProps

) (withRouter(HeadCategory));
