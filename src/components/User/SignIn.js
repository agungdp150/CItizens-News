import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/loginAction";
import Lottie from "react-lottie";

import Logo3 from "../../assets/img/Logo3.png";

// Loading stuff
import Myloading from "../../assets/loading/2053-loading.json";

import "../../assets/scss/SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      message: "",
      loading: false,
      alertSuccess: false,
      alertError: true
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({
      loading: true,
      alertSuccess: true,
      alertError: false
    });
    const dataLogin = {
      username: this.state.username,
      password: this.state.password
    };
    // console.log(dataLogin);
    this.props.loginUser(dataLogin);
    await this.props.loginUser(dataLogin);
    const token = await localStorage.getItem("token");
    if (token) {
      alert(
        this.setState({
          alertSuccess: true
        })
      );
      this.props.history.push("/");
    } else {
      alert(
        this.setState({
          alertError: false
        })
      );
    }

    this.setState({
      loading: false,
      alertSuccess: true,
      alertError: false
    });
  };

  render() {
    const { username, password } = this.state;

    // console.log(this.props)

    const setLoattie = {
      loop: true,
      autoplay: true,
      animationData: Myloading,
      renderSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <div className='flex flex-wrap overflow-hidden'>
          <div className='w-full overflow-hidden lg:w-3/5 xl:w-3/5 sign-style h-screen pt-24 in-width'>
            <Link to='/'>
              <img src={Logo3} alt='Logo-Citizens' className='w-40 mx-auto' />
            </Link>
            <div>
              <form className="py-6" onSubmit={this.handleSubmit}>

               <div className='mb-6 w-2/3 mx-auto for-form'>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='username'
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    autoComplete="off"
                    placeholder="username"
                  />
                </div>
                <div className='mb-6 w-2/3 mx-auto for-form'>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='password'
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    placeholder="Password"
                  />
                </div>
                <div className='flex justify-center'>
                  {this.state.loading ? (
                    <Lottie options={setLoattie} width={50} />
                  ) : (
                    <button
                      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded text-xs'
                      type='submit'>
                      Sign In
                    </button>
                  )}
                </div>
              </form>
              <div className='text-center text-xs mt-4'>
                <p>
                  <Link to='/forgot'> Forgot password ? </Link>
                </p>
                <p className='mt-1'>
                  Don 't have any account yet?
                  <Link to='/signup' className='ml-1'>
                    register here...
                  </Link>
                </p>
              </div>
              <div className='flex justify-center'>
                {/* {this.state.alertError ? (
                    <div
                    class='flex items-center bg-green-500 text-white text-xs font-bold px-2 py-2 mx-16 mt-4 rounded'
                    role='alert'>
                    <p>Welcome Citizens</p>
                  </div>
                  ) : (
                    <div
                    class='flex items-center bg-red-500 text-white text-xs font-bold px-2 py-2 mx-16 mt-4 rounded'
                    role='alert'>
                    <p>Something went wrong, please check your username or password</p>
                  </div>
                  )} */}
              </div>
            </div>
          </div>

          <div className='w-full overflow-hidden lg:w-2/5 xl:w-2/5 bg-blue-300 style-in'>
            <div className='bg-gray-800 text-gray-200 mt-24 p-10 font-serif'>
              <h1 className='font-serif text-4xl'>
                Sign In with Citizens Account
              </h1>
              <p>
                Now you can login with your Google Account wiht these step :
              </p>
              <ul className='-ml-4'>
                <li>
                  <p>
                    <span>
                      <i className='fas fa-check-circle'></i>
                    </span>
                    Upload more news and become our Top Contributor.
                  </p>
                </li>
                <li>
                  <p>
                    <span>
                      <i className='fas fa-check-circle'></i>
                    </span>
                    Subscribe your favorite contributor, and give them
                    appreciation by leaving comment.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login1.isAuthenticated,
    login1: state.login1.token
  };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(withRouter(SignIn));
