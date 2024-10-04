import React from 'react'
import './navbar.css'
import { menuItems } from '../Menu/menuItems'
import NavbarItem from './NavbarItem'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const depthLevel = 0
  return (
    <div className={`navbar-div`}>
      <Link to={'/'}><div className='ps-4'><img src="/logo.svg" alt="" /></div></Link>
        <ul className='navbar-ul p-3'>
          {menuItems.map((item)=>(
            <NavbarItem item={item} depthLevel={depthLevel}/>
          ))}
          
            {/* <li>Who we are</li>
            <li>Our industries</li>
            <li>Our projects</li>
            <li>Commitments</li>
            <li>Sustainability</li>
            <li>News</li>
            <li>Careers</li>
            <li>Contact</li> */}
            <li><div className='search-icon-block d-flex align-items-center justify-content-center'><i class="bi bi-search rounded-circle h-100 w-100 d-flex align-items-center justify-content-center fs-5"></i></div></li>
        </ul>
    </div>
  )
}

export default Navbar