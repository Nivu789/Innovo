import React from 'react'
import HeroComponent from '../../components/userComponents/HeroComponent'
import SecondComponent from '../../components/userComponents/SecondComponent'
import ThirdComponent from '../../components/userComponents/ThirdComponent'
import ForthComponent from '../../components/userComponents/ForthComponent'


const Home = () => {
  return (
    <>
    <HeroComponent sectionId={1}/>
    <SecondComponent sectionId={2}/>
    <ThirdComponent/>
    <ForthComponent/>
    {/* <Footer/> */}
    </>
  )
}

export default Home