import React, { useState } from 'react'
import ContactsCard from '../../components/adminComponents/ContactsCard'
import { useFetchContactMessages } from '../../hooks/adminhooks/useFetchContactMessages'

const AdminContacts = () => {

    const {messages,loading} = useFetchContactMessages()

    return (
        <div className='ps-3 w-100 pe-3'>
            <div className='fs-2'>Contacts</div>

            <div className='w-100'>
                {
                loading ? 
                <div>Loading Data.....</div>
                :
                messages.map((item,index)=>(
                    <ContactsCard message={item} index={index}/>
                ))
                }   
            </div>
        </div>
    )
}

export default AdminContacts