import React from 'react'
import './secondsection.css'
import { useFetchUiContent } from '../../hooks/userhooks/useFetchUiContent'

const SecondComponent = ({sectionId}) => {

   const {content} =  useFetchUiContent(sectionId)

   console.log(content)
  return (
    <>
    <div className='row second-section' id='second-section'>
        
        <div className='col d-flex align-items-center justify-content-center'>
            <div className='d-flex flex-column second-section-1'>
                <div className='heading-text'>{content[0] ? content[0].heading : "Redefining the global built environment"}</div>
                
                <div className='col d-flex justify-content-center align-items-center h-100 d-lg-none'>
                    <div className='shadow video-div lg-rounded-pill border d-flex align-items-center justify-content-center'>
                        <img src="./play-button-image.webp" alt="" style={{objectPosition:"center",objectFit:"cover"}}/>
                        <i class="bi bi-play-circle"></i>
                    </div>
                </div>

                <div className='para'>
                    {content[0] && content[0].description ? content[0].description : `With 35 years of experience, Innovo’s portfolio reflects a broad range of projects, 
                including high-rise towers, residential developments, villa communities, educational 
                facilities, commercial hubs and essential urban infrastructure`}
                
                </div>


                <div className='read-more d-flex'>
                    <button className='rounded-pill d-flex align-items-center read-more-button'>Read more <span className='rounded-circle button-span'><i class="bi bi-arrow-right w-100 h-100 d-flex align-items-center justify-content-center"></i></span></button>
                    
                </div>
            </div>
        </div>
        

        <div className='col d-lg-flex justify-content-center align-items-center h-100 d-none'>
            <div className='shadow video-div rounded-pill border d-flex align-items-center justify-content-center'>
                <img src={content[0] && content[0].image ? `${import.meta.env.VITE_BASE_URL}/${content[0].image}` : "./play-button-image.webp"} alt="" style={{objectPosition:"center",objectFit:"cover"}}/>
                <i class="bi bi-play-circle"></i>
            </div>
        </div>

        <div className='row line-div'>
            <div className='col-12 line'>
                <hr></hr>
            </div>
        </div>
       
    </div>

    <div className='row second-section-2'>
        <div className='col-lg-6 col-12 d-flex align-items-center justify-content-center'>
            <div className='d-flex flex-column second-section-1'>
                <div className='heading-text-second'>Our Industries</div>
            </div>
        </div>

        <div className='col-lg-6 col-12 d-flex justify-content-center align-items-lg-center h-100'>
            Innovo has five business units across different aspects of the built environment.
        </div>
    </div>

    </>
  )
}

export default SecondComponent