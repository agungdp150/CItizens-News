import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Not from '../assets/img/shot_2x.jpg';

class NotFound extends Component {
  render() {
    return (
      <div className="text-center" style={{backgroundColor:"#EFF5F3"}}>
        <Link to="/">
        <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-1 px-4 border border-black hover:border-transparent rounded">Go Home</button>
        </Link>
        <div className="flex justify-center">
        <img src={Not} alt="Not-Found" className="h-full"/>
        </div>
      </div>
    )
  }
}

export default NotFound
