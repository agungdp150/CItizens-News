import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo2 from "../../assets/img/Logo2.png";

import "../../assets/scss/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="fo-color ">
          <div className="container mx-auto  px-1">
            <div className="w-full flex flex-col md:flex-row py-6">
              <div className="flex-1 mb-6">
                <Link to="/">
                  <img
                    src={Logo2}
                    alt="Logo"
                    className="fill-current inline"
                    width="170px"
                  />
                </Link>
              </div>
              <div className="flex-1 fo-list">
                <h4 className="uppercase md:mb-6 font-medium text-sm">Company</h4>
                <ul className="list-reset mb-6 fo-link">
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link to="/about">
                      <p className="no-underline font-normal text-sm">About</p>
                    </Link>
                  </li>
                  <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <Link to="about">
                      <p className="no-underline font-normal text-sm">Contact</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 fo-social">
                <h4 className="uppercase md:mb-6 font-medium text-sm">Social</h4>
                <p>
                  <Link to="#">
                    <i className="fab fa-facebook" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-youtube" />
                  </Link>
                </p>
                <p></p>
              </div>
            </div>
            <hr className="border-b m-0" />
            <p className="text-center text-xs py-2">
              {" "}
              &copy; 2019 citizens.com All rights reserved
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
