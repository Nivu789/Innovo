import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='row footer position-relative'>
        <div className='col-9'>
            <div className='row'>
                <div className='col'>
                    <img src="/logo.svg" alt="" style={{width:"200px"}}/>
                </div>
                <div className='col'>
                <div className='row d-flex' style={{marginLeft:"-200px",paddingRight:"60px"}}>
                    <div className='col-4'>
                        <p>Projects</p>
                        <p>Sustainability</p>
                        <p>HSE</p>
                    </div>

                    <div className='col-4'>
                        <p>About Us</p>
                        <p>Innovation</p>
                        <p>Our People</p>
                    </div>

                    <div className='col-4'>
                        <p>Careers</p>
                        <p>Contact Us</p>
                        <p>Vendor Portal</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='col-3'>
            <div className='d-flex gap-3 justify-content-end' style={{paddingRight:"130px"}}>
                <div className='rounded-circle border border-black d-flex justify-content-center align-items-center' style={{width:"45px",height:"45px"}}><i class="fa-brands fa-linkedin-in fs-5"></i></div>
                <div className='rounded-circle border border-black d-flex justify-content-center align-items-center' style={{width:"45px",height:"45px"}}><i class="fa-brands fa-instagram fs-5"></i></div>
                <div className='rounded-circle border border-black d-flex justify-content-center align-items-center' style={{width:"45px",height:"45px"}}><i class="fa-brands fa-youtube fs-5"></i></div>
            </div>
        </div>

        <div style={{paddingLeft:"130px",paddingRight:"130px"}}>
            <hr className='border-black'></hr>
        </div>

        <div className='d-flex justify-content-between' style={{fontSize:"9pt",paddingLeft:"130px",paddingRight:"130px"}}>
            <div>
                © INNOVO 2024 All rights reserved. By Global Surf
            </div>
            <div className='d-flex justify-content-between' style={{gap:"35px"}}>
                <div>Terms & Conditions</div>
                <div>Privacy & Cookie Policy</div>
                <div>Modern Slavery Statement</div>
            </div>
        </div>
    
    </div>

  )
}

export default Footer