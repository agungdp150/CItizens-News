import React, { Component } from 'react'
import HeadCategory from '../components/HeadCategory';
import UserProfile from '../components/UserProfile';
import NavbarUser from '../components/NavbarUser';
import NewsStatusUser from '../components/NewsStatusUser';
import Footer from '../components/Footer';

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
