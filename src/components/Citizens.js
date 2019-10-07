import React, { Component } from 'react';
import ReactPlayer from 'react-player'; 

import '../assets/scss/Citizens.scss'

export class Citizens extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-wrap c-grid mx-auto">
        <div className="w-1/2 h-12 c-grid1">
          <h1 className="font-normal text-4xl mb-2">CITIZENS</h1>
          <p className="font-light text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className="w-1/2 h-12 player-wrapper">
         <ReactPlayer className="react-player" url="https://www.youtube.com/watch?v=fEErySYqItI" controls={true} playing={false} loop={true} width="80%"/>

        </div>
      </div>
      </div>
    )
  }
}

export default Citizens
