import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchCategory = (refetch) =>{
    const [categoryData,setCategoryData] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/admin/get-category`)
        .then((res)=>{
            if(res.data.success){
                setCategoryData(res.data.categoryData)
            }
        })
    },[refetch])

    return {categoryData}
}