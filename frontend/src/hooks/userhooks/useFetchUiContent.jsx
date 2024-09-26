import  axios  from "axios"
import { useState, useEffect } from "react"


export const useFetchUiContent = (sectionId) =>{
    const [content,setContent] = useState([])
    const [dataIndex,setDataIndex] = useState(0)

    useEffect(()=>{
        axios.post(`${import.meta.env.VITE_BASE_URL}/user/fetch-content`,{sectionId})
        .then((res)=>{
            if(res.data.success){
                console.log(res.data.uiData[0].items)
                setContent(res.data.uiData[0].items)
            }
        }).catch((err)=>{
            console.log(err)
        })

    },[])

    return {content,dataIndex,setDataIndex}

}