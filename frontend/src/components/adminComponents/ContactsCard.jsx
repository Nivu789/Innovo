import React, { useState } from 'react'


const ContactsCard = ({ message, index }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='shadow-sm p-2 pb-2 d-flex flex-column gap-3 rounded bg-dark text-white'>
                <div className='d-flex gap-3 fs-5'>
                    <div>Name : {message.name}</div>
                    <div>Email : {message.email}</div>
                    <div>Phone : {message.phone}</div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button style={{border:"none"}} class="d-flex p-2 align-items-center w-100 justify-content-between fs-6 rounded shadow-sm" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                            <div>Message</div>
                            <div className=''><i class={`bi ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i></div>
                        </button>
                    </h2>
                    <div id={`collapse${index}`} class={`${isOpen ? "show" : "collapse"} transition  accordion-collapse`}>
                        <div class="accordion-body pt-2">
                            <strong>{message.message}</strong>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ContactsCard