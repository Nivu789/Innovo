import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchUiPageComponents } from '../../hooks/adminhooks/useFetchUiPageComponent'
import UiComponentCard from '../../components/adminComponents/UiComponentCard'

const EditUI = () => {
    const [refetch,setRefetch] = useState(false)
    const {pageName} = useParams()
    const {data,loading} = useFetchUiPageComponents({pageName,refetch})

    

  return (
    <div className='ps-3 w-100 pe-3'>
        <div className='fs-2'>EditUI</div>
        <div>
            {
            loading ?
                <div>Loading Data.....</div>
            
                :

            data.map((item)=>(
                <UiComponentCard data={item} setRefetch={setRefetch}/>
            ))
        }
        </div>
    </div>
  )
}

export default EditUI