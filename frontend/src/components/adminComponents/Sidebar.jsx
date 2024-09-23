import React from 'react'
import SidebarItems from './SidebarItems'
import { adminMenuItems } from './adminMenuItems'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div style={{width:"300px",height:"100vh",overflowX:"scroll"}} className='sidebar'>
        {adminMenuItems.map((menuItem)=>(
            <SidebarItems data={menuItem}/>
        ))}
    </div>
  )
}

export default Sidebar