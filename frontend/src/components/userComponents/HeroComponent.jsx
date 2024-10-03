import React from 'react'
import './herocomponent.css'
import HeroContent from './HeroContent/HeroContent'
import { useFetchUiContent } from '../../hooks/userhooks/useFetchUiContent'

const HeroComponent = ({sectionId}) => {
  const {content} =  useFetchUiContent(sectionId)
  
  return (
    <>
        
        <div className='video-wrapper'>
            <video className="video-div" poster="https://media.innovogroup.com/assets/img/sldbnr2.jpg" src={content[0] && content[0].image} autoPlay loop playsInline muted></video>
        </div>
      
      <div className='hero-component'>
        {/* <Navbar/> */}
        
        <HeroContent content={content}/>
    </div>
    </>
    
  )
}

export default HeroComponent