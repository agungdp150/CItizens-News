import React, { Component } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminNewsComponent from '../components/AdminNewsComponent';


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
