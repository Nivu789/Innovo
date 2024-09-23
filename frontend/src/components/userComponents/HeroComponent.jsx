import React from 'react'
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