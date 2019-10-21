import React, { Component } from "react";
import {Link} from 'react-router-dom';

import "../assets/scss/NavbarAdmin.scss";

class NavbarAdmin extends Component {
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
                <Link to="/admindashboardnews">
                <i className="fas fa-clipboard-check fa-2x"></i>
                <span className="nav-text">Publish</span>
                </Link>
              </li>
              <li className="has-subnav">
                <Link to="/admindashboardnews">
                <i className="fas fa-times-circle fa-2x"></i>
                <span className="nav-text">Reject</span>
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
              <Link to="/adminlogin">
                <i className="fa fa-power-off fa-2x"></i>
                <span className="nav-text">Logout</span>
              </Link>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default NavbarAdmin;
