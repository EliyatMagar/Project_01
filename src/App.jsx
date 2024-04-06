import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Home from "./component/Home"
import Jobs from "./component/Jobs"
import Companies from "./component/Companies"
import About from "./component/About"
import Nopage from "./component/Nopage"
import Navbar from './component/Navbar'
import SignUp from "./component/Sign_up"
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='jobs' element={<Jobs/>}></Route>
        <Route path='companies' element={<Companies/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='signUp' element={<SignUp/>}></Route>
        <Route path='*' element={<Nopage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App