import React, { useState } from 'react'
import ContactsCard from '../../components/adminComponents/ContactsCard'
import { useFetchContactMessages } from '../../hooks/adminhooks/useFetchContactMessages'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver'
import moment from 'moment'

const AdminContacts = () => {

    const {messages,loading} = useFetchContactMessages()

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(messages);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
        saveAs(blob, `${moment(Date.now()).format("DD-MM-yy")}-contactList.xlsx`);
      };
    
    return (
        <div className='ps-4 w-100 pe-4 pt-3'>
            <div className='fs-2 d-flex justify-content-between align-items-center'>
                <div>Contacts</div>
                <div><button onClick={exportToExcel} className='btn btn-primary d-flex gap-2'><i class="bi bi-file-earmark-spreadsheet"></i>Export to excel</button></div>
            </div>

            <div className='w-100 d-flex flex-column gap-4 pt-3'>
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