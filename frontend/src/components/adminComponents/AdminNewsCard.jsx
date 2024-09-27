import React, { useState } from 'react'
import moment from 'moment'
import './adminnewscard.css'
import { Link } from 'react-router-dom'

const AdminNewsCard = ({data}) => {
    const [divActive,setDivActive] = useState(false)

  return (
    <div className='admin-news-card col-4 d-flex flex-column gap-4'>
                <div className='d-flex justify-content-between'>
                    <span>{data.category}</span>
                    <span>{moment(data.date).format("DD-MM-yy")}</span>
                </div>
                <div className='card-image'>
                    
                    
                    { divActive ?
                    
                    <div onMouseLeave={()=>setDivActive(false)} style={{width:"100%",height:"100%",borderRadius:"52px"}} className='bg-danger d-flex justify-content-center align-items-center gap-4'>
                        <Link to={`/admin/dashboard/editnews/${data._id}`}><button className='btn rounded-circle border fs-2'><i class="bi bi-gear"></i></button></Link>    
                        <button className='btn rounded-circle border fs-2'><i class="bi bi-trash"></i></button>    
                    </div>
                    

                    :

                    <img src={`http://localhost:3000/${data.image}`} alt="" onMouseEnter={()=>setDivActive(true)} />
    
                    }
                </div>
                <div className='card-heading'>
                    <p>{data.heading}</p>
                </div>
    </div>
  )
}

export default AdminNewsCard