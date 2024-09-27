import React, { useState,useRef,useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavbarItem = ({item,depthLevel}) => {
    const [isOpen,setIsOpen] = useState(false)
    const dropdownRef = useRef(null)
    
    const triggerRef = useRef(null);

    depthLevel = depthLevel + 1

    console.log(depthLevel)

  useEffect(() => {
    const handleMouseEnter = (event) => {
        if (
          (triggerRef.current && triggerRef.current.contains(event.target)) ||
          (dropdownRef.current && dropdownRef.current.contains(event.target))
        ) {
          setIsOpen(true);
        }
      };

      const handleMouseLeave = (event) => {
        
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.relatedTarget) &&
          triggerRef.current &&
          !triggerRef.current.contains(event.relatedTarget)
        ) {
          setIsOpen(false);
        }
      };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);


    if(item.children){
        return (
            <>
            <div ref={triggerRef} className='d-flex'>
            <div className='d-flex'>
                <div role='button'>{item.item}</div>
                <span><i class={`fa ${depthLevel > 1 ? 'fa-chevron-right':"fa-chevron-down"} `} onMouseEnter={()=>setIsOpen(true)}></i></span>
            </div>
                
            <div ref={dropdownRef} className={isOpen ? `d-flex mt-4` : 'd-none'} style={{paddingTop:`${depthLevel > 1 ? "0px" : "24px"}`,paddingBottom:"0px",zIndex:1,position:`${depthLevel > 1 ? "fixed":"absolute"}`}}>
                  
                <div className={`${depthLevel > 1 ? "margin-test bg-white":"bg-white ps-4"} pt-4 d-flex flex-column text-left rounded-bottom pe-4`} style={{gap:"15px",paddingBottom:"30px",position:`${depthLevel > 1 ? "relative":""}`}}>
                    
                    {item.children.map((item)=>(
                    <NavbarItem item={item} depthLevel={depthLevel}/>
                ))}
                </div>
                
            </div>
           
            </div>
            </>
          )
    }else{
        return (
            <>
            <div style={{position:"relative"}}>
            <div className='d-flex gap-1 no-children-link'>
                <Link style={{ textDecoration: 'none',color:'black' }} to={item.url}><div>{item.item}</div></Link>
            </div>
            </div>
            </>
          )
    }
  
}

export default NavbarItem