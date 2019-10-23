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

    // console.log(listComment)
    const commentList = listComment.map(commentCheck => {
      // console.log(commentCheck && commentCheck.user_id.fullname);
      return (
       <div className="sm:flex sm:items-top px-6 py-4" key={commentCheck._id}>
       <img className="block h-8 w-12 sm:h-12 rounded-full mb-4 sm:mb-0 sm:mr-4 sm:ml-0 mt-2 object-cover " src="" alt="profile-pict"/>
       <div className="sm:text-left sm:flex-grow">
         <div>
           <p className="text-md font-semibold leading-tight py-2">Aldow </p>
           <div>
           <p className="text-sm leading-tight text-grey-dark ">
           {commentCheck.comment}
           </p>
           </div>
         </div>
       </div>
     </div>
      )
    })

    

    return (
      <div className="bg-color-hot">
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
            <h3 className="text-sm font-bold font-serif mb-2 ">Category : {category}</h3>
          </div>

          <div className="container mx-auto w-full overflow-hidden d-detail">
            <hr/>
            <h1 className="container mt-4 text-base font-semibold">Comments</h1>
            <div>
              <form className="container ml-auto my-2" onSubmit={this.handleComment}>

                <div className="col-3">
                  <input
                    className="effect-1"
                    type="text"
                    placeholder="insert your comment here..."
                    name = "comment"
                    value = {this.state.comment}
                    onChange={this.handleChange}
                />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-xs ml-2"
                    type="submit">
                    Post
                  </button>
              </form>
            </div>

          </div>

          <div className="w-full overflow-hidden mb-4">
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
