import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './addnews.css'
import { useFetchNewsData } from '../../hooks/adminhooks/usefetchNewsData'
import AdminNewsCard from '../../components/adminComponents/AdminNewsCard'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const AdminNews = () => {

  const [refetch, setRefetch] = useState(false)
  const [newsData,setNewsData] = useState([])
  const {  loading } = useFetchNewsData(refetch,setNewsData)

  const handleDeleteNews = (newsId) => {
    axios.post(`${import.meta.env.VITE_BASE_URL}/admin/delete-news`, { newsId })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          setRefetch((prev) => !prev)
        } else {
          toast.error(res.data.message)
        }
      })
  }

  const [shuffleMode, setShuffleMode] = useState(false)

  const handleDragEnd = (result) =>{
    const items = Array.from(newsData)
    const [reorderedItem] = items.splice(result.source.index,1)
    items.splice(result.destination.index,0,reorderedItem)
    setNewsData(items)
    
  }

  const handleShuffleInDb = () =>{
    axios.post(`${import.meta.env.VITE_BASE_URL}/admin/reorder-news`,{newsData})
    .then((res)=>{
      if(res.data.success){
        toast.success(res.data.message)
        setRefetch((prev)=>!prev)
        setShuffleMode(false)
      }
    })
  }

  return (
    <div className='ps-3 w-100 pe-4' style={{ height: "90vh" }}>

      <Toaster />

      <div className='d-flex justify-content-between align-items-center mt-2'>
        <div className='fs-2'>News</div>
        <div className='d-flex gap-2'>
          <Link to={'/admin/dashboard/addnews'}><button className='btn btn-success'>Add News</button></Link>
          {!shuffleMode ? <button className="btn btn-warning" onClick={() => setShuffleMode(true)}>{"Reorder"}</button> : <button className="btn btn-info" onClick={handleShuffleInDb}>{"Confirm"}</button>}
        </div>
      </div>

      {!shuffleMode ?

        <div className='card-section row h-100 pt-4 mt-2' style={{ overflowY: "scroll" }}>

                    
                      {newsData.map((item, index) => (

                        <AdminNewsCard data={item} key={index} index={index} handleDeleteNews={handleDeleteNews} shuffleMode={shuffleMode}/>

                      ))}

             
          </div>


        :

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className='card-section row h-100 pt-4 mt-2' style={{ overflowY: "scroll" }}>

            {

              loading ? <div>Loading...</div>

                :

                <Droppable droppableId='admin-news-section'>
                  {
                    (provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef} className='row'>
                        {newsData.map((item, index) => (

                          <AdminNewsCard data={item} key={index} index={index} handleDeleteNews={handleDeleteNews} shuffleMode={shuffleMode} />

                        ))}
                        {provided.placeholder}
                      </div>
                    )
                  }

                </Droppable>


            }



          </div>
        </DragDropContext>
      }


    </div>
  )
}

export default AdminNews