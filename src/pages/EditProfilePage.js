import React, { Component } from 'react';
import HeadCategory from '../components/HeadCategory';
import EditProfile from '../components/EditProfile';

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
