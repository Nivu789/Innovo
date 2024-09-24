import  axios  from "axios"
import { useState, useEffect } from "react"

export const useFetchUiContent = (sectionId) =>{
    const [content,setContent] = useState([])
    
    useEffect(()=>{
        axios.post(`${import.meta.env.VITE_BASE_URL}/user/fetch-content`,{sectionId})
        .then((res)=>{
            if(res.data.success){
                console.log(res.data)
                setContent(res.data.uiData[0])
            }
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return {content}

}