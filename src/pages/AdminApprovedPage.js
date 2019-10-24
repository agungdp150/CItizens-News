import React, { Component } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminApprovedComponent from '../components/AdminApprovedComponent';


class AdminDashboardPage extends Component {
  render() {
    return (
      <div>
        <AdminSidebar/>
        <AdminApprovedComponent/>
      </div>
    )
  }
}

export default AdminDashboardPage