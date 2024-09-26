import React from 'react'
import { useState, useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useParentDocId } from '../../contexts/documentIdContext'
import Swal from 'sweetalert2'
import { Draggable } from 'react-beautiful-dnd'


const UiSectionCard = ({ data, setRefetch, index, reorderMode }) => {

    const [heading, setHeading] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [headingError, setHeadingError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)


    const [erros, setErrors] = useState([
        {
            headingError: ""
        },
        {
            descriptionError: ""
        }
    ])


    let { parentDocId } = useParentDocId()

    const formData = new FormData()
    formData.append('heading', heading)
    formData.append('description', description)
    formData.append('image', image)

    const handleUiChange = (uniqueId, modalId) => {
        if (heading == "" || description == "" || headingError || descriptionError) {
            toast.error("Invalid Data found - Changes were not saved")
            return
        }

        if (!parentDocId) {
            parentDocId = localStorage.getItem("id")
        }

        formData.append('parentId', parentDocId)
        formData.append('uniqueId', uniqueId)
        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/edit-ui`, formData)
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    setRefetch((prev) => !prev)
                    const modalId = `#exampleModal${data._id}`;
                    const modalElement = document.querySelector(modalId);
                    const modal = bootstrap.Modal.getInstance(modalElement);
                    if (modal) {
                        modal.hide();
                    }
                } else {
                    toast.error(res.data.message)
                }

                console.log(res)
            }).catch((err) => {
                console.log(err)
            })

    }

    console.log(data)
    useEffect(() => {
        // console.log(heading.length)
        if (heading.trim() == "" || heading.length < 4) {
            setHeadingError(true)
            setErrors({ ...erros, headingError: "heading cannot be less than 4 characters or cannot be spaces" })
        } else {
            setHeadingError(false)
            setErrors({ ...erros, headingError: null })
        }

    }, [heading])

    useEffect(() => {
        if (description.trim() == "" || description.length < 4) {
            setDescriptionError(true)
            setErrors({ ...erros, descriptionError: "description cannot be less than 4 characters or cannot be spaces" })
        } else {
            setDescriptionError(false)
            setErrors({ ...erros, descriptionError: null })
        }
    }, [description])

    const handleEditModal = (dataHeading, dataDescription) => {
        setHeading(dataHeading);
        setDescription(dataDescription);
    }

    const handleDeleteSection = (uniqueId) => {
        console.log(parentDocId)
        if (!parentDocId) {
            parentDocId = localStorage.getItem("id")
        }

        Swal.fire({
            title: "Do you want to remove the element?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${import.meta.env.VITE_BASE_URL}/admin/delete-ui-component`, { parentId: parentDocId, docId: uniqueId })
                    .then((res) => {
                        if (res.data.success) {
                            toast.success(res.data.message)
                            setRefetch((prev) => !prev)
                        } else {
                            toast.error(res.data.message)
                        }
                    })
            } else if (result.isDenied) {
                toast.error("Changes were not saved")
            }
        });

    }


    return (
        <>
            <Toaster />

            {reorderMode ?

                <Draggable key={data.uniqueId} index={index} draggableId={data.uniqueId}>
                    {
                        (provided) => (
                            <div className='row pe-2 shadow-sm rounded content-card' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                                <div className='col-1 d-flex flex-column align-items-center justify-content-center gap-2'>
                                    <button className='rounded-circle bg-dark text-white' data-bs-toggle="modal" data-bs-target={`#exampleModal${data._id}`} onClick={() => handleEditModal(data.heading, data.description)}><i class="bi bi-pen"></i></button>
                                    <button className='rounded-circle bg-danger text-white' onClick={() => handleDeleteSection(data.uniqueId)}><i class="bi bi-trash"></i></button>
                                </div>

                                <div className='col-8 d-flex flex-column justify-content-center ps-5'>
                                    <div><strong>Heading :</strong> {data.heading}</div>
                                    <div><strong>Description :</strong> {data.description}</div>
                                </div>

                                <div className='col-3 pt-2 pb-2' style={{ height: "100px" }}>
                                    <img src={`http://localhost:3000/${data.image}`} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                </div>

                            </div>

                        )
                    }



                </Draggable>

                :

                <div className='row pe-2 shadow-sm rounded content-card'>

                    <div className='col-1 d-flex flex-column align-items-center justify-content-center gap-2'>
                        <button className='rounded-circle bg-dark text-white' data-bs-toggle="modal" data-bs-target={`#exampleModal${data._id}`} onClick={() => handleEditModal(data.heading, data.description)}><i class="bi bi-pen"></i></button>
                        <button className='rounded-circle bg-danger text-white' onClick={() => handleDeleteSection(data.uniqueId)}><i class="bi bi-trash"></i></button>
                    </div>

                    <div className='col-8 d-flex flex-column justify-content-center ps-5'>
                        <div><strong>Heading :</strong> {data.heading}</div>
                        <div><strong>Description :</strong> {data.description}</div>
                    </div>

                    <div className='col-3 pt-2 pb-2' style={{ height: "100px" }}>
                        <img src={`http://localhost:3000/${data.image}`} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    </div>

                </div>

            }



            <div class="modal fade" id={`exampleModal${data._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Heading</label>
                                    <input required type="text" value={heading} onChange={(e) => setHeading(e.target.value)} class={`form-control ${headingError ? "text-danger" : ""}`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div className='d-flex gap-1 mt-1'>{erros.headingError ? <div className='text-danger'>{erros.headingError}</div> : <div className='text-success'>Great</div>}<i class={`bi ${headingError ? "bi-hand-thumbs-down text-danger" : "bi-hand-thumbs-up text-success"}`}></i></div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Description</label>
                                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} class={`form-control ${descriptionError ? "text-danger" : ""}`} id="exampleInputPassword1" />
                                    <div className='d-flex gap-1 mt-1'>{erros.descriptionError ? <div className='text-danger'>{erros.descriptionError}</div> : <div className='text-success'>Great</div>}<i class={`bi ${descriptionError ? "bi-hand-thumbs-down text-danger" : "bi-hand-thumbs-up text-success"}`}></i></div>
                                </div>

                                <div class="mb-3">
                                    {data.image && <img src={`http://localhost:3000/${data.image.replace(/\\/g, '/')}`} alt="" style={{ objectFit: "cover", width: "100%", height: "100%" }} />}
                                    <label for="exampleInputPassword1" class="form-label">Image</label>
                                    <input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} class="form-control" id="exampleInputImage" />
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => handleUiChange(data.uniqueId, data._id)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default UiSectionCard