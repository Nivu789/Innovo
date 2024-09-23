import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const handleAdminLogin = (e) =>{
        e.preventDefault()
        
        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/admin-login`,{username,password})
        .then((res)=>{
            if(res.data.success){
                localStorage.setItem('token',res.data.token)
                toast.success(res.data.message)
                navigate('/admin/dashboard')
            }else{
                toast.error(res.data.message)
            }
        })
    }

    return (
            <div className='form-div d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
            
            <Toaster/>

            <form onSubmit={()=>handleAdminLogin(event)}>

            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example1">Username</label>
                <input type="text" id="form2Example1" class="form-control" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>


            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>


            <div class="row mb-4">
                <div class="col d-flex justify-content-center">

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                </div>

                <div class="col">

                    <a href="#!">Forgot password?</a>
                </div>
            </div>


            <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>


            <div class="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
                <p>or sign up with:</p>
                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                </button>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                </button>
            </div>
        </form>

        </div>
    )
}

export default AdminLogin