import React, { Component } from "react";
import ReactPlayer from 'react-player'; 
import { Link } from "react-router-dom";

import "../assets/scss/UserProfile.scss";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <div className="bg-white shadow">
          <div className="hero"></div>
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:relative">
            <div className="w-full lg:w-1/4 img-profile">
              <div className="w-48 h-48 relative mb-12 my-12 z-9">
              <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
                <img src="https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="lovely avatar" className="object-cover object-center w-full h-full visible group-hover:hidden" />
              </div>
            </div>
            </div>
            <div className="w-full lg:w-1/2 z-10 text-class shadow">
            <div className="bg-white px-4 border-b-2 border-solid border-transparent border-teal">
              <h1>JANE DOE</h1>
              <hr/>
            </div>
              <ul className="list-reset flex bg-white">
                <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent border-teal">
                  <Link to="#"
                  className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">
                      60
                    </div>
                  </Link>
                </li> 
                <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent border-teal">
                <Link to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">
                      60
                    </div>
                  </Link>
                </li> 
                <li className="text-center py-3 px-4 border-b-2 border-solid border-transparent border-teal">
                <Link to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">
                      60
                    </div>
                  </Link>
                </li>           
              </ul>
            </div>
            <div className="w-full lg:w-1/2 z-10 text-class class-1 shadow">
            <div className="bg-white px-4 border-b-2 border-solid border-transparent border-teal">
              <p className="text-email">janedoe@gmail.com</p>
              <p> New York</p>
              <p>
                <i className="fab fa-facebook fa-2x"></i>
                <i className="fab fa-youtube fa-2x"></i>
                <i className="fab fa-linkedin fa-2x"></i>
                <i className="fab fa-instagram fa-2x"></i>
              </p>
            </div> 
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row mt-4 text-sm leading-normal">
          <div className=" lg:w-1/4 pl-4 lg:pl-0 pr-6 mt-4 mb-4 user-profile">
            <h1>
              <Link to="#"
                className="text-black font-bold no-underline hover:underline">
                Tailwind CSS
              </Link>
            </h1>
            <div className="mb-4">
              <Link to="#"
              className="text-grey-darker no-underline hover:underline">
                @tailwindcss
              </Link>
            </div>
            <div className="mb-4">
              <h4 className="font-bold">Description</h4>
              <p>A utility-first CSS framework for rapid UI development.</p>
            </div>
            <div className="mb-2">
              <i className="fa fa-link fa-lg text-grey-darker mr-1"></i>
              <Link to="#"         
                className="text-teal no-underline hover:underline">
                tailwindcss.com
          
              </Link>
            </div>
            <div className="mb-4">
              <i className="fa fa-calendar fa-lg text-grey-darker mr-1"></i>
              <Link to="#"
         className="text-teal no-underline hover:underline">
                Joined August 2017
          
              </Link>
            </div>

            <div className="mb-4">
              <button className="bg-teal hover:bg-teal-dark text-white font-medium py-2 px-4 rounded-full w-full h-10">
                Tweet to Tailwind CSS
              </button>
            </div>
          </div>

          <div className="mb-12">

            <h1 className="text-center text-white w-full"><br/></h1>
            <div className="mx-auto px-4 w-full">
              <div className="relative m-0 flex bg-white">
                <div className="flex-no-shrink">
                  {/* <img
                    alt=""
                    class="w-64 h-64 block mx-auto"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                  /> */}
                  <div className="w-1/2 h-12 player-wrapper video-test">
                    <ReactPlayer className="react-player w-full h-64 relative mx-auto" url="https://www.youtube.com/watch?v=fEErySYqItI" controls={true} playing={false} loop={true} width="250%" class=" w-full h-64 relative mx-auto"/>
                  </div>
                </div>
                <div className="flex-1 card-block relative">
                  <div className="pl-24 pb-32 pt-4 pr-12 text-justify">
                    <h4 className="font-medium text-2xl mb-3">Mike Pompeo admits he took part in Trump’s phone call with Ukraine leader</h4>
                    <p className="leading-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>                 
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-center text-white w-full"><br/></h1>
            <div className="mx-auto px-4 w-full">
              <div className="relative flex bg-white">
                <div className="flex-no-shrink">
                  {/* <img
                    alt=""
                    class="w-64 h-64 block mx-auto"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                  /> */}
                  <div className="w-1/2 h-12 player-wrapper video-test">
                    <ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=fEErySYqItI" controls={true} playing={false} loop={true} width="250%" class="w-full h-64 relative mx-auto"/>
                  </div>
                </div>
                <div className="flex-1 card-block relative">
                  <div className="pl-24 pb-32 pt-4 pr-12 text-justify">
                    <h4 className="font-medium text-2xl mb-3">Mike Pompeo admits he took part in Trump’s phone call with Ukraine leader</h4>
                    <p className="leading-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                 
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-center text-white w-full"><br/></h1>
            <div className="mx-auto px-4 w-full">
              <div className="relative flex bg-white">
                <div className="flex-no-shrink img-test">
                  <img
                    alt=""
                    className="h-64 block mx-auto"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                    // width="30%"
                  />
                  {/* <div className="w-1/2 h-12 player-wrapper">
                    <ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=fEErySYqItI" controls={true} playing={false} loop={true} width="250%" className="w-full h-64 relative mx-auto"/>
                  </div> */}
                </div>
                <div className="flex-1 card-block relative text-plus">
                  <div className="pb-12 pt-12 pr-12 text-justify">
                    <h4 className="font-medium text-2xl mb-3">Mike Pompeo admits he took part in Trump’s phone call with Ukraine leader</h4>
                    <p className="leading-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
