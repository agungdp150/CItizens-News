import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { newsPostAction } from "../../store/actions/createnewsAction";
import ReactPlayer from "react-player";

import UploadIllustration from "../../assets/img/6323.png";

import "../../assets/scss/FileUpload.scss";

class FileUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      category: "",
      date: "",
      media: null,
      mediaShow: null
    };
    this.mediaHandle = this.mediaHandle.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  mediaHandle = e => {
    this.setState({
      mediaShow: URL.createObjectURL(e.target.files[0]),
      media: e.target.files[0]
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state.media);
    if (this.state.media === null) {
      alert("Opps you need input title, description, image, or video");
    } else {
      const fd = new FormData();
      fd.append(
        "image",
        this.state.media,
        this.state.media.name,
        this.state.media.type
      );
      const newsInput = {
        newsDesc: {
          title: this.state.title,
          description: this.state.description,
          category: this.state.category,
          date: this.state.date
        },
        image: fd
      };
      await this.props.newsPostAction(newsInput);
      alert("Wow, you have add contribution :)");
      this.props.history.push("/");
    }
  };

  render() {
    const { title, description, category, date } = this.state;

    let showVideo = this.state.media;

    return (
      <div className='bg-color-hot'>
        <div className='ab-width'>
          <form onSubmit={this.handleSubmit}>
            <div className='flex flex-wrap overflow-hidden'>
              <div className='w-full overflow-hidden md:w-full lg:w-2/5 xl:w-2/5 p-4'>
                {showVideo && showVideo.type === "video/mp4" ? (
                  <div className='image-upload border'>
                    <label htmlFor='img-input'>
                      <ReactPlayer
                        url={this.state.mediaShow}
                        width='100%'
                        height='250px'
                      />
                    </label>
                    <input
                      type='file'
                      onChange={this.mediaHandle}
                      id='img-input'
                      className='coba'
                    />
                  </div>
                ) : (
                  <div className='image-upload border'>
                    <label htmlFor='img-input'>
                      <img
                        className='object-cover cursor-pointer'
                        src={
                          this.state.mediaShow === null
                            ? UploadIllustration
                            : this.state.mediaShow
                        }
                        alt='your-pict'
                      />
                    </label>
                    <input
                      type='file'
                      onChange={this.mediaHandle}
                      id='img-input'
                      className='coba'
                    />
                  </div>
                )}
              </div>
              <div className='w-full overflow-hidden md:w-full lg:w-3/5 xl:w-3/5 p-4'>
                <div className='flex flex-wrap justify-between w-full overflow-hidden'>
                  <h2 className='font-semibold mb-2 border-b-2 border-gray-400 text-gray-700 text-lg py-1'>
                    News Details
                  </h2>
                  <div>
                    <Link to='/'>
                      <button className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-1 px-3 mx-2 rounded focus:outline-none focus:shadow-outline text-xs'>
                        Cancel
                      </button>
                    </Link>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mx-2 rounded focus:outline-none focus:shadow-outline text-xs'
                      type='submit'>
                      Publish
                    </button>
                  </div>
                </div>

                <div className='w-full overflow-hidden'>
                  <div className='my-2'>
                    <label className='text-gray-700 text-lg font-bold'>
                      Title
                    </label>
                    <br />
                    <input
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2'
                      type='text'
                      autoComplete='off'
                      name='title'
                      value={title}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className='py-2'>
                    <label className='text-gray-700 text-lg font-bold'>
                      Category
                    </label>
                    <br />
                  </div>
                  <div>
                    <select
                      onChange={this.handleChange}
                      name='category'
                      value={category}
                      className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                      <option defaultValue>News</option>
                      <option defaultValue>Lifestyle</option>
                      <option defaultValue>Food</option>
                      <option defaultValue>Tech</option>
                      <option defaultValue>Education</option>
                      <option defaultValue>Entertainment</option>
                      <option defaultValue>Video</option>
                    </select>
                  </div>

                  <div className='py-2'>
                    <label className='text-gray-700 text-lg font-bold'>
                      Date
                    </label>
                    <br />
                    <input
                      type='date'
                      min='1945-01-01'
                      max='2020-01-01'
                      name='date'
                      value={date}
                      onChange={this.handleChange}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2'
                    />
                  </div>

                  <div className='py-2'>
                    <label className='text-gray-700 text-lg font-bold'>
                      Description
                    </label>
                    <br />
                    <textarea
                      type='text'
                      name='description'
                      value={description}
                      onChange={this.handleChange}
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 h-64'
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
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
