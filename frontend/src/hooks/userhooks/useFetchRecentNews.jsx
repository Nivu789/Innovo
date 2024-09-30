import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchRecentNews = () =>{
    const [recentNewsData,setRecentNewsData] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/user/get-recent-news`)
        .then((res)=>{
            if(res.data.success){
                setRecentNewsData(res.data.news)
            }
        })
    },[])

    return {recentNewsData}
}