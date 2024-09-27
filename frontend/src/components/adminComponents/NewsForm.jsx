import React from 'react'
import QuillEditor from './QuillEditor'

const NewsForm = ({setDate,date,setImage,image,category,handleNewsEdit,handleNewsSave,setHeading,heading,content,setContent,setCategory,editMode}) => {
  return (

    <form className='h-100'>
        <div className='row category-date-section shadow-sm pt-2 pb-2'>
            <div className='col-3'>
            
            <select name="" id="" className='w-100' value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Project">Project</option>
                <option value="Technology">Technology</option>
            </select>
                
            </div>
            
            <div className='col-3'>
                <input type="date" onChange={(e)=>setDate(e.target.value)} value={date=="undefined"?"":date}/> 
            </div>

            <div className='col-3'>
                <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])}/> 
            </div>
            
            <div className='col-3'>
                <button className='btn btn-success w-100' onClick={editMode ? handleNewsEdit : handleNewsSave}>Save</button>
            </div>

            {image && <div className='col' style={{width:"300px",height:"300px"}}>
                <img src={`http://localhost:3000/${image}`} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}}/>
            </div>}
        </div>

        <div className='pt-3 w-100'>
            <input type="text" className='w-100 ps-2' value={heading} placeholder='Heading' onChange={(e)=>setHeading(e.target.value)}/>
        </div>

        <div style={{height:"100%"}} className='pt-3'>
            <QuillEditor content={content} setContent={setContent}/>
        </div>

        </form>
  )
}

export default NewsForm