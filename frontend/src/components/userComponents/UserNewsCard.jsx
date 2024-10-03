import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const UserNewsCard = ({data}) => {
  return (
    <Link to={`/news/${data._id}`} className='news-card col-4 d-flex flex-column gap-4 pe-4 ps-4' style={{textDecoration:"none",color:"black"}}>
    
                <div className='d-flex justify-content-between'>
                    <span>{data.category}</span>
                    <span>{moment(data.date).format("DD-MM-yy")}</span>
                </div>
                <div className='card-image'>
                    <img src={`${import.meta.env.VITE_BASE_URL}/${data.image}`} alt="" />
                </div>
                <div className='card-heading' style={{height:"100px"}}>
                    <p>{data.heading}</p>
                </div>
                <div><hr></hr></div>
   
    </Link>
  )
}

export default UserNewsCard