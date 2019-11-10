import React, { Component } from "react";
import axios from "axios";
import setToken from '../../helpers/setToken';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getNews } from "../../store/actions/getnewsAction";

import "../../assets/scss/AdminNewsComponent.scss";

class AdminNewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
    };
  }

  componentDidMount() {
    if(localStorage.token){
      setToken(localStorage.token)
    }
    this.props.getNews();
  }

  

  handlePublish = async (id) =>{
    console.log("oke")
    
    const {token} = this.state

    try{
      const response = await axios.put(
        `https://app-citizenjournalism.herokuapp.com/api/v1/news/status/${id}`,{
          Authorization : `Bearer ${token}`,
          status : "Approved"
        }
      );
      console.log(response.data.result);
      this.props.getNews(this.props.news)
    } catch(error){
      console.log(error.response)
    }
  }

  handleReject = async (id) =>{
    console.log("oke")
    
    const {token} = this.state

    try{
      const response = await axios.put(
        `https://app-citizenjournalism.herokuapp.com/api/v1/news/status/${id}`,{
          Authorization : `Bearer ${token}`,
          status : "Rejected"
        }
      );
      console.log(response.data.result);
      this.props.getNews(this.props.news)
    } catch(error){}
  }

  render() {
    const dataAdmin = this.props.news.map(allnews => {
      // console.log(allnews.status)
      if (allnews.status === "Pending") {
        return (
          <tr className="hover:bg-grey-lighter" key={allnews._id}>
            <td className="py-4 px-4 border-b border-grey-light text-sm font-bold">
              {allnews.user.username}
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-sm">
              {allnews.title}
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-sm font-semibold text-center">
              {allnews.category}
            </td>
            <td className="py-4 px-6 border-b border-grey-light text-sm">
              <h4 className="bg-transparent text-yellow-500 font-semibold py-1 px-2 border border-yellow-500 rounded text-sm">
                {allnews.status}
              </h4>
            </td>
            <td className="py-4 text-center border-b border-grey-light text-sm">
              {allnews.date.substring(0, 10)}
            </td>
            <td className="flex py-6 px-6 border-b border-grey-light">
              <Link to={`/detail/${allnews._id}`} target="_blank" >
              <button 
                className="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-blue-600 hover:bg-blue-700 text-white"
                >
                View
              </button>
              </Link>
              <button 
                className="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-green-600 hover:bg-green-700 mx-2 text-white"
                onClick={() => this.handlePublish(allnews._id)}
                >
                Publish
              </button>
              <button 
              className="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-red-600 hover:bg-red-700 text-white"
              onClick={() => this.handleReject(allnews._id)}
              >
                Reject
              </button>
            </td>
          </tr>
        );
      } else {
        return null;
      }
    });

    const amountData = this.props.news.map(total => {
      // console.log(total.length)
      return total.length;
    });

    // console.log(amountData)
    let i = 0;
    this.props.news.map(pendingTotal => {
      // console.log(pendingTotal.status)
      if (pendingTotal.status === "Pending") {
        return(
        i++
        )
      } else {
        return( 
          null
        )
      }
    });

    // let arrSum = arr => arr.reduce((a,b) => a + b, 0)

    return (
      <div className="bg-gray-800 h-screen w-full">
        <div className="w-4/5 mx-auto">
          <div className="text-5xl font-medium">
            <h1 className="font-bold py-8 pl-2 text-white text-5xl">Citizens News</h1>
            <div>
              <ul className="list-reset flex bg-transparent ">
                <li className="py-3 px-4 text-center border-b-2 border-solid border-transparent border-teal bg-gray-100 mx-2 rounded">
                  <Link
                    to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1 text-blue-500">
                      Total News
                    </div>
                    <div className="text-sm text-blue-500 tracking-tight text-teal">
                      {amountData.length}
                    </div>
                  </Link>
                </li>
                <li className="py-3 px-4 text-center border-b-2 border-solid border-transparent border-teal bg-gray-100 rounded">
                  <Link
                    to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1 text-yellow-500">
                      Total Pending
                    </div>
                    <div className="text-sm text-yellow-500 tracking-tight text-teal">{i}</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-md rounded mt-6 pb-6 bg-gray-100 scroll-admin">
            <table className="text-left w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-center">
                    Author
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-center">
                    Title
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-center">
                    Categories
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-center">
                    Status
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-center">
                    Date
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{dataAdmin}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.getnews1.news
  };
};

export default connect(
  mapStateToProps,
  { getNews }
)(withRouter(AdminNewsComponent));
