import React, { Component } from "react";
// import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import Logo2 from "../../assets/img/Logo2.png";
import { connect } from "react-redux";

import "../../assets/scss/HeadCategory.scss";

class HeadCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      status: "Approved"
    };
  }

  removeToken = async () => {
    await localStorage.clear();
    window.location.reload(true);
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearch = async () => {
    // const {query, status} = this.state
    // try {
    //   const response = await axios.get(
    //     `https://app-citizenjournalism.herokuapp.com/api/v1/news/search?title=${query}`,
    //   )
    // }
  };

  render() {
    // console.log(this.props.token)
    return (
      <div>
        <header className='lg:px-16 px-8 py-4 md:py-0 top-0 nav-color'>
          <div className='container mx-auto flex flex-wrap items-center'>
            <div className='flex-1 flex items-center'>
              <ul className='flex mr-8'>
                <li className='mx-2 text-xs'>
                  <div>
                    <button className='py-1 px-2 font-semibold text-blue-500'>
                      Login
                    </button>
                  </div>
                </li>
                <li className='mx-2 text-xs'>
                  <div>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>
                      Sign Up
                    </button>
                  </div>
                </li>
              </ul>
              <Link to='/'>
                <img
                  src={Logo2}
                  alt='Logo-Citizens'
                  className='w-24 py-4 block'
                />
              </Link>
            </div>

            <label
              htmlFor='menu-toggle'
              className='pointer-cursor md:hidden block'>
              <svg
                className='fill-current text-gray-800 hover:text-gray-400'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'>
                <title>menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </label>
            <input className='hidden' type='checkbox' id='menu-toggle' />

            <div
              className='hidden md:flex md:items-center md:w-auto w-full text-black'
              id='menu'>
              <nav>
                <ul className='md:flex items-center justify-between text-base pt-4 md:pt-0'>
                  <div className='for-response font-medium'>
                    <li className='action'>
                      <Link
                        to='#1'
                        className='md:px-4 md:py-4 px-0 block text-base get-login'>
                        News
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to='#2'
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Education
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to='#3'
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Tech
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to='#6'
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Food
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to='#5'
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Lifestyle
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to='#7'
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Entertainment
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to='#9'
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Video
                      </Link>
                    </li>
                  </div>

                  <li className='md:px-2 py-4 px-0 block search-bar-style'>
                    <form id='demo-2'>
                      <input
                        type='search'
                        placeholder='Search'
                        name='query'
                        value={this.state.query}
                        onChange={this.handleChange}
                        autoComplete='off'
                        className='mx-4'
                      />
                    </form>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className='upload-btn text-blue-500'>
          <button>
            <i className='fas fa-plus-circle'></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapSTateToProps = state => {
  return {
    token: state.login1.token,
    isAuthenticated: state.login1.isAuthenticated
  };
};

export default connect(mapSTateToProps)(withRouter(HeadCategory));
