import React, { Component } from 'react';
import '../assets/scss/Categories.scss'
import {Link} from 'react-router-dom';

class Categories extends Component {
  render() {
    return (
      <div className="a">
      <div className="flex justify-center text-categories">
        <h1>CITIZENS Categories</h1>
      </div>
      <div class="container mx-auto p-8">
       <div class="flex flex-row flex-wrap -mx-2">       
        <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <div class="relative bg-white rounded border">
            <picture class="block bg-gray-200 border-b">
              <Link to="#">
              <img class="block" src="https://images.pexels.com/photos/2826351/pexels-photo-2826351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card 1"/>
              </Link>
            </picture>
            <div class="p-4">
              <h3 class="text-lg font-bold">
                <Link to="#">
                <p class="stretched-link" href="#" title="Card 1">
                  Nature
                </p>
                </Link>
              </h3>
            </div>
          </div>
        </div>
                    
        <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <div class="relative bg-white rounded border">
            <picture class="block bg-gray-200 border-b">
              <Link to="#">
              <img class="block" src="https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card 2"/>
              </Link>
            </picture>
            <div class="p-4">
              <h3 class="text-lg font-bold">
              <Link to="#">
                <p class="stretched-link" href="#" title="Card 1">
                  Tech
                </p>
              </Link>
              </h3>
            </div>
          </div>
        </div>
                      
        <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <div class="relative bg-white rounded border">
            <picture class="block bg-gray-200 border-b">
              <Link to="#">
              <img class="block" src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card 3"/>
              </Link>
            </picture>
            <div class="p-4">
              <h3 class="text-lg font-bold">
              <Link to="#">
                <p class="stretched-link" href="#" title="Card 1">
                  Fashion
                </p>
              </Link>
              </h3>
            </div>
          </div>
        </div>
                    
        <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <div class="relative bg-white rounded border">
            <picture class="block bg-gray-200 border-b">
              <Link to="#">
               <img class="block" src="https://images.pexels.com/photos/2960888/pexels-photo-2960888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card 4"/>
              </Link>
            </picture>
            <div class="p-4">
              <h3 class="text-lg font-bold">
              <Link to="#">
                <p class="stretched-link" href="#" title="Card 1">
                  Politics
                </p>
              </Link>
              </h3>
            </div>
          </div>
        </div>
                    
        <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <div class="relative bg-white rounded border">
            <picture class="block bg-gray-200 border-b">
              <Link to="#">
               <img class="block" src="https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card 5"/>
              </Link>
            </picture>
            <div class="p-4">
              <h3 class="text-lg font-bold">
              <Link to="#">
                <p class="stretched-link" href="#" title="Card 1">
                  Creative
                </p>
              </Link>
              </h3>
            </div>
          </div>
        </div>
                    
        <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
          <div class="relative bg-white rounded border">
            <picture class="block bg-gray-200 border-b">
              <Link to="#">
                <img class="block" src="https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card 6"/>
              </Link>
            </picture>
            <div class="p-4">
              <h3 class="text-lg font-bold">
              <Link to="#">
                <p class="stretched-link" href="#" title="Card 1">
                  Others
                </p>
              </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      </div>
    )
  }
}

export default Categories
