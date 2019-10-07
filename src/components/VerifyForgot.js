import React, { Component } from 'react';
import{Link} from 'react-router-dom';

import MailBox from '../assets/img/103967-OM4NIH-225.png';

import '../assets/scss/VerifyForgot.scss'


class VerifyForgot extends Component {
  render() {
    return (
      <div>
        <div className="btn-back">
        <Link to="/">
          <button>
            <i className="fas fa-arrow-circle-left"/> Go Home
          </button>
        </Link>
        </div>
        <div className="flex flex-wrap overflow-hidden">
        <div className="w-full overflow-hidden">
          <div className="flex justify-center">
          <img src={MailBox} alt="mailbox" width="20%"/>
          </div>
          <div className="text-center">
            <p>
              We already send token to your e-mail.<br/>
              Please check your e-mail and write it bellow. 
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden input-forgot">
          <div className="flex justify-center">
          <form>
          <div className="col-3 input-effect">
        	<input className="effect-16" type="text" placeholder=""/>
            <label>Token Password</label>
            <span className="focus-border"></span>
          </div>
          <br/>
          <div className="col-3 input-effect">
            <input className="effect-16" type="text" placeholder=""/>
            <label>New Password</label>
            <span className="focus-border"></span>
          </div>
            <br/>
            <div className="col-3 input-effect">
              <input className="effect-16" type="text" placeholder=""/>
              <label>Confirm Password</label>
              <span className="focus-border"></span>
            </div>
            <br/>

            <div>
            <button class="bg-gray-800 hover:bg-gray-600 text-white   text-sm py-2 px-4 rounded">
              Button
            </button>
            </div>
          </form>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default VerifyForgot
