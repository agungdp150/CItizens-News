import React, { Component } from 'react';

import Medal from '../assets/img/medal.svg';
import Silver from '../assets/img/silver.svg';
// import Bronze from '../assets/img/bronze.svg';

import '../assets/scss/Contribution.scss'

class Contribution extends Component {
  render() {
    return (
      <div>
        <div className="w-1/3 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 shadow bg-gray-300 shadow style-top">
            <h2 className="text-center font-bold p-2 mb-6">TOP CONTRIBUTOR</h2>
            <h1 className="text-center font-bold py-4">#1</h1>
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Some"
                className="w-24 h-24 flex self-center rounded-full shadow-lg mb-6 object-cover"
              />
              <div className="medal-top">
                <img src={Medal} alt="medal" width="35%" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-xl">Jane Doe</h2>
              <h2 className="font-semibold text-base">90</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-1 text-sm px-4 rounded">
                View
              </button>
            </div>
            <div className="flex justify-around mt-4">
              <p>2</p>
              <p className="font-base ml-8">Jane Doe</p>
              <img src={Silver} alt="medal-silver" width="10%" />
            </div>
            <div className="flex justify-around mt-4">
              <p>3</p>
              <p className="font-base ml-8">Jane Doe</p>
              <img src={Silver} alt="medal-silver" width="10%" />
            </div>
            <div className="flex justify-around mt-4">
              <p>4</p>
              <p className="font-base ml-8">Jane Doe</p>
              <img src={Silver} alt="medal-silver" width="10%" />
            </div>
            <div className="flex justify-around mt-4">
              <p>5</p>
              <p className="font-base ml-8">Jane Doe</p>
              <img src={Silver} alt="medal-silver" width="10%" />
            </div>
          </div>

        
      </div>
    )
  }
}

export default Contribution
