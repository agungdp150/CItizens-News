import React, { Component } from "react";
import {Link} from 'react-router-dom';

import "../assets/scss/NavbarAdmin.scss";

class NavbarAdmin extends Component {

  removeToken = async () => {
    await localStorage.clear();
    window.location.reload(true);
    this.props.history.push('/adminlogin');
  }  

  render() {
    return (
      <div>
        <div className="area"></div>
          <nav className="main-menu">
            <ul>
              <li className="has-subnav">
                <Link to="/admindashboardnews">
                <i className="far fa-newspaper fa-2x"></i>
                <span className="nav-text">Dashboard</span>
                </Link>
              </li>
              <li className="has-subnav">
                <Link to="/adminapproved">
                <i className="fas fa-clipboard-check fa-2x"></i>
                <span className="nav-text">News Publish</span>
                </Link>
              </li>
              <li className="has-subnav">
                <Link to="/adminrejected">
                <i className="fas fa-times-circle fa-2x"></i>
                <span className="nav-text">News Reject</span>
                </Link>
              </li>
              <li className="has-subnav">
                <Link to="/admindashboardusers">
                <i className="fas fa-users-cog fa-2x"></i>
                <span className="nav-text">All Users</span>
                </Link>
              </li>
              </ul>
              <ul className="logout">
              <li>
   
                <button onClick={this.removeToken} className="text-white">
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">Logout</span>
                </button>

              </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default NavbarAdmin;
