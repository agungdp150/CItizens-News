import React, { Component } from 'react';
import HeadCategory from '../components/layout/HeadCategory';
import EditProfile from '../components/User/EditProfile';

class EditProfilePage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <EditProfile/>
      </div>
    )
  }
}

export default EditProfilePage
