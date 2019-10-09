import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../assets/scss/About.scss';

class About extends Component {
  render() {
    return (
      <div>
        <div className="container mx-auto px-4 text-ab">
          <h1 className="text-4xl font-normal mb-4">CITIZENS</h1>
          <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div >
        <div className="container mx-auto px-4 text-ab">
        <h1>Our Team</h1>
        <div className="flex flex-wrap overflow-hidden">
        <div class="relative mb-4 w-full overflow-hidden md:w-1/2 lg:w-1/6 xl:w-1/6">
          <div class="w-24 h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <span class="group hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
            <img src="https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
          </div>
        </div>
        <div class="relative mb-4 w-full overflow-hidden md:w-1/2 lg:w-1/6 xl:w-1/6">
          <div class="group w-24 h-24 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
            <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
          </div>
        </div>
        <div class="relative mb-4 w-full overflow-hidden md:w-1/2 lg:w-1/6 xl:w-1/6">
          <div class="group w-24 h-24 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
          </div>
        </div>
        <div class="relative mb-4 w-full overflow-hidden md:w-1/2 lg:w-1/6 xl:w-1/6">
          <div class="group w-24 h-24 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
            <img src="https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
          </div>
        </div>
        <div class="relative mb-4 w-full overflow-hidden md:w-1/2 lg:w-1/6 xl:w-1/6">
          <div class="group w-24 h-24 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
            <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
          </div>
        </div>
        <div class="relative mb-4 w-full overflow-hidden md:w-1/2 lg:w-1/6 xl:w-1/6">
          <div class="group w-24 h-24 rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
            <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
            <img src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden" />
          </div>
        </div>
        </div>
        </div>

        <div className="container mx-auto px-4 text-ab">
          <h1>Contact & Social Media</h1>
          <p>
          <Link to="#">
          <i className="fab fa-facebook fa-1x"/>
          </Link> Citizens Facebook
          </p>
          <p>
          <Link to="#">
            <i className="fab fa-twitter fa-1x"/>
          </Link>Citizens Twitter
          </p>
          <p>
          <Link to="#">
            <i className="fab fa-instagram  fa-1x"/>
          </Link> Citizens Instagram
          </p>
          <p>
          <Link to="#">
            <i className="fab fa-youtube  fa-1x"/>
          </Link>Citizens Youtube
          </p>
        </div>


      </div>
    )
  }
}

export default About
