import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/userComponents/Navbar/Navbar'
import Footer from '../components/userComponents/Footer'
import './defaultnavbar.css'


const Layout = () => {
  return (
    <>  
    <div className='default'>
        <Navbar/>
    </div>
        <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout