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
     <div className="bg-color-hot ">
       <div className="w-full nav-forjumbo text-white font-semibold uppercase">
       <nav className="bg-transparent">
        <div className="flex flex-wrap overflow-hidden p-3">
         <div className="w-full">
            <ul className="flex justify-around mt-6 text-setting">
              <Link to={`/category/News`}>
              <li className="hvr-underline-from-center">
                News
              </li>
              </Link>
              <Link to={`/category/Lifestyle`}>
              <li className="hvr-underline-from-center">
                Lifestyle
              </li>
              </Link>
              <Link to={`/category/Food`}>
              <li className="hvr-underline-from-center">
                Food
              </li>
              </Link>
              <Link to={`/category/Tech`}>
              <li className="hvr-underline-from-center">
                Tech
              </li>
              </Link>
              <Link to={`/category/Education`}>
              <li className="hvr-underline-from-center">
                Education
              </li>
              </Link>
              <Link to={`/category/Entertainment`}>
              <li className="hvr-underline-from-center">
                Entertainment
              </li>
              </Link>
              <Link to={`/category/Entertainment`}>
              <li className="hvr-underline-from-center">
                Video
              </li>
              </Link>
            </ul>
          </div>

    
{/* 
         <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 lg:w-1/3 xl:my-1 xl:px-1 xl:w-1/3">
         <ul className="flex justify-around mt-6">
           <Link to={`/category/Tech`}>
              <li className="hvr-underline-from-center">
                Tech
              </li>
              </Link>
              <Link to={`/category/Education`}>
              <li className="hvr-underline-from-center">
                Education
              </li>
              </Link>
              <Link to={`/category/Entertainment`}>
              <li className="hvr-underline-from-center">
                Entertainment
              </li>
              </Link>
          </ul>
         </div> */}
        
        </div>
       </nav>
       </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.login1.isAuthenticated,
  }
}

export default connect(
  mapStateToProps,
)  (withRouter(HeaderS))