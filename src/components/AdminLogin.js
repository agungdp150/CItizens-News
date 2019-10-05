import React, { Component } from 'react'

import Logo2 from '../assets/img/Logo2.png'

import '../assets/scss/AdminLogin.scss'

class AdminLogin extends Component {
  render() {
    return (
      <div>
        <div className="hero-admin">
          <div className="color-1">
          <div class="flex justify-center">
            <div class="w-full max-w-xs">
              <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">
                <div className="flex justify-center pb-8">
                 <img src={Logo2} alt="Logo" width="150px"/>
                </div>
                <div class="mb-4">
                  <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Username
                  </label>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div class="mb-6">
                  <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                  <p class="text-red text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-center">
                  <button class="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type="button">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default AdminLogin
