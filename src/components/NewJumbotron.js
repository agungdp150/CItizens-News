import React, { Component } from "react";
import {Link} from 'react-router-dom';

import "../assets/scss/NewJumbotron.scss";

class NewJumbotron extends Component {
  render() {
    return (
      <div className="bg-color-hot">
        <div>
          <div className="nj-background-color"></div>
          <div className="nj-jumbo">
            <img 
             src="https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=1200"
              alt="img"
            />
          </div>
          <div className="nj-text">
            <h1 className="font-bold font-mono text-4xl uppercase ">
            We present bold <br/>
            documentaries<br/> 
            for the public Good</h1>
            <Link to="/signin">
            <button className="font-bold first bg-blue-700 hover:bg-blue-800 ">
              JOIN US <span><i className="fas fa-arrow-right"/></span>
            </button>
            </Link>
            <Link to="/about">
            <button className="second bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-700 hover:border-transparent">
              ABOUT <span><i className="fas fa-arrow-right"/></span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NewJumbotron;
