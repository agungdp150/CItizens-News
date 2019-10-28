import React, { Component } from 'react';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminNewsComponent from '../components/Admin/AdminNewsComponent';


class AdminDashboardPage extends Component {
  render() {
    return (
      <div>
        <AdminSidebar/>
        <AdminNewsComponent/>
      </div>
    )
  }
}

export default AdminDashboardPage
