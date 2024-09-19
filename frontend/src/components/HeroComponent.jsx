import React from 'react'
import Navbar from './Navbar/Navbar'
import './herocomponent.css'
import HeroContent from './HeroContent/HeroContent'

const HeroComponent = () => {
  return (
    <div className='hero-component'>
        {/* <Navbar/> */}
        <HeroContent/>
    </div>
  )
}

export default HeroComponent