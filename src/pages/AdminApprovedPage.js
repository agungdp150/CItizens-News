import React, { Component } from 'react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminApprovedComponent from '../components/Admin/AdminApprovedComponent';


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