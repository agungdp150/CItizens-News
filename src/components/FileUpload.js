import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {newsPostAction} from '../store/actions/createnewsAction';

import UploadIllustration from "../assets/img/2888068-removebg-preview.png";

import "../assets/scss/FileUpload.scss";


class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state ={
      title : "",
      description : "",
      category : "",
      media : null
    }
  }


  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  mediaHandle = e => {
    this.setState({
      media : console.log (e.target.files),
      name  : console.log (e.target.files[0].name),
      type : console.log (e.target.files[0].type)
    })
  }

  
  


  handleSubmit = async (e) =>{
    e.preventDefault();

    const newsInput = {
      newsDesc : {
      title : this.state.title,
      description : this.state.description,
      category : this.state.category,
    },
      image : this.state.media
  }

    
    console.log(newsInput)

    // this.props.newsPostAction(newsInput);
 
  }



  
  render() {

    const {title, description, category} = this.state;

    return (
      <div>
        <div className="text-center">
          <h1>File Upload</h1>
          <hr className="container mx-auto" />
        </div>
        <div className="flex flex-wrap overflow-hidden">


          <div className="w-full overflow-hidden md:w-1/2 lg:w-screen xl:w-1/2 container mx-auto descript-upload">
            <form onSubmit={this.handleSubmit}>
              <div className="col-3">
                <label>Title</label>
                <br />
                <input 
                  className="effect-1" 
                  type="text" 
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  />
              </div>

              <div className="col-3">
                <label>Category</label>
                <br />
              </div>
              <div className="col-3">
                <select onChange={this.handleChange} name="category" value={category}>
                  <option 
                    defaultValue
                  >News
                  </option>
                  <option 
                    defaultValue
                  >Lifestyle
                  </option>
                  <option 
                    defaultValue
                  >Food
                  </option>
                  <option 
                    defaultValue
                  >Tech
                  </option>
                  <option 
                    defaultValue
                  >Education
                  </option>
                  <option 
                    defaultValue
                  >Entertainment
                  </option>
                </select>
                <span className="focus-border"></span>
              </div>
             
              <div className="col-3">
                <label>Description</label>
                <br />
                <textarea 
                  className="effect-1" 
                  type="text" 
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  />
              </div>

              <div className="flex flex-none justify-center files-upload">
              <form>
                <img src={UploadIllustration} alt="hahhah" width="300px" />
                <input 
                  type="file"
                  onChange={this.mediaHandle}
                />
              </form>
            </div>

              <button 
              className="hover:bg-gray-800 text-white font-bold py-2 px-4 border rounded col-3"
              type="submit"
              >
                Upload Files
              </button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataNews : state.createnews1.dataNews
  }
}


export default connect(
  mapStateToProps,
  {newsPostAction}
) (withRouter(FileUpload));
