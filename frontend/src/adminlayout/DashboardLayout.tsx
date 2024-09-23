import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/adminComponents/Sidebar'
import AdminNavbar from '../components/adminComponents/AdminNavbar'

const DashboardLayout = () => {
  return (
    <>
        {/* <Sidebar/> */}
        <Outlet/>
    </>
  )
}

export default DashboardLayout