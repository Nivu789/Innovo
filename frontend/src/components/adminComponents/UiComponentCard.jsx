import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import './uicomponentcard.css'


const UiComponentCard = ({ data ,setRefetch }) => {

    const [heading,setHeading] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    const [headingError,setHeadingError] = useState(false)
    const [descriptionError,setDescriptionError] = useState(false)

    const [erros,setErrors] = useState([
        {
            headingError:""
        },
        {
            descriptionError:""
        }
    ])

    const dataItems = data.items.map((item)=>{
        return item
    })

    console.log("DataItems",dataItems)

    const formData = new FormData()
    formData.append('heading',heading)
    formData.append('description',description)
    formData.append('image',image)

    const handleUiChange = (sectionId) =>{
        if( heading=="" || description == "" || headingError || descriptionError){
            toast.error("Invalid Data found - Changes were not saved")
            return
        }

        formData.append('sectionId',sectionId)
        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/edit-ui`,formData)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                setRefetch((prev)=>!prev)
            }else{
                toast.error(res.data.message)
            }
            
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

    }

    const handleEditModal = () =>{
        // setHeading(data.heading)
        // setDescription(data.description)
    }

    useEffect(()=>{
        console.log(heading.length)
        if(heading.trim()=="" || heading.length < 4){
            setHeadingError(true)
            setErrors({...erros,headingError:"heading cannot be less than 4 characters or cannot be spaces"})
        }else{
            setHeadingError(false)
            setErrors({...erros,headingError:null})
        }

        
        
        console.log(erros)
    },[heading])

    useEffect(()=>{
        if(description.trim()=="" || description.length < 4){
            setDescriptionError(true)
            setErrors({...erros,descriptionError:"description cannot be less than 4 characters or cannot be spaces"})
        }else{
            setDescriptionError(false)
            setErrors({...erros,descriptionError:null})
        }
    },[description])

    return (
        <>
            <Toaster/>
            <div className='row pe-2 shadow-sm rounded content-card' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={handleEditModal}>

                <div className='col-9 d-flex flex-column justify-content-center ps-5'>
                    <div><strong>Section :</strong> Section {data.sectionId}</div>
                    {/* <div><strong>Heading :</strong> {data.heading}</div>
                    <div><strong>Description :</strong> {data.description}</div> */}
                </div>

                <div className='col-3 pt-2 pb-2' style={{ height: "100px" }}>
                    <img src={`http://localhost:3000/${data.image}`}  alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                </div>

            </div>


            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
        </button> */}


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Ui - Section {data.sectionId}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                                {data.items.map((item,index)=>(
                                    <div className='w-100 border shadow-sm p-2'>
                                    <div><strong>Heading :</strong> {item.heading}</div>
                                    <div><strong>Description :</strong> {index}</div>
                                    </div>
                                ))}
                                
                            
                            {/* <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Heading</label>
                                    <input required type="text" value={heading} onChange={(e)=>setHeading(e.target.value)} class={`form-control ${headingError ? "text-danger":""}`} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div className='d-flex gap-1 mt-1'>{erros.headingError ? <div className='text-danger'>{erros.headingError}</div> : <div className='text-success'>Great</div>}<i class={`bi ${headingError ? "bi-hand-thumbs-down text-danger":"bi-hand-thumbs-up text-success"}`}></i></div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Description</label>
                                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} class={`form-control ${descriptionError ? "text-danger":""}`} id="exampleInputPassword1"/>
                                    <div className='d-flex gap-1 mt-1'>{erros.descriptionError ? <div className='text-danger'>{erros.descriptionError}</div> : <div className='text-success'>Great</div>}<i class={`bi ${descriptionError ? "bi-hand-thumbs-down text-danger":"bi-hand-thumbs-up text-success"}`}></i></div>
                                </div>

                                <div class="mb-3">
                                    { data.image && <img src={`http://localhost:3000/${data.image.replace(/\\/g, '/')}`} alt="" style={{objectFit:"cover",width:"100%",height:"100%"}}/> }
                                    <label for="exampleInputPassword1" class="form-label">Image</label>
                                    <input type="file" name="image" onChange={(e)=>setImage(e.target.files[0])} class="form-control" id="exampleInputImage"/>
                                </div>
                            
                            </form> */}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleUiChange(data.sectionId)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UiComponentCard