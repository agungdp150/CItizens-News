import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Pict3 from '../assets/img/59981.jpg';
import Logo2 from '../assets/img/Logo2.png';

import '../assets/scss/ForgotPass.scss';

class ForogotPass extends Component {
  render() {
    return (
      <div>
        <div id="app" className="flex">
          <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
            <div className="xl:max-w-lg xl:ml-auto text-center">
              <div className="flex justify-center content-forgot">
              <Link to="/">
              <img src={Logo2} alt="image1Alt" width="200px"/>
              </Link>
              </div>
              <img className="sm:mt-8 sm:h-auto sm:w-full sm:object-center lg:hidden" src={Pict3} alt="image2Alt"/>
              <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                Yo, forgot your password? dont't worry
                <br/>
                you can reset your password here
              </p>
              <div className="mt-4 sm:mt-6 form-forgot">
                <form>
                  <input
                    type="email"
                    placeholder="e.g citizens@citizens.com"
                    required
                  /> <br/>
                  <button className="btn-forgot">
                    Reset my password
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/2 lg:relative">
            <img className="absolute inset-0 h-screen w-full object-cover object-center" src={Pict3} alt="image2Alt"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ForogotPass;
