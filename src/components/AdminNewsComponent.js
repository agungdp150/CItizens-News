import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import '../assets/scss/AdminNewsComponent.scss'


class AdminNewsComponent extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div id="app" className="p-4 sm:p-6 flex-1">
          <div className="pl-6 mx-auto">
          <h1>CITIZEN NEWS</h1>
          </div>
          <div className="mx-auto w-full shadow-lg dash-video">
              <div className="relative flex bg-white">
                <div className="flex-no-shrink">
                  <div className="w-1/2 h-12 player-wrapper video-test">
                    <ReactPlayer url="https://www.youtube.com/watch?v=fEErySYqItI" controls={true} playing={false} loop={true} width="270%" className="w-full h-64 relative mx-auto"/>
                  </div>
                </div>
                <div className="flex-1 flex-wrap card-block relative">
                  <div className="pl-32 pt-4 pr-12 text-justify">
                    <h4 className="font-medium text-2xl mb-3">Mike Pompeo admits he took part in Trump’s phone call with Ukraine leader</h4>
                    <hr className="border-solid border-1 border-gray-600"/> 
                    <br/>
                    <p className="leading-norma text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="text-auth">
                      <p>author : <span>jhonsnow123</span></p>
                    </div>
                    <div className="selection-text">
                    <p>status : <span>pending</span> <span className="span-2">published</span> <span className="span-3">rejected</span></p>
                    <form className="select-style">
                    <select >
                      <option selected disabled>Choose</option>
                      <option defaultValue="publish">published</option>
                      <option defaultValue="rejected">reject</option>
                    </select>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              
          <div className="mx-auto w-full shadow dash-video">
              <div className="relative flex bg-white">
                <div className="flex-no-shrink">
                  <div className="w-1/2 h-12 player-wrapper video-test">
                    <ReactPlayer url="https://www.youtube.com/watch?v=fEErySYqItI" controls={true} playing={false} loop={true} width="270%" className="w-full h-64 relative mx-auto"/>
                  </div>
                </div>
                <div className="flex-1 card-block relative">
                  <div className="pl-32 pt-4 pr-12 text-justify">
                    <h4 className="font-medium text-2xl mb-3">Mike Pompeo admits he took part in Trump’s phone call with Ukraine leader</h4>
                    <hr className="border-solid border-1 border-gray-600"/> 
                    <br/>
                    <p className="leading-norma text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="text-auth">
                      <p>author : <span>jhonsnow123</span></p>
                    </div>
                    <div className="selection-text">
                    <p>status : <span>pending</span> <span className="span-2">published</span> <span className="span-3">rejected</span></p>
                    <form className="select-style">
                    <select >
                      <option selected disabled>Choose</option>
                      <option defaultValue="publish">published</option>
                      <option defaultValue="rejected">reject</option>
                    </select>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto px-4 w-full shadow dash-image">
              <div className="relative flex bg-white">
                <div className="flex-no-shrink img-test">
                  <img
                    alt=""
                    className="block mx-auto"
                    height="290px"
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                  />
                </div>
                <div className="flex-1 card-block relative text-plus">
                  <div className="pb-12 pt-12 pl-8 pr-12 text-justify">
                    <h4 className="font-medium text-2xl mb-3">Mike Pompeo admits he took part in Trump’s phone call with Ukraine leader</h4>
                    <hr className="border-solid border-1 border-gray-600"/> 
                    <br/>
                    <p className="leading-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                        <div className="text-auth">
                      <p>author : <span>jhonsnow123</span></p>
                    </div>
                    <div className="selection-text">
                    <p>status : <span>pending</span> <span className="span-2">published</span> <span className="span-3">rejected</span></p>
                    <form className="select-style">
                    <select >
                      <option selected disabled>Choose</option>
                      <option defaultValue="publish">published</option>
                      <option defaultValue="rejected">reject</option>
                    </select>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
            </div> 

        </div>
      </div>
    )
  }
}

export default AdminNewsComponent
