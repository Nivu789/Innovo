import React, { useState } from 'react'
import QuillEditor from './QuillEditor'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useFetchCategory } from '../../hooks/userhooks/useFetchCategory'

const NewsForm = ({ setDate, date, setImage, image, category, handleNewsEdit, handleNewsSave, setHeading, heading, content, setContent, setCategory, editMode }) => {
    
    const [newCategory,setNewCategory] = useState("")
    const [addnewCategory,setAddNewCategory] = useState(false)
    const [refetch,setRefetch] = useState(false)


    const {categoryData} = useFetchCategory(refetch)

    const handleNewCategory = () =>{
        setAddNewCategory(false)
        setNewCategory("")
        if(newCategory.trim()==""){
            return;
        }

        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/add-category`,{newCategory})
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                setRefetch((prev)=>!prev)
            }else{
                toast.error(res.data.message)
            }
        })
    }

    return (

        <form className='h-100'>
            <Toaster/>

            <div className='row category-date-section shadow-sm pt-2 pb-2'>
                
                { addnewCategory && <div className='col d-flex'>
                    <input type="text" placeholder='Add category' value={newCategory} onChange={(e)=>setNewCategory(e.target.value)}/>
                    <button type='button' onClick={handleNewCategory}>confirm</button>
                </div> }

                <div className='col d-flex'>
                    
                    {!addnewCategory && <button type="button" onClick={()=>setAddNewCategory(true)}><i class="bi bi-plus-circle-fill"></i></button>}

                    <select disabled={newCategory!=""} name="" id="" className='w-100' value={category} onChange={(e) => setCategory(e.target.value)}>
                        {categoryData.map((item)=>(
                            <option value={item.categoryName}>{item.categoryName}</option>
                        ))}
                        
                    </select>

                </div>

                <div className='col-3'>
                    <input type="date" onChange={(e) => setDate(e.target.value)} value={date == "undefined" ? "" : date} />
                </div>

                <div className='col-3'>
                    <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
                </div>

                <div className='col'>
                    <button className='btn btn-success w-100' onClick={editMode ? handleNewsEdit : handleNewsSave}>Save</button>
                </div>

                {image && <div className='row'><div className='col' style={{ width: "300px", height: "300px" }}>
                    <img src={`http://localhost:3000/${image}`} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div></div>}
            </div>

            <div className='pt-3 w-100'>
                <input type="text" className='w-100 ps-2' value={heading} placeholder='Heading' onChange={(e) => setHeading(e.target.value)} />
            </div>

            <div style={{ height: "50%" }} className='pt-3'>
                <QuillEditor content={content} setContent={setContent} />
            </div>

        </form>
    )
}

export default NewsForm