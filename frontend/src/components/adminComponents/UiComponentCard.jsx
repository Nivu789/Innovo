import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './uicomponentcard.css'
import { useNavigate } from 'react-router-dom'
import { useParentDocId } from '../../contexts/documentIdContext'
import { useFetchUiSectionComponents } from '../../hooks/adminhooks/useFetchUiSectionComponent'



const UiComponentCard = ({ data ,pageName,setSectionData,refetch,setLimit }) => {


    const [heading,setHeading] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")
    const [headingError,setHeadingError] = useState(false)
    const [descriptionError,setDescriptionError] = useState(false)


    // const [erros,setErrors] = useState([
    //     {
    //         headingError:""
    //     },
    //     {
    //         descriptionError:""
    //     }
    // ])

    // const dataItems = data.items.map((item)=>{
    //     return item
    // })

    // console.log("DataItems",dataItems)

    // const formData = new FormData()
    // formData.append('heading',heading)
    // formData.append('description',description)
    // formData.append('image',image)

    // const handleUiChange = (sectionId) =>{
    //     if( heading=="" || description == "" || headingError || descriptionError){
    //         toast.error("Invalid Data found - Changes were not saved")
    //         return
    //     }

    //     formData.append('sectionId',sectionId)
    //     axios.post(`${import.meta.env.VITE_BASE_URL}/admin/edit-ui`,formData)
    //     .then((res)=>{
    //         if(res.data.success){
    //             toast.success(res.data.message)
    //             setRefetch((prev)=>!prev)
    //         }else{
    //             toast.error(res.data.message)
    //         }
            
    //         console.log(res)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })

    // }
    const {setParentDocId} = useParentDocId()

    const {sectionData} = useFetchUiSectionComponents(pageName,data.sectionId,refetch)

    useEffect(()=>{
        console.log("UseEffect should work")
        setSectionData(sectionData)
        setLimit(data.limit)
        console.log(data.limit)
    },[sectionData])

    const handleEditModal = () =>{
        setSectionData(sectionData)
        console.log(data._id)
        setParentDocId(data._id)
        setLimit(data.limit)
        localStorage.setItem("id",data._id)
        // axios.post(`${import.meta.env.VITE_BASE_URL}/admin/get-ui-section-components`,{pageName,sectionId})
        // .then((res)=>{
        //     if(res.data.success){
        //         setParentDocId(res.data.data[0]._id)
        //         setSectionData(res.data.data[0].items)
        //         setRefetch((prev)=>!prev)
        //     }
        // })

        // setHeading(data.heading)
        // setDescription(data.description)
        // navigate(`/admin/dashboard/edit-ui/${pageName}/${data.sectionId}`)
    }

    // useEffect(()=>{
    //     // console.log(heading.length)
    //     if(heading.trim()=="" || heading.length < 4){
    //         setHeadingError(true)
    //         setErrors({...erros,headingError:"heading cannot be less than 4 characters or cannot be spaces"})
    //     }else{
    //         setHeadingError(false)
    //         setErrors({...erros,headingError:null})
    //     }

        
        
    //     // console.log(erros)
    // },[heading])

    // useEffect(()=>{
    //     if(description.trim()=="" || description.length < 4){
    //         setDescriptionError(true)
    //         setErrors({...erros,descriptionError:"description cannot be less than 4 characters or cannot be spaces"})
    //     }else{
    //         setDescriptionError(false)
    //         setErrors({...erros,descriptionError:null})
    //     }
    // },[description])

    return (
        <>
            {/* <Toaster/> */}
            <div className='row pe-2 shadow-sm rounded content-card' onClick={()=>handleEditModal()}>

                <div className='col d-flex flex-column justify-content-center' style={{padding:"38px 0px 38px 60px"}}>
                    <div><strong>Section :</strong> Section {data.sectionId}</div>
                </div>

            </div>

           

        </>
    )
}

export default UiComponentCard