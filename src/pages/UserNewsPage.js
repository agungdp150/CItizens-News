import React, { Component } from 'react';
import HeadCategory from '../components/layout/HeadCategory';
import UserProfile from '../components/User/ShowUser/UserProfile';
import NavbarUser from '../components/User/ShowUser/NavbarUser';
import NewsByUser from '../components/User/ShowUser/NewsByUser';
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
