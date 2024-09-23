import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNavbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    

    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem("token")
        navigate('/admin')
    }

    

  return (
    <div className='shadow-sm'>
        <div className='d-flex justify-content-between ps-3 pe-3 align-items-center pt-2 pb-2'>
            <div>
                <img src="/logo.svg" alt="logo" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width:"50px"}}
                alt="Avatar" onClick={()=>setIsOpen(!isOpen)}/>
                {isOpen && <div className='position-absolute' style={{width:"100px",top:"15px",right:"50px"}}>
                    <button className='btn btn-success' onClick={handleLogout}>Log out</button>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar