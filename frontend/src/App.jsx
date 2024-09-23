import AdminLayout from './adminlayout/AdminLayout'
import './App.css'
import LoginProtector from './components/adminComponents/LoginProtector'
import Protector from './components/adminComponents/Protector'
import Layout from './layout/Layout'
import AdminContacts from './pages/adminPages/AdminContacts'
import AdminDashboard from './pages/adminPages/AdminDashboard'
import AdminLogin from './pages/adminPages/AdminLogin'
import Contact from './pages/userPages/Contact'
import Home from './pages/userPages/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Route>
      
      <Route path='' element={<AdminLayout/>}>
        <Route path='/admin' element={<LoginProtector><AdminLogin/></LoginProtector>}></Route>
      </Route>
      

        <Route path='/admin/dashboard' element={<Protector><AdminDashboard/></Protector>}>
            <Route path='contacts' element={<AdminContacts/>}></Route>
        </Route>
      

      </Routes>
    </>
  )
}

export default App
