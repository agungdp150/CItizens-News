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
              <li>
                <Link to="/">
                <i className="fas fa-user-circle fa-2x"></i>
                <span className="nav-text">Admin</span>
                </Link>
              </li>
              <li className="has-subnav">
                <Link to="/admindashboardnews">
                <i className="far fa-newspaper fa-2x"></i>
                <span className="nav-text">All News</span>
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
