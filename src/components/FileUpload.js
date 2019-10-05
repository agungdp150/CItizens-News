import React, { Component } from 'react'

import UploadIllustration from '../assets/img/2888068-removebg-preview.png';

import '../assets/scss/FileUpload.scss'

class FileUpload extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <h1>File Upload</h1>
          <hr className="container mx-auto"/>
        </div>
        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 files-upload">
            <div className="flex flex-none justify-center">
            <form>
            <img 
            src={UploadIllustration} 
            alt="hahhah" 
            width="300px"/>
            <input 
              type="file"
            />
            </form>
            </div>
          </div>

          <div className="w-full overflow-hidden md:w-1/2 lg:w-1/2 xl:w-1/2 descript-upload">
            <form>

            <div className="col-3">
              <label>Title</label>
              <br/>
              <input 
              className="effect-1" 
              type="text" 
              />
              </div>

              <div className="col-3">
              <label>Region</label>
              <br/>
              <input 
              className="effect-1" 
              type="text" 
              />
              </div>
  
              <div className="col-3">
              <label>Category</label>
              <br/>
              </div>
              <div className="col-3">
              <select>
                <option selected disabled>Choose your category</option>
                <option defaultValue="sport">Sport</option>
                <option defaultValue="tech">Tech</option>
                <option defaultValue="creative">Creative</option>
                <option defaultValue="politics">Politics</option>
                <option defaultValue="fashion">Fashion</option>
                <option defaultValue="others">Others...</option>
              </select>
              <span className="focus-border"></span>
              </div>
              <div className="col-3">
              <label>Description</label>
              <br/>
              <textarea
                className="effect-1"
                type = "text"
                placeholder=""
              />
              </div>

              <button className="hover:bg-gray-800 text-white font-bold py-2 px-4 border rounded col-3">
                Upload Files
              </button>
            </form>
          </div>


        </div>
      </div>
    )
  }
}

export default FileUpload
