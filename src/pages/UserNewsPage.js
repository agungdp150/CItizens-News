import React, { Component } from 'react';
import HeadCategory from '../components/HeadCategory';
import UserProfile from '../components/UserProfile';
import NavbarUser from '../components/NavbarUser';
import NewsByUser from '../components/NewsByUser';
import Footer from '../components/Footer';

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
