import React from 'react'
import { useState } from 'react'

import UiSectionCard from '../../components/adminComponents/UiSectionCard'

const EditUiSection = ({sectionData,setRefetch}) => {


  return (
    <div className='ps-3 w-100 pe-3'>
    <div className=' d-flex flex-column gap-3'>
        {sectionData.map((item,index)=>(
            <UiSectionCard data={item} index={index} key={index} setRefetch={setRefetch}/>
        ))}
    </div>
    </div>
  )
}

export default EditUiSection