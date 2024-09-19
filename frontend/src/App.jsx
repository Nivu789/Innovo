import './App.css'
import Layout from './layout/layout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Route>
      </Routes>
    </>
  )
}

export default App
