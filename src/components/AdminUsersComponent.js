import React, { Component } from "react";
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllUser } from "../store/actions/getalluserAction";
import setToken from '../helpers/setToken';

import "../assets/scss/AdminUsersComponent.scss";

class AdminUsersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token : '',

    };
  }

  componentDidMount() {
    if (localStorage.token){
      setToken(localStorage.token);
    }
    this.props.getAllUser();
    setInterval(this.props.getAllUser(),2000)
    // console.log(this.props.getAllUser())
  }

  handleDeletebyAdmin = async id=> {

    const {token} = this.state;
    console.log(token)

    try {
      const response = await axios.delete(
        `https://app-citizenjournalism.herokuapp.com/api/v1/user/delete/${id}`, 
        {
          Authorization : `Bearer ${token}`
        },
        console.log(token)
      );
      console.log(response.data)
      console.log("wakata")
    } catch (error) {
      console.log(error.response.data);
    }
  }
  

  render() {
    // console.log(this.props.allUser)

    const allUserData = this.props.allUser.map((users, index) => {
      console.log(users);
      return (
        <tr className="hover:bg-grey-lighter">
          <td className="py-4 px-6 border-b border-grey-light">{index + 1}</td>
          <td className="py-4 px-6 border-b border-grey-light">
            {users.fullname}
          </td>
          <td className="py-4 px-6 border-b border-grey-light">
            {users.username}
          </td>
          <td className="py-4 px-16 border-b border-grey-light">{users.news.length}</td>
          <td className="py-4 px-6 border-b border-grey-light">
            <Link
              to={`/user/${users._id}`}
              className="text-grey-lighter font-bold py-1 px-3 mr-2 rounded text-xs bg-blue-500 hover:bg-blue-600 ">
              View
            </Link>
            <button 
              className="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-red-500 hover:bg-red-600"
              onClick={() => this.handleDeletebyAdmin(users._id)}
              >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="">
        <div className="w-4/5 mx-auto">
          <div className="text-5xl font-medium">
            <h1>Citizens</h1>
            <div>
              <ul className="list-reset flex bg-white">
                <li className="py-3 border-b-2 border-solid border-transparent border-teal">
                  <Link
                    to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">60</div>
                  </Link>
                </li>
                <li className="py-3 px-4 border-b-2 border-solid border-transparent border-teal">
                  <Link
                    to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">60</div>
                  </Link>
                </li>
                <li className="py-3 border-b-2 border-solid border-transparent border-teal">
                  <Link
                    to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">60</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white shadow-md rounded my-6 bg-gray-100">
            <table className="text-left w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    NO
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Name
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Username
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Contribution
                  </th>
                  <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>{allUserData}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allUser: state.getalluser1.allUser
  };
};

export default connect(
  mapStateToProps,
  { getAllUser }
)(withRouter(AdminUsersComponent));
