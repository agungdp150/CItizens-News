import React, { Component } from 'react';
import HeadCategory from '../components/layout/HeadCategory';
import UserProfile from '../components/User/UserProfile';
import NavbarUser from '../components/User/NavbarUser';
import NewsByUser from '../components/User/NewsByUser';
import Footer from '../components/layout/Footer';

export class UserPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <UserProfile/>
        <NavbarUser/>
        <NewsByUser/>
        <Footer/>
      </div>
    )
  }
}

export default UserPage;
