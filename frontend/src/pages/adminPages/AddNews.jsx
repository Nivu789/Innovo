import React, { useState } from 'react'
import QuillEditor from '../../components/adminComponents/QuillEditor'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import NewsForm from '../../components/adminComponents/NewsForm'

const AddNews = () => {
    const [content,setContent] = useState('')
    const [heading,setHeading] = useState('')
    const [category,setCategory] = useState('')
    const [date,setDate] = useState(null)
    const [image,setImage] = useState('')

    const navigate = useNavigate()
    
    const formData = new FormData()
        formData.append('heading',heading)
        formData.append('category',category)
        formData.append('image',image)
        formData.append('content',content)
        
    
    const handleNewsSave = (e) =>{
            
        e.preventDefault()

        formData.append('date',date)

        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/add-news`,formData)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/admin/dashboard/news')
            }else{
                toast.error(res.data.message)
            }
        })
    }


  return (
    <div className='d-flex flex-column w-100'>
    
    <Toaster/>

    <div className='ps-3 pe-3 w-100' style={{height:"65vh"}}>
        <div className='fs-2'>
            Add News
        </div>
        
        <NewsForm 
            content={content} 
            setContent={setContent} 
            setDate={setDate} 
            setHeading={setHeading} 
            setImage={setImage} 
            handleNewsSave={handleNewsSave}   
            setCategory={setCategory} 
        />

    </div>

</div>
  )
}

export default AddNews