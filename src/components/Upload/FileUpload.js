import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { newsPostAction } from "../../store/actions/createnewsAction";

import UploadIllustration from "../../assets/img/2888068-removebg-preview.png";

import "../../assets/scss/FileUpload.scss";

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      category: "",
      date : "",
      media: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  mediaHandle = e => {
    this.setState({
      media: e.target.files[0]
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append(
      "image",
      this.state.media,
      this.state.media.name,
      this.state.media.type
    );
    // console.log(fd)
    const newsInput = {
      newsDesc: {
        title: this.state.title,
        description: this.state.description,
        category: this.state.category,
        date : this.state.date
      },
      image: fd
    };

    // console.log(newsInput)
    // console.log (fd)

    this.props.newsPostAction(newsInput);
    alert("Wow, you have add contribution :)")
    this.props.history.push("/");
  };

  render() {
    const { title, description, category, date } = this.state;

    return (
      <div className="bg-color-hot">
        <div className="text-center">
          <h1 className="pt-6">File Upload</h1>
          <hr className="container mx-auto w-48" />
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
                  autoComplete="off"
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
                <select
                  onChange={this.handleChange}
                  name="category"
                  value={category}>
                  <option defaultValue>News</option>
                  <option defaultValue>Lifestyle</option>
                  <option defaultValue>Food</option>
                  <option defaultValue>Tech</option>
                  <option defaultValue>Education</option>
                  <option defaultValue>Entertainment</option>
                  <option defaultValue>Video</option>
                </select>
                <span className="focus-border"></span>
              </div>

              <div className="col-3">
              <label>Date</label>
                <br />
                <input
                  type="date"
                  min="1945-01-01"
                  max="2020-01-01"
                  className="unstyled"
                  name="date"
                  value={date}
                  onChange={this.handleChange}
                />
   
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
                <div>
                  <img src={UploadIllustration} alt="upload-illustration" width="300px" />
                  <input type="file" onChange={this.mediaHandle} />
                </div>
              </div>

              <div className="flex justify-center">
              <button
                className="hover:bg-gray-800 text-white font-bold py-1 px-8  border rounded col-3 my-12"
                type="submit">
                Upload Files
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataNews: state.createnews1.dataNews
  };
};

export default connect(
  mapStateToProps,
  { newsPostAction }
)(withRouter(FileUpload));
