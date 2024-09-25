import axios from "axios"
import { useEffect, useState } from "react"


export const useFetchUiSectionComponents = (pageName,sectionId,refetch) =>{
    const [sectionData,setSectionData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        console.log(pageName,sectionId)
        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/get-ui-section-components`,{pageName,sectionId})
        .then((res)=>{
            if(res.data.success){
                setSectionData(res.data.data[0].items)
            }
        })

        console.log("Called")

        setLoading(false)
        
    },[refetch])

    return {sectionData,loading}
}