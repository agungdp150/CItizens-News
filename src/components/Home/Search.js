import React, { Component } from 'react';
import ReactPlayer from "react-player";

import '../../assets/scss/Search.scss'


class Search extends Component {


  
  render() {
    return (
      <div>
         <div className="search-width">
         <div className="flex flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden ">

            <div className="flex flex-wrap overflow-hidden p-8">

              <div className="w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 p-3">
                  <img src="https://images.pexels.com/photos/2885683/pexels-photo-2885683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200" alt="name"/>
              </div>

                <div className="w-full overflow-hidden md:w-2/3 lg:w-2/3 xl:w-2/3 p-3">
                    <h2>BLACKPINK - '마지막처럼 (AS IF IT'S YOUR LAST)' M/V</h2>
                    <p className="text-xs">Jhon Doe <span>published on 20-08-2019</span></p>
                    <p className="text-sm py-4 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...<span>Read More</span></p>
                </div>
              </div>

            </div>

            <div className="w-full overflow-hidden">
            
            <div className="flex flex-wrap overflow-hidden p-8">

              <div className="w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3 p-3">
                 <ReactPlayer 
                 url="https://res.cloudinary.com/limkaleb/video/upload/v1571759178/citizen-journalism/whikc1l81xyx3ubehiqj.mp4"        
                 width="100%"
                 height="200px" />
              </div>

                <div className="w-full overflow-hidden md:w-2/3 lg:w-2/3 xl:w-2/3 p-3">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel metus mattis, finibus metus vitae, pulvinar orci. Praesent convallis velit et felis ullamcorper consectetur </h2>
                    <p className="text-xs">Jhon Doe <span>published on 20-08-2019</span></p>
                    <p className="text-sm py-4 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...<span>Read More</span></p>
                </div>
              </div>
           
           
           
           
           
            </div>

            </div>
         </div>
      </div>
    )
  }
}

export default Search;
