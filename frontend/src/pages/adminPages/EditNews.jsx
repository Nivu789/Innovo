import React from 'react'
import { useState ,useEffect} from 'react'
import NewsForm from '../../components/adminComponents/NewsForm'
import { useFetchIndiNewsData } from '../../hooks/adminhooks/useFetchIndiNewsData'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const EditNews = () => {

    const {newsId} = useParams()

    const {newsData} = useFetchIndiNewsData(newsId)

    const navigate = useNavigate()

    const [content,setContent] = useState("")
    const [heading,setHeading] = useState("")
    const [category,setCategory] = useState("")
    const [date,setDate] = useState("")
    const [image,setImage] = useState("")


    useEffect(() => {
        if (newsData) {
            setContent(newsData.content || '');
            setHeading(newsData.heading || '');
            setCategory(newsData.category || '');
            setDate(moment(newsData.date).format("yyyy-MM-DD") || '');
            setImage(newsData.image || '');
        }
    }, [newsData]);


    const formData = new FormData()
    formData.append('heading',heading)
    formData.append('category',category)
    formData.append('image',image)
    formData.append('content',content)
    formData.append('newsId',newsId)
    
    const handleNewsEdit = (e) =>{
        e.preventDefault()
        formData.append('date',date)
        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/edit-news`,formData)
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
    <div className='ps-3 pe-3 w-100' style={{height:"55vh"}}>
        <div className='fs-2'>Edit News</div>

        <NewsForm 
        content={content}
        setContent={setContent}
        heading={heading}
        category={category}
        date={date}
        image={image}
        setHeading={setHeading}
        setDate={setDate}
        setImage={setImage}
        setCategory={setCategory}
        handleNewsEdit={handleNewsEdit}
        editMode={true}
        />
    
    </div>
  )
}

export default EditNews