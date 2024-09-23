import React, { useEffect, useState } from 'react'
import './herocontent.css'

const HeroContent = () => {
    const promoText = ["We develop and deploy smart technologies","We nurture our people","We create social value","We deliver critical infrastructure projects","We foster sustainability","We cultivate strong and meaningful partnerships"]
    const [textIndex,setTextIndex] = useState(0)
    const [text,setText] = useState(promoText[0])

    useEffect(()=>{
        const textChange = setInterval(() => {
            setTextIndex(prevIndex => {
                const newIndex = (prevIndex + 1) % promoText.length;
                setText(promoText[newIndex]);
                return newIndex;
            });
        }, 3000);

        return () => clearInterval(textChange)
    },[textIndex])
    return (
        <>
            <div className='hero-content row'>
                <div className='grid-1 col-xs-1'>
                    <h1><span className='me-lg-4 me-sm-3'>Innovating</span>for a
                        better built tomorrow</h1>
                    <h3 className='mt-3'>Innovo Group is a leader in urban development, specialising in the design,
                        engineering and construction of city projects across four continents.</h3>
                </div>
                <div className='grid-2'>
                    
                </div>
            </div>

            <div className='d-flex justify-content-between pe-lg-5 hero-content-2'>

                <div className='grid-1 fs-lg-2 fs-sm-3'>
                    {text} 
                </div>

                <div className='d-lg-flex flex-column align-items-center logo-image'>
                    <div className='chevron-block '>
                    <a href="#second-section">
                        <div className='h-100 border rounded-circle d-flex justify-content-center align-items-center'>
                        <div>
                        <i class="bi bi-chevron-down"></i>
                        </div>
                    </div>
                    </a>
                    </div>
                    <div className='d-flex gap-4'>
                        <div className='d-flex align-items-center'>
                            <img src="/logo.svg" alt="" className='section-2-logo'/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HeroContent