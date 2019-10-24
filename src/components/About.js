import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';

import about from '../assets/about/about.mp4'

import '../assets/scss/About.scss';

class About extends Component {
  render() {
    return (
      <div className="py-8 bg-color-hot">
        <div className="container mx-auto px-4 text-ab">
          <h1 className="text-4xl font-normal mb-4">
            CITIZENS
          </h1>
          <ReactPlayer 
          url={about} 
          playing className="shadow mx-auto my-4"
          />
          <p className="font-light">
          Citizen News  is the platform for you to share your story, to speak up your voice, and to spread the news. Proudly developed by Aldo Lim, Angel Ria Purnamasari (lovely Aldo), Kaleb Lim, Agung Dwi Putra, Khairunissa Afifa, and Joe Phang.
          </p>
        </div >
        <div className="container mx-auto px-4 text-ab">
        <h1 className="my-4">Our Team</h1>
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
