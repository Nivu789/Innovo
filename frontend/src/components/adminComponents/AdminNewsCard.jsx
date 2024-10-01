import React, { useState } from 'react'
import moment from 'moment'
import './adminnewscard.css'
import { Link } from 'react-router-dom'
import { Draggable } from 'react-beautiful-dnd'

const AdminNewsCard = ({ data, handleDeleteNews, index, shuffleMode }) => {
    const [divActive, setDivActive] = useState(false)

    console.log(shuffleMode)

    if (shuffleMode) {

        return (
            <Draggable key={data._id} index={index} draggableId={index.toString()}>
                {
                    (provided) => (
                        <div className='admin-news-card col-4 d-flex flex-column gap-4' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <div className='d-flex justify-content-between'>
                                <span>{data.category}</span>
                                <span>{moment(data.date).format("DD-MM-yy")}</span>
                            </div>
                            <div className='card-image'>


                                {divActive ?

                                    <div onMouseLeave={() => setDivActive(false)} style={{ width: "100%", height: "100%", borderRadius: "52px", border: "1px solid black" }} className='bg-transparent d-flex justify-content-center align-items-center gap-4'>
                                        <Link to={`/admin/dashboard/editnews/${data._id}`}><button className='btn rounded-circle border fs-2'><i class="bi bi-gear"></i></button></Link>
                                        <button className='btn rounded-circle border fs-2' onClick={() => handleDeleteNews(data._id)}><i class="bi bi-trash"></i></button>
                                    </div>


                                    :

                                    <img src={`http://localhost:3000/${data.image}`} alt="" onMouseEnter={() => setDivActive(true)} />

                                }
                            </div>
                            <div className='card-heading'>
                                <p>{data.heading}</p>
                            </div>
                        </div>
                    )
                }

            </Draggable>
        )

    } else {

        return (
            <div className='admin-news-card col-4 d-flex flex-column gap-4'>
                <div className='d-flex justify-content-between'>
                    <span>{data.category}</span>
                    <span>{moment(data.date).format("DD-MM-yy")}</span>
                </div>
                <div className='card-image'>


                    {divActive ?

                        <div onMouseLeave={() => setDivActive(false)} style={{ width: "100%", height: "100%", borderRadius: "52px", border: "1px solid black" }} className='bg-transparent d-flex justify-content-center align-items-center gap-4'>
                            <Link to={`/admin/dashboard/editnews/${data._id}`}><button className='btn rounded-circle border fs-2'><i class="bi bi-gear"></i></button></Link>
                            <button className='btn rounded-circle border fs-2' onClick={() => handleDeleteNews(data._id)}><i class="bi bi-trash"></i></button>
                        </div>


                        :

                        <img src={`http://localhost:3000/${data.image}`} alt="" onMouseEnter={() => setDivActive(true)} />

                    }
                </div>
                <div className='card-heading'>
                    <p>{data.heading}</p>
                </div>
            </div>
        )
    }
}

export default AdminNewsCard