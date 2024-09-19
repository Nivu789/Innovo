import React from 'react'
import './contact.css'
import { useForm } from "react-hook-form"
import axios from 'axios'
import {toast,Toaster} from 'react-hot-toast'
import { useState } from 'react'

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset
      } = useForm()
      
      const onSubmit = (data) => {
        axios.post(`${import.meta.env.VITE_BASE_URL}/user/post-email`,{data})
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message)
                reset()
            }else{
                toast.error(res.data.messsage)
            }
            
        })
      }

      
      const [focusStates,setFocusStates] = useState({
        name:false,
        email:false,
        phone:false,
        message:false
      })

      const handleFocus = (field) =>{
        setFocusStates((prev)=>({...prev,[field]:true}))
      }

      const handleBlur = (field) =>{
        setFocusStates((prev)=>({...prev,[field]:false}))
      }

  return (
    <>
    {/* <div className='contact-section'> */}
        
        <div className='border-bottom border-4 heading-contact col-12'>
            <h1>Contact</h1>  
        </div>

        {/* <div className='col-12 row'>
            <div className='col-lg-6 col-sm-12 d-flex flex-column justify-content-center content-section-1 gap-4'>
                
                <div className='col-12 d-md-none content-section-2 position-relative' style={{height:"50%"}}>
                    <img src="./cnts-1.webp" alt="" style={{objectFit:"cover",position:"absolute",width:"100%",height:"100%",objectPosition:"center"}}/>
                </div>

                <div className='col-12 w-100'>
                    <h1>Headquarters</h1>
                </div>

                <div className='d-flex flex-column gap-3 col-12'>
                    <h2>London</h2>
                    <div>63 St James’s Street London SW1A 1LY United Kingdom</div>
                    <div className='d-flex flex-column gap-2'>
                        <div className='d-flex align-items-center gap-2'><img src="/location.svg" alt="" style={{width:"20px"}}/>info.london@innovogroup.com</div>
                        <div className='d-flex align-items-center gap-2'><img src="/phone.svg" alt="" style={{width:"20px"}}/>info.london@innovogroup.com</div>
                        <div className='d-flex align-items-center gap-2'><img src="/map.svg" alt="" style={{width:"20px"}}/>info.london@innovogroup.com</div>
                    </div>
                </div>
            </div>
            <div className='d-none d-md-flex col-lg-6 col-sm-12 position-relative content-section-2'>
                <img src="./cnts-1.webp" alt="" style={{objectFit:"cover",position:"absolute",width:"100%",height:"100%",objectPosition:"center"}}/>
            </div>

        </div> */}
    <div className='contact-div'>
        <div className='hero-contact'>
            <div className='row'>

                <div className='d-block d-lg-none col-12 col-lg-6'>
                    <img src="./cnts-1.webp" alt="" style={{objectFit:"cover",width:"100%",height:"100%"}}/>
                </div>

                <div className='col-12 col-lg-5 content-part-1'>
                    <h1>Headquarters</h1>
                    <h2>London</h2>
                    <p>63 St James’s Street London SW1A 1LY United Kingdom</p>
                    <div className='d-flex flex-column gap-2'>
                        <div className='d-flex align-items-center gap-2'><img src="/location.svg" alt="" style={{width:"20px"}}/>info.london@innovogroup.com</div>
                        <div className='d-flex align-items-center gap-2'><img src="/phone.svg" alt="" style={{width:"20px"}}/>info.london@innovogroup.com</div>
                        <div className='d-flex align-items-center gap-2'><img src="/map.svg" alt="" style={{width:"20px"}}/>info.london@innovogroup.com</div>
                    </div>
                </div>
                <div className='d-none d-lg-block col-12 col-lg-7 content-part-2'>
                    <img src="./cnts-1.webp" alt="" style={{objectFit:"cover",width:"100%",height:"100%"}}/>
                </div>
                
            </div>
        </div>
    </div>

    {/* </div> */}

    <div className='office-section'>
        <div className='heading-office'>
            <h1>Our Offices</h1>
        </div>

        <div className='office-card-section'>
            <div className='row gap-5'>
                
                <div className='col-12 col-lg-4 ps-4 card' style={{
                    backgroundImage:"url(./dubai.webp)",
                    backgroundSize:"cover"
                    }}>
                    <div className='card-content'>
                        <h4>Dubai</h4>
                        <p>Level 2, Dubai Hills Estate Business Park 1<br></br>
                            PO Box 52930, Dubai, <br></br>
                            United Arab Emirates
                        </p>
                        <div className='location-div'>
                            <div className='d-flex gap-2 align-items-center'><img src="./location.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./phone.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./map.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-lg-4 ps-4 position-relative card' style={{
                    backgroundImage:"url(./cairo.webp)",
                    backgroundSize:"cover"
                    }}>
                    <div className='card-content'>
                        <h4>Cairo</h4>
                        <p>LMivida Business Park- <br></br>
                        Parcel 34 Building B5 – 3rd floor, <br></br>
                        PO Box 11835, New Cairo, Egypt   
                        </p>
                        <div className='location-div'>
                            <div className='d-flex gap-2 align-items-center'><img src="./location.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./phone.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./map.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-lg-4 ps-4 position-relative card' style={{
                    backgroundImage:"url(./toronto.webp)",
                    backgroundSize:"cover"
                    }}>
                    <div className='card-content'>
                        <h4>Toronto</h4>
                        <p>L3280 Bloor Street West
                        Centre Tower,<br></br>
                        Unit 900, Toronto,
                        Ontario, <br></br>
                        M8X 2X3, Canada
                                       
                        </p>
                        <div className='location-div'>
                            <div className='d-flex gap-2 align-items-center'><img src="./location.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./phone.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./map.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                        </div>
                    </div>
                </div>

                

                <div className='col-12 col-lg-4 ps-4 position-relative card' style={{
                    backgroundImage:"url(./abu-dhabi.webp)",
                    backgroundSize:"cover"
                    }}>
                    <div className='card-content'>
                        <h4>Abu Dhabi</h4>
                        <p>Level 13, Office 1303,
                        HQ Building,<br></br>
                        Al Raha Beach,
                        PO Box 29646, <br></br>
                        Abu Dhabi, UAE            
                        </p>
                        <div className='location-div'>
                            <div className='d-flex gap-2 align-items-center'><img src="./location.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./phone.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./map.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-lg-4 ps-4 position-relative card' style={{
                    backgroundImage:"url(./senagal.webp)",
                    backgroundSize:"cover"
                    }}>
                    <div className='card-content'>
                        <h4>Senegal</h4>
                        <p>Building Focus One 3rd floor,<br></br>
                        14 Avenue Birago Diop, <br></br>
                        Point E Dakar, Senegal                        
                        </p>
                        <div className='location-div'>
                            <div className='d-flex gap-2 align-items-center'><img src="./location.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./phone.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./map.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-lg-4 ps-4 position-relative card' style={{
                    backgroundImage:"url(./angola.webp)",
                    backgroundSize:"cover"
                    }}>
                    <div className='card-content'>
                        <h4>Angola</h4>
                        <p>Building Sky One 5th floor,<br></br>
                        Office 7, Street Marechal, <br></br>
                        Brós Tito, nº47, Luanda – Angola
                                                        
                        </p>
                        <div className='location-div'>
                            <div className='d-flex gap-2 align-items-center'><img src="./location.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./phone.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                            <div className='d-flex gap-2 align-items-center'><img src="./map.svg" alt="" style={{width:"20px", height:"20px"}} className='location-image'/>info.dubai@innovogroup.com</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        
    </div>

    {/* email section            */}

    <div><Toaster/></div>

    <section className='email-section'>
                <div>
                    <h1>How can we help you</h1>
                    <h5>Looking for more information or have a question? Email us at <strong>info@innovogroup.com</strong> or fill in the form below and we’ll get back to you.</h5>
                </div>

                <form className='email-form mt-4 d-flex flex-column gap-4' onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='col col-lg-4 d-flex flex-column'>
                            <div><label htmlFor="Name" className={`${focusStates.name ? "label-focused":"label-blur"}`}>Name *</label></div>
                            <input type="text" {...register("name")} onFocus={()=>handleFocus('name')} onBlur={()=>handleBlur('name')}/>
                        </div> 
                        <div className='col col-lg-4 d-flex flex-column'>
                        <div><label htmlFor="Email" className={`${focusStates.email ? "label-focused":"label-blur"}`}>Email *</label></div>
                            <input type="text" {...register("email")} onFocus={()=>handleFocus('email')} onBlur={()=>handleBlur('email')}/>
                        </div> 
                        <div className='col col-lg-4 d-flex flex-column'>
                        <div><label htmlFor="Phone" className={`${focusStates.phone ? "label-focused":"label-blur"}`}>Phone *</label></div>
                            <input type="text" {...register("phone")} onFocus={()=>handleFocus('phone')} onBlur={()=>handleBlur('phone')}/>
                        </div> 
                    </div>   
                    <div className='row'>
                        <div className='col-12 d-flex flex-column'>
                        <div><label htmlFor="Message" className={`${focusStates.message ? "label-focused":"label-blur"}`}>Message *</label></div>
                            <textarea name="" id="" {...register("message")} onFocus={()=>handleFocus('message')} onBlur={()=>handleBlur('message')}></textarea>
                        </div>
                    </div>

                    <div>
                        <button type='submit'  className='rounded-pill d-flex align-items-center read-more-button gap-2 mt-5'>Send<span className='rounded-circle button-span'><i class="bi bi-arrow-right w-100 h-100 d-flex align-items-center justify-content-center"></i></span></button> 
                    </div>
                    
                </form>  

                
                
                
        </section>


    </>
  )
}

export default Contact