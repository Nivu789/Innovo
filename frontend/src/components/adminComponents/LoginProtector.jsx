import React, { Children } from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'


const LoginProtector = ({children}) => {

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


    if(!authenticated){

        return <>
            {children}
        </>

    }else{
        return <Navigate to={'/admin/dashboard'}/>
    }

}

export default LoginProtector