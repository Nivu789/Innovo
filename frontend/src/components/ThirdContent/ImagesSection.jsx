import React, { useEffect, useState } from 'react'
import './imagesection.css'
import { imageData } from './imageData'

const ImagesSection = () => {
    const [hoveredIndex,setHoveredIndex] = useState(null)
    const [isMobile,setIsMobile] = useState(window.innerWidth < 768)

    const handleDivSize = (index) =>{
        if(!isMobile){
            setHoveredIndex(index)
        }
    }

    const handleWindowResize = ()=>{
        setIsMobile(window.innerWidth < 768)
        // console.log(isMobile)
    } 

    useEffect(()=>{
        console.log(isMobile)
    },[isMobile])

    useEffect(()=>{

        setIsMobile(window.innerWidth < 768)

        window.addEventListener('resize',handleWindowResize)

        return () => window.removeEventListener('resize',handleWindowResize)
    },[])

    return (
        <div className='row image-container'>
            {imageData.map((item,index)=>(
                isMobile ? 
                <div className='image'>
                <div className={`${hoveredIndex==index ? "col-3" : "col"} image-card`} onMouseEnter={()=>handleDivSize(index)} onMouseLeave={()=>setHoveredIndex(null)} style={{ backgroundImage: `url(${item.backgroundImage})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                    <div className='icon'><img src={item.svgImage} alt="" /></div>
                    <div className='fs-4 z-3 position-absolute'>{item.heading}</div>
                </div>
                </div>

                :

                <div className={`${hoveredIndex==index ? "col-3" : "col"} image-card`} onMouseEnter={()=>handleDivSize(index)} onMouseLeave={()=>setHoveredIndex(null)} style={{ backgroundImage: `url(${item.backgroundImage})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                    <div className='icon'><img src={item.svgImage} alt="" /></div>
                    <div className='fs-4 z-3 position-absolute'>{item.heading}</div>
                </div>
            ))}
        </div>
    )
}

export default ImagesSection