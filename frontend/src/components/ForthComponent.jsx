import React, { useEffect, useState } from 'react'
import './forthcomponent.css'
import { data } from './forthCompoenentData'

const ForthComponent = () => {
    const [dataIndex,setDataIndex] = useState(0)
    
    useEffect(()=>{
        const changeIndex = setInterval(()=>{
            setDataIndex(prevIndex=>{
                const newIndex = prevIndex > 1 ? 0 : prevIndex+1
                return newIndex
            })
        },3000)

        return () => clearInterval(changeIndex)
    },[dataIndex])

  return (
    <div className='forth-section'>
        <div className='row approach-section'>
            <div className='col-5'>
                <h2 className='heading-approach'>Our Approach</h2>
            </div>
            <div className='col-7'>
                <div className='row'>
                    {data.map((item)=>(
                        <div className={`col ${data[dataIndex].id==item.id ? "border-bottom-text":""}`}>0{item.id}</div>
                    ))}
                </div>
                <div className='row'>
                    <hr className='' style={{ border: "1px solid black"}}></hr>
                </div>
                <div className='row slider-texts' style={{marginTop:"-12px"}}>
                    <div className='col'>
                    <div className='w-25'>Supporting people</div>
                    </div>
                    <div className='col'>
                    <div className='w-25'>
                        Embracing technology
                    </div>
                    </div>
                    <div className='col'>
                        <div className='w-25'>
                            Fostering sustainability
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row pill-section gap-4'>
            <div className='col-8'>
                <div className='pill'>
                    <img src={data[dataIndex].image} alt="" />
                </div>
            </div>
            <div className='col d-flex align-items-center'>
                <div className='d-flex flex-column'>
                    <div className='heading-2-approach lh-sm pb-4' style={{width:"25%",borderBottom:"3px solid #9ef3ee"}}>
                        {data[dataIndex].title}
                    </div>
                    <div className='para-approach mt-5'>
                    {data[dataIndex].content}
                    </div>
                    <div className='mt-4'>
                        <button className='rounded-pill d-flex align-items-center gap-3 read-more-button'>Read more <span className='rounded-circle border button-span'><i class="bi bi-arrow-right w-100 h-100 d-flex align-items-center justify-content-center"></i></span></button>
                    </div>
                </div>
            </div>
        </div>

        <div className='pill-border' style={{marginTop:"250px"}}>
            <hr></hr>
            <img src="/rnds-v2.svg" alt="" />
        </div>

        <div className='row featured-section'>
            <div className='col-4 d-flex flex-column'>
                <div className='heading-featured'>Featured Stories</div>
                <div>
                    <button className='rounded-pill d-flex align-items-center gap-3 read-more-button'>Read more news<span className='rounded-circle border button-span'><i class="bi bi-arrow-right w-100 h-100 d-flex align-items-center justify-content-center"></i></span></button>
                </div>
            </div>
            <div className='col-8'>
                <div className='row pills-section'>
                    <div className='col d-flex flex-column'>
                        <div className='d-flex justify-content-between border-bottom'>
                            <div>
                                02-09-2024
                            </div>
                            <div>
                                THOUGHT LEADERSHIP
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"400px"}}>
                        <div className='d-flex flex-column gap-4'>
                        <div className='fs-3 text-center'>
                            “Wellness in the built environment” — Bishoy...
                        </div>
                        <div className='featured-section-pill bg-danger' style={{backgroundImage:'url(/feature-section-pill1.webp)',backgroundPosition:"center",backgroundSize:"cover"}}>
                            <div className='rounded-pill border border-white'>
                                <i class="bi bi-arrow-right text-white"></i>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='d-flex justify-content-between border-bottom'>
                            <div>
                                02-09-2024
                            </div>
                            <div>
                                THOUGHT LEADERSHIP
                            </div>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"400px"}}>
                        <div className='d-flex flex-column gap-4'>
                        <div className='fs-3 text-center'>
                            “Wellness in the built environment” — Bishoy...
                        </div>
                        <div className='featured-section-pill bg-danger' style={{backgroundImage:'url(/feature-section-pill2.webp)',backgroundPosition:"center",backgroundSize:"cover"}}>
                             <div className='rounded-pill border border-white'>
                                <i class="bi bi-arrow-right text-white"></i>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForthComponent