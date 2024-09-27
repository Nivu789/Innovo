import React from 'react'
import { Link } from 'react-router-dom'
import './addnews.css'
import { useFetchNewsData } from '../../hooks/adminhooks/usefetchNewsData'
import AdminNewsCard from '../../components/adminComponents/AdminNewsCard'

const AdminNews = () => {

    const {newsData,loading} = useFetchNewsData()

  return (
    <div className='ps-3 w-100 pe-4' style={{height:"90vh"}}>
        
        <div className='d-flex justify-content-between align-items-center mt-2'>
            <div className='fs-2'>News</div>
            <Link to={'/admin/dashboard/addnews'}><button className='btn btn-success'>Add News</button></Link>
        </div>
        

        <div className='card-section row h-100 pt-4 mt-2' style={{overflowY:"scroll"}}>
            
            {
            
            loading ? <div>Loading...</div>
                
             :

                newsData.map((item)=>(
                    <AdminNewsCard data={item}/>
                ))
            
                }
            
        
        </div>
    </div>
  )
}

export default AdminNews