import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../assets/scss/AdminUsersComponent.scss';

class AdminUsersComponent extends Component {
  render() {
    return (
      <div className="">
        <div class="w-4/5 mx-auto">
          <div className="text-5xl font-medium">
            <h1>Citizens</h1>
            <div>
            <ul className="list-reset flex bg-white">
                <li className="py-3 border-b-2 border-solid border-transparent border-teal">
                  <Link to="#"
                  className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">
                      60
                    </div>
                  </Link>
                </li> 
                <li className="py-3 px-4 border-b-2 border-solid border-transparent border-teal">
                <Link to="#"
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">
                      60
                    </div>
             
                  </Link>
                </li> 
                <li className="py-3 border-b-2 border-solid border-transparent border-teal">
                <Link to="#"
               
                    className="text-grey-darker no-underline hover:no-underline">
                    <div className="text-sm tracking-tight mb-1">
                      Contribution
                    </div>
                    <div className="text-sm tracking-tight text-teal">
                      60
                    </div>
                 
                  </Link>
                </li>           
              </ul>
            </div>
          </div>
          <div class="bg-white shadow-md rounded my-6 bg-gray-100">
            <table class="text-left w-full border-collapse"> 
              <thead>
                <tr>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">ID
                  </th>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">City
                  </th>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Contribution</th>
                  <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">1</td>
                  <td class="py-4 px-6 border-b border-grey-light">New York</td>
                  <td class="py-4 px-16 border-b border-grey-light">99</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                     <Link to="#" class="text-grey-lighter font-bold py-1 px-3 mr-2 rounded text-xs bg-blue-500 hover:bg-blue-600 ">View</Link>
                    <button class="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-red-500 hover:bg-red-600">Delete</button>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">2</td>
                  <td class="py-4 px-6 border-b border-grey-light">New York</td>
                  <td class="py-4 px-16 border-b border-grey-light">99</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                     <Link to="#" class="text-grey-lighter font-bold py-1 px-3 mr-2 rounded text-xs bg-blue-500 hover:bg-blue-600 ">View</Link>
                    <button class="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-red-500 hover:bg-red-600">Delete</button>
                  </td>               
                </tr>
                <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">3</td>
                  <td class="py-4 px-6 border-b border-grey-light">New York</td>
                  <td class="py-4 px-16 border-b border-grey-light">99</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                     <Link to="#" class="text-grey-lighter font-bold py-1 px-3 mr-2 rounded text-xs bg-blue-500 hover:bg-blue-600 ">View</Link>
                    <button class="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-red-500 hover:bg-red-600">Delete</button>
                  </td>                
                </tr>
                <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">4</td>
                  <td class="py-4 px-6 border-b border-grey-light">New York</td>
                  <td class="py-4 px-16 border-b border-grey-light">99</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                     <Link to="#" class="text-grey-lighter font-bold py-1 px-3 mr-2 rounded text-xs bg-blue-500 hover:bg-blue-600 ">View</Link>
                    <button class="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-red-500 hover:bg-red-600">Delete</button>
                  </td>                  
                </tr>
                <tr class="hover:bg-grey-lighter">
                <td class="py-4 px-6 border-b border-grey-light">5</td>
                  <td class="py-4 px-6 border-b border-grey-light">New York</td>
                  <td class="py-4 px-16 border-b border-grey-light">99</td>
                  <td class="py-4 px-6 border-b border-grey-light">
                     <Link to="#" class="text-grey-lighter font-bold py-1 px-3 mr-2 rounded text-xs bg-blue-500 hover:bg-blue-600 ">View</Link>
                    <button class="text-grey-lighter font-bold py-1 px-2 rounded text-xs bg-red-500 hover:bg-red-600">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminUsersComponent;
