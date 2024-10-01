import React from 'react'
import { useState } from 'react'

import UiSectionCard from '../../components/adminComponents/UiSectionCard'
import { Droppable } from 'react-beautiful-dnd'

const EditUiSection = ({ sectionData, setRefetch ,reorderMode}) => {


  return (
    <div className='ps-3 w-100 pe-3'>
      {reorderMode ? 
          <Droppable droppableId='sectionlist'>
          {
            (provided) => (
              <div className='d-flex flex-column' {...provided.droppableProps} ref={provided.innerRef}>
                {sectionData.map((item, index) => (
                  <UiSectionCard data={item} index={index} key={index} setRefetch={setRefetch} reorderMode={reorderMode} disableDelete={sectionData.length==1}/>
                ))}
                {provided.placeholder}
              </div>
            )
          }
        </Droppable>
      
      :

      
            <div className='d-flex flex-column gap-5 pt-3'>
              {sectionData.map((item, index) => (
                <UiSectionCard data={item} index={index} key={index} setRefetch={setRefetch} disableDelete={sectionData.length==1}/>
              ))}
              
            </div>

    }
      
    </div>
  )
}

export default EditUiSection