import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Protector = ({children}) => {
    const [authenticated,setAuthenticated] = useState(null)

    useEffect(()=>{
        const checkAuth = () =>{
            axios.get(`${import.meta.env.VITE_BASE_URL}/admin/auth`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
        .then((res)=>{
            console.log(res.data)
            if(res.data.success){
                setAuthenticated(true)
            }else{
                setAuthenticated(false)
            }
        })
        }

        checkAuth()

    },[])

    if(authenticated==null){

        return <div>Loading...</div>
    }

    if(authenticated){
        return (
            <>
            {children}
            </>
          )
    }
        
    return <Navigate to={'/admin'}/>
        
  
}

export default Protector