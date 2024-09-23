import React from 'react'
import Sidebar from '../../components/adminComponents/Sidebar'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../components/adminComponents/AdminNavbar'

const AdminDashboard = () => {
  return (
    <>
    <AdminNavbar/>
    
    <div className='d-flex'>
        <Sidebar/>
        <Outlet/>
    </div>
    </>
  )
}

export default AdminDashboard