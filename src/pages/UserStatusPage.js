import React, { Component } from 'react'
import HeadCategory from '../components/layout/HeadCategory';
import UserProfile from '../components/User/UserProfile';
import NavbarUser from '../components/User/NavbarUser';
import NewsStatusUser from '../components/User/NewsStatusUser';
import Footer from '../components/layout/Footer';

export class UserStatusPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <UserProfile/>
        <NavbarUser/>
        <NewsStatusUser/>
        <Footer/>
      </div>
    )
  }
}

export default UserStatusPage;
