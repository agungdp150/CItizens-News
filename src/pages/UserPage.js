import React, { Component } from 'react';
import HeaderS from '../components/HeaderS';
import UserProfile from '../components/UserProfile';
import Footer from '../components/Footer';

export class UserPage extends Component {
  render() {
    return (
      <div>
        <HeaderS/>
        <UserProfile/>
        <Footer/>
      </div>
    )
  }
}

export default UserPage
