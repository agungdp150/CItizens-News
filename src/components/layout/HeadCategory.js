import React, { Component } from "react";
import axios from "axios"
import { withRouter, Link } from "react-router-dom";
import Logo2 from "../../assets/img/Logo2.png";
import { connect } from "react-redux";

import "../../assets/scss/HeadCategory.scss";

class HeadCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      status: "Approved",
      newsSearch : []
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

  handleSearch = async (e) => {
    // e.preventDefault();

    console.log("oke")

    const {query, status} = this.state
    try {
      await axios.get(
        `https://app-citizenjournalism.herokuapp.com/api/v1/news/find-news?status=${status}&title=${query}`
      )
      .then(response => {
        console.log(response.data)
        // this.props.history.push(`/search/${query}`)
        this.setState({
          query : ""
        })
      })
    } catch(error) {
      console.log(error.response.data)
    }
  };

  // componentDidMount() {
  //   this.handleSearch()
  // }


  render() {
    // console.log(this.props.token)
    // const {newsSearch} = this.state

    return (
      <div>
        <header className='lg:px-16 px-8 py-4 md:py-0 top-0 nav-color shadow'>
          <div className='container mx-auto flex flex-wrap items-center'>
            <div className='flex-1 flex items-center'>
              <ul className='flex mr-8'>
          
                {this.props.isAuthenticated ? 
                (
                  <>
                <li className='mx-2 text-xs'>
                <div className="flex flex-col">
                  <div>
                  <div className='flex justify-center'>
                    <img
                      src="https://res.cloudinary.com/limkaleb/image/upload/v1571027553/citizen-journalism/ckw7rq5xhbfwc7bibwud.jpg"
                      alt='Some'
                      className='w-10 h-10 flex self-center rounded-full shadow-lg object-cover'
                    />
                  </div>
                  </div>
                </div>
                </li>

                <li className='mx-2 text-xs menu-down'>
                <div className="dropdown">
                  <div className="projects">
                    <button><i class="fas fa-sort-down"></i></button>
                    <ul className="shadow">
                       <li className="border-b py-3 font-bold">
                        <div>
                          <h1 className="text-center">Agung Dwi Putra</h1>
                        </div>
                      </li>
                      <li><Link to="/user/5da22dd662a5c90017390f6a">Profile</Link></li>
                      <li className="border-b"><Link to="#">My News</Link></li>
                      <li><Link to="#">Upload News</Link></li>
                      <li><button className="bg-blue-500 text-blue-500 font-bold" onClick={this.removeToken}>Log Out</button></li>
                    </ul>
                  </div>
                  </div>
                </li>
                </>
                ) 
                : 
                (
                  <>
                  <li className='mx-2 text-xs'>
                  <div>
                  <Link to="/signin">
                    <button className='py-1 px-2 font-semibold text-blue-500'>
                      Login
                    </button>
                    </Link>
                  </div>
                </li>
                <li className='mx-2 text-xs'>
                  <div>
                    <Link to="/signup">
                    <button className='bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded'>
                      Sign Up
                    </button>
                    </Link>
                  </div>
                </li>
                </>
                )}

                
                
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
                        to={`/category/News`}
                        target="_blank"
                        className='md:px-4 md:py-4 px-0 block text-base get-login'>
                        News
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to={`/category/Education`}
                        target="_blank"
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Education
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to={`/category/Tech`}
                        target="_blank"
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Tech
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to={`/category/Food`}
                        target="_blank"
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Food
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to={`/category/Lifestyle`}
                        target="_blank"
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Lifestyle
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to={`/category/Entertainment`}
                        target="_blank"
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Entertainment
                      </Link>
                    </li>

                    <li className='action'>
                      <Link
                        to={`/category/Video`}
                        target="_blank"
                        className='md:px-4 md:py-4 px-0 block text-sm text-base get-login'>
                        Video
                      </Link>
                    </li>
                  </div>

                  <li className='md:px-2 py-4 px-0 block search-bar-style'>
                    <form id='demo-2' onSubmit={this.handleSearch}>
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

export default connect(
  mapSTateToProps,
  )(withRouter(HeadCategory));
