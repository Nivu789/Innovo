import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({content,setContent}) => {

    return(
           
        <ReactQuill theme="snow" value={content} onChange={setContent} style={{height:"100%"}}/>
        
    )

}

export default QuillEditor