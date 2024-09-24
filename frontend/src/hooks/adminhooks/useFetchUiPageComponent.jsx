import axios from "axios"
import { useEffect,useState } from "react"

export const useFetchUiPageComponents = ({pageName,refetch}) =>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        console.log(pageName)
        axios.post(`${import.meta.env.VITE_BASE_URL}/admin/get-ui-components`,{pageName})
        .then((res)=>{
            console.log(res.data.pageData)
            if(res.data.success){
                setData(res.data.pageData)
            }
        })

        setLoading(false)

    },[pageName,refetch])

    return {data,loading}

}