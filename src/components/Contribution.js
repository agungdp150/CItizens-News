import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

import Medal from '../assets/img/medal.svg';
import Silver from '../assets/img/silver.svg';

import '../assets/scss/Contribution.scss';


class Contribution extends Component {
  constructor (props) {
    super (props);

    this.state = {
      listTopContributor : []
    }
  }

  getContribution = async() =>{
    await axios ({
      method : "GET",
      url : `https://app-citizenjournalism.herokuapp.com/api/v1/user/contributors`,
    })
    
    .then(response => {
      this.setState({listTopContributor : response.data.result})
    })
    
  }

  componentDidMount = async () => {
    await this.getContribution()
  }




  render() {
    // console.log(this.state.listTopContributor)
    const topContributor = this.state.listTopContributor

    let topFirst = topContributor[0]

    // console.log(topFirst && topFirst._id.image.secure_url)

    const cutTop = topContributor.slice(1);

    const topUser = cutTop.map((check, i) => {
      return (
        <div className="flex justify-between mt-6 px-8 border-b-2 border-gray-600 mx-8" key={check._id._id}>
           <p className="p-2">
            {i + 2}
          </p>
          <Link to={`/user/${check._id._id}`}>
          <p className="font-base ml-8 p-2">{check._id.fullname}</p>
          </Link>
          <img src={Silver} alt="medal-silver" width="10%" />
       </div>
      )
    })

    return (
      <div>
        <div className="w-1/3 overflow-hidden sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 bg-transparent style-top">
            <h2 className="text-center font-bold p-2 mb-4">TOP CONTRIBUTOR</h2>
            <h1 className="text-center font-bold py-4">#1</h1>
            <div className="flex justify-center">
              <img
                src={topFirst && topFirst._id.image.secure_url}
                alt="Some"
                className="w-24 h-24 flex self-center rounded-full shadow-lg mb-6 object-cover"
              />
              <div className="medal-top">
                <img src={Medal} alt="medal" width="35%" />
              </div>
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-xl">{topFirst && topFirst._id.fullname}</h2>
              <h2 className="font-semibold text-base">{topFirst && topFirst.totalNews}</h2>
              <Link to={`/user/${topFirst && topFirst._id._id}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-1 text-sm px-4 rounded">
                View
              </button>
              </Link>
            </div>
            {topUser}
          </div>

        
      </div>
    )
  }
}

export default Contribution
