import axios from "axios"
import { useEffect, useState } from "react"

const useFetchIndiNewsData = (newsId) =>{
    const [newsData,setNewsData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.post(`${import.meta.env.VITE_BASE_URL}/user/get-indi-news`)
        .then((res)=>{
            if(res.data.success){
                setNewsData(res.data.news)
            }
        })

        setLoading(false)
        
    },[])

    return {newsData,loading}
}