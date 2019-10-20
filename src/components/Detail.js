import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getDetail } from "../store/actions/getdetailAction";
import setToken from '../helpers/setToken';

import "../assets/scss/Detail.scss";


class Detail extends Component {
  constructor(props) {
    super (props);

    this.state = {
      token : '',
      comment : '',
    }
  }


  componentDidMount() {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    const id = this.props.match.params.id;
    this.props.getDetail(id);
    
    // this.detail = setInterval(this.props.details, 1000);
  }

  handleChange = e => {
    this.setState ({
      [e.target.name] : e.target.value
    })
  }

  handleComment = async (e) => {
    e.preventDefault();

    const {comment, token} = this.state;
    try {
      const response = await axios.post(
        `https://app-citizenjournalism.herokuapp.com/api/v1/comment/add`,
        {
          Authorization : `Bearer ${token}`,
          news_id : this.props.details._id,
          comment : comment
        },
      ) ;
      console.log(response.data)
      console.log("wakata")
      this.setState({
        comment : ''
      })
      this.props.getDetail(this.props.match.params.id);
    } catch (error) {
      console.log(error.response);
    }
  }





  render() {

    // console.log(this.props.details.listComment);
    const {
      title,
      description,
      category,
      user,
      date,
      media,
      listComment
    } = this.props.details;

    const commentList = listComment.map(commentCheck => {
      // console.log(commentCheck.user_id.fullname);
      return (
        <article className="mt-4 border-grey-dark bg-grey-lightest shadow rounded-r" key={commentCheck._id}>
        <header className="flex items-center mb-2">
          <div className="mr-8">
            <img
              className="rounded-full"
              src={commentCheck.user_id.image.secure_url}
              width="80"
              height="80"
              alt=""
            />
          </div>
          <div>
            <h4>
              <p className="no-underline text-xl text-grey-darkest font-medium">
                {commentCheck.user_id.fullname}
              </p>
            </h4>
            <ul className="list-reset flex">
              <span className="mt-2 text-grey-dark"></span>
            </ul>
          </div>
        </header>
        <p>
            {commentCheck.comment}
        </p>
      </article>
      )
    })

    

    return (
      <div>
        <div className="flex flex-wrap overflow-hidden text-container container mx-auto">

          <div className="w-full overflow-hidden article-style">
            <h1 className="text-4xl font-serif">{title}</h1>
            <div className="font-medium">
                <h3 className="text-base"> Author : <Link to={`/user/${user._id}`} >{user && user.username}</Link></h3>
                <h3 className="text-sm font-normal mb-6">{date.substring(0, 10)}</h3>
            </div>
            <img src={media.secure_url} alt={title} />
            <div className="container mx-auto my-10">
             <p className="text-lg font-serif">{description}</p>
            </div>
            <h3 className="text-sm font-bold font-serif ">Category : {category}</h3>
          </div>

          <div className="container mx-auto w-full overflow-hidden d-detail">
            <h1 className="container mt-4">Comments</h1>
            <div>
              <form className="container ml-auto my-2" onSubmit={this.handleComment}>
                <textarea
                  input="text"
                  placeholder="insert your comment here..."
                  name = "comment"
                  value = {this.state.comment}
                  onChange={this.handleChange}
                />
                <br />
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm ml-2"
                    type="submit">
                    Post
                  </button>
              </form>
            </div>
          </div>


          <div className="container mx-auto w-full overflow-hidden d-detail d-border">
            {commentList}
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    details: state.getdetail1.details
  };
};

export default connect(
  mapStateToProps,
  { getDetail }
)(withRouter(Detail));
