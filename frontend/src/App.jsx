import AdminLayout from './adminlayout/AdminLayout'
import './App.css'
import LoginProtector from './components/adminComponents/LoginProtector'
import Protector from './components/adminComponents/Protector'
import Layout from './layout/Layout'
import AdminContacts from './pages/adminPages/AdminContacts'
import AdminDashboard from './pages/adminPages/AdminDashboard'
import AdminLogin from './pages/adminPages/AdminLogin'
import EditUI from './pages/adminPages/EditUI'
import Contact from './pages/userPages/Contact'
import Home from './pages/userPages/Home'
import {Routes,Route} from 'react-router-dom'
import News from './pages/userPages/News'
import AdminNews from './pages/adminPages/AdminNews'
import QuillEditor from './components/adminComponents/QuillEditor'
import AddNews from './pages/adminPages/AddNews'
import EditNews from './pages/adminPages/EditNews'
import IndiNews from './pages/userPages/IndiNews'



function App() {
  
  return (
    <>
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/news/:newsId' element={<IndiNews/>}></Route>
      </Route>
      
      <Route path='' element={<AdminLayout/>}>
        <Route path='/admin' element={<LoginProtector><AdminLogin/></LoginProtector>}></Route>
      </Route>
      


        <Route path='/admin/dashboard' element={<Protector><AdminDashboard/></Protector>}>
            <Route path='contacts' element={<AdminContacts/>}></Route>
            <Route path='news' element={<AdminNews/>}></Route>
            <Route path='addnews' element={<AddNews/>}></Route>
            <Route path='editnews/:newsId' element={<EditNews/>}></Route>
            <Route path='edit-ui/:pageName' element={<EditUI/>}></Route>
            {/* <Route path='edit-ui/:pageName/:sectionId' element={<EditUiSection/>}></Route> */}
        </Route>
      
      </Routes>
    </>
  )
}

export default App
