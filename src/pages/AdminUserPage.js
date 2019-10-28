import React, { Component } from 'react'
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminUsersComponent from '../components/Admin/AdminUsersComponent';


class AdminUserPage extends Component {
  render() {
    return (
      <div>
        <AdminSidebar/>
        <AdminUsersComponent/>
      </div>
    )
  }
}

export default AdminUserPage
