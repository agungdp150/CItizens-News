import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getDetail } from "../store/actions/getdetailAction";
import { dispatch } from "rxjs/internal/observable/pairs";

import "../assets/scss/Detail.scss";

class Detail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetail(id);
  }

  render() {
    const {
      title,
      description,
      category,
      user,
      date,
      media
    } = this.props.details;
    

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
              <form className="container ml-auto my-2">
                <textarea
                  input="text"
                  placeholder="insert your comment here..."
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
            <article className="mt-4 border-grey-dark bg-grey-lightest shadow rounded-r">
              <header className="flex items-center mb-2">
                <div className="mr-8">
                  <img
                    className=""
                    src="https://picsum.photos/80/80?image=1005"
                    width="80"
                    height="80"
                    alt=""
                  />
                </div>
                <div className="">
                  <h4 className="">
                    <p className="no-underline text-xl text-grey-darkest font-medium">
                      Author :
                    </p>
                  </h4>
                  <ul className="list-reset flex">
                    <li className="mr-2 mt-2">
                      <p className="no-underline text-grey-dark">12 days ago</p>
                    </li>
                    <span className="mt-2 text-grey-dark"></span>
                  </ul>
                </div>
              </header>
              <div className="text-grey-darker">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </article>
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
