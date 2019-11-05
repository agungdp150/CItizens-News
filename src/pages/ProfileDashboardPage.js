import React, { Component } from 'react'
import HeadCategory from '../components/layout/HeadCategory';
import ProfileDashboard from '../components/User/ProfileDashboard/ProfileDashboard';
import ProfileNews from '../components/User/ProfileDashboard/ProfileNews';

class ProfileDashboardPage extends Component {
  render() {
    return (
      <div>
        <HeadCategory/>
        <ProfileDashboard/>
        <ProfileNews/>
      </div>
    )
  }
}

export default ProfileDashboardPage
