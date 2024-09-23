import axios from "axios"
import { useEffect, useState } from "react"

export const useFetchContactMessages = () =>{
    const [loading,setLoading] = useState(true)
    const [messages,setMessages] = useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BASE_URL}/admin/get-contacts`)
        .then((res)=>{
            if(res.data.success){
                setMessages(res.data.messages)
                setLoading(false)
            }
        })
    },[])

    return {messages,loading}
}