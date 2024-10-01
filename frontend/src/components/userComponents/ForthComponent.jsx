import React, { useEffect, useState } from 'react'
import './forthcomponent.css'
import { data } from './forthCompoenentData'
import { useFetchUiContent } from '../../hooks/userhooks/useFetchUiContent'

const ForthComponent = () => {
    
    const {content,dataIndex,setDataIndex} = useFetchUiContent(4)

    console.log(content)

    useEffect(()=>{
        const changeIndex = setInterval(()=>{
            console.log(content.length)
            setDataIndex(prevIndex=>{
                const newIndex = prevIndex > (content.length-2) ? 0 : prevIndex+1
                return newIndex
            })
        },3000)
        console.log(dataIndex,content)

        return () => clearInterval(changeIndex)

    },[dataIndex,content])

    
    // console.log(content[1].heading)

  return (
    <div className='forth-section'>
        <div className='row approach-section'>
            <div className='col-lg-5'>
                <h2 className='heading-approach'>Our Approach</h2>
            </div>
            <div className='col-lg-7'>
                <div className='row'>
                    {content.map((item,index)=>(
                        <div className={`col ${content[dataIndex].uniqueId==item.uniqueId ? "border-bottom-text":""}`}>0{index+1}</div>
                    ))}
                </div>
                <div className='row'>
                    <hr className='' style={{ border: "1px solid black"}}></hr>
                </div>
                <div className='row slider-texts' style={{marginTop:"-12px"}}>
                    {content.map((item)=>(
                        <div className='col'>
                        <div className='w-25'>{content && content.length > 0 && item.heading}</div>
                        </div>
                    ))}
                    
                    {/* <div className='col'>
                    <div className='w-25'>
                    {content && content.length > 0 && content[1].heading}
                    </div>
                    </div>
                    <div className='col'>
                        <div className='w-25'>
                        {content && content.length > 0 && content[2] && content[2].heading}
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

        <div className='row pill-section gap-4'>
            <div className='col-lg-8 col-12'>
                <div className='pill'>
                    <img src={`http://localhost:3000/${content && content.length > 0 && content[dataIndex] && content[dataIndex].image}`} alt="" />
                </div>
            </div>
            <div className='col d-flex align-items-center'>
                <div className='d-flex flex-column'>
                    <div className='heading-2-approach lh-sm pb-4' style={{width:"25%",borderBottom:"3px solid #9ef3ee"}}>
                    {content && content.length > 0 && content[dataIndex] && content[dataIndex].heading}
                    </div>
                    <div className='para-approach mt-lg-5 mt-4'>
                    {content && content.length > 0 && content[dataIndex] && content[dataIndex].description}
                    </div>
                    <div className='mt-lg-4 mt-3'>
                        <button className='rounded-pill d-flex align-items-center gap-3 read-more-button'>Read more <span className='rounded-circle border button-span'><i class="bi bi-arrow-right w-100 h-100 d-flex align-items-center justify-content-center"></i></span></button>
                    </div>
                </div>
            </div>
        </div>

        <div className='pill-border d-none d-lg-block' style={{marginTop:"250px"}}>
            <hr></hr>
            <img src="/rnds-v2.svg" alt="" />
        </div>

        <div className='row featured-section'>
            <div className='col-lg-4 col-12 d-flex flex-column'>
                <div className='heading-featured'>Featured Stories</div>
                <div>
                    <button className='rounded-pill d-flex align-items-center gap-3 read-more-button'>Read more news<span className='rounded-circle border button-span'><i class="bi bi-arrow-right w-100 h-100 d-flex align-items-center justify-content-center"></i></span></button>
                </div>
            </div>
            <div className='col-lg-8 col-12'>
                <div className='row pills-section'>
                    <div className='col-lg-6 col-12 d-flex flex-column'>
                        <div className='d-none d-lg-flex justify-content-between border-bottom'>
                            <div>
                                02-09-2024
                            </div>
                            <div>
                                THOUGHT LEADERSHIP
                            </div>
                        </div>
                        <div className='d-flex d-lg-none flex-column justify-content-between border-bottom'>
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
                    <div className='col-lg-6 col-12 d-flex flex-column'>
                        <div className='d-none d-lg-flex justify-content-between border-bottom'>
                            <div>
                                02-09-2024
                            </div>
                            <div>
                                THOUGHT LEADERSHIP
                            </div>
                        </div>
                        <div className='d-flex d-lg-none flex-column justify-content-between border-bottom'>
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForthComponent