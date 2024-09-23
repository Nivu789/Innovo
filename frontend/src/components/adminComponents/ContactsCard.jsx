import React, { useState } from 'react'


const ContactsCard = ({message,index}) => {
    const [isOpen,setIsOpen] = useState(false)

    return (
        <>
        <div className='shadow-sm p-2'>
            <div className='d-flex gap-3'>
                <div>Name : {message.name}</div>
                <div>Email : {message.email}</div>
                <div>Phone : {message.phone}</div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="d-flex gap-1 accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                        Message
                        <i class={`bi ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`} onClick={() => setIsOpen(!isOpen)}></i>
                    </button>
                </h2>
                <div id={`collapse${index}`} class={`${isOpen ? "show":"collapse"} transition  accordion-collapse`}>
                    <div class="accordion-body">
                        <strong>{message.message}</strong>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactsCard