import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebaritem.css'


const SidebarItems = ({data}) => {
    const [isOpen,setIsOpen] = useState(false)
    if(data.children){
        return (
            <div className='mt-2'>
                <div className='d-flex gap-0 justify-content-around flex-column shadow-sm fs-5 p-3 border item-children'>
                    <div className='d-flex gap-1 menu-item'>
                        <i class={`${data.icon}`}></i>
                        <div>{data.heading}</div>
                            <i class={`bi ${isOpen ? "bi-chevron-up":"bi-chevron-down"}`} onClick={()=>setIsOpen(!isOpen)}></i>
                        </div>
                    {isOpen && <div className='d-flex flex-column'>
                        {data.children.map((item)=>(
                            <SidebarItems data={item}/>
                        ))}
                    </div>
                    }
                </div>
            </div>
          )
    
    }else{

        return (
            <div className='d-flex gap-4 justify-content-around flex-column shadow-sm fs-5 p-3 border mt-2 item-block'>
                <Link to={data.url} className='item d-flex gap-1'><i class={`${data.icon}`}></i>{data.heading}</Link>
            </div>
        )
        
    }
  
}

export default SidebarItems