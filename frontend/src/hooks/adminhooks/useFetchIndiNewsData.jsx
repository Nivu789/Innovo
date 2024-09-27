import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchIndiNewsData = (newsId) =>{
    const [newsData,setNewsData] = useState([])

    useEffect(()=>{
        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/get-indi-news-data`,{newsId})
        .then((res)=>{
            if(res.data.success){
                setNewsData(res.data.newsData)
            }
        })
    },[])

    return {newsData}

}