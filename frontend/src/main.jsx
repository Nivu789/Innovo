import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DropdownContextProvider from './contexts/navbarDropdownContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import DocumentIdContextProvider from './contexts/documentIdContext.jsx'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <DropdownContextProvider>
    <DocumentIdContextProvider>
    <App />
    </DocumentIdContextProvider>
    </DropdownContextProvider>
    </BrowserRouter>

)
