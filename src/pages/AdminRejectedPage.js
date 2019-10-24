import React, { Component } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminRejectedComponent from '../components/AdminRejectedComponent';


class AdminDashboardPage extends Component {
  render() {
    return (
      <div>
        <AdminSidebar/>
        <AdminRejectedComponent/>
      </div>
    )
  }
}

export default AdminDashboardPage