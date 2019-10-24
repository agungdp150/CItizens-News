import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { getDetailUser } from "../store/actions/getdetailuserAction";

class NavbarUser extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailUser(id);
  }
  
  render() {
    const userData = this.props.details.user;

    return (
      <div className="bg-color-hot">
      <div className="mx-auto user-width py-2 bg-color-hot">
        <div className="flex border-b border-gray-500 py-3">
            <Link to={`/user/${userData && userData._id}`} className="font-semibold mx-4 text-sm hover:text-gray-600">News</Link>
            <Link to={`/user/status/${userData && userData._id}`} className="font-semibold mx-4 text-sm hover:text-gray-600">Status</Link>
        <div className="flex justify-end">
            <Link to={`/user/${userData && userData._id}/upload`} className="font-semibold mx-4 bg-transparent py-1 px-3 text-xs border border-blue-500 rounded text-blue-600 hover:text-blue-400 "> Upload a News</Link>
        </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    details: state.user1.detailUser
  };
};


export default connect(
  mapStateToProps,
  {getDetailUser}
) (withRouter(NavbarUser));
