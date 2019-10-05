import React, { Component } from 'react'
import AdminSidebar from '../components/AdminSidebar';
import AdminUsersComponent from '../components/AdminUsersComponent';


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
