import React, { Component } from 'react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminRejectedComponent from '../components/Admin/AdminRejectedComponent';


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