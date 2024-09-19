import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DropdownContextProvider from './contexts/navbarDropdownContext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DropdownContextProvider>
    <App />
    </DropdownContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
