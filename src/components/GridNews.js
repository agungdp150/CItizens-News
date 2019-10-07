import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../assets/scss/GridNews.scss'


export class GridNews extends Component {
  render() {
    return (
      <div>
        <main className="py-4">
          <h1 className="font-normal text-4xl mb-8 ml-6 ">CITIZENS NEWS</h1>
        <div className="px-4 grid-gap">
          <div className="block md:flex justify-between md:-mx-2">
            <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
              <div className="bg-white rounded-lg overflow-hidden shadow relative">
                <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1556910585-09baa3a3998e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="p-4 h-auto md:h-40 lg:h-48">
                  <Link to="">
                  <p className="block text-black hover:text-blue-600 font-normal mb-2 text-lg md:text-base lg:text-lg">
                    Woman standing under blue sky
                  </p>
                  </Link>
                  <div className="text-black text-sm font-light leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
                  </div>
                  <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">#something</p>
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">#sky</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
              <div className="bg-white rounded-lg overflow-hidden shadow relative">
                <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1569514149983-6b398454b8a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="p-4 h-auto md:h-40 lg:h-48">
                <Link to="">
                <p className="block text-black hover:text-blue-600 font-normal mb-2 text-lg md:text-base lg:text-lg">
                    Woman walking on the path way
                  </p>
                </Link>
                <div className="text-black text-sm font-light leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum sit quasi. Alias quasi officiis blanditiis!
                  </div>
                  <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">#pathway</p>
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">#woman</p>
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">#walkalone</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
              <div className="bg-white rounded-lg overflow-hidden shadow relative">
                <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1569527129264-02fbc2b075db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="p-4 h-auto md:h-40 lg:h-48">
                <Link to="">
                <p className="block text-black hover:text-blue-600 font-normal mb-2 text-lg md:text-base lg:text-lg">
                    walking through the forest
                  </p>
                </Link>
                <div className="text-black text-sm font-light leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo magni saepe cumque error quia quae sint ducimus, maiores doloremque.
                  </div>
                  <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">#forest</p>
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700">#walk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="block md:flex justify-between md:-mx-2">
            <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
              <div className="bg-white rounded-lg overflow-hidden shadow relative">
                <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1562887250-1ccd2e28a02c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="p-4 h-auto md:h-40 lg:h-48">
                <Link to="">
                <p className="block text-black hover:text-blue-600 font-normal mb-2 text-lg md:text-base lg:text-lg">
                    walking through the forest
                  </p>
                </Link>
                <div className="text-black text-sm font-light leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
                  </div>
                  <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#something</p>
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#sky</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
              <div className="bg-white rounded-lg overflow-hidden shadow relative">
                <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                <div className="p-4 h-auto md:h-40 lg:h-48">
                <Link to="">
                <p className="block text-black hover:text-blue-600 font-normal mb-2 text-lg md:text-base lg:text-lg">
                    walking through the forest
                  </p>
                </Link>
                <div className="text-black text-sm font-light leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aut quia alias ullam eveniet sunt! Ipsa, sunt. Inventore ipsum sit quasi. Alias quasi officiis blanditiis!
                  </div>
                  <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#pathway</p>
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#woman</p>
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walkalone</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
              <div className="bg-white rounded-lg overflow-hidden shadow relative">
                <img className="h-56 w-full object-cover object-center" src="https://images.unsplash.com/photo-1467238307002-480ffdd260f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                <div className="p-4 h-auto md:h-40 lg:h-48">
                <Link to="">
                <p className="block text-black hover:text-blue-600 font-normal mb-2 text-lg md:text-base lg:text-lg">
                    walking through the forest
                  </p>
                </Link>
                <div className="text-black text-sm font-light leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo magni saepe cumque error quia quae sint ducimus, maiores doloremque.
                  </div>
                  <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#forest</p>
                    <p className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" href="#">#walk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    )
  }
}

export default GridNews
